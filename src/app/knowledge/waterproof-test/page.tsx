import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供用GPSの防水性能比較｜プール・雨・汗でも大丈夫？',
  description:
    '子供用GPS端末の防水性能を徹底比較。IPX5/IPX7/IP67/IP68の違い、全主要機種の防水等級一覧、雨天通学・プール・汗・水洗いの可否、防水でも壊れるケース、水没時の対処法まで詳しく解説します。',
  keywords: ['子供GPS', '防水', 'プール', '雨', 'IP67', 'IPX7', '防水性能'],
  openGraph: {
    title: '子供用GPSの防水性能比較｜プール・雨・汗でも大丈夫？',
    description: '子供用GPS端末の防水性能を徹底比較。IPX5/IPX7/IP67/IP68の違い、全主要機種の防水等級一覧を紹介。',
  },
};

const faqData = [
  { q: '雨の日にGPS端末をランドセルの外側につけても大丈夫？', a: 'IPX5以上の防水性能があれば、通常の雨程度なら問題ありません。ただしランドセルカバーの中に入れるか、防水ポーチに入れておくとより安心です。豪雨の場合はできるだけ直接水がかからないようにしましょう。' },
  { q: 'プールにGPS端末を持って入れますか？', a: '基本的にプールへの持ち込みは推奨されていません。IPX7以上の機種でも「一時的な水没に耐える」レベルであり、長時間の水中使用は想定外です。また塩素を含むプールの水は端末にダメージを与える可能性があります。プール時はロッカーに保管しましょう。' },
  { q: '汗で壊れることはありますか？', a: 'IPX5以上の防水性能があれば、日常的な汗で壊れることはほぼありません。ただし汗に含まれる塩分は金属部品の腐食の原因になるため、汗をかいた後は乾いた布で拭いておくと端末が長持ちします。' },
  { q: '防水端末を水洗いしても大丈夫？', a: 'IPX7以上の機種であれば、流水での軽い水洗いは可能とされています。ただし充電端子やボタン周りに水が残るとトラブルの原因になるため、洗った後は十分に乾燥させてください。水没させて洗うのはNGです。' },
  { q: '防水性能は経年劣化しますか？', a: 'はい、防水のためのゴムパッキンやシール材は経年劣化します。一般的に2〜3年で防水性能は低下すると言われています。端末を落としたり衝撃を与えたりすると、さらに劣化が早まります。古い端末は過信せず、水濡れに注意しましょう。' },
  { q: '温泉やお風呂にGPS端末を持ち込めますか？', a: '絶対にNGです。温泉やお風呂の高温・水蒸気・硫黄成分などは、どの防水等級の端末でも対応していません。高温の蒸気は端末内部に浸入しやすく、基板のショートや腐食の原因になります。入浴時は必ず脱衣所に置いてください。' },
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

const ipRatings = [
  { rating: 'IPX5', dustproof: '規定なし', waterproof: '噴流水（ノズルからの水）に耐える', level: '雨・手洗い程度', example: '雨天の通学、手洗い時のしぶき' },
  { rating: 'IPX7', dustproof: '規定なし', waterproof: '水深1mに30分間の浸漬に耐える', level: '一時的な水没OK', example: '水たまりに落とした、水道で洗った' },
  { rating: 'IPX8', dustproof: '規定なし', waterproof: '水深1.5m以上の連続浸漬に耐える', level: '長時間の水没OK', example: 'プール（理論上）、水中撮影' },
  { rating: 'IP67', dustproof: '完全防塵（6等級）', waterproof: '水深1mに30分間の浸漬に耐える', level: '防塵+一時水没OK', example: '砂場遊び＋雨天、ホコリの多い場所' },
  { rating: 'IP68', dustproof: '完全防塵（6等級）', waterproof: '水深1.5m以上の連続浸漬に耐える', level: '防塵+長時間水没OK', example: '最高レベルの防水防塵' },
];

const deviceWaterproof = [
  { name: 'みてねみまもりGPS 第3世代', rating: 'IP55', rain: '○', sweat: '○', wash: '△', pool: '×', weight: '約56g' },
  { name: 'BoTトーク', rating: 'IP55', rain: '○', sweat: '○', wash: '△', pool: '×', weight: '約50g' },
  { name: 'あんしんウォッチャー', rating: 'IP55', rain: '○', sweat: '○', wash: '△', pool: '×', weight: '約53g' },
  { name: 'まもサーチ', rating: 'IP55', rain: '○', sweat: '○', wash: '△', pool: '×', weight: '約36g' },
  { name: 'soranome', rating: 'IP55', rain: '○', sweat: '○', wash: '△', pool: '×', weight: '約39g' },
  { name: 'myFirst Fone R2', rating: 'IP68', rain: '◎', sweat: '◎', wash: '○', pool: '△', weight: '約58g' },
  { name: 'coneco', rating: 'IPX4', rain: '△', sweat: '○', wash: '×', pool: '×', weight: '約60g' },
  { name: 'Hamic POCKET', rating: 'IPX4', rain: '△', sweat: '○', wash: '×', pool: '×', weight: '約107g' },
  { name: 'キッズフォン3', rating: 'IPX5/IPX8', rain: '○', sweat: '○', wash: '○', pool: '△', weight: '約115g' },
];

const dangerousCases = [
  { situation: 'お風呂・温泉', icon: '♨️', reason: '高温の蒸気が防水シールの隙間から内部に侵入。温泉の硫黄成分は金属端子を腐食させる。', risk: '極めて高い' },
  { situation: '海水・砂浜', icon: '🏖️', reason: '海水の塩分が端子やスピーカー部分を腐食。砂がボタンや充電端子に詰まる。', risk: '高い' },
  { situation: '洗濯機', icon: '🫧', reason: '回転による衝撃と洗剤がパッキンを劣化させ、内部浸水を起こす。', risk: '極めて高い（ほぼ確実に故障）' },
  { situation: '高圧洗浄', icon: '💦', reason: '家庭用高圧洗浄機の水圧はIPX5の試験条件を大幅に超える。', risk: '高い' },
  { situation: 'サウナ・スチーム', icon: '🔥', reason: '高温環境はバッテリーと基板に深刻なダメージ。防水パッキンも高温で変形する。', risk: '極めて高い' },
];

const waterproofAccessories = [
  { name: '防水シリコンケース', price: '500〜1,500円', merit: '軽量で端末にフィット。落下保護も兼ねる。', note: 'サイズが機種専用のものを選ぶこと。' },
  { name: '防水ポーチ（ストラップ付き）', price: '300〜1,000円', merit: 'どの機種にも使える汎用タイプ。首やランドセルに取り付け可能。', note: 'タッチ操作が必要な機種には不向き。' },
  { name: 'ジップロック型防水袋', price: '100〜500円（複数枚）', merit: '安価で手軽。急な雨の応急処置に。', note: '長期使用には向かない。密閉が不完全な場合あり。' },
  { name: 'ランドセル用防水ポケット', price: '800〜2,000円', merit: 'ランドセルの肩ベルトに固定でき、雨から端末を保護。', note: 'GPS端末専用に設計された製品がおすすめ。' },
];

export default function WaterproofTestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供用GPSの防水性能比較｜プール・雨・汗でも大丈夫？", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "お役立ち", "item": "https://gps-kodomo.com/knowledge/"}, {"@type": "ListItem", "position": 3, "name": "防水性能比較", "item": "https://gps-kodomo.com/knowledge/waterproof-test/"}]}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '防水性能比較' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">防水性能</span>
            <span className="tag-pill bg-orange text-white">比較検証</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供用GPSの防水性能比較
          </h1>
          <p className="text-g600 text-lg">プール・雨・汗でも大丈夫？防水規格と機種別対応を徹底解説</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">

          <h2 className="section-title">防水規格（IP等級）の見方</h2>
          <p className="text-g600 mb-4">
            防水性能は「IP」で始まる等級で表されます。「IP」の後の1桁目が防塵等級（0〜6）、2桁目が防水等級（0〜8）です。
            「IPX」は防塵性能が未テストであることを意味します。数字が大きいほど保護性能が高くなります。
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">等級</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">防塵</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">防水内容</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">実用レベル</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">具体例</th>
                </tr>
              </thead>
              <tbody>
                {ipRatings.map((r) => (
                  <tr key={r.rating} className="border-b border-g100">
                    <td className="py-3 px-3 font-bold text-blue">{r.rating}</td>
                    <td className="py-3 px-3 text-g600">{r.dustproof}</td>
                    <td className="py-3 px-3 text-g600">{r.waterproof}</td>
                    <td className="py-3 px-3 text-g600 font-semibold">{r.level}</td>
                    <td className="py-3 px-3 text-g600">{r.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">機種別防水性能比較表</h2>
          <p className="text-sm text-g500 mb-3">◎ = 問題なし / ○ = 基本OK / △ = 条件付き / × = 非推奨（2026年5月時点）</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-2 text-left font-bold text-g800">機種名</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">IP等級</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">雨</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">汗</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">水洗い</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">プール</th>
                </tr>
              </thead>
              <tbody>
                {deviceWaterproof.map((d) => (
                  <tr key={d.name} className="border-b border-g100">
                    <td className="py-3 px-2 font-semibold text-g700">{d.name}</td>
                    <td className="py-3 px-2 text-center text-blue font-bold">{d.rating}</td>
                    <td className="py-3 px-2 text-center text-g600">{d.rain}</td>
                    <td className="py-3 px-2 text-center text-g600">{d.sweat}</td>
                    <td className="py-3 px-2 text-center text-g600">{d.wash}</td>
                    <td className="py-3 px-2 text-center text-g600">{d.pool}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">シーン別の安全性ガイド</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { scene: '雨天の通学', icon: '☂️', verdict: '基本OK', desc: 'IP55以上のほとんどの機種で問題なし。ランドセルの内側やカバーの中に入れておけばさらに安心。豪雨時は防水ポーチがあると安心です。' },
              { scene: '汗をかく運動時', icon: '🏃', verdict: '基本OK', desc: '日常的な発汗程度ではほぼ影響なし。ただし腕時計型は汗の塩分で肌側の端子が腐食しやすいため、定期的に拭き取りましょう。' },
              { scene: 'プール・水遊び', icon: '🏊', verdict: '非推奨', desc: 'IP68のmyFirst Fone R2でも公式にはプール非推奨。塩素がパッキンを劣化させる可能性。プール時はロッカーに保管が安全。' },
              { scene: '水洗い・流水すすぎ', icon: '🚿', verdict: 'IPX7以上OK', desc: 'IPX7以上なら流水での軽い洗浄は可能。ただし充電端子に水が入らないよう注意し、洗浄後は十分に乾燥させること。' },
              { scene: '雪遊び', icon: '⛄', verdict: '条件付きOK', desc: '雪自体はIP55以上なら問題ないが、溶けた水が端末内に浸入するリスクあり。手袋の中に入れる等の工夫を。低温はバッテリー性能を低下させます。' },
              { scene: '泥遊び・砂場', icon: '🏖️', verdict: 'IP6X推奨', desc: 'IP67/IP68なら防塵性能もあるため安心。IPX5等の防塵なし機種は充電端子に砂が詰まるリスクがあるため注意。' },
            ].map((item) => (
              <div key={item.scene} className="card-hover p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <h3 className="font-bold text-g800">{item.scene}</h3>
                  <span className={`tag-pill text-white text-xs ${item.verdict.includes('OK') ? 'bg-blue' : 'bg-orange'}`}>{item.verdict}</span>
                </div>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">防水でも壊れるケース</h2>
          <p className="text-g600 mb-4">
            「防水だから大丈夫」と過信すると故障の原因になります。以下のケースは防水端末でもダメージを受けるため注意が必要です。
          </p>
          <div className="space-y-4 mb-8">
            {dangerousCases.map((c) => (
              <div key={c.situation} className="card-hover p-5 flex gap-4 items-start">
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-g800">{c.situation}</h3>
                    <span className="tag-pill bg-orange text-white text-xs">リスク: {c.risk}</span>
                  </div>
                  <p className="text-sm text-g600">{c.reason}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">防水ケース・カバーのおすすめ</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {waterproofAccessories.map((a) => (
              <div key={a.name} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{a.name}</h3>
                <p className="text-sm text-orange font-semibold mb-1">{a.price}</p>
                <p className="text-sm text-g600 mb-1">{a.merit}</p>
                <p className="text-xs text-g500">{a.note}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">水没時の対処法</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: 'すぐに電源を切る', desc: '水没したらまず電源をオフに。通電状態で水が内部に入ると基板がショートして復旧不可能になります。ボタンを長押しして電源を切りましょう。' },
              { step: 2, title: '外側の水分を拭き取る', desc: '柔らかい布やティッシュで端末の表面、充電端子、ボタン周りの水分を丁寧に拭き取ります。' },
              { step: 3, title: '端末を振って水を出す', desc: '充電端子を下に向けて軽く振り、内部に入った水をできるだけ排出します。強く振りすぎると水が奥に入るので注意。' },
              { step: 4, title: '乾燥剤と一緒に密封して24時間以上放置', desc: 'シリカゲル（お菓子に入っている乾燥剤）と一緒にジップロックに入れ、最低24時間は放置します。ドライヤーの温風は基板にダメージを与えるためNGです。' },
              { step: 5, title: '電源を入れて動作確認', desc: '24時間以上乾燥させた後、電源を入れて動作確認。画面表示、ボタン反応、充電、通信がすべて正常か確認しましょう。' },
              { step: 6, title: '異常があればサポートに連絡', desc: '動作に異常がある場合はメーカーサポートに連絡。水没は保証対象外のケースが多いですが、有償修理や交換に応じてくれる場合もあります。' },
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

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 flex flex-wrap gap-3 text-sm">
            <Link href="/purpose/waterproof/" className="text-blue hover:underline">防水GPS目的別おすすめ</Link>
            <Link href="/knowledge/how-to-choose/" className="text-blue hover:underline">GPS選び方ガイド</Link>
            <Link href="/knowledge/battery/" className="text-blue hover:underline">バッテリー持ち比較</Link>
            <Link href="/knowledge/troubleshoot/" className="text-blue hover:underline">トラブルシューティング</Link>
          </div>

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">防水性能で選ぶGPS端末</h2>
            <p className="text-g600 mb-6 text-sm">活発なお子さんには防水・防塵性能の高い端末がおすすめ。雨の日も安心して持たせられます。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/purpose/waterproof/" className="btn-primary">防水GPS一覧</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">GPS選び方ガイド</Link>
            </div>
          </div>

          <p className="text-xs text-g400 mt-8 text-center">最終更新: 2026年5月</p>
        </div>
      </section>
    </>
  );
}
