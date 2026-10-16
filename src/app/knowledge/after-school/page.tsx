import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '学童・放課後の見守りにGPSが最適な理由｜活用法を解説',
  description:
    '学童保育や放課後の子供の安全対策にGPS端末が適している理由を解説します。下校から学童、帰宅までの見守り方法、エリア通知の活用例、共働き家庭での具体的な使い方やおすすめの機能をご紹介します。',
  keywords: ['学童', '放課後', 'GPS', '見守り', '子供', '安全', '共働き'],
  openGraph: {
    images: ['/og.png'],
    title: '学童・放課後の見守りにGPSが最適な理由｜活用法を解説',
    description: '学童保育や放課後の子供の安全対策にGPS端末が適している理由を解説します。下校から学童、帰宅までの見守り方法やおすすめの機能をご紹介します。',
  },
};

const faqData = [
  { q: '学童保育中もGPS端末を持たせてよいですか？', a: '多くの学童保育では、ランドセルの中にGPS端末を入れたままの持ち込みが認められています。スマートフォンと異なり、画面がなく音も出ない端末であれば、問題になるケースはほとんどありません。念のため、施設へご確認ください。' },
  { q: '下校時間が日によって異なる場合でも使えますか？', a: 'はい。曜日ごとに下校時間が異なっても、エリア通知は常時有効なため、学校を出たタイミングで自動的に通知が届きます。更新間隔を短く設定すれば、リアルタイムに近い位置確認も可能です。' },
  { q: '学童から自宅までの帰り道が心配です。', a: 'エリア通知を「学童」と「自宅」の2カ所に設定すると、学童を出発した通知と自宅に到着した通知の両方が届きます。想定時間を過ぎても到着通知がない場合に、アプリで現在地を確認する使い方が効果的です。' },
  { q: '共働きのため、リアルタイムで確認することができません。', a: 'エリア通知の到着・出発通知を設定しておけば、仕事中でもスマートフォンにプッシュ通知が届きます。毎回地図を開く必要がないため、忙しい共働きのご家庭でも無理なく見守りを続けられます。' },
  { q: 'GPS端末のバッテリーは放課後まで持ちますか？', a: 'ほとんどのGPS端末は1回の充電で1週間〜2カ月持つため、朝から放課後・学童を経て帰宅するまで、バッテリー切れの心配はありません。週末に充電する習慣をつけることをおすすめします。' },
  { q: '放課後に友達の家に遊びに行く場合は、どのように使えばよいですか？', a: 'よく遊びに行く友達の家の周辺をエリア通知に登録しておくと、到着通知で確認できます。また、移動履歴を後から確認できる機種であれば、帰宅後にどこを通ったかを振り返ることもできます。' },
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
  { icon: '🏫', title: '下校時の見守り', desc: '学校を出た時点で通知が届くため、下校の開始をリアルタイムに把握できます。寄り道をした場合も、移動履歴で確認できます。' },
  { icon: '🏠', title: '学童への移動', desc: '学校から学童保育への移動ルートを確認できます。通常と異なるルートを通った場合にも気づくことができます。' },
  { icon: '📚', title: '学童保育中', desc: '学童への到着通知で、無事に着いたことを確認できます。ランドセルに入れたままのため、お子さまの活動の妨げになりません。' },
  { icon: '🚶', title: '学童からの帰宅', desc: '学童の出発通知と自宅への到着通知で、帰り道も見守ることができます。暗くなるのが早い冬場は、特に役立ちます。' },
  { icon: '🌳', title: '放課後の外遊び', desc: '公園や友達の家など、行動範囲にエリア通知を設定できます。想定したエリアの外に出た場合の通知も可能です。' },
  { icon: '🏪', title: '一人でのお留守番', desc: '自宅エリアを設定すると、留守番中に外出した場合に検知できます。共働きのご家庭で、保護者が帰宅する前の時間帯に活用できます。' },
];

const tips = [
  { title: 'エリア通知は5カ所以上設定する', desc: '自宅・学校・学童・公園・祖父母宅など、お子さまの行動範囲に合わせて複数登録すると通知の精度が上がります。' },
  { title: '通知は「出発」と「到着」の両方を設定する', desc: '学童や自宅は出発・到着の両方を通知設定にしておくと、移動の開始と完了を把握できます。' },
  { title: '移動履歴を週末に振り返る', desc: '1週間の移動履歴を親子で見直すと、危険な場所や寄り道のパターンを把握できます。' },
  { title: '更新間隔は下校時間帯だけ短くする', desc: '下校〜帰宅の時間帯だけ更新間隔を短くし、それ以外は長めにするとバッテリーが長持ちします。' },
];

export default function AfterSchoolPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "学童・放課後の見守りにGPSが最適な理由｜活用法を解説", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '学童・放課後の見守り' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">学童・放課後</span>
            <span className="tag-pill bg-orange text-white">GPS見守り</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            学童・放課後の見守りにGPSが最適な理由
          </h1>
          <p className="text-g600 text-lg">下校から帰宅までを見守る、共働き家庭向けの活用法</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">放課後の見守りにGPSが適している理由</h2>
          <p className="text-g600 mb-6">
            共働き家庭では、お子さまが下校してから保護者が帰宅するまでの時間帯が、最も心配な時間です。
            学童保育を利用していても、学校から学童への移動や、学童から自宅への帰り道は、見守りの空白時間になりやすい傾向があります。
            GPS端末を持たせることで、エリア通知（ジオフェンス）による自動通知と、いつでも確認できる位置情報により、仕事中でも見守ることができます。
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

          <h2 className="section-title">エリア通知の活用例</h2>
          <div className="bg-blue-light rounded-xl p-6 mb-8">
            <p className="text-sm text-g700 mb-4">放課後の見守りに効果的なエリア通知の設定例です。</p>
            <div className="space-y-3">
              {[
                { area: '学校（半径150m）', setting: '出発通知ON → 下校の開始を把握' },
                { area: '学童保育（半径100m）', setting: '到着・出発の両方ON → 学童の入退所を把握' },
                { area: '自宅（半径100m）', setting: '到着通知ON → 帰宅を確認' },
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

          <h2 className="section-title">共働き家庭での具体的な使い方</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: '朝：ランドセルにGPSを入れて登校', desc: '充電済みのGPS端末をランドセルのポケットに入れるだけで、お子さまの操作は不要です。' },
              { step: 2, title: '下校時：学校出発の通知を受信', desc: '仕事中のスマートフォンに「学校エリアを出ました」という通知が届き、下校の開始を把握できます。' },
              { step: 3, title: '学童到着：到着通知で確認', desc: '「学童エリアに入りました」という通知で、無事に学童に着いたことを確認できます。' },
              { step: 4, title: '学童出発：帰宅開始を把握', desc: '学童を出た通知から、帰宅の目安時間を逆算できます。お迎えの準備に役立ちます。' },
              { step: 5, title: '帰宅：到着通知で確認', desc: '自宅への到着通知で、無事に帰宅したことを確認できます。到着が遅い場合は、アプリで現在地を確認します。' },
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">GPSを活用した放課後の見守り</h2>
            <p className="text-g600 mb-6 text-sm">エリア通知と位置確認を組み合わせることで、共働きのご家庭でも見守り体制を整えることができます。</p>
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
