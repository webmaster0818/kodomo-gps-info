import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPSのバッテリー比較【2026年】機種別の電池持ち・容量と長持ちのコツ',
  description:
    '子供GPS端末のバッテリー持ちを機種別に比較します。最大2カ月持つ機種から毎日充電が必要な機種まで一覧でご紹介し、充電忘れの防止策やバッテリーを長持ちさせる5つの方法も解説します。',
};

const faqData = [
  { q: 'バッテリーが最も長持ちするGPSはどれですか？', a: 'みてねみまもりGPSが最大約2カ月で最長です。次いでコネコ（約1カ月）、あんしんウォッチャー（約1.5カ月）と続きます。' },
  { q: '更新間隔とバッテリーには、どのような関係がありますか？', a: '更新間隔が短いほど、バッテリー消費が増えます。1.5分間隔で約1〜2週間、3分間隔で約1カ月、15分間隔で最大2カ月が目安です。' },
  { q: '充電には、どのくらいの時間がかかりますか？', a: 'ほとんどのGPS端末は1.5〜3時間でフル充電できます。USB Type-Cケーブルで充電するタイプが主流です。' },
  { q: '充電しながら使えますか？', a: '技術的には可能です。ただし、外出中に充電する機会はないため、実際には夜間に充電して翌日使う形になります。' },
  { q: 'バッテリーが劣化した場合は、どうすればよいですか？', a: '2〜3年でバッテリーの持ちが悪くなることがあります。多くの機種は、本体ごとの買い替えとなります。月額契約は、そのまま引き継げるケースが多く見られます。' },
  { q: '腕時計型のバッテリー持ちが短いのはなぜですか？', a: '腕時計型は画面表示・通話・カメラなど多機能なため、バッテリー消費が大きくなります。毎日〜2日おきの充電が必要な機種がほとんどです。' },
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
  { name: 'みてねみまもりGPS', battery: '最大約2カ月(更新3分・容量2000mAh)', charge: 'USB Type-C', level: 5 },
  { name: 'あんしんウォッチャー', battery: '最大約2カ月(2024年更新で延長・容量1500mAh)', charge: 'USB Type-C', level: 5 },
  { name: 'BoTトーク', battery: '更新3分で約2〜4週間(容量1400mAh)', charge: 'USB Type-C', level: 4 },
  { name: 'コネコ', battery: '最大約1カ月', charge: 'USB Type-C', level: 4 },
  { name: 'まもサーチ', battery: '最大約1カ月', charge: 'USB Type-C', level: 3 },
  { name: 'みもり', battery: '約3〜4週間(容量2000mAh)', charge: 'USB Type-C', level: 3 },
  { name: 'さゆう', battery: '最大約2週間', charge: 'USB Type-C', level: 3 },
  { name: 'ハロここ', battery: '最大約2週間', charge: 'USB Type-C', level: 3 },
  { name: 'ソラノメ', battery: '約1週間(容量700mAh)', charge: 'USB Type-C', level: 2 },
  { name: 'ハミック', battery: '約2〜3日', charge: 'USB Type-C', level: 1 },
  { name: 'myFirst Fone', battery: '約1〜2日', charge: 'マグネット充電', level: 1 },
];

export default function BatteryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPSのバッテリー比較", "datePublished": "2026-03-15", "dateModified": "2026-06-14", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'バッテリー' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">バッテリー比較</span>
            <span className="tag-pill bg-orange text-white">長持ちのコツ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPSのバッテリー比較
          </h1>
          <p className="text-g600 text-lg">機種別の電池持ちと、バッテリーを長持ちさせる方法を解説します。</p>
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

          <h2 className="section-title">バッテリーを長持ちさせる5つの方法</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: '更新間隔を長めに設定', desc: '位置情報の更新間隔を3分〜5分に設定します。通学時のみ短くし、在宅時は長くする使い分けも効果的です。' },
              { step: 2, title: 'トーク機能は必要時のみ', desc: 'トーク機能の常時待機はバッテリーを消費します。トークが不要な場合は、基本プランへの変更も選択肢です。' },
              { step: 3, title: 'Wi-Fi測位をオンにする', desc: 'Wi-Fi測位はGPS測位よりバッテリー消費が少ない場合があります。自宅や学校のWi-Fi環境を活用してください。' },
              { step: 4, title: '週末に充電する習慣', desc: '毎週末に充電する習慣をつけると、充電切れを防げます。充電は2〜3時間で完了します。' },
              { step: 5, title: 'バッテリー残量通知を活用', desc: 'ほとんどのアプリにバッテリー残量通知機能があります。20%以下で通知が届くように設定しておくことをおすすめします。' },
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
              <li>・スマートフォンのリマインダーで充電日を通知設定</li>
              <li>・アプリのバッテリー低下通知を必ずオンにする</li>
              <li>・お子さまに「帰ったら充電ボックスに入れる」習慣をつける</li>
            </ul>
          </div>

          <h2 className="section-title">電池持ちで見落としがちな3つのポイント</h2>
          <div className="card-hover p-5 mb-8">
            <ul className="space-y-3 text-sm text-g600">
              <li><span className="font-bold text-g800">① 公称値は「更新間隔」で大きく変わる:</span> 例えばみてねは、位置更新を1.5分に設定すると約1カ月、3分にすると約2カ月と、倍近くの差が出ます。カタログの最大値は省エネ設定時の数値である点にご注意ください。</li>
              <li><span className="font-bold text-g800">② 冬場・低温で持ちが落ちる:</span> リチウムイオン電池は寒さに弱く、真冬の屋外では公称値より早く減ることがあります。冬は充電頻度を上げる前提でお考えください。</li>
              <li><span className="font-bold text-g800">③ 電池は数年で劣化する:</span> 多くの機種が電池内蔵で交換できません(例: あんしんウォッチャーは公式に交換不可と明記)。2〜3年使うと持ちが短くなるため、長期利用では買い替えもご検討ください。</li>
            </ul>
            <p className="text-xs text-g400 mt-3">出典: 各社公式・バッテリー比較メディア(2026年6月14日確認)。容量・公称値には、メーカー公表値または公式情報に準拠した二次情報を含みます。最新の値は、各公式サイトにてご確認ください。</p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">バッテリーが長持ちするGPS端末の選び方</h2>
            <p className="text-g600 mb-6 text-sm">充電の手間を減らしたい場合は、バッテリー持ちの良い機種をおすすめします。</p>
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
