import React, { useEffect, useRef } from "react";

interface ChromaKeyVideoProps {
    src: string;
    className?: string;
    width?: number;
    height?: number;
}

export const ChromaKeyVideo: React.FC<ChromaKeyVideoProps> = ({ src, className = "", width = 500, height = 500 }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number | null>(null);
    const isVisibleRef = useRef<boolean>(true);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!video || !canvas || !container) return;

        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return;

        const processFrame = () => {
            // Nếu không hiển thị trong màn hình hoặc video đang dừng, ngắt vòng lặp để tiết kiệm CPU/GPU
            if (!isVisibleRef.current || video.paused || video.ended) {
                requestRef.current = null;
                return;
            }

            // Tối ưu hiệu năng: Giới hạn độ phân giải xử lý ChromaKey
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

            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = frame.data;
            const data32 = new Uint32Array(data.buffer);
            const numPixels = data32.length;

            for (let i = 0; i < numPixels; i++) {
                const pixel = data32[i];
                const r = pixel & 0xff;
                const g = (pixel >> 8) & 0xff;
                const b = (pixel >> 16) & 0xff;

                if (g > 90 && g > r * 1.35 && g > b * 1.35) {
                    data32[i] = 0;
                } else if (g > r && g > b) {
                    const newG = Math.max(r, b);
                    const a = (pixel >> 24) & 0xff;
                    data32[i] = (a << 24) | (b << 16) | (newG << 8) | r;
                }
            }

            ctx.putImageData(frame, 0, 0);

            requestRef.current = requestAnimationFrame(processFrame);
        };

        const startProcessing = () => {
            if (!requestRef.current && isVisibleRef.current && !video.paused) {
                requestRef.current = requestAnimationFrame(processFrame);
            }
        };

        const onPlay = () => {
            startProcessing();
        };

        video.addEventListener("play", onPlay);

        // Tự động dừng canvas + video khi người dùng cuộn ra khỏi tầm nhìn
        const observer = new IntersectionObserver(
            ([entry]) => {
                const isIntersecting = entry.isIntersecting;
                isVisibleRef.current = isIntersecting;

                if (isIntersecting) {
                    video.play().catch(() => { });
                    startProcessing();
                } else {
                    if (requestRef.current) {
                        cancelAnimationFrame(requestRef.current);
                        requestRef.current = null;
                    }
                    video.pause();
                }
            },
            { threshold: 0.05 }
        );

        observer.observe(container);

        // Bắt đầu play video
        video.play().catch(() => { });

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            video.removeEventListener("play", onPlay);
            observer.disconnect();
        };
    }, [width, height]);

    return (
        <div ref={containerRef} className={`relative ${className}`} style={{ width: '100%', aspectRatio: `${width}/${height}` }}>
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
