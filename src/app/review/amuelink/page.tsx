import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'amue link（アミューリンク）の口コミ・評判は？料金・電池持ち・特徴を解説【2026年】',
  description:
    'ソニーネットワークコミュニケーションズのamue link（アミューリンク）を徹底レビュー。月額748円（税込）・本体5,980円（税込）・双方向ボイスメッセージ対応・約23.7gの世界最小最軽量クラス。電池持ち（最大約5日）や通話の可否まで公式情報（2026年6月確認）で解説します。',
};

const faqData = [
  { q: 'amue linkの月額料金はいくらですか？', a: '月額748円（税込・クレジットカード払い）です。月額のみで位置確認・ボイスメッセージなどの機能を追加料金なし・回数無制限で使えます。1ヶ月単位の契約でいつでも解約できます（出典：amue link公式 2026年6月確認）。' },
  { q: '本体価格はいくらですか？', a: '本体価格は5,980円（税込・メーカー希望小売価格）です。端末購入後、アプリから月額748円の支払いを設定するとサービスが利用できます。端末のみでは見守りサービスは利用できません。' },
  { q: 'バッテリーはどれくらい持ちますか？', a: '通常使用で最大約5日間です（GPS圏内移動・通信/センサー取得間隔2分・1日2時間程度使用の場合）。連続使用では最大約14時間。ボイスメッセージ対応端末のため、位置確認専用機（1〜2ヶ月持つタイプ）と比べると電池持ちは短めで、こまめな充電が必要です（出典：amue link公式 2026年6月確認）。' },
  { q: '通話やメッセージはできますか？', a: '通話はできませんが、端末とアプリ間で双方向のボイスメッセージ（音声）を送り合えます。追加料金なしで利用でき、お迎えの連絡などに使えます。テキスト通話のような同時通話機能はありません。' },
  { q: 'amue linkはセコムのサービスですか？', a: 'いいえ。amue linkを提供しているのはソニーネットワークコミュニケーションズ株式会社です。セコムは別の見守りサービス（ココセコム等）を提供しています。混同されやすいのでご注意ください。' },
  { q: '何人で見守りできますか？', a: '最大5人（端末は最大5台まで登録）で見守れます。両親や祖父母など複数人で位置情報・ボイスメッセージを共有できます（出典：amue link公式 2026年6月確認）。' },
  { q: '防水ですか？学校に持って行けますか？', a: '防水IPX8・防塵IP6Xの高い防水防塵性能を備えており、雨の日でも安心です。約23.7gと軽量で目立ちにくい形状のため持ち込みやすいですが、学校の規則は学校ごとに異なるため事前にご確認ください。' },
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

export default function AmuelinkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "amue link（アミューリンク）の口コミ・評判は？料金・電池持ち・特徴を解説", "datePublished": "2026-06-30", "dateModified": "2026-06-30", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "amue link（アミューリンク）", "brand": {"@type": "Brand", "name": "ソニーネットワークコミュニケーションズ"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "レビュー", "item": "https://gps-kodomo.com/review/"}, {"@type": "ListItem", "position": 3, "name": "amue link", "item": "https://gps-kodomo.com/review/amuelink/"}]}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/#ranking' }, { name: 'amue link（アミューリンク）' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">話せるGPS</span>
            <span className="tag-pill bg-blue text-white">約23.7gの軽さ</span>
            <span className="tag-pill bg-green text-white">2026年6月 確認</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            amue link（アミューリンク）徹底レビュー
          </h1>
          <p className="text-g600 text-lg">ソニーネットワークコミュニケーションズ提供 | 月額748円 | 双方向ボイスメッセージ対応</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          {/* 提供元の注意 */}
          <div className="card-hover p-6 mb-8 bg-blue-light/50 border-l-4 border-blue rounded-xl">
            <h2 className="font-extrabold text-g800 mb-2">amue linkは「ソニー」の見守りGPS（セコムとは別）</h2>
            <p className="text-sm text-g700">
              amue link（アミューリンク）を提供しているのは<strong>ソニーネットワークコミュニケーションズ株式会社</strong>です。
              「お話しできるGPS」をコンセプトに、端末⇔アプリの双方向ボイスメッセージに対応。
              約23.7gと世界最小・最軽量クラスの軽さが最大の特徴です。セコムのサービスと混同されることがありますが別物です。
            </p>
            <p className="text-xs text-g500 mt-2">出典：amue link公式サイト（2026年6月確認）</p>
          </div>

          <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 mb-6 text-sm text-gray-700">
            <strong>【重要・2026年8月5日確認】</strong>amue linkは<strong>本体の販売を終了</strong>しています(既存ユーザー向けのサービスは月額748円で継続中)。以下のレビューは参考情報としてご覧いただき、新規購入は他機種をご検討ください。
          </div>
          <h2 className="section-title">amue link（アミューリンク）とは</h2>
          <p className="text-g600 mb-6">
            amue linkは、ソニーネットワークコミュニケーションズが提供する子供用GPS端末です。
            約23.7gと非常に軽く、端末とアプリで音声メッセージをやりとりできる「お話しできるGPS」。
            徒歩・車・バス・電車の移動手段をAIが色分け表示するなど、ソニーらしい高機能が魅力です。
            一方でボイスメッセージ対応のためバッテリーは最大約5日と短めで、こまめな充電が前提になります。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange mb-3">基本スペック（公式・2026年6月確認）</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'ソニーネットワークコミュニケーションズ'],
                    ['月額料金', '748円（税込）'],
                    ['本体価格', '5,980円（税込）'],
                    ['測位方式', 'GPS・みちびき・GLONASS・基地局'],
                    ['バッテリー', '通常使用で最大約5日（連続約14時間）'],
                    ['充電方式', 'USB Type-C'],
                    ['通信回線', 'LTE-M'],
                    ['防水防塵', '防水IPX8／防塵IP6X'],
                    ['サイズ／重量', '約60×26×12.3mm／約23.7g'],
                    ['見守り人数', '最大5人（端末最大5台登録）'],
                    ['ボイスメッセージ', '双方向対応（追加料金なし）'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-g100">
                      <td className="py-2 font-semibold text-g700 w-1/3">{k}</td>
                      <td className="py-2 text-g600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-g400 mt-2">出典：amue link公式 特徴・仕様ページ（2026年6月確認）</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange mb-3">料金</h3>
              <div className="space-y-3">
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">月額プラン</p>
                  <p className="text-2xl font-extrabold text-g800">月額 748円<span className="text-sm font-normal text-g500">（税込）</span></p>
                  <p className="text-sm text-g600 mt-1">位置確認・ボイスメッセージなどが無制限。いつでも解約可</p>
                </div>
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">本体価格</p>
                  <p className="text-2xl font-extrabold text-g800">5,980円<span className="text-sm font-normal text-g500">（税込）</span></p>
                  <p className="text-xs text-g500 mt-1">端末のみでは見守り不可。月額契約が必要</p>
                </div>
              </div>
            </div>
          </div>

          {/* 電池の注意 */}
          <div className="card-hover p-5 mb-8 bg-orange-light/50 border-l-4 border-orange rounded-xl">
            <h3 className="font-bold text-g800 mb-2">電池持ちは「最大約5日」。位置確認専用機より短め</h3>
            <p className="text-sm text-g700">
              amue linkはボイスメッセージ対応のため、電池持ちは通常使用で最大約5日（連続使用で最大約14時間）です。
              バッテリーが1〜2ヶ月持つ位置確認専用機（あんしんウォッチャーやみまもりGPSなど）と比べると短く、週1回以上の充電が前提です。
              「話せること」を重視するか「充電の手間の少なさ」を重視するかで選び分けるとよいでしょう。
            </p>
            <p className="text-xs text-g500 mt-2">出典：amue link公式（2026年6月確認）</p>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '💬', title: '双方向ボイスメッセージ', desc: '端末⇔アプリで音声メッセージを送り合える。追加料金なし。' },
              { icon: '📍', title: 'リアルタイム位置確認', desc: 'GPS・みちびき・GLONASS・基地局のマルチ測位＋スマート位置補正。' },
              { icon: '🚶', title: '移動手段のAI判別', desc: '徒歩・車・バス・電車を色分けで表示し、移動履歴が見やすい。' },
              { icon: '🔔', title: '出発・到着通知', desc: '最大10ヶ所のスポットを設定し、出入りを自動通知。' },
              { icon: '🌡️', title: '周辺温度センサー', desc: '35℃以上になると通知。熱中症対策の目安に。' },
              { icon: '🪶', title: '約23.7gの軽さ', desc: '世界最小・最軽量クラス。防水IPX8・防塵IP6Xでタフ。' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
                <p className="text-2xl mb-2">{f.icon}</p>
                <h3 className="font-bold text-g800 text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-g600">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-g400 mb-8">出典：amue link公式 特徴・仕様ページ（2026年6月確認）</p>

          {/* Pros & Cons */}
          <h2 className="section-title">メリット・デメリット</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・双方向ボイスメッセージでお迎え連絡などができる</li>
                <li>・約23.7gの世界最小・最軽量クラスで負担が少ない</li>
                <li>・防水IPX8・防塵IP6Xでタフに使える</li>
                <li>・移動手段をAIが色分け表示し履歴が見やすい</li>
                <li>・周辺温度センサーで暑さの目安がわかる</li>
                <li>・1ヶ月単位の契約でいつでも解約可能</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・バッテリーが最大約5日と短く、こまめな充電が必要</li>
                <li>・月額748円とやや高め（位置確認専用機より高い）</li>
                <li>・見守り人数は最大5人まで</li>
                <li>・リアルタイム通話はできない（音声はメッセージ式）</li>
                <li>・エリア通知の誤報を指摘する口コミもある</li>
              </ul>
            </div>
          </div>

          {/* User Reviews */}
          <h2 className="section-title">口コミの傾向</h2>
          <p className="text-g600 mb-4 text-sm">
            App Store・各レビューサイトに見られる傾向を、出典のある範囲で要約しています（個別の創作口コミは掲載していません）。
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="card-hover p-5 bg-green-light/40">
              <h3 className="font-bold text-green-dark text-sm mb-2">良い傾向</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・「思ったより小さい」と軽さ・コンパクトさを評価する声</li>
                <li>・移動の道のりを正確に記録できたという声</li>
                <li>・移動手段の色分け表示がわかりやすいとの評価</li>
                <li>・ボイスメッセージで連絡が取れる安心感</li>
              </ul>
            </div>
            <div className="card-hover p-5 bg-orange-light/40">
              <h3 className="font-bold text-orange-dark text-sm mb-2">気になる傾向</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・電池持ちが短い点を難点とする声</li>
                <li>・GPS精度が低いと感じる場面があるという指摘</li>
                <li>・エリアの出発・到着の誤報が起きるという声</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-g400 mb-8">
            ※口コミは公開レビューの傾向を要約したものです。出典: <a href="https://apps.apple.com/jp/app/amue-link/id1533416797" className="underline" target="_blank" rel="noopener noreferrer">amue link（App Store）</a>、各レビューサイト（2026年6月確認）
          </p>

          {/* 向く人・向かない人 */}
          <h2 className="section-title">向く人・向かない人</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-2">向いている人</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・子どもと音声メッセージで連絡を取りたい家庭</li>
                <li>・できるだけ軽い端末を持たせたい人</li>
                <li>・移動手段の履歴を見やすく把握したい人</li>
                <li>・毎日〜数日おきの充電が苦にならない人</li>
              </ul>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange mb-2">向かない人</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・充電の手間を最小化したい人（電池持ち重視）</li>
                <li>・月額をできるだけ安く抑えたい人</li>
                <li>・リアルタイムで通話したい人</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          {/* 関連リンク */}
          <h2 className="section-title mt-10">関連ページ</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            <Link href="/compare/battery-life/" className="card-hover p-4 block no-underline"><span className="font-bold text-orange">電池持ちで比較</span><p className="text-sm text-g600 mt-1">充電の手間が少ない機種を一覧で比較</p></Link>
            <Link href="/compare/cost/" className="card-hover p-4 block no-underline"><span className="font-bold text-orange">料金で比較</span><p className="text-sm text-g600 mt-1">月額・本体・年間コストを機種ごとに比較</p></Link>
            <Link href="/review/mitene/" className="card-hover p-4 block no-underline"><span className="font-bold text-orange">みてねみまもりGPSのレビュー</span><p className="text-sm text-g600 mt-1">トーク機能つきの人気機種と比較</p></Link>
            <Link href="/review/dokokana-gps/" className="card-hover p-4 block no-underline"><span className="font-bold text-orange">みまもりGPS（旧どこかなGPS）</span><p className="text-sm text-g600 mt-1">電池長持ちの位置確認専用機と比較</p></Link>
          </div>

          {/* CTA */}
          <div className="mt-6 text-center bg-gradient-to-r from-orange-light to-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">amue linkが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">「話せる×軽い」のソニー製GPS。充電の手間が気になるなら電池長持ち機種も比較を。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/anshin-watcher/" className="btn-accent">次: あんしんウォッチャー</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
