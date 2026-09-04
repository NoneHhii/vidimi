import React from "react";
import { StepCard } from "./StepCard";
import { ScanLine, CircleDollarSign, Gift } from "lucide-react";
import { motion } from "framer-motion";

export const HowItWorksSection: React.FC = () => {
    return (
        <section
            className="relative w-full min-h-screen text-white selection:bg-[#b600c4] selection:text-white font-sans flex flex-col overflow-hidden"
        >
            {/* KHU VỰC TEXT (Có nền #1E0A4D như yêu cầu) */}
            <div className="w-full bg-[#1E0A4D] relative z-30 pt-24 pb-16 px-4 md:px-8 flex flex-col items-center shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-xl"
                >
                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl font-[900] tracking-wide text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
                    >
                        Cách hoạt động
                    </h2>
                    <p className="mt-4 text-sm sm:text-base text-purple-100/90 font-medium tracking-wide">
                        3 bước đơn giản biến hóa đơn thành điểm thưởng
                    </p>
                </motion.div>
            </div>

            {/* KHU VỰC TRUNG TÂM - 3 THẺ TĨNH TRÊN NỀN TRONG SUỐT (Thấy trọn vẹn Parallax) */}
            <div className="relative z-20 w-full flex-1 flex flex-col justify-center px-4 md:px-8 py-10">
                {/* Các thẻ Items */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, staggerChildren: 0.2 }}
                    className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start pt-6 pb-12"
                >
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                        <StepCard
                            step="01"
                            title="Chụp hóa đơn"
                            desc="Chụp ảnh hóa đơn của bạn bằng camera điện thoại và tải trực tiếp lên Vidimi."
                            icon={ScanLine}
                        />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                        <StepCard
                            step="02"
                            title="Tích điểm"
                            desc="Tự động tích điểm cho tài khoản của bạn dựa trên giá trị hóa đơn."
                            icon={CircleDollarSign}
                        />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
                        <StepCard
                            step="03"
                            title="Đổi quà"
                            desc="Tích lũy điểm và đổi quà tặng, voucher hoặc các ưu đãi hấp dẫn khác."
                            icon={Gift}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};