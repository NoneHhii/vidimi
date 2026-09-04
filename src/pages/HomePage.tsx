import type React from "react";
import bannerBg from "../assets/banner.jpg";
import bannerVideo from "../assets/banner_gif.mp4";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { VideoSection } from "../components/VideoSection";
import { ChromaKeyVideo } from "../components/ChromaKeyVideo";
import { SpecialFeaturesSection } from "../components/SpecialFeaturesSection";
import { RewardsSection } from "../components/RewardsSection";

const HomePage: React.FC = () => {
    return (
        <div className="w-full selection:bg-orange-500 selection:text-white font-sans relative">
            {/* Tối ưu hóa Hiệu suất (Chống lag): Dùng layer fixed riêng biệt thay vì bg-fixed */}
            <div 
                className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat w-full h-full"
                style={{ backgroundImage: `url(${bannerBg})` }}
            >
                {/* Lớp phủ màu cố định cho TOÀN BỘ trang */}
                <div className="absolute inset-0 bg-[#b600c4] mix-blend-color opacity-40 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#b600c4]/40 via-[#b600c4]/10 to-[#550060]/40 pointer-events-none"></div>
            </div>

            {/* Nội dung trang */}
            <div className="relative z-10">
                {/* Hero Banner Section */}
                <section className="relative w-full min-h-[520px] md:h-[580px] flex items-center overflow-hidden">



                {/* Khối nội dung chính */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between pt-16 lg:pt-0">
                    {/* Cột trái: Văn bản */}
                    <div className="max-w-xl z-20 text-center lg:text-left flex flex-col items-center lg:items-start">
                        {/* Tag Badge */}
                        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-semibold tracking-wide shadow-sm">
                            Tích điểm từ bất kỳ hóa đơn nào
                        </div>

                        {/* Tiêu đề chính */}
                        <h1
                            className="
                                text-white
                                font-extrabold
                                tracking-tight
                                leading-tight
                                mb-5
                                drop-shadow-[0_6px_8px_rgba(0,0,0,0.35)]
                            "
                            style={{
                                fontSize: "clamp(3.2rem, 6.5vw, 5rem)",
                            }}
                        >
                            <span className="block">
                                Đừng để
                            </span>

                            <span className="block">
                                khoản chi
                            </span>

                            <span
                                className="
                                    block
                                    mt-1
                                    tracking-[-0.04em]
                                "
                                style={{
                                    fontSize: "0.9em",
                                }}
                            >
                                trôi đi...
                            </span>
                        </h1>

                        {/* Mô tả phụ */}
                        <p
                            className="text-white/90 text-xs md:text-sm lg:text-base max-w-md italic font-normal leading-relaxed drop-shadow-md mt-2"
                        >
                            Chụp bất kỳ hóa đơn mua sắm ở bất kỳ địa điểm nào và tích lũy điểm thưởng để nhận được những phần quà hoặc ưu đãi mà chúng tôi mang lại.
                        </p>
                    </div>

                    {/* Cột phải: Video bay 3D tách nền xanh */}
                    <div className="flex relative w-full lg:w-[500px] h-[300px] lg:h-[450px] items-end justify-center lg:right-4 mt-8 lg:mt-0 scale-90 sm:scale-100 origin-bottom translate-y-4 lg:translate-y-12">
                        <div 
                            className="w-full flex justify-center"
                            style={{ 
                                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 98%)', 
                                maskImage: 'linear-gradient(to bottom, black 70%, transparent 98%)' 
                            }}
                        >
                            <ChromaKeyVideo 
                                src={bannerVideo} 
                                className="w-[120%] lg:w-[150%] max-w-[800px] hover:scale-105 transition-transform duration-700 ease-out" 
                                width={800} 
                                height={800} 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <HowItWorksSection />

            {/* Video Section */}
            <div className="relative z-10">
                <VideoSection />
            </div>

            {/* Đặc biệt Section */}
            <div className="relative z-10">
                <SpecialFeaturesSection />
            </div>

            {/* Phần Thưởng Section */}
            <div className="relative z-10">
                <RewardsSection />
            </div>
            
            </div> {/* Kết thúc nội dung trang */}
        </div>
    );
};

export default HomePage;