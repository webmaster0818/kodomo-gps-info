import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '大阪の子供見守りGPS活用ガイド｜通学路・治安情報',
  description:
    '大阪で子供用GPSを活用するためのガイドです。市区別の治安データ、自治体の見守り施策、大阪の地域特性に合わせたGPSの活用法、おすすめ機種を解説します。',
  keywords: ['子供GPS', '大阪', 'おすすめ', '見守り', '通学路', '治安'],
  openGraph: {
    images: ['/og.png'],
    title: '大阪の子供見守りGPS活用ガイド｜通学路・治安情報',
    description: '大阪で子供用GPSを活用するためのガイドです。市区別の治安データ、見守り施策、おすすめ機種をご紹介します。',
  },
};

const faqData = [
  { q: '大阪の小学生にGPSは必要ですか？', a: '大阪は東京に次いで人口密度が高く、繁華街や交通量の多いエリアも多いため、子供用GPSの必要性は高いといえます。大阪府警の統計では、子供に対する声かけ・つきまとい事案が年間1,500件以上報告されています。特に、ミナミ・キタの繁華街に近いエリアにお住まいの場合や、通学路が幹線道路沿いにある場合は、GPSの活用をおすすめします。' },
  { q: '大阪の地下鉄（Osaka Metro）でもGPSは使えますか？', a: 'Osaka Metroの駅構内には携帯基地局やWi-Fiスポットが設置されているため、Wi-Fi測位や基地局測位によっておおよその位置を取得できます。ただし、トンネル走行中はGPS衛星の電波が届きません。駅に到着すると位置情報が更新されるため、乗降の把握には支障ありません。' },
  { q: '大阪で特に治安が心配なエリアはどこですか？', a: '大阪府警の犯罪統計によると、大阪市中央区（ミナミ）、北区（キタ）、浪速区は繁華街を含むため、犯罪発生率が高めです。ただし、住宅地エリアは比較的安全です。通学路が繁華街周辺を通る場合は、エリア通知（ジオフェンス）の設定によってルートからの逸脱を早期に検知できるGPSが有効です。' },
  { q: '大阪府や市の見守り補助金・支援はありますか？', a: '2026年現在、大阪府として統一的なGPS補助金はありませんが、大阪市では「こども見守り隊」などの地域ボランティア活動が活発です。また、一部の市区では防犯ブザーの無償配布や見守りカメラの設置を進めています。詳しくは、各市区の教育委員会へのお問い合わせをおすすめします。' },
  { q: '大阪で子供用GPSを選ぶ際のポイントは？', a: '大阪では、(1)地下街やOsaka Metroでも位置を取得できるWi-Fi測位対応機種であること、(2)繁華街を通過する際の通知を設定できる機種であること、(3)暑さ・湿度に強い防水対応機種であること（大阪の夏は高温多湿です）、(4)通信キャリアについては、ソフトバンク・au・ドコモのいずれも大阪市内をカバーしていること、の4点が重要です。' },
  { q: '大阪から他県への移動時もGPSは使えますか？', a: 'はい。子供用GPSは日本全国で利用できます。大阪から奈良・京都・兵庫への遠足や家族旅行でも、LTE回線のカバーエリア内であれば問題なく位置を確認できます。山間部への遠足の際は、事前に各キャリアのエリアマップで電波状況をご確認ください。' },
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

const safetyData = [
  { area: '大阪市北区（キタ）', level: '注意が必要', note: '梅田周辺の繁華街です。昼間は人通りが多く、夜間は酔客も多くなります。住宅地エリアは安全です。' },
  { area: '大阪市中央区（ミナミ）', level: '注意が必要', note: '難波・心斎橋の繁華街です。観光客も多いため、雑踏に注意が必要です。住宅地は比較的静かです。' },
  { area: '大阪市天王寺区・阿倍野区', level: '比較的安全', note: '文教地区です。学校や塾が多く、見守りへの意識が高い地域です。' },
  { area: '大阪市住吉区・東住吉区', level: '比較的安全', note: '閑静な住宅地です。通学距離がやや長い傾向があります。' },
  { area: '堺市・豊中市・吹田市', level: '比較的安全', note: 'ベッドタウンとして人気があります。子育て世帯が多く、地域の見守り活動が活発です。' },
  { area: '東大阪市・八尾市', level: '普通', note: '工業地帯と住宅地が混在しています。幹線道路沿いの通学路では、交通安全に注意が必要です。' },
];

const cityPrograms = [
  { city: '大阪市', program: 'こども見守り隊', desc: '地域ボランティアによる通学路の見守り活動です。約5,000人のボランティアが登録しており、登下校の時間帯に通学路に立って子供の安全を見守っています。' },
  { city: '堺市', program: '安全・安心まちづくり', desc: '防犯カメラの設置推進と地域の防犯パトロールを行っています。市立小学校の通学路には、重点的に防犯カメラを設置しています。' },
  { city: '豊中市', program: '子ども安全見守り事業', desc: '地域住民・商店・企業が「子ども110番の家」として登録しています。通学路沿いに避難場所を確保しており、GPS端末との併用を推奨しています。' },
  { city: '吹田市', program: '登下校メール配信', desc: '学校の校門にICタグリーダーを設置し、登下校時にICタグを検知して保護者にメールで通知します。GPSと併用することで、通学路全体をカバーできます。' },
  { city: '箕面市', program: '子ども見守りシステム', desc: '市内全小学校の児童にICタグを配布し、通学路上のセンサーで通過を検知しています。GPSと組み合わせることで、二重の見守り体制となります。' },
];

const recommendedDevices = [
  { name: 'みてねみまもりGPS', reason: '費用を抑えて大阪の通学に活用できる機種', feature: '月額528円と業界最安クラスの料金です。ソフトバンクLTEを使用し、大阪府内のカバー率は99%以上です。バッテリーは最大2カ月持続し、迷子通知やエリア通知も標準で搭載しています。', monthly: '528円/月', best: '徒歩通学の子供' },
  { name: 'BoTトーク', reason: 'AI学習で通学パターンを自動で把握できる機種', feature: 'AIが毎日の行動パターンを学習し、普段と異なる動きを検知して通知します。音声メッセージで子供と連絡を取ることも可能です。Osaka Metroの乗降もAIが検知します。', monthly: '748円/月', best: '電車通学・塾通い' },
  { name: 'あんしんウォッチャー', reason: 'au回線で地下街でも安定して通信できる機種', feature: 'au LTEの800MHz帯プラチナバンドにより、大阪の地下街でも安定して通信できます。1つのau IDで2台目まで月額の追加なしで使えるため、兄弟姉妹での利用に適しています。最大9人で見守りを共有できます。', monthly: '539円/月（2台目は追加0円）', best: '兄弟がいる家庭' },
  { name: 'まもサーチ', reason: '軽量・コンパクトで低学年にも適した機種', feature: '約36gと業界最軽量クラスの端末で、ソフトバンクLTEを使用しています。通知ボタンを搭載しており、子供からのSOS発信も可能です。防水に対応しているため、雨の日も使用できます。', monthly: '528円/月', best: '低学年・小柄な子供' },
];

const osakaFeatures = [
  { icon: '🏪', title: '地下街での位置把握', desc: '梅田・難波の広大な地下街でも、Wi-Fi測位によって位置を把握できます。迷子になりやすい地下街で、GPSが特に役立ちます。' },
  { icon: '🌡️', title: '暑さ対策と防水', desc: '大阪の夏は猛暑となります。防水性・耐熱性を備えた機種を選ぶことで、汗や雨による故障のリスクを軽減できます。' },
  { icon: '🚃', title: '私鉄・地下鉄の乗降通知', desc: '大阪はJR・阪急・阪神・近鉄・Osaka Metroなど路線が複雑です。エリア通知やAI検知によって乗降を把握できます。' },
  { icon: '🏫', title: '塾・習い事の到着通知', desc: '大阪は塾に通う子供が多い地域です。エリア通知を設定すると「塾に着いた」「塾を出た」を自動で通知するため、迎えのタイミングも把握できます。' },
];

export default function OsakaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "大阪の子供見守りGPS活用ガイド｜通学路・治安情報", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'エリア別', href: '/area/' }, { name: '大阪' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">大阪</span>
            <span className="tag-pill bg-orange text-white">通学路・治安</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            大阪の子供見守りGPS活用ガイド
          </h1>
          <p className="text-g600 text-lg">通学路・治安情報｜市区別見守り施策・おすすめ機種</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-g600 mb-8">
            大阪は東京に次ぐ大都市で、繁華街や交通量の多いエリアも多いため、子供用GPSを活用するメリットが大きい地域です。当ページでは、大阪の治安データ、市区別の見守り施策、大阪の地域特性に合わせたGPSの活用法、おすすめ機種を解説します。
          </p>

          <h2 className="section-title">大阪の子供の安全状況</h2>
          <div className="card-hover p-6 mb-6 border-l-4 border-orange">
            <p className="text-g600 mb-3">
              大阪府警の統計によると、大阪府内の子供に対する<strong>声かけ・つきまとい事案は年間1,500件以上</strong>報告されています。
              特に下校時間帯（14時〜18時）と、繁華街に近いエリアで多く発生しています。
            </p>
            <p className="text-g600">
              大阪府は<strong>全国で2番目に防犯カメラの設置台数が多く</strong>、地域の見守りボランティア活動も活発です。
              GPSと地域の防犯体制を組み合わせることで、効果的な見守り環境を構築できます。
            </p>
          </div>

          <h3 className="font-bold text-g800 text-lg mb-3">エリア別の治安概況</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">エリア</th>
                  <th className="py-3 px-3 text-center font-bold text-g800">治安レベル</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">備考</th>
                </tr>
              </thead>
              <tbody>
                {safetyData.map((s) => (
                  <tr key={s.area} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{s.area}</td>
                    <td className="py-3 px-3 text-center text-g600">{s.level}</td>
                    <td className="py-3 px-3 text-g600">{s.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">市区別の見守り施策</h2>
          <p className="text-g600 mb-4">
            大阪府内の多くの自治体では、独自の子供見守り施策を実施しています。GPS端末と併用することで、より手厚い見守り体制を構築できます。
          </p>
          <div className="space-y-4 mb-8">
            {cityPrograms.map((c) => (
              <div key={c.city} className="card-hover p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="tag-pill bg-blue text-white text-xs">{c.city}</span>
                  <h3 className="font-bold text-g800">{c.program}</h3>
                </div>
                <p className="text-sm text-g600">{c.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">大阪で役立つGPS機能</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {osakaFeatures.map((f) => (
              <div key={f.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-2xl">{f.icon}</p>
                <div>
                  <h3 className="font-bold text-g800">{f.title}</h3>
                  <p className="text-sm text-g600">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">大阪でおすすめのGPS機種</h2>
          <div className="space-y-4 mb-8">
            {recommendedDevices.map((d) => (
              <div key={d.name} className="card-hover p-5">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-bold text-g800 text-lg">{d.name}</h3>
                  <span className="tag-pill bg-orange text-white text-xs">{d.best}</span>
                </div>
                <p className="text-sm text-blue font-semibold mb-2">{d.reason}</p>
                <p className="text-sm text-g600 mb-2">{d.feature}</p>
                <p className="text-sm text-g500">月額: {d.monthly}</p>
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

          <div className="mt-10 flex flex-wrap gap-3 text-sm">
            <Link href="/area/tokyo/" className="text-blue hover:underline">東京のGPS活用ガイド</Link>
            <Link href="/knowledge/how-to-choose/" className="text-blue hover:underline">GPS選び方ガイド</Link>
            <Link href="/knowledge/commute-safety/" className="text-blue hover:underline">通学路の安全対策</Link>
            <Link href="/knowledge/gps-range/" className="text-blue hover:underline">通信範囲と届く距離</Link>
          </div>

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">大阪での通学の見守り</h2>
            <p className="text-g600 mb-6 text-sm">お子さまの通学スタイルとお住まいのエリアに合ったGPS端末をお選びください。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/2026-ranking/" className="btn-primary">2026年おすすめランキング</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">GPS選び方ガイド</Link>
            </div>
          </div>

          <p className="text-xs text-g400 mt-8 text-center">最終更新: 2026年5月</p>
        </div>
      </section>
    </>
  );
}
