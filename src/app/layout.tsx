import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: '子供見守りGPS最新情報 | 2025年おすすめGPS端末比較ランキング',
    template: '%s | 子供見守りGPS最新情報',
  },
  description:
    '子供用見守りGPS端末13機種を徹底比較。みてねみまもりGPS、BoTトーク、あんしんウォッチャーなど人気機種の料金・機能・口コミを詳しく紹介。月額528円〜、お子さまの安全を守る最適なGPSが見つかります。',
  keywords: [
    '子供 GPS',
    '見守り GPS',
    'キッズ GPS',
    'GPS 比較',
    'みてねみまもりGPS',
    'BoTトーク',
    'あんしんウォッチャー',
    '小学生 GPS',
    '子供 見守り',
  ],
  metadataBase: new URL('https://kodomo-gps-info.pages.dev'),
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: '子供見守りGPS最新情報',
  },
  other: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
