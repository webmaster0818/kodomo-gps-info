import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'みもりGPSトークの料金・機能は？【2026年モデル】トークと不審者情報連動を公式情報で解説',
  description:
    'ドリームエリアの子供用GPS「みもりGPSトーク」（2026年モデル・MR-03B）の料金・機能・仕様を公式情報で解説します。本体3,800円（キャンペーン価格）・月額748円、親子の双方向トーク、不審者情報との連動に対応しています。',
};

const CHECKED = '2026年10月23日';

const faqData = [
  { q: 'みもりGPSトークの料金はいくらですか？', a: '本体価格は3,800円（税込）、月額料金は748円（税込）です（2026年10月23日確認）。本体価格は公式サイトのキャンペーン価格で、公式トップページでは「10月末まで・在庫限り」と表示されています。通常価格と送料の金額は、公式サイトに記載がありません。' },
  { q: '契約期間の縛りや解約金はありますか？', a: 'ありません。契約は1か月単位の自動更新で、契約満了日の5日前までにアプリから解約を申請できます。利用規約では、月の途中で解約した場合の日割りでの返金はないとされています。解約した端末は内蔵SIMが無効になり、再利用できません。' },
  { q: 'トーク機能では何ができますか？', a: '親子で1回最大30秒の音声メッセージを送り合えます。回数の制限や追加の料金はありません。お子さまの音声を文字に変換したり、保護者が入力した文字を音声に変換して送ったりすることもできます。' },
  { q: '不審者情報との連動とはどのような機能ですか？', a: '公式サイトでは、日本不審者情報センターと連携し、お子さまの近くで不審者の目撃情報があると注意を知らせ、家族にも自動で通知すると説明しています。' },
  { q: 'バッテリーはどのくらい持ちますか？', a: '公式の製品仕様では、エコモード（位置の更新間隔3〜5分）で最大2か月、優先モード（1.5〜2分）で最大1.5か月です。エコモードの値は、1日3時間の屋外歩行を想定したものです。充電はUSB Type-Cで約2時間です。' },
  { q: '学校に持って行けますか？', a: '時間帯や場所を指定して、スピーカー・ボタン・着信ランプを無効にする「学校モード」があります。2026年4月3日以降のアップデートで、指定した時間・場所ではトーク機能そのものを停止できる「新・学校モード」にも順次対応しています。持ち込みの可否は、学校の規則をご確認ください。' },
  { q: '旧モデルはまだ購入できますか？', a: '2026年10月23日時点で、公式の購入ページで販売しているのは「みもりGPSトーク」の1機種のみです。利用規約には、2018年7月から2021年2月に販売したMR-01A/B、2021年3月以降に販売したMR-02・MR-03A/Bが記載されています。' },
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

const specRows: [string, string][] = [
  ['提供元', 'ドリームエリア株式会社'],
  ['機種', 'みもりGPSトーク（2026年モデル・型番 MR-03B）'],
  ['本体価格', '3,800円（税込・キャンペーン価格）'],
  ['月額料金', '748円（税込）'],
  ['契約期間', '1か月単位の自動更新（縛り・解約金なし）'],
  ['位置の更新間隔', 'エコモード 3〜5分／優先モード 1.5〜2分（7:00〜8:30は自動で1分間隔）'],
  ['測位方式', 'GPS・みちびき・GLONASS・BeiDou・Galileo、A-GNSS、Wi-Fi、携帯基地局'],
  ['バッテリー', '2,000mAh／エコモード 最大2か月・優先モード 最大1.5か月'],
  ['充電', 'USB Type-C（ケーブル別売）・約2時間'],
  ['通信回線', 'LTE-M（NTTドコモ回線）'],
  ['防水', 'IPX5（生活防水）'],
  ['サイズ・重量', '52×52×22mm・62g'],
  ['見守る人数', '1台につき最大8名'],
  ['対応OS（保護者アプリ）', 'iOS 16以降・Android 10以降'],
  ['保証', '購入から1年'],
];

const features = [
  { title: 'トーク（双方向）', desc: '親子で1回最大30秒の音声メッセージを送り合えます。回数制限・追加料金はありません。文字と音声の相互変換に対応しています。' },
  { title: '不審者情報との連動', desc: '日本不審者情報センターと連携し、近くで目撃情報があるとお子さまに注意を促し、家族にも自動で通知します。' },
  { title: '危険な場所の警告', desc: '保護者が指定した場所にお子さまが近づくと、端末の音声とランプで警告します。' },
  { title: '活動範囲の設定', desc: '設定した範囲の外に出ると、端末の音とランプでお子さまに知らせ、保護者のスマートフォンにも通知します。' },
  { title: 'エリア通知', desc: '自宅や学校などへの到着・出発を自動で通知します。エリアは円形のほか、手書きでも作成できます。' },
  { title: '通知ボタン', desc: 'ボタンを押すと周囲の音を録音し、現在地とともに保護者へ通知します。録音時間は5〜20秒、または無効に設定できます。' },
  { title: '学校モード', desc: '指定した時間帯・場所で、スピーカー・ボタン・着信ランプを無効にします。新・学校モードではトーク機能も停止できます。' },
  { title: '音声時計', desc: 'ボタンを2回押すと、現在の時刻を音声で知らせます。' },
];

export default function MimoriPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "みもりGPSトークのレビュー", "datePublished": "2026-03-15", "dateModified": "2026-10-23", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'みもりGPSトーク' }]} />

      {/* Hero */}
      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">双方向トーク</span>
            <span className="tag-pill bg-blue text-white">不審者情報連動</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            みもりGPSトークのレビュー
          </h1>
          <p className="text-g600 text-lg">ドリームエリア提供 | 2026年モデル（MR-03B） | 本体3,800円（キャンペーン価格） | 月額748円</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">みもりGPSトークとは</h2>
          <p className="text-g600 mb-4">
            みもりGPSトークは、不審者情報配信サービス「マチコミ」を運営するドリームエリア株式会社の子供用GPS端末です。
            2024年に親子で音声メッセージを送り合える「トーク機能」を搭載したモデルとして発売され、現在は2026年モデル（音声時計を搭載）が販売されています。
          </p>
          <p className="text-g600 mb-6">
            位置の確認やエリア通知に加え、不審者情報との連動、指定した場所に近づいたときの警告など、防犯に関わる機能を備えている点が特徴です。
            2026年10月23日時点で、公式の購入ページで販売している機種はみもりGPSトークのみです。
          </p>

          <div className="bg-orange-light rounded-xl p-5 mb-8">
            <p className="font-bold text-g800 mb-2">料金について（{CHECKED}確認）</p>
            <ul className="text-sm text-g700 space-y-1">
              <li>・本体3,800円（税込）は公式サイトのキャンペーン価格です。公式トップページでは「10月末まで・在庫限り」と表示されています。通常価格は公式サイトに記載がありません</li>
              <li>・公式サイトでは、費用は「端末の購入費用（本体＋送料）と月額費用のみ」と案内しています。送料の金額は記載がありません</li>
              <li>・月額料金は、アプリで開通手続きを完了した日から発生します。開通手続きは購入から3か月以内に行う必要があります</li>
              <li>・専用ケースは別売です（PUレザーケース1,980円、シリコンケース1,848円、いずれも税込）</li>
            </ul>
          </div>

          <h2 className="section-title">基本スペック</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm">
              <tbody>
                {specRows.map(([k, v]) => (
                  <tr key={k} className="border-b border-g100">
                    <th scope="row" className="py-2 pr-3 text-left font-semibold text-g700 w-1/3">{k}</th>
                    <td className="py-2 text-g600">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">
            出典：みもり公式サイト（<a href="https://machicomi.jp/mimori/" target="_blank" rel="noopener noreferrer" className="text-blue underline">トップ</a>・<a href="https://machicomi.jp/mimori/spec.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">製品仕様</a>・<a href="https://machicomi.jp/mimori/terms_mmr.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">利用規約</a>）{CHECKED}確認。公式トップページでは対応OSを「iOS 15以降・Android 7以降」と記載していますが、本表は製品仕様ページの記載によります。料金・仕様は変更される場合があります。お申し込み前に、公式サイトにて最新情報をご確認ください。
          </p>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-3">
            {features.map((f) => (
              <div key={f.title} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-g600">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-g500 mb-8">出典：みもり公式サイト（{CHECKED}確認）、ドリームエリア株式会社 プレスリリース（2024年1月11日・2026年3月26日）。</p>

          {/* Pros & Cons */}
          <h2 className="section-title">選ぶ前に確認したい点</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">向いているご家庭</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・位置の確認に加えて、親子で音声のやりとりをしたい</li>
                <li>・不審者情報との連動など、防犯に関わる機能を重視したい</li>
                <li>・充電の手間を減らしたい（エコモードで最大2か月）</li>
                <li>・学校ではトークを止め、放課後に自動で戻したい</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">確認しておきたい点</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・本体3,800円はキャンペーン価格で、通常価格は公式に記載がありません</li>
                <li>・月額748円で、月額528円の機種（みてねみまもりGPS MG05・まもサーチ）より高くなります</li>
                <li>・重さ62g・厚さ22mmで、ポケット型の中では大きめです</li>
                <li>・解約した端末は再利用できません</li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          {/* CTA */}
          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">みもりGPSトークをご検討中の方へ</h2>
            <p className="text-g600 mb-6 text-sm">料金・機能を他の機種と比べたうえでお選びください。月額料金と本体価格の比較は料金比較ページにまとめています。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/price/" className="btn-primary">料金を比較する</Link>
              <Link href="/review/coneco/" className="btn-accent">次のレビュー: coneco（新規販売終了）</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
