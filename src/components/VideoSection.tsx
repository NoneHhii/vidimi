import React from "react";
import bannerBg from "../assets/banner.jpg";
import { Play } from "lucide-react";

export const VideoSection: React.FC = () => {
    return (
        <section
            className="relative w-full py-24 md:py-32 bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: `url(${bannerBg})` }}
        >
            {/* Lớp phủ blend màu tím cho hình nền */}
            <div className="absolute inset-0 bg-[#b600c4] mix-blend-color opacity-35 pointer-events-none"></div>
            
            {/* Lớp phủ chuyển màu mượt để xóa ranh giới với phần HowItWorks (màu #550060) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#550060] from-0% via-transparent via-30% to-[#550060] to-100% pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-10">
                    <p className="mt-3 text-sm md:text-base text-purple-200/80 font-normal max-w-2xl mx-auto">
                        Xem video dưới đây để biết cách Vidimi biến hóa đơn của bạn thành điểm thưởng chỉ trong nháy mắt.
                    </p>
                </div>

                {/* Video Container */}
                <div className="relative w-full aspect-video bg-black/60 backdrop-blur-md rounded-2xl md:rounded-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group flex items-center justify-center cursor-pointer hover:border-purple-400/50 transition-all duration-500">
                    {/* Fake Video Thumbnail Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 to-cyan-900/30"></div>

                    {/* Play Button */}
                    <div className="relative z-10 w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.15)] group-hover:scale-110 group-hover:bg-white/20 group-hover:shadow-[0_0_40px_rgba(182,0,196,0.4)] transition-all duration-300">
                        <Play className="w-8 h-8 text-white fill-white ml-2 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                </div>
            </div>
        </section>
    );
};
