import React from "react";
import type { LucideIcon } from "lucide-react";

interface StepCardProps {
    step: string;
    title: string;
    desc: string;
    icon?: LucideIcon;
    imageSrc?: string;
    gradient?: string;
    badgeColor?: string;
}

export const StepCard: React.FC<StepCardProps> = ({ title, desc, icon: Icon, imageSrc }) => {
    return (
        <div className="flex flex-col items-center text-center w-full max-w-[280px] mx-auto">
            {/* Khối ô vuông Glassmorphism chứa Icon */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-white/20 backdrop-blur-2xl rounded-[1.8rem] sm:rounded-[2rem] md:rounded-[2.5rem] border border-white/40 shadow-[0_15px_40px_rgba(0,0,0,0.3)] flex items-center justify-center mb-4 sm:mb-5 md:mb-6 overflow-hidden relative transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-50" />

                {imageSrc ? (
                    <img src={imageSrc} alt={title} className="w-16 h-16 sm:w-22 sm:h-22 md:w-32 md:h-32 object-contain relative z-10 transition-transform duration-500" />
                ) : Icon ? (
                    <Icon className="w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 text-slate-900 drop-shadow-md relative z-10 transition-transform duration-500" strokeWidth={2.5} />
                ) : null}
            </div>

            <h3 className="text-base sm:text-xl md:text-2xl font-black text-white mb-1.5 sm:mb-2 tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] uppercase">
                {title}
            </h3>
            <p className="text-xs sm:text-xs md:text-sm text-slate-100 leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] px-2">
                {desc}
            </p>
        </div>
    );
};