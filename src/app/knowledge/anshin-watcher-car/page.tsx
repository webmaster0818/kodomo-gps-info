import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'あんしんウォッチャーを車・バイクの盗難対策に使えるか｜公式FAQの回答と動作温度・測位設定の注意点【2026年11月】',
  description:
    'あんしんウォッチャー（LE）を車やバイクの盗難対策に使えるかを、KDDI公式FAQの記載で整理しています。公式の回答（利用可能・動作温度－5℃〜40℃）、夏の車内温度との関係、スリープモードと測位間隔の設定、盗難時に警察へ届け出る前提をまとめています。',
  keywords: ['あんしんウォッチャー', '車', '盗難', 'バイク', 'GPS', '盗難防止'],
};

const FAQ_BASE = 'https://homeiot.kddi.com/anshinwatcher/kids/faq/';
const JAF_URL = 'https://jaf.or.jp/common/safety-drive/car-learning/user-test/temperature/summer';
const CHECKED = '2026年11月18日確認';

const faqData = [
  {
    q: 'あんしんウォッチャーは車やバイクの盗難防止に使えますか？',
    a: 'KDDI公式FAQでは「車やバイクなどモノの盗難防止に利用可能」と回答しています。ただし、車やバイクに本体を入れておく場合は動作温度範囲内（温度－5℃〜40℃・湿度20%〜80%、結露しないこと）で使うよう注意書きがあります（2026年11月18日確認）。',
  },
  {
    q: '夏の車内に置きっぱなしにしても大丈夫ですか？',
    a: '公式の動作温度の上限は40℃です。JAFのユーザーテスト（2012年8月・気温35℃の晴天・正午から4時間）では、対策なしの黒い車の車内最高温度が57℃、サンシェードを付けた車でも50℃、窓を3cm開けた車でも45℃でした。夏の駐車中は動作温度を超えるおそれが高いため、置き場所と季節に注意が必要です。',
  },
  {
    q: '駐車中は位置が更新されないのですか？',
    a: '公式FAQによると、あんしんウォッチャーは揺れを検知して現在地を測位し、揺れを検知しない間は「スリープモード」で現在地の更新を休みます。揺れを検知すると測位を再開します。動いていない間も一定間隔で位置を残したい場合は、「定期的に測位する」間隔（1時間〜24時間）を設定します。',
  },
  {
    q: '電池はどのくらい持ちますか？',
    a: '公式FAQでは、1回の充電で最大2カ月間と案内されています。これは移動中の測位が標準（約3分）・定期測位が約24時間・平日1日合計約2時間の移動・屋外利用を想定した目安で、電波環境や使い方で変わります。車やバイクに入れたままにする場合は、電池残量を定期的に確認する必要があります。',
  },
  {
    q: '月額料金はかかりますか？',
    a: '公式FAQによると、あんしんウォッチャー（定価11,000円・税込）は最大1年間のau HOME基本利用料が無料で、13カ月目以降は月額539円（税込）です。あんしんウォッチャー LE（定価5,680円・税込）は初月無料で、2カ月目から月額539円（税込）です。性能は両者で同一です。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function AnshinWatcherCarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'あんしんウォッチャーを車・バイクの盗難対策に使えるか', datePublished: '2026-11-18', dateModified: '2026-11-18', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'あんしんウォッチャーを車の盗難対策に使えるか' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">使い方</span>
            <span className="tag-pill bg-blue text-white">あんしんウォッチャー</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">あんしんウォッチャーを車・バイクの盗難対策に使うときの注意点</h1>
          <p className="text-g600 text-lg">子ども向けの見守りGPSとして販売されているあんしんウォッチャーを、車やバイクに入れて使えるかどうかを、KDDI公式FAQの記載をもとに整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：公式に「モノの盗難防止に利用可能」とされています。ただし動作温度は－5℃〜40℃で、夏の車内では上限を超えるおそれがあります</h2>
            <p className="text-g600">
              KDDIは公式FAQで、あんしんウォッチャーを<strong>車やバイクなどモノの盗難防止に利用可能</strong>と回答しています。一方で、車やバイクに本体を入れておく場合は<strong>動作温度（－5℃〜40℃）・湿度（20%〜80%、結露しないこと）の範囲内</strong>で使うよう注意書きがあります。本体が盗難そのものを防ぐわけではなく、<strong>位置を確認する手段</strong>として考えるのが適切です。
            </p>
          </div>

          <h2 className="section-title">公式FAQで確認できること</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ['車・バイクの盗難防止への利用', '利用可能（モノの盗難防止として）'],
                  ['車・バイクに入れておく場合の条件', '動作温度－5℃〜40℃、湿度20%〜80%（結露しないこと）'],
                  ['移動中の測位間隔', '測位優先（約90秒）／標準（約3分）／バッテリー優先（約5分）／オフ'],
                  ['動きに関係なく測位する間隔', '1時間〜24時間で設定可能（ソフトウェア更新のため約24時間に一度は測位）'],
                  ['動いていないとき', '揺れを検知しない間はスリープモードで現在地の更新を休み、揺れを検知すると再開'],
                  ['電池持ち', '1回の充電で最大2カ月（標準設定・平日1日約2時間移動・屋外利用を想定した目安）'],
                  ['本体価格と月額', 'あんしんウォッチャー 定価11,000円（最大1年間基本利用料無料、13カ月目以降 月額539円）／LE 定価5,680円（初月無料、2カ月目から月額539円）。いずれも税込'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <th className="p-3 text-left text-g800 w-1/3 bg-blue-light/40">{k}</th>
                    <td className="p-3 text-g700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：KDDI「<a href={`${FAQ_BASE}027.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">車やバイクの盗難防止に利用したいのですが、利用できますか？</a>」「<a href={`${FAQ_BASE}036.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">GPSの更新間隔を知りたいです。</a>」「<a href={`${FAQ_BASE}013.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">1回の充電でどのくらい電池は持ちますか？</a>」「<a href={`${FAQ_BASE}006.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">本体の値段・その他かかる費用</a>」（{CHECKED}）
          </p>

          <h2 className="section-title">動作温度と車内温度の関係</h2>
          <p className="text-sm text-g700 mb-3">公式の動作温度の上限は40℃です。JAFが真夏に行った車内温度のテストでは、どの駐車条件でもエアコン停止中は40℃を上回りました。</p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">駐車条件（JAFテスト）</th>
                  <th className="p-3 text-left border-b-2 border-blue">車内最高温度</th>
                  <th className="p-3 text-left border-b-2 border-blue">ダッシュボード最高温度</th>
                  <th className="p-3 text-left border-b-2 border-blue">動作温度上限（40℃）との比較</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['対策なし（黒）', '57℃', '79℃', '超える'],
                  ['対策なし（白）', '52℃', '74℃', '超える'],
                  ['サンシェード装着', '50℃', '52℃', '超える'],
                  ['窓開け（3cm）', '45℃', '75℃', '超える'],
                  ['エアコン作動', '27℃', '61℃', '車内は範囲内（ダッシュボードは超える）'],
                ].map(([a, b, c, d]) => (
                  <tr key={a} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">{a}</td>
                    <td className="p-3 text-g700">{b}</td>
                    <td className="p-3 text-g700">{c}</td>
                    <td className="p-3 text-g700">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-3">
            出典：JAF「<a href={JAF_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">真夏の車内温度（JAFユーザーテスト）</a>」（実施日2012年8月22日・23日、埼玉県戸田市、晴れ・気温35度、ミニバン5台で正午から4時間測定）、KDDI「<a href={`${FAQ_BASE}027.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">027</a>」（{CHECKED}）。比較の列は当サイトが両者の数値を並べて作成したものです。
          </p>
          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              <strong>冬の注意</strong>：動作温度の下限は－5℃です。寒冷地では冬の屋外駐車で下限を下回る可能性があります。車内温度がどこまで下がるかは地域や駐車環境で大きく異なるため、本ページでは数値を示していません。
            </p>
          </div>

          <h2 className="section-title">車・バイクに入れる場合の設定と運用のポイント</h2>
          <p className="text-sm text-g700 mb-3">公式FAQの仕様から、当サイトが運用上の確認点を整理しました。</p>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>駐車中の位置を残したい場合</strong>：揺れがない間はスリープモードで更新が止まるため、「定期的に測位する」間隔（1時間〜24時間）を設定しておきます。間隔を短くするほど電池の減りは早くなります。</li>
            <li>・<strong>動いたときに細かく追いたい場合</strong>：移動中の測位を「測位優先（約90秒）」にします。電池持ちは公式の目安（最大2カ月）より短くなります。</li>
            <li>・<strong>電池の管理</strong>：電池は内蔵式です。本体のボタンを1回押すとLEDで残量を確認できるため、定期的に取り出して充電します。</li>
            <li>・<strong>置き場所</strong>：直射日光が当たるダッシュボード付近は、JAFのテストで最も高温になった場所です。夏は車内に置いたままにしない運用も検討してください。</li>
            <li>・<strong>電波</strong>：公式FAQには、位置情報が取得できなかった場合は更新間隔が長くなることがあると記載されています。屋内や地下の駐車場では位置を取得しにくくなる可能性があるため、駐車場所での表示を事前に確かめておくと安心です。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：KDDI「<a href={`${FAQ_BASE}036.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">GPSの更新間隔を知りたいです。</a>」「<a href={`${FAQ_BASE}013.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">電池持ち</a>」（{CHECKED}）。電池残量の確認方法は当サイトの「<Link href="/review/anshin-watcher/" className="text-blue underline">あんしんウォッチャーのレビュー</Link>」で取扱説明書をもとに整理しています。
          </p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              <strong>盗難にあったときは</strong>：あんしんウォッチャーで位置が分かった場合でも、ご自身で現場に向かったり取り返そうとしたりせず、警察へ届け出て位置情報を伝えてください。本機は子どもや高齢者の見守り用に設計された端末で、車両の盗難防止専用の機器ではありません。車両向けの盗難対策は、自動車メーカーや保険会社の案内もあわせてご確認ください。
            </p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
          <p className="text-xs text-g400 mt-3">
            出典：KDDI「<a href={`${FAQ_BASE}027.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">027</a>」「<a href={`${FAQ_BASE}036.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">036</a>」「<a href={`${FAQ_BASE}013.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">013</a>」「<a href={`${FAQ_BASE}006.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">006</a>」「<a href={`${FAQ_BASE}001.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">LE版と通常版の違い</a>」、JAF「<a href={JAF_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">真夏の車内温度</a>」（{CHECKED}）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/anshin-watcher/" className="btn-primary">あんしんウォッチャーのレビュー</Link>
              <Link href="/knowledge/anshin-watcher-howto/" className="btn-accent">あんしんウォッチャーの使い方</Link>
              <Link href="/knowledge/anshin-watcher-cover/" className="btn-primary">あんしんウォッチャーのケース・カバー</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
