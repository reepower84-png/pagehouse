'use client';

import {
  Palette,
  Code,
  Smartphone,
  TrendingUp,
  Zap,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: '맞춤형 디자인',
    description:
      '브랜드 아이덴티티에 맞는 고유한 디자인으로 경쟁사와 차별화된 랜딩페이지를 제작합니다.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Code,
    title: '최신 기술 스택',
    description:
      'React, Next.js 등 최신 기술을 활용해 빠르고 안정적인 페이지를 구축합니다.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: '반응형 설계',
    description:
      'PC, 태블릿, 모바일 등 모든 디바이스에서 완벽하게 작동하는 반응형 페이지를 제공합니다.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    title: '전환율 최적화',
    description:
      '데이터 기반의 UX 설계로 방문자를 고객으로 전환시키는 효과적인 랜딩페이지를 만듭니다.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Zap,
    title: '빠른 로딩 속도',
    description:
      '최적화된 코드와 이미지로 3초 이내 로딩을 보장하여 이탈률을 최소화합니다.',
    color: 'from-purple-500 to-violet-500',
  },
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4">
            서비스
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            왜 페이지하우스인가요?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            단순한 디자인을 넘어, 비즈니스 성장을 이끄는
            <br className="hidden md:block" />
            전략적 랜딩페이지를 제작합니다.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)]"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                지금 바로 시작하세요
              </h3>
              <p className="text-white/80">
                무료 상담을 통해 비즈니스에 맞는 최적의 솔루션을 제안받으세요.
              </p>
            </div>
            <button
              onClick={scrollToContact}
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
            >
              무료 상담 신청
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
