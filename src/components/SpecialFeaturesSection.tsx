import React from "react";
import { motion } from "framer-motion";

export const SpecialFeaturesSection: React.FC = () => {
    return (
        <section className="relative w-full min-h-[85vh] py-16 px-4 md:px-8 flex flex-col justify-center overflow-hidden">
            {/* Tiêu đề chính */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-6xl mx-auto flex flex-row flex-wrap sm:flex-nowrap items-center justify-center md:justify-start gap-4 md:gap-8 mb-16 md:mb-32 px-2 md:pl-10"
            >
                {/* Khối chữ bên trái */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left z-20">
                    <p className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide mb-0 drop-shadow-md">
                        Điều gì khiến
                    </p>
                    <span className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-wider drop-shadow-lg leading-none mt-1 md:mt-2">
                        Vidimi
                    </span>
                </div>

                {/* Chữ Đặc biệt xoay nghiêng bên phải */}
                <motion.span
                    initial={{ opacity: 0, scale: 0.5, rotate: -38 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: -15 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.5, delay: 0.2 }}
                    className="text-[2.5rem] sm:text-6xl md:text-[5rem] font-bold transform -rotate-[15deg] inline-block text-white z-10 md:-mt-10 lg:-mt-34 ml-2 sm:ml-0"
                    style={{
                        WebkitTextStroke: "2px #d946ef", /* fuchsia-500 (mỏng hơn chút trên mobile) */
                        textShadow: "2px 2px 0px #d946ef, 4px 4px 0px #d946ef, 6px 6px 0px #d946ef, 8px 8px 15px rgba(0,0,0,0.5)",
                        fontFamily: '"Goldman", sans-serif',
                        lineHeight: '1.2'
                    }}
                >
                    Đặc biệt?
                </motion.span>
            </motion.div>

            {/* 4 Thẻ Tính năng (Glassmorphism dạng card mờ) */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, staggerChildren: 0.15 }}
                className="relative z-20 w-full max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 px-2 sm:px-4"
            >

                {/* Card 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-xl border border-white/40 rounded-xl sm:rounded-2xl p-3 sm:p-5 flex flex-col items-center justify-start text-center min-h-[140px] sm:min-h-[170px] shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:border-white/70 transition-all hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
                >
                    <h3 className="text-sm sm:text-lg font-black text-white uppercase tracking-tight mb-1.5 sm:mb-2.5 drop-shadow leading-tight">
                        Tích Từ Mọi<br />Thương Hiệu
                    </h3>
                    <p className="text-[10px] sm:text-[13px] text-white/90 leading-relaxed font-normal">
                        Hàng ngàn hóa đơn<br />từ mọi thương hiệu
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-xl border border-white/40 rounded-xl sm:rounded-2xl p-3 sm:p-5 flex flex-col items-center justify-start text-center min-h-[140px] sm:min-h-[170px] shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:border-white/70 transition-all hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
                >
                    <h3 className="text-sm sm:text-lg font-black text-white uppercase tracking-tight mb-1.5 sm:mb-2.5 drop-shadow leading-tight">
                        Điểm Không<br />Giới Hạn
                    </h3>
                    <p className="text-[10px] sm:text-[13px] text-white/90 leading-relaxed font-normal">
                        Tích lũy điểm không giới hạn thời gian.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-xl border border-white/40 rounded-xl sm:rounded-2xl p-3 sm:p-5 flex flex-col items-center justify-start text-center min-h-[140px] sm:min-h-[170px] shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:border-white/70 transition-all hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
                >
                    <h3 className="text-sm sm:text-lg font-black text-white uppercase tracking-tight mb-1.5 sm:mb-2.5 drop-shadow leading-tight">
                        Tự Động<br />Nhận Diện
                    </h3>
                    <p className="text-[10px] sm:text-[13px] text-white/90 leading-relaxed font-normal">
                        Không cần nhập thủ công. AI xử lý tất cả.
                    </p>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-xl border border-white/40 rounded-xl sm:rounded-2xl p-3 sm:p-5 flex flex-col items-center justify-start text-center min-h-[140px] sm:min-h-[170px] shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:border-white/70 transition-all hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
                >
                    <h3 className="text-sm sm:text-lg font-black text-white uppercase tracking-tight mb-1.5 sm:mb-2.5 drop-shadow leading-tight">
                        Nhanh chóng<br />Tiện lợi
                    </h3>
                    <p className="text-[10px] sm:text-[13px] text-white/90 leading-relaxed font-normal">
                        Sẵn sàng ghi điểm bất kỳ đâu, bất kỳ lúc nào.
                    </p>
                </motion.div>

            </motion.div>
        </section>
    );
};