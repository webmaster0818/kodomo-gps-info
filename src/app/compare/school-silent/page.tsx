import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '学校に持たせやすい完全静音GPS比較【2026年】音が鳴らない・トークなし機種を3年総額で比較',
  description:
    '小学校に持ち込みやすい「音が鳴らない・通話/トークなし」の子供用GPSに絞って比較します。みてねみまもりGPS・あんしんウォッチャー・ソラノメ（販売終了）を、本体＋月額×36カ月の3年総額（TCO）で比較し、最も安い機種をお示しします。学校が懸念する音の発生やスマートフォン化を避けたい保護者向けの記事です。',
  keywords: ['子供GPS', '学校', '静音', '音が鳴らない', '比較', 'トークなし', '持ち込み'],
};

const tcoData = [
  { name: 'みてねみまもりGPS', slug: '/review/mitene/', body: '5,280円', monthly: '528円', tco: '24,288円', note: '位置情報プラン（トークなし）です。販売中の機種の中で最も安価です。' },
  { name: 'あんしんウォッチャー', slug: '/review/anshin-watcher/', body: '11,000円', monthly: '539円', tco: '30,404円', note: '通話・トーク機能はありません。2台目の月額が0円のため、兄弟での利用に適しています。' },
  { name: 'ソラノメ（販売終了）', slug: '/review/soranome/', body: '14,520円', monthly: '539円', tco: '33,924円', note: '2026年4月1日付の公式告知で現行端末の販売が終了しています（2026年10月17日 公式確認）。新規の購入はできません（参考として販売時の価格で算出）。' },
];

const faqData = [
  { q: '学校に持たせるGPSは、どのように選べばよいですか？', a: '学校が懸念するのは「授業中に音が鳴る」「スマートフォンのように使われる」ことです。そのため、通話・トーク機能がなく音が鳴らない（または通知音をオフにできる）位置情報専用のGPSが持ち込みやすい傾向があります。本ページではその条件を満たす機種だけを比較しています。' },
  { q: '最も安い機種はどれですか？', a: '本体＋月額×36カ月の3年総額（TCO）で比べると、みてねみまもりGPSが24,288円で最安です。兄弟2人で使う場合は、2台目の月額が0円になるあんしんウォッチャーが割安になります（2台で約41,404円＝1人あたり約20,702円）。' },
  { q: 'トーク機能付きのGPSは学校に持ち込めませんか？', a: '一概に不可とはいえませんが、校内で音声メッセージの送受信ができるトーク機能は「授業の妨げ」「スマートフォン化」と見なされやすく、学校が敬遠する傾向があります。学校用には、音が鳴らない位置情報専用機種をおすすめします。最終的な可否は各校の判断によるため、事前にご確認ください。' },
  { q: '音が鳴らない設定にできますか？', a: 'みてねみまもりGPS（位置情報プラン）は通話・トークがなく音が鳴りません（同じく音が鳴らないソラノメは、現行端末の販売を終了しています）。あんしんウォッチャーは通話・トークがなく、通知音もオフに設定できます。いずれも授業中はランドセルに入れたままで問題ありません。' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function SchoolSilentComparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: '学校に持たせやすい完全静音GPS比較', datePublished: '2026-06-23', dateModified: '2026-06-23', author: { '@type': 'Person', name: '子供見守りGPS最新情報 編集部' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: '比較', href: '/compare/' }, { name: '学校向け静音GPS比較' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">学校向け</span>
            <span className="tag-pill bg-orange text-white">静音・3年総額比較</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">学校に持たせやすい完全静音GPS比較</h1>
          <p className="text-g600 text-lg">音が鳴らない・トーク/通話なしの機種を、3年総額（本体＋月額×36カ月）で比較します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <p className="text-g600">
              小学校がGPSの持ち込みで気にするのは「<strong>授業中に音が鳴る</strong>」「<strong>スマートフォンのように使われる</strong>」ことです。そこで本ページでは、<strong>通話・トーク機能がなく音が鳴らない（または通知音をオフにできる）位置情報専用のGPS</strong>に絞って比較しました。あわせて、本体価格だけでは見えにくい月額を含めた<strong>3年総額（TCO）</strong>で、最も安い機種をお示しします。
            </p>
          </div>

          <h2 className="section-title">学校向け静音GPS 3年総額（TCO）比較</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">機種</th>
                  <th className="p-3 text-left border-b-2 border-blue">本体価格</th>
                  <th className="p-3 text-left border-b-2 border-blue">月額</th>
                  <th className="p-3 text-left border-b-2 border-blue">3年総額（目安）</th>
                </tr>
              </thead>
              <tbody>
                {tcoData.map((m) => (
                  <tr key={m.name} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800 whitespace-nowrap"><Link href={m.slug} className="text-blue underline">{m.name}</Link></td>
                    <td className="p-3 text-g700 whitespace-nowrap">{m.body}</td>
                    <td className="p-3 text-g700 whitespace-nowrap">{m.monthly}</td>
                    <td className="p-3 font-bold text-orange whitespace-nowrap">{m.tco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-4">※3年総額＝本体価格＋月額×36カ月で算出した目安です。事務手数料・送料・キャンペーン割引は含みません。みてねみまもりGPS（MG05：本体5,280円・月額528円）は2026年10月19日に公式サイトで再確認しました。そのほかの料金は2026年6月時点で各社公式サイトにて確認しています。最新の料金・プランは公式サイトでご確認ください。</p>

          <div className="card-hover p-5 mb-8 bg-green-light/40">
            <h3 className="font-bold text-g800 mb-2">兄弟で使う場合は「あんしんウォッチャー」が割安</h3>
            <p className="text-sm text-g600">あんしんウォッチャーは<strong>2台目の月額が0円</strong>（1つのau IDで2台まで）です。兄弟2人で使うと3年総額は約41,404円（本体11,000円×2＋月額539円×36）＝<strong>1人あたり約20,702円</strong>となり、1台ずつ別機種を持つより割安です。1人で使う場合は、みてねみまもりGPSが最も安価です。</p>
          </div>

          <h2 className="section-title">各機種の「学校向け」ポイント</h2>
          <div className="space-y-3 mb-8">
            {tcoData.map((m) => (
              <div key={m.name} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1"><Link href={m.slug} className="text-blue underline">{m.name}</Link></h3>
                <p className="text-sm text-g600">{m.note}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">学校には不向きなタイプ（注意点）</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-2">
              <strong>トーク（音声・テキストメッセージ）や通話機能を備えた機種</strong>は、校内で音が鳴ったり「スマートフォンのように使われる」と見なされたりするため、学校が敬遠する傾向があります。具体的には、みてねみまもりGPSの<strong>トークPlusプラン</strong>、BoTトーク、Hamic、キッズケータイ、myFirst Fone などのトーク・通話対応モデルです。
            </p>
            <p className="text-g600 text-sm">これらは家庭での連絡用には便利ですが、学校用としては、音が鳴らない位置情報専用モデルをおすすめします。最終的な持ち込み可否は各校の判断によるため、<Link href="/knowledge/school-rules/" className="text-blue underline">学校のルール</Link>を事前に確認してください。</p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-8 card-hover p-5 bg-blue-light rounded-2xl">
            <h3 className="font-bold text-g800 mb-2">学校への持ち込みルールの確認</h3>
            <p className="text-sm text-g600 mb-3">持ち込みの可否・申請方法・先生への確認に使える質問例は、学校ルールのまとめページで解説しています。遠足・修学旅行など行事に持たせたい場合は、専用の比較ページもご参照ください。</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/knowledge/school-rules/" className="btn-primary inline-block">GPSの学校持ち込みルールを見る</Link>
              <Link href="/compare/school-trip/" className="btn-accent inline-block">遠足・修学旅行向けGPS比較</Link>
            </div>
          </div>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">機種ごとの詳細</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/cost/" className="btn-primary">コスパ・料金比較</Link>
              <Link href="/compare/after-school/" className="btn-accent">学童・習い事の行き帰り比較</Link>
              <Link href="/review/mitene/" className="btn-primary">みてねみまもりGPS</Link>
              <Link href="/review/anshin-watcher/" className="btn-accent">あんしんウォッチャー</Link>
              <Link href="/" className="btn-primary">おすすめランキング</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
