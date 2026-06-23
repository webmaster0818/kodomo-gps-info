import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '夏休みだけ子供GPSはアリ？短期利用・解約・初期費用を比較【2026年】',
  description:
    '「夏休みの間だけ子供にGPSを持たせたい」という方向けに、短期利用しやすい機種・初期費用（本体代）・解約のしやすさを比較。契約縛りや解約金のない機種を選べば、夏休みの数ヶ月だけの利用も可能です。レンタルとの違い、2ヶ月利用の費用シミュレーションも掲載。',
  keywords: ['子供GPS', '夏休み', '短期', 'レンタル', '解約', '初期費用', '比較'],
};

const shortTermData = [
  { name: 'みてねみまもりGPS', slug: '/review/mitene/', body: '5,280円', monthly: '748円（月々プラン）', bind: 'なし', note: '本体が最安。月々プランなら短期でも無駄が出にくい。' },
  { name: 'あんしんウォッチャー', slug: '/review/anshin-watcher/', body: '11,000円（通常版）', monthly: '539円（通常版は12カ月無料特典あり）', bind: 'なし（最低利用期間なし）', note: '通常版は一定期間月額無料の特典があり、夏〜秋の短期なら月額負担を抑えやすい。' },
  { name: 'ソラノメ', slug: '/review/soranome/', body: '14,520円', monthly: '539円', bind: 'なし', note: '本体はやや高め。短期だと本体代の比重が大きくなる。' },
];

const faqData = [
  { q: '夏休みだけ子供にGPSを持たせるのはアリ？', a: 'アリです。学童や帰省、旅行、テーマパークなど、夏休みは普段と行動範囲が変わり迷子や見守りの不安が増えます。契約期間の縛りや解約金のない機種を選べば、夏休みの数ヶ月だけ使って終わったら解約する、という使い方ができます。' },
  { q: '短期だけならレンタルと購入どちらが得？', a: '子供用GPSはレンタルサービスが少なく、本体を購入して使う機種がほとんどです。本体は5,000〜15,000円程度で、月額数百円のため、2〜3ヶ月の短期でも購入＋短期契約のほうが選択肢が多く、結果的に分かりやすいことが多いです。終了後も来年また使えます。' },
  { q: '解約に違約金はかかりますか？', a: 'みてねみまもりGPS・あんしんウォッチャー・ソラノメはいずれも契約期間の縛りや解約金がありません。ただし、あんしんウォッチャー通常版は「12カ月間 月額無料」などの特典があり、無料期間の途中で解約すると残りの無料特典は無効になります（短期で使い切るなら問題ありません）。' },
  { q: '夏休みだけ使うなら一番安いのはどれ？', a: '本体代が最も安いのはみてねみまもりGPS（5,280円）です。2ヶ月だけ使う場合、みてねは本体5,280円＋月748円×2＝約6,776円が目安。あんしんウォッチャー通常版は月額無料特典があるため、短期なら実質本体代のみで持てる場合もあります。最新の特典内容は公式でご確認ください。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: '夏休みだけ子供GPSはアリ？短期利用・解約・初期費用を比較', datePublished: '2026-06-23', dateModified: '2026-06-23', author: { '@type': 'Person', name: 'GPS見守りナビ編集部' }, publisher: { '@type': 'Organization', name: 'GPS子供見守り最新情報' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://gps-kodomo.com/' }, { '@type': 'ListItem', position: 2, name: 'お役立ち', item: 'https://gps-kodomo.com/knowledge/' }, { '@type': 'ListItem', position: 3, name: '夏休みだけGPS', item: 'https://gps-kodomo.com/knowledge/summer-short-term/' }] }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '夏休みだけGPS' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">夏休み</span>
            <span className="tag-pill bg-blue text-white">短期利用</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">夏休みだけ子供GPSはアリ？短期利用・解約・初期費用を比較</h1>
          <p className="text-g600 text-lg">学童・帰省・旅行で行動範囲が変わる夏休み。数ヶ月だけの利用に向く機種を比較します</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：縛りなしの機種を選べば「夏だけ」でもOK</h2>
            <p className="text-g600">
              夏休みは学童・帰省・旅行・テーマパークなど、普段と行動範囲が変わり<strong>迷子や見守りの不安が増える時期</strong>です。子供用GPSは<strong>契約期間の縛りや解約金がない機種が多く</strong>、本体を買って数ヶ月だけ使い、終わったら解約する——という使い方ができます。本体は来年の夏や登下校デビューでも再利用できるため、「夏だけ」でも十分アリです。
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
          <p className="text-xs text-g500 mb-6">※料金は2026年6月時点で各社公式を確認。特典・キャンペーンは変更されることがあるため、申込前に公式サイトでご確認ください。</p>

          <h2 className="section-title">「夏休み2ヶ月だけ」の費用シミュレーション</h2>
          <div className="space-y-3 mb-8">
            {shortTermData.map((m) => (
              <div key={m.name} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{m.name}</h3>
                <p className="text-sm text-g600">{m.note}</p>
              </div>
            ))}
            <div className="card-hover p-4 bg-green-light/40">
              <p className="text-sm text-g700"><strong>目安</strong>：みてねみまもりGPSなら本体5,280円＋月748円×2ヶ月＝<strong>約6,776円</strong>で夏休みを乗り切れます。あんしんウォッチャー通常版は月額無料特典があるため、短期なら実質本体代のみで持てる場合もあります（特典内容は要確認）。</p>
            </div>
          </div>

          <h2 className="section-title">短期利用で失敗しないための注意点</h2>
          <ul className="space-y-2 text-sm text-g700 mb-8">
            <li>・<strong>本体は買い切りが基本</strong>。レンタルは選択肢が少なく、購入のほうが分かりやすいことが多い（来年も使える）。</li>
            <li>・あんしんウォッチャー通常版の<strong>「月額無料特典」は途中解約で残りが無効</strong>になる。夏だけで使い切るなら問題なし。</li>
            <li>・解約のタイミングで日割りがない場合があるので、<strong>使い終わったら早めに解約手続き</strong>を。</li>
            <li>・夏休みは品薄になることがあるため、<strong>使い始めたい日の少し前に購入</strong>しておくと安心。</li>
          </ul>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">夏休みの見守りをもっと詳しく</h2>
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
