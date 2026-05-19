import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '東京の子供見守りGPS活用ガイド｜通学路・治安情報',
  description:
    '東京で子供用GPSを活用するための完全ガイド。23区・市部の治安データ、区別の見守り施策、電車乗降通知など東京ならではのGPS活用法、おすすめ機種まで詳しく解説します。',
  keywords: ['子供GPS', '東京', 'おすすめ', '見守り', '通学路', '治安'],
  openGraph: {
    title: '東京の子供見守りGPS活用ガイド｜通学路・治安情報',
    description: '東京で子供用GPSを活用するためのガイド。区別治安データ、見守り施策、おすすめ機種を紹介。',
  },
};

const faqData = [
  { q: '東京の小学生にGPSは必要ですか？', a: '東京は人口密度が高く、交通量も多いため、子供用GPSの必要性は非常に高いです。特に電車通学が多い東京では、乗り過ごしや乗り間違いの把握、通学路上での寄り道検知などにGPSが役立ちます。警視庁の統計でも、都内の子供に対する声かけ事案は年間2,000件以上報告されています。' },
  { q: '東京で電車乗降通知が使えるGPSはどれですか？', a: 'みてねみまもりGPS、BoTトーク、あんしんウォッチャーなどは、駅周辺にジオフェンスを設定することで実質的な乗降通知が可能です。特にBoTトークはAI学習により駅の乗降を自動認識し、「電車に乗りました」「電車を降りました」と通知してくれる機能があります。' },
  { q: '東京の地下鉄でもGPSは使えますか？', a: '地下鉄のホームや車内ではGPS衛星の電波は届きませんが、東京メトロ・都営地下鉄の駅構内にはWi-Fiスポットや携帯基地局が充実しているため、Wi-Fi測位や基地局測位でおおよその位置は取得できます。地上に出れば通常のGPS測位に戻ります。' },
  { q: '東京23区で特に治安が心配なエリアはどこですか？', a: '警視庁の犯罪統計によると、新宿区・渋谷区・豊島区（池袋周辺）は繁華街を含むため犯罪発生率が高めです。ただし、これは繁華街エリアの数値であり、住宅地は比較的安全です。通学路が繁華街を通る場合は、ジオフェンス設定でルート逸脱を早期に検知できるGPSが有効です。' },
  { q: '東京都の自治体で見守りGPSの補助金はありますか？', a: '2026年現在、東京都として統一的なGPS補助金制度はありませんが、一部の区では独自の見守り施策を実施しています。品川区の「まもるっち」、杉並区の通学路見守りシステム、世田谷区の地域見守りネットワークなどがあります。各区の教育委員会や子育て支援課に問い合わせることをおすすめします。' },
  { q: '東京で子供用GPSを選ぶ際のポイントは？', a: '東京では(1)地下鉄でも位置取得できるWi-Fi測位対応機種、(2)電車乗降をAI検知できる機種（BoTトーク等）、(3)人混みの中でもSOS通知できる機種、(4)バッテリー持ちが良い機種（通学時間が長いため）の4点が重要です。通信キャリアは都内であればどのキャリアでもカバーされています。' },
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
  { area: '千代田区・中央区・港区', level: '比較的安全', note: 'オフィス街中心。昼間の人通りが多く防犯カメラも充実。夜間は人が少なくなる。' },
  { area: '新宿区・渋谷区・豊島区', level: '注意が必要', note: '繁華街を含むため犯罪発生率が高め。住宅地エリアは比較的安全。通学路の設定に注意。' },
  { area: '世田谷区・杉並区・練馬区', level: '比較的安全', note: '住宅地中心。地域の見守り活動が活発。公園や緑地が多い。' },
  { area: '江東区・墨田区・江戸川区', level: '普通', note: '再開発で治安改善傾向。水辺エリアの通学路は見通しに注意。' },
  { area: '八王子市・町田市・多摩市', level: '比較的安全', note: '郊外住宅地。通学距離が長い傾向があり、GPSの必要性が高い。' },
];

const wardPrograms = [
  { ward: '品川区', program: 'まもるっち', desc: '区立小学校の全児童に防犯ブザー兼GPS端末を配布。通学路上に受信基地局を設置し、ボタンを押すと学校・保護者・区に通報される。' },
  { ward: '杉並区', program: '通学路見守りシステム', desc: '通学路にビーコンセンサーを設置。登録した端末が通過すると保護者に自動通知。地域ボランティアとの連携も実施。' },
  { ward: '世田谷区', program: '地域見守りネットワーク', desc: '町会・商店街・学校が連携した見守り体制。GPS端末との併用を推奨し、定期的な安全マップの更新を実施。' },
  { ward: '文京区', program: '安心・安全メール', desc: '不審者情報や災害情報をメール配信。GPSの位置情報と合わせて、子供の安全を二重に確認できる。' },
  { ward: '江戸川区', program: '子どもの安全見守り事業', desc: '防犯カメラの設置と地域パトロールの強化。GPS端末の普及促進も図っている。' },
];

const recommendedDevices = [
  { name: 'BoTトーク', reason: '電車乗降AI検知が東京の通学に最適', feature: 'AI学習で「電車に乗りました/降りました」を自動通知。JR・私鉄・地下鉄すべてに対応。音声メッセージ機能で連絡も取れる。', monthly: '748円/月', best: '電車通学の子供' },
  { name: 'みてねみまもりGPS', reason: 'コスパ良く都内全域をカバー', feature: '業界最安クラスの月額。ソフトバンクLTEで都内カバー率99%以上。バッテリー最大2ヶ月持続。シンプル操作で低学年にもおすすめ。', monthly: '528円/月', best: '徒歩通学の子供' },
  { name: 'あんしんウォッチャー', reason: 'au回線で地下でも安定', feature: 'au LTEの800MHz帯プラチナバンドで地下・建物内でも通信安定。最大9人で見守り共有。2台目割引あり。', monthly: '539円/月（2台目220円）', best: '兄弟がいる家庭' },
  { name: 'myFirst Fone R2', reason: '通話・SOS機能で都市部の安全対策', feature: '腕時計型で紛失しにくい。SOS通話機能で緊急時に保護者に即連絡。ビデオ通話対応。GPSに加えWi-Fi測位でビル街にも強い。', monthly: '998円/月', best: '高学年・塾通い' },
];

const tokyoFeatures = [
  { icon: '🚃', title: '電車乗降通知', desc: '東京の小学生の約3割が電車通学。駅のジオフェンスやAI検知で、乗車・降車をリアルタイムに通知。乗り過ごしもすぐわかります。' },
  { icon: '🏙️', title: 'ビル街でのWi-Fi測位', desc: '高層ビルが多い都心部ではGPS衛星の電波が遮られやすい。Wi-Fiアクセスポイントが密集している東京では、Wi-Fi測位で補完され精度が維持されます。' },
  { icon: '🚇', title: '地下鉄での位置把握', desc: '東京メトロ・都営地下鉄の全駅でWi-Fiが整備されており、地下鉄利用中もおおよその位置を把握できます。' },
  { icon: '📱', title: 'SOS通知', desc: '人混みの中で子供が不安を感じた場合、端末のボタンを押すだけで保護者にSOS通知。位置情報と一緒に送られるので、迎えに行けます。' },
];

export default function TokyoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'エリア別', href: '/' }, { name: '東京' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">東京</span>
            <span className="tag-pill bg-orange text-white">通学路・治安</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            東京の子供見守りGPS活用ガイド
          </h1>
          <p className="text-g600 text-lg">通学路・治安情報｜電車乗降通知・区別見守り施策</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-g600 mb-8">
            東京は電車通学の子供が多く、人口密度も高いため、子供用GPSの活用メリットが非常に大きいエリアです。このページでは、東京の治安データ、区別の見守り施策、東京ならではのGPS活用法（電車乗降通知など）、おすすめ機種を詳しく解説します。
          </p>

          <h2 className="section-title">東京の子供の安全状況</h2>
          <div className="card-hover p-6 mb-6 border-l-4 border-orange">
            <p className="text-g600 mb-3">
              警視庁の統計によると、東京都内の子供に対する<strong>声かけ・つきまとい事案は年間2,000件以上</strong>報告されています。
              特に下校時間帯（14時〜18時）に集中しており、通学路での見守りが重要です。
            </p>
            <p className="text-g600">
              一方で、東京は<strong>防犯カメラの設置密度が全国トップクラス</strong>であり、地域の見守り活動も活発です。
              GPSと地域の防犯体制を組み合わせることで、より安全な見守り環境を構築できます。
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

          <h2 className="section-title">区別の見守り施策</h2>
          <p className="text-g600 mb-4">
            東京の多くの区では、独自の子供見守り施策を実施しています。GPS端末と併用することで、より安心な見守り体制を構築できます。
          </p>
          <div className="space-y-4 mb-8">
            {wardPrograms.map((w) => (
              <div key={w.ward} className="card-hover p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="tag-pill bg-blue text-white text-xs">{w.ward}</span>
                  <h3 className="font-bold text-g800">{w.program}</h3>
                </div>
                <p className="text-sm text-g600">{w.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">東京で役立つGPS機能</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {tokyoFeatures.map((f) => (
              <div key={f.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-2xl">{f.icon}</p>
                <div>
                  <h3 className="font-bold text-g800">{f.title}</h3>
                  <p className="text-sm text-g600">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">東京でおすすめのGPS機種</h2>
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
            <Link href="/area/osaka/" className="text-blue hover:underline">大阪のGPS活用ガイド</Link>
            <Link href="/knowledge/how-to-choose/" className="text-blue hover:underline">GPS選び方ガイド</Link>
            <Link href="/knowledge/commute-safety/" className="text-blue hover:underline">通学路の安全対策</Link>
            <Link href="/knowledge/gps-range/" className="text-blue hover:underline">通信範囲と届く距離</Link>
          </div>

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">東京の通学を安心に</h2>
            <p className="text-g600 mb-6 text-sm">電車通学・徒歩通学、お子さまの通学スタイルに合ったGPSを選びましょう。</p>
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
