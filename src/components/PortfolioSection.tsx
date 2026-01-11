'use client';

import { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const categories = ['전체', '부동산', '공간디자인', '단체', '브랜드', '기타'];

const portfolios = [
  {
    id: 1,
    title: '부동산 분양 현장1',
    category: '부동산',
    description: '전환율 340% 상승',
    image: '/20260111_193434.jpg',
    isRealImage: true,
    tags: [],
    link: 'https://hillstate-munsuro-9p46.vercel.app/',
  },
  {
    id: 2,
    title: '인테리어',
    category: '공간디자인',
    description: '연결율 250% 증가',
    image: '/20260111_195131.jpg',
    isRealImage: true,
    tags: [],
    link: 'https://ocasio-design.vercel.app/',
  },
  {
    id: 3,
    title: '청년회의소',
    category: '단체',
    description: '입회문의 110% 증가',
    image: '/20260111_194403.jpg',
    isRealImage: true,
    tags: [],
    link: 'https://jci-gyeyang.vercel.app/',
  },
  {
    id: 4,
    title: '사무용 가구 브랜드',
    category: '브랜드',
    description: '브랜드 인지도 200% 상승',
    image: '/20260111_193257.jpg',
    isRealImage: true,
    tags: [],
    link: 'https://hyosystem.vercel.app/',
  },
  {
    id: 5,
    title: '간판',
    category: '공간디자인',
    description: '문의량 220% 증가',
    image: '/20260111_195205.jpg',
    isRealImage: true,
    tags: [],
    link: 'https://neulchan-ad.vercel.app/',
  },
  {
    id: 6,
    title: '부동산 분양 현장2',
    category: '부동산',
    description: '문의율 280% 상승',
    image: '/20260111_193953.jpg',
    isRealImage: true,
    tags: [],
    link: 'https://pangyo-diornine.vercel.app/',
  },
  {
    id: 7,
    title: '콜센터',
    category: '기타',
    description: '콜센터위탁 문의 130% 증가',
    image: '/20260111_200025.jpg',
    isRealImage: true,
    tags: [],
    link: 'https://donghang-callcenter-reepower84-pngs-projects.vercel.app/',
  },
  {
    id: 8,
    title: '플라워',
    category: '기타',
    description: '온라인 주문율 260% 증가',
    image: '/20260111_200316.jpg',
    isRealImage: true,
    tags: [],
    link: 'https://aura-flower.vercel.app/',
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('전체');

  const filteredPortfolios =
    activeCategory === '전체'
      ? portfolios
      : portfolios.filter((p) => p.category === activeCategory);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4">
            포트폴리오
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            성과로 증명합니다
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            다양한 업종의 고객사와 함께
            <br className="hidden md:block" />
            성공적인 결과를 만들어왔습니다.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPortfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image */}
              <div
                className="h-56 relative overflow-hidden"
                style={portfolio.isRealImage ? undefined : { background: portfolio.image }}
              >
                {portfolio.isRealImage && (
                  <img
                    src={portfolio.image}
                    alt={portfolio.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                {portfolio.link && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <a
                        href={portfolio.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-900" />
                      </a>
                    </div>
                  </div>
                )}
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900">
                  {portfolio.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {portfolio.title}
                </h3>
                <p className="text-indigo-600 font-semibold mb-4">
                  {portfolio.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {portfolio.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            나만의 랜딩페이지 문의하기
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
