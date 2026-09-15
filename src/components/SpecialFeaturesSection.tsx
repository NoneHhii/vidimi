import React from "react";
import { motion } from "framer-motion";
import specialTextSvg from "../assets/special_text.svg";

export const SpecialFeaturesSection: React.FC = () => {
    return (
        <section className="relative w-full min-h-[85vh] py-16 px-3 md:px-8 flex flex-col justify-center overflow-hidden">
            {/* Tiêu đề chính */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-6xl mx-auto flex flex-row flex-wrap sm:flex-nowrap items-center justify-center md:justify-start mb-16 md:mb-32 px-2 md:pl-10"
            >
                {/* Khối chữ bên trái */}
                <div
                    className="flex flex-col items-center md:items-start text-center md:text-left z-30 relative"
                    style={{ filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.7))" }}
                >
                    <p className="text-[1.8rem] sm:text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-white tracking-wide mb-0 leading-none">
                        Điều gì khiến
                    </p>
                    <span className="text-[3rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-black text-white tracking-wider leading-none mt-2">
                        Vidimi
                    </span>
                </div>

                {/* Chữ Đặc biệt xoay nghiêng bên phải */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: -15 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, type: "spring", bounce: 0.45, delay: 0.2 }}
                    className="relative inline-block select-none z-10 md:-mt-4 lg:-mt-10 -ml-2 sm:-ml-2 md:ml-4 lg:ml-4 text-[3.2rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[6rem] font-black tracking-widest"
                    style={{
                        fontFamily: '"Goldman", sans-serif',
                        lineHeight: "1.1"
                    }}
                >
                    {/* LỚP NỀN (Nằm dưới cùng): Viền trắng 15px + Bóng đổ đen */}
                    {/* Để có 15px viền ngoài, dùng WebkitTextStroke 30px */}
                    <span
                        className="absolute inset-0 z-0 text-white"
                        style={{
                            WebkitTextStroke: "30px white",
                            filter: "drop-shadow(0px 4px 20px rgba(0,0,0,1))"
                        }}
                    >
                        Đặc biệt?
                    </span>

                    {/* LỚP TRÊN (Nằm giữa): Viền hồng 10px + Bóng đổ đè lên viền trắng */}
                    {/* Để có 10px viền ngoài, dùng WebkitTextStroke 20px */}
                    <span
                        className="absolute inset-0 z-10 text-[#E802EF]"
                        style={{
                            WebkitTextStroke: "20px #E802EF",
                            filter: "drop-shadow(0px 4px 20px rgba(0,0,0,1))"
                        }}
                    >
                        Đặc biệt?
                    </span>

                    {/* LÕI CHỮ TRẮNG (Nằm trên cùng): Trắng tinh, che lấp phần stroke lẹm vào trong */}
                    <span
                        className="relative z-20 text-white"
                    >
                        Đặc biệt?
                    </span>
                </motion.div>
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
                    className="glass-feature-card p-4 sm:p-6 flex flex-col items-center justify-start text-center aspect-square sm:aspect-auto sm:min-h-[250px] transition-transform duration-300 hover:-translate-y-2"
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
                    className="glass-feature-card p-4 sm:p-6 flex flex-col items-center justify-start text-center aspect-square sm:aspect-auto sm:min-h-[250px] transition-transform duration-300 hover:-translate-y-2"
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
                    className="glass-feature-card p-4 sm:p-6 flex flex-col items-center justify-start text-center aspect-square sm:aspect-auto sm:min-h-[250px] transition-transform duration-300 hover:-translate-y-2"
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
                    className="glass-feature-card p-4 sm:p-6 flex flex-col items-center justify-start text-center aspect-square sm:aspect-auto sm:min-h-[250px] transition-transform duration-300 hover:-translate-y-2"
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