import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'トヨタ SayuU vs みてねみまもりGPS 比較 | 交通安全かシンプルか',
  description:
    'トヨタのSayuUとみてねみまもりGPSを比較します。交通安全機能を重視したSayuUと、シンプルな設計で月額528円のみてねについて、ご家庭の優先順位に応じて選ぶための判断材料をまとめています。',
};

const faqData = [
  { q: 'SayuUとみてねの一番の違いは何ですか？', a: 'SayuUは、交通安全サポート（左右確認検知・走行検知など）を特徴とするトヨタ開発のGPSです。一方、みてねは、シンプルな位置情報の共有とトーク機能を提供するMIXIのGPSです。月額料金も大きく異なります（SayuU 1,210円／みてね 528円）。' },
  { q: '月額料金の差はどれくらいですか？', a: '月額ではSayuUが1,210円、みてねが528円で、年間では約8,000円の差が生じます。機能の差をどう評価するかが、判断のポイントです。' },
  { q: 'SayuUの「左右確認検知」とはどんな機能ですか？', a: 'お子さまが道路を渡る前に左右を確認したかどうかを検知し、保護者に記録として通知する機能です。交通安全教育のサポートとして開発されたトヨタ独自の機能で、詳細は公式サイトに掲載されています。' },
  { q: 'どちらも通話はできますか？', a: 'SayuUは通話機能を搭載しており、みてねはトーク（音声メッセージ）機能を提供しています。リアルタイムで通話ができるのはSayuUです。' },
  { q: '初期費用の違いは？', a: 'SayuUは端末が16,500円、みてねは端末が5,280円（MG05）〜7,480円（MB06）と、大きな差があります（みてね公式・2026年10月20日確認）。機能の豊富さと初期費用のバランスを考慮して選ぶことをおすすめします。' },
];

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

const comparison = [
  { item: '提供会社', sayuu: 'トヨタ自動車株式会社', mitene: '株式会社MIXI' },
  { item: '端末価格', sayuu: '16,500円', mitene: '5,280円〜7,480円（機種別）' },
  { item: '月額料金', sayuu: '1,210円', mitene: '528円' },
  { item: '通話機能', sayuu: '◎ 対応', mitene: '音声メッセージのみ' },
  { item: '左右確認検知', sayuu: '◎ あり（独自機能）', mitene: '—' },
  { item: '走行検知', sayuu: '◎ あり（独自機能）', mitene: '—' },
  { item: 'バッテリー持ち', sayuu: '毎日の充電を推奨', mitene: '最大2カ月（MG05・省エネモード時）' },
  { item: '主な用途', sayuu: '交通安全教育のサポート', mitene: 'シンプルな見守り' },
];

export default function SayuuVsMitenePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "トヨタ SayuU vs みてねみまもりGPS 比較", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '比較', href: '/compare/' }, { name: 'SayuU vs みてね' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">トヨタ SayuU vs みてねみまもりGPS</h1>
          <p className="text-g600 text-lg">交通安全サポートを重視するか、シンプルな見守りを重視するか、ニーズ別の選び方を解説します</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">基本スペックの比較</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-blue text-white"><th className="p-3 text-left">項目</th><th className="p-3 text-left">SayuU（トヨタ）</th><th className="p-3 text-left">みてねみまもりGPS</th></tr></thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.item} className="border-b border-g100">
                    <td className="p-3 font-semibold text-g800">{row.item}</td>
                    <td className="p-3 text-g600">{row.sayuu}</td>
                    <td className="p-3 text-g600">{row.mitene}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">SayuUが向いているご家庭</h2>
          <div className="card-hover p-5 mb-6">
            <ul className="space-y-2 text-g600">
              <li>✓ 小学1年生の入学時に、交通安全教育もあわせて考えたい方</li>
              <li>✓ 毎日の通学路での安全行動を確認したい方</li>
              <li>✓ 通話でリアルタイムに連絡を取りたい方</li>
              <li>✓ 月額費用より機能の充実度を優先したい方</li>
            </ul>
          </div>

          <h2 className="section-title">みてねみまもりGPSが向いているご家庭</h2>
          <div className="card-hover p-5 mb-8">
            <ul className="space-y-2 text-g600">
              <li>✓ 費用を抑えてシンプルに見守りたい方</li>
              <li>✓ バッテリー持ちを最優先したい方（最大2カ月）</li>
              <li>✓ 位置情報の確認が主な目的で、通話は不要な方</li>
              <li>✓ 月額500円台の続けやすい料金を希望する方</li>
            </ul>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item"><summary>{faq.q}</summary><div className="faq-answer">{faq.a}</div></details>
          ))}

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">他機種のランキング</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">全機種ランキング</Link>
              <Link href="/review/sayuu/" className="btn-accent">SayuU詳細レビュー</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
