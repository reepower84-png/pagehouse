import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/ChatGPT_Image_2026년_1월_11일_오후_07_12_33_가로-removebg-preview.png"
                alt="페이지하우스"
                width={320}
                height={80}
                className="h-20 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              클릭을 매출로 바꾸는 랜딩페이지.
              <br />
              비즈니스 성장을 위한 최적의 솔루션을 제공합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">바로가기</h3>
            <ul className="space-y-3">
              {['서비스', '포트폴리오', '고객후기', '문의하기'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${['services', 'portfolio', 'reviews', 'contact'][index]}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">문의</h3>
            <ul className="space-y-3">
              <li>영업시간: 평일 10:00 - 18:00</li>
              <li>점심시간: 12:30 - 13:30</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Company Info */}
          <div className="text-sm text-gray-500 space-y-2 mb-6">
            <p>상호: 효시스템 부천직영점 | 대표: 이주영</p>
            <p>사업자등록번호: 290-62-00902</p>
            <p>주소: 경기도 부천시 원미구 송내대로265번길 23, 201-G11</p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} 페이지하우스. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
