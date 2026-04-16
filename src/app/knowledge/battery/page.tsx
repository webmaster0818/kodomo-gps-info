import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS バッテリー比較 | 機種別の電池持ちと長持ちのコツ',
  description:
    '子供GPS端末のバッテリー持ちを機種別に比較。最大2ヶ月持つ機種から毎日充電が必要な機種まで一覧で紹介。充電忘れ防止策やバッテリーを長持ちさせるコツ5つも解説。',
};

const faqData = [
  { q: 'バッテリーが最も長持ちするGPSは？', a: 'みてねみまもりGPSが最大約2ヶ月で最長です。次いでコネコ（約1ヶ月）、あんしんウォッチャー（約1.5ヶ月）と続きます。' },
  { q: '更新間隔とバッテリーの関係は？', a: '更新間隔が短いほどバッテリー消費が増えます。1.5分間隔だと約1〜2週間、3分間隔で約1ヶ月、15分間隔なら最大2ヶ月が目安です。' },
  { q: '充電にはどれくらい時間がかかる？', a: 'ほとんどのGPS端末は1.5〜3時間でフル充電できます。USB Type-Cケーブルで充電するタイプが主流です。' },
  { q: '充電しながら使えますか？', a: '技術的には可能ですが、外出中に充電する機会はないため、実質的には夜間に充電して翌日使う形になります。' },
  { q: 'バッテリーが劣化したらどうする？', a: '2〜3年でバッテリーの持ちが悪くなることがあります。多くの機種は本体ごと買い替えになります。月額契約はそのまま引き継げるケースが多いです。' },
  { q: '腕時計型のバッテリーが短いのはなぜ？', a: '腕時計型は画面表示・通話・カメラなど多機能なため、バッテリー消費が大きくなります。毎日〜2日おきの充電が必要な機種がほとんどです。' },
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

const batteryData = [
  { name: 'みてねみまもりGPS', battery: '最大約2ヶ月', charge: 'USB Type-C', level: 5 },
  { name: 'あんしんウォッチャー', battery: '最大約1.5ヶ月', charge: 'USB Type-C', level: 4 },
  { name: 'BoTトーク', battery: '最大約1ヶ月', charge: 'USB Type-C', level: 4 },
  { name: 'コネコ', battery: '最大約1ヶ月', charge: 'USB Type-C', level: 4 },
  { name: 'どこかなGPS2', battery: '最大約1.5ヶ月', charge: 'USB Type-C', level: 4 },
  { name: 'まもサーチ', battery: '最大約1ヶ月', charge: 'USB Type-C', level: 3 },
  { name: 'みもり', battery: '最大約3週間', charge: 'USB Type-C', level: 3 },
  { name: 'さゆう', battery: '最大約2週間', charge: 'USB Type-C', level: 3 },
  { name: 'ハロここ', battery: '最大約2週間', charge: 'USB Type-C', level: 3 },
  { name: 'ソラノメ', battery: '最大約1週間', charge: 'USB Type-C', level: 2 },
  { name: 'ハミック', battery: '約2〜3日', charge: 'USB Type-C', level: 1 },
  { name: 'myFirst Fone', battery: '約1〜2日', charge: 'マグネット充電', level: 1 },
];

export default function BatteryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'バッテリー' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">バッテリー比較</span>
            <span className="tag-pill bg-orange text-white">長持ちのコツ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS バッテリー比較
          </h1>
          <p className="text-g600 text-lg">機種別の電池持ちと長持ちさせるコツを解説</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">機種別バッテリー持ち比較表</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">機種名</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">バッテリー持ち</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">充電方式</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">評価</th>
                </tr>
              </thead>
              <tbody>
                {batteryData.map((d) => (
                  <tr key={d.name} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{d.name}</td>
                    <td className="py-3 px-3 text-g600">{d.battery}</td>
                    <td className="py-3 px-3 text-g600">{d.charge}</td>
                    <td className="py-3 px-3 text-g600">{'🔋'.repeat(d.level)}{'○'.repeat(5 - d.level)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">バッテリーを長持ちさせるコツ5つ</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: '更新間隔を長めに設定', desc: '位置情報の更新間隔を3分〜5分に設定。通学時だけ短く、在宅時は長くする使い分けも効果的。' },
              { step: 2, title: 'トーク機能は必要時のみ', desc: 'トーク機能の常時待機はバッテリーを消費します。トーク不要なら基本プランに変更するのも手。' },
              { step: 3, title: 'Wi-Fi測位をオンにする', desc: 'Wi-Fi測位はGPS測位よりバッテリー消費が少ない場合があります。自宅や学校のWi-Fi環境を活用。' },
              { step: 4, title: '週末に充電する習慣を', desc: '毎週末に充電する習慣をつけると、充電切れを防げます。充電時間は2〜3時間で完了。' },
              { step: 5, title: 'バッテリー残量通知を活用', desc: 'ほとんどのアプリにバッテリー残量通知機能があります。20%以下で通知が来る設定にしておきましょう。' },
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

          <h2 className="section-title">充電忘れ防止策</h2>
          <div className="card-hover p-6 mb-8">
            <ul className="space-y-2 text-sm text-g700">
              <li>・毎週金曜日の夜に充電するルーティンを作る</li>
              <li>・玄関の鍵置き場に充電ケーブルを常備する</li>
              <li>・スマホのリマインダーで充電日を通知設定</li>
              <li>・アプリのバッテリー低下通知を必ずオンにする</li>
              <li>・お子さまに「帰ったら充電ボックスに入れる」習慣をつける</li>
            </ul>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">バッテリー長持ちのGPS端末を選ぼう</h2>
            <p className="text-g600 mb-6 text-sm">充電の手間を減らすなら、バッテリー持ちの良い機種がおすすめ。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">おすすめランキング</Link>
              <Link href="/compare/price/" className="btn-accent">月額料金比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
