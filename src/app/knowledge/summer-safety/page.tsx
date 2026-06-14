import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '夏休みの子ども見守りGPS活用ガイド【2026年】夏祭り・帰省・水辺の迷子&事故対策',
  description:
    '夏休みは子どもの一人行動が増え、夏祭り・帰省・水辺での迷子や事故リスクが高まります。警察庁の水難統計など公的データをもとに、夏休みにGPSが役立つシーン（夏祭り・プール・帰省・旅行）と機能の使い分けを解説します。',
};

const faqData = [
  { q: '夏休みに子ども用GPSは必要ですか？', a: '夏休みは学校がなく、子どもだけで外出したり留守番したりする時間が増えるため、普段より見守りの必要性が高まります。お出かけ時に子どもの姿を見失った経験がある保護者は約6割という民間調査もあり、夏祭り・帰省・旅行など人混みや不慣れな場所に行く機会が多い夏は、リアルタイムで位置を確認できるGPSが特に役立ちます。' },
  { q: 'GPSがあれば water（プール・川）の事故も防げますか？', a: 'いいえ、GPSは溺水そのものを防ぐことはできません。水の事故対策は「監視員のいる遊泳エリアを使う」「ライフジャケットを着ける」「大人が手の届く範囲で見守る」が大前提です（消費者庁）。GPSは「危険な川や池に近づいたら通知する（ジオフェンス）」「子どもの行動範囲を把握する」といった補助的な役割と考えてください。' },
  { q: '夏祭りで子どもとはぐれないためのコツは？', a: 'まず「はぐれたらここに集合」という場所を事前に決めておくこと、目立つ服装にすること、迷子札を持たせることが基本です。そのうえでGPSがあれば、はぐれてもリアルタイムで位置を追え、トーク機能付きなら「今どこ？」と連絡も取れます。人混みや建物が密集した会場では測位がずれることもあるため、GPSだけに頼らず複数の対策を併用しましょう。' },
  { q: '帰省先でGPSはどう使えますか？', a: '祖父母の家の周辺は、子どもにも親にも土地勘がなく、田舎の河川・用水路や人通りの少ない道などのリスクがあります。祖父母宅を「ホーム」に登録して出発・到着の通知を受けたり、子どもが一人で外に出たときに現在地を地図で確認したりできます。慣れない土地ほどGPSの安心感は大きくなります。' },
  { q: '夏休みだけGPSを使うことはできますか？', a: 'できます。多くの子ども用GPSは契約期間の縛りがなく、月額制で必要な期間だけ使えます。普段はトークなしの安いプラン、夏休みだけトーク機能ありに切り替える、といった運用も可能な機種があります。' },
];

const scenes = [
  {
    icon: '🎆',
    title: '夏祭り・花火大会（人混みではぐれる）',
    risk: '露店や人波に紛れて一瞬で見失いやすい場所です。',
    use: 'リアルタイム位置確認で即追跡。集合場所をジオフェンス登録して離脱通知。トーク機能付きなら連絡も可能。',
    caution: '人混み・建物密集で精度が落ちることがあるため、目立つ服装・迷子札も併用を。',
  },
  {
    icon: '🏊',
    title: 'プール・海・川など水辺（夏最大の死亡リスク）',
    risk: '警察庁の統計では、夏期の中学生以下の水の事故による死者・行方不明者の約6割が河川で、行為の約7割が水遊び中です。',
    use: '危険な河川・池をジオフェンス登録し、接近時に保護者へ通知。行動履歴でいつもと違う水辺ルートを把握。',
    caution: '⚠️ GPSは溺水を防げません。監視員のいる区域・ライフジャケット・大人の付き添いが大前提（消費者庁）。GPSは「接近検知」の補助です。',
  },
  {
    icon: '🏡',
    title: '帰省（土地勘のない祖父母宅周辺）',
    risk: '子ども・親ともに不慣れな地理、田舎の河川や用水路、人通りの少ない道。',
    use: '現在地を地図で即確認。祖父母宅をホーム登録して出発・到着通知。子どもの単独行動時の移動履歴も把握。',
    caution: '滞在前に周辺の危険箇所（川・池・交通量の多い道）を家族で確認しておくとより安心。',
  },
  {
    icon: '🚄',
    title: '旅行先・テーマパーク・駅・SA（見失いやすい場所）',
    risk: '大型施設・駅・サービスエリアでの一瞬の見失いは体験談でも頻出します。',
    use: '位置確認で即追跡、混雑施設での集合に活用。長期休みだけトーク機能ありに切り替える運用も。',
    caution: '早期発見が鍵。行方不明は受理当日の発見が最多というデータもあり、即時に位置を把握できる価値は大きいです。',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "夏休みの子ども見守りGPS活用ガイド｜夏祭り・帰省・水辺の迷子&事故対策", "datePublished": "2026-06-14", "dateModified": "2026-06-14", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "お役立ち", "item": "https://gps-kodomo.com/knowledge/"}, {"@type": "ListItem", "position": 3, "name": "夏休みの見守り", "item": "https://gps-kodomo.com/knowledge/summer-safety/"}]}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '夏休みの見守り' }]} />

      <section className="bg-gradient-to-br from-orange-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">夏休み特集</span>
            <span className="tag-pill bg-blue text-white">公的データ準拠</span>
            <span className="tag-pill bg-green text-white">2026年版</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">夏休みの子ども見守りGPS活用ガイド</h1>
          <p className="text-g600 text-lg">夏祭り・帰省・水辺——子どもの一人行動が増える夏のシーン別 見守り術</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">なぜ夏休みは見守りが重要なのか</h2>
          <p className="text-g600 mb-6">
            夏休みは学校がなく、子どもだけでの外出・留守番や、夏祭り・帰省・旅行といった普段と違うお出かけが増えます。行動範囲が広がる分、迷子や事故のリスクも高まる時期です。特に水の事故は夏に集中することが、公的な統計でも示されています。
          </p>

          <div className="card-hover p-5 mb-8 bg-blue-light rounded-2xl">
            <h3 className="font-bold text-g800 mb-3">データで見る「夏の子どもの危険」</h3>
            <ul className="space-y-2 text-sm text-g700">
              <li>・警察庁の調査では、<strong>夏期（7〜8月）の水難による死者・行方不明者は242人</strong>。うち中学生以下の死者・行方不明者の<strong>約61%が河川</strong>で、行為別では<strong>約67%が水遊び中</strong>でした（令和6年・速報値）。</li>
              <li>・消費者庁も、屋外の水の事故は活動的になる5歳以上で多発し、遊泳中の水難は夏期に集中する傾向があると注意喚起しています。</li>
              <li>・民間調査では、お出かけ時に<strong>子どもの姿を見失った経験がある保護者は約6割</strong>という結果も出ています。</li>
            </ul>
            <p className="text-xs text-g400 mt-3">出典: 警察庁「令和6年夏期における水難の概況」、消費者庁「子どもの水の事故を防ごう！」、いこーよ総研アンケート（2024年）。2026年6月14日確認</p>
          </div>

          <h2 className="section-title">夏のシーン別 GPS活用法</h2>
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
            <h3 className="font-bold text-g800 mb-2">大切な前提: GPSは「魔法の道具」ではありません</h3>
            <p className="text-sm text-g700 leading-relaxed">
              GPSはあくまで「位置を把握する」「危険な場所への接近を知らせる」ための補助ツールです。特に水の事故は、GPSでは防げません。監視員のいる遊泳エリアを選ぶ、ライフジャケットを着ける、大人が目を離さない——こうした基本の対策を土台に、その上でGPSを「もしものときの早期発見」に活用するのが正しい使い方です。
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">夏に向けてGPSを選ぶなら</h2>
            <p className="text-g600 mb-6 text-sm">人混みでの追跡・ジオフェンス通知・トーク機能など、夏のシーンに合った機能で選びましょう。</p>
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
                <p className="text-xs text-g500">放課後の一人行動にGPSが最適な理由</p>
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
