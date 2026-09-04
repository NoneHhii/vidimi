import React from "react";
import { motion } from "framer-motion";

// Assets
import imgCurvedText from "../assets/Vidimi web/oaN2DyeXIurSg3Mg-1783507898-dm 1.png";
import imgDog from "../assets/Vidimi web/Chobong 1.png";
import imgGundam from "../assets/Vidimi web/gundam 1.png";
import imgGrab from "../assets/Vidimi web/grab 1.png";
import imgCoffee from "../assets/Vidimi web/thekaffe 1.png";
import imgFigure from "../assets/Vidimi web/flower know 1.png";
import imgTshirt from "../assets/Vidimi web/aos 1.png";

export const RewardsSection: React.FC = () => {
    return (
        <section
            className="relative w-full pt-12 md:pt-20 pb-0 flex flex-col justify-center overflow-hidden font-sans"
        >
            {/* Tiêu đề "Phần thưởng" */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-7xl mx-auto mb-4 px-4 md:px-10 text-left"
            >
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-wide capitalize drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                    Phần thưởng
                </h2>
            </motion.div>

            {/* Vùng chứa Collage Phần Thưởng - Định dạng lề phải tuyệt đối */}
            <div className="w-full flex justify-end pl-4">

                {/* Hộp nền đen là TRỤC TỌA ĐỘ cho tất cả các item. Nằm sát viền phải trình duyệt */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                    className="relative w-[95%] sm:w-[90%] lg:w-[60%] max-w-[1300px] aspect-[4/3] md:aspect-[16/10] bg-[#0f0524] rounded-tl-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.7)] mt-4 md:mt-10 mb-0 border-t border-l border-white/10"
                >

                    {/* 1. Dải chữ cong "Vidimi collection monthly" */}
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: -10 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        src={imgCurvedText}
                        alt="Vidimi Collection"
                        className="absolute left-[18%] bottom-[0%] w-[52%] object-contain -rotate-[10deg] z-30 drop-shadow-lg pointer-events-none"
                    />

                    {/* 2. Thẻ Grab Gift Card */}
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        src={imgGrab}
                        alt="Grab Gift Card"
                        className="absolute -left-[10%] -bottom-[8%] w-[50%] object-contain -rotate-[-5deg] z-20 drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform"
                    />

                    {/* 3. Voucher The Coffee House +30% */}
                    <motion.img
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        src={imgCoffee}
                        alt="The Coffee House Voucher"
                        className="absolute -left-[12%] -bottom-[5%] w-[55%] object-contain z-20 drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)] hover:scale-105 transition-transform"
                    />

                    {/* 4. Bé búp bê hồng (Flower Know) */}
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        src={imgFigure}
                        alt="Figure"
                        className="absolute right-[30%] -bottom-[10%] w-[32%] object-contain z-40 drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] hover:scale-105 transition-transform hover:-translate-y-4"
                    />

                    {/* 5. Chó bông (Chobong) */}
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        src={imgDog}
                        alt="Plush Dog"
                        className="absolute left-[0%] bottom-[0%] w-[100%] object-contain z-10 drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform"
                    />

                    {/* 6. Mô hình Gundam */}
                    <motion.img
                        initial={{ opacity: 0, y: 50, x: 30 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        src={imgGundam}
                        alt="Gundam"
                        className="absolute right-[0%] bottom-[0%] w-[80%] object-contain z-20 drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform hover:-translate-y-4"
                    />

                    {/* 7. Áo thun đen MLB (T-Shirt) */}
                    <motion.img
                        initial={{ opacity: 0, y: 30, x: 20 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        src={imgTshirt}
                        alt="T-Shirt"
                        className="absolute right-[0%] -bottom-[8%] w-[42%] object-contain z-50 drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform"
                    />

                </motion.div>
            </div>
        </section>
    );
};