import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '電池持ちがいい子供GPS比較【2026年】充電頻度が少ない機種ランキング',
  description:
    '子供用GPSをバッテリー（電池持ち）で比較。充電忘れが心配な家庭向けに、1回の充電で何日・何ヶ月持つかを機種別にランキング。位置情報専用機種は最大約2ヶ月、トーク・通話付きは数日と差が大きいため、充電頻度で選ぶポイントを解説します。',
  keywords: ['子供GPS', '電池持ち', 'バッテリー', '充電', '比較', '長持ち'],
};

const batteryData = [
  { name: 'あんしんウォッチャー', slug: '/review/anshin-watcher/', battery: '最大約2ヶ月', type: '位置情報専用', note: '1,500mAh。位置情報専用で最長クラス。電池は内蔵式（交換不可）。' },
  { name: 'みてねみまもりGPS', slug: '/review/mitene/', battery: '最大約2ヶ月', type: '位置情報専用', note: '更新間隔を長めにすると更に持つ。充電忘れが心配な家庭に最適。' },
  { name: 'まもサーチ', slug: '/review/mamosearch/', battery: '最大約1ヶ月', type: '位置情報専用', note: 'シンプルな位置情報専用。月1回程度の充電で運用可。' },
  { name: 'BoTトーク(旧GPS BoTは完売)', slug: '/review/bot-talk/', battery: '最大約1ヶ月', type: '位置情報（トーク版あり）', note: 'トーク機能を使うと消費は増える。' },
  { name: 'ソラノメ', slug: '/review/soranome/', battery: '最大約1週間', type: '位置情報専用', note: '更新頻度が高め。こまめな充電が前提。' },
  { name: 'coneco', slug: '/review/coneco/', battery: '約3日〜2週間', type: '位置情報専用', note: '更新頻度の設定で持ちが大きく変わる。' },
  { name: 'Hamic', slug: '/review/hamic/', battery: '約2〜3日', type: 'キッズスマホ型', note: '通話・メッセージ機能があるぶん短め。ほぼ毎日充電。' },
  { name: 'myFirst Fone', slug: '/review/myfirst-fone/', battery: '約1〜2日', type: '通話/スマートウォッチ型', note: '通話・ビデオ通話対応で消費大。毎日充電が必要。' },
];

const faqData = [
  { q: '電池持ちが一番いい子供GPSは？', a: '位置情報専用のあんしんウォッチャーとみてねみまもりGPSが「最大約2ヶ月」で最長クラスです。次いでまもサーチ3やBoTトークが約1ヶ月。一方、通話やメッセージができるキッズスマホ型（Hamic）やスマートウォッチ型（myFirst Fone）は数日で、ほぼ毎日の充電が必要です。' },
  { q: 'なぜ機種によって電池持ちがこんなに違うの？', a: '主な理由は「機能」と「位置情報の更新頻度」です。通話・メッセージ・画面表示があるスマホ/ウォッチ型は消費が大きく数日しか持ちません。位置情報のみのシンプルな機種は消費が少なく、更新間隔を長めにすると最大約2ヶ月持ちます。' },
  { q: '充電忘れが心配です。対策は？', a: '電池持ちが長い位置情報専用機種（最大約2ヶ月）を選ぶのが一番の対策です。多くの機種は残量が少なくなるとアプリに通知が届くので、通知が来たら充電する運用にすると切らしにくくなります。週末にまとめて充電する習慣をつけるのもおすすめです。' },
  { q: '電池持ちと位置情報の更新頻度はどう関係する？', a: '位置情報を頻繁に更新するほど精度・リアルタイム性は上がりますが、電池の消費は増えます。多くの機種はアプリで更新間隔を変更でき、間隔を長くすると電池持ちが向上します。通学路など重要な時間帯だけ更新を細かくするのも一つの方法です。' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function BatteryLifeComparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: '電池持ちがいい子供GPS比較', datePublished: '2026-06-26', dateModified: '2026-06-26', author: { '@type': 'Person', name: 'GPS見守りナビ編集部' }, publisher: { '@type': 'Organization', name: 'GPS子供見守り最新情報' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://gps-kodomo.com/' }, { '@type': 'ListItem', position: 2, name: '比較', item: 'https://gps-kodomo.com/compare/' }, { '@type': 'ListItem', position: 3, name: '電池持ち比較', item: 'https://gps-kodomo.com/compare/battery-life/' }] }) }} />
      <Breadcrumb items={[{ name: '比較', href: '/' }, { name: '電池持ち比較' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">電池持ち</span>
            <span className="tag-pill bg-orange text-white">充電頻度で選ぶ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">電池持ちがいい子供GPS比較</h1>
          <p className="text-g600 text-lg">充電忘れが心配な家庭へ。1回の充電で何日・何ヶ月持つかで比較しました</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：充電忘れ対策なら「位置情報専用」が最強</h2>
            <p className="text-g600">
              子供用GPSの電池持ちは機種で大きく異なります。<strong>位置情報専用のあんしんウォッチャー・みてねみまもりGPSは最大約2ヶ月</strong>と圧倒的に長持ち。一方、<strong>通話やメッセージができるスマホ/ウォッチ型（Hamic・myFirst Fone）は数日</strong>で、ほぼ毎日の充電が必要です。「充電を切らして見守れない」を防ぐなら、電池持ちの長い位置情報専用機種がおすすめです。
            </p>
          </div>

          <h2 className="section-title">電池持ちランキング（1回の充電で持つ目安）</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">順位</th>
                  <th className="p-3 text-left border-b-2 border-blue">機種</th>
                  <th className="p-3 text-left border-b-2 border-blue">電池持ち</th>
                  <th className="p-3 text-left border-b-2 border-blue">タイプ</th>
                </tr>
              </thead>
              <tbody>
                {batteryData.map((m, i) => (
                  <tr key={m.name} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-blue">{i + 1}</td>
                    <td className="p-3 font-bold text-g800 whitespace-nowrap"><Link href={m.slug} className="text-blue underline">{m.name}</Link></td>
                    <td className="p-3 text-g700 whitespace-nowrap">{m.battery}</td>
                    <td className="p-3 text-g600 text-xs">{m.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">※電池持ちは各社公式・公表値の目安で、位置情報の更新頻度・利用状況・気温により変動します。最新仕様は各公式サイトでご確認ください。</p>

          <h2 className="section-title">各機種の電池持ちポイント</h2>
          <div className="space-y-3 mb-8">
            {batteryData.map((m) => (
              <div key={m.name} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1"><Link href={m.slug} className="text-blue underline">{m.name}</Link>（{m.battery}）</h3>
                <p className="text-sm text-g600">{m.note}</p>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">用途別にもっと比較する</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/after-school/" className="btn-primary">学童・習い事の行き帰り比較</Link>
              <Link href="/compare/cost/" className="btn-accent">コスパ・料金比較</Link>
              <Link href="/compare/school-silent/" className="btn-primary">学校向け静音GPS比較</Link>
              <Link href="/compare/school-trip/" className="btn-accent">遠足・修学旅行向け比較</Link>
              <Link href="/" className="btn-primary">おすすめTOPへ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
