'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function KakaoFloatingButton() {
  return (
    <Link
      href="http://pf.kakao.com/_cRBxon/chat"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      <Image
        src="/카톡_원형_로고.png"
        alt="카카오톡 상담"
        width={56}
        height={56}
        className="rounded-full"
      />
    </Link>
  );
}
