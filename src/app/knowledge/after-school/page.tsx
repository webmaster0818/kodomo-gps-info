import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '学童・放課後の見守りにGPSが最適な理由｜活用法を解説',
  description:
    '学童保育や放課後の子供の安全対策にGPS端末が最適な理由を解説。下校から学童、帰宅までの見守り方法、ジオフェンス活用例、共働き家庭のリアルな使い方やおすすめ機能を紹介します。',
  keywords: ['学童', '放課後', 'GPS', '見守り', '子供', '安全', '共働き'],
  openGraph: {
    title: '学童・放課後の見守りにGPSが最適な理由｜活用法を解説',
    description: '学童保育や放課後の子供の安全対策にGPS端末が最適な理由を解説。下校から学童、帰宅までの見守り方法やおすすめ機能を紹介。',
  },
};

const faqData = [
  { q: '学童保育中もGPSは持たせていいの？', a: '多くの学童保育ではランドセルの中にGPS端末を入れたまま持ち込みが認められています。スマホと異なり画面がなく、音も出ない端末であれば問題になるケースはほとんどありません。念のため施設に確認しておくと安心です。' },
  { q: '下校時間がバラバラでも使えますか？', a: 'はい。曜日ごとに下校時間が異なっても、ジオフェンス（エリア通知）は常時有効なので、学校を出たタイミングで自動的に通知が届きます。更新間隔を短く設定すれば、リアルタイムに近い位置確認も可能です。' },
  { q: '学童から自宅までの帰り道が心配です。', a: 'ジオフェンスを「学童」と「自宅」の2ヶ所に設定すると、学童を出発した通知と自宅に到着した通知の両方が届きます。想定時間を過ぎても到着通知がない場合にアプリで現在地を確認する使い方が効果的です。' },
  { q: '共働きでリアルタイムに確認できないのですが。', a: 'ジオフェンスの到着・出発通知を設定しておけば、仕事中でもスマホにプッシュ通知が届きます。毎回地図を開く必要がないため、忙しい共働き家庭でも無理なく見守りが続けられます。' },
  { q: 'GPS端末のバッテリーは放課後まで持ちますか？', a: 'ほとんどのGPS端末は1回の充電で1週間〜2ヶ月持つため、朝から放課後・学童を経て帰宅するまでバッテリー切れの心配はありません。週末に充電する習慣をつけると安心です。' },
  { q: '放課後に友達の家に遊びに行く場合は？', a: 'よく遊びに行く友達の家の周辺をジオフェンスに登録しておくと、到着通知で安心できます。また、移動履歴を後から確認できる機種なら、帰宅後にどこを通ったか振り返ることもできます。' },
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

const scenes = [
  { icon: '🏫', title: '下校時の見守り', desc: '学校を出た瞬間に通知が届くので、下校開始をリアルタイムに把握。寄り道しても移動履歴で確認できます。' },
  { icon: '🏠', title: '学童への移動', desc: '学校から学童保育への移動ルートを確認。通常と異なるルートを通った場合にも気づけます。' },
  { icon: '📚', title: '学童保育中', desc: '学童到着の通知で「無事に着いた」を確認。ランドセルに入れたままなので、お子さまの活動の邪魔になりません。' },
  { icon: '🚶', title: '学童からの帰宅', desc: '学童を出発した通知+自宅到着の通知で、帰り道も安心。暗くなる冬場は特に重宝します。' },
  { icon: '🌳', title: '放課後の外遊び', desc: '公園や友達の家など、行動範囲にジオフェンスを設定。想定エリア外に出た場合の通知も可能です。' },
  { icon: '🏪', title: '一人でのお留守番', desc: '自宅エリアを設定し、留守番中に外出した場合の検知に。共働きの帰宅前の時間帯に活用できます。' },
];

const tips = [
  { title: 'ジオフェンスは5ヶ所以上設定', desc: '自宅・学校・学童・公園・祖父母宅など、お子さまの行動範囲に合わせて複数登録すると通知の精度が上がります。' },
  { title: '通知は「出発+到着」の両方に', desc: '学童や自宅は出発・到着の両方を通知設定にしておくと、移動の開始と完了を把握できます。' },
  { title: '移動履歴を週末に振り返る', desc: '1週間の移動履歴を親子で見直すと、危険な場所や寄り道のパターンが見えてきます。' },
  { title: '更新間隔は下校時間帯だけ短く', desc: '下校〜帰宅の時間帯だけ更新間隔を短くし、それ以外は長めにするとバッテリーが長持ちします。' },
];

export default function AfterSchoolPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "学童・放課後の見守りにGPSが最適な理由｜活用法を解説", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "お役立ち", "item": "https://gps-kodomo.com/knowledge/"}, {"@type": "ListItem", "position": 3, "name": "学童・放課後の見守り", "item": "https://gps-kodomo.com/knowledge/after-school/"}]}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '学童・放課後の見守り' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">学童・放課後</span>
            <span className="tag-pill bg-orange text-white">GPS見守り</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            学童・放課後の見守りにGPSが最適な理由
          </h1>
          <p className="text-g600 text-lg">下校から帰宅まで、共働き家庭の安心を支える活用法</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">なぜ放課後の見守りにGPSが最適なのか</h2>
          <p className="text-g600 mb-6">
            共働き家庭では、子供が下校してから保護者が帰宅するまでの時間帯が最も心配な時間です。
            学童保育を利用していても、学校から学童への移動や学童から自宅への帰り道は見守りの空白地帯になりがちです。
            GPS端末を持たせることで、ジオフェンス（エリア通知）による自動通知と、いつでも確認できる位置情報で、仕事中でも安心して見守ることができます。
          </p>

          <h2 className="section-title">GPS端末の活用シーン（下校〜学童〜帰宅）</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {scenes.map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-2xl">{item.icon}</p>
                <div>
                  <h3 className="font-bold text-g800">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">ジオフェンス活用例</h2>
          <div className="bg-blue-light rounded-xl p-6 mb-8">
            <p className="text-sm text-g700 mb-4">放課後の見守りに効果的なジオフェンス設定の具体例です。</p>
            <div className="space-y-3">
              {[
                { area: '学校（半径150m）', setting: '出発通知ON → 下校開始がわかる' },
                { area: '学童保育（半径100m）', setting: '到着・出発の両方ON → 学童の入退所を把握' },
                { area: '自宅（半径100m）', setting: '到着通知ON → 無事帰宅を確認' },
                { area: '通学路の公園（半径200m）', setting: '到着通知ON → 寄り道を検知' },
                { area: '祖父母宅（半径100m）', setting: '到着通知ON → 祖父母宅への到着を確認' },
              ].map((g) => (
                <div key={g.area} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
                  <span className="font-bold text-g800 sm:w-48">{g.area}</span>
                  <span className="text-g600">{g.setting}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="section-title">共働き家庭のリアルな使い方</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: '朝：ランドセルにGPSを入れて登校', desc: '充電済みのGPS端末をランドセルのポケットに入れるだけ。お子さまの操作は不要です。' },
              { step: 2, title: '下校時：学校出発の通知を受信', desc: '仕事中のスマホに「学校エリアを出ました」の通知が届きます。下校開始を把握できます。' },
              { step: 3, title: '学童到着：到着通知で安心', desc: '「学童エリアに入りました」の通知で、無事に学童に着いたことを確認。' },
              { step: 4, title: '学童出発：帰宅開始を把握', desc: '学童を出た通知で、帰宅の目安時間を逆算。迎えの準備に役立ちます。' },
              { step: 5, title: '帰宅：到着通知で一安心', desc: '自宅到着の通知で「無事に帰った」を確認。到着が遅い場合はアプリで現在地を確認。' },
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

          <h2 className="section-title">おすすめの設定・機能</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {tips.map((item) => (
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

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">放課後の安心をGPSで手に入れよう</h2>
            <p className="text-g600 mb-6 text-sm">ジオフェンスと位置確認で、共働きでも安心の見守り体制をつくれます。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/geofence/" className="btn-primary">エリア通知の使い方</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">GPS選び方ガイド</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
