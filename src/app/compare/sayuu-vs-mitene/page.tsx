import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'トヨタ SayuU vs みてねみまもりGPS 比較 | 交通安全かシンプルか',
  description:
    'トヨタSayuUとみてねみまもりGPSを徹底比較。交通安全機能重視のSayuUと、シンプル設計で月額528円のみてね、家庭の優先順位で選ぶ判断材料をまとめました。',
};

const faqData = [
  { q: 'SayuUとみてねの一番の違いは何ですか？', a: 'SayuUは交通安全サポート（左右確認検知・走行検知など）を特徴とするトヨタ開発のGPSで、みてねはシンプルな位置情報共有とトーク機能を提供するMIXIのGPSです。月額料金も大きく異なります（SayuU 1,210円／みてね 528円）。' },
  { q: '月額料金の差はどれくらいですか？', a: '月額ベースでSayuUは1,210円、みてねは528円で、年間で約8,000円の差が出ます。機能差をどう評価するかが判断のポイントです。' },
  { q: 'SayuUの「左右確認検知」とはどんな機能ですか？', a: '子どもが道路を渡る前に左右を確認したかを検知し、保護者に記録として通知する機能です。交通安全教育のサポートとして開発されたトヨタ独自の機能で、公式サイトに詳細が掲載されています。' },
  { q: 'どちらも通話はできますか？', a: 'SayuUは通話機能を搭載、みてねはトーク（音声メッセージ）機能を提供します。リアルタイムの通話ができるのはSayuUです。' },
  { q: '初期費用の違いは？', a: 'SayuUは端末16,500円、みてねは端末2,904円と大きな差があります。機能の豊富さと初期費用のバランスを考慮しましょう。' },
];

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

const comparison = [
  { item: '提供会社', sayuu: 'トヨタ自動車株式会社', mitene: '株式会社MIXI' },
  { item: '端末価格', sayuu: '16,500円', mitene: '2,904円' },
  { item: '月額料金', sayuu: '1,210円', mitene: '528円' },
  { item: '通話機能', sayuu: '◎ 対応', mitene: '音声メッセージのみ' },
  { item: '左右確認検知', sayuu: '◎ あり（独自機能）', mitene: '—' },
  { item: '走行検知', sayuu: '◎ あり（独自機能）', mitene: '—' },
  { item: 'バッテリー持ち', sayuu: '毎日充電が推奨', mitene: '最大2ヶ月' },
  { item: '主な用途', sayuu: '交通安全教育サポート', mitene: 'シンプル見守り' },
];

export default function SayuuVsMitenePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: '比較', href: '/' }, { name: 'SayuU vs みてね' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">トヨタ SayuU vs みてねみまもりGPS</h1>
          <p className="text-g600 text-lg">交通安全サポートかシンプル見守りか。ニーズ別の選び方を徹底解説</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">基本スペック比較</h2>
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

          <h2 className="section-title">SayuUが向いている家庭</h2>
          <div className="card-hover p-5 mb-6">
            <ul className="space-y-2 text-g600">
              <li>✓ 小1の入学時に交通安全教育もセットで考えたい</li>
              <li>✓ 毎日の通学路での安全行動を確認したい</li>
              <li>✓ 通話でリアルタイムに連絡を取りたい</li>
              <li>✓ 月額コストより機能の充実度を優先したい</li>
            </ul>
          </div>

          <h2 className="section-title">みてねみまもりGPSが向いている家庭</h2>
          <div className="card-hover p-5 mb-8">
            <ul className="space-y-2 text-g600">
              <li>✓ コストを抑えてシンプルに見守りたい</li>
              <li>✓ バッテリー持ちを最優先したい（最大2ヶ月）</li>
              <li>✓ 位置情報の確認がメインで、通話は不要</li>
              <li>✓ 月額500円台で続けやすい料金を希望</li>
            </ul>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item"><summary>{faq.q}</summary><div className="faq-answer">{faq.a}</div></details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">ランキングで他機種もチェック</h2>
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
