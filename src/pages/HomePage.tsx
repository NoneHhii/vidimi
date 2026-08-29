import type React from "react";
import { motion } from "framer-motion";
import { Receipt, Gift, Sparkles, Coins } from "lucide-react";
import bannerBg from "../assets/banner.jpg";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { VideoSection } from "../components/VideoSection";

const HomePage: React.FC = () => {
    return (
        <div className="w-full bg-slate-900 selection:bg-orange-500 selection:text-white font-sans">
            {/* Hero Banner Section */}
            <section
                className="relative w-full min-h-[520px] md:h-[580px] bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
                style={{ backgroundImage: `url(${bannerBg})` }}
            >
                {/* Lớp phủ màu */}
                <div className="absolute inset-0 bg-[#b600c4] mix-blend-color opacity-40 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#b600c4] via-[#b600c4]/15 to-[#550060] pointer-events-none"></div>



                {/* Khối nội dung chính */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between pt-16 lg:pt-0">
                    {/* Cột trái: Văn bản */}
                    <div className="max-w-xl z-20 text-center lg:text-left flex flex-col items-center lg:items-start">
                        {/* Tag Badge */}
                        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-semibold tracking-wide shadow-sm">
                            Tích điểm từ bất kỳ hóa đơn nào
                        </div>

                        {/* Tiêu đề chính */}
                        <h1
                            className="
                                text-white
                                font-extrabold
                                tracking-[-0.045em]
                                leading-[0.95]
                                mb-5
                                drop-shadow-[0_6px_8px_rgba(0,0,0,0.35)]
                            "
                            style={{
                                fontFamily: '"Be Vietnam Pro", sans-serif',
                                fontSize: "clamp(3.2rem, 6.5vw, 5rem)",
                            }}
                        >
                            <span className="block">
                                Đừng để
                            </span>

                            <span className="block">
                                khoản chi
                            </span>

                            <span
                                className="
                                    block
                                    mt-1
                                    tracking-[-0.04em]
                                "
                                style={{
                                    fontSize: "0.9em",
                                }}
                            >
                                trôi đi...
                            </span>
                        </h1>

                        {/* Mô tả phụ */}
                        <p
                            className="text-white/90 text-xs md:text-sm lg:text-base max-w-md italic font-normal leading-relaxed drop-shadow-md mt-2"
                            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                        >
                            Chụp bất kỳ hóa đơn mua sắm ở bất kỳ địa điểm nào và tích lũy điểm thưởng để nhận được những phần quà hoặc ưu đãi mà chúng tôi mang lại.
                        </p>
                    </div>

                    {/* Cột phải: Đồ họa bay 3D */}
                    <div className="flex relative w-full lg:w-[500px] h-[300px] lg:h-[450px] items-center justify-center perspective-[1000px] lg:right-4 mt-8 lg:mt-0 scale-[0.65] sm:scale-75 lg:scale-100 origin-center">
                        {/* Hóa đơn từ trái bay sang */}
                        <motion.div
                            initial={{ x: -280, y: 40, opacity: 0, rotateZ: -15, rotateY: 30 }}
                            animate={{ x: -100, y: 0, opacity: 1, rotateZ: -10, rotateY: 15 }}
                            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
                            className="absolute z-10 w-64 bg-white/5 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                        >
                            <div className="flex items-center gap-4 border-b border-white/20 pb-4 mb-4">
                                <div className="p-3 bg-cyan-400/20 rounded-xl text-cyan-300">
                                    <Receipt className="w-8 h-8" />
                                </div>
                                <div className="text-white">
                                    <p className="text-[11px] uppercase font-bold text-white/50">Siêu thị</p>
                                    <p className="text-sm font-bold">Hóa đơn 500k</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-sm text-white/70">
                                <span>Trạng thái:</span>
                                <span className="text-emerald-400 font-bold">Đã duyệt</span>
                            </div>
                        </motion.div>

                        {/* Hộp quà từ phải bay sang */}
                        <motion.div
                            initial={{ x: 280, y: -40, opacity: 0, rotateZ: 15, rotateY: -30 }}
                            animate={{ x: 100, y: 0, opacity: 1, rotateZ: 10, rotateY: -15 }}
                            transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.4 }}
                            className="absolute z-20 w-64 bg-gradient-to-tr from-[#8a0096]/80 to-pink-700/80 backdrop-blur-2xl rounded-2xl p-6 border border-pink-400/30 shadow-[0_25px_50px_rgba(100,0,110,0.6)]"
                        >
                            <div className="flex items-center gap-4 border-b border-white/20 pb-4 mb-4">
                                <div className="p-3 bg-white/20 rounded-xl text-white shadow-inner">
                                    <Gift className="w-8 h-8" />
                                </div>
                                <div className="text-white">
                                    <p className="text-[11px] uppercase font-bold text-white/70">Phần thưởng</p>
                                    <p className="text-sm font-bold">Voucher 50k</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-sm text-white">
                                <span>+500 Điểm</span>
                                <Sparkles className="w-5 h-5 text-amber-300" />
                            </div>
                        </motion.div>

                        {/* Coin bay lơ lửng ở giữa */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, y: [-15, 15, -15] }}
                            transition={{
                                scale: { duration: 0.6, delay: 0.8, type: "spring" },
                                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="absolute z-30 w-20 h-20 bg-gradient-to-tr from-amber-600 to-orange-700 rounded-full flex items-center justify-center border-[3px] border-white/40 shadow-[0_0_40px_rgba(180,83,9,0.6)]"
                        >
                            <Coins className="w-10 h-10 text-white drop-shadow-md" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <HowItWorksSection />

            {/* Video Section */}
            <div className="-mt-[2px] relative z-10">
                <VideoSection />
            </div>
        </div>
    );
};

export default HomePage;