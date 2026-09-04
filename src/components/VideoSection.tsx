import React from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export const VideoSection: React.FC = () => {
    return (
        <section className="relative w-full py-16 md:py-24 px-4 bg-transparent min-h-[600px] flex items-center justify-center">
            {/* Vùng chứa Video Player */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                className="relative z-10 w-full max-w-5xl aspect-video rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 group cursor-pointer bg-black/40 backdrop-blur-sm"
            >
                {/* Ảnh cover / Thumbnail video */}
                <div className="absolute inset-0 bg-[#2F2457]/80 flex flex-col items-center justify-center transition-transform duration-700 group-hover:scale-105">
                    {/* Placeholder cho Thumbnail */}
                    {/* <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div> */}

                    {/* Nút Play siêu to khổng lồ */}
                    <div className="relative z-20 w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:bg-white/30 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all duration-300 group-active:scale-90">
                        <Play className="w-10 h-10 md:w-14 md:h-14 text-white ml-2 drop-shadow-md" fill="white" />
                    </div>
                </div>

                {/* Khung viền phát sáng khi hover */}
                <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-white/30 transition-colors duration-500 pointer-events-none z-30"></div>
            </motion.div>
        </section>
    );
};
