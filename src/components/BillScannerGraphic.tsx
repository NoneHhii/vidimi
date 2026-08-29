import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Sparkles, QrCode, CheckCircle2 } from "lucide-react";

interface Props {
    progress: MotionValue<number>;
}

export const BillScannerGraphic: React.FC<Props> = ({ progress }) => {
    // Transform values theo scroll progress (0 -> 1)
    const cameraScale = useTransform(progress, [0, 0.25, 0.6, 0.85], [1.3, 1, 1, 0.7]);
    const cameraOpacity = useTransform(progress, [0, 0.1, 0.75, 0.9], [0, 1, 1, 0]);
    const laserTop = useTransform(progress, [0.2, 0.65], ["5%", "95%"]);
    const laserOpacity = useTransform(progress, [0.15, 0.25, 0.6, 0.7], [0, 1, 1, 0]);

    // Hiệu ứng bung quà & coin nổ tung ở giai đoạn cuối (0.6 -> 0.9)
    const burstScale = useTransform(progress, [0.65, 0.85], [0.2, 1.8]);
    const burstOpacity = useTransform(progress, [0.65, 0.75, 0.95, 1], [0, 1, 1, 0]);

    return (
        <div className="relative w-72 sm:w-80 h-96 flex items-center justify-center">
            {/* 1. KHUNG CAMERA SCANNER */}
            <motion.div
                style={{ scale: cameraScale, opacity: cameraOpacity }}
                className="absolute inset-0 pointer-events-none z-30 flex flex-col justify-between p-2"
            >
                {/* 4 Góc Viewfinder Camera */}
                <div className="flex justify-between">
                    <div className="w-8 h-8 border-t-4 border-l-4 border-amber-400 rounded-tl-xl shadow-[0_0_12px_#fbbf24]" />
                    <div className="w-8 h-8 border-t-4 border-r-4 border-amber-400 rounded-tr-xl shadow-[0_0_12px_#fbbf24]" />
                </div>
                <div className="flex justify-between">
                    <div className="w-8 h-8 border-b-4 border-l-4 border-amber-400 rounded-bl-xl shadow-[0_0_12px_#fbbf24]" />
                    <div className="w-8 h-8 border-b-4 border-r-4 border-amber-400 rounded-br-xl shadow-[0_0_12px_#fbbf24]" />
                </div>

                {/* Tia Laser quét hóa đơn */}
                <motion.div
                    style={{ top: laserTop, opacity: laserOpacity }}
                    className="absolute left-4 right-4 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#22d3ee] flex items-center justify-center"
                >
                    <span className="text-[10px] tracking-widest text-cyan-300 font-mono -mt-6 bg-slate-900/80 px-2 py-0.5 rounded border border-cyan-500/30">
                        SCANNING RECEIPT...
                    </span>
                </motion.div>
            </motion.div>

            {/* 2. TỜ HÓA ĐƠN (BILL) VỚI CHIỀU SÂU 3D */}
            <motion.div
                initial={{ rotateY: -10, rotateX: 5 }}
                className="w-60 h-80 bg-gradient-to-b from-white to-slate-100 text-slate-800 rounded-2xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(147,51,234,0.3)] border border-white/60 relative overflow-hidden flex flex-col justify-between"
            >
                <div>
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                        <div>
                            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Coffee & Bakery</p>
                            <h4 className="font-extrabold text-sm text-slate-900">HÓA ĐƠN BÁN HÀNG</h4>
                        </div>
                        <QrCode className="w-8 h-8 text-slate-700" />
                    </div>

                    <div className="mt-3 space-y-1.5 text-xs">
                        <div className="flex justify-between text-slate-500">
                            <span>Matcha Latte x1</span>
                            <span className="font-semibold text-slate-700">55.000đ</span>
                        </div>
                        <div className="flex justify-between text-slate-500">
                            <span>Croissant x2</span>
                            <span className="font-semibold text-slate-700">70.000đ</span>
                        </div>
                        <div className="pt-2 border-t border-dashed border-slate-300 flex justify-between font-black text-slate-900 text-sm">
                            <span>TỔNG CỘNG</span>
                            <span className="text-purple-600">125.000đ</span>
                        </div>
                    </div>
                </div>

                {/* Huy hiệu OCR quét thành công */}
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-2 rounded-xl flex items-center gap-2 text-xs font-bold shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>+1.250 Điểm thưởng</span>
                </div>
            </motion.div>

            {/* 3. HIỆU ỨNG QUÀ & COIN BÙNG NỔ (BURST ANIMATION) */}
            <motion.div
                style={{ scale: burstScale, opacity: burstOpacity }}
                className="absolute inset-0 pointer-events-none z-40 flex items-center justify-center"
            >
                <div className="relative flex items-center justify-center">
                    {/* Vòng hào quang bung to */}
                    <div className="absolute w-40 h-40 rounded-full bg-gradient-to-tr from-amber-400 via-purple-500 to-pink-500 blur-2xl opacity-60" />

                    {/* Các vật phẩm nổ bung ra */}
                    <span className="absolute -top-20 -left-16 text-3xl animate-bounce">🎁</span>
                    <span className="absolute -top-16 right-16 text-3xl">🪙</span>
                    <span className="absolute bottom-10 -left-20 text-3xl">✨</span>
                    <span className="absolute -bottom-16 right-12 text-4xl">🎉</span>
                    <span className="absolute -top-28 text-2xl">⭐</span>

                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black px-4 py-2 rounded-full shadow-2xl flex items-center gap-1.5 border border-white">
                        <Sparkles className="w-4 h-4" /> QUÉT THÀNH CÔNG!
                    </div>
                </div>
            </motion.div>
        </div>
    );
};