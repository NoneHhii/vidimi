import React, { useEffect, useRef } from "react";

interface ChromaKeyVideoProps {
    src: string;
    className?: string;
    width?: number;
    height?: number;
}

export const ChromaKeyVideo: React.FC<ChromaKeyVideoProps> = ({ src, className = "", width = 500, height = 500 }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;

        const processFrame = () => {
            if (video.paused || video.ended) {
                requestRef.current = requestAnimationFrame(processFrame);
                return;
            }

            // Tối ưu hiệu năng: Giới hạn độ phân giải xử lý ChromaKey vừa đủ sắc nét
            const maxDim = 1280;
            let targetW = video.videoWidth || width;
            let targetH = video.videoHeight || height;
            if (targetW > maxDim) {
                targetH = Math.round((targetH * maxDim) / targetW);
                targetW = maxDim;
            }

            if (canvas.width !== targetW || canvas.height !== targetH) {
                canvas.width = targetW;
                canvas.height = targetH;
            }

            if (video.videoWidth === 0 || video.videoHeight === 0) {
                requestRef.current = requestAnimationFrame(processFrame);
                return;
            }

            // Vẽ frame hiện tại của video lên canvas
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Lấy dữ liệu điểm ảnh (pixel data)
            const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = frame.data;
            const data32 = new Uint32Array(data.buffer);
            const numPixels = data32.length;

            // Xử lý Chroma Key siêu tốc bằng 32-bit integer
            for (let i = 0; i < numPixels; i++) {
                const pixel = data32[i];
                const r = pixel & 0xff;
                const g = (pixel >> 8) & 0xff;
                const b = (pixel >> 16) & 0xff;

                // Thuật toán phát hiện phông xanh lá
                if (g > 90 && g > r * 1.35 && g > b * 1.35) {
                    data32[i] = 0; // Trong suốt hoàn toàn
                } else if (g > r && g > b) {
                    // Khử ám viền xanh (Spill suppression)
                    const newG = Math.max(r, b);
                    const a = (pixel >> 24) & 0xff;
                    data32[i] = (a << 24) | (b << 16) | (newG << 8) | r;
                }
            }

            // Ghi dữ liệu ảnh đã tách nền ngược lại canvas
            ctx.putImageData(frame, 0, 0);

            // Gọi lại ở khung hình tiếp theo
            requestRef.current = requestAnimationFrame(processFrame);
        };

        const onPlay = () => {
            requestRef.current = requestAnimationFrame(processFrame);
        };

        video.addEventListener("play", onPlay);

        // Bắt đầu play video
        video.play().catch(e => console.log("Auto-play prevented", e));

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            video.removeEventListener("play", onPlay);
        };
    }, [width, height]);

    return (
        <div className={`relative ${className}`} style={{ width: '100%', aspectRatio: `${width}/${height}` }}>
            {/* Video gốc bị ẩn đi */}
            <video
                ref={videoRef}
                src={src}
                className="hidden"
                autoPlay
                loop
                muted
                playsInline
                crossOrigin="anonymous"
            />

            {/* Canvas hiển thị video đã tách nền */}
            <canvas
                ref={canvasRef}
                className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            />
        </div>
    );
};
