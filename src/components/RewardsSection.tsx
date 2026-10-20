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
        <section className="relative w-full h-screen min-h-[600px] max-h-[900px] flex flex-col justify-start overflow-hidden font-sans select-none pt-24 sm:pt-28 md:pt-32">

            {/* Tiêu đề "Phần Thưởng" */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-20 pl-6 sm:pl-12 md:pl-20 mb-2 sm:mb-4 pointer-events-none"
            >
                <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black text-white tracking-wide capitalize drop-shadow-[0_4px_25px_rgba(0,0,0,0.6)]">
                    Quà Tặng
                </h2>
            </motion.div>

            <div className="w-full relative z-10 flex-1 flex items-start sm:items-center -mt-4 sm:mt-0 overflow-hidden">
                <motion.div
                    className="flex items-center w-max"
                    style={{
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                    }}
                    animate={{ x: "-50%" }}
                    transition={{
                        ease: "linear",
                        duration: 50, // Điều chỉnh tốc độ
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                >
                    {MARQUEE_ITEMS.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="w-screen flex-shrink-0 flex items-center justify-center px-4"
                        >
                            <div className="w-[320px] sm:w-[480px] md:w-[560px] lg:w-[620px] aspect-[1557/1131] flex items-center justify-center">
                                <img
                                    src={item.image}
                                    alt={`Quà ${item.id}`}
                                    className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] pointer-events-none"
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