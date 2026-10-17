import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS 安い順ランキング | 月額料金比較とコスパ重視のおすすめTOP5',
  description:
    '子供用GPS端末11機種を、月額料金の安い順に比較します。本体価格を含めた総コストの計算、2台目割引の情報、コスパランキングTOP5を掲載しています。最安で月額480円から利用できる見守りGPSを紹介します。',
};

const faqData = [
  { q: '子供用GPS端末で一番安いのはどれ？', a: '月額料金が最も安いのは、conecoの月額480円（税込）です。次いで、みてねみまもりGPS、BoTトーク、はろここが月額528円で並びます。' },
  { q: '本体価格も含めると一番お得なのは？', a: '本体価格と月額料金を合わせた年間総コストで比較すると、本体3,800円・月額480円のconecoが初年度最安です。ただし、2台目まで考慮すると、あんしんウォッチャー（2台目無料）がお得です。' },
  { q: '2台目割引がある機種はありますか？', a: 'あんしんウォッチャー（KDDI）は、2台目の月額料金が無料です。兄弟で使う場合には、費用を大きく抑えられます。' },
  { q: '安い機種は機能が少ないですか？', a: '月額480円〜528円の機種でも、位置確認・移動履歴・エリア通知などの基本機能は充実しています。トーク機能やSOS機能が必要な場合は、追加料金のプランをご検討ください。' },
  { q: '途中で解約できますか？', a: 'ほとんどのGPS端末には、契約期間の縛りや解約金がありません。不要になった場合は、いつでも解約できます。ただし、端末によっては最低利用期間が設けられている場合があるため、事前にご確認ください。' },
  { q: '初期費用はいくらかかりますか？', a: '初期費用は主に本体価格のみです。最安のconecoで3,800円、一般的な機種で5,000円〜8,000円程度です。事務手数料や初期登録料は、無料の機種が多くなっています。' },
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

export default function CheapPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPS 安い順ランキング", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '目的別', href: '/purpose/' }, { name: '安い・コスパ重視' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">コスパ重視</span>
            <span className="tag-pill bg-blue text-white">月額480円〜</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS 安い順ランキング・コスパ比較
          </h1>
          <p className="text-g600 text-lg">全11機種の月額料金比較 | 本体込み総コスト | コスパTOP5</p>
        </div>
      </section>

      {/* 料金比較表 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">全11機種 月額料金比較（安い順）</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue text-white">
                  <th className="p-3 text-left">順位</th>
                  <th className="p-3 text-left">機種名</th>
                  <th className="p-3 text-center">月額料金</th>
                  <th className="p-3 text-center">本体価格</th>
                  <th className="p-3 text-center">年間総コスト</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', 'coneco', '480円', '6,600円', '12,360円', '/review/coneco/'],
                  ['2', 'みてねみまもりGPS', '528円', '5,280円', '11,616円', '/review/mitene/'],
                  ['3', 'BoTトーク', '528円', '5,280円', '11,616円', '/review/bot-talk/'],
                  ['4', 'はろここ', '528円', '5,280円', '11,616円', '/review/halococo/'],
                  ['5', 'あんしんウォッチャー', '539円', '5,680円', '12,148円', '/review/anshin-watcher/'],
                  ['6', 'まもサーチ', '539円', '5,280円', '11,748円', '/review/mamosearch/'],
                  ['7', 'みもり', '748円', '8,580円', '17,556円', '/review/mimori/'],
                  ['8', 'BoTトーク（トーク付）', '748円', '5,280円', '14,256円', '/review/bot-talk/'],
                  ['9', 'Hamic', '1,100円', '12,100円', '25,300円', '/review/hamic/'],
                  ['10', 'SayuU', '1,210円', '13,200円', '27,720円', '/review/sayuu/'],
                  ['11', 'myFirst Fone', '約980円〜', '約18,000円〜', '約29,760円〜', '/review/myfirst-fone/'],
                ].map(([rank, name, monthly, device, annual, href]) => (
                  <tr key={rank + name} className="border-b border-g100">
                    <td className="p-3 font-bold text-orange">{rank}</td>
                    <td className="p-3"><Link href={href} className="text-blue hover:underline font-semibold">{name}</Link></td>
                    <td className="p-3 text-center text-g600">{monthly}</td>
                    <td className="p-3 text-center text-g600">{device}</td>
                    <td className="p-3 text-center font-semibold text-g800">{annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">※年間総コスト＝本体価格＋月額料金×12カ月（税込・初年度）です。myFirst FoneはSIMが別契約のため、概算で記載しています。</p>

          {/* 2台目割引 */}
          <h2 className="section-title">2台目割引・兄弟利用に適した機種</h2>
          <div className="card-hover p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="tag-pill bg-green text-white">兄弟利用におすすめ</span>
            </div>
            <h3 className="font-bold text-g800 text-lg mb-2">
              <Link href="/review/anshin-watcher/" className="text-blue hover:underline">あんしんウォッチャー</Link> — 2台目月額無料
            </h3>
            <p className="text-g600 text-sm mb-3">
              KDDIのあんしんウォッチャーは、2台目の月額料金が無料です。兄弟2人で使っても、月額は539円のみです。
              年間総コストは2台で18,508円（1台あたり9,254円）となり、費用を大きく抑えられます。
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-blue-light rounded-lg p-3">
                <p className="text-sm font-semibold text-blue">1台利用の場合</p>
                <p className="text-sm text-g600">本体5,680円+月額539円×12=年間12,148円</p>
              </div>
              <div className="bg-green-light rounded-lg p-3">
                <p className="text-sm font-semibold text-green-dark">2台利用の場合</p>
                <p className="text-sm text-g600">本体5,680円×2+月額539円×12=年間18,508円（1台9,254円）</p>
              </div>
            </div>
          </div>

          {/* コスパTOP5 */}
          <h2 className="section-title">コスパランキングTOP5</h2>
          <div className="space-y-4 mb-8">
            {[
              { rank: 1, name: 'みてねみまもりGPS', reason: '月額528円で機能が充実しており、利用者数No.1です。バッテリーが2カ月持つため、充電の手間も少なく済みます。', href: '/review/mitene/' },
              { rank: 2, name: 'あんしんウォッチャー', reason: '2台目無料のため、兄弟での利用に適しています。KDDI品質の安定した通信で、au以外の回線の保護者でも利用できます。', href: '/review/anshin-watcher/' },
              { rank: 3, name: 'coneco', reason: '月額480円で業界最安です。1分間隔の追跡に対応した高機能な機種で、価格以上の価値があります。', href: '/review/coneco/' },
              { rank: 4, name: 'まもサーチ', reason: '月額539円で、最大25人で見守れます。大家族やシッターとの共有に適しています。', href: '/review/mamosearch/' },
              { rank: 5, name: 'BoTトーク', reason: '月額528円の基本プランでも、高精度なAI学習を搭載しています。トーク付きのプランでも748円です。', href: '/review/bot-talk/' },
            ].map((item) => (
              <div key={item.rank} className="flex gap-4 items-start card-hover p-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center font-bold">
                  {item.rank}
                </span>
                <div>
                  <h3 className="font-bold text-g800">
                    <Link href={item.href} className="text-blue hover:underline">{item.name}</Link>
                  </h3>
                  <p className="text-sm text-g600">{item.reason}</p>
                </div>
              </div>
            ))}
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">コストパフォーマンスに優れたGPSの選び方</h2>
            <p className="text-g600 mb-6 text-sm">月額480円から、手頃な価格でお子さまの見守りを始められます。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">全機種ランキングを見る</Link>
              <Link href="/purpose/talk/" className="btn-accent">トーク機能付きを探す</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
