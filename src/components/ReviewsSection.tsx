'use client';

import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: '김*수',
    company: '뷰티코스메틱 대표',
    content:
      '랜딩페이지 리뉴얼 후 전환율이 3배 이상 올랐습니다. 특히 모바일에서의 사용자 경험이 확실히 개선되었고, 고객들의 문의도 크게 늘었어요. 정말 만족스럽습니다!',
    rating: 5,
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 2,
    name: '이*현',
    company: '온라인 교육 스타트업 CEO',
    content:
      '빠른 작업 속도와 꼼꼼한 피드백 반영이 인상적이었습니다. 마케팅팀에서도 랜딩페이지 퀄리티에 매우 만족하고 있고, 광고 성과도 좋아졌습니다.',
    rating: 5,
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 3,
    name: '박*연',
    company: '헬스케어 앱 마케터',
    content:
      '앱 런칭 랜딩페이지를 의뢰했는데, 기대 이상의 결과물이 나왔습니다. 다운로드 전환율이 확실히 높아졌고, 앞으로도 계속 협업하고 싶습니다.',
    rating: 5,
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 4,
    name: '최*욱',
    company: '프리미엄 가구 브랜드 이사',
    content:
      '브랜드 아이덴티티를 완벽하게 이해하고 반영해주셔서 놀랐습니다. 고급스러우면서도 세련된 디자인 덕분에 브랜드 이미지가 한층 업그레이드됐어요.',
    rating: 5,
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    id: 5,
    name: '장*래',
    company: '푸드테크 스타트업 PM',
    content:
      '구독 서비스 런칭을 위한 랜딩페이지였는데, 전환율 최적화에 대한 노하우가 확실히 느껴졌습니다. 런칭 첫 달부터 목표를 초과 달성했어요!',
    rating: 5,
    image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  },
  {
    id: 6,
    name: '윤*호',
    company: '부동산 플랫폼 CTO',
    content:
      '기술적인 요구사항이 많았는데도 깔끔하게 구현해주셨습니다. 특히 지도 연동과 실시간 기능 구현이 인상적이었고, 유지보수도 수월해요.',
    rating: 5,
    image: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4">
            고객후기
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            고객님들의 생생한 후기
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            페이지하우스와 함께한 고객님들의
            <br className="hidden md:block" />
            실제 경험담을 확인해보세요.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-indigo-100" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-6">
                &ldquo;{review.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ background: review.image }}
                >
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {review.name}
                  </div>
                  <div className="text-sm text-gray-500">{review.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-1">98%</div>
            <div className="text-gray-500 text-sm">고객 만족도</div>
          </div>
          <div className="h-12 w-px bg-gray-200 hidden md:block" />
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-1">300+</div>
            <div className="text-gray-500 text-sm">프로젝트 완료</div>
          </div>
          <div className="h-12 w-px bg-gray-200 hidden md:block" />
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-1">95%</div>
            <div className="text-gray-500 text-sm">재의뢰율</div>
          </div>
          <div className="h-12 w-px bg-gray-200 hidden md:block" />
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-1">4.9</div>
            <div className="text-gray-500 text-sm">평균 평점</div>
          </div>
        </div>
      </div>
    </section>
  );
}
