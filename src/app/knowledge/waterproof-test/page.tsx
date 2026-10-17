import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供用GPSの防水性能比較｜プール・雨・汗でも大丈夫？',
  description:
    '子供用GPS端末の防水性能を比較します。IPX5/IPX7/IP67/IP68の違い、主要機種の防水等級一覧、雨天の通学・プール・汗・水洗いの可否、防水仕様でも故障するケース、水没時の対処法について解説します。',
  keywords: ['子供GPS', '防水', 'プール', '雨', 'IP67', 'IPX7', '防水性能'],
  openGraph: {
    images: ['/og.png'],
    title: '子供用GPSの防水性能比較｜プール・雨・汗でも大丈夫？',
    description: '子供用GPS端末の防水性能を比較します。IPX5/IPX7/IP67/IP68の違いと、主要機種の防水等級一覧を掲載しています。',
  },
};

const faqData = [
  { q: '雨の日にGPS端末をランドセルの外側に付けても問題ありませんか？', a: 'IPX5以上の防水性能があれば、通常の雨程度であれば問題ありません。ただし、ランドセルカバーの中や防水ポーチに入れておくと、より安心してご利用いただけます。豪雨の際は、できるだけ端末に直接水がかからないようにしてください。' },
  { q: 'プールにGPS端末を持って入れますか？', a: 'プールへの持ち込みは、基本的に推奨されていません。IPX7以上の機種でも「一時的な水没に耐える」水準で、長時間の水中での使用は想定されていないためです。また、塩素を含むプールの水は端末に損傷を与える可能性があります。プールの際はロッカーに保管することをおすすめします。' },
  { q: '汗で壊れることはありますか？', a: 'IPX5以上の防水性能があれば、日常的な汗で故障することはほとんどありません。ただし、汗に含まれる塩分は金属部品の腐食の原因となるため、汗をかいた後は乾いた布で拭き取ると、端末を長くお使いいただけます。' },
  { q: '防水仕様の端末は水洗いできますか？', a: 'IPX7以上の機種であれば、流水での軽い水洗いは可能とされています。ただし、充電端子やボタン周りに水が残ると不具合の原因となるため、洗った後は十分に乾燥させてください。水に沈めて洗うことはお控えください。' },
  { q: '防水性能は経年劣化しますか？', a: 'はい、防水のためのゴムパッキンやシール材は経年劣化します。一般的に、2〜3年で防水性能は低下するといわれています。端末を落としたり衝撃を与えたりすると、劣化はさらに早まります。長く使用している端末は防水性能を過信せず、水濡れにご注意ください。' },
  { q: '温泉やお風呂にGPS端末を持ち込めますか？', a: '持ち込みはお控えください。温泉やお風呂の高温・水蒸気・硫黄成分などには、どの防水等級の端末も対応していません。高温の蒸気は端末内部に浸入しやすく、基板のショートや腐食の原因となります。入浴時は必ず脱衣所に置いてください。' },
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
  { rating: 'IPX7', dustproof: '規定なし', waterproof: '水深1mに30分間の浸漬に耐える', level: '一時的な水没に対応', example: '水たまりへの落下、水道での水洗い' },
  { rating: 'IPX8', dustproof: '規定なし', waterproof: '水深1.5m以上の連続浸漬に耐える', level: '長時間の水没に対応', example: 'プール（理論上）、水中撮影' },
  { rating: 'IP67', dustproof: '完全防塵（6等級）', waterproof: '水深1mに30分間の浸漬に耐える', level: '防塵＋一時的な水没に対応', example: '砂場遊びと雨天、ほこりの多い場所' },
  { rating: 'IP68', dustproof: '完全防塵（6等級）', waterproof: '水深1.5m以上の連続浸漬に耐える', level: '防塵＋長時間の水没に対応', example: '最高レベルの防水防塵' },
];

const deviceWaterproof = [
  { name: 'みてねみまもりGPS 第3世代', rating: 'IP55', rain: '○', sweat: '○', wash: '△', pool: '×', weight: '約56g' },
  { name: 'BoTトーク', rating: 'IP55', rain: '○', sweat: '○', wash: '△', pool: '×', weight: '約50g' },
  { name: 'あんしんウォッチャー', rating: 'IP55', rain: '○', sweat: '○', wash: '△', pool: '×', weight: '約53g' },
  { name: 'まもサーチ', rating: 'IP55', rain: '○', sweat: '○', wash: '△', pool: '×', weight: '約36g' },
  { name: 'soranome（販売終了）', rating: 'IP55', rain: '○', sweat: '○', wash: '△', pool: '×', weight: '約39g' },
  { name: 'myFirst Fone R2', rating: 'IP68', rain: '◎', sweat: '◎', wash: '○', pool: '△', weight: '約58g' },
  { name: 'coneco', rating: 'IPX4', rain: '△', sweat: '○', wash: '×', pool: '×', weight: '約60g' },
  { name: 'Hamic POCKET', rating: 'IPX4', rain: '△', sweat: '○', wash: '×', pool: '×', weight: '約107g' },
  { name: 'キッズフォン3', rating: 'IPX5/IPX8', rain: '○', sweat: '○', wash: '○', pool: '△', weight: '約115g' },
];

const dangerousCases = [
  { situation: 'お風呂・温泉', icon: '♨️', reason: '高温の蒸気が防水シールの隙間から内部に侵入します。温泉の硫黄成分は金属端子を腐食させます。', risk: '極めて高い' },
  { situation: '海水・砂浜', icon: '🏖️', reason: '海水の塩分が端子やスピーカー部分を腐食させます。また、砂がボタンや充電端子に詰まります。', risk: '高い' },
  { situation: '洗濯機', icon: '🫧', reason: '回転による衝撃と洗剤がパッキンを劣化させ、内部への浸水を引き起こします。', risk: '極めて高い（ほぼ確実に故障）' },
  { situation: '高圧洗浄', icon: '💦', reason: '家庭用高圧洗浄機の水圧は、IPX5の試験条件を大幅に上回ります。', risk: '高い' },
  { situation: 'サウナ・スチーム', icon: '🔥', reason: '高温環境はバッテリーと基板に深刻な損傷を与えます。防水パッキンも高温で変形します。', risk: '極めて高い' },
];

const waterproofAccessories = [
  { name: '防水シリコンケース', price: '500〜1,500円', merit: '軽量で端末にフィットします。落下時の保護も兼ねます。', note: '機種専用サイズのものをお選びください。' },
  { name: '防水ポーチ（ストラップ付き）', price: '300〜1,000円', merit: 'どの機種にも使える汎用タイプです。首から下げたり、ランドセルに取り付けたりできます。', note: 'タッチ操作が必要な機種には向きません。' },
  { name: 'ジップロック型防水袋', price: '100〜500円（複数枚）', merit: '安価で手軽に使えます。急な雨の際の応急処置に適しています。', note: '長期間の使用には向きません。密閉が不完全な場合があります。' },
  { name: 'ランドセル用防水ポケット', price: '800〜2,000円', merit: 'ランドセルの肩ベルトに固定でき、雨から端末を保護します。', note: 'GPS端末専用に設計された製品をおすすめします。' },
];

export default function WaterproofTestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供用GPSの防水性能比較｜プール・雨・汗でも大丈夫？", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '防水性能比較' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">防水性能</span>
            <span className="tag-pill bg-orange text-white">比較検証</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供用GPSの防水性能比較
          </h1>
          <p className="text-g600 text-lg">プール・雨・汗への対応可否について、防水規格と機種別の対応状況を解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">

          <h2 className="section-title">防水規格（IP等級）の見方</h2>
          <p className="text-g600 mb-4">
            防水性能は「IP」で始まる等級で表されます。「IP」の後の1桁目が防塵等級（0〜6）、2桁目が防水等級（0〜8）です。
            「IPX」は、防塵性能が試験されていないことを意味します。数字が大きいほど保護性能が高くなります。
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
          <p className="text-sm text-g500 mb-3">◎ = 問題なし / ○ = 基本的に問題なし / △ = 条件付き / × = 非推奨（2026年5月時点）</p>
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
              { scene: '雨天の通学', icon: '☂️', verdict: '基本OK', desc: 'IP55以上のほとんどの機種で問題ありません。ランドセルの内側やカバーの中に入れておくと、より安心です。豪雨の際は防水ポーチの併用をおすすめします。' },
              { scene: '汗をかく運動時', icon: '🏃', verdict: '基本OK', desc: '日常的な発汗程度であれば、ほとんど影響はありません。ただし、腕時計型は汗の塩分で肌側の端子が腐食しやすいため、定期的に拭き取ってください。' },
              { scene: 'プール・水遊び', icon: '🏊', verdict: '非推奨', desc: 'IP68のmyFirst Fone R2でも、公式にはプールでの使用は推奨されていません。塩素がパッキンを劣化させる可能性があるためです。プールの際はロッカーに保管することをおすすめします。' },
              { scene: '水洗い・流水すすぎ', icon: '🚿', verdict: 'IPX7以上OK', desc: 'IPX7以上であれば、流水での軽い洗浄は可能です。ただし、充電端子に水が入らないよう注意し、洗浄後は十分に乾燥させてください。' },
              { scene: '雪遊び', icon: '⛄', verdict: '条件付きOK', desc: '雪そのものはIP55以上であれば問題ありませんが、溶けた水が端末内に浸入するおそれがあります。手袋の中に入れるなどの工夫をおすすめします。また、低温はバッテリー性能を低下させます。' },
              { scene: '泥遊び・砂場', icon: '🏖️', verdict: 'IP6X推奨', desc: 'IP67/IP68であれば防塵性能も備えているため安心です。IPX5などの防塵性能のない機種は、充電端子に砂が詰まるおそれがあるため注意が必要です。' },
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
            「防水だから問題ない」と過信すると、故障の原因となります。以下のケースでは防水仕様の端末でも損傷を受けるため、注意が必要です。
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
              { step: 1, title: 'すぐに電源を切る', desc: '水没した場合は、まず電源をオフにしてください。通電状態で水が内部に入ると、基板がショートして復旧できなくなるためです。ボタンを長押しして電源を切ってください。' },
              { step: 2, title: '外側の水分を拭き取る', desc: '柔らかい布やティッシュで端末の表面、充電端子、ボタン周りの水分を丁寧に拭き取ります。' },
              { step: 3, title: '端末を振って水を出す', desc: '充電端子を下に向けて軽く振り、内部に入った水をできるだけ排出します。強く振りすぎると水が奥に入るため、ご注意ください。' },
              { step: 4, title: '乾燥剤と一緒に密封して24時間以上放置', desc: 'シリカゲル（お菓子に入っている乾燥剤）と一緒にジップロックに入れ、最低24時間は放置します。ドライヤーの温風は基板に損傷を与えるため、使用はお控えください。' },
              { step: 5, title: '電源を入れて動作確認', desc: '24時間以上乾燥させた後、電源を入れて動作を確認します。画面表示、ボタンの反応、充電、通信がすべて正常かをご確認ください。' },
              { step: 6, title: '異常がある場合はサポートに連絡', desc: '動作に異常がある場合は、メーカーのサポート窓口にご連絡ください。水没は保証対象外となるケースが多いものの、有償での修理や交換に対応している場合もあります。' },
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
            <p className="text-g600 mb-6 text-sm">活発なお子さまには、防水・防塵性能の高い端末をおすすめします。雨の日も安心して持たせることができます。</p>
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
