import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { Camera, Coins, Gift, QrCode, CheckCircle2, Sparkles } from "lucide-react";
import { StepCard } from "./StepCard";

export const HowItWorksSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    const viewfinderControls = useAnimationControls();
    const laserControls = useAnimationControls();
    const [phase, setPhase] = useState<"idle" | "focusing" | "scanning" | "burst" | "done">("idle");

    useEffect(() => {
        if (isInView && phase === "idle") {
            const runAnimation = async () => {
                setPhase("focusing");

                // 1. Khung cam chạy xuống (ôm sát bill)
                await viewfinderControls.start({
                    scale: [1.3, 1],
                    y: [-40, 0],
                    opacity: [0, 1],
                    transition: { duration: 0.6, ease: "easeOut" }
                });

                setPhase("scanning");

                // 2. Quét tia laser
                await laserControls.start({
                    top: ["0%", "100%", "0%"],
                    opacity: [0, 1, 1, 0],
                    transition: { duration: 1.6, ease: "easeInOut", times: [0, 0.1, 0.9, 1] }
                });

                // 3. Nổ quà
                setPhase("burst");

                // Đợi nổ quà xong
                await new Promise(resolve => setTimeout(resolve, 700));

                // 4. Hiển thị 3 cards
                setPhase("done");
            };

            runAnimation();
        }
    }, [isInView, phase, viewfinderControls, laserControls]);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen bg-gradient-to-b from-[#550060] via-[#1c0022] to-[#550060] text-white selection:bg-[#b600c4] selection:text-white font-sans flex flex-col justify-between items-center py-12 px-4 md:px-8 overflow-hidden"
        >
            {/* Glow nền tím huyền ảo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#b600c4]/15 rounded-full blur-[150px] pointer-events-none" />

            {/* Tiêu đề Section */}
            <div className="relative z-30 text-center max-w-xl">
                <h2
                    className="text-3xl sm:text-5xl font-[700] tracking-tight uppercase text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
                    style={{ fontFamily: '"Chakra Petch", sans-serif' }}
                >
                    Cách hoạt động
                </h2>
                <p className="mt-2 text-xs sm:text-sm md:text-base text-purple-200/70 font-normal">
                    3 bước đơn giản biến hóa đơn thành điểm thưởng
                </p>
            </div>

            {/* KHU VỰC TRUNG TÂM */}
            <div className="relative z-20 flex-1 flex items-center justify-center w-full max-w-5xl my-8 min-h-[420px]">

                {/* 1. KHUNG CAMERA TỐI GIẢN + BILL */}
                {phase !== "done" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                            opacity: phase === "burst" ? 0 : 1,
                            scale: phase === "burst" ? 0.75 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                        className="absolute flex items-center justify-center"
                    >
                        <div className="relative">
                            {/* Tờ Bill */}
                            <div className="w-64 sm:w-72 bg-white text-slate-900 rounded-xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-slate-100 select-none relative z-10">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                    <div>
                                        <p className="text-[9px] uppercase font-bold tracking-wider text-slate-400">Coffee & Bakery</p>
                                        <h4 className="font-extrabold text-xs text-slate-900">HÓA ĐƠN BÁN HÀNG</h4>
                                    </div>
                                    <QrCode className="w-7 h-7 text-slate-800" />
                                </div>

                                <div className="my-3 space-y-1.5 text-xs">
                                    <div className="flex justify-between text-slate-500 font-medium">
                                        <span>Matcha Latte x1</span>
                                        <span className="font-bold text-slate-800">55.000đ</span>
                                    </div>
                                    <div className="flex justify-between text-slate-500 font-medium">
                                        <span>Croissant x2</span>
                                        <span className="font-bold text-slate-800">70.000đ</span>
                                    </div>
                                    <div className="pt-2 border-t border-dashed border-slate-200 flex justify-between font-black text-slate-900 text-sm">
                                        <span>TỔNG CỘNG</span>
                                        <span className="text-purple-600 font-extrabold">125.000đ</span>
                                    </div>
                                </div>

                                <div className="bg-emerald-50 border border-emerald-300 text-emerald-700 py-1.5 px-3 rounded-lg flex items-center gap-2 text-xs font-bold">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                    <span>+1.250 Điểm thưởng</span>
                                </div>
                            </div>

                            {/* KHUNG VIEWFINDER ÔM SÁT BILL */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={viewfinderControls}
                                className="absolute -inset-3 z-30 pointer-events-none flex flex-col justify-between"
                            >
                                <div className="flex justify-between w-full">
                                    <div className="w-5 h-5 border-t-[2.5px] border-l-[2.5px] border-[#b600c4]" />
                                    <div className="w-5 h-5 border-t-[2.5px] border-r-[2.5px] border-[#b600c4]" />
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                                    <div className="w-3.5 h-[1.5px] bg-[#b600c4]" />
                                    <div className="h-3.5 w-[1.5px] bg-[#b600c4] absolute" />
                                </div>

                                <div className="flex justify-between w-full">
                                    <div className="w-5 h-5 border-b-[2.5px] border-l-[2.5px] border-[#b600c4]" />
                                    <div className="w-5 h-5 border-b-[2.5px] border-r-[2.5px] border-[#b600c4]" />
                                </div>

                                {/* Laser Quét */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={laserControls}
                                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#b600c4] to-transparent shadow-[0_0_12px_#b600c4] pointer-events-none"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {/* 2. HIỆU ỨNG QUÀ & COIN NỔ BÙNG RA (BURST) */}
                {phase === "burst" && (
                    <motion.div
                        initial={{ scale: 0.3, opacity: 0 }}
                        animate={{ scale: 1.8, opacity: [0, 1, 0] }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center"
                    >
                        <div className="relative flex items-center justify-center">
                            <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-amber-400 via-[#b600c4] to-pink-500 blur-2xl opacity-80" />
                            <span className="absolute -top-16 -left-20 text-4xl">🎁</span>
                            <span className="absolute -top-16 right-20 text-3xl">🪙</span>
                            <span className="absolute bottom-6 -left-20 text-3xl">✨</span>
                            <span className="absolute -bottom-16 right-12 text-4xl">🎉</span>

                            <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs border border-white whitespace-nowrap">
                                <Sparkles className="w-4 h-4" /> QUÉT THÀNH CÔNG!
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* 3. THANH NGANG 3 BƯỚC BUNG MỞ RA */}
                {phase === "done" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-4 pointer-events-auto"
                    >
                        {/* Gradient đồng bộ tông Tím - Hồng - Đỏ mượt mà */}
                        <StepCard
                            step="01"
                            title="Chụp hóa đơn"
                            desc="Chụp ảnh hóa đơn mua sắm của bạn bằng camera điện thoại và tải trực tiếp lên Vidimi."
                            icon={Camera}
                            gradient="from-purple-500 to-fuchsia-600"
                            badgeColor="bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                        />
                        <StepCard
                            step="02"
                            title="Tích điểm"
                            desc="Hệ thống AI tự động phân tích hóa đơn và cộng điểm thưởng."
                            icon={Coins}
                            gradient="from-fuchsia-500 to-pink-600"
                            badgeColor="bg-fuchsia-500 text-white shadow-[0_0_15px_rgba(217,70,239,0.5)]"
                        />
                        <StepCard
                            step="03"
                            title="Đổi quà"
                            desc="Quy đổi điểm tích lũy thành voucher mua sắm và quà tặng ưu đãi độc quyền."
                            icon={Gift}
                            gradient="from-pink-500 to-rose-500"
                            badgeColor="bg-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                        />
                    </motion.div>
                )}
            </div>

            {/* Footer */}
            {/* <div className="relative z-20 text-xs text-purple-300/40 uppercase font-mono pb-2">
                Vidimi Reward System
            </div> */}
        </section>
    );
};