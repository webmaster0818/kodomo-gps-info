import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '夏休みだけ子供GPSを使える？短期利用・解約・初期費用を比較【2026年】',
  description:
    '「夏休みの間だけ子供にGPSを持たせたい」とお考えの方に向けて、短期利用に適した機種・初期費用（本体代）・解約のしやすさを比較します。契約期間の縛りや解約金のない機種を選べば、夏休みの数カ月のみの利用も可能です。レンタルとの違いや、2カ月利用した場合の費用シミュレーションも掲載しています。',
  keywords: ['子供GPS', '夏休み', '短期', 'レンタル', '解約', '初期費用', '比較'],
};

const shortTermData = [
  { name: 'みてねみまもりGPS', slug: '/review/mitene/', body: '5,280円', monthly: '748円（月々プラン）', bind: 'なし', note: '本体価格が最も安く、月々プランであれば短期利用でも無駄が生じにくい機種です。' },
  { name: 'あんしんウォッチャー', slug: '/review/anshin-watcher/', body: '11,000円（通常版）', monthly: '539円（通常版は12カ月無料特典あり）', bind: 'なし（最低利用期間なし）', note: '通常版には一定期間月額無料となる特典があり、夏から秋にかけての短期利用であれば月額の負担を抑えやすい機種です。' },
  { name: 'ソラノメ（販売終了）', slug: '/review/soranome/', body: '14,520円', monthly: '539円', bind: 'なし', note: '2026年4月1日付の公式告知で現行端末の販売が終了しています（2026年10月17日 公式確認）。新規の購入はできません。' },
];

const faqData = [
  { q: '夏休みだけ子供にGPSを持たせることはできますか？', a: 'はい、可能です。学童や帰省、旅行、テーマパークなど、夏休みは普段と行動範囲が変わり、迷子や見守りに関する不安が増える時期です。契約期間の縛りや解約金のない機種を選べば、夏休みの数カ月のみ利用し、終了後に解約するという使い方ができます。' },
  { q: '短期利用の場合、レンタルと購入のどちらが得ですか？', a: '子供用GPSはレンタルサービスが少なく、本体を購入して使用する機種がほとんどです。本体は5,000〜15,000円程度、月額は数百円のため、2〜3カ月の短期利用であっても、購入と短期契約を組み合わせるほうが選択肢が多く、わかりやすい場合が多くあります。また、利用終了後も翌年に再び使用できます。' },
  { q: '解約に違約金はかかりますか？', a: 'みてねみまもりGPS・あんしんウォッチャーは、いずれも契約期間の縛りや解約金がありません。ただし、あんしんウォッチャー通常版には「12カ月間 月額無料」などの特典があり、無料期間の途中で解約すると、残りの無料特典は無効になります（短期で利用を終える場合は問題ありません）。' },
  { q: '夏休みだけ使う場合、最も安い機種はどれですか？', a: '本体代が最も安いのは、みてねみまもりGPS（5,280円）です。2カ月のみ使用する場合、みてねは本体5,280円＋月748円×2＝約6,776円が目安です。あんしんウォッチャー通常版は月額無料の特典があるため、短期であれば実質的に本体代のみで利用できる場合もあります。最新の特典内容は、公式サイトにてご確認ください。' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function SummerShortTermPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: '夏休みだけ子供GPSを利用する場合の短期利用・解約・初期費用の比較', datePublished: '2026-06-23', dateModified: '2026-06-23', author: { '@type': 'Person', name: '子供見守りGPS最新情報 編集部' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '夏休みだけGPS' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">夏休み</span>
            <span className="tag-pill bg-blue text-white">短期利用</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">夏休みだけ子供GPSを利用する場合の短期利用・解約・初期費用の比較</h1>
          <p className="text-g600 text-lg">学童・帰省・旅行などで行動範囲が変わる夏休みに向けて、数カ月のみの利用に適した機種を比較します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">契約期間の縛りがない機種であれば、夏休みのみの利用も可能です</h2>
            <p className="text-g600">
              夏休みは学童・帰省・旅行・テーマパークなど、普段と行動範囲が変わり、<strong>迷子や見守りに関する不安が増える時期</strong>です。子供用GPSは<strong>契約期間の縛りや解約金がない機種が多く</strong>、本体を購入して数カ月のみ使用し、終了後に解約するという使い方ができます。本体は翌年の夏や、登下校で使い始める際にも再利用できるため、夏休みのみの利用も十分に選択肢となります。
            </p>
          </div>

          <h2 className="section-title">短期利用しやすい機種の比較</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">機種</th>
                  <th className="p-3 text-left border-b-2 border-blue">本体（初期費用）</th>
                  <th className="p-3 text-left border-b-2 border-blue">月額</th>
                  <th className="p-3 text-left border-b-2 border-blue">契約の縛り</th>
                </tr>
              </thead>
              <tbody>
                {shortTermData.map((m) => (
                  <tr key={m.name} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800 whitespace-nowrap"><Link href={m.slug} className="text-blue underline">{m.name}</Link></td>
                    <td className="p-3 text-g700 whitespace-nowrap">{m.body}</td>
                    <td className="p-3 text-g700">{m.monthly}</td>
                    <td className="p-3 text-g700 whitespace-nowrap">{m.bind}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-6">※料金は2026年6月時点で各社の公式サイトにて確認しています。特典・キャンペーンは変更される場合があります。お申し込み前に、公式サイトにて最新情報をご確認ください。</p>

          <h2 className="section-title">夏休みの2カ月のみ利用する場合の費用シミュレーション</h2>
          <div className="space-y-3 mb-8">
            {shortTermData.map((m) => (
              <div key={m.name} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{m.name}</h3>
                <p className="text-sm text-g600">{m.note}</p>
              </div>
            ))}
            <div className="card-hover p-4 bg-green-light/40">
              <p className="text-sm text-g700"><strong>目安</strong>：みてねみまもりGPSの場合、本体5,280円＋月748円×2カ月＝<strong>約6,776円</strong>で夏休み期間中に利用できます。あんしんウォッチャー通常版は月額無料の特典があるため、短期であれば実質的に本体代のみで利用できる場合もあります（特典内容は公式サイトにてご確認ください）。</p>
            </div>
          </div>

          <h2 className="section-title">短期利用の際の注意点</h2>
          <ul className="space-y-2 text-sm text-g700 mb-8">
            <li>・<strong>本体は買い切りが基本です</strong>。レンタルは選択肢が少なく、購入のほうがわかりやすい場合が多くあります（翌年も使用できます）。</li>
            <li>・あんしんウォッチャー通常版の<strong>「月額無料特典」は、途中で解約すると残りが無効</strong>になります。夏休みのみで利用を終える場合は問題ありません。</li>
            <li>・解約時に日割り計算が適用されない場合があるため、<strong>利用終了後は早めの解約手続き</strong>をおすすめします。</li>
            <li>・夏休みは品薄になることがあるため、<strong>使用を開始したい日より前に余裕を持って購入</strong>することをおすすめします。</li>
          </ul>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">夏休みの見守りに関する関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/summer-safety/" className="btn-primary">夏休みの見守りGPS活用ガイド</Link>
              <Link href="/compare/school-silent/" className="btn-accent">学校向け静音GPS比較</Link>
              <Link href="/" className="btn-primary">おすすめランキング</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
