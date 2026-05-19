import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '大阪の子供見守りGPS活用ガイド｜通学路・治安情報',
  description:
    '大阪で子供にGPS見守り端末を持たせる際の活用ガイド。大阪の子供の安全状況、市区別の見守り施策、大阪で特に役立つGPS機能、おすすめ機種を詳しく解説。',
  keywords: ['子供GPS', '大阪', 'おすすめ', '見守り', '通学路', '治安', '不審者'],
  openGraph: {
    title: '大阪の子供見守りGPS活用ガイド｜通学路・治安情報',
    description: '大阪で子供にGPS見守りを導入する際のガイド。治安情報、見守り施策、おすすめ機種を紹介。',
  },
};

const faqData = [
  { q: '大阪は子供にGPSが必要な地域ですか？', a: 'はい、大阪府は全国的に見ても子供への声かけ・不審者事案の件数が多い地域です。特に大阪市内は人口密度が高く、繁華街に近い通学路を通るお子さまも多いため、GPSによる見守りは効果的です。2001年の池田小事件以降、大阪府は学校安全に特に力を入れています。' },
  { q: '大阪の電車通学にGPSは必要ですか？', a: '大阪でも私立小学校への電車通学があり、御堂筋線や阪急・阪神・近鉄など複数の鉄道を利用するお子さまがいます。東京ほどではありませんが、ジオフェンス機能で駅の到着・出発を通知設定しておくと安心です。' },
  { q: '大阪府が提供する子供の安全サービスはありますか？', a: '大阪府は「安まちメール」で犯罪・不審者情報をリアルタイム配信しています。また、大阪市は「こども見守り110番」の家（協力事業所）を市内に多数設置しています。これらのサービスとGPS端末を併用することで、より効果的な見守りが可能です。' },
  { q: '大阪の地下鉄でGPSは使えますか？', a: '大阪メトロの駅構内ではGPS電波は届きませんが、Wi-Fi測位に対応した機種であれば位置を推定できる場合があります。地上に出た際に正確な位置が更新されます。大阪メトロは駅間の距離が比較的短いため、地下区間でも大きな問題にはなりにくいです。' },
  { q: '大阪でおすすめのGPS機種は？', a: '大阪では通学距離が比較的短い（徒歩圏内）ケースが多いため、シンプルな位置確認機能とジオフェンスがあれば十分です。コスパ重視ならみてねみまもりGPS（月額528円）、バッテリー重視ならあんしんウォッチャー（最長1.5ヶ月）がおすすめです。' },
  { q: '大阪の習い事通いにGPSは役立ちますか？', a: '大阪では塾やスポーツ教室への習い事通いが盛んです。特に夕方〜夜間の帰宅時はGPSがあると安心です。習い事先にジオフェンスを設定しておけば、到着・出発が自動通知されます。繁華街を通る通塾路がある場合は特に有効です。' },
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
  { category: '声かけ・つきまとい', stat: '年間約3,200件（2025年）', detail: '下校時間帯（15〜18時）に集中。公園や路地裏で多発。特にミナミ・キタ周辺の繁華街に近いエリアで注意が必要。' },
  { category: '子供の交通事故', stat: '年間約1,800件（2025年）', detail: '自転車利用が多い大阪では自転車事故が目立つ。交差点での出会い頭事故が最多。' },
  { category: '行方不明・迷子', stat: '年間約800件（2025年）', detail: '大型商業施設（あべのハルカス、グランフロント大阪等）やイベント時に多発。' },
  { category: '不審者による接触', stat: '年間約500件（2025年）', detail: '公園・通学路での声かけが中心。SNSを通じた接触も増加傾向。' },
];

const areaPolicies = [
  { area: '大阪市（全域）', policy: 'こども見守り110番', detail: '市内約15,000か所の協力事業所が「子ども110番の家」として子供の駆け込み先に。GPSと併用で二重の安心。' },
  { area: '北区・中央区', policy: '繁華街見守りパトロール', detail: 'ミナミ・キタ周辺は繁華街に近いため、警察と地域が連携した重点パトロールを実施。通学路の安全確保に注力。' },
  { area: '堺市', policy: '堺っ子見守りネット', detail: '防犯カメラの増設と地域ボランティアによる登下校見守り。学校と保護者の連携体制も充実。' },
  { area: '豊中市', policy: '豊中安全・安心メール', detail: '犯罪・不審者情報のリアルタイム配信。市立小学校の通学路に防犯カメラを順次設置中。' },
  { area: '吹田市', policy: '吹田市子供安全プロジェクト', detail: '万博記念公園周辺エリアの見守り強化。ICT活用の見守り実証実験も実施。' },
  { area: '東大阪市', policy: '東大阪市防犯メール', detail: '犯罪情報・不審者情報の配信。市内小学校区ごとの防犯パトロールも実施。' },
];

const osakaFeatures = [
  { icon: '📍', title: 'ジオフェンス通知', desc: '学校・塾・習い事など、お子さまの行き先にジオフェンスを設定。到着・出発を自動で通知してくれます。大阪の小学校は校区制が厳格なため、校区外への移動を検知するのにも有効です。', importance: '非常に重要' },
  { icon: '🚶', title: '行動履歴・ルート表示', desc: '通学路を毎日同じルートで通っているか確認できます。大阪は商店街が多く、寄り道の誘惑が多い地域です。行動履歴で寄り道パターンを把握し、お子さまと安全なルートを話し合いましょう。', importance: '重要' },
  { icon: '🔔', title: '異常移動アラート', desc: '普段と異なるルートや速度での移動を検知して通知する機能。大阪は自転車利用が多く、知らない人の自転車に乗せられた場合などの異常を検知できます。', importance: '重要' },
  { icon: '🌙', title: '夜間見守り', desc: '塾や習い事で帰りが遅くなるお子さまには、夜間の位置確認が特に重要です。大阪は塾通いが盛んな地域のため、夕方〜夜間の見守りニーズが高いです。', importance: 'あると便利' },
  { icon: '🗣️', title: 'トーク機能', desc: '迷った時や困った時に保護者と連絡が取れるトーク機能。大阪の繁華街で迷子になった場合など、すぐに連絡が取れると安心です。BoTトークやmyFirst Foneが対応。', importance: 'あると便利' },
];

const recommendedForOsaka = [
  { name: 'みてねみまもりGPS', reason: '月額528円のコスパの良さが魅力。ジオフェンス最大10件設定可能で、学校・塾・習い事の到着通知に対応。軽量26gでランドセルに入れっぱなしでOK。大阪の短距離通学には十分な機能。', best: 'コスパ重視の方に最適' },
  { name: 'あんしんウォッチャー', reason: 'バッテリー最長1.5ヶ月は業界トップクラス。充電頻度が少ないため、忙しい保護者にも安心。2台目割引があるため、兄弟での利用にもおすすめ。au回線で大阪市内の通信も安定。', best: 'バッテリー重視・兄弟利用に最適' },
  { name: 'BoTトーク', reason: 'トーク機能付きで、繁華街で迷った時や習い事の終了連絡に使える。大阪は塾通いが多い地域のため、双方向コミュニケーションの需要が高い。月額748円だが、キッズケータイ代わりになるコスパ。', best: '塾通い・習い事が多いお子さまに最適' },
];

export default function OsakaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'エリア別ガイド', href: '/' }, { name: '大阪' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">大阪</span>
            <span className="tag-pill bg-blue text-white">見守りガイド</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            大阪の子供見守りGPS活用ガイド
          </h1>
          <p className="text-g600 text-lg">通学路・治安情報｜大阪で役立つGPS機能とおすすめ機種</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-g600 mb-8">
            大阪は全国的に見ても子供の安全対策に力を入れている地域です。2001年の池田小事件以降、学校安全の取り組みが全国に先駆けて進められてきました。一方で、人口密度の高さや繁華街の存在から、子供の安全リスクも依然として存在します。このページでは、大阪の子供の安全状況、市区別の見守り施策、大阪で特に役立つGPS機能、おすすめ機種を詳しく解説します。
          </p>

          <h2 className="section-title">大阪の子供の安全状況</h2>
          <p className="text-sm text-g500 mb-3">※ 大阪府警・大阪府の公開データに基づく概算。</p>
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

          <h2 className="section-title">市区別の見守り施策</h2>
          <div className="space-y-4 mb-8">
            {areaPolicies.map((a) => (
              <div key={a.area} className="card-hover p-5">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-g800">{a.area}</h3>
                  <span className="tag-pill bg-blue-light text-g700 text-xs">{a.policy}</span>
                </div>
                <p className="text-sm text-g600">{a.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">大阪で特に役立つGPS機能</h2>
          <div className="space-y-4 mb-8">
            {osakaFeatures.map((f) => (
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

          <h2 className="section-title">大阪でおすすめのGPS機種</h2>
          <div className="space-y-4 mb-8">
            {recommendedForOsaka.map((r) => (
              <div key={r.name} className="card-hover p-6">
                <h3 className="font-bold text-g800 text-lg mb-1">{r.name}</h3>
                <p className="text-sm text-orange font-semibold mb-2">{r.best}</p>
                <p className="text-sm text-g600">{r.reason}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-light rounded-xl p-5 mb-8">
            <h3 className="font-bold text-g800 mb-2">大阪府の見守り関連サービス</h3>
            <ul className="space-y-2 text-sm text-g600">
              <li><span className="font-semibold text-g700">安まちメール:</span> 大阪府警が配信する犯罪・不審者情報メール。無料登録可能。</li>
              <li><span className="font-semibold text-g700">こども110番の家:</span> 大阪市内約15,000か所。子供の緊急避難先。</li>
              <li><span className="font-semibold text-g700">大阪府子供の安全見守り:</span> 防犯カメラの設置推進と地域パトロール支援。</li>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">大阪の子供の安全をGPSで守ろう</h2>
            <p className="text-g600 mb-6 text-sm">通学路や習い事の見守りに、GPSは大阪でも頼りになるツールです。</p>
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
