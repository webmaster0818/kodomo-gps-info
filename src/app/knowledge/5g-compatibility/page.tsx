import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供用GPSの5G対応状況｜4Gでも問題ない？',
  description:
    '子供用GPS端末の5G対応状況を解説。現状の5G対応機種（ほぼなし）、4Gで十分な理由（位置情報は低帯域）、今後の展望、購入時に気をつけること（3G停波の影響）まで網羅。',
  keywords: ['子供GPS', '5G', '対応', '4G', '3G停波', '通信規格', 'LTE'],
  openGraph: {
    title: '子供用GPSの5G対応状況｜4Gでも問題ない？',
    description: '子供用GPS端末の5G対応状況と、4Gで十分な理由を解説。3G停波の影響と購入時の注意点も。',
  },
};

const faqData = [
  { q: '子供用GPSに5G対応は必要ですか？', a: '現時点では不要です。GPS端末が送信するデータは位置情報（緯度・経度）とタイムスタンプ程度で、データ量は非常に小さいため、4G/LTEで十分対応できます。5Gの高速大容量通信は、動画ストリーミングや大量データ転送向けの技術であり、GPS見守りには不要な性能です。' },
  { q: '5G対応のGPS端末はありますか？', a: '2026年5月時点で、5G対応の子供用GPS端末はほぼ存在しません。腕時計型のmyFirst Fone R2も4G/LTE対応です。5G対応にするとチップセットのコストが上がり、バッテリー消費も増えるため、メーカーにとっても子供用GPSに5Gを搭載するメリットは少ないのが現状です。' },
  { q: '4Gはいつまで使えますか？', a: '4G/LTEは2030年代後半まで維持されると予想されています。3Gの停波完了が2026年3月（au）・2026年度中（SoftBank）で、4Gはこれから少なくとも10年以上は利用可能です。現在4G対応のGPS端末を購入しても、小学校卒業まで問題なく使えます。' },
  { q: '3G停波で使えなくなるGPS端末はありますか？', a: '2023年以前に購入した古い機種の中には、3G通信に依存しているものがあります。auの3Gは2022年3月に停波済み、ソフトバンクの3Gは2024年4月に停波済み、docomoの3Gは2026年3月に停波予定です。2024年以降に発売された機種はすべて4G/LTE対応のため、心配は不要です。' },
  { q: '5GになるとGPSの精度は上がりますか？', a: 'GPSの精度は衛星からの電波受信品質で決まるため、通信回線が5Gになっても位置精度は変わりません。ただし、5G基地局の位置情報を補助的に使うことで、Wi-Fi測位と同様に屋内での位置推定精度が向上する可能性は将来的にあります。' },
  { q: '今GPS端末を買っても損しませんか？', a: '損しません。4G/LTE対応の端末は今後10年以上使える見通しです。また、GPS端末の平均利用年数は2〜3年（バッテリー寿命）のため、現在購入した端末を使い切る頃に最新技術の端末に買い替えるのが合理的です。「5G対応を待ってから買う」よりも、今すぐ導入して安全を確保する方がメリットが大きいです。' },
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

const networkData = [
  { name: 'みてねみまもりGPS', network: '4G/LTE', carrier: 'docomo', status: '問題なし（2030年代後半まで利用可能）' },
  { name: 'あんしんウォッチャー', network: '4G/LTE', carrier: 'au', status: '問題なし（2030年代後半まで利用可能）' },
  { name: 'BoTトーク', network: '4G/LTE', carrier: 'docomo', status: '問題なし（2030年代後半まで利用可能）' },
  { name: 'どこかなGPS2', network: '4G/LTE', carrier: 'SoftBank', status: '問題なし（2030年代後半まで利用可能）' },
  { name: 'まもサーチ', network: '4G/LTE', carrier: 'docomo', status: '問題なし（2030年代後半まで利用可能）' },
  { name: 'soranome', network: '4G/LTE', carrier: 'docomo', status: '問題なし（2030年代後半まで利用可能）' },
  { name: 'myFirst Fone R2', network: '4G/LTE', carrier: 'eSIM', status: '問題なし（2030年代後半まで利用可能）' },
];

const why4gEnough = [
  { icon: '📡', title: 'GPS端末のデータ量は極めて少ない', desc: 'GPS端末が送信するデータは、位置情報（緯度・経度）、タイムスタンプ、バッテリー残量程度で、1回の通信で数百バイト〜数キロバイト程度です。これは4Gどころか2G（GSM）でも十分送信できるデータ量。5Gの超高速通信はまったく不要です。' },
  { icon: '🔋', title: '5Gはバッテリーを大量消費する', desc: '5G通信は4Gと比べてバッテリー消費が大きくなります。スマートフォンですら5G利用時のバッテリー持ちが課題になっているのに、小型のGPS端末に5Gを搭載するとバッテリーが一日持たない可能性があります。子供用GPSにとってバッテリー持ちは最重要スペックの一つです。' },
  { icon: '💰', title: '5Gチップはコストが高い', desc: '5G対応のモデムチップは4G対応チップよりも高価です。端末価格が数千円〜1万円台の子供用GPSに5Gチップを搭載すると、端末価格が大幅に上昇し、コスパが著しく悪化します。' },
  { icon: '📶', title: '5Gエリアはまだ限定的', desc: '2026年時点で、5Gのエリアカバー率はまだ限定的です。特にSub6やミリ波は建物内や住宅街では電波が届きにくい場合があります。子供の通学路が5Gエリア外の可能性も高く、4Gの方が安定した通信が期待できます。' },
];

const timeline3g = [
  { carrier: 'au（KDDI）', shutdown: '2022年3月31日', status: '停波済み', impact: 'au 3G対応の旧型GPS端末は使用不可。現行モデルは全て4G対応。' },
  { carrier: 'ソフトバンク', shutdown: '2024年4月15日', status: '停波済み', impact: 'SoftBank 3G対応の旧型GPS端末は使用不可。どこかなGPS2は4G対応で問題なし。' },
  { carrier: 'NTTドコモ', shutdown: '2026年3月31日', status: '停波予定', impact: 'docomo 3G対応の非常に古い端末（2020年以前）は停波後に使用不可に。2021年以降の端末は4G対応。' },
];

const futureOutlook = [
  { period: '2026〜2028年', outlook: '子供用GPSの5G対応はほぼなし。4G/LTEが主流。メーカーはバッテリー性能や精度向上に注力。' },
  { period: '2028〜2030年', outlook: '5G対応の子供用スマートウォッチが登場する可能性。ただし、シンプルなGPS端末は引き続き4G/LTEが主流。' },
  { period: '2030年以降', outlook: '4G/LTEの縮小に合わせて、5G対応へ移行が進む見込み。ただし、低消費電力の5G規格（RedCap等）が普及してからになる。' },
];

const purchaseTips = [
  { title: '4G/LTE対応を確認する', desc: '2024年以降に発売された機種であれば、まず4G/LTE対応です。中古購入や旧モデルの在庫品を検討している場合は、必ず対応通信規格を確認してください。3G専用モデルは絶対に避けましょう。' },
  { title: '5G対応を待つ必要はない', desc: '子供の安全は「今」確保すべきものです。5G対応のGPS端末を待って購入を先延ばしにするメリットはありません。4Gは今後10年以上使えます。' },
  { title: '通信キャリアのエリアを確認', desc: '端末が使用するキャリア（docomo/au/SoftBank）の4Gエリアが、お住まいの地域と通学路をカバーしているか確認しましょう。都市部であればどのキャリアでも問題ありません。' },
  { title: 'バッテリー性能を重視する', desc: '通信規格よりもバッテリー持ちの方が実用面では重要です。5G対応でバッテリーが1日しか持たない端末よりも、4G対応で1週間持つ端末の方が、子供用GPSとしては圧倒的に実用的です。' },
];

export default function FiveGCompatibilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '5G対応状況' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">5G対応</span>
            <span className="tag-pill bg-blue text-white">通信規格</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供用GPSの5G対応状況
          </h1>
          <p className="text-g600 text-lg">4Gでも問題ない？｜3G停波の影響と今後の展望</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-g600 mb-8">
            「子供用GPSは5Gに対応しているの？」「4Gの端末を買っても大丈夫？」という疑問をお持ちの方へ。結論から言うと、子供用GPS端末に5G対応は現時点で不要であり、4G/LTEで全く問題ありません。このページでは、現状の5G対応状況、4Gで十分な理由、3G停波の影響、今後の展望、購入時の注意点を詳しく解説します。
          </p>

          <h2 className="section-title">主要GPS端末の通信規格一覧</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">機種名</th>
                  <th className="py-3 px-3 text-center font-bold text-g800">通信規格</th>
                  <th className="py-3 px-3 text-center font-bold text-g800">キャリア</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">利用可能状況</th>
                </tr>
              </thead>
              <tbody>
                {networkData.map((n) => (
                  <tr key={n.name} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{n.name}</td>
                    <td className="py-3 px-3 text-center text-g600">{n.network}</td>
                    <td className="py-3 px-3 text-center text-g600">{n.carrier}</td>
                    <td className="py-3 px-3 text-g600">{n.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-light rounded-xl p-5 mb-8">
            <h3 className="font-bold text-g800 mb-2">結論: 全機種4G/LTE対応。5G対応機種は現時点でゼロ。</h3>
            <p className="text-sm text-g600">
              2026年5月時点で、5G対応の子供用GPS端末は市場に存在しません。全ての主要機種が4G/LTE対応であり、今後10年以上問題なく使用できます。
            </p>
          </div>

          <h2 className="section-title">4Gで十分な4つの理由</h2>
          <div className="space-y-4 mb-8">
            {why4gEnough.map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-3xl flex-shrink-0">{item.icon}</p>
                <div>
                  <h3 className="font-bold text-g800 text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">3G停波スケジュールと影響</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">キャリア</th>
                  <th className="py-3 px-3 text-center font-bold text-g800">停波日</th>
                  <th className="py-3 px-3 text-center font-bold text-g800">ステータス</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">GPS端末への影響</th>
                </tr>
              </thead>
              <tbody>
                {timeline3g.map((t) => (
                  <tr key={t.carrier} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{t.carrier}</td>
                    <td className="py-3 px-3 text-center text-g600">{t.shutdown}</td>
                    <td className={`py-3 px-3 text-center font-semibold ${t.status === '停波済み' ? 'text-orange' : 'text-blue'}`}>{t.status}</td>
                    <td className="py-3 px-3 text-g600">{t.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">今後の展望</h2>
          <div className="space-y-4 mb-8">
            {futureOutlook.map((f) => (
              <div key={f.period} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{f.period}</h3>
                <p className="text-sm text-g600">{f.outlook}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">購入時に気をつけること</h2>
          <div className="space-y-4 mb-8">
            {purchaseTips.map((tip, i) => (
              <div key={tip.title} className="flex gap-4 items-start card-hover p-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-g800 text-sm">{tip.title}</h3>
                  <p className="text-sm text-g600">{tip.desc}</p>
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

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">4G対応のGPSで今すぐ見守りを始めよう</h2>
            <p className="text-g600 mb-6 text-sm">5Gを待つ必要はありません。4G/LTEで十分な性能を発揮します。</p>
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
