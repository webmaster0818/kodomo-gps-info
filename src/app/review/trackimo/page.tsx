import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'トラッキモGPS（Trackimo）のレビュー｜料金・電池持ち・防水・特徴を解説【2026年】',
  description:
    'トラッキモGPS（Trackimo）を子供見守りの観点でレビューします。端末の購入費用に1年間の利用料が含まれ、2年目以降は年6,600円（税込）または月660円（税込）です。みちびき対応・最短1分間隔で位置を更新できるGPSトラッカーの電池持ちや防水性能を、公式情報（2026年11月3日確認）をもとに解説します。',
};

const SRC_TOP = 'https://www.trackimo-gps.co.jp/';
const SRC_UNIVERSAL = 'https://www.trackimo-gps.co.jp/?page_id=2855';
const SRC_SLIM = 'https://www.trackimo-gps.co.jp/?page_id=2156';
const SRC_PRODUCTS = 'https://www.trackimo-gps.co.jp/?page_id=1676';
const SRC_FAQ = 'https://www.trackimo-gps.co.jp/?page_id=345';
const SRC_DATASHEET = 'https://www.trackimo-gps.co.jp/trkm2023/wp/wp-content/uploads/2025/05/Trackimo-Universal-4GV1.pdf';

const faqData = [
  { q: 'トラッキモGPSは子供の見守りに使えますか？', a: '使えます。ただし、トラッキモは子供見守りの「専用機」ではなく、人・車両・船舶・荷物など幅広い用途を想定した汎用GPSトラッカーです。Universal 4G+のデータシートでは、利用例として車両・船舶・家族（Loved ones）・スタッフなどが挙げられています。位置確認とアラートを中心に使いたいご家庭に向いています（出典：トラッキモGPS公式 Universal 4G+データシート 2026年11月3日確認）。' },
  { q: '月額料金はいくらですか？', a: '端末の購入費用に1年間の利用料が含まれています（TrackiPetは3カ月分）。2年目以降は、年契約の場合6,600円（税込）、月次契約の場合660円（税込）で更新できます。更新はアプリの「リニューアル」ボタンから、クレジットカードまたはPayPalで手続きします。端末本体の価格は公式サイトに掲載されていないため、購入先の販売店でご確認ください（出典：トラッキモGPS公式 トップページ・FAQ 2026年11月3日確認）。' },
  { q: 'バッテリーはどれくらい持ちますか？', a: 'モデルと使い方によって大きく変わります。公式FAQでは、Universalモデルの待受時間を144時間としており、位置測位を頻繁に行うと電池の消耗が早くなると説明されています。Universal 4G+のデータシート（英語）では、稼働時間は最大12日間（動作モードや電波状況により変動）と記載されています。カード型のSlim 4G+は800mAhで最大16日間（利用環境により変化）です。別売の3,500mAhパワーパック（防水ケース一体）で延長することもできます。位置確認専用の国産機（最大1〜2カ月持つタイプ）と比べると、充電頻度は多くなる場合があります（出典：トラッキモGPS公式 FAQ・Slim 4G+製品ページ・データシート 2026年11月3日確認）。' },
  { q: '通話やメッセージはできますか？', a: '公式の製品仕様に、通話機能や音声・テキストメッセージ機能の記載はありません。端末にはSOSボタンがあり、Universalモデルでは4秒間押し続けるとSOSアラートが送信されます。お子さまと会話で連絡を取りたい場合は、通話対応の見守り端末やキッズケータイもあわせてご検討ください（出典：トラッキモGPS公式 FAQ 2026年11月3日確認）。' },
  { q: '防水ですか？学校に持って行けますか？', a: '公式FAQでは、TrackiProとSlimモデルは防水・防塵仕様、Universalモデルは防水ではないと案内されています。Universalモデルに付属するシリコン製カバーも防水ではなく、オプションのパワーアップ＆防水ケースが用意されています。防水等級はSlim 4G+がIP67、TrackiPro 4G+がIP68です。持ち込みの規則は学校ごとに異なるため、事前にご確認ください（出典：トラッキモGPS公式 トップページ・FAQ 2026年11月3日確認）。' },
  { q: '契約や解約の縛りはありますか？', a: '購入費用に1年間の利用料が含まれ、2年目以降は年契約または月次契約で更新します。解約はウェブアプリやスマホアプリからはできず、端末ID番号を添えてサポート（support@trackimo-gps.co.jp）へ連絡する方式です。解約すると過去の履歴は閲覧できなくなります。詳細な条件は購入前に公式サイトでご確認ください（出典：トラッキモGPS公式 FAQ 2026年11月3日確認）。' },
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

export default function TrackimoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "トラッキモGPS（Trackimo）のレビュー｜料金・電池持ち・防水・特徴を解説", "datePublished": "2026-07-02", "dateModified": "2026-11-03", "author": {"@type": "Organization", "name": "子供見守りGPS最新情報 編集部", "url": "https://gps-kodomo.com/"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "トラッキモGPS（Trackimo）", "brand": {"@type": "Brand", "name": "Trackimo"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'トラッキモGPS（Trackimo）' }]} />

      {/* Hero */}
      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">購入型</span>
            <span className="tag-pill bg-orange text-white">1年間の利用料込み</span>
            <span className="tag-pill bg-green text-white">2026年11月3日 確認</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            トラッキモGPS（Trackimo）のレビュー
          </h1>
          <p className="text-g600 text-lg">株式会社トラッキモGPS | 汎用GPSトラッカー | みちびき対応・最短1分間隔の位置更新</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          {/* 位置づけの注意 */}
          <div className="card-hover p-6 mb-8 bg-blue-light/50 border-l-4 border-blue rounded-xl">
            <h2 className="font-extrabold text-g800 mb-2">トラッキモは「子供専用」ではなく汎用GPSトラッカー</h2>
            <p className="text-sm text-g700">
              トラッキモGPS（Trackimo）は、人・車両・船舶・荷物など幅広い対象に使える汎用のGPSトラッカーです。
              みてねみまもりGPSやまもサーチのような「子供見守り専用」に設計された製品ではありません。
              公式の製品仕様に通話・音声メッセージ機能の記載はなく、位置確認とアラート（ジオフェンス・移動開始・SOSボタン・電池残量など）が中心です。
              「通話やメッセージは不要で、位置が分かればよい」「端末を購入して長く使いたい」とお考えのご家庭には、選択肢の一つとなります。
              <span className="text-g500">（出典：トラッキモGPS公式 2026年11月3日確認）</span>
            </p>
          </div>

          {/* Overview */}
          <h2 className="section-title">トラッキモGPSとは</h2>
          <p className="text-g600 mb-6">
            トラッキモ（Trackimo）は、公式サイトによると世界160以上の国や地域で利用されているGPSトラッカーのブランドです。日本では株式会社トラッキモGPSが取り扱い、基本的に代理店経由で販売しています。
            大きな特徴は、端末の購入費用に1年間の利用料が含まれている点です。2年目以降は年6,600円（税込）または月660円（税込）で更新します。
            月額課金のサブスク型が多い子供見守りGPSの中で、初期費用をまとめて支払い、2年目以降は更新料で継続するという料金体系が異なります。
            みちびき（準天頂衛星）を含む衛星測位にWi-Fi・携帯電話基地局による測位を組み合わせ、リアルタイム追跡、ジオフェンス、最大1年間の移動履歴などの機能を備えています。
            <span className="text-g500 text-sm">（出典：トラッキモGPS公式 トップページ・FAQ 2026年11月3日確認）</span>
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック（Universal 4G+）</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', '株式会社トラッキモGPS（代理店経由で販売）'],
                    ['料金体系', '購入型／購入費用に1年間の利用料を含む'],
                    ['2年目以降', '年6,600円（税込）または月660円（税込）'],
                    ['本体価格', '公式サイトに掲載なし（販売店で確認）'],
                    ['通信方式', 'LTE Cat.1（ドコモ・ソフトバンクのLTEにローミング）'],
                    ['測位方式', 'GPS・GLONASS・BeiDou・みちびき（AGPS対応）＋Wi-Fi・基地局'],
                    ['更新間隔', '最短1分（標準契約）'],
                    ['履歴', '最大1年間・CSV出力可'],
                    ['ジオフェンス', '1台あたり最大5カ所（ポリゴンゾーンは無制限）'],
                    ['防水', '防水ではない（防水ケースは別売）'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-g100">
                      <td className="py-2 font-semibold text-g700 w-1/3">{k}</td>
                      <td className="py-2 text-g600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-g400 mt-2">※更新間隔の上限は、製品ページでは最大120分、FAQでは標準契約で最大4時間と記載されています。料金・仕様は変更される場合があります。購入前に公式サイトでご確認ください（2026年11月3日確認）。</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">主なモデル</h3>
              <div className="space-y-3">
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">Universal 4G+（TRKM010-C）</p>
                  <p className="text-sm text-g600 mt-1">公式で「最新ベストセラーモデル」とされている機種で、2025年5月下旬に発売されました。600mAh・約42g・47×40×17mmです。公式FAQではUniversalモデルの待受時間を144時間、データシートでは稼働時間を最大12日間（動作モードや電波状況により変動）としています。防水ではなく、別売の3,500mAhパワーパック（防水ケース一体）があります。</p>
                </div>
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">Slim 4G+（TRKM035-C）</p>
                  <p className="text-sm text-g600 mt-1">Slim 4G（TRKM035）の後継となるカード型の薄型モデルで、2026年10月に発売されました。800mAh・44g・86×54×6.5mmで、IP67の防水・防塵に対応しています。バッテリーは最大16日間（利用環境により変化）で、光センサーを内蔵しています。</p>
                </div>
              </div>
              <p className="text-xs text-g400 mt-2">※Universal 4G+の重量は、製品ページとデータシートでは約42g、製品案内ページでは約47gと記載されています。このほか、10,000mAhの大容量バッテリーを搭載したTrackiPro 4G+（約240g・IP68）があります。3G対応の旧機種は、2026年3月31日のドコモ3G終了にともない利用できなくなっています。</p>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '', title: 'リアルタイム追跡', desc: '位置の更新間隔を最短1分から設定し、スマホアプリやパソコンから現在地を確認できます。' },
              { icon: '', title: 'みちびき対応の測位', desc: 'GPS衛星で主に測位し、捕捉できない場合はWi-Fi、さらに携帯電話の電波で位置を推定します。上空が開けた場所での精度は5〜20m以下とされています。' },
              { icon: '', title: 'ジオフェンス', desc: '四角形のジオフェンスゾーンを1台あたり最大5カ所、ポリゴンゾーンを無制限に設定でき、出入りをメール等で通知します。' },
              { icon: '', title: '移動履歴', desc: '最大1年間の移動履歴を保存・閲覧でき、CSV形式で出力できます。' },
              { icon: '', title: 'SOSボタン・電池残量通知', desc: 'SOSボタンでアラートを送信できます。電池残量が10%になると、メールやショートメールで通知する設定も可能です。' },
              { icon: '', title: '1年間の利用料込み', desc: '購入費用に1年間の利用料が含まれます。2年目以降は年契約または月次契約で更新します。' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-g600">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Pros & Cons */}
          <h2 className="section-title">メリット・デメリット（子供見守り視点）</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・購入費用に1年間の利用料が含まれ、2年目以降は年6,600円（税込）で継続できます</li>
                <li>・みちびきを含む衛星測位とWi-Fi・基地局測位を組み合わせて位置を確認できます</li>
                <li>・更新間隔を最短1分から設定でき、リアルタイム性を調整できます</li>
                <li>・子供・高齢者・車など、1台を幅広い用途で使えます</li>
                <li>・Slim 4G+はIP67対応の薄型カード型です</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・子供見守りの「専用機」ではなく、汎用トラッカーです</li>
                <li>・公式仕様に通話・音声メッセージ機能の記載はありません</li>
                <li>・位置測位を頻繁に行うと電池の消耗が早くなります</li>
                <li>・Universal 4G+は防水ではなく、雨天時などは別売の防水ケースが必要です</li>
                <li>・解約はアプリからできず、サポートへの連絡が必要です</li>
              </ul>
            </div>
          </div>

          {/* 向く人 */}
          <h2 className="section-title">向いている方・向かない方</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-2">向いている方</h3>
              <ul className="space-y-1 text-sm text-g700">
                <li>・位置確認ができればよい方（通話・メッセージは不要）</li>
                <li>・毎月の課金より、端末購入時にまとめて支払いたい方</li>
                <li>・子供以外（車・高齢者など）にも1台を使い回したい方</li>
                <li>・移動履歴をCSVで保存・活用したい方</li>
              </ul>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange mb-2">向かない方</h3>
              <ul className="space-y-1 text-sm text-g700">
                <li>・お子さまと音声/メッセージで連絡を取りたい方</li>
                <li>・充電の手間をできるだけ減らしたい方（1〜2カ月の電池持ちを希望）</li>
                <li>・子供見守り専用のアプリや機能を重視する方</li>
                <li>・初期費用を抑え、少額の月額料金で始めたい方</li>
              </ul>
            </div>
          </div>

          {/* 出典 */}
          <h2 className="section-title">出典（公式情報）</h2>
          <ul className="space-y-1 text-sm text-g600 mb-2">
            <li>・<a href={SRC_TOP} target="_blank" rel="noopener noreferrer" className="text-blue underline">トラッキモGPS公式 トップページ</a>（1年間の利用料込み・防水等級・新着情報）</li>
            <li>・<a href={SRC_UNIVERSAL} target="_blank" rel="noopener noreferrer" className="text-blue underline">Universal 4G+（TRKM010-C）製品ページ</a>（サイズ・重量・通信方式・GNSS）</li>
            <li>・<a href={SRC_DATASHEET} target="_blank" rel="noopener noreferrer" className="text-blue underline">Universal 4G+ データシート（PDF・英語）</a>（稼働時間・履歴・SOS）</li>
            <li>・<a href={SRC_SLIM} target="_blank" rel="noopener noreferrer" className="text-blue underline">Slim 4G+（TRKM035-C）製品ページ</a>（仕様・更新間隔・ジオフェンス・履歴）</li>
            <li>・<a href={SRC_PRODUCTS} target="_blank" rel="noopener noreferrer" className="text-blue underline">製品案内</a>（モデル一覧・販売終了品）</li>
            <li>・<a href={SRC_FAQ} target="_blank" rel="noopener noreferrer" className="text-blue underline">FAQ（標準）</a>（更新料・電池・防水・測位・ゾーン・購入・解約）</li>
          </ul>
          <p className="text-xs text-g400 mb-8">※いずれも2026年11月3日に確認しました。料金・仕様は変更される場合があるため、購入前に公式サイトで最新情報をご確認ください。</p>

          {/* FAQ */}
          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          {/* 内部リンク */}
          <h2 className="section-title mt-10">関連する比較・レビュー</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              { href: '/compare/cost/', label: '料金・コストで比較する' },
              { href: '/compare/battery-life/', label: '電池持ちで比較する' },
              { href: '/compare/2026-ranking/', label: '2026年 総合ランキング' },
              { href: '/compare/school-silent/', label: '学校に持ち込みやすい静音モデル比較' },
              { href: '/compare/school-trip/', label: '修学旅行・校外学習で使えるGPS比較' },
              { href: '/compare/after-school/', label: '習い事・学童の送迎見守り比較' },
              { href: '/review/mamosearch/', label: 'まもサーチ（子供見守り専用機）レビュー' },
              { href: '/review/mitene/', label: 'みてねみまもりGPS レビュー' },
              { href: '/review/soranome/', label: 'ソラノメ レビュー（販売終了）' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="card-hover p-4 flex items-center justify-between text-sm font-semibold text-blue">
                <span>{l.label}</span>
                <span aria-hidden>→</span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">位置確認中心で長く使いたい方へ</h2>
            <p className="text-g600 mb-6 text-sm">通話やメッセージが必要な場合は、他のタイプもあわせてご検討ください。目的に合った1台を選ぶことをおすすめします。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/mamosearch/" className="btn-accent">次のレビュー: まもサーチ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
