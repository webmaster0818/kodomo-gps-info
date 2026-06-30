import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'みまもりGPS（旧どこかなGPS）の口コミ・評判は？料金・電池持ち・特徴を解説【2026年】',
  description:
    'ソフトバンクのみまもりGPS（旧どこかなGPS2／NC002）を徹底レビュー。月額528円（税込）・本体5,280円（税込）・バッテリー最大約1.5ヶ月・2周波GPS対応。料金、電池持ち、見守り台数、通話の可否まで公式情報（2026年6月確認）をもとに解説します。',
};

const faqData = [
  { q: '「どこかなGPS」と「みまもりGPS」は違うものですか？', a: '同じ製品です。ソフトバンクは2025年8月4日に「どこかなGPS2」を「みまもりGPS」へ名称変更しました。サービス内容・利用方法・サポート体制に変更はなく、既存ユーザーは手続き不要で利用を継続できます（出典：ソフトバンク公式お知らせ 2025年7月28日）。' },
  { q: 'みまもりGPSの月額料金はいくらですか？', a: '月額528円（税込）です。名称変更後は月額基本料の無料期間が6ヶ月から1ヶ月に短縮されました（料金528円自体は変更なし／出典：ソフトバンク公式 2026年6月確認）。最新の無料特典の有無は公式サイトでご確認ください。' },
  { q: '本体価格はいくらですか？', a: '名称変更にあわせて本体価格は7,480円（税込）から5,280円（税込）へ値下げされました（出典：ソフトバンク公式お知らせ 2025年7月28日）。販売チャネルによって表示価格が異なる場合があるため、購入前に公式・各ショップで要確認です。' },
  { q: 'バッテリーはどれくらい持ちますか？', a: '1回の充電で最大約1.5ヶ月持ちます。これは「平日1日2.5時間移動・土日未使用」を想定した公式の目安で、位置更新の頻度や使い方によって変動します（出典：ソフトバンク公式 みまもりGPS製品ページ 2026年6月確認）。残量が少なくなるとメールでお知らせが届きます。' },
  { q: '通話やメッセージはできますか？', a: 'みまもりGPSは位置確認に特化した端末で、通話・メッセージ（トーク）機能はありません。子どもと連絡を取りたい場合は、音声メッセージ対応のamue linkやみてねみまもりGPSトークなどを検討してください。' },
  { q: '何台・何人で見守りできますか？', a: '1台のみまもりGPSを最大11台のスマホで見守れます。また同時に最大10個のみままもりGPSを1つのアプリで見守れるため、兄弟・姉妹での利用にも対応します（出典：ソフトバンク公式 2026年6月確認）。' },
  { q: '学校に持って行っても大丈夫ですか？', a: '音や画面のない位置確認専用端末のため授業の妨げになりにくく、多くの学校で持ち込みやすいタイプです。ただし持ち込みの可否は学校ごとに異なるため、事前に学校の規則をご確認ください。' },
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

export default function DokokanaGpsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "みまもりGPS（旧どこかなGPS）の口コミ・評判は？料金・電池持ち・特徴を解説", "datePublished": "2026-06-30", "dateModified": "2026-06-30", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "みまもりGPS（旧どこかなGPS2）", "brand": {"@type": "Brand", "name": "ソフトバンク"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "レビュー", "item": "https://gps-kodomo.com/review/"}, {"@type": "ListItem", "position": 3, "name": "みまもりGPS（旧どこかなGPS）", "item": "https://gps-kodomo.com/review/dokokana-gps/"}]}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/#ranking' }, { name: 'みまもりGPS（旧どこかなGPS）' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">月額528円</span>
            <span className="tag-pill bg-orange text-white">2周波GPS</span>
            <span className="tag-pill bg-green text-white">2026年6月 確認</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            みまもりGPS（旧どこかなGPS）徹底レビュー
          </h1>
          <p className="text-g600 text-lg">ソフトバンク提供 | 月額528円 | 本体5,280円 | バッテリー最大約1.5ヶ月</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          {/* 名称変更の注意 */}
          <div className="card-hover p-6 mb-8 bg-orange-light/60 border-l-4 border-orange rounded-xl">
            <h2 className="font-extrabold text-g800 mb-2">「どこかなGPS」は「みまもりGPS」に名称変更されました</h2>
            <p className="text-sm text-g700">
              ソフトバンクは2025年8月4日に「どこかなGPS2（NC002）」を「<strong>みまもりGPS</strong>」へ名称変更しました。
              あわせて本体価格を7,480円→<strong>5,280円（税込）</strong>に値下げ、月額基本料の無料期間が6ヶ月→1ヶ月に短縮されています。
              月額528円（税込）やサービス内容そのものは変更なしで、既存ユーザーは手続き不要です。
            </p>
            <p className="text-xs text-g500 mt-2">出典：ソフトバンク公式お知らせ「『どこかなGPS』の名称および本体価格を変更」（2025年7月28日）</p>
          </div>

          <h2 className="section-title">みまもりGPS（旧どこかなGPS）とは</h2>
          <p className="text-g600 mb-6">
            みまもりGPSは、ソフトバンクが提供する子供用GPS端末です。位置確認に特化したシンプルな端末で、
            2周波GPS（L1＋L5）対応により都市部のビル街などでも測位のズレを抑えやすいのが特徴。
            月額528円（税込）・本体5,280円（税込）と手頃で、1台を最大11台のスマホで見守れるため、両親・祖父母での共有にも向きます。
            通話・トーク機能はなく、迷ったら「連絡機能の要否」で他機種と比較するのがおすすめです。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック（公式・2026年6月確認）</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'ソフトバンク'],
                    ['月額料金', '528円（税込）'],
                    ['本体価格', '5,280円（税込）※販売店で要確認'],
                    ['測位方式', '2周波GPS（L1＋L5）'],
                    ['バッテリー', '最大約1.5ヶ月（使い方で変動）'],
                    ['通信回線', 'SoftBank 4G LTE'],
                    ['防水防塵', 'IPX7／IP6X'],
                    ['重量', '約60g'],
                    ['見守り', '1台を最大11台のスマホで／最大10個を同時見守り'],
                    ['通話・トーク', 'なし（位置確認専用）'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-g100">
                      <td className="py-2 font-semibold text-g700 w-1/3">{k}</td>
                      <td className="py-2 text-g600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-g400 mt-2">出典：ソフトバンク公式 みまもりGPS製品ページ（2026年6月確認）。本体価格は名称変更時の公式値5,280円。サイズ詳細・充電方式は公式に記載なし＝要確認</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">料金</h3>
              <div className="space-y-3">
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">月額プラン</p>
                  <p className="text-2xl font-extrabold text-g800">月額 528円<span className="text-sm font-normal text-g500">（税込）</span></p>
                  <p className="text-sm text-g600 mt-1">位置確認・移動履歴・エリア通知など</p>
                </div>
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">本体価格</p>
                  <p className="text-2xl font-extrabold text-g800">5,280円<span className="text-sm font-normal text-g500">（税込）</span></p>
                  <p className="text-xs text-g500 mt-1">名称変更で7,480円→5,280円に値下げ。無料期間は1ヶ月に短縮</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '📍', title: 'リアルタイム位置確認', desc: '2周波GPS（L1＋L5）対応で、ビル街でも測位のズレを抑えやすい。' },
              { icon: '📝', title: '移動履歴（最大3ヶ月）', desc: '過去最大3ヶ月分の移動履歴を保存。通学路や行動の確認に。' },
              { icon: '🔔', title: 'エリア通知（最大15ヶ所）', desc: '学校・自宅・塾など最大15ヶ所を登録し、出入りを自動通知。' },
              { icon: '🚃', title: '乗り物検知', desc: '電車・車などでの移動を検知して通知。' },
              { icon: '👋', title: 'はなれたアラート', desc: '保護者の端末と一定距離離れると知らせる機能。' },
              { icon: '👨‍👩‍👧‍👦', title: '最大11台で見守り', desc: '1台のGPSを最大11台のスマホで共有。家族みんなで見守れる。' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
                <p className="text-2xl mb-2">{f.icon}</p>
                <h3 className="font-bold text-g800 text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-g600">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-g400 mb-8">出典：ソフトバンク公式 みまもりGPS製品ページ（2026年6月確認）</p>

          {/* Pros & Cons */}
          <h2 className="section-title">メリット・デメリット</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・2周波GPS（L1＋L5）で測位のズレを抑えやすい</li>
                <li>・月額528円・本体5,280円とコスト控えめ</li>
                <li>・バッテリー最大約1.5ヶ月で充電の手間が少ない</li>
                <li>・1台を最大11台のスマホで見守れる（家族共有に強い）</li>
                <li>・IPX7／IP6Xの防水防塵で雨の日も安心</li>
                <li>・エリア通知は最大15ヶ所まで登録可能</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・通話・トーク機能がない（位置確認専用）</li>
                <li>・名称変更で月額無料期間が6ヶ月→1ヶ月に短縮</li>
                <li>・通知がメール中心で見落とす場合がある（口コミ）</li>
                <li>・約60gとやや重め</li>
                <li>・充電方式やサイズ詳細は公式記載が少なく要確認</li>
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
                <li>・バッテリーが長持ちし、静止中は消耗が抑えられるとの声</li>
                <li>・エリア通知（到着・はなれた）など通知機能が充実しているとの評価</li>
                <li>・位置確認のみのシンプルさとコスパを評価する声</li>
              </ul>
            </div>
            <div className="card-hover p-5 bg-orange-light/40">
              <h3 className="font-bold text-orange-dark text-sm mb-2">気になる傾向</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・通知がメール中心で、他のメールに埋もれて気づきにくい場合がある</li>
                <li>・初期設定で再設定が必要になったという声</li>
                <li>・GPS精度に誤差を感じるという指摘も一部にある</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-g400 mb-8">
            ※口コミは公開レビューの傾向を要約したものです。出典: <a href="https://apps.apple.com/jp/app/id1450832383" className="underline" target="_blank" rel="noopener noreferrer">みまもりGPS（App Store）</a>、各レビューサイト（2026年6月確認）
          </p>

          {/* 向く人・向かない人 */}
          <h2 className="section-title">向く人・向かない人</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-2">向いている人</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・位置確認ができれば十分で、連絡機能は不要な家庭</li>
                <li>・ビル街・都市部で測位精度を重視したい人</li>
                <li>・両親・祖父母など多人数で位置を共有したい家庭</li>
                <li>・充電の手間を減らしたい人</li>
              </ul>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange mb-2">向かない人</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・子どもと音声メッセージ・通話で連絡を取りたい人</li>
                <li>・プッシュ通知中心で確実に気づきたい人（メール通知が苦手）</li>
                <li>・できるだけ軽い端末を持たせたい人</li>
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
            <Link href="/compare/cost/" className="card-hover p-4 block no-underline"><span className="font-bold text-blue">料金で比較</span><p className="text-sm text-g600 mt-1">月額・本体・年間コストを機種ごとに比較</p></Link>
            <Link href="/compare/battery-life/" className="card-hover p-4 block no-underline"><span className="font-bold text-blue">電池持ちで比較</span><p className="text-sm text-g600 mt-1">バッテリーの長持ち機種を一覧で比較</p></Link>
            <Link href="/compare/school-silent/" className="card-hover p-4 block no-underline"><span className="font-bold text-blue">学校で静かに使える機種</span><p className="text-sm text-g600 mt-1">音が鳴らない・持ち込みやすい機種を比較</p></Link>
            <Link href="/review/anshin-watcher/" className="card-hover p-4 block no-underline"><span className="font-bold text-blue">あんしんウォッチャーのレビュー</span><p className="text-sm text-g600 mt-1">同じ位置確認特化型のau端末と比較</p></Link>
          </div>

          {/* CTA */}
          <div className="mt-6 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">みまもりGPSが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">月額528円・2周波GPS対応の位置確認特化型。連絡機能が欲しいなら他機種も比較を。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/amuelink/" className="btn-accent">次: amue link（話せるGPS）</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
