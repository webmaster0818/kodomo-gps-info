import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供用GPSの通信範囲と届く距離｜室内・地下でも使える？',
  description:
    '子供用GPS端末の通信範囲・届く距離を徹底解説。GPS・Wi-Fi・基地局の3つの測位方式の違い、室内や地下での精度、機種別の通信方式比較、圏外になるケースと対処法まで詳しく紹介します。',
  keywords: ['子供GPS', '通信範囲', '届く距離', '室内', '地下', '測位方式', 'LTE'],
  openGraph: {
    title: '子供用GPSの通信範囲と届く距離｜室内・地下でも使える？',
    description: '子供用GPS端末の通信範囲・届く距離を徹底解説。GPS・Wi-Fi・基地局の3つの測位方式の違いと、室内や地下での精度を紹介。',
  },
};

const faqData = [
  { q: '子供用GPSは室内でも位置がわかりますか？', a: 'はい、Wi-Fi測位や基地局測位を組み合わせることで室内でもおおよその位置を特定できます。ただしGPS衛星の電波は室内には届きにくいため、屋外と比べて精度は落ちます（誤差50〜200m程度）。Wi-Fiアクセスポイントが多いエリアでは精度が向上します。' },
  { q: '地下鉄でGPSは使えますか？', a: '地下鉄のホームや車内ではGPS衛星の電波は届きません。ただし、地下鉄の駅構内にはWi-Fiスポットや携帯基地局が設置されているケースが多く、Wi-Fi測位や基地局測位で大まかな位置は取得できます。地上に出れば通常のGPS測位に戻ります。' },
  { q: 'GPSの電波はどこまで届きますか？', a: 'GPS衛星の電波自体は地球上のほぼ全域をカバーしていますが、子供用GPS端末の位置情報を保護者のスマホに送るには、端末がインターネット（LTE/4G回線）に接続できる必要があります。つまり携帯電波の届く範囲が実質的な利用可能エリアとなります。' },
  { q: '山間部でGPSは使えますか？', a: '山間部でもGPS衛星の電波は受信できますが、携帯電波（LTE）の圏外エリアでは位置情報をサーバーに送信できません。登山やキャンプの際は事前にキャリアのエリアマップで電波状況を確認しましょう。auのLTE回線を使うあんしんウォッチャーは山間部のカバー率が比較的高いとされています。' },
  { q: '海外でも子供用GPSは使えますか？', a: '基本的に国内向けの子供用GPSは海外では使えません。端末に内蔵されたSIMカードが国内キャリアのLTE回線専用であるためです。海外旅行時は別途、国際ローミング対応のGPSトラッカーやスマートフォンの位置共有機能を利用するのがおすすめです。' },
  { q: 'GPS端末の通信に月々のデータ量の制限はありますか？', a: 'GPS端末が送受信するデータ量は非常に少なく（1日あたり数MB程度）、月額料金に含まれる通信量で問題なく利用できます。動画や音声を送るわけではないため、通信量制限を気にする必要はほぼありません。ただしBoTトークなど音声メッセージ機能付きの機種は多少データ量が増えます。' },
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
    pros: '最も精度が高い。屋外では安定して動作。',
    cons: '室内・地下・ビル間では電波を受信できない。',
    icon: '🛰️',
  },
  {
    method: 'Wi-Fi測位',
    range: 'Wi-Fiスポット周辺',
    accuracy: '10〜50m',
    pros: '室内でも位置取得可能。都市部で精度が高い。',
    cons: 'Wi-Fiが少ない地域では精度低下。田舎では機能しにくい。',
    icon: '📶',
  },
  {
    method: '基地局測位',
    range: '携帯電波エリア全域',
    accuracy: '100〜500m',
    pros: 'カバーエリアが最も広い。室内でも機能する。',
    cons: '精度が最も低い。大まかなエリアしかわからない。',
    icon: '📡',
  },
];

const deviceComparison = [
  { name: 'みてねみまもりGPS', carrier: 'ソフトバンク LTE', methods: 'GPS / Wi-Fi / 基地局', sim: '内蔵eSIM', note: '複数測位の自動切替' },
  { name: 'BoTトーク', carrier: 'ソフトバンク LTE', methods: 'GPS / Wi-Fi / 基地局', sim: '内蔵eSIM', note: 'AI学習で精度向上' },
  { name: 'あんしんウォッチャー', carrier: 'au LTE', methods: 'GPS / Wi-Fi / 基地局', sim: '内蔵eSIM', note: 'au回線で山間部に強い' },
  { name: 'どこかなGPS2', carrier: 'ソフトバンク LTE', methods: 'GPS / Wi-Fi / 基地局', sim: '内蔵eSIM', note: 'みちびき対応' },
  { name: 'まもサーチ', carrier: 'ソフトバンク LTE', methods: 'GPS / Wi-Fi / 基地局', sim: '内蔵eSIM', note: '軽量・コンパクト' },
  { name: 'soranome', carrier: 'ドコモ LTE', methods: 'GPS / Wi-Fi / 基地局', sim: '内蔵SIM', note: 'ドコモ回線で都市部に強い' },
  { name: 'myFirst Fone R2', carrier: 'ドコモ/ソフトバンク LTE', methods: 'GPS / Wi-Fi / 基地局', sim: 'nano SIM', note: '腕時計型・通話対応' },
  { name: 'coneco', carrier: 'ドコモ LTE', methods: 'GPS / Wi-Fi / 基地局', sim: '内蔵SIM', note: 'メッセージ送受信対応' },
];

const outOfRangeCases = [
  { situation: '山間部・過疎地', reason: '携帯基地局が少なくLTE圏外になりやすい', solution: '事前にキャリアのエリアマップを確認。au回線（あんしんウォッチャー）は山間部カバー率が高め。' },
  { situation: '海外', reason: '国内SIM専用のため海外の回線に接続不可', solution: '海外旅行時はスマートフォンのGPS共有機能や国際対応トラッカーを利用。' },
  { situation: '飛行機内', reason: '機内モード必須のため全通信が遮断される', solution: '出発前・到着後に自動で位置情報が更新されるため、空港では追跡可能。' },
  { situation: '地下深層部', reason: 'GPS衛星・基地局の電波が届きにくい', solution: '大型商業施設や駅構内のWi-Fiで補完される場合が多い。完全な地下トンネルでは取得不可。' },
  { situation: '鉄筋コンクリートのビル内部', reason: '建物がGPS電波を遮断する', solution: 'Wi-Fi測位で補完。窓際に近づくと精度が回復しやすい。' },
];

export default function GpsRangePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '通信範囲と届く距離' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">通信範囲</span>
            <span className="tag-pill bg-orange text-white">測位方式</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供用GPSの通信範囲と届く距離
          </h1>
          <p className="text-g600 text-lg">室内・地下でも使える？GPS・Wi-Fi・基地局の測位方式を徹底解説</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">

          <h2 className="section-title">よくある誤解：GPSは「衛星通信」ではない</h2>
          <div className="card-hover p-6 mb-8 border-l-4 border-orange">
            <p className="text-g600 mb-3">
              多くの方が「GPS＝衛星と直接通信している」と思いがちですが、実際は違います。GPS衛星から受信するのは
              <strong>位置を計算するための信号だけ</strong>です。計算された位置情報を保護者のスマホに送信するには、
              端末が<strong>インターネット（LTE/4G回線）に接続</strong>している必要があります。
            </p>
            <p className="text-g600 mb-3">
              つまり、GPS衛星の電波が届いても、携帯電波（LTE）が圏外なら位置情報は送信されません。
              逆に、GPS衛星が見えなくてもWi-Fiや基地局で位置を推定し、LTEで送信することは可能です。
            </p>
            <p className="text-sm text-g500">
              子供用GPS端末の「通信範囲」とは、実質的には<strong>携帯キャリアのLTEカバーエリア</strong>のことです。
              日本国内の市街地であれば、ほぼ問題なく利用できます。
            </p>
          </div>

          <h2 className="section-title">3つの測位方式と通信範囲の違い</h2>
          <p className="text-g600 mb-6">
            子供用GPS端末は、GPS衛星・Wi-Fi・携帯基地局の3つの測位方式を組み合わせて位置を特定します。
            環境に応じて自動的に最適な方式が選ばれるため、屋外でも室内でもある程度の位置把握が可能です。
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {positioningMethods.map((m) => (
              <div key={m.method} className="card-hover p-5">
                <p className="text-3xl mb-2">{m.icon}</p>
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
            室内環境ではGPS衛星の電波が遮断されるため、Wi-Fi測位と基地局測位が主な手段になります。
            環境によって精度は大きく変わりますが、以下のような傾向があります。
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
            各機種が利用する通信キャリアと測位方式の一覧です。利用する携帯キャリアによってカバーエリアが異なるため、
            お住まいの地域の電波状況に合わせて選ぶことが大切です。
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
              { carrier: 'ソフトバンク LTE', coverage: '人口カバー率99%以上', strength: '都市部・住宅地で安定。地下鉄駅もカバー。', weakness: '山間部・離島の一部で圏外の可能性あり。', devices: 'みてね / BoT / どこかなGPS2 / まもサーチ' },
              { carrier: 'au (KDDI) LTE', coverage: '人口カバー率99%以上', strength: '山間部・郊外のカバー率が高い。800MHz帯のプラチナバンド。', weakness: '都市部では3キャリアとも差は少ない。', devices: 'あんしんウォッチャー' },
              { carrier: 'ドコモ LTE', coverage: '人口カバー率99%以上', strength: '全国最大の基地局数。都市部の安定性が高い。', weakness: '山間部ではauとほぼ同等。', devices: 'soranome / coneco / myFirst Fone' },
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

          <h2 className="section-title">通信範囲を最大限活用するコツ</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: '🎒', title: 'ランドセルの外側ポケットに入れる', desc: '金属製の筆箱やタブレットと一緒に入れると電波が遮断されやすくなります。なるべく外側のポケットに入れましょう。' },
              { icon: '🔋', title: 'バッテリーを切らさない', desc: 'バッテリーが切れると位置情報は取得できません。週に2〜3回の充電習慣をつけましょう。' },
              { icon: '📱', title: '測位間隔を適切に設定', desc: '頻繁な位置更新はバッテリー消費が増えます。通学時は3分間隔、休日は5分間隔など使い分けを。' },
              { icon: '🗺️', title: '事前にエリアマップを確認', desc: '通学路や習い事先がLTEカバーエリア内か、キャリアの公式サイトで確認しておくと安心です。' },
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

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 flex flex-wrap gap-3 text-sm">
            <Link href="/knowledge/indoor-accuracy/" className="text-blue hover:underline">室内での精度について詳しく</Link>
            <Link href="/knowledge/accuracy/" className="text-blue hover:underline">GPS精度の基礎知識</Link>
            <Link href="/knowledge/how-to-choose/" className="text-blue hover:underline">GPS選び方ガイド</Link>
            <Link href="/knowledge/troubleshoot/" className="text-blue hover:underline">トラブルシューティング</Link>
          </div>

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">通信範囲で失敗しないGPS選び</h2>
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
