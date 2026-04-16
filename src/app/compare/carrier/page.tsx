import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ドコモ・au・ソフトバンク キッズGPS/ケータイ キャリア別比較',
  description:
    '大手3キャリア（ドコモ/au/ソフトバンク）のキッズGPS・キッズケータイを徹底比較。キャリアサービスとGPS専業サービスの違いも解説します。',
};

const faqData = [
  { q: 'キャリアのサービスとGPS専業、どちらが良いですか？', a: 'キャリアのキッズケータイは通話機能が強く、スマホとの連携も容易です。一方、GPS専業（みてね・BoTトーク等）は月額が安く、見守り機能に特化しています。用途で選びましょう。' },
  { q: '格安SIMでも使えますか？', a: 'キャリア提供のキッズケータイは基本的にそのキャリアの契約が必要です。GPS専業機種は提供元のSIMが端末に内蔵されているため、家族の通信キャリアに依存しません。' },
  { q: '家族割やセット割はありますか？', a: 'キャリアのキッズケータイでは、家族割引やセット割が適用される場合があります。GPS専業機種は単独契約が基本で、家族割は一般的にありません。' },
  { q: '学校への持ち込みはどちらが有利？', a: '一般的にシンプルなGPS端末の方が持ち込み許可が出やすい傾向にあります。キッズケータイは通話機能があるため、学校のルール次第になります。' },
  { q: 'ドコモ・au・ソフトバンクで機能の差はありますか？', a: '各キャリアで独自機能（防犯ブザー・位置確認・メール機能など）がありますが、大きな差異は少なくなっています。詳細は各キャリア公式サイトでご確認ください。' },
  { q: 'SayuU（トヨタ）は通信キャリアと関係ありますか？', a: 'SayuUは通信SIMを端末に内蔵しており、キャリア契約は不要です。トヨタが独自に通信サービスを提供しています。' },
];

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function CarrierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: '比較', href: '/' }, { name: 'キャリア別比較' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">ドコモ・au・ソフトバンク キャリア別比較</h1>
          <p className="text-g600 text-lg">大手3キャリアのキッズGPS・キッズケータイ比較と、GPS専業との違いを解説</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">3キャリアの主要サービス</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-g800 mb-2">ドコモ</h3>
              <p className="text-sm text-g600 mb-2">キッズケータイ（通話＋位置確認）</p>
              <p className="text-xs text-g500">詳細はドコモ公式サイトで要確認</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-g800 mb-2">au（KDDI）</h3>
              <p className="text-sm text-g600 mb-2">あんしんウォッチャー（GPS端末）／キッズケータイ</p>
              <p className="text-xs text-g500">あんしんウォッチャーは月額539円、2台目無料</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-g800 mb-2">ソフトバンク</h3>
              <p className="text-sm text-g600 mb-2">どこかなGPS／キッズケータイ</p>
              <p className="text-xs text-g500">どこかなGPSは月額528円（公式サイトで要確認）</p>
            </div>
          </div>

          <h2 className="section-title">キャリアサービス vs GPS専業サービス</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-blue text-white"><th className="p-3 text-left">比較軸</th><th className="p-3 text-left">キャリア提供</th><th className="p-3 text-left">GPS専業（みてね等）</th></tr></thead>
              <tbody>
                <tr className="border-b border-g100"><td className="p-3 font-semibold">月額料金</td><td className="p-3 text-g600">500〜1,000円台</td><td className="p-3 text-g600">528〜748円中心</td></tr>
                <tr className="border-b border-g100"><td className="p-3 font-semibold">通話機能</td><td className="p-3 text-g600">キッズケータイは対応</td><td className="p-3 text-g600">トーク/音声メッセージ中心</td></tr>
                <tr className="border-b border-g100"><td className="p-3 font-semibold">家族割</td><td className="p-3 text-g600">適用される場合あり</td><td className="p-3 text-g600">基本なし</td></tr>
                <tr className="border-b border-g100"><td className="p-3 font-semibold">契約の手間</td><td className="p-3 text-g600">店舗訪問が必要な場合あり</td><td className="p-3 text-g600">オンラインで完結</td></tr>
                <tr className="border-b border-g100"><td className="p-3 font-semibold">端末の簡素さ</td><td className="p-3 text-g600">機能豊富</td><td className="p-3 text-g600">シンプル設計</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">※料金・仕様は変更される場合があります。最新情報は各公式サイトでご確認ください。</p>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (<details key={i} className="faq-item"><summary>{faq.q}</summary><div className="faq-answer">{faq.a}</div></details>))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">全機種を比較する</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">全機種ランキング</Link>
              <Link href="/review/kids-phone/" className="btn-accent">キッズケータイ詳細</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
