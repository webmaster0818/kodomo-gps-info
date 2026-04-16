import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS バッテリー長持ちで選ぶ | 充電頻度が少ない機種ランキング',
  description:
    '充電忘れを減らしたい家庭に向けて、バッテリーが長持ちする子供GPSを機種選び視点で比較。最大2ヶ月持つみてねみまもりGPSやあんしんウォッチャーなどを紹介します。',
};

const faqData = [
  { q: '一番バッテリーが長持ちする子供GPSはどれ？', a: 'みてねみまもりGPSとあんしんウォッチャーは最大約2ヶ月の長寿命バッテリーを公称しており、充電頻度を大幅に減らしたい家庭に向いています。実際の持ち時間は設定や使用環境によって変動します。' },
  { q: 'トーク機能を使うとバッテリーは短くなる？', a: 'はい。BoTトークのように音声通話を多用すると、公称値の最大1ヶ月から2週間程度まで短くなることがあります。トーク機能の使用頻度が高い場合は、週1〜2回の充電を想定しておくと安心です。' },
  { q: '更新頻度を下げると持ちは良くなる？', a: 'はい、位置情報の更新間隔を長くすると消費電力が減りバッテリーが長持ちします。リアルタイム性と持ちのバランスを家庭のニーズに合わせて調整しましょう。' },
  { q: '充電を忘れがちな家庭にはどのタイプがいい？', a: '充電頻度が少ないブロック型GPSがおすすめです。みてねみまもりGPSやあんしんウォッチャーのように長寿命モデルを選ぶことで、月に1〜2回の充電で運用できます。' },
  { q: 'バッテリーの寿命はどれくらいですか？', a: 'リチウムイオンバッテリーは一般的に2〜3年で性能が低下します。充電回数が増えるほど劣化が進むため、できるだけフル充電を避け、こまめに満充電状態をキープすることで寿命を延ばせます。' },
  { q: 'バッテリーが急に減るようになったらどうすれば？', a: 'バッテリーの経年劣化か、アプリの設定変更（更新頻度UP等）が原因の可能性があります。設定を見直しても改善しない場合は、メーカーサポートに相談し交換や買い替えを検討しましょう。' },
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
      <Breadcrumb items={[{ name: '目的別', href: '/' }, { name: 'バッテリー長持ち' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">最大2ヶ月</span>
            <span className="tag-pill bg-blue text-white">充電頻度少</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            バッテリー長持ち子供GPSの選び方
          </h1>
          <p className="text-g600 text-lg">機種選び視点で充電頻度の少ないGPSを比較</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">充電頻度が少ない機種の選び方</h2>
          <p className="text-g600 mb-6">
            子供GPSはお子さまのランドセルに入れっぱなしにすることが多く、親が充電を管理する運用が基本です。
            忙しい家庭ほどバッテリー持ちの長い機種がストレスなく使えます。
            本ページでは「機種選び」の視点から長寿命バッテリー機種を整理しました。
            使い方や仕組みは <Link href="/knowledge/battery/" className="text-blue hover:underline">お役立ちページ「バッテリー持ち」</Link> も参考にしてください。
          </p>

          <h2 className="section-title">バッテリー長持ち機種 比較一覧</h2>
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
                  { name: 'みてねみまもりGPS', battery: '最大約2ヶ月', freq: '月1回程度', note: '更新間隔の設定で調整可能', href: '/review/mitene/' },
                  { name: 'あんしんウォッチャー', battery: '最大約2ヶ月', freq: '月1回程度', note: 'KDDI品質の安定通信', href: '/review/anshin-watcher/' },
                  { name: 'BoTトーク（位置のみ）', battery: '最大約1ヶ月', freq: '月2回程度', note: 'トーク利用時は2週間程度', href: '/review/bot-talk/' },
                  { name: 'どこかなGPS', battery: '最大約1.5ヶ月', freq: '月2回程度', note: '詳細は公式サイトで要確認', href: '/review/dokokana/' },
                  { name: 'まもサーチ', battery: '最大約1ヶ月', freq: '月2回程度', note: '大人数見守り対応', href: '/review/mamosearch/' },
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
          <p className="text-xs text-g500 mb-8">※公称値は各社の標準的な利用条件に基づく目安です。実使用環境（更新頻度・通信環境）で変動します。</p>

          <h2 className="section-title">バッテリーを長く使うコツ</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: '🔋', title: '更新間隔を長めに', desc: 'リアルタイム性にこだわらないなら、更新間隔を10〜15分に設定して消費を抑える。' },
              { icon: '📅', title: '充電日を固定', desc: '「毎月1日に充電」など家族で決めて習慣化すれば充電忘れを防げる。' },
              { icon: '📵', title: '使わない機能はOFF', desc: 'トーク機能や通知を使わない場合はアプリ側で無効化してバッテリー消費を減らす。' },
              { icon: '🏠', title: 'Wi-Fi環境を活用', desc: '自宅Wi-Fiを登録すると、Wi-Fi圏内ではGPS消費が少なくて済む機種がある。' },
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

          <h2 className="section-title">こんな家庭にぴったり</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: '共働きで充電管理が難しい', desc: '月1回の充電で済むみてねみまもりGPSやあんしんウォッチャーなら、忙しい家庭でも安心。' },
              { title: '長期休みに旅行が多い', desc: '充電器を忘れがちな旅行前に「1ヶ月持つ」設計は強い味方。' },
              { title: 'トーク機能は不要', desc: '位置情報だけで良いなら、通話非対応でバッテリーに余裕がある機種がおすすめ。' },
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">充電ストレスから解放されよう</h2>
            <p className="text-g600 mb-6 text-sm">最大2ヶ月持つモデルで、毎日の忙しさをちょっと楽に。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/mitene/" className="btn-primary">みてねみまもりGPSを詳しく</Link>
              <Link href="/knowledge/battery/" className="btn-accent">バッテリーの使い方ガイド</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
