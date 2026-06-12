import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '大阪の子供見守りGPS活用ガイド｜通学路・治安情報',
  description:
    '大阪で子供用GPSを活用するための完全ガイド。市区別の治安データ、自治体の見守り施策、大阪ならではのGPS活用法、おすすめ機種まで詳しく解説します。',
  keywords: ['子供GPS', '大阪', 'おすすめ', '見守り', '通学路', '治安'],
  openGraph: {
    title: '大阪の子供見守りGPS活用ガイド｜通学路・治安情報',
    description: '大阪で子供用GPSを活用するためのガイド。市区別治安データ、見守り施策、おすすめ機種を紹介。',
  },
};

const faqData = [
  { q: '大阪の小学生にGPSは必要ですか？', a: '大阪は東京に次いで人口密度が高く、繁華街や交通量の多いエリアも多いため、子供用GPSの必要性は高いです。大阪府警の統計では、子供に対する声かけ・つきまとい事案は年間1,500件以上報告されています。特にミナミ・キタの繁華街に近いエリアや、通学路が幹線道路沿いの場合はGPSの活用が推奨されます。' },
  { q: '大阪の地下鉄（Osaka Metro）でもGPSは使えますか？', a: 'Osaka Metroの駅構内には携帯基地局やWi-Fiスポットが設置されているため、Wi-Fi測位や基地局測位でおおよその位置は取得できます。ただし、トンネル走行中はGPS衛星の電波は届きません。駅に到着すれば位置情報が更新されるため、乗降の把握には問題ありません。' },
  { q: '大阪で特に治安が心配なエリアはどこですか？', a: '大阪府警の犯罪統計によると、大阪市中央区（ミナミ）、北区（キタ）、浪速区は繁華街を含むため犯罪発生率が高めです。ただし、住宅地エリアは比較的安全です。通学路が繁華街周辺を通る場合は、ジオフェンス設定でルート逸脱を早期検知できるGPSが有効です。' },
  { q: '大阪府や市の見守り補助金・支援はありますか？', a: '2026年現在、大阪府として統一的なGPS補助金はありませんが、大阪市では「こども見守り隊」などの地域ボランティア活動が活発です。また、一部の市区では防犯ブザーの無償配布や見守りカメラの設置を進めています。各市区の教育委員会に問い合わせることをおすすめします。' },
  { q: '大阪で子供用GPSを選ぶ際のポイントは？', a: '大阪では(1)地下街やOsaka Metroでも位置取得できるWi-Fi測位対応機種、(2)繁華街通過時の通知設定ができる機種、(3)暑さ・湿度に強い防水対応機種（大阪の夏は高温多湿）、(4)通信キャリアはソフトバンク・au・ドコモいずれも大阪市内はカバー済み、の4点が重要です。' },
  { q: '大阪から他県への移動時もGPSは使えますか？', a: 'はい、子供用GPSは日本全国で利用できます。大阪から奈良・京都・兵庫への遠足や家族旅行でも、LTE回線のカバーエリア内であれば問題なく位置を確認できます。山間部への遠足の際は、事前にキャリアのエリアマップで電波状況を確認しておくと安心です。' },
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
  { area: '大阪市北区（キタ）', level: '注意が必要', note: '梅田周辺の繁華街。昼間は人通りが多いが、夜間は酔客も多い。住宅地エリアは安全。' },
  { area: '大阪市中央区（ミナミ）', level: '注意が必要', note: '難波・心斎橋の繁華街。観光客も多く雑踏に注意。住宅地は比較的静か。' },
  { area: '大阪市天王寺区・阿倍野区', level: '比較的安全', note: '文教地区。学校や塾が多く、見守りの意識が高い。' },
  { area: '大阪市住吉区・東住吉区', level: '比較的安全', note: '閑静な住宅地。通学距離がやや長い傾向あり。' },
  { area: '堺市・豊中市・吹田市', level: '比較的安全', note: 'ベッドタウンとして人気。子育て世帯が多く、地域の見守り活動が活発。' },
  { area: '東大阪市・八尾市', level: '普通', note: '工業地帯と住宅地が混在。幹線道路沿いの通学路は交通安全に注意。' },
];

const cityPrograms = [
  { city: '大阪市', program: 'こども見守り隊', desc: '地域ボランティアによる通学路の見守り活動。約5,000人のボランティアが登録し、登下校時間に通学路に立って子供の安全を見守る。' },
  { city: '堺市', program: '安全・安心まちづくり', desc: '防犯カメラの設置推進と、地域防犯パトロール。市立小学校の通学路に重点的に防犯カメラを設置。' },
  { city: '豊中市', program: '子ども安全見守り事業', desc: '地域住民・商店・企業が「子ども110番の家」として登録。通学路沿いに避難場所を確保し、GPS端末との併用を推奨。' },
  { city: '吹田市', program: '登下校メール配信', desc: '学校の校門にICタグリーダーを設置。登下校時にICタグを検知し、保護者にメール通知。GPSとの併用で通学路全体をカバー。' },
  { city: '箕面市', program: '子ども見守りシステム', desc: '市内全小学校の児童にICタグを配布し、通学路上のセンサーで通過を検知。GPSと組み合わせた二重見守り体制。' },
];

const recommendedDevices = [
  { name: 'みてねみまもりGPS', reason: 'コスパ最強で大阪の通学にぴったり', feature: '業界最安クラスの月額528円。ソフトバンクLTEで大阪府内カバー率99%以上。バッテリー最大2ヶ月持続。迷子通知やジオフェンスも標準搭載。', monthly: '528円/月', best: '徒歩通学の子供' },
  { name: 'BoTトーク', reason: 'AI学習で通学パターンを自動把握', feature: 'AIが毎日の行動パターンを学習し、いつもと違う動きを検知して通知。音声メッセージで子供との連絡も可能。Osaka Metroの乗降もAI検知。', monthly: '748円/月', best: '電車通学・塾通い' },
  { name: 'あんしんウォッチャー', reason: 'au回線で地下街でも安定通信', feature: 'au LTEの800MHz帯プラチナバンドで大阪の地下街でも安定。2台目月額220円で兄弟利用に最適。最大9人で見守り共有可能。', monthly: '539円/月（2台目220円）', best: '兄弟がいる家庭' },
  { name: 'まもサーチ', reason: '軽量・コンパクトで低学年にも', feature: '業界最軽量クラスの約36g。ソフトバンクLTE。通知ボタン搭載で、子供からのSOS発信も可能。防水対応で雨の日も安心。', monthly: '528円/月', best: '低学年・小柄な子供' },
];

const osakaFeatures = [
  { icon: '🏪', title: '地下街での位置把握', desc: '梅田・難波の広大な地下街でもWi-Fi測位で位置を把握。迷子になりやすい地下街でこそGPSが活躍します。' },
  { icon: '🌡️', title: '暑さ対策と防水', desc: '大阪の夏は猛暑。防水・耐熱性のある機種を選ぶことで、汗や雨による故障リスクを軽減できます。' },
  { icon: '🚃', title: '私鉄・地下鉄の乗降通知', desc: 'JR・阪急・阪神・近鉄・Osaka Metroなど路線が複雑な大阪。ジオフェンスやAI検知で乗降を把握できます。' },
  { icon: '🏫', title: '塾・習い事の到着通知', desc: '大阪は塾通いの子供が多い。ジオフェンス設定で「塾に着いた」「塾を出た」を自動通知。迎えのタイミングもわかります。' },
];

export default function OsakaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "大阪の子供見守りGPS活用ガイド｜通学路・治安情報", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "エリア別", "item": "https://gps-kodomo.com/area/"}, {"@type": "ListItem", "position": 3, "name": "大阪", "item": "https://gps-kodomo.com/area/osaka/"}]}) }} />
      <Breadcrumb items={[{ name: 'エリア別', href: '/' }, { name: '大阪' }]} />

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
            大阪は東京に次ぐ大都市であり、繁華街や交通量の多いエリアも多いため、子供用GPSの活用メリットが大きいエリアです。このページでは、大阪の治安データ、市区別の見守り施策、大阪ならではのGPS活用法、おすすめ機種を詳しく解説します。
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">大阪の通学を安心に</h2>
            <p className="text-g600 mb-6 text-sm">お子さまの通学スタイルとエリアに合ったGPSを選びましょう。</p>
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
