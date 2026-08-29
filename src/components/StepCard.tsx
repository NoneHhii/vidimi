import React from "react";
import type { LucideIcon } from "lucide-react";

interface StepCardProps {
    step: string;
    title: string;
    desc: string;
    icon: LucideIcon;
    gradient: string;
    badgeColor: string;
}

export const StepCard: React.FC<StepCardProps> = ({
    step,
    title,
    desc,
    icon: Icon,
    gradient,
    badgeColor,
}) => {
    return (
        <div className="group relative rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(124,58,237,0.3)]">
            {/* Đường viền phát sáng Gradient Neon */}
            <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
            />

            {/* Thân Card Glassmorphism có chiều sâu */}
            <div className="relative h-full rounded-[23px] bg-slate-950/40 backdrop-blur-3xl p-7 flex flex-col justify-between border border-white/[0.08] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* Ánh sáng ngầm bên trong Card */}
                <div className="absolute -right-10 -top-10 w-36 h-36 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/25 transition-colors" />

                <div>
                    {/* Header icon + Step number */}
                    <div className="flex items-center justify-between mb-6">
                        <div className={`w-14 h-14 rounded-2xl ${badgeColor} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-3xl font-black text-white/20 font-mono group-hover:text-white/40 transition-colors">
                            {step}
                        </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-white mb-2 tracking-tight group-hover:text-amber-300 transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-slate-300/80 leading-relaxed font-normal">
                        {desc}
                    </p>
                </div>

            </div>
        </div>
    );
};