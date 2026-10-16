import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '夏休みの子供見守りGPS活用ガイド【2026年】夏祭り・帰省・水辺の迷子&事故対策',
  description:
    '夏休みは子供の一人行動が増え、夏祭り・帰省・水辺での迷子や事故のリスクが高まります。警察庁の水難統計などの公的データをもとに、夏休みにGPSが役立つ場面（夏祭り・プール・帰省・旅行）と機能の使い分けを解説します。',
};

const faqData = [
  { q: '夏休みに子供用GPSは必要ですか？', a: '夏休みは学校がなく、子供だけで外出したり留守番をしたりする時間が増えるため、普段より見守りの必要性が高まります。お出かけ時に子供の姿を見失った経験がある保護者は約6割という民間調査もあります。夏祭り・帰省・旅行など、人混みや不慣れな場所に行く機会が多い夏は、リアルタイムで位置を確認できるGPSが特に役立ちます。' },
  { q: 'GPSがあれば水辺（プール・川）の事故も防げますか？', a: 'GPSで溺水そのものを防ぐことはできません。水の事故対策は「監視員のいる遊泳エリアを使う」「ライフジャケットを着ける」「大人が手の届く範囲で見守る」ことが大前提です（消費者庁）。GPSは「危険な川や池に近づいた際に通知する（エリア通知）」「子供の行動範囲を把握する」といった補助的な役割とお考えください。' },
  { q: '夏祭りで子供とはぐれないための対策はありますか？', a: '「はぐれた場合の集合場所」を事前に決めておくこと、目立つ服装にすること、迷子札を持たせることが基本です。そのうえでGPSがあれば、はぐれた場合もリアルタイムで位置を確認でき、トーク機能付きの機種であれば連絡を取ることもできます。人混みや建物が密集した会場では測位がずれることもあるため、GPSだけに頼らず、複数の対策を併用してください。' },
  { q: '帰省先でGPSはどのように使えますか？', a: '祖父母の家の周辺は、子供にも保護者にも土地勘がなく、河川・用水路や人通りの少ない道などのリスクがあります。祖父母宅を「ホーム」に登録して出発・到着の通知を受けたり、子供が一人で外に出た際に現在地を地図で確認したりできます。慣れない土地ほど、GPSは見守りに役立ちます。' },
  { q: '夏休みの期間だけGPSを使うことはできますか？', a: '可能です。多くの子供用GPSは契約期間の縛りがなく、月額制で必要な期間だけ利用できます。普段はトーク機能のない安価なプランを利用し、夏休みの間だけトーク機能のあるプランに切り替えるといった運用ができる機種もあります。' },
];

const scenes = [
  {
    icon: '🎆',
    title: '夏祭り・花火大会（人混みではぐれる）',
    risk: '露店や人波に紛れて一瞬で見失いやすい場所です。',
    use: 'リアルタイムの位置確認により、すぐに居場所を確認できます。集合場所をエリア通知に登録すると、離れた際に通知を受けられます。トーク機能付きの機種であれば連絡も可能です。',
    caution: '人混みや建物の密集地では精度が落ちることがあるため、目立つ服装や迷子札も併用してください。',
  },
  {
    icon: '🏊',
    title: 'プール・海・川など水辺（夏の最大の死亡リスク）',
    risk: '警察庁の統計では、夏期の中学生以下の水の事故による死者・行方不明者の約6割が河川で、行為の約7割が水遊び中です。',
    use: '危険な河川・池をエリア通知に登録し、接近時に保護者へ通知します。行動履歴により、普段と異なる水辺のルートを把握できます。',
    caution: '⚠️ GPSで溺水を防ぐことはできません。監視員のいる区域の利用、ライフジャケットの着用、大人の付き添いが大前提です（消費者庁）。GPSは「接近の検知」を補助するものです。',
  },
  {
    icon: '🏡',
    title: '帰省（土地勘のない祖父母宅周辺）',
    risk: '子供・保護者ともに地理に不慣れであり、河川や用水路、人通りの少ない道などのリスクがあります。',
    use: '現在地を地図ですぐに確認できます。祖父母宅をホームに登録すると、出発・到着の通知を受けられます。子供が単独で行動した際の移動履歴も把握できます。',
    caution: '滞在前に、周辺の危険箇所（川・池・交通量の多い道）を家族で確認しておくことをおすすめします。',
  },
  {
    icon: '🚄',
    title: '旅行先・テーマパーク・駅・SA（見失いやすい場所）',
    risk: '大型施設・駅・サービスエリアで一瞬目を離した間に見失う事例は、体験談でも多く見られます。',
    use: '位置確認ですぐに居場所を確認でき、混雑した施設での集合に活用できます。長期休みの間だけトーク機能のあるプランに切り替える運用も可能です。',
    caution: '早期発見が重要です。行方不明者は届出の受理当日に発見される例が最も多いというデータもあり、すぐに位置を把握できることには大きな意味があります。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
};

export default function SummerSafetyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "夏休みの子供見守りGPS活用ガイド｜夏祭り・帰省・水辺の迷子&事故対策", "datePublished": "2026-06-14", "dateModified": "2026-06-14", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '夏休みの見守り' }]} />

      <section className="bg-gradient-to-br from-orange-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">夏休み特集</span>
            <span className="tag-pill bg-blue text-white">公的データ準拠</span>
            <span className="tag-pill bg-green text-white">2026年版</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">夏休みの子供見守りGPS活用ガイド</h1>
          <p className="text-g600 text-lg">夏祭り・帰省・水辺など、子供の一人行動が増える夏の場面別の見守り方法</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">なぜ夏休みは見守りが重要なのか</h2>
          <p className="text-g600 mb-6">
            夏休みは学校がなく、子供だけでの外出・留守番や、夏祭り・帰省・旅行といった普段と異なるお出かけが増えます。行動範囲が広がる分、迷子や事故のリスクも高まる時期です。特に水の事故が夏に集中することは、公的な統計でも示されています。
          </p>

          <div className="card-hover p-5 mb-8 bg-blue-light rounded-2xl">
            <h3 className="font-bold text-g800 mb-3">データで見る夏の子供の危険</h3>
            <ul className="space-y-2 text-sm text-g700">
              <li>・警察庁の調査では、<strong>夏期（7〜8月）の水難による死者・行方不明者は242人</strong>です。このうち中学生以下の死者・行方不明者の<strong>約61%が河川</strong>で、行為別では<strong>約67%が水遊び中</strong>でした（令和6年・速報値）。</li>
              <li>・消費者庁も、屋外の水の事故は活動的になる5歳以上で多発し、遊泳中の水難は夏期に集中する傾向があると注意を呼びかけています。</li>
              <li>・民間調査では、お出かけ時に<strong>子供の姿を見失った経験がある保護者は約6割</strong>という結果も出ています。</li>
            </ul>
            <p className="text-xs text-g400 mt-3">出典: 警察庁「令和6年夏期における水難の概況」、消費者庁「子どもの水の事故を防ごう！」、いこーよ総研アンケート（2024年）。2026年6月14日確認。</p>
          </div>

          <h2 className="section-title">夏の場面別のGPS活用方法</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {scenes.map((s) => (
              <div key={s.title} className="card-hover p-5">
                <p className="text-2xl mb-2">{s.icon}</p>
                <h3 className="font-bold text-g800 mb-2">{s.title}</h3>
                <p className="text-sm text-g600 mb-2"><span className="font-bold text-g700">リスク: </span>{s.risk}</p>
                <p className="text-sm text-g600 mb-2"><span className="font-bold text-green-dark">GPS活用: </span>{s.use}</p>
                <p className="text-sm text-g600"><span className="font-bold text-orange-dark">注意: </span>{s.caution}</p>
              </div>
            ))}
          </div>

          <div className="card-hover p-5 mb-8 bg-orange-light rounded-2xl">
            <h3 className="font-bold text-g800 mb-2">前提：GPSは補助的なツールです</h3>
            <p className="text-sm text-g700 leading-relaxed">
              GPSは「位置を把握する」「危険な場所への接近を知らせる」ための補助的なツールです。特に水の事故は、GPSでは防げません。監視員のいる遊泳エリアを選ぶ、ライフジャケットを着用する、大人が目を離さないといった基本の対策を前提としたうえで、GPSを万一の際の早期発見に活用することをおすすめします。
            </p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-orange-light to-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">夏に向けたGPSの選び方</h2>
            <p className="text-g600 mb-6 text-sm">人混みでの位置確認・エリア通知・トーク機能など、夏の利用場面に合った機能でお選びください。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">おすすめGPSランキングを見る</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">選び方ガイド</Link>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-bold text-g800 mb-4">関連記事</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/knowledge/after-school/" className="card-hover p-4 block">
                <p className="font-bold text-sm text-g800">学童・放課後の見守り</p>
                <p className="text-xs text-g500">放課後の一人行動にGPSが適している理由</p>
              </Link>
              <Link href="/knowledge/summer-winter/" className="card-hover p-4 block">
                <p className="font-bold text-sm text-g800">夏冬のGPSの使い方</p>
                <p className="text-xs text-g500">車内放置・プール・温度の注意点</p>
              </Link>
              <Link href="/compare/accuracy/" className="card-hover p-4 block">
                <p className="font-bold text-sm text-g800">GPSの精度比較</p>
                <p className="text-xs text-g500">人混み・屋内での測位精度</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
