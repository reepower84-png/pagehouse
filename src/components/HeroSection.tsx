'use client';

import { ArrowRight, MousePointer2, TrendingUp, Zap, CircleDollarSign } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80')`,
        }}
      />

      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-indigo-900/85 to-purple-900/90" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">
              전환율 최적화 랜딩페이지 전문
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">클릭을 매출로 바꾸는</span>
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              랜딩페이지.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-6 leading-relaxed">
            단순한 웹페이지가 아닙니다. 방문자를 고객으로 전환시키는
            <br className="hidden md:block" />
            <strong className="text-white">전략적 랜딩페이지</strong>를 제작해
            드립니다.
          </p>

          {/* Price Promise */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-4 px-8 py-4 border border-cyan-400 rounded-lg bg-transparent relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-cyan-500/10" />
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(34,211,238,0.3)]" />
              <CircleDollarSign className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] relative z-10" />
              <span className="text-xl md:text-2xl font-bold text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] tracking-wide relative z-10">
                합리적인 가격을 약속드립니다.
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={scrollToContact}
              className="group flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl shadow-white/20 hover:shadow-white/30 hover:scale-105"
            >
              무료 상담 신청
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('portfolio');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              포트폴리오 보기
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '300+', label: '프로젝트 완료' },
              { value: '98%', label: '고객 만족도' },
              { value: '2.5x', label: '평균 전환율 상승' },
              { value: '5일', label: '평균 제작 기간' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-sm">스크롤</span>
          <MousePointer2 className="w-5 h-5" />
        </div>
      </div>

      {/* Decorative Icons */}
      <div className="absolute top-1/4 left-10 hidden lg:block">
        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 animate-float">
          <MousePointer2 className="w-8 h-8 text-indigo-400" />
        </div>
      </div>
      <div className="absolute top-1/3 right-16 hidden lg:block">
        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 animate-float animation-delay-2000">
          <TrendingUp className="w-8 h-8 text-green-400" />
        </div>
      </div>
    </section>
  );
}
