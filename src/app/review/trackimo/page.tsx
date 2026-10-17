import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'トラッキモGPS（Trackimo）の口コミ・評判は？料金・電池持ち・特徴を解説【2026年】',
  description:
    'トラッキモGPS（Trackimo）を子供見守りの観点でレビューします。買取型で1年分の通信費を含み、2年目以降は年間6,000円程度です。みちびき・リアルタイム追跡に対応する汎用GPSトラッカーで、電池持ちや通話の可否も公式/正規代理店の情報（2026年7月確認）にもとづいて解説します。',
};

const faqData = [
  { q: 'トラッキモGPSは子供の見守りに使えますか？', a: '使えます。ただし、トラッキモは子供見守りの「専用機」ではなく、子供・高齢者・車・ペットなど幅広い用途に対応する汎用GPSトラッカーです。正規代理店の商品説明でも、用途の一つとして「子供」「見守り」が挙げられています。子供専用アプリや音声メッセージ機能はないため、位置確認を中心に使いたいご家庭に向いています（出典：トラッキモGPS公式・正規代理店 2026年7月確認）。' },
  { q: '月額料金はいくらですか？', a: '本体購入価格に1年分の通信費が含まれる「買取型（返却不要）」です。ベストセラーのUniversal 4G+（TRKM010-C）は、正規代理店で19,789円（税込）程度です（時期により変動します）。2年目以降は年間6,000円程度の通信費で継続利用できます。一般的な子供見守りGPS（月額500〜750円前後）と比べると初期費用は高めですが、2年目以降の月あたりの負担を抑えられる場合があります（出典：正規代理店 IDA-Online 2026年7月確認・価格は要確認）。' },
  { q: 'バッテリーはどれくらい持ちますか？', a: 'モデルと更新間隔によって大きく変わります。Universal 4G+（600mAh）はトラッキング間隔1分で約2日で、間隔を長くすればさらに延長できます。別売のバッテリーパックによる延長も可能です。カード型のSlim 4G（800mAh）は、待受で144時間以上（約6日）とされています。位置確認専用の国産機（最大1〜2カ月持つタイプ）と比べると、充電頻度は多くなります（出典：トラッキモGPS公式 2026年7月確認）。' },
  { q: '通話やメッセージはできますか？', a: 'できません。トラッキモは位置追跡に特化したGPSトラッカーで、通話機能や子供との音声・テキストメッセージ機能は搭載していません。お子さまと連絡を取りたい場合は、ボイスメッセージ対応機やキッズケータイなど、別タイプのご検討をおすすめします。' },
  { q: '防水ですか？学校に持って行けますか？', a: 'カード型のSlim 4GはIP67の防水防塵に対応しています。Universal 4G+は付属の防水ボックスで対応します。ただし、本体は汎用トラッカーのため、ランドセルへの入れやすさやサイズ感は国産の子供向けGPSとは異なります。持ち込みの規則は学校ごとに異なるため、事前にご確認ください。' },
  { q: '契約や解約の縛りはありますか？', a: '買取型（返却不要）で、1年分の通信費が本体価格に含まれます。2年目以降は、通信費を支払って継続するか、不要になれば継続しないかを選べます。月額契約タイプのような解約手続きの考え方とは異なります（詳細な契約条件は購入前に公式・代理店でご確認ください）。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "トラッキモGPS（Trackimo）の口コミ・評判は？料金・電池持ち・特徴を解説", "datePublished": "2026-07-02", "dateModified": "2026-07-02", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "トラッキモGPS（Trackimo）", "brand": {"@type": "Brand", "name": "Trackimo"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'トラッキモGPS（Trackimo）' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">買取型・返却不要</span>
            <span className="tag-pill bg-orange text-white">1年通信費込み</span>
            <span className="tag-pill bg-green text-white">2026年7月 確認</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            トラッキモGPS（Trackimo）のレビュー
          </h1>
          <p className="text-g600 text-lg">Trackimo提供 | 汎用GPSトラッカー | みちびき対応・リアルタイム追跡</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          {/* 位置づけの注意 */}
          <div className="card-hover p-6 mb-8 bg-blue-light/50 border-l-4 border-blue rounded-xl">
            <h2 className="font-extrabold text-g800 mb-2">トラッキモは「子供専用」ではなく汎用GPSトラッカー</h2>
            <p className="text-sm text-g700">
              トラッキモGPS（Trackimo）は、子供・高齢者・車・ペットなど幅広い対象に使える汎用のGPSトラッカーです。
              みてねみまもりGPSやまもサーチのような「子供見守り専用」に最適化された製品ではありません。
              子供向け専用アプリ・音声メッセージ・防犯ブザーといった機能はなく、位置確認とアラートが中心です。
              「通話やメッセージは不要で、位置が分かればよい」「買取型で長く使いたい」とお考えのご家庭には、選択肢の一つとなります。
              <span className="text-g500">（出典：トラッキモGPS公式・正規代理店 2026年7月確認）</span>
            </p>
          </div>

          {/* Overview */}
          <h2 className="section-title">トラッキモGPSとは</h2>
          <p className="text-g600 mb-6">
            トラッキモGPS（Trackimo）は、世界的に展開されているGPSトラッカーブランドで、日本では正規代理店を通じて販売されています。
            大きな特徴は「買取型（返却不要）」で、本体価格に1年分の通信費が含まれている点です。
            月額課金のサブスク型が多い子供見守りGPSの中で、初期費用をまとめて支払い、2年目以降は年間の通信費で継続するという料金体系が異なります。
            みちびき（準天頂衛星）を含む複数の測位方式に対応し、リアルタイム追跡やエリア通知（ジオフェンス）、移動履歴などの機能を備えています。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック（代表モデル）</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'Trackimo（日本は正規代理店販売）'],
                    ['料金体系', '買取型／1年通信費込み'],
                    ['2年目以降', '年間6,000円程度（要確認）'],
                    ['本体価格', 'Universal 4G+ 約19,789円（税込・変動）'],
                    ['測位方式', 'GPS+GLONASS+BeiDou+みちびき+Wi-Fi/基地局'],
                    ['更新間隔', '1分〜120分で設定可'],
                    ['通話・音声', '非対応'],
                    ['防水', 'Slim 4GはIP67／Universalは防水ボックス'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-g100">
                      <td className="py-2 font-semibold text-g700 w-1/3">{k}</td>
                      <td className="py-2 text-g600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-g400 mt-2">※価格・通信費は時期や販売店で変動します。購入前に公式・代理店でご確認ください。</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">主なモデル</h3>
              <div className="space-y-3">
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">Universal 4G+（TRKM010-C）</p>
                  <p className="text-sm text-g600 mt-1">ベストセラーモデルです。600mAh・約47g・約47×40×17mmで、省電力に対応しています。防水ボックスが付属します。</p>
                </div>
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">Slim 4G（TRKM035）</p>
                  <p className="text-sm text-g600 mt-1">薄型のカード型です。800mAh・約44g・約86×54×6.5mmで、IP67防水に対応しています。待受は144時間以上です。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '📍', title: 'リアルタイム追跡', desc: '更新間隔を1〜120分で設定し、アプリから現在地を確認できます。' },
              { icon: '🌏', title: 'みちびき対応の測位', desc: 'GPS+GLONASS+BeiDou+みちびきに加え、Wi-Fi/基地局測位に対応しています。' },
              { icon: '🔔', title: 'エリア通知', desc: '設定したエリアへの出入りや移動を検知して通知します（アラート機能）。' },
              { icon: '📝', title: '移動履歴', desc: '過去の移動履歴を確認できます。CSV出力に対応するモデルもあります。' },
              { icon: '🔋', title: '低電池通知', desc: 'バッテリー残量が少なくなると通知します。充電忘れの防止に役立ちます。' },
              { icon: '📦', title: '買取型・返却不要', desc: '本体価格に1年分の通信費が含まれます。返却不要で長く使えます。' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
                <p className="text-2xl mb-2">{f.icon}</p>
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
                <li>・買取型で1年分の通信費を含み、2年目以降は年間の通信費で継続できます</li>
                <li>・みちびきを含む複数の測位方式で、屋外での位置精度が期待できます</li>
                <li>・更新間隔を細かく設定でき、リアルタイム性を調整できます</li>
                <li>・子供・高齢者・車など、1台を幅広い用途で使えます</li>
                <li>・Slim 4GはIP67対応の薄型カード型です</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・子供見守りの「専用機」ではなく、汎用トラッカーです</li>
                <li>・通話・音声メッセージ・防犯ブザーには対応していません</li>
                <li>・電池持ちは更新間隔によって変わり、国産専用機より充電頻度が多くなります</li>
                <li>・初期費用（本体）は月額サブスク型より高めです</li>
                <li>・子供向けに最適化された専用UI/カバー等は少なくなっています</li>
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
                <li>・毎月の課金より、買取型でまとめて支払いたい方</li>
                <li>・子供以外（車・高齢者など）にも1台を使い回したい方</li>
                <li>・みちびき対応の測位を重視したい方</li>
              </ul>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange mb-2">向かない方</h3>
              <ul className="space-y-1 text-sm text-g700">
                <li>・お子さまと音声/メッセージで連絡を取りたい方</li>
                <li>・充電の手間をできるだけ減らしたい方（1〜2カ月の電池持ちを希望）</li>
                <li>・子供専用の使いやすいアプリやカバーを重視する方</li>
                <li>・初期費用を抑え、少額の月額料金で始めたい方</li>
              </ul>
            </div>
          </div>

          {/* 口コミ傾向（創作なし） */}
          <h2 className="section-title">口コミ・評判の傾向</h2>
          <p className="text-g600 mb-4 text-sm">
            トラッキモは家電レビューサイトや通販サイトで扱われており、公開情報から読み取れる傾向は次のとおりです（個人を特定する実名や星評価を伴う口コミは掲載しておりません）。
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="card-hover p-5">
              <h3 className="font-bold text-green-dark text-sm mb-2">好意的に語られやすい点</h3>
              <p className="text-sm text-g600">買取型で返却不要な点、みちびき対応や更新間隔を細かく設定できる自由度、子供以外の用途にも使える汎用性が評価されやすい傾向です。</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange-dark text-sm mb-2">指摘されやすい点</h3>
              <p className="text-sm text-g600">更新間隔を短くすると電池の減りが早い点、初期費用が月額型より高い点、子供専用UI/音声機能がない点が、子供見守りの目的では気になりやすいと指摘されています。</p>
            </div>
          </div>
          <p className="text-xs text-g400 mb-8">
            ※上記は公式・正規代理店の公開仕様、および一般的なレビュー記事の論調をもとにした要約です。数値・料金は時期により変動するため、購入前に公式・代理店で最新情報をご確認ください（2026年7月確認）。
          </p>

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
          <div className="mt-6 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
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
