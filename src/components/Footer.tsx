import type React from "react";
//import { Play, Apple } from "lucide-react"; // Vẫn giữ import này đề phòng cần dùng
import imgStore1 from "../assets/Vidimi web/gg&app 1.png";
import imgStore2 from "../assets/Vidimi web/gg&app 2.png";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#261E47] text-[#D1CDE5] py-12 px-6 md:px-12 w-full text-xs md:text-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                {/* Cột 1: Thông tin công ty */}
                <div className="md:w-5/12 flex flex-col gap-4">
                    <h3 className="uppercase font-semibold tracking-wider text-white">
                        CÔNG TY TNHH CÔNG NGHỆ VIDIMI
                    </h3>
                    <p className="leading-relaxed">
                        Địa chỉ: 407/42/53 Sư Vạn Hạnh, Phường Hòa Hưng, TP. Hồ Chí Minh, Việt Nam
                    </p>
                    <p className="leading-relaxed">
                        Mã số doanh nghiệp: 0317925942 do Sở Kế hoạch & Đầu tư TP.HCM cấp lần đầu ngày 11-07-2023
                    </p>
                    <p className="leading-relaxed">
                        Hotline: (+84) 0977 097 247
                    </p>
                </div>

                {/* Cột 2: Thông tin */}
                <div className="md:w-2/12 flex flex-col gap-4">
                    <h3 className="font-semibold text-white">Thông tin</h3>
                    <ul className="flex flex-col gap-2">
                        <li><a href="#" className="hover:text-white transition-colors underline underline-offset-2">Liên hệ</a></li>
                        <li><a href="#" className="hover:text-white transition-colors underline underline-offset-2">Facebook</a></li>
                        <li><a href="#" className="hover:text-white transition-colors underline underline-offset-2">Tiktok</a></li>
                        <li><a href="#" className="hover:text-white transition-colors underline underline-offset-2">Blog</a></li>
                    </ul>
                </div>

                {/* Cột 3: Hỗ trợ khách hàng */}
                <div className="md:w-3/12 flex flex-col gap-4">
                    <h3 className="font-semibold text-white">Hỗ trợ khách hàng</h3>
                    <ul className="flex flex-col gap-2">
                        <li><a href="#" className="hover:text-white transition-colors underline underline-offset-2">Điều khoản sử dụng</a></li>
                        <li><a href="#" className="hover:text-white transition-colors underline underline-offset-2">Chính sách bảo mật thông tin</a></li>
                        <li><a href="#" className="hover:text-white transition-colors underline underline-offset-2">Quy chế chụp hóa đơn và tích điểm</a></li>
                        <li><a href="#" className="hover:text-white transition-colors underline underline-offset-2">Chính sách đổi quà</a></li>
                        <li><a href="#" className="hover:text-white transition-colors underline underline-offset-2">Chính sách vận chuyển, khiếu nại & đổi trả quà</a></li>
                        <li><a href="#" className="hover:text-white transition-colors underline underline-offset-2">Chính sách đối tác</a></li>
                        <li><a href="#" className="hover:text-white transition-colors underline underline-offset-2">Câu hỏi thường gặp (FAQs)</a></li>
                    </ul>
                </div>

                {/* Cột 4: Nút tải App */}
                <div className="md:w-2/12 flex flex-row  items-end justify-end gap-3 pb-2">
                    <a href="#" className="hover:scale-105 active:scale-95 transition-transform block drop-shadow-md">
                        <img src={imgStore1} alt="Tải app 1" className="h-[36px] md:h-[42px] object-contain" />
                    </a>
                    <a href="#" className="hover:scale-105 active:scale-95 transition-transform block drop-shadow-md">
                        <img src={imgStore2} alt="Tải app 2" className="h-[36px] md:h-[42px] object-contain" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
