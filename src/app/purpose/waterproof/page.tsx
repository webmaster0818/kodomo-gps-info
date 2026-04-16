import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS 防水対応で選ぶ | IP等級の見方と雨の日に安心な機種',
  description:
    '子供GPSの防水性能（IP等級）の見方を解説。雨の日でも使える生活防水モデルと、プール・雪遊びでの使用可否を整理。ランドセルに入れる運用上の注意点もまとめました。',
};

const faqData = [
  { q: 'IPX5とIPX7の違いは何ですか？', a: 'IPX5は「あらゆる方向からの噴流水に耐える」生活防水レベル、IPX7は「一時的な水没にも耐える」ランクです。雨対策としてはIPX5以上あれば実用的で、プールや水没を想定するならIPX7以上が目安です。具体的な規格内容はJIS規格をご確認ください。' },
  { q: '子供GPSは雨の日に使っても大丈夫？', a: '多くの子供GPSは生活防水（IPX5前後）に対応しており、通常の雨であればランドセルに入れたまま使用できます。ただし豪雨やバッグの浸水には弱いため、防水ポーチを併用すると安心です。' },
  { q: 'プールや海で使えますか？', a: '生活防水レベルの端末はプール・海水には対応していません。水遊びの際は端末を外し、保護者が預かることを推奨します。完全防水の機種は現在限られるため、購入前に公式サイトの仕様を確認してください。' },
  { q: '洗濯機で誤って洗ってしまったら？', a: '生活防水レベルでは洗濯機の水圧に耐えられないため故障の可能性が高いです。すぐに電源を切り、内部を自然乾燥させたうえでメーカーサポートに相談しましょう。' },
  { q: '防水ケースやポーチは必要ですか？', a: '普段使いでは不要ですが、雨の多い地域や濡れやすい活動が多いご家庭では、防水ポーチを併用すると本体への負担を減らせます。ランドセルの内ポケットに入れる運用も有効です。' },
  { q: '防水性能は年数が経つと落ちますか？', a: 'はい、ゴムパッキンや充電端子のカバーが経年劣化することで防水性能が落ちる可能性があります。2〜3年使った端末は、雨天時にはより丁寧に扱うことをおすすめします。' },
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

export default function WaterproofPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: '目的別', href: '/' }, { name: '防水・雨対応' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">防水対応</span>
            <span className="tag-pill bg-orange text-white">雨の日も安心</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS 防水性能で選ぶ
          </h1>
          <p className="text-g600 text-lg">IP等級の見方と雨天・水濡れへの備えをまとめて解説</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">防水規格（IP等級）の基本</h2>
          <p className="text-g600 mb-6">
            電子機器の防水性能は「IPコード」で示されます。「IPX5」のように、Xの次の数字が防水レベルを表します。
            子供GPSは屋外での利用が前提のため、最低でも雨に耐えられる生活防水レベル（IPX4〜IPX5）を選ぶのが望ましいです。
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue text-white">
                  <th className="p-3 text-left">等級</th>
                  <th className="p-3 text-left">耐性の目安</th>
                  <th className="p-3 text-left">想定シーン</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['IPX4', '飛沫からの保護', '小雨・汗程度'],
                  ['IPX5', '噴流水からの保護', '通常の雨天・水しぶき'],
                  ['IPX6', '強い噴流水からの保護', '強い雨・豪雨'],
                  ['IPX7', '一時的な水没に耐える', '短時間の水没'],
                  ['IPX8', '継続的な水没に耐える', '水中での使用（機種による）'],
                ].map(([grade, desc, use]) => (
                  <tr key={grade} className="border-b border-g100">
                    <td className="p-3 font-bold text-blue">{grade}</td>
                    <td className="p-3 text-g600">{desc}</td>
                    <td className="p-3 text-g600">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">雨の日でも安心して使うためのポイント</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: '☔', title: 'ランドセルの内側に入れる', desc: 'ランドセル本体が防水素材なら、中に入れておくだけで雨の直撃を避けられます。' },
              { icon: '🧴', title: '防水ポーチの活用', desc: '激しい雨の地域では、ジッパー付き防水ポーチに入れて二重に保護しましょう。' },
              { icon: '🔌', title: '充電端子の乾燥', desc: '濡れた状態で充電すると故障の原因になります。タオルでよく拭いてから充電器に接続。' },
              { icon: '🧼', title: '泥・砂汚れの早期除去', desc: '砂や泥が入り込むとパッキンが劣化しやすくなります。帰宅後にふき取る習慣を。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-2xl">{item.icon}</p>
                <div>
                  <h3 className="font-bold text-g800">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">プール・海・雪遊びでの使用可否</h2>
          <div className="space-y-4 mb-8">
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-2">プール・海での使用</h3>
              <p className="text-sm text-g700">
                一般的な生活防水（IPX5前後）の子供GPSは、プールや海への水没に対応していません。
                水遊び中は端末を外し、保護者が預かる運用が安全です。
              </p>
            </div>
            <div className="bg-blue-light rounded-xl p-6">
              <h3 className="font-bold text-blue mb-2">雪遊び・雨天通学</h3>
              <p className="text-sm text-g700">
                生活防水に対応した機種であれば、雪や雨の通学は問題なく使用可能です。
                ただし雪が溶けて濡れた状態が長時間続くと浸水リスクがあるため、防水ポーチを併用すると安心です。
              </p>
            </div>
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-2">公式仕様の確認を</h3>
              <p className="text-sm text-g700">
                防水等級は機種によって大きく異なります。購入前に各機種の公式サイトで最新の仕様を必ず確認してください。
              </p>
            </div>
          </div>

          <h2 className="section-title">防水性能が気になる方へ推奨機種</h2>
          <div className="space-y-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-g800"><Link href="/review/mitene/" className="text-blue hover:underline">みてねみまもりGPS</Link></h3>
              <p className="text-sm text-g600">生活防水対応で雨天の通学にも安心。バッテリーは最大約2ヶ月と長寿命。</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-g800"><Link href="/review/anshin-watcher/" className="text-blue hover:underline">あんしんウォッチャー</Link></h3>
              <p className="text-sm text-g600">KDDIの通信網を活用。防水等級は公式サイトで要確認。</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-g800"><Link href="/review/bot-talk/" className="text-blue hover:underline">BoTトーク</Link></h3>
              <p className="text-sm text-g600">トーク機能付き。防水等級の詳細は公式サイトで最新情報を確認。</p>
            </div>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">雨にも負けない見守りを</h2>
            <p className="text-g600 mb-6 text-sm">通学路でお子さまを守る、防水性能のしっかりしたGPSを選びましょう。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">機種一覧を見る</Link>
              <Link href="/knowledge/summer-winter/" className="btn-accent">季節別の使い方ガイド</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
