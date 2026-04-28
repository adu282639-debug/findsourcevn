import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Search, 
  Scale, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  MessageSquare,
  Users,
  Briefcase,
  TrendingUp
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Xử lý hiệu ứng sticky header khi cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. GLOBAL NAVIGATION (STICKY HEADER) */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                FindSource<span className="text-orange-500">VN</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className={`font-medium hover:text-orange-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-200'}`}>Về chúng tôi</a>
              <a href="#services" className={`font-medium hover:text-orange-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-200'}`}>Dịch vụ</a>
              <a href="#process" className={`font-medium hover:text-orange-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-200'}`}>Quy trình</a>
              <a href="#insights" className={`font-medium hover:text-orange-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-200'}`}>Báo cáo thị trường</a>
            </div>

            {/* CTA & Language */}
            <div className="hidden md:flex items-center space-x-4">
              <div className={`flex items-center space-x-1 text-sm font-medium ${isScrolled ? 'text-slate-700' : 'text-slate-200'}`}>
                <Globe className="w-4 h-4" />
                <select className="bg-transparent border-none outline-none cursor-pointer">
                  <option value="vi" className="text-slate-800">VN</option>
                  <option value="en" className="text-slate-800">EN</option>
                  <option value="ko" className="text-slate-800">KR</option>
                </select>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-md font-semibold transition-colors shadow-lg shadow-orange-500/30">
                Nhận Báo Giá
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={isScrolled ? 'text-slate-800' : 'text-white'}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-slate-100">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#about" className="block px-3 py-3 text-slate-700 font-medium border-b border-slate-50">Về chúng tôi</a>
              <a href="#services" className="block px-3 py-3 text-slate-700 font-medium border-b border-slate-50">Dịch vụ</a>
              <a href="#process" className="block px-3 py-3 text-slate-700 font-medium border-b border-slate-50">Quy trình</a>
              <a href="#insights" className="block px-3 py-3 text-slate-700 font-medium border-b border-slate-50">Báo cáo thị trường</a>
              <button className="w-full mt-4 bg-orange-500 text-white px-5 py-3 rounded-md font-semibold">
                Nhận Báo Giá Tư Vấn
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2070")' }}
        >
          <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-800/50 border border-blue-400/30 text-blue-200 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
            B2B SOURCING & MARKET ENTRY EXPERTS
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Cửa Ngõ Đáng Tin Cậy Mở Rộng <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
              Kinh Doanh Tại Việt Nam
            </span>
          </h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Chúng tôi kết nối doanh nghiệp của bạn với mạng lưới nhà cung cấp uy tín và cung cấp giải pháp toàn diện về pháp lý, nhân sự, vận hành để bạn tự tin chinh phục thị trường.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-500/40 flex items-center justify-center">
              Bắt Đầu Dự Án <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white rounded-md font-bold text-lg transition-all flex items-center justify-center">
              Khám Phá Dịch Vụ
            </button>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL PROOF (TRUST BUILDING) */}
      <section className="bg-white py-10 border-b border-slate-200 relative z-20 -mt-8 rounded-t-3xl shadow-xl max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-900">500+</h3>
            <p className="text-sm text-slate-500 font-medium mt-1">Nhà Cung Cấp Đã Xác Minh</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-900">12</h3>
            <p className="text-sm text-slate-500 font-medium mt-1">Năm Kinh Nghiệm</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-900">200+</h3>
            <p className="text-sm text-slate-500 font-medium mt-1">Khách Hàng Quốc Tế</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-900">100%</h3>
            <p className="text-sm text-slate-500 font-medium mt-1">Cam Kết Pháp Lý</p>
          </div>
        </div>
      </section>

      {/* 4. CORE SERVICES (3 NHÓM DỊCH VỤ CHÍNH) */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Giải Pháp Toàn Diện Cho Doanh Nghiệp</h2>
            <p className="text-lg text-slate-600">
              Hệ sinh thái dịch vụ chuyên sâu giúp bạn thiết lập, vận hành và phát triển chuỗi cung ứng tại Việt Nam một cách tối ưu và không rủi ro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Tư Vấn Thành Lập Công Ty</h3>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Hỗ trợ trọn gói từ khâu xin giấy phép đầu tư (IRC, ERC), thành lập chi nhánh, văn phòng đại diện đến thiết lập cơ sở hạ tầng nhà máy, văn phòng cho nhà đầu tư nước ngoài.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Tư vấn loại hình doanh nghiệp</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Đăng ký giấy phép đầu tư & kinh doanh</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Tìm kiếm mặt bằng & Setup nhà xưởng</li>
              </ul>
              <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-orange-500 transition-colors">
                Tìm hiểu thêm <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Tìm Nguồn & Chuỗi Cung Ứng</h3>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Khảo sát thị trường, đánh giá và kết nối trực tiếp với các nhà sản xuất, xưởng gia công (OEM/ODM) và hệ thống nhà phân phối uy tín nhất tại Việt Nam.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Tìm kiếm & Đánh giá nhà cung cấp</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Quản lý chất lượng (QC) & Lấy mẫu</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Thiết lập mạng lưới phân phối</li>
              </ul>
              <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-orange-500 transition-colors">
                Tìm hiểu thêm <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Scale className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Tư Vấn Pháp Lý & Nhân Sự</h3>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Đảm bảo doanh nghiệp vận hành đúng luật bản địa. Cung cấp giải pháp tuyển dụng nhân sự cấp cao, quản lý tính lương và các quy chuẩn lao động tại Việt Nam.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Soạn thảo hợp đồng thương mại</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Tuyển dụng & Headhunting</li>
                <li className="flex items-start text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Kế toán, Thuế & Payroll</li>
              </ul>
              <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-orange-500 transition-colors">
                Tìm hiểu thêm <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (LỢI THẾ CẠNH TRANH) */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tại sao đối tác toàn cầu chọn FindSourceVN?</h2>
              <p className="text-blue-100 text-lg mb-8">
                Gia nhập thị trường mới luôn tiềm ẩn rủi ro. Chúng tôi đóng vai trò là "người bản địa" bảo vệ lợi ích của bạn, giúp tiết kiệm hàng tháng trời thử nghiệm và hàng ngàn đô la chi phí sai lầm.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-blue-800 p-2 rounded mr-4"><Globe className="w-6 h-6 text-orange-400" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Mạng Lưới Bản Địa</h4>
                    <p className="text-blue-200 text-sm mt-1">Sở hữu data gốc của hàng ngàn xưởng sản xuất và đối tác ẩn.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-800 p-2 rounded mr-4"><Briefcase className="w-6 h-6 text-orange-400" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Hỗ Trợ Từ A-Z</h4>
                    <p className="text-blue-200 text-sm mt-1">Từ giấy phép, tìm xưởng đến xuất khẩu lô hàng đầu tiên.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-800 p-2 rounded mr-4"><Scale className="w-6 h-6 text-orange-400" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Giảm Thiểu Rủi Ro</h4>
                    <p className="text-blue-200 text-sm mt-1">Thẩm định kỹ càng (Due Diligence) pháp lý và năng lực đối tác.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-800 p-2 rounded mr-4"><TrendingUp className="w-6 h-6 text-orange-400" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Tối Ưu Chi Phí</h4>
                    <p className="text-blue-200 text-sm mt-1">Đàm phán giá tận gốc trực tiếp với nhà máy, không qua trung gian.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
                alt="Đội ngũ chuyên gia tư vấn FindSourceVN" 
                className="rounded-lg shadow-2xl border-4 border-blue-800/50"
              />
              <div className="absolute -bottom-8 -left-8 bg-orange-500 text-white p-6 rounded-lg shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">100%</p>
                <p className="text-sm font-medium">Khách hàng hài lòng<br/>trong năm 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS (QUY TRÌNH) */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-16">Quy Trình Hợp Tác Rõ Ràng</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-blue-100 z-0"></div>

            {[
              { step: '01', title: 'Phân Tích Nhu Cầu', desc: 'Lắng nghe mục tiêu, quy mô và yêu cầu đặc thù của dự án (RFQ/Yêu cầu thành lập).' },
              { step: '02', title: 'Đề Xuất Giải Pháp', desc: 'Cung cấp danh sách nhà cung cấp tiềm năng hoặc lộ trình pháp lý/nhân sự chi tiết.' },
              { step: '03', title: 'Đàm Phán & Khảo Sát', desc: 'Thực địa nhà máy, thẩm định năng lực, đàm phán hợp đồng và lấy mẫu.' },
              { step: '04', title: 'Vận Hành & Bàn Giao', desc: 'Giám sát sản xuất, kiểm soát chất lượng (QC) và hỗ trợ vận hành liên tục.' }
            ].map((item, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-full border-4 border-blue-100 flex items-center justify-center mb-6 shadow-md transition-transform hover:scale-110">
                  <span className="text-2xl font-bold text-orange-500">{item.step}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LEAD MAGNET & CONTACT FORM */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left Info */}
            <div className="lg:w-5/12 bg-blue-900 text-white p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-4">Sẵn sàng mở rộng kinh doanh tại Việt Nam?</h3>
                <p className="text-blue-100 mb-8">
                  Hãy để lại thông tin, chuyên gia của chúng tôi sẽ liên hệ trong vòng 24 giờ để tư vấn miễn phí lộ trình phù hợp nhất cho doanh nghiệp của bạn.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-orange-400 mr-4" />
                    <span>Tòa nhà AB, 76 Lê Lai, Quận 1, TP. HCM</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-orange-400 mr-4" />
                    <span>+84 28 3888 9999</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-orange-400 mr-4" />
                    <span>contact@findsourcevn.com</span>
                  </div>
                </div>
              </div>

              {/* Lead Magnet Download */}
              <div className="mt-12 p-6 bg-blue-800 rounded-lg border border-blue-700">
                <h4 className="font-bold text-orange-400 mb-2">🎁 Tặng Kèm Miễn Phí</h4>
                <p className="text-sm text-blue-100 mb-4">
                  Báo cáo: "Toàn Cảnh Chuỗi Cung Ứng & FDI Việt Nam 2024"
                </p>
                <button className="text-sm font-semibold underline hover:text-orange-400 transition-colors">
                  Tải xuống ngay
                </button>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-7/12 p-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Gửi Yêu Cầu Tư Vấn</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Họ và Tên *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Công Ty *</label>
                    <input type="email" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="john@company.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Tên Công Ty</label>
                    <input type="text" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Company Inc." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Dịch Vụ Quan Tâm *</label>
                    <select className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                      <option value="">-- Chọn dịch vụ --</option>
                      <option value="company_formation">Thành lập công ty (FDI)</option>
                      <option value="sourcing">Tìm Nguồn & Xưởng Sản Xuất</option>
                      <option value="legal_hr">Tư Vấn Pháp Lý & Nhân Sự</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Chi Tiết Nhu Cầu (RFQ/Yêu cầu)</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Vui lòng mô tả chi tiết sản phẩm cần tìm, loại hình công ty muốn mở..."></textarea>
                </div>

                <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-md transition-colors shadow-lg shadow-orange-500/30">
                  GỬI YÊU CẦU NGAY
                </button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  Thông tin của bạn được bảo mật tuyệt đối theo chính sách của chúng tôi.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold tracking-tight text-white mb-4 block">
              FindSource<span className="text-orange-500">VN</span>
            </span>
            <p className="text-sm mb-4">
              Cửa ngõ kết nối giao thương và thiết lập doanh nghiệp chuyên nghiệp tại Việt Nam dành cho nhà đầu tư toàn cầu.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Dịch Vụ</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Thành Lập Công Ty FDI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tìm Nguồn Cung Ứng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quản Lý Chất Lượng (QC)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pháp Lý & Nhân Sự</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Công Ty</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Về Chúng Tôi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dự Án Đã Làm</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Báo Cáo Ngành</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Liên Hệ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Theo dõi chúng tôi</h4>
            <div className="flex space-x-4">
              {/* Social Placeholders */}
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white cursor-pointer transition-colors">in</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white cursor-pointer transition-colors">f</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white cursor-pointer transition-colors">X</div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between">
          <p>© 2024 FindSource Vietnam. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* FLOATING CHAT WIDGET (Zalo/WhatsApp concept) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Nút giả lập Zalo/Wechat */}
        <button className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 group relative">
          <MessageSquare className="w-7 h-7" />
          <span className="absolute right-16 bg-white text-slate-800 text-xs font-bold py-1 px-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat Zalo/WeChat
          </span>
        </button>
      </div>

    </div>
  );
}