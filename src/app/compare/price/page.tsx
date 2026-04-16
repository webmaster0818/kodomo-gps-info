import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS 月額料金比較一覧 | 全13機種の費用を徹底比較',
  description:
    '子供用GPS端末13機種の月額料金・本体価格・初期費用・年間コストを一覧で比較。安い順ランキングと2年間の総コスト計算で最もお得なGPS端末がわかります。',
};

const faqData = [
  { q: '最も月額が安い子供GPS端末はどれ？', a: 'みてねみまもりGPS（月額528円）とBoTトーク（月額528円）が最安クラスです。基本的な位置確認機能だけなら、月額500円台から利用できます。' },
  { q: '本体価格が最も安いのはどれ？', a: 'あんしんウォッチャーが本体5,680円で比較的安価です。みてねみまもりGPSも5,280円と手頃。時期によりキャンペーン割引もあります。' },
  { q: '初期費用はかかりますか？', a: '多くのGPS端末は本体価格のみで初期費用（事務手数料）は不要です。ソラノメは初期事務手数料3,300円がかかります。' },
  { q: '2年間の総コストはどれくらい？', a: '最安のみてねみまもりGPS（基本プラン）で約17,952円（本体5,280円＋月額528円×24ヶ月）です。高額機種では5万円を超えるものもあります。' },
  { q: '解約金はかかりますか？', a: 'ほとんどのGPS端末は契約期間の縛りや解約金がありません。ただし一部の機種では最低利用期間が設定されている場合がありますので、契約時にご確認ください。' },
  { q: '兄弟割引やお得なプランはある？', a: 'あんしんウォッチャーは2台目の月額が無料になるキャンペーンがあります。また、年払いプランで割引になる機種もあります。' },
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

const priceData = [
  { name: 'みてねみまもりGPS', monthly: 528, device: 5280, initial: 0, annual: 11616, twoYear: 17952 },
  { name: 'BoTトーク', monthly: 528, device: 5280, initial: 0, annual: 11616, twoYear: 17952 },
  { name: 'あんしんウォッチャー', monthly: 539, device: 5680, initial: 0, annual: 12148, twoYear: 18616 },
  { name: 'ソラノメ', monthly: 539, device: 14520, initial: 3300, annual: 10068, twoYear: 30756 },
  { name: 'どこかなGPS2', monthly: 528, device: 7480, initial: 0, annual: 11616, twoYear: 20152 },
  { name: 'みもり', monthly: 748, device: 8580, initial: 0, annual: 17556, twoYear: 26532 },
  { name: 'まもサーチ', monthly: 539, device: 5280, initial: 0, annual: 11748, twoYear: 18216 },
  { name: 'コネコ', monthly: 480, device: 19800, initial: 0, annual: 5760, twoYear: 31320 },
  { name: 'ハミック', monthly: 1100, device: 18700, initial: 0, annual: 13200, twoYear: 45100 },
  { name: 'myFirst Fone', monthly: 998, device: 26980, initial: 0, annual: 11976, twoYear: 50932 },
  { name: 'キッズケータイ（docomo）', monthly: 550, device: 14256, initial: 3850, annual: 10450, twoYear: 31356 },
  { name: 'ハロここ', monthly: 580, device: 4950, initial: 0, annual: 11910, twoYear: 18870 },
  { name: 'さゆう', monthly: 550, device: 6600, initial: 0, annual: 13200, twoYear: 19800 },
];

export default function PricePage() {
  const sorted = [...priceData].sort((a, b) => a.twoYear - b.twoYear);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: '比較', href: '/' }, { name: '月額料金比較' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">料金比較</span>
            <span className="tag-pill bg-orange text-white">全13機種</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS 月額料金比較一覧
          </h1>
          <p className="text-g600 text-lg">全13機種の料金・本体価格・総コストを一覧で比較</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">全13機種 料金比較表</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">機種名</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">月額</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">本体価格</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">初期費用</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">年間コスト</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((d) => (
                  <tr key={d.name} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{d.name}</td>
                    <td className="py-3 px-3 text-right text-g600">{d.monthly.toLocaleString()}円</td>
                    <td className="py-3 px-3 text-right text-g600">{d.device.toLocaleString()}円</td>
                    <td className="py-3 px-3 text-right text-g600">{d.initial === 0 ? '無料' : `${d.initial.toLocaleString()}円`}</td>
                    <td className="py-3 px-3 text-right text-g600">{d.annual.toLocaleString()}円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">2年間の総コスト 安い順ランキング</h2>
          <div className="space-y-3 mb-8">
            {sorted.map((d, i) => (
              <div key={d.name} className="flex items-center gap-4 card-hover p-4">
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${i < 3 ? 'bg-orange text-white' : 'bg-g100 text-g600'}`}>
                  {i + 1}
                </span>
                <div className="flex-1">
                  <p className="font-bold text-g800 text-sm">{d.name}</p>
                  <p className="text-xs text-g500">月額 {d.monthly.toLocaleString()}円 / 本体 {d.device.toLocaleString()}円</p>
                </div>
                <p className="font-extrabold text-blue text-lg">{d.twoYear.toLocaleString()}円</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">コスパ最強のGPS端末を見つけよう</h2>
            <p className="text-g600 mb-6 text-sm">料金だけでなく機能・精度も比較して最適な1台を選びましょう。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">総合ランキング</Link>
              <Link href="/compare/accuracy/" className="btn-accent">精度比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
