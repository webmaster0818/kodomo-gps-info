import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS バッテリー長持ちで選ぶ | 充電頻度が少ない機種ランキング',
  description:
    '充電の手間を減らしたいご家庭に向けて、バッテリーが長持ちする子供GPSを機種選びの観点から比較します。最大2カ月持つみてねみまもりGPSやあんしんウォッチャーなどをご紹介します。',
};

const faqData = [
  { q: '最もバッテリーが長持ちする子供GPSはどれですか？', a: 'みてねみまもりGPSとあんしんウォッチャーは、最大約2カ月の長寿命バッテリーを公称しており、充電の頻度を大幅に減らしたいご家庭に適しています。実際の持ち時間は、設定や使用環境によって変動します。' },
  { q: 'トーク機能を使うとバッテリーは短くなりますか？', a: '短くなります。BoTトークのように音声機能を多用すると、公称値の最大1カ月から2週間程度まで短くなることがあります。トーク機能の使用頻度が高い場合は、週1〜2回の充電を想定しておくことをおすすめします。' },
  { q: '更新頻度を下げるとバッテリー持ちは良くなりますか？', a: '良くなります。位置情報の更新間隔を長くすると消費電力が減り、バッテリーが長持ちします。リアルタイム性とバッテリー持ちのバランスを、ご家庭のニーズに合わせて調整してください。' },
  { q: '充電を忘れがちなご家庭にはどのタイプが適していますか？', a: '充電の頻度が少ないブロック型GPSをおすすめします。みてねみまもりGPSやあんしんウォッチャーのような長寿命モデルを選ぶことで、月に1〜2回の充電で運用できます。' },
  { q: 'バッテリーの寿命はどのくらいですか？', a: 'リチウムイオンバッテリーは、一般的に2〜3年で性能が低下します。充電回数が増えるほど劣化が進むため、できるだけフル充電を避け、こまめに満充電状態をキープすることで寿命を延ばせます。' },
  { q: 'バッテリーが急に減るようになった場合はどうすればよいですか？', a: 'バッテリーの経年劣化か、アプリの設定変更（更新頻度の引き上げ等）が原因の可能性があります。設定を見直しても改善しない場合は、メーカーのサポートに相談し、交換や買い替えをご検討ください。' },
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

export default function LongBatteryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPS バッテリー長持ちで選ぶ", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '目的別', href: '/purpose/' }, { name: 'バッテリー長持ち' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">最大2カ月</span>
            <span className="tag-pill bg-blue text-white">充電頻度が少ない</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            バッテリー長持ち子供GPSの選び方
          </h1>
          <p className="text-g600 text-lg">機種選びの観点から、充電頻度の少ないGPSを比較します</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">充電頻度が少ない機種の選び方</h2>
          <p className="text-g600 mb-6">
            子供GPSはお子さまのランドセルに入れたまま使うことが多く、保護者が充電を管理する運用が基本です。
            忙しいご家庭ほど、バッテリー持ちの長い機種のほうが負担なく使えます。
            本ページでは、機種選びの観点から長寿命バッテリーの機種を整理しています。
            使い方や仕組みは <Link href="/knowledge/battery/" className="text-blue hover:underline">お役立ちページ「バッテリー持ち」</Link> も参考にしてください。
          </p>

          <h2 className="section-title">バッテリー長持ち機種の比較一覧</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue text-white">
                  <th className="p-3 text-left">機種名</th>
                  <th className="p-3 text-center">公称バッテリー</th>
                  <th className="p-3 text-center">充電頻度の目安</th>
                  <th className="p-3 text-left">備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'みてねみまもりGPS', battery: '最大約2カ月', freq: '月1回程度', note: '更新間隔の設定で調整可能', href: '/review/mitene/' },
                  { name: 'あんしんウォッチャー', battery: '最大約2カ月', freq: '月1回程度', note: 'KDDI回線による安定した通信', href: '/review/anshin-watcher/' },
                  { name: 'BoTトーク（位置のみ）', battery: '最大約1カ月', freq: '月2回程度', note: 'トーク利用時は2週間程度', href: '/review/bot-talk/' },
                  { name: 'まもサーチ', battery: '最大約1カ月', freq: '月2回程度', note: '大人数での見守りに対応', href: '/review/mamosearch/' },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-g100">
                    <td className="p-3"><Link href={row.href} className="text-blue hover:underline font-semibold">{row.name}</Link></td>
                    <td className="p-3 text-center text-g600">{row.battery}</td>
                    <td className="p-3 text-center text-g600">{row.freq}</td>
                    <td className="p-3 text-g600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">※公称値は各社の標準的な利用条件にもとづく目安です。実際の使用環境（更新頻度・通信環境）により変動します。</p>

          <h2 className="section-title">バッテリーを長く使うための工夫</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: '🔋', title: '更新間隔を長めに設定する', desc: 'リアルタイム性を重視しない場合は、更新間隔を10〜15分に設定すると消費を抑えられます。' },
              { icon: '📅', title: '充電日を固定する', desc: '「毎月1日に充電」など家族で決めて習慣にすると、充電忘れを防げます。' },
              { icon: '📵', title: '使わない機能をオフにする', desc: 'トーク機能や通知を使わない場合は、アプリ側で無効にするとバッテリー消費を減らせます。' },
              { icon: '🏠', title: 'Wi-Fi環境を活用する', desc: '自宅のWi-Fiを登録すると、Wi-Fi圏内ではGPSの消費電力を抑えられる機種があります。' },
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

          <h2 className="section-title">長持ちモデルが適しているご家庭</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: '共働きで充電の管理が難しい', desc: '月1回の充電で済むみてねみまもりGPSやあんしんウォッチャーであれば、忙しいご家庭でも無理なく運用できます。' },
              { title: '長期休みに旅行が多い', desc: '充電器を忘れやすい旅行の際にも、1カ月持つ設計であれば安心です。' },
              { title: 'トーク機能は不要', desc: '位置情報のみで十分な場合は、通話に対応せずバッテリーに余裕がある機種をおすすめします。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">充電の手間を減らせる機種選び</h2>
            <p className="text-g600 mb-6 text-sm">最大2カ月持つモデルを選ぶことで、日々の充電の負担を軽減できます。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/mitene/" className="btn-primary">みてねみまもりGPSの詳細</Link>
              <Link href="/knowledge/battery/" className="btn-accent">バッテリーの使い方ガイド</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
