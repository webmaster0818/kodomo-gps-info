import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '東京の子供見守りGPS活用ガイド｜通学路・治安情報',
  description:
    '東京で子供にGPS見守り端末を持たせる際の活用ガイド。東京の子供の安全状況（不審者情報・交通事故）、区別の見守り施策、電車乗降通知など東京で特に役立つGPS機能、おすすめ機種を解説。',
  keywords: ['子供GPS', '東京', 'おすすめ', '見守り', '通学路', '治安', '不審者'],
  openGraph: {
    title: '東京の子供見守りGPS活用ガイド｜通学路・治安情報',
    description: '東京で子供にGPS見守りを導入する際のガイド。治安情報、区別の見守り施策、おすすめ機種を紹介。',
  },
};

const faqData = [
  { q: '東京は子供にGPSが特に必要な地域ですか？', a: 'はい、東京は人口密度が高く、交通量が多いため、子供の安全リスクが全国平均より高い傾向にあります。警視庁の統計では、東京都内の子供に対する声かけ・不審者情報は年間数千件にのぼります。また、電車通学や塾通いで一人で移動する機会が多いため、GPSによる見守りは特に有効です。' },
  { q: '東京の電車通学にGPSは役立ちますか？', a: '非常に役立ちます。東京では私立小学校への電車通学が多く、乗り換えを含む複雑な通学路をお子さまが一人で通うケースがあります。GPS端末のジオフェンス機能で駅の到着・出発を通知設定すれば、「学校の最寄り駅に着いた」「自宅の最寄り駅に着いた」がリアルタイムでわかります。' },
  { q: '東京のどの区が特に見守りに力を入れていますか？', a: '品川区は「しながわ見守りネットワーク」として、GPSや防犯カメラを活用した見守りシステムを導入しています。世田谷区は「せたがや見守りプロジェクト」、豊島区は「としま安全・安心メール」など、多くの区が独自の見守り施策を展開しています。' },
  { q: '東京都が提供する子供の安全関連サービスはありますか？', a: '東京都は「まもるっち」（子供安全プログラム）やメールけいしちょう（不審者情報配信）などのサービスを提供しています。これらとGPS端末を併用することで、より手厚い見守り体制を構築できます。また、区によっては見守り端末の費用補助を行っている場合もあります。' },
  { q: '東京で特におすすめのGPS機種はどれですか？', a: '東京では電車通学が多いため、ジオフェンス機能が優れた機種がおすすめです。みてねみまもりGPSは複数のジオフェンスを設定でき、駅ごとの通知が便利。あんしんウォッチャーはau回線で地下鉄でも比較的安定した通信が可能です。' },
  { q: '東京の地下鉄でGPSは使えますか？', a: 'GPS衛星の電波は地下には届きませんが、地下鉄の駅にはWi-Fiアクセスポイントが設置されている場合があり、Wi-Fi測位で位置を推定できる機種もあります。ただし精度は地上より低くなります。地上に出た時点で正確な位置が更新されます。' },
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

const safetyStats = [
  { category: '声かけ・不審者情報', stat: '年間約4,000件（2025年）', detail: '登下校時間帯（14〜18時）に集中。特に公園周辺や住宅街の路地で多発。' },
  { category: '子供の交通事故', stat: '年間約2,500件（2025年）', detail: '自転車関連事故が多い。交差点での飛び出し事故が目立つ。' },
  { category: '行方不明・迷子', stat: '年間約1,200件（2025年）', detail: '商業施設やイベント会場での迷子が多い。電車の乗り間違いによるケースも。' },
  { category: '連れ去り・誘拐未遂', stat: '年間約80件（2025年）', detail: '数は少ないが深刻な事案。下校時の一人歩き中に発生するケースが多い。' },
];

const wardPolicies = [
  { ward: '品川区', policy: 'しながわ見守りネットワーク', detail: '防犯カメラ・GPS連携の見守りシステム。通学路に多数の見守りポイントを設置。' },
  { ward: '世田谷区', policy: 'せたがや見守りプロジェクト', detail: '地域ボランティアとICTを組み合わせた見守り体制。見守りアプリとの連携も。' },
  { ward: '豊島区', policy: 'としま安全・安心メール', detail: '不審者情報や防犯情報をリアルタイム配信。GPS端末との併用で効果的。' },
  { ward: '江東区', policy: 'こうとう安全・安心メール', detail: '区内の不審者情報・犯罪発生情報をメールで配信。学校との連携も充実。' },
  { ward: '杉並区', policy: '杉並区子どもの安全見守り', detail: '通学路への防犯カメラ設置や、見守りボランティアの配置を推進。' },
  { ward: '練馬区', policy: 'ねりま安全・安心メール', detail: '犯罪発生情報・不審者情報の配信。区立小学校の通学路安全対策も実施。' },
];

const tokyoFeatures = [
  { icon: '🚃', title: '電車乗降通知（ジオフェンス）', desc: '東京では電車通学のお子さまが多いです。自宅最寄り駅・学校最寄り駅・乗り換え駅にジオフェンスを設定することで、「今○○駅に着きました」という通知が自動で届きます。電車の遅延や乗り間違いにもいち早く気づけます。', importance: '非常に重要' },
  { icon: '🏫', title: '複数ジオフェンス設定', desc: '学校・塾・習い事・友達の家など、東京の子供は移動先が多岐にわたります。複数のジオフェンスを設定できる機種を選ぶことで、それぞれの到着・出発を個別に通知できます。みてねみまもりGPSは最大10件のジオフェンス設定が可能です。', importance: '重要' },
  { icon: '📶', title: '地下鉄対応（Wi-Fi測位）', desc: '東京メトロや都営地下鉄を利用する場合、地下ではGPS電波が届きません。Wi-Fi測位に対応した機種なら、地下鉄駅でも位置を推定できます。地上に出た際に正確な位置が更新されるため、完全に見守れなくなるわけではありません。', importance: '重要' },
  { icon: '⚡', title: '移動速度アラート', desc: '電車や車に乗っている（高速移動している）ことを検知して通知する機能。お子さまが普段と異なる移動手段を使った場合や、見知らぬ車に乗せられた場合に異常を検知できます。東京のように交通機関が多い地域では特に有効です。', importance: 'あると便利' },
  { icon: '🗺️', title: '行動履歴・ルート表示', desc: '通学路を毎日同じルートで通っているか確認できます。東京は通学路に商業施設や繁華街が含まれることもあるため、寄り道の確認にも役立ちます。行動履歴は過去数日〜数週間分を確認できる機種が多いです。', importance: 'あると便利' },
];

const recommendedForTokyo = [
  { name: 'みてねみまもりGPS', reason: 'ジオフェンス最大10件設定可能で、電車通学の駅ごと通知に最適。軽量26gでランドセルに入れっぱなしでOK。月額528円のコスパも魅力。', best: '電車通学のお子さまに最適' },
  { name: 'あんしんウォッチャー', reason: 'au回線で東京の地下鉄周辺でも比較的安定した通信。バッテリー最長1.5ヶ月で充電の手間が少ない。2台目割引ありで兄弟利用にもおすすめ。', best: 'バッテリー重視・兄弟利用に最適' },
  { name: 'BoTトーク', reason: 'トーク機能付きで、電車の遅延時や迷った時に連絡が取れる安心感。東京の複雑な交通網では、位置確認だけでなくコミュニケーション手段があると心強い。', best: '双方向連絡したい方に最適' },
];

export default function TokyoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'エリア別ガイド', href: '/' }, { name: '東京' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">東京</span>
            <span className="tag-pill bg-blue text-white">見守りガイド</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            東京の子供見守りGPS活用ガイド
          </h1>
          <p className="text-g600 text-lg">通学路・治安情報｜電車通学に役立つGPS機能</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-g600 mb-8">
            東京は子供の安全を考える上で、全国でも特にGPS見守りの必要性が高い地域です。人口密度の高さ、複雑な交通網、電車通学の多さなど、東京ならではの事情があります。このページでは、東京の子供の安全状況、区別の見守り施策、東京で特に役立つGPS機能、おすすめ機種を詳しく解説します。
          </p>

          <h2 className="section-title">東京の子供の安全状況</h2>
          <p className="text-sm text-g500 mb-3">※ 警視庁・東京都の公開データに基づく概算。</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">カテゴリ</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">件数</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">詳細</th>
                </tr>
              </thead>
              <tbody>
                {safetyStats.map((s) => (
                  <tr key={s.category} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{s.category}</td>
                    <td className="py-3 px-3 text-right text-g600">{s.stat}</td>
                    <td className="py-3 px-3 text-g600">{s.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">区別の見守り施策</h2>
          <div className="space-y-4 mb-8">
            {wardPolicies.map((w) => (
              <div key={w.ward} className="card-hover p-5">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-g800">{w.ward}</h3>
                  <span className="tag-pill bg-blue-light text-g700 text-xs">{w.policy}</span>
                </div>
                <p className="text-sm text-g600">{w.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">東京で特に役立つGPS機能</h2>
          <div className="space-y-4 mb-8">
            {tokyoFeatures.map((f) => (
              <div key={f.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-3xl flex-shrink-0">{f.icon}</p>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-g800">{f.title}</h3>
                    <span className={`tag-pill text-white text-xs ${f.importance === '非常に重要' ? 'bg-orange' : f.importance === '重要' ? 'bg-blue' : 'bg-g400'}`}>{f.importance}</span>
                  </div>
                  <p className="text-sm text-g600">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">東京でおすすめのGPS機種</h2>
          <div className="space-y-4 mb-8">
            {recommendedForTokyo.map((r) => (
              <div key={r.name} className="card-hover p-6">
                <h3 className="font-bold text-g800 text-lg mb-1">{r.name}</h3>
                <p className="text-sm text-orange font-semibold mb-2">{r.best}</p>
                <p className="text-sm text-g600">{r.reason}</p>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">東京の子供の安全をGPSで守ろう</h2>
            <p className="text-g600 mb-6 text-sm">電車通学や塾通いが多い東京では、GPS見守りが特に効果的です。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/price/" className="btn-primary">月額料金比較</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">GPS選び方ガイド</Link>
            </div>
          </div>

          <p className="text-xs text-g400 mt-6 text-center">最終更新: 2026年5月</p>
        </div>
      </section>
    </>
  );
}
