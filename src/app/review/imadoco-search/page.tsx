import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'イマドコサーチ（ドコモ）の口コミ・評判は？料金・電池持ち・特徴を解説【2026年】',
  description:
    'ドコモのイマドコサーチを子供見守り視点で徹底レビュー。月額料金・対応端末（キッズケータイ／Androidスマホ）・親がドコモ以外でも使えるか・専用GPS端末ではない点まで公式情報（2026年7月確認）で解説。GPS単体端末との違いも整理します。',
};

const faqData = [
  { q: 'イマドコサーチは専用のGPS端末ですか？', a: 'いいえ。イマドコサーチはドコモが提供する「位置検索サービス」で、専用のGPS端末ではありません。見守られるお子さまがドコモのキッズケータイやAndroidスマートフォンを持っていることが前提で、その端末の位置を保護者のスマホから地図で確認できる仕組みです。みてねみまもりGPSやまもサーチのような単体GPS端末とは種類が異なります（出典：ドコモ公式 2026年7月確認）。' },
  { q: '月額料金はいくらですか？', a: 'イマドコサーチの料金は公式で月額330円（税込）と案内されており、新規契約後31日間は無料で利用できます。なお、キッズケータイ向けのオプションとして月額220円（税込）と案内されるケースもあり、対象や申込方法で条件が異なる場合があります。正確な金額は申込前にドコモ公式で必ずご確認ください（出典：ドコモ公式 2026年7月確認・要確認）。' },
  { q: '見守る保護者もドコモ回線が必要ですか？', a: '必要ありません。2023年12月以降、保護者側がドコモ以外（ahamo・格安SIM・他社キャリアなど）でもイマドコサーチが利用できるようになりました。利用にはdアカウントが必要です。見守られるお子さま側はドコモ回線の対象端末を利用していることが基本です（出典：ドコモ公式 2026年7月確認）。' },
  { q: '対応している端末は何ですか？', a: 'ドコモのキッズケータイ（KY-41C、スマートウォッチ型のキッズケータイ コンパクト SK-41Dなど）やAndroidスマートフォンに対応します（SH-03Mは生産終了）。防犯ブザー連動通知など一部機能は対応端末に限られます。iPhoneなど対象外の端末では利用できないため、事前に対応端末をご確認ください（出典：ドコモ公式 2026年7月確認）。' },
  { q: '電池持ちはどれくらいですか？', a: 'イマドコサーチ自体はサービスのため電池持ちは持ちません。実際の充電頻度は使うキッズケータイやスマートフォンの機種に依存します。位置確認専用のGPS端末（最大1〜2ヶ月持つタイプ）と違い、通話もできるキッズケータイ/スマホは基本的に日〜数日単位の充電が必要です。' },
  { q: '通話やメッセージはできますか？', a: 'イマドコサーチ自体は位置検索サービスですが、対応するキッズケータイやスマートフォンを使うため、端末側の機能で通話やメッセージ（SMS等）が可能です。位置検索と通話を1台でまとめたい家庭に向きます。逆に「持たせるのは小さなGPSだけでよい」場合は単体GPS端末のほうが適しています。' },
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

export default function ImadocoSearchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "イマドコサーチ（ドコモ）の口コミ・評判は？料金・電池持ち・特徴を解説", "datePublished": "2026-07-02", "dateModified": "2026-07-17", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "イマドコサーチ", "brand": {"@type": "Brand", "name": "NTTドコモ"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "レビュー", "item": "https://gps-kodomo.com/review/"}, {"@type": "ListItem", "position": 3, "name": "イマドコサーチ", "item": "https://gps-kodomo.com/review/imadoco-search/"}]}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/#ranking' }, { name: 'イマドコサーチ（ドコモ）' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">ドコモの位置検索</span>
            <span className="tag-pill bg-blue text-white">キッズケータイ対応</span>
            <span className="tag-pill bg-green text-white">2026年7月 確認</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            イマドコサーチ（ドコモ）徹底レビュー
          </h1>
          <p className="text-g600 text-lg">NTTドコモ提供 | 位置検索サービス | キッズケータイ／Androidスマホ向け</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          {/* 結論box */}
          <div className="rounded-2xl border-l-4 border-orange bg-orange-light/40 p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：イマドコサーチは「単体GPS」ではなく、ドコモのキッズケータイ／Androidの位置を見守るサービス。通話も1台でまとめたい家庭向き</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>強み</strong>：位置確認と<strong>通話を1台</strong>のキッズケータイ/スマホでまかなえる。大手キャリアの安心感。<strong>保護者はドコモ以外の回線でも利用可</strong>（dアカウント要）</li>
              <li>・<strong>弱み</strong>：<strong>単体GPS端末ではなく</strong>対応端末＋回線契約が前提。電池持ちは端末次第でGPS専用機ほど長くない。<strong>iPhoneなど対象外端末では不可</strong></li>
              <li>・<strong>料金</strong>：月額<strong>330円（税込）</strong>・新規31日間無料（キッズケータイ向けに月額220円の案内もあり／対象・申込方法で条件が異なるため要確認）</li>
              <li>・<strong>運営</strong>：NTTドコモ（位置検索サービス＝オプション）</li>
              <li>・<strong>向く人</strong>：位置確認と通話を1台にまとめたい／ドコモのキッズケータイを検討中。<strong>向かない人</strong>：小さなGPSだけ安く持たせたい／充電の手間を極力減らしたい家庭</li>
            </ul>
            <p className="text-xs text-g500 mt-3">出典：ドコモ公式（2026年7月確認）。料金・対応端末・条件は変更される場合があるため申込前に公式で必ずご確認ください。<Link href="/#ranking" className="text-orange underline">他機種との比較ランキングはこちら</Link></p>
          </div>

          {/* 位置づけの注意 */}
          <div className="card-hover p-6 mb-8 bg-blue-light/50 border-l-4 border-blue rounded-xl">
            <h2 className="font-extrabold text-g800 mb-2">イマドコサーチは「端末」ではなく位置検索サービス</h2>
            <p className="text-sm text-g700">
              イマドコサーチは、ドコモのキッズケータイやAndroidスマートフォンの位置を、保護者のスマホから地図で確認できる
              「位置検索サービス（オプション）」です。単体で持たせる小型GPS端末（みてねみまもりGPS・まもサーチ等）とは種類が異なります。
              「通話もできる端末を持たせたい」「すでにドコモのキッズケータイを検討している」家庭に向く一方、
              「小さなGPSだけを持たせたい」場合は単体GPS端末のほうが適しています。
              <span className="text-g500">（出典：ドコモ公式 2026年7月確認）</span>
            </p>
          </div>

          {/* Overview */}
          <h2 className="section-title">イマドコサーチとは</h2>
          <p className="text-g600 mb-6">
            イマドコサーチは、NTTドコモが提供する子ども見守り向けの位置検索サービスです。
            見守られるお子さまがドコモのキッズケータイやAndroidスマートフォンを持っていれば、
            保護者のスマホからワンタップで現在地を地図表示できます。移動経路の確認や防犯ブザーとの連動通知などにも対応します。
            2026年時点でも提供中で、保護者側がドコモ以外の回線でも利用できる点、
            Android向けに衛星測位（docomo Starlink Direct）が始まった点などが特徴です。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本情報</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'NTTドコモ'],
                    ['種類', '位置検索サービス（オプション）'],
                    ['月額料金', '330円（税込）※31日間無料・要確認'],
                    ['見守り対象端末', 'キッズケータイ／Androidスマホ'],
                    ['保護者側の回線', 'ドコモ以外でも可（dアカウント要）'],
                    ['主な機能', '位置検索／移動経路／ブザー連動通知'],
                    ['通話・メッセージ', '端末側の機能で可能'],
                    ['提供状況', '2026年時点で提供中'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-g100">
                      <td className="py-2 font-semibold text-g700 w-2/5">{k}</td>
                      <td className="py-2 text-g600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-g400 mt-2">※料金・条件は変更される場合があります。申込前にドコモ公式で最新情報をご確認ください。</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">対応するキッズケータイ（例）</h3>
              <div className="space-y-3">
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">キッズケータイ KY-41C</p>
                  <p className="text-sm text-g600 mt-1">通話・SMS対応のキッズケータイ。イマドコサーチで位置確認が可能。</p>
                </div>
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">キッズケータイ コンパクト SK-41D</p>
                  <p className="text-sm text-g600 mt-1">スマートウォッチ型。腕に着けられるタイプ。SH-03Mは生産終了。</p>
                </div>
              </div>
              <p className="text-xs text-g400 mt-2">※対応端末・在庫はドコモ公式でご確認ください。</p>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '📍', title: '位置検索', desc: '保護者のスマホからお子さまの現在地を地図で確認。' },
              { icon: '🗺️', title: '移動経路の確認', desc: '移動した経路をたどって確認できる。' },
              { icon: '🆘', title: '防犯ブザー連動通知', desc: '対応端末の防犯ブザー作動と連動して通知（対応端末のみ）。' },
              { icon: '📶', title: 'ドコモ以外でも利用可', desc: '見守る保護者はドコモ以外の回線でもOK（dアカウント要）。' },
              { icon: '🛰️', title: '衛星測位に対応（Android）', desc: 'Android向けにdocomo Starlink Directによる衛星測位も開始。' },
              { icon: '☎️', title: '通話もできる端末', desc: 'キッズケータイ/スマホなので位置確認＋通話を1台でまかなえる。' },
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
                <li>・位置確認と通話を1台のキッズケータイ/スマホでまかなえる</li>
                <li>・大手キャリアの安心感とサポート</li>
                <li>・保護者がドコモ以外の回線でも利用できる</li>
                <li>・防犯ブザー連動通知に対応（対応端末）</li>
                <li>・Android向けに衛星測位も利用可能に</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・単体GPS端末ではなく、対応端末＋回線契約が前提</li>
                <li>・小型GPSだけ持たせたい家庭にはオーバースペック</li>
                <li>・電池持ちは端末次第で、GPS専用機ほど長くはない</li>
                <li>・iPhone等の対象外端末では利用できない</li>
                <li>・端末代・回線料と合わせるとコストは上がりやすい</li>
              </ul>
            </div>
          </div>

          {/* 向く人 */}
          <h2 className="section-title">向く人・向かない人</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-2">向いている人</h3>
              <ul className="space-y-1 text-sm text-g700">
                <li>・位置確認と通話を1台にまとめたい</li>
                <li>・ドコモのキッズケータイを検討している</li>
                <li>・大手キャリアの見守りで安心感を重視</li>
                <li>・保護者がドコモ以外の回線を使っている</li>
              </ul>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange mb-2">向かない人</h3>
              <ul className="space-y-1 text-sm text-g700">
                <li>・小さなGPS端末だけを安く持たせたい</li>
                <li>・充電の手間を極力減らしたい（1〜2ヶ月持ち希望）</li>
                <li>・キャリアや端末を問わず使いたい</li>
                <li>・iPhoneで見守られる側を運用したい</li>
              </ul>
            </div>
          </div>

          {/* 口コミ傾向（創作なし） */}
          <h2 className="section-title">口コミ・評判の傾向</h2>
          <p className="text-g600 mb-4 text-sm">
            イマドコサーチは大手キャリアの定番サービスとして各所で紹介されています。公開情報から読み取れる傾向は次のとおりです（個人を特定する実名・星評価つきの口コミは掲載していません）。
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="card-hover p-5">
              <h3 className="font-bold text-green-dark text-sm mb-2">好意的に語られやすい点</h3>
              <p className="text-sm text-g600">キッズケータイと組み合わせて位置確認と通話を1台で完結できる点、大手キャリアの安心感、保護者がドコモ以外でも使える柔軟さが評価されやすい傾向です。</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange-dark text-sm mb-2">指摘されやすい点</h3>
              <p className="text-sm text-g600">端末代＋回線料＋オプションでトータルの費用が上がりやすい点、単体GPSより充電頻度が多い点が、コストや手軽さを重視する家庭では気になりやすいと指摘されます。</p>
            </div>
          </div>
          <p className="text-xs text-g400 mb-8">
            ※上記はドコモ公式の案内および一般的な解説記事の論調をもとにした要約です。料金・対応端末・提供条件は変更される場合があるため、申込前にドコモ公式で最新情報を必ずご確認ください（2026年7月確認）。
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
              { href: '/review/kids-phone/', label: 'キッズケータイ（見守り）レビュー' },
              { href: '/review/hamic/', label: 'Hamic（通話できる見守り）レビュー' },
              { href: '/review/mitene/', label: 'みてねみまもりGPS レビュー' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="card-hover p-4 flex items-center justify-between text-sm font-semibold text-blue">
                <span>{l.label}</span>
                <span aria-hidden>→</span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">位置確認と通話をまとめたい方へ</h2>
            <p className="text-g600 mb-6 text-sm">小型GPSだけで十分なら単体端末も比較を。目的別に最適な見守り方を選びましょう。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/kids-phone/" className="btn-accent">次のレビュー: キッズケータイ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
