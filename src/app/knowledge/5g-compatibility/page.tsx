import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供用GPSの5G対応状況｜4Gでも問題ない？',
  description:
    '子供用GPS端末の5G対応状況を解説。現状5G対応機種はほぼなし、4G（LTE）で十分な理由、3G停波の影響、今後の5G展望まで詳しく紹介します。',
  keywords: ['子供GPS', '5G', '対応', '4G', 'LTE', '3G停波'],
  openGraph: {
    title: '子供用GPSの5G対応状況｜4Gでも問題ない？',
    description: '子供用GPSの5G対応状況を解説。4Gで十分な理由と3G停波の影響を紹介。',
  },
};

const faqData = [
  { q: '子供用GPSに5G対応機種はありますか？', a: '2026年現在、主要な子供用GPS端末で5Gに対応した機種はほぼありません。みてねみまもりGPS、BoTトーク、あんしんウォッチャー、まもサーチなどの主要機種はすべて4G（LTE）通信を使用しています。GPS端末が送受信するデータ量は非常に少ないため、5Gの超高速通信は不要です。' },
  { q: '4GのGPS端末で位置精度に問題はありませんか？', a: '全く問題ありません。GPS端末の位置精度は通信規格ではなく、GPS衛星・Wi-Fi・基地局の測位精度で決まります。4Gでも5Gでも、測位した位置情報をサーバーに送信する速度には体感差はありません。4Gの通信速度でも、位置情報のデータ（数KB程度）は1秒以内に送信できます。' },
  { q: '3G停波で使えなくなるGPS端末はありますか？', a: 'はい、古い世代のGPS端末で3G回線のみに対応していた機種は、3G停波により使用できなくなります。auは2022年3月、ソフトバンクは2024年4月に3Gを停波済み、ドコモは2026年3月末に停波しました。2024年以降に発売された機種はすべて4G対応なので、新しい機種であれば心配不要です。' },
  { q: '5G対応のGPS端末が出たら買い替えるべきですか？', a: '5G対応というだけで買い替える必要はありません。GPS端末のデータ通信量は非常に少なく、4Gで十分な速度が出ます。買い替えの判断基準は、5G対応よりもバッテリー性能、測位精度、アプリの使いやすさなど、実用面で比較するのがおすすめです。' },
  { q: '将来4Gが停波する可能性はありますか？', a: '4G（LTE）の停波は当面予定されていません。5Gのエリア拡大は進んでいますが、4Gは2030年代後半まで維持される見込みです。各キャリアも4Gと5Gの併用運用を続ける方針を示しています。現在4G対応のGPS端末を購入しても、少なくとも今後10年以上は問題なく使えるでしょう。' },
  { q: 'GPS端末の通信速度が遅いと感じることはありますか？', a: 'ほとんどの場合、通信速度の遅さを感じることはありません。GPS端末が送信するデータは位置情報（緯度・経度）のみで数KB程度です。4G回線であれば1秒以内に送信が完了します。ただし、電波状況が悪い場所（地下深層部や山間部）では、通信規格に関わらず位置情報の更新に遅延が生じることがあります。' },
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

const generationComparison = [
  { gen: '3G', speed: '最大14Mbps', status: '停波済み', gpsUse: '使用不可', note: 'au: 2022年3月停波、SB: 2024年4月停波、ドコモ: 2026年3月停波' },
  { gen: '4G (LTE)', speed: '最大1Gbps', status: '現在主流', gpsUse: '最適', note: '全キャリア人口カバー率99%以上。GPS端末の主流規格。' },
  { gen: '5G', speed: '最大20Gbps', status: '拡大中', gpsUse: '対応機種なし', note: 'GPS端末には過剰スペック。対応チップのコスト・消費電力が課題。' },
];

const whyLteEnough = [
  { icon: '📊', title: 'データ量が極めて少ない', desc: 'GPS端末が送信するデータは位置情報（緯度・経度）のみで1回数KB。1日の通信量は数MB程度。4Gの速度で全く問題ありません。動画やアプリのダウンロードをするわけではないため、高速通信は不要です。' },
  { icon: '🔋', title: 'バッテリー消費を抑えられる', desc: '5G通信は4Gに比べて消費電力が大きい傾向があります。子供用GPS端末はバッテリー持続時間が重要なため、省電力な4G通信の方が適しています。4Gなら充電間隔を長く保てます。' },
  { icon: '💰', title: 'コストを抑えられる', desc: '5G対応チップは4G対応チップよりも高価です。子供用GPS端末は手頃な価格が求められるため、4G対応に抑えることでコストパフォーマンスの高い製品を提供できます。' },
  { icon: '📡', title: 'カバーエリアが広い', desc: '4G（LTE）は人口カバー率99%以上。5Gはまだ都市部中心でカバーエリアが限定的です。通学路全体をカバーするには、現時点では4Gの方が確実です。' },
];

const threeGShutdown = [
  { carrier: 'au (KDDI)', shutdownDate: '2022年3月31日', impact: 'au 3G回線のみ対応の旧機種は使用不可に。' },
  { carrier: 'ソフトバンク', shutdownDate: '2024年4月15日', impact: 'ソフトバンク 3G回線のみ対応の旧機種は使用不可に。' },
  { carrier: 'ドコモ', shutdownDate: '2026年3月31日', impact: 'ドコモ 3G（FOMA）回線のみ対応の旧機種は使用不可に。' },
];

const futureOutlook = [
  { year: '2026年〜', outlook: '子供用GPS端末は引き続き4G（LTE）が主流。5G対応機種は登場していない。' },
  { year: '2027年〜2028年', outlook: '5G対応チップの低価格化が進む可能性。腕時計型など高機能タイプから5G対応が始まる可能性あり。' },
  { year: '2029年〜2030年', outlook: '5Gエリアの拡大に伴い、5G対応GPS端末が一般化する可能性。ただし4Gも併用で利用可能。' },
  { year: '2030年代後半', outlook: '4G停波の議論が始まる可能性。ただし確定ではなく、当面は4G/5G併用が続く見込み。' },
];

const deviceStatus = [
  { name: 'みてねみまもりGPS', network: '4G (ソフトバンク LTE)', fiveG: '非対応', status: '問題なし' },
  { name: 'BoTトーク', network: '4G (ソフトバンク LTE)', fiveG: '非対応', status: '問題なし' },
  { name: 'あんしんウォッチャー', network: '4G (au LTE)', fiveG: '非対応', status: '問題なし' },
  { name: 'まもサーチ', network: '4G (ソフトバンク LTE)', fiveG: '非対応', status: '問題なし' },
  { name: 'soranome', network: '4G (ドコモ LTE)', fiveG: '非対応', status: '問題なし' },
  { name: 'myFirst Fone R2', network: '4G (ドコモ/ソフトバンク LTE)', fiveG: '非対応', status: '問題なし' },
  { name: 'coneco', network: '4G (ドコモ LTE)', fiveG: '非対応', status: '問題なし' },
];

export default function FiveGCompatibilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '5G対応状況' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">5G・通信規格</span>
            <span className="tag-pill bg-orange text-white">4G/LTE</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供用GPSの5G対応状況
          </h1>
          <p className="text-g600 text-lg">4Gでも問題ない？3G停波の影響と今後の展望</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-g600 mb-8">
            「子供用GPSは5Gに対応していないと不安」と思う方もいるかもしれません。結論から言うと、<strong>子供用GPSに5Gは不要で、4G（LTE）で全く問題ありません</strong>。このページでは、現状の5G対応状況、4Gで十分な理由、3G停波の影響、今後の展望を詳しく解説します。
          </p>

          <h2 className="section-title">結論：子供用GPSに5Gは不要</h2>
          <div className="card-hover p-6 mb-8 border-l-4 border-orange">
            <p className="text-g600 mb-3">
              子供用GPS端末が送受信するデータは<strong>位置情報（緯度・経度）のみで1回あたり数KB</strong>程度です。
              これは4G（LTE）の通信速度で1秒以内に送信が完了するデータ量であり、5Gの超高速通信は全く必要ありません。
            </p>
            <p className="text-g600">
              むしろ5G対応にすると、チップのコスト増加・バッテリー消費の増大というデメリットがあります。
              子供用GPS端末にとっては、<strong>4G（LTE）が最もバランスの良い通信規格</strong>です。
            </p>
          </div>

          <h2 className="section-title">通信規格の世代比較</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">世代</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">最大速度</th>
                  <th className="py-3 px-3 text-center font-bold text-g800">ステータス</th>
                  <th className="py-3 px-3 text-center font-bold text-g800">GPS利用</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">備考</th>
                </tr>
              </thead>
              <tbody>
                {generationComparison.map((g) => (
                  <tr key={g.gen} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{g.gen}</td>
                    <td className="py-3 px-3 text-g600">{g.speed}</td>
                    <td className="py-3 px-3 text-center text-g600">{g.status}</td>
                    <td className="py-3 px-3 text-center text-g600">{g.gpsUse}</td>
                    <td className="py-3 px-3 text-g600">{g.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">4G（LTE）で十分な4つの理由</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {whyLteEnough.map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-2xl">{item.icon}</p>
                <div>
                  <h3 className="font-bold text-g800">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">機種別の通信規格対応状況</h2>
          <p className="text-g600 mb-4">
            2026年現在、主要な子供用GPS端末はすべて4G（LTE）対応です。5G対応機種は存在しません。
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">機種名</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">通信規格</th>
                  <th className="py-3 px-3 text-center font-bold text-g800">5G</th>
                  <th className="py-3 px-3 text-center font-bold text-g800">利用状況</th>
                </tr>
              </thead>
              <tbody>
                {deviceStatus.map((d) => (
                  <tr key={d.name} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{d.name}</td>
                    <td className="py-3 px-3 text-g600">{d.network}</td>
                    <td className="py-3 px-3 text-center text-g600">{d.fiveG}</td>
                    <td className="py-3 px-3 text-center text-g600">{d.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">3G停波の影響</h2>
          <p className="text-g600 mb-4">
            3Gサービスは各キャリアで順次終了しています。古い世代のGPS端末で3G回線のみに対応していた機種は使用できなくなっています。
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">キャリア</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">3G停波日</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">影響</th>
                </tr>
              </thead>
              <tbody>
                {threeGShutdown.map((t) => (
                  <tr key={t.carrier} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{t.carrier}</td>
                    <td className="py-3 px-3 text-g600">{t.shutdownDate}</td>
                    <td className="py-3 px-3 text-g600">{t.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-blue-light rounded-xl p-5 mb-8">
            <h3 className="font-bold text-g800 mb-2">お使いのGPS端末が3G専用かどうかの確認方法</h3>
            <p className="text-sm text-g600">
              端末のパッケージや取扱説明書に「LTE対応」「4G対応」の記載があれば問題ありません。「3G」「FOMA」「CDMA 1X」のみの記載で「LTE」「4G」の表記がない場合は、3G専用の可能性があります。不明な場合はメーカーのサポートに問い合わせましょう。2020年以降に発売された機種であれば、ほぼすべて4G対応です。
            </p>
          </div>

          <h2 className="section-title">今後の展望</h2>
          <div className="space-y-4 mb-8">
            {futureOutlook.map((f) => (
              <div key={f.year} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{f.year}</h3>
                <p className="text-sm text-g600">{f.outlook}</p>
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
            <Link href="/knowledge/gps-range/" className="text-blue hover:underline">通信範囲と届く距離</Link>
            <Link href="/knowledge/how-to-choose/" className="text-blue hover:underline">GPS選び方ガイド</Link>
            <Link href="/compare/carrier/" className="text-blue hover:underline">キャリア別比較</Link>
            <Link href="/knowledge/troubleshoot/" className="text-blue hover:underline">トラブルシューティング</Link>
          </div>

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">4Gで安心、今すぐ見守りを始めよう</h2>
            <p className="text-g600 mb-6 text-sm">5Gを待つ必要はありません。現在の4G対応GPS端末で十分な見守りが可能です。</p>
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
