import React from "react";
import { motion } from "framer-motion";
import { ChromaKeyVideo } from "./ChromaKeyVideo";
import giftVideo from "../assets/gift qua duoi.mov";

export const RewardsSection: React.FC = () => {
    return (
        <section className="relative w-full overflow-hidden font-sans">
            {/* Video quà — fill toàn bộ section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, type: "spring", bounce: 0.2 }}
                className="w-full"
            >
                <ChromaKeyVideo
                    src={giftVideo}
                    className="w-full"
                    width={2136}
                    height={1440}
                />
            </motion.div>

            {/* Chữ "Phần thưởng" nằm đè phía trên-trái */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="absolute top-[4%] left-0 z-20 px-4 md:px-10"
            >
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-wide capitalize drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
                    Phần thưởng
                </h2>
            </motion.div>
        </section>
    );
};