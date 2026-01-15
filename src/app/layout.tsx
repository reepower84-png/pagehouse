import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import KakaoFloatingButton from "@/components/KakaoFloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "페이지하우스 | 클릭을 매출로 바꾸는 랜딩페이지",
  description: "전환율 최적화 랜딩페이지 전문 제작 업체. 단순한 웹페이지가 아닌, 방문자를 고객으로 전환시키는 전략적 랜딩페이지를 제작해 드립니다.",
  keywords: "랜딩페이지, 랜딩페이지 제작, 전환율 최적화, 웹사이트 제작, 원페이지, 반응형 웹",
  openGraph: {
    title: "페이지하우스 | 클릭을 매출로 바꾸는 랜딩페이지",
    description: "전환율 최적화 랜딩페이지 전문 제작 업체",
    type: "website",
    locale: "ko_KR",
    siteName: "페이지하우스",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <KakaoFloatingButton />
      </body>
    </html>
  );
}
