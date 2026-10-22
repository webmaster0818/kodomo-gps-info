import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供用GPSの通信範囲と届く距離｜室内・地下でも使える？',
  description:
    '子供用GPS端末の通信範囲と届く距離を解説します。GPS・Wi-Fi・基地局の3つの測位方式の違い、室内や地下での精度、機種別の通信方式の比較、圏外になるケースと対処法をご紹介します。',
  keywords: ['子供GPS', '通信範囲', '届く距離', '室内', '地下', '測位方式', 'LTE'],
  openGraph: {
    images: ['/og.png'],
    title: '子供用GPSの通信範囲と届く距離｜室内・地下でも使える？',
    description: '子供用GPS端末の通信範囲と届く距離を解説します。GPS・Wi-Fi・基地局の3つの測位方式の違いと、室内や地下での精度をご紹介します。',
  },
};

const faqData = [
  { q: '子供用GPSは室内でも位置がわかりますか？', a: 'はい。Wi-Fi測位や基地局測位を組み合わせることで、室内でもおおよその位置を特定できます。ただし、GPS衛星の電波は室内に届きにくいため、屋外と比べて精度は低下します（誤差50〜200m程度）。Wi-Fiアクセスポイントが多いエリアでは精度が向上します。' },
  { q: '地下鉄でGPSは使えますか？', a: '地下鉄のホームや車内には、GPS衛星の電波は届きません。ただし、地下鉄の駅構内にはWi-Fiスポットや携帯基地局が設置されている場合が多く、Wi-Fi測位や基地局測位によっておおよその位置を取得できます。地上に出ると、通常のGPS測位に戻ります。' },
  { q: 'GPSの電波はどこまで届きますか？', a: 'GPS衛星の電波は地球上のほぼ全域をカバーしています。ただし、子供用GPS端末の位置情報を保護者のスマートフォンに送信するには、端末がインターネット（LTE/4G回線）に接続できる必要があります。そのため、携帯電話の電波が届く範囲が実質的な利用可能エリアとなります。' },
  { q: '山間部でGPSは使えますか？', a: '山間部でもGPS衛星の電波は受信できますが、携帯電話の電波（LTE）の圏外エリアでは、位置情報をサーバーに送信できません。登山やキャンプの際は、事前に各キャリアのエリアマップで電波状況をご確認ください。auのLTE回線を使用するあんしんウォッチャーは、山間部のカバー率が比較的高いとされています。' },
  { q: '海外でも子供用GPSは使えますか？', a: '国内向けの子供用GPSは、基本的に海外では使用できません。端末に内蔵されたSIMカードが、国内キャリアのLTE回線専用であるためです。海外旅行の際は、国際ローミングに対応したGPSトラッカーや、スマートフォンの位置共有機能のご利用をおすすめします。' },
  { q: 'GPS端末の通信に月々のデータ量の制限はありますか？', a: 'GPS端末が送受信するデータ量はごく少なく（1日あたり数MB程度）、月額料金に含まれる通信量の範囲で問題なく利用できます。動画や音声を送信するわけではないため、通信量の制限を気にする必要はほとんどありません。ただし、BoTトークなど音声メッセージ機能を備えた機種では、データ量が多少増えます。' },
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

const positioningMethods = [
  {
    method: 'GPS衛星測位',
    range: '屋外ほぼ全域',
    accuracy: '3〜10m',
    pros: '精度が最も高く、屋外では安定して動作します。',
    cons: '室内・地下・ビルの間では電波を受信できません。',
    icon: '',
  },
  {
    method: 'Wi-Fi測位',
    range: 'Wi-Fiスポット周辺',
    accuracy: '10〜50m',
    pros: '室内でも位置を取得でき、都市部では精度が高くなります。',
    cons: 'Wi-Fiが少ない地域では精度が低下し、郊外や農村部では機能しにくくなります。',
    icon: '',
  },
  {
    method: '基地局測位',
    range: '携帯電波エリア全域',
    accuracy: '100〜500m',
    pros: 'カバーエリアが最も広く、室内でも機能します。',
    cons: '精度が最も低く、おおよそのエリアしか把握できません。',
    icon: '',
  },
];

const deviceComparison = [
  { name: 'みてねみまもりGPS', carrier: 'ソフトバンク LTE', methods: 'GPS / Wi-Fi / 基地局', sim: '内蔵eSIM', note: '複数測位の自動切替' },
  { name: 'BoTトーク', carrier: 'LTE-M（ドコモLTEエリア）', methods: 'GPS / Wi-Fi / 基地局', sim: '内蔵eSIM', note: 'AI学習で精度向上' },
  { name: 'あんしんウォッチャー', carrier: 'au LTE', methods: 'GPS / Wi-Fi / 基地局', sim: '内蔵eSIM', note: 'au回線で山間部に強い' },
  { name: 'まもサーチ', carrier: 'ソフトバンク LTE', methods: 'GPS / Wi-Fi / 基地局', sim: '内蔵eSIM', note: '軽量・コンパクト' },
  { name: 'soranome（販売終了）', carrier: 'ドコモ LTE', methods: 'GPS / Wi-Fi / 基地局', sim: '内蔵SIM', note: 'ドコモ回線で都市部に強い' },
  { name: 'myFirst Fone R2', carrier: 'ドコモ/ソフトバンク LTE', methods: 'GPS / Wi-Fi / 基地局', sim: 'nano SIM', note: '腕時計型・通話対応' },
  { name: 'coneco（新規販売終了）', carrier: 'ドコモ LTE', methods: 'GPS / Wi-Fi / 基地局', sim: '内蔵SIM', note: 'メッセージ送受信対応' },
];

const outOfRangeCases = [
  { situation: '山間部・過疎地', reason: '携帯基地局が少なく、LTE圏外になりやすいためです。', solution: '事前に各キャリアのエリアマップをご確認ください。au回線（あんしんウォッチャー）は山間部のカバー率が比較的高めです。' },
  { situation: '海外', reason: '国内SIM専用のため、海外の回線に接続できません。', solution: '海外旅行の際は、スマートフォンの位置共有機能や国際対応のトラッカーをご利用ください。' },
  { situation: '飛行機内', reason: '機内モードが必須のため、すべての通信が遮断されます。', solution: '出発前と到着後に位置情報が自動で更新されるため、空港では位置を確認できます。' },
  { situation: '地下深層部', reason: 'GPS衛星や基地局の電波が届きにくいためです。', solution: '大型商業施設や駅構内では、Wi-Fiによって補完される場合が多くあります。完全な地下トンネル内では位置を取得できません。' },
  { situation: '鉄筋コンクリートのビル内部', reason: '建物がGPSの電波を遮断するためです。', solution: 'Wi-Fi測位によって補完されます。窓際に近づくと、精度が回復しやすくなります。' },
];

export default function GpsRangePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供用GPSの通信範囲と届く距離｜室内・地下でも使える？", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '通信範囲と届く距離' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">通信範囲</span>
            <span className="tag-pill bg-orange text-white">測位方式</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供用GPSの通信範囲と届く距離
          </h1>
          <p className="text-g600 text-lg">室内や地下での利用可否を含め、GPS・Wi-Fi・基地局の測位方式を解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">

          <h2 className="section-title">GPSは「衛星通信」ではありません</h2>
          <div className="card-hover p-6 mb-8 border-l-4 border-orange">
            <p className="text-g600 mb-3">
              GPSは衛星と直接通信していると誤解されることが多くありますが、実際は異なります。GPS衛星から受信するのは、
              <strong>位置を計算するための信号のみ</strong>です。計算された位置情報を保護者のスマートフォンに送信するには、
              端末が<strong>インターネット（LTE/4G回線）に接続</strong>している必要があります。
            </p>
            <p className="text-g600 mb-3">
              そのため、GPS衛星の電波が届いていても、携帯電話の電波（LTE）が圏外であれば位置情報は送信されません。
              反対に、GPS衛星の電波を受信できない場所でも、Wi-Fiや基地局によって位置を推定し、LTEで送信することは可能です。
            </p>
            <p className="text-sm text-g500">
              子供用GPS端末の「通信範囲」とは、実質的には<strong>携帯キャリアのLTEカバーエリア</strong>を指します。
              日本国内の市街地であれば、ほぼ問題なく利用できます。
            </p>
          </div>

          <h2 className="section-title">3つの測位方式と通信範囲の違い</h2>
          <p className="text-g600 mb-6">
            子供用GPS端末は、GPS衛星・Wi-Fi・携帯基地局の3つの測位方式を組み合わせて位置を特定します。
            環境に応じて最適な方式が自動的に選択されるため、屋外・室内を問わず、ある程度の位置を把握できます。
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {positioningMethods.map((m) => (
              <div key={m.method} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{m.method}</h3>
                <p className="text-sm text-orange font-semibold mb-1">範囲: {m.range}</p>
                <p className="text-sm text-blue font-semibold mb-2">精度: {m.accuracy}</p>
                <p className="text-sm text-g600 mb-1"><strong>利点:</strong> {m.pros}</p>
                <p className="text-sm text-g600"><strong>弱点:</strong> {m.cons}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">室内・地下・ビル内での精度と対策</h2>
          <p className="text-g600 mb-4">
            室内ではGPS衛星の電波が遮断されるため、Wi-Fi測位と基地局測位が主な手段となります。
            精度は環境によって大きく変わりますが、一般的な傾向は以下のとおりです。
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">環境</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">GPS</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">Wi-Fi</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">基地局</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">総合精度</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { env: '屋外（見通し良好）', gps: '◎', wifi: '○', station: '○', total: '3〜10m' },
                  { env: '屋外（ビル街）', gps: '○', wifi: '◎', station: '○', total: '10〜30m' },
                  { env: '室内（窓際）', gps: '△', wifi: '◎', station: '○', total: '15〜50m' },
                  { env: '室内（中央部）', gps: '×', wifi: '○', station: '○', total: '30〜100m' },
                  { env: '地下1階', gps: '×', wifi: '○', station: '△', total: '50〜200m' },
                  { env: '地下深層', gps: '×', wifi: '△', station: '×', total: '100〜500m以上' },
                  { env: '地下鉄駅構内', gps: '×', wifi: '○', station: '○', total: '50〜150m' },
                ].map((row) => (
                  <tr key={row.env} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{row.env}</td>
                    <td className="py-3 px-3 text-g600">{row.gps}</td>
                    <td className="py-3 px-3 text-g600">{row.wifi}</td>
                    <td className="py-3 px-3 text-g600">{row.station}</td>
                    <td className="py-3 px-3 text-g600 font-semibold">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-g500 mb-8">※ 精度は環境や時間帯によって変動します。上記は一般的な目安です。</p>

          <h2 className="section-title">機種別の通信方式比較表</h2>
          <p className="text-g600 mb-4">
            各機種が利用する通信キャリアと測位方式の一覧です。カバーエリアは携帯キャリアによって異なるため、
            お住まいの地域の電波状況に合わせて機種を選ぶことをおすすめします。
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">機種名</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">通信回線</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">測位方式</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">SIM</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">特徴</th>
                </tr>
              </thead>
              <tbody>
                {deviceComparison.map((d) => (
                  <tr key={d.name} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{d.name}</td>
                    <td className="py-3 px-3 text-g600">{d.carrier}</td>
                    <td className="py-3 px-3 text-g600">{d.methods}</td>
                    <td className="py-3 px-3 text-g600">{d.sim}</td>
                    <td className="py-3 px-3 text-g600">{d.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">通信キャリア別カバーエリアの違い</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { carrier: 'ソフトバンク LTE', coverage: '人口カバー率99%以上', strength: '都市部・住宅地で安定しており、地下鉄駅もカバーしています。', weakness: '山間部・離島の一部では圏外となる可能性があります。', devices: 'みてね / BoT / まもサーチ' },
              { carrier: 'au (KDDI) LTE', coverage: '人口カバー率99%以上', strength: '山間部・郊外のカバー率が高く、800MHz帯のプラチナバンドを使用しています。', weakness: '都市部では3キャリアの差はほとんどありません。', devices: 'あんしんウォッチャー' },
              { carrier: 'ドコモ LTE', coverage: '人口カバー率99%以上', strength: '基地局数が全国最大で、都市部での安定性が高い回線です。', weakness: '山間部ではauとほぼ同等です。', devices: 'coneco（新規販売終了） / myFirst Fone' },
            ].map((c) => (
              <div key={c.carrier} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{c.carrier}</h3>
                <p className="text-sm text-blue font-semibold mb-2">{c.coverage}</p>
                <p className="text-sm text-g600 mb-1"><strong>強み:</strong> {c.strength}</p>
                <p className="text-sm text-g600 mb-2"><strong>弱み:</strong> {c.weakness}</p>
                <p className="text-xs text-g500"><strong>対応機種:</strong> {c.devices}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">「圏外」になるケースと対処法</h2>
          <div className="space-y-4 mb-8">
            {outOfRangeCases.map((c) => (
              <div key={c.situation} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{c.situation}</h3>
                <p className="text-sm text-g600 mb-1"><strong>原因:</strong> {c.reason}</p>
                <p className="text-sm text-g600"><strong>対処法:</strong> {c.solution}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">通信範囲を有効に活用するためのポイント</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: '', title: 'ランドセルの外側ポケットに入れる', desc: '金属製の筆箱やタブレットと一緒に入れると、電波が遮断されやすくなります。できるだけ外側のポケットに入れることをおすすめします。' },
              { icon: '', title: 'バッテリーを切らさない', desc: 'バッテリーが切れると、位置情報を取得できません。週に2〜3回の充電を習慣にすることをおすすめします。' },
              { icon: '', title: '測位間隔を適切に設定する', desc: '位置の更新頻度を高くすると、バッテリーの消費が増えます。通学時は3分間隔、休日は5分間隔など、場面に応じた使い分けをおすすめします。' },
              { icon: '', title: '事前にエリアマップを確認する', desc: '通学路や習い事先がLTEのカバーエリア内にあるかどうか、各キャリアの公式サイトで事前にご確認ください。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <div>
                  <h3 className="font-bold text-g800">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
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
            <Link href="/knowledge/indoor-accuracy/" className="text-blue hover:underline">室内での精度について</Link>
            <Link href="/knowledge/accuracy/" className="text-blue hover:underline">GPS精度の基礎知識</Link>
            <Link href="/knowledge/how-to-choose/" className="text-blue hover:underline">GPS選び方ガイド</Link>
            <Link href="/knowledge/troubleshoot/" className="text-blue hover:underline">トラブルシューティング</Link>
          </div>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">通信範囲から考えるGPS端末の選び方</h2>
            <p className="text-g600 mb-6 text-sm">お住まいのエリアに合った通信キャリアのGPS端末を選ぶことが、安定した見守りの第一歩です。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/carrier/" className="btn-primary">キャリア別比較</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">GPS選び方ガイド</Link>
            </div>
          </div>

          <p className="text-xs text-g400 mt-8 text-center">最終更新: 2026年5月</p>
        </div>
      </section>
    </>
  );
}
