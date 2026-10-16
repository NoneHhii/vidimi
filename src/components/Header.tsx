import { useEffect, useRef, useState } from "react";
import type React from "react";
import vidimiLogo from "../assets/vidimi_logo.png";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handlePointerDown = (event: PointerEvent) => {
            if (menuRef.current && event.target instanceof Node && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setMenuOpen(false);
        };

        document.addEventListener("pointerdown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between px-3 md:px-4 py-2.5 bg-[#2F2457]/80 backdrop-blur-lg border-b border-white/10 shadow-lg transition-all duration-300">
            <div className="flex items-center gap-2 md:gap-3">
                <div ref={menuRef} className="static">
                    <button
                        type="button"
                        aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
                        aria-expanded={menuOpen}
                        aria-controls="primary-navigation"
                        onClick={() => setMenuOpen((open) => !open)}
                        className="list-none cursor-pointer text-white p-1.5 rounded-lg hover:bg-white/10 active:scale-95 transition-all [&::-webkit-details-marker]:hidden"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {menuOpen && <nav
                        id="primary-navigation"
                        aria-label="Menu chính"
                        className="absolute left-3 top-full z-50 -mt-px w-72 max-w-[calc(100vw-1.5rem)] rounded-b-2xl border border-t-0 border-white/20 bg-linear-to-b from-[#3b186c]/95 via-[#2f125a]/95 to-[#220a45]/95 p-2 shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:left-4"
                    >
                        <a
                            href="https://webvidimi.vercel.app/"
                            onClick={() => setMenuOpen(false)}
                            className="group/item flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-linear-to-r hover:from-fuchsia-600/30 hover:to-purple-600/30 hover:border-white/20 border border-transparent hover:shadow-md focus-visible:outline-none"
                        >
                            <div className="flex items-center gap-3">
                                {/* Icon Doanh Nghiệp */}
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 group-hover/item:bg-fuchsia-500/30 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-fuchsia-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <span className="tracking-wide">Doanh nghiệp</span>
                            </div>

                            {/* Mũi tên chỉ hướng */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/50 group-hover/item:text-fuchsia-300 group-hover/item:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </nav>}
                </div>

                <a href="/" className="flex items-center hover:scale-105 active:scale-95 transition-transform ml-1">
                    <img src={vidimiLogo} alt="Vidimi" className="h-6 md:h-8 object-contain" />
                </a>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
                <button className="bg-white/10 hover:bg-white/20 active:scale-95 text-white font-semibold py-1.5 px-3.5 md:py-2 md:px-5 rounded-full transition-all backdrop-blur-md border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-[11px] sm:text-xs md:text-base cursor-pointer">
                    Đăng nhập
                </button>
                <button className="bg-white text-[#8a0096] hover:text-[#b600c4] active:scale-95 font-bold py-1.5 px-4 md:py-2 md:px-6 rounded-full shadow-[0_4px_15px_rgba(255,255,255,0.25)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.45)] hover:-translate-y-0.5 transition-all duration-300 text-[11px] sm:text-xs md:text-base cursor-pointer">
                    Tải ngay
                </button>
            </div>
        </header>
    );
};

export default Header;