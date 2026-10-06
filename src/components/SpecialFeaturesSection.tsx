import React from "react";
import { motion } from "framer-motion";
import specialTextSvg from "../assets/special_text.svg";
import whiteSpecialTextSvg from "../assets/white_special_text.svg";
export const SpecialFeaturesSection: React.FC = () => {
    return (
        <section className="relative w-full min-h-[85vh] pt-24 pb-16 lg:pt-40 lg:pb-20 px-3 md:px-8 flex flex-col justify-center">
            {/* Tiêu đề chính */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-start mb-16 md:mb-32 px-2 md:pl-10"
            >
                {/* Khối chữ bên trái */}
                <div
                    className="flex flex-col items-center md:items-start text-center md:text-left z-30 relative"
                    style={{
                        fontFamily: '"Goldman", sans-serif'
                    }}
                >
                    <p
                        className="text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] lg:text-[4rem] font-bold text-white mb-0 leading-none"
                        style={{ textShadow: "0px 4px 20px #000000" }}
                    >
                        Điều gì khiến
                    </p>
                    <div className="relative flex items-center">
                        <span
                            className="text-[4rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] font-bold text-white leading-none relative z-20"
                            style={{ textShadow: "0px 4px 20px #000000" }}
                        >
                            Vidimi
                        </span>

                        {/* Chữ Đặc biệt xoay nghiêng */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, type: "spring", bounce: 0.45, delay: 0.2 }}
                            className="absolute left-[30%] sm:left-[45%] md:left-[65%] lg:left-[95%] -top-[80%] sm:-top-[100%] md:-top-[140%] lg:-top-[175%] z-10 w-[280px] sm:w-[350px] md:w-[480px] lg:w-[630px]"
                        >
                            <div className="relative w-full h-full">
                                {/* Lớp SVG trắng (Nằm dưới cùng, đóng vai trò viền và bóng) */}
                                <img
                                    src={whiteSpecialTextSvg}
                                    alt="Đặc biệt trắng"
                                    className="w-full absolute inset-0 drop-shadow-2xl"
                                />

                                {/* Lớp SVG màu (Nằm trên) */}
                                <img
                                    src={specialTextSvg}
                                    alt="Đặc biệt màu"
                                    className="w-full relative z-10"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
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
                    className="glass-feature-card p-4 sm:p-6 flex flex-col items-center justify-start text-center aspect-square sm:aspect-auto sm:min-h-[250px]"
                >
                    <h3
                        className="text-base sm:text-xl md:text-2xl font-black text-white tracking-tight mb-2 sm:mb-4 leading-snug"
                        style={{ textShadow: "0px 4px 15px rgba(0,0,0,0.8)" }}
                    >
                        Tích Từ Mọi<br />Thương Hiệu
                    </h3>
                    <p
                        className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal italic"
                        style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}
                    >
                        Hàng ngàn hóa đơn<br />từ mọi thương hiệu
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-feature-card p-4 sm:p-6 flex flex-col items-center justify-start text-center aspect-square sm:aspect-auto sm:min-h-[250px]"
                >
                    <h3
                        className="text-base sm:text-xl md:text-2xl font-black text-white tracking-tight mb-2 sm:mb-4 leading-snug"
                        style={{ textShadow: "0px 4px 15px rgba(0,0,0,0.8)" }}
                    >
                        Điểm Không<br />Giới Hạn
                    </h3>
                    <p
                        className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal italic"
                        style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}
                    >
                        Tích lũy điểm mà<br />không mất về thời<br />hạn. Điểm của bạn<br />luôn có giá trị.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-feature-card p-4 sm:p-6 flex flex-col items-center justify-start text-center aspect-square sm:aspect-auto sm:min-h-[250px]"
                >
                    <h3
                        className="text-base sm:text-xl md:text-2xl font-black text-white tracking-tight mb-2 sm:mb-4 leading-snug"
                        style={{ textShadow: "0px 4px 15px rgba(0,0,0,0.8)" }}
                    >
                        Tự Động<br />Nhận Diện
                    </h3>
                    <p
                        className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal italic"
                        style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}
                    >
                        Không cần nhập<br />công cụ thủ công.<br />Chụp hóa đơn một<br />lần, AI xử lý tất cả.
                    </p>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-feature-card p-4 sm:p-6 flex flex-col items-center justify-start text-center aspect-square sm:aspect-auto sm:min-h-[250px]"
                >
                    <h3
                        className="text-base sm:text-xl md:text-2xl font-black text-white tracking-tight mb-2 sm:mb-4 leading-snug"
                        style={{ textShadow: "0px 4px 15px rgba(0,0,0,0.8)" }}
                    >
                        Nhanh chóng<br />Tiện lợi
                    </h3>
                    <p
                        className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal italic"
                        style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}
                    >
                        Mua sắm ở bất kỳ đâu,<br />bất kỳ lúc nào. Vidimi<br />đã sẵn sàng ghi điểm<br />nhận của bạn.
                    </p>
                </motion.div>

            </motion.div>
        </section>
    );
};