import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '電池持ちがいい子供GPS比較【2026年】充電頻度が少ない機種ランキング',
  description:
    '子供用GPSをバッテリー（電池持ち）で比較します。充電忘れが心配なご家庭に向けて、1回の充電で何日・何カ月持つかを機種別のランキングで掲載しています。位置情報専用機種は最大約2カ月、トーク・通話付きの機種は数日と差が大きいため、充電頻度で選ぶ際のポイントを解説します。',
  keywords: ['子供GPS', '電池持ち', 'バッテリー', '充電', '比較', '長持ち'],
};

const batteryData = [
  { name: 'あんしんウォッチャー', slug: '/review/anshin-watcher/', battery: '最大約2カ月', type: '位置情報専用', note: '容量は1,500mAhです。位置情報専用で、電池持ちは最長クラスです。電池は内蔵式（交換不可）です。' },
  { name: 'みてねみまもりGPS', slug: '/review/mitene/', battery: '最大約2カ月', type: '位置情報専用', note: '更新間隔を長めにすると、さらに長く持ちます。充電忘れが心配なご家庭に適しています。' },
  { name: 'まもサーチ', slug: '/review/mamosearch/', battery: '最大約1カ月', type: '位置情報専用', note: 'シンプルな位置情報専用機です。月1回程度の充電で運用できます。' },
  { name: 'BoTトーク(旧GPS BoTは完売)', slug: '/review/bot-talk/', battery: '最大約1カ月', type: '位置情報（トーク版あり）', note: 'トーク機能を使うと、電池の消費が増えます。' },
  { name: 'ソラノメ（販売終了）', slug: '/review/soranome/', battery: '最大約1週間', type: '位置情報専用', note: '2026年4月1日付の公式告知で現行端末の販売が終了しています（2026年10月17日 公式確認）。' },
  { name: 'coneco', slug: '/review/coneco/', battery: '約3日〜2週間', type: '位置情報専用', note: '更新頻度の設定により、電池持ちが大きく変わります。' },
  { name: 'Hamic', slug: '/review/hamic/', battery: '約2〜3日', type: 'キッズスマートフォン型', note: '通話・メッセージ機能があるため、電池持ちは短めです。ほぼ毎日の充電が必要です。' },
  { name: 'myFirst Fone', slug: '/review/myfirst-fone/', battery: '約1〜2日', type: '通話/スマートウォッチ型', note: '通話・ビデオ通話に対応しているため、消費が大きい機種です。毎日の充電が必要です。' },
];

const faqData = [
  { q: '電池持ちが最も良い子供GPSはどれですか？', a: '位置情報専用のあんしんウォッチャーとみてねみまもりGPSが「最大約2カ月」で最長クラスです。次いで、まもサーチ3やBoTトークが約1カ月です。一方、通話やメッセージができるキッズスマートフォン型（Hamic）やスマートウォッチ型（myFirst Fone）は数日で、ほぼ毎日の充電が必要です。' },
  { q: '機種によって電池持ちが大きく異なるのはなぜですか？', a: '主な理由は「機能」と「位置情報の更新頻度」です。通話・メッセージ・画面表示があるスマートフォン型・ウォッチ型は消費が大きく、数日程度で電池が切れます。位置情報のみのシンプルな機種は消費が少なく、更新間隔を長めにすると最大約2カ月持ちます。' },
  { q: '充電忘れが心配です。どのような対策がありますか？', a: '電池持ちが長い位置情報専用機種（最大約2カ月）を選ぶことが、最も有効な対策です。多くの機種は残量が少なくなるとアプリに通知が届くため、通知を受けて充電する運用にすると、電池切れを防ぎやすくなります。週末にまとめて充電する習慣をつけることもおすすめします。' },
  { q: '電池持ちと位置情報の更新頻度には、どのような関係がありますか？', a: '位置情報を頻繁に更新するほど精度・リアルタイム性は上がりますが、電池の消費は増えます。多くの機種はアプリで更新間隔を変更でき、間隔を長くすると電池持ちが向上します。通学時間帯など重要な時間帯のみ更新を細かくすることも、一つの方法です。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: '電池持ちが良い子供GPS比較', datePublished: '2026-06-26', dateModified: '2026-06-26', author: { '@type': 'Person', name: '子供見守りGPS最新情報 編集部' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: '比較', href: '/compare/' }, { name: '電池持ち比較' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">電池持ち</span>
            <span className="tag-pill bg-orange text-white">充電頻度で選ぶ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">電池持ちが良い子供GPS比較</h1>
          <p className="text-g600 text-lg">充電忘れが心配なご家庭に向けて、1回の充電で何日・何カ月持つかを比較します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">充電忘れ対策には「位置情報専用」の機種が適しています</h2>
            <p className="text-g600">
              子供用GPSの電池持ちは機種で大きく異なります。<strong>位置情報専用のあんしんウォッチャー・みてねみまもりGPSは最大約2カ月</strong>と、特に長持ちします。一方、<strong>通話やメッセージができるスマートフォン型・ウォッチ型（Hamic・myFirst Fone）は数日</strong>で、ほぼ毎日の充電が必要です。電池切れで見守れない状態を防ぐには、電池持ちの長い位置情報専用機種をおすすめします。
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
          <p className="text-xs text-g500 mb-8">※電池持ちは各社公式の公表値にもとづく目安で、位置情報の更新頻度・利用状況・気温により変動します。最新の仕様は、各公式サイトにてご確認ください。</p>

          <h2 className="section-title">各機種の電池持ちのポイント</h2>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">用途別の比較</h2>
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
