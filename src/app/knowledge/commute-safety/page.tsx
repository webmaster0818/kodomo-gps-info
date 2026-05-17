import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '通学路の安全対策｜GPS見守りで子供を守る方法',
  description:
    '通学路の安全対策をGPS見守りで強化する方法を解説。交差点や人通りの少ない道の危険ポイント対策、ジオフェンス活用、通学時間帯の通知設定、地域の見守り活動との連携を紹介します。',
  keywords: ['通学路', '安全', '見守り', 'GPS', '子供', '通学', 'ジオフェンス'],
  openGraph: {
    title: '通学路の安全対策｜GPS見守りで子供を守る方法',
    description: '通学路の危険ポイントをGPS見守りで対策。ジオフェンスや通知設定の活用法を紹介。',
  },
};

const faqData = [
  { q: '通学路の危険箇所はどうやって調べればいいですか？', a: '自治体が公開している「通学路安全マップ」や学校の配布資料を確認しましょう。また、実際にお子さまと一緒に通学路を歩き、交通量の多い交差点や見通しの悪いカーブ、人通りの少ない道を確認するのが最も効果的です。' },
  { q: 'ジオフェンスは通学路のどこに設定すべきですか？', a: '学校（出発検知用）、自宅（到着検知用）に加え、通学路上の危険ポイント（大きな交差点、人通りの少ない区間の入口など）にも設定すると、通過タイミングを把握できます。' },
  { q: '通学時間帯だけ通知を受け取ることはできますか？', a: '多くのGPSアプリでは時間帯ごとの通知設定が可能です。登下校の時間帯（例：7:30-8:30、14:00-16:00）だけ更新間隔を短くし、通知を有効にする設定がおすすめです。' },
  { q: '地域の見守り活動とGPSを併用するメリットは？', a: '見守りボランティアの方は固定ポイントでの見守りが中心です。GPSを併用することで、見守りの目が届かない区間も位置情報で確認でき、空白地帯をカバーできます。' },
  { q: '通学路が変更になった場合、設定はどうすればいいですか？', a: 'ジオフェンスの位置を新しい通学路に合わせて再設定します。多くのアプリではエリアの追加・変更が簡単にでき、古いエリアの削除と新エリアの追加を行うだけです。' },
  { q: '雨の日や冬場の暗い時間帯の対策は？', a: '雨の日は視界が悪く事故リスクが高まります。GPS端末の更新間隔を短くし、通常より遅い場合にアプリで確認する習慣をつけましょう。冬場は下校時に暗くなるため、反射材とGPSの組み合わせが効果的です。' },
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

const dangerPoints = [
  { icon: '🚦', title: '交通量の多い交差点', desc: '信号のない交差点や右左折車が多い場所は最も事故が発生しやすいポイント。ジオフェンスで通過タイミングを確認できます。' },
  { icon: '🌳', title: '見通しの悪いカーブ・路地', desc: 'ブロック塀や植栽で見通しが悪い場所は車からも子供が見えにくい危険地帯。GPS移動履歴で迂回を検討。' },
  { icon: '🏚️', title: '人通りの少ない道', desc: '空き家が多い地域や裏道は不審者リスクが高まります。通過時間帯をGPSで記録し、想定外の滞留を検知。' },
  { icon: '🚗', title: '駐車場の出入口', desc: 'コンビニやスーパーの駐車場出入口は車が急に出てくることがあり危険。子供の注意力だけでは不十分な場所です。' },
  { icon: '🌊', title: '川・用水路沿いの道', desc: '特に雨の日は増水のリスク。GPS端末で通常ルートからの逸脱を検知し、危険エリアへの接近を把握できます。' },
  { icon: '🚧', title: '工事現場周辺', desc: '一時的な工事で通学路の安全性が変わることがあります。GPS移動履歴で普段と違うルートを通っていないか確認。' },
];

const geofenceTips = [
  { title: '学校エリア（出発通知）', desc: '半径150mに設定し、下校開始をリアルタイムに把握。曜日ごとの下校時刻と照らし合わせて異常を検知。' },
  { title: '危険交差点エリア（通過通知）', desc: '半径50〜100mに設定し、危険な交差点を無事に通過したことを確認。長時間の滞留は注意信号。' },
  { title: '人通り少ない区間（進入通知）', desc: '該当区間の入口にエリア設定し、通過に要する時間を把握。通常より長い場合はアプリで確認。' },
  { title: '自宅エリア（到着通知）', desc: '半径100mに設定し、無事帰宅を確認。到着予定時刻を過ぎても通知がない場合にアラート。' },
];

export default function CommuteSafetyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '通学路の安全対策' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">通学路</span>
            <span className="tag-pill bg-orange text-white">安全対策</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            通学路の安全対策｜GPS見守りで子供を守る方法
          </h1>
          <p className="text-g600 text-lg">危険ポイントを把握し、ジオフェンスと通知設定で安心の見守り体制を構築</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">通学路に潜む危険ポイント</h2>
          <p className="text-g600 mb-6">
            警察庁の統計によると、子供の交通事故は下校時間帯（14時〜17時）に集中しています。
            通学路の危険ポイントを事前に把握し、GPS見守りと組み合わせることで、事故や犯罪のリスクを大幅に軽減できます。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {dangerPoints.map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-2xl">{item.icon}</p>
                <div>
                  <h3 className="font-bold text-g800">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">ジオフェンス活用で通学路を見守る</h2>
          <div className="bg-blue-light rounded-xl p-6 mb-8">
            <p className="text-sm text-g700 mb-4">通学路の見守りに効果的なジオフェンス設定例です。</p>
            <div className="space-y-3">
              {geofenceTips.map((g) => (
                <div key={g.title} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
                  <span className="font-bold text-g800 sm:w-56">{g.title}</span>
                  <span className="text-g600">{g.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="section-title">通学時間帯の通知設定</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: '登校時間帯（7:00〜8:30）', desc: '更新間隔を3分以内に設定。学校到着の通知で登校完了を確認。遅刻リスクにも早めに気づけます。' },
              { step: 2, title: '在校時間帯（8:30〜14:00）', desc: '更新間隔を長め（15分〜30分）に設定しバッテリー節約。学校エリア外に出た場合のみ通知。' },
              { step: 3, title: '下校時間帯（14:00〜17:00）', desc: '更新間隔を最短（1〜3分）に設定。下校開始から帰宅までをリアルタイムに見守り。' },
              { step: 4, title: '放課後・夕方（17:00〜19:00）', desc: '暗くなる時間帯の外出を検知。自宅エリアを出た場合に通知し、行き先を確認。' },
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

          <h2 className="section-title">地域の見守り活動との連携</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: '見守りボランティアとの情報共有', desc: 'GPSデータで子供の通過時間を把握し、見守り位置の最適化に活用できます。' },
              { title: 'スクールゾーンの活用', desc: 'スクールゾーン内にジオフェンスを設定し、通過と通学時間の整合性を確認。' },
              { title: '子供110番の家との連携', desc: '通学路上の子供110番の家をお子さまと確認し、GPSの移動履歴で近くを通っているか確認。' },
              { title: 'PTAパトロールとの併用', desc: 'PTA見守りの時間帯以外はGPSで補完。見守りの空白時間を最小化できます。' },
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

          <p className="text-xs text-g400 mt-4 text-right">最終更新: 2026年5月</p>

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">通学路の安全をGPSで強化しよう</h2>
            <p className="text-g600 mb-6 text-sm">ジオフェンスと通知設定で、通学路の見守り体制を万全に。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/geofence/" className="btn-primary">ジオフェンス活用法</Link>
              <Link href="/knowledge/safety/" className="btn-accent">安全対策まとめ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
