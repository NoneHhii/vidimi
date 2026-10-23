import React from "react";
import { motion } from "framer-motion";

import imgDong from "../assets/gift_img/Dong.png";
import imgHa from "../assets/gift_img/Ha.png";
import imgMypham from "../assets/gift_img/Mypham.png";
import imgPet from "../assets/gift_img/Pet.png";
import imgSuutam from "../assets/gift_img/Suutam.png";
import imgThu from "../assets/gift_img/Thu.png";
import imgXuan from "../assets/gift_img/Xuan.png";

const REWARD_ITEMS = [
    { id: "xuan", image: imgXuan },
    { id: "ha", image: imgHa },
    { id: "thu", image: imgThu },
    { id: "dong", image: imgDong },
    { id: "mypham", image: imgMypham },
    { id: "pet", image: imgPet },
    { id: "suutam", image: imgSuutam },
];

const MARQUEE_ITEMS = [...REWARD_ITEMS, ...REWARD_ITEMS, ...REWARD_ITEMS, ...REWARD_ITEMS];

export const RewardsSection: React.FC = () => {
    return (
        <section className="relative w-full max-w-full min-h-[460px] sm:min-h-[580px] md:min-h-[720px] flex flex-col justify-start overflow-hidden font-sans select-none pt-8 sm:pt-14 pb-12 sm:pb-16">

            {/* Tiêu đề "Quà Tặng" */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-7xl mx-auto px-4 sm:px-12 md:px-20 mb-4 sm:mb-8 md:mb-12 z-20 pointer-events-none"
            >
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.8rem] font-black text-white tracking-wide capitalize drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
                    Quà Tặng
                </h2>
            </motion.div>

            {/* Khung chứa Marquee */}
            <div className="w-full max-w-full relative z-10 flex items-center justify-center overflow-hidden">
                <motion.div
                    className="flex items-center w-max"
                    style={{
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                    }}
                    animate={{ x: "-50%" }}
                    transition={{
                        ease: "linear",
                        duration: 38,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                >
                    {MARQUEE_ITEMS.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="w-screen max-w-full flex-shrink-0 flex items-center justify-center px-2 sm:px-4"
                        >
                            {/* Card ảnh quà tặng */}
                            <div className="w-[88vw] max-w-[310px] sm:max-w-[450px] md:max-w-[560px] lg:max-w-[650px] aspect-[1557/1131] flex items-center justify-center mx-auto">
                                <img
                                    src={item.image}
                                    alt={`Quà ${item.id}`}
                                    className="w-full h-full object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.4)] pointer-events-none"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};