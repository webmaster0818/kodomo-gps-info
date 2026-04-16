import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'みてね vs BoTトーク どっちがいい？10項目で徹底比較',
  description:
    'みてねみまもりGPSとBoTトークを月額料金・本体価格・トーク機能・バッテリー・測位精度など10項目で徹底比較。お子さまに合ったGPS端末がわかります。',
};

const faqData = [
  { q: 'みてねとBoTトーク、月額料金が安いのはどっち？', a: 'みてねみまもりGPSの基本プランが月額528円で最安です。BoTトークは月額528円〜ですが、トーク機能付きプランはみてね（748円）の方がBoTトーク（748円）と同額です。' },
  { q: 'トーク機能はどちらが優れていますか？', a: 'BoTトークは音声メッセージ送受信に特化しており、ボタン操作だけで簡単にメッセージを送れます。みてねのトークPlusはテキスト＋音声に対応しています。用途に応じてお選びください。' },
  { q: 'バッテリー持ちが良いのはどちらですか？', a: 'みてねみまもりGPSが最大約2ヶ月、BoTトークが最大約1ヶ月です。充電頻度を減らしたい方にはみてねが向いています。' },
  { q: '位置情報の精度はどちらが高いですか？', a: 'どちらもGPS+GLONASS+みちびき+Wi-Fiの複合測位に対応しており、精度はほぼ同等です。環境による誤差も同程度です。' },
  { q: 'どちらを選べばいいか迷っています。', a: 'バッテリー重視・コスト重視ならみてね、トーク機能を重視するならBoTトークがおすすめです。どちらも高い評価を得ている定番機種です。' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const compareItems = [
  { item: '月額料金', mitene: '528円〜', bot: '528円〜' },
  { item: '本体価格', mitene: '5,280円', bot: '5,280円' },
  { item: 'トーク機能', mitene: 'トークPlus（748円）', bot: '標準搭載（748円）' },
  { item: 'バッテリー', mitene: '最大約2ヶ月', bot: '最大約1ヶ月' },
  { item: '測位精度', mitene: 'GPS+GLONASS+みちびき+Wi-Fi', bot: 'GPS+GLONASS+みちびき+Wi-Fi' },
  { item: '見守り人数', mitene: '複数人（無料）', bot: '複数人（無料）' },
  { item: 'アプリ', mitene: 'みてねみまもりGPS', bot: 'BoTトークアプリ' },
  { item: 'サイズ', mitene: '48.5×48.5×15mm', bot: '50×50×21mm' },
  { item: '特徴', mitene: '利用者数No.1・UI優秀', bot: 'AIが行動を学習・通知最適化' },
  { item: 'おすすめ', mitene: 'コスパ・バッテリー重視', bot: 'トーク・AI機能重視' },
];

export default function MiteneVsBotPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: '比較', href: '/' }, { name: 'みてね vs BoTトーク' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">徹底比較</span>
            <span className="tag-pill bg-orange text-white">10項目</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            みてね vs BoTトーク どっちがいい？
          </h1>
          <p className="text-g600 text-lg">人気2大GPS端末を10項目で徹底比較します</p>
        </div>
      </section>

      {/* 比較表 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">10項目比較表</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-4 text-left font-bold text-g800">比較項目</th>
                  <th className="py-3 px-4 text-left font-bold text-blue">みてねみまもりGPS</th>
                  <th className="py-3 px-4 text-left font-bold text-orange">BoTトーク</th>
                </tr>
              </thead>
              <tbody>
                {compareItems.map((row) => (
                  <tr key={row.item} className="border-b border-g100">
                    <td className="py-3 px-4 font-semibold text-g700">{row.item}</td>
                    <td className="py-3 px-4 text-g600">{row.mitene}</td>
                    <td className="py-3 px-4 text-g600">{row.bot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 使い分けガイド */}
          <h2 className="section-title">使い分けガイド</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-6">
              <h3 className="font-bold text-blue mb-3">みてねがおすすめの方</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・バッテリー持ちを重視したい</li>
                <li>・月額コストを最小限に抑えたい</li>
                <li>・家族アプリ「みてね」を使っている</li>
                <li>・シンプルに位置確認だけしたい</li>
                <li>・充電の手間をできるだけ減らしたい</li>
              </ul>
            </div>
            <div className="card-hover p-6">
              <h3 className="font-bold text-orange mb-3">BoTトークがおすすめの方</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・お子さまとメッセージのやりとりをしたい</li>
                <li>・AIの行動学習機能に魅力を感じる</li>
                <li>・自動で通知を最適化してほしい</li>
                <li>・通学路の異常を検知してほしい</li>
                <li>・音声メッセージを手軽に使いたい</li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          {/* CTA */}
          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">各機種の詳細レビューもチェック</h2>
            <p className="text-g600 mb-6 text-sm">それぞれの機種の詳しい機能・口コミはレビューページでご確認ください。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/mitene/" className="btn-primary">みてねのレビュー</Link>
              <Link href="/review/bot-talk/" className="btn-accent">BoTトークのレビュー</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
