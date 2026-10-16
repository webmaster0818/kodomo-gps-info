import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS 夏冬の使い方 | 温度・プール・雪遊びの注意点',
  description:
    '子供GPSの夏と冬の使い方を解説します。車内に置いたままにするリスク、低温時のバッテリー持ち、プール・海・雪遊びでの使用可否など、季節ごとの取り扱い方法をまとめています。',
};

const faqData = [
  { q: '夏の車内に置いておくと壊れますか？', a: '夏の車内は50℃以上になることがあり、電子機器にとって非常に危険な環境です。車内に置いたままにすることは、絶対にお控えください。' },
  { q: '冬の寒い日に、バッテリーの減りが早く感じられるのはなぜですか？', a: 'リチウムイオン電池は低温環境で一時的に容量が低下するため、冬場はバッテリー持ちが短くなる傾向があります。室内に戻れば、通常の状態に戻ります。' },
  { q: 'プールや海に持って行っても問題ありませんか？', a: '機種ごとの防水等級（IPX規格）によります。IPX7以上であれば一時的な水没にも耐えられますが、長時間の水没や海水による塩害で故障するおそれがあります。公式サイトで防水規格をご確認ください。' },
  { q: '雪遊びや雪道でも問題ありませんか？', a: '多くのGPS端末は、一般的な使用範囲の温度で動作します。ただし、長時間にわたって極低温にさらすことや、大雪の中で長時間使用することは推奨されていません。' },
  { q: '動作保証温度の範囲はどのように確認できますか？', a: '公式サイトの「仕様」「スペック」の欄に、動作保証温度の範囲が記載されています。契約前・使用前にご確認ください。' },
  { q: '梅雨の時期に湿気で壊れることはありますか？', a: '防水端末であれば、湿気の影響は最小限です。防水等級がない、または低い機種は、長時間の高湿度環境に注意が必要です。' },
];

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function SummerWinterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPS 夏冬の使い方", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '夏冬の使い方' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">子供GPS 夏冬の使い方</h1>
          <p className="text-g600 text-lg">温度・湿度・水への耐性を理解し、季節を問わず安全に使うための解説です</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">🌞 夏場の注意点</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: '車内に置いたままにしない', desc: '真夏の車内は50℃以上になることがあり、電子機器のバッテリー膨張や故障の原因になります。車を降りる際は、必ず持ち歩いてください。' },
              { title: '直射日光を避ける', desc: '高温環境では、動作が不安定になったり、バッテリーの劣化が早まったりします。ランドセルの中など、直射日光の当たらない場所で保管してください。' },
              { title: 'プール・水遊びの前に防水等級を確認する', desc: 'IPX7以上であれば一時的な水没にも対応できますが、海水では塩害による故障のおそれがあります。公式の防水規格をご確認ください。' },
              { title: '汗による故障', desc: '防水等級のない機種は、汗で湿ったランドセル内に長時間入れておくと故障するおそれがあります。定期的に乾燥させてください。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">❄️ 冬場の注意点</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: '低温でバッテリー持ちが短くなる', desc: 'リチウムイオン電池は低温環境で一時的に容量が低下するため、冬はバッテリーの持ちが通常より短くなります。充電状況をこまめにご確認ください。' },
              { title: '雪遊び・雪道での使用', desc: '一般的な使用範囲の温度で動作しますが、長時間にわたって極低温にさらすことは避けてください。' },
              { title: '暖房機器の近くに置かない', desc: '急激な温度変化は電子機器に負担をかけます。ストーブやヒーターのすぐ近くでの充電はお控えください。' },
              { title: '結露に注意する', desc: '寒い屋外から暖かい室内に移動すると、結露が発生することがあります。結露したまま使用すると、故障の原因になります。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (<details key={i} className="faq-item"><summary>{faq.q}</summary><div className="faq-answer">{faq.a}</div></details>))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">防水対応の機種を探す</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/purpose/waterproof/" className="btn-primary">防水機種ガイド</Link>
              <Link href="/knowledge/battery/" className="btn-accent">バッテリー詳細</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
