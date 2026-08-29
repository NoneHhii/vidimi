import type React from "react";

import vidimiLogo from "../assets/vidimi_logo.png";

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between px-3 md:px-4 py-2 bg-[#b600c4]">
            <div className="flex items-center gap-2 md:gap-3">
                <button className="text-white p-1 rounded hover:bg-white/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <a href="/" className="flex items-center">
                    <img src={vidimiLogo} alt="Vidimi" className="h-6 md:h-8 object-contain" />
                </a>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
                <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-1.5 px-3 md:py-2 md:px-5 rounded-full transition-all backdrop-blur-md border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-[11px] sm:text-xs md:text-base">
                    Đăng nhập
                </button>
                <button className="bg-white text-[#8a0096] hover:text-[#b600c4] font-bold py-1.5 px-4 md:py-2 md:px-6 rounded-full shadow-[0_4px_15px_rgba(255,255,255,0.25)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.45)] hover:-translate-y-0.5 transition-all duration-300 text-[11px] sm:text-xs md:text-base">
                    Tải ngay
                </button>
            </div>
        </header>
    )
}

export default Header