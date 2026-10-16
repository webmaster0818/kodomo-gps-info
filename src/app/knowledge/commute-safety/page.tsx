import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '通学路の安全対策｜GPS見守りで子供を守る方法',
  description:
    '通学路の安全対策を、GPSによる見守りで強化する方法を解説します。交差点や人通りの少ない道などの危険箇所への対策、エリア通知（ジオフェンス）の活用、通学時間帯の通知設定、地域の見守り活動との連携をご紹介します。',
  keywords: ['通学路', '安全', '見守り', 'GPS', '子供', '通学', 'ジオフェンス'],
  openGraph: {
    images: ['/og.png'],
    title: '通学路の安全対策｜GPS見守りで子供を守る方法',
    description: '通学路の危険箇所への対策として、GPSによる見守りとエリア通知・通知設定の活用方法をご紹介します。',
  },
};

const faqData = [
  { q: '通学路の危険箇所はどのように調べればよいですか？', a: '自治体が公開している「通学路安全マップ」や学校の配布資料をご確認ください。また、実際にお子さまと一緒に通学路を歩き、交通量の多い交差点や見通しの悪いカーブ、人通りの少ない道を確認することが最も効果的です。' },
  { q: 'エリア通知は通学路のどこに設定すべきですか？', a: '学校（出発の検知用）と自宅（到着の検知用）に加え、通学路上の危険箇所（大きな交差点、人通りの少ない区間の入口など）にも設定すると、通過のタイミングを把握できます。' },
  { q: '通学時間帯だけ通知を受け取ることはできますか？', a: '多くのGPSアプリでは、時間帯ごとの通知設定が可能です。登下校の時間帯（例：7:30-8:30、14:00-16:00）だけ更新間隔を短くし、通知を有効にする設定をおすすめします。' },
  { q: '地域の見守り活動とGPSを併用するメリットはありますか？', a: '見守りボランティアによる見守りは、固定の地点が中心です。GPSを併用することで、見守りの目が届かない区間も位置情報で確認でき、見守りの空白地帯を補えます。' },
  { q: '通学路が変更になった場合、設定はどうすればよいですか？', a: 'エリア通知の位置を新しい通学路に合わせて再設定します。多くのアプリではエリアの追加・変更が容易で、古いエリアの削除と新しいエリアの追加を行うだけで完了します。' },
  { q: '雨の日や冬場の暗い時間帯の対策はありますか？', a: '雨の日は視界が悪く、事故のリスクが高まります。GPS端末の更新間隔を短くし、帰宅が通常より遅い場合にアプリで確認する習慣をつけることをおすすめします。冬場は下校時に暗くなるため、反射材とGPSの組み合わせが効果的です。' },
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
  { icon: '🚦', title: '交通量の多い交差点', desc: '信号のない交差点や右左折車が多い場所は、最も事故が発生しやすい箇所です。エリア通知で通過のタイミングを確認できます。' },
  { icon: '🌳', title: '見通しの悪いカーブ・路地', desc: 'ブロック塀や植栽で見通しが悪い場所は、車からも子供が見えにくい危険な場所です。GPSの移動履歴をもとに、迂回ルートをご検討ください。' },
  { icon: '🏚️', title: '人通りの少ない道', desc: '空き家が多い地域や裏道では、不審者のリスクが高まります。通過時間帯をGPSで記録し、想定外の滞留を検知できます。' },
  { icon: '🚗', title: '駐車場の出入口', desc: 'コンビニエンスストアやスーパーの駐車場の出入口では、車が急に出てくることがあります。子供の注意力だけでは不十分な場所です。' },
  { icon: '🌊', title: '川・用水路沿いの道', desc: '特に雨の日は増水のリスクがあります。GPS端末で通常ルートからの逸脱を検知し、危険なエリアへの接近を把握できます。' },
  { icon: '🚧', title: '工事現場周辺', desc: '一時的な工事により、通学路の安全性が変わることがあります。GPSの移動履歴で、普段と異なるルートを通っていないかをご確認ください。' },
];

const geofenceTips = [
  { title: '学校エリア（出発通知）', desc: '半径150mに設定し、下校の開始をリアルタイムに把握します。曜日ごとの下校時刻と照らし合わせることで、異常を検知できます。' },
  { title: '危険交差点エリア（通過通知）', desc: '半径50〜100mに設定し、危険な交差点を無事に通過したことを確認します。長時間の滞留は注意が必要な兆候です。' },
  { title: '人通りの少ない区間（進入通知）', desc: '該当区間の入口にエリアを設定し、通過に要する時間を把握します。通常より長い場合は、アプリでご確認ください。' },
  { title: '自宅エリア（到着通知）', desc: '半径100mに設定し、無事に帰宅したことを確認します。到着予定時刻を過ぎても通知がない場合に、異常に気付くことができます。' },
];

export default function CommuteSafetyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "通学路の安全対策｜GPS見守りで子供を守る方法", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '通学路の安全対策' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">通学路</span>
            <span className="tag-pill bg-orange text-white">安全対策</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            通学路の安全対策｜GPS見守りで子供を守る方法
          </h1>
          <p className="text-g600 text-lg">危険箇所を把握し、エリア通知と通知設定による見守り体制を整える方法</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">通学路の危険箇所</h2>
          <p className="text-g600 mb-6">
            警察庁の統計によると、子供の交通事故は下校時間帯（14時〜17時）に集中しています。
            通学路の危険箇所を事前に把握し、GPSによる見守りと組み合わせることで、事故や犯罪のリスクを軽減できます。
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

          <h2 className="section-title">エリア通知（ジオフェンス）による通学路の見守り</h2>
          <div className="bg-blue-light rounded-xl p-6 mb-8">
            <p className="text-sm text-g700 mb-4">通学路の見守りに効果的なエリア通知の設定例です。</p>
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
              { step: 1, title: '登校時間帯（7:00〜8:30）', desc: '更新間隔を3分以内に設定します。学校到着の通知で登校の完了を確認でき、遅刻のおそれにも早めに気付けます。' },
              { step: 2, title: '在校時間帯（8:30〜14:00）', desc: '更新間隔を長め（15分〜30分）に設定し、バッテリーを節約します。学校エリアの外に出た場合のみ通知を受けます。' },
              { step: 3, title: '下校時間帯（14:00〜17:00）', desc: '更新間隔を最短（1〜3分）に設定します。下校の開始から帰宅までをリアルタイムに見守ります。' },
              { step: 4, title: '放課後・夕方（17:00〜19:00）', desc: '暗くなる時間帯の外出を検知します。自宅エリアを出た場合に通知を受け、行き先を確認します。' },
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
              { title: '見守りボランティアとの情報共有', desc: 'GPSのデータで子供の通過時間を把握し、見守りを行う位置の見直しに活用できます。' },
              { title: 'スクールゾーンの活用', desc: 'スクールゾーン内にエリア通知を設定し、通過時刻と通学時間の整合性を確認します。' },
              { title: '子供110番の家との連携', desc: '通学路上の子供110番の家をお子さまと確認し、GPSの移動履歴で近くを通っているかを確認します。' },
              { title: 'PTAパトロールとの併用', desc: 'PTAによる見守りの時間帯以外はGPSで補完し、見守りの空白時間を最小限に抑えられます。' },
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">GPSによる通学路の安全対策</h2>
            <p className="text-g600 mb-6 text-sm">エリア通知と通知設定を活用し、通学路の見守り体制を整えることをおすすめします。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/geofence/" className="btn-primary">エリア通知の活用方法</Link>
              <Link href="/knowledge/safety/" className="btn-accent">安全対策まとめ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
