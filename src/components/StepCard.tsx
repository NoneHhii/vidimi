import React from "react";
import type { LucideIcon } from "lucide-react";

interface StepCardProps {
    step: string; // Keep for interface compatibility if needed, but we don't display it in new UI
    title: string;
    desc: string;
    icon: LucideIcon;
    gradient?: string; 
    badgeColor?: string;
}

export const StepCard: React.FC<StepCardProps> = ({ title, desc, icon: Icon }) => {
    return (
        <div className="flex flex-col items-center text-center group cursor-default w-full max-w-[280px] mx-auto">
            {/* Khối ô vuông Glassmorphism chứa Icon */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-white/20 backdrop-blur-2xl rounded-[2rem] md:rounded-[2.5rem] border border-white/40 shadow-[0_15px_40px_rgba(0,0,0,0.3)] flex items-center justify-center mb-5 md:mb-6 overflow-hidden relative group-hover:-translate-y-3 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-all duration-500">
                {/* Ánh sáng viền mờ ảo bên trong */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-50" />
                
                {/* Icon màu siêu đậm (gần như đen/chì) như ảnh mẫu */}
                <Icon className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-slate-900 drop-shadow-md relative z-10 transition-transform duration-500 group-hover:scale-110" strokeWidth={2.5} />
            </div>

            {/* Văn bản bên dưới */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 tracking-wide group-hover:text-amber-200 transition-colors drop-shadow-lg uppercase">
                {title}
            </h3>
            <p className="text-[10px] sm:text-xs md:text-sm text-slate-100 leading-relaxed font-medium drop-shadow-md px-2">
                {desc}
            </p>
        </div>
    );
};