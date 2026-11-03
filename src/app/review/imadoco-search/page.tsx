import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'イマドコサーチ（ドコモ）の口コミ・評判は？料金・電池持ち・特徴を解説【2026年】',
  description:
    'ドコモのイマドコサーチを、子供の見守りという観点からレビューします。月額料金、対応端末（キッズケータイ／Androidスマートフォン／iPhone）、保護者がドコモ以外でも使えるか、専用GPS端末ではない点までを公式情報（2026年11月確認）にもとづいて解説し、GPS単体端末との違いも整理します。',
};

const faqData = [
  { q: 'イマドコサーチの口コミで多い不満は何に注意すればいいですか？', a: '基本の「いますぐ検索」は、保護者が検索するたびに居場所を確認する仕組みです。指定した時間帯・間隔で自動で位置を記録する「ちょい前かくにん」もありますが、SH-03M・iPhoneなど非対応の端末があります（出典：イマドコサーチ公式 対応機種 2026年11月確認）。位置の記録方法と更新の間隔は、口コミを読む際に特に注目すべき点です。常時追跡型（みてね・あんしんウォッチャー等の専用端末）とは仕組みが異なるため、比較検討する場合は、当サイトの比較ページで方式の違いから確認することをおすすめします。' },
  { q: 'イマドコサーチは専用のGPS端末ですか？', a: 'いいえ。イマドコサーチはドコモが提供する「位置検索サービス」で、専用のGPS端末ではありません。見守られるお子さまがドコモ回線のキッズケータイ・スマートフォン（Android・iPhone）などを持っていることが前提で、その端末の位置を保護者のスマートフォンから地図で確認できる仕組みです。みてねみまもりGPSやまもサーチのような単体GPS端末とは種類が異なります（出典：ドコモ公式 2026年11月確認）。' },
  { q: '月額料金はいくらですか？', a: 'イマドコサーチの料金は、公式で月額330円（税込）と案内されており、新規契約後31日間は無料で利用できます。月額使用料は見守る方にのみかかります。正確な金額は、お申し込み前にドコモ公式サイトにて必ずご確認ください（出典：ドコモ公式 2026年11月確認）。' },
  { q: '見守る保護者もドコモ回線が必要ですか？', a: '必要ありません。公式のよくある質問では、保護者がドコモ以外の回線でも利用でき、お子さまのドコモ回線に紐づいたdアカウントで申し込むと案内されています。見守られるお子さま側は、ドコモ回線の契約が必要です。見守る相手は5人まで登録できます（出典：ドコモ公式 2026年11月確認）。' },
  { q: '対応している端末は何ですか？', a: 'ドコモのキッズケータイ（キッズケータイ コンパクト SK-41D・KY-41C・SH-03M）、Androidスマートフォン・タブレット、iPhone、ドコモ ケータイ、らくらくホンなどに対応しています。ただし、iPhoneはブザー検索・ちょい前かくにん・移動みまもり検索・電池アラーム通知検索などに非対応で、探されていることがメッセージで通知され、一定時間内に応答すると居場所が通知される仕組みです。機能ごとの対応は機種によって異なるため、事前に公式の対応機種ページでご確認ください（出典：イマドコサーチ公式 対応機種 2026年11月確認）。' },
  { q: '電池持ちはどれくらいですか？', a: 'イマドコサーチはサービスであるため、それ自体に電池持ちの概念はありません。実際の充電頻度は、使用するキッズケータイやスマートフォンの機種によって異なります。位置確認専用のGPS端末（最大1〜2カ月持つタイプ）と異なり、通話もできるキッズケータイやスマートフォンは、基本的に1日〜数日単位での充電が必要です。' },
  { q: '通話やメッセージはできますか？', a: 'イマドコサーチ自体は位置検索サービスですが、対応するキッズケータイやスマートフォンを使用するため、端末側の機能で通話やメッセージ（SMS等）が可能です。位置検索と通話を1台にまとめたいご家庭に向いています。一方、「持たせるのは小さなGPSだけでよい」という場合は、単体GPS端末のほうが適しています。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "イマドコサーチ（ドコモ）の口コミ・評判は？料金・電池持ち・特徴を解説", "datePublished": "2026-07-02", "dateModified": "2026-07-17", "author": {"@type": "Organization", "name": "子供見守りGPS最新情報 編集部", "url": "https://gps-kodomo.com/"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "イマドコサーチ", "brand": {"@type": "Brand", "name": "NTTドコモ"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'イマドコサーチ（ドコモ）' }]} />

      {/* Hero */}
      <section className="bg-orange-light py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">ドコモの位置検索</span>
            <span className="tag-pill bg-blue text-white">キッズケータイ対応</span>
            <span className="tag-pill bg-green text-white">2026年11月 確認</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            イマドコサーチ（ドコモ）のレビュー
          </h1>
          <p className="text-g600 text-lg">NTTドコモ提供 | 位置検索サービス | キッズケータイ／Androidスマートフォン向け</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          {/* 結論box */}
          <div className="rounded-2xl border-l-4 border-orange bg-orange-light/40 p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">イマドコサーチは「単体GPS」ではなく、ドコモのキッズケータイ／Androidスマートフォンの位置を見守るサービスです。通話も1台にまとめたいご家庭に向いています</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>強み</strong>：位置確認と<strong>通話を1台</strong>のキッズケータイ／スマートフォンでまかなえます。大手キャリアが提供している点も安心材料です。<strong>保護者はドコモ以外の回線でも利用できます</strong>（dアカウントが必要です）。</li>
              <li>・<strong>弱み</strong>：<strong>単体GPS端末ではなく</strong>、ドコモ回線の対応端末が前提です。電池持ちは端末によって異なり、GPS専用機ほど長くはありません。<strong>iPhoneでは使える機能が限られます</strong>（ブザー検索・ちょい前かくにん等は非対応）。</li>
              <li>・<strong>料金</strong>：月額<strong>330円（税込）</strong>で、新規契約後31日間は無料です（月額使用料は見守る方のみ）。</li>
              <li>・<strong>運営</strong>：NTTドコモが提供しています（位置検索サービスのオプションです）。</li>
              <li>・<strong>向いている方</strong>：位置確認と通話を1台にまとめたい方、ドコモのキッズケータイを検討中の方です。<strong>向いていない方</strong>：小さなGPSだけを安く持たせたい方、充電の手間を極力減らしたいご家庭です。</li>
            </ul>
            <p className="text-xs text-g500 mt-3">出典：ドコモ公式・イマドコサーチ公式（2026年11月確認）。料金・対応端末・条件は変更される場合があります。お申し込み前に、公式サイトにて最新情報を必ずご確認ください。<Link href="/#ranking" className="text-orange underline">他機種との比較ランキングはこちら</Link></p>
          </div>

          {/* 位置づけの注意 */}
          <div className="card-hover p-6 mb-8 bg-blue-light/50 border-l-4 border-blue rounded-xl">
            <h2 className="font-extrabold text-g800 mb-2">イマドコサーチは「端末」ではなく位置検索サービス</h2>
            <p className="text-sm text-g700">
              イマドコサーチは、ドコモのキッズケータイやAndroidスマートフォンの位置を、保護者のスマートフォンから地図で確認できる
              「位置検索サービス（オプション）」です。単体で持たせる小型GPS端末（みてねみまもりGPS・まもサーチ等）とは種類が異なります。
              「通話もできる端末を持たせたい」「すでにドコモのキッズケータイを検討している」というご家庭に向いている一方で、
              「小さなGPSだけを持たせたい」場合は、単体GPS端末のほうが適しています。
              <span className="text-g500">（出典：ドコモ公式 2026年11月確認）</span>
            </p>
          </div>

          {/* Overview */}
          <h2 className="section-title">イマドコサーチとは</h2>
          <p className="text-g600 mb-6">
            イマドコサーチは、NTTドコモが提供する子供見守り向けの位置検索サービスです。
            見守られるお子さまがドコモ回線のキッズケータイやスマートフォンを持っていれば、
            保護者のスマートフォンからワンタップで現在地を地図に表示できます。移動経路の確認や防犯ブザーとの連動通知などにも対応しています。
            2006年に始まったサービスで、保護者側がドコモ以外の回線でも利用できる点や、
            検索結果の地図に周辺の事件・不審者情報（42都道府県）を表示する「ちかくの事件情報」などが特徴です（出典：イマドコサーチ公式 2026年11月確認）。
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
                    ['見守り対象端末', 'ドコモ回線のキッズケータイ／スマートフォン（Android・iPhone）ほか'],
                    ['保護者側の回線', 'ドコモ以外でも可（dアカウントが必要）'],
                    ['主な機能', '位置検索／移動経路／ブザー検索／ちかくの事件情報'],
                    ['見守る相手の登録', '5人まで'],
                    ['通話・メッセージ', '端末側の機能で可能'],
                    ['提供状況', '提供中（2026年11月確認）'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-g100">
                      <td className="py-2 font-semibold text-g700 w-2/5">{k}</td>
                      <td className="py-2 text-g600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-g400 mt-2">※料金・条件は変更される場合があります。お申し込み前に、ドコモ公式サイトにて最新情報をご確認ください。</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">対応するキッズケータイ（例）</h3>
              <div className="space-y-3">
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">キッズケータイ KY-41C</p>
                  <p className="text-sm text-g600 mt-1">通話・SMSに対応したキッズケータイです。イマドコサーチで位置を確認できます。</p>
                </div>
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">キッズケータイ コンパクト SK-41D</p>
                  <p className="text-sm text-g600 mt-1">腕に着けられるスマートウォッチ型の端末です。SOSボタンを押すとブザー検索が行われます。</p>
                </div>
              </div>
              <p className="text-xs text-g400 mt-2">※対応端末・在庫状況は、ドコモ公式サイトにてご確認ください。</p>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '', title: '位置検索', desc: '保護者のスマートフォンから、お子さまの現在地を地図で確認できます。' },
              { icon: '', title: '移動経路の確認', desc: '「ちょい前かくにん」で指定した時間帯・間隔の位置を記録し、移動の軌跡を地図で確認できます。「移動みまもり検索」は20分間・約20秒ごとに位置を確認します（一部機種は非対応）。' },
              { icon: '', title: 'ブザー検索', desc: '防犯ブザーを鳴らすと、設定した回数だけ自動で居場所を検索して通知します（キッズケータイ・Android〔一部機種〕のみ）。' },
              { icon: '', title: 'ドコモ以外でも利用可', desc: '見守る保護者は、ドコモ以外の回線でも利用できます（dアカウントが必要です）。' },
              { icon: '', title: 'ちかくの事件情報', desc: '検索結果の地図に、警察が配信する周辺の事件・不審者情報を表示します（42都道府県・2026年9月30日から拡大）。' },
              { icon: '', title: '通話もできる端末', desc: 'キッズケータイ／スマートフォンを使用するため、位置確認と通話を1台でまかなえます。' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-g600">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Pros & Cons */}
          <h2 className="section-title">メリット・デメリット（子供見守りの観点）</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・位置確認と通話を1台のキッズケータイ／スマートフォンでまかなえる点</li>
                <li>・大手キャリアによる安心感とサポート</li>
                <li>・保護者がドコモ以外の回線でも利用できる点</li>
                <li>・防犯ブザー連動通知に対応（対応端末）</li>
                <li>・周辺の事件情報を地図で確認できる（42都道府県）</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・単体GPS端末ではなく、対応端末と回線契約が前提</li>
                <li>・小型GPSだけを持たせたいご家庭には機能が過剰</li>
                <li>・電池持ちが端末によって異なり、GPS専用機ほど長くない点</li>
                <li>・iPhoneでは使える機能が限られる点（ブザー検索・ちょい前かくにん等は非対応）</li>
                <li>・端末代・回線料と合わせると費用が上がりやすい点</li>
              </ul>
            </div>
          </div>

          {/* 向く人 */}
          <h2 className="section-title">向いている方・向いていない方</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-2">向いている方</h3>
              <ul className="space-y-1 text-sm text-g700">
                <li>・位置確認と通話を1台にまとめたい方</li>
                <li>・ドコモのキッズケータイを検討している方</li>
                <li>・大手キャリアの見守りサービスによる安心感を重視する方</li>
                <li>・保護者がドコモ以外の回線を使っている方</li>
              </ul>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange mb-2">向いていない方</h3>
              <ul className="space-y-1 text-sm text-g700">
                <li>・小さなGPS端末だけを安く持たせたい方</li>
                <li>・充電の手間を極力減らしたい方（1〜2カ月の電池持ちを希望）</li>
                <li>・キャリアや端末を問わずに使いたい方</li>
                <li>・見守られる側のiPhoneで、ブザー検索や自動の位置記録まで使いたい方</li>
              </ul>
            </div>
          </div>

          {/* 口コミ傾向（創作なし） */}
          <h2 className="section-title">口コミ・評判の傾向</h2>
          <p className="text-g600 mb-4 text-sm">
            イマドコサーチは、大手キャリアの定番サービスとして各所で紹介されています。公開情報から読み取れる傾向は次のとおりです（個人を特定する実名や星評価を伴う口コミは掲載しておりません）。
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="card-hover p-5">
              <h3 className="font-bold text-green-dark text-sm mb-2">好意的に評価されやすい点</h3>
              <p className="text-sm text-g600">キッズケータイと組み合わせて位置確認と通話を1台で完結できる点、大手キャリアによる安心感、保護者がドコモ以外の回線でも使える柔軟さが評価されやすい傾向にあります。</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange-dark text-sm mb-2">指摘されやすい点</h3>
              <p className="text-sm text-g600">端末代・回線料・オプション料金を合わせた総費用が上がりやすい点や、単体GPSより充電の頻度が多い点は、費用や手軽さを重視するご家庭にとって気になりやすいと指摘されています。</p>
            </div>
          </div>
          <p className="text-xs text-g400 mb-8">
            ※上記は、ドコモ公式の案内および一般的な解説記事の論調をもとにした要約です。料金・対応端末・提供条件は変更される場合があります。お申し込み前に、ドコモ公式サイトにて最新情報を必ずご確認ください（2026年7月確認）。
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
              { href: '/compare/cost/', label: '料金・費用で比較する' },
              { href: '/compare/battery-life/', label: '電池持ちで比較する' },
              { href: '/compare/2026-ranking/', label: '2026年 総合ランキング' },
              { href: '/compare/school-silent/', label: '学校に持ち込みやすい静音モデルの比較' },
              { href: '/compare/school-trip/', label: '修学旅行・校外学習で使えるGPSの比較' },
              { href: '/compare/after-school/', label: '習い事・学童の送迎時の見守り比較' },
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
          <div className="mt-6 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">位置確認と通話をまとめたい方へ</h2>
            <p className="text-g600 mb-6 text-sm">小型GPSだけで十分な場合は、単体端末もあわせてご比較ください。目的に合った見守り方法を選ぶことをおすすめします。</p>
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
