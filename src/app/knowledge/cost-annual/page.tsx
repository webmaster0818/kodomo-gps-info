import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供用GPSの年間コスト比較｜月額料金と初期費用の総まとめ',
  description:
    '子供用GPS端末の年間コストを徹底比較。主要6機種の初期費用・月額料金・年間トータルコストを一覧表で紹介。2年・3年の長期コスト比較やコスパの良い選び方、隠れコストまで解説します。',
  keywords: ['子供GPS', '年間コスト', '比較', 'ランニングコスト', '月額料金', '初期費用'],
  openGraph: {
    title: '子供用GPSの年間コスト比較｜月額料金と初期費用の総まとめ',
    description: '子供用GPS端末の年間コストを徹底比較。主要6機種の初期費用・月額料金・年間トータルコストを一覧表で紹介。',
  },
};

const faqData = [
  { q: '子供用GPSの年間コストはどれくらいですか？', a: '最安クラスで年間約10,000〜12,000円（初期費用含む）、標準的な機種で約13,000〜18,000円、多機能な腕時計型で約25,000〜35,000円が目安です。2年目以降は月額料金のみのため、初年度より安くなります。' },
  { q: '初期費用が無料のGPS端末はありますか？', a: 'あんしんウォッチャー LE（au）は本体代が実質無料のキャンペーンを実施していることがあります。ただし月額料金や契約期間の条件がある場合があるため、総コストで比較することが重要です。' },
  { q: '月額料金の支払い方法は？', a: 'クレジットカード払いが主流です。一部の機種ではキャリア決済にも対応しています。年払いで割引になるサービスもあるため、長期利用が前提なら年払いを検討しましょう。' },
  { q: '解約金はかかりますか？', a: '多くのGPS端末は最低利用期間がなく、解約金は発生しません。ただし一部の機種では契約から一定期間内の解約で違約金がかかるケースがあるため、契約前に確認しましょう。' },
  { q: 'バッテリー劣化で買い替えが必要になる時期は？', a: '一般的に2〜3年でバッテリーの持ちが短くなります。バッテリー交換はできない機種がほとんどのため、本体ごとの買い替えになります。月額契約は引き継げるケースが多いです。' },
  { q: 'きょうだいで使う場合の費用は？', a: '各社とも端末ごとに月額料金がかかります。2台目以降の割引がある機種は少ないため、基本的には台数分の費用が必要です。保護者アプリは1つで複数台管理できるのが一般的です。' },
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

const costData = [
  { name: 'みてねみまもりGPS', initial: 5280, monthly: 528, annual1: 11616, annual2: 17904, annual3: 24192 },
  { name: 'あんしんウォッチャー', initial: 11000, monthly: 539, annual1: 17468, annual2: 23936, annual3: 30404 },
  { name: 'BoTトーク', initial: 5280, monthly: 748, annual1: 14256, annual2: 23232, annual3: 32208 },
  { name: 'まもサーチ', initial: 5280, monthly: 528, annual1: 11616, annual2: 17952, annual3: 24288 },
  { name: 'myFirst Fone R2', initial: 26980, monthly: 998, annual1: 38956, annual2: 50932, annual3: 62908 },
];

const hiddenCosts = [
  { title: '充電ケーブル予備', cost: '500〜1,000円', desc: '自宅用と予備で2本あると安心。USB Type-C対応が主流。' },
  { title: '保護ケース・カバー', cost: '500〜2,000円', desc: '落下防止や防水強化のためのシリコンケース。必須ではないが、あると端末が長持ち。' },
  { title: 'ストラップ・キーホルダー', cost: '300〜800円', desc: 'ランドセルやカバンに取り付けるためのアクセサリー。紛失防止に有効。' },
  { title: 'バッテリー劣化による買い替え', cost: '5,000〜7,000円（2〜3年後）', desc: 'バッテリー交換不可の機種が多く、本体ごとの買い替えが必要。月額はそのまま。' },
];

export default function CostAnnualPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供用GPSの年間コスト比較｜月額料金と初期費用の総まとめ", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "お役立ち", "item": "https://gps-kodomo.com/knowledge/"}, {"@type": "ListItem", "position": 3, "name": "年間コスト比較", "item": "https://gps-kodomo.com/knowledge/cost-annual/"}]}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '年間コスト比較' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">年間コスト</span>
            <span className="tag-pill bg-blue text-white">料金比較</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供用GPSの年間コスト比較
          </h1>
          <p className="text-g600 text-lg">月額料金と初期費用の総まとめ｜長期コストで賢く選ぶ</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">GPS端末のコスト構造</h2>
          <p className="text-g600 mb-6">
            子供用GPS端末のコストは「初期費用（本体代）」と「月額料金（通信費・サービス利用料）」の2つで構成されます。
            初期費用は5,000円〜27,000円、月額料金は528円〜998円と幅があります。
            1年だけの比較では初期費用の影響が大きくなりますが、2〜3年の長期利用では月額料金の差がトータルコストに大きく影響します。
          </p>

          <h2 className="section-title">主要GPS端末の年間コスト比較表</h2>
          <p className="text-sm text-g500 mb-3">※ 価格は税込。2026年5月時点の公式サイト掲載価格に基づく。キャンペーン割引は含まず。</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">機種名</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">初期費用</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">月額</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">1年目</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">2年目累計</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">3年目累計</th>
                </tr>
              </thead>
              <tbody>
                {costData.map((d) => (
                  <tr key={d.name} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{d.name}</td>
                    <td className="py-3 px-3 text-right text-g600">{d.initial.toLocaleString()}円</td>
                    <td className="py-3 px-3 text-right text-g600">{d.monthly.toLocaleString()}円</td>
                    <td className="py-3 px-3 text-right text-g600">{d.annual1.toLocaleString()}円</td>
                    <td className="py-3 px-3 text-right text-g600">{d.annual2.toLocaleString()}円</td>
                    <td className="py-3 px-3 text-right text-g600">{d.annual3.toLocaleString()}円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">コスト比較のポイント</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: '💰', title: '1年目は初期費用で差がつく', desc: '本体代が5,280円と11,000円では、月額が同じでも1年目の差は約5,700円。初期費用の安さは短期利用なら大きなメリット。' },
              { icon: '📊', title: '2年以上なら月額重視', desc: '2年目以降は月額料金のみ。月額528円と748円の差は年間2,640円。3年間で約8,000円の差になります。' },
              { icon: '🔍', title: '機能と価格のバランス', desc: 'トーク機能付きは月額が高め。トーク不要なら月額528円クラスで十分。必要な機能だけを選ぶのがコスパの秘訣。' },
              { icon: '⏰', title: '利用期間で選ぶ', desc: '小1〜小6まで使うなら6年分のコスト試算を。途中で買い替えが発生する前提で、2〜3年サイクルの合計額で比較。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-2xl">{item.icon}</p>
                <div>
                  <h3 className="font-bold text-g800">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">コスパの良い選び方</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: '必要な機能を洗い出す', desc: '位置確認のみで良いのか、トーク機能も欲しいのか。機能を絞ることで月額を抑えられます。' },
              { step: 2, title: '利用予定年数を決める', desc: '1年だけなら初期費用重視、3年以上なら月額重視で選ぶとトータルコストが抑えられます。' },
              { step: 3, title: 'キャンペーンを活用する', desc: '入学シーズン（3〜4月）や年末年始にキャンペーンが多い。本体代割引や月額無料期間を活用。' },
              { step: 4, title: '年払い割引を確認する', desc: '一部サービスでは年払いで月額が割引に。長期利用が確定しているなら年払いがお得。' },
              { step: 5, title: '隠れコストも含めて判断する', desc: 'ケースや充電ケーブルの予備、バッテリー劣化による買い替えなど、本体+月額以外の費用も計算に入れましょう。' },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start card-hover p-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center font-bold text-sm">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-bold text-g800 text-sm">{s.title}</h3>
                  <p className="text-sm text-g600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">隠れコスト（本体+月額以外の費用）</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {hiddenCosts.map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-orange font-semibold mb-1">{item.cost}</p>
                <p className="text-sm text-g600">{item.desc}</p>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">コスパで選ぶなら長期コストで比較</h2>
            <p className="text-g600 mb-6 text-sm">初期費用だけでなく、2〜3年のトータルコストで比較するのが賢い選び方です。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/price/" className="btn-primary">月額料金比較</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">GPS選び方ガイド</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
