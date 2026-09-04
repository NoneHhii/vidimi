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

            // Đảm bảo canvas có kích thước khớp với video
            if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
                canvas.width = video.videoWidth || width;
                canvas.height = video.videoHeight || height;
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
            const length = data.length;

            // Duyệt qua từng pixel (mỗi pixel chiếm 4 vị trí r, g, b, a)
            for (let i = 0; i < length; i += 4) {
                const r = data[i + 0];
                const g = data[i + 1];
                const b = data[i + 2];

                // Thuật toán Chroma Key (phát hiện phông xanh lá)
                // Phông xanh chuẩn thường có G rất cao, R và B thấp.
                // Tùy chỉnh thông số này nếu video xanh đậm/nhạt khác nhau.
                if (g > 100 && g > r * 1.4 && g > b * 1.4) {
                    // Biến điểm ảnh thành trong suốt
                    data[i + 3] = 0;
                }
                // Có thể khử ám xanh ở viền (Spill Suppression)
                else if (g > r && g > b) {
                    data[i + 1] = Math.max(r, b); // Giảm kênh green xuống
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
        <div className={`relative ${className}`} style={{ width: '100%', maxWidth: width, aspectRatio: `${width}/${height}` }}>
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
