import type { Metadata } from 'next';
import Link from 'next/link';
import { MiteneAffText, MiteneAffBanner, MiteneAffBannerSlim } from '@/components/AffiliateMitene';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'みてねみまもりGPSの口コミ・評判｜オリコン満足度3位・App Store 4.2（9.3万件）と3機種の違い【2026年11月】',
  description:
    'みてねみまもりGPSの口コミ・評判を、2026年オリコン顧客満足度（総合75.0点・3位、回答4,952人）とApp Storeの評価4.2（9.3万件）で整理しました。良い声・気になる声の傾向、3機種の料金と公式仕様も掲載しています。',
};

const faqData = [
  { q: 'みてねみまもりGPSの評判はどうですか？', a: '2026年オリコン顧客満足度ランキング（子ども見守りGPS）では総合75.0点で3位（みもりGPSトークと同点）、評価項目では「初期設定のしやすさ」79.2点・「GPS端末の使いやすさ」78.9点が2位、「位置情報の精度」70.0点は5位でした。App Storeのアプリ評価は4.2（約9.3万件）です（いずれも2026年11月12日確認）。エリア通知やボタン操作の手軽さを評価する声が多い一方、位置の更新の遅れや誤差を指摘する声もあります。' },
  { q: 'みてねみまもりGPSの口コミはどこで読めますか？', a: 'オリコン顧客満足度の企業ページ（life.oricon.co.jp）に利用者の口コミが、App Storeのアプリページにレビューが掲載されています。機種（MG05／トーク／トークPlus）によって機能が異なるため、どの機種に対する口コミかを確認したうえで参考にされることをおすすめします。当ページでは口コミの転載・創作は行わず、傾向の要約と出典・確認日のみを掲載しています。' },
  { q: 'みてねみまもりGPSの月額料金はいくら？', a: '基本プラン（位置確認のみ）は月額528円（税込）、トークPlus機能付きのプランは月額748円（税込）です。いずれも契約期間の縛りや解約金はありません。' },
  { q: 'トークとトークPlusの違いは何ですか？', a: 'どちらもボイスメッセージを送り合える機種です。トークPlus（MB06・2026年発売）は、これに防犯ブザーとディスプレイが加わったモデルで、防犯ブザーが作動すると保護者のスマートフォンに通知が届きます。本体はトーク（MT05）が5,680円、トークPlusが7,480円で、月額はどちらも748円です（2026年11月12日 公式サイト確認）。' },
  { q: 'バッテリーはどれくらい持ちますか？', a: '公式の製品仕様では、お知らせボタンモデル（MG05）は省エネモードで最大2ヶ月、高頻度モードで最大1ヶ月です。トーク対応機種（MT05・MB06）は、トークを1日2往復使う条件で省エネモード最大3週間、高頻度モード最大2週間です（2026年10月25日確認）。いずれも位置情報の更新頻度や使い方によって変動します。更新間隔を長めに設定すると、バッテリーの持ちが向上します。' },
  { q: '本体価格はいくらですか？', a: '本体価格は5,280円（税込）です。公式サイトやECサイトで購入できます。時期によっては、キャンペーンによる割引が実施される場合もあります。' },
  { q: '何人で見守りできますか？', a: '複数人での見守りが可能です。祖父母を含むご家族全員で、お子さまの位置を確認できます。複数のGPS端末をひとつの画面でまとめて管理できるため、きょうだいでの利用にも対応しています。' },
  { q: '学校に持って行っても大丈夫？', a: 'はい、ほとんどの学校で持ち込み可能です。小型・軽量で、ランドセルに入れておけるサイズです。音が鳴らないため、授業の妨げになりません。念のため、学校の規則をご確認ください。' },
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

export default function MitenePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "みてねみまもりGPSの口コミ・評判と3機種レビュー", "datePublished": "2026-03-15", "dateModified": "2026-11-12", "author": {"@type": "Organization", "name": "子供見守りGPS最新情報 編集部", "url": "https://gps-kodomo.com/"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'みてねみまもりGPS' }]} />

      {/* Hero */}
      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">利用者数No.1（公式表記）</span>
            <span className="tag-pill bg-blue text-white">月額528円〜</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            みてねみまもりGPSの口コミ・評判と3機種レビュー
          </h1>
          <p className="text-g600 text-lg">MIXI提供 | オリコン顧客満足度 総合3位（2026年） | バッテリー最大2カ月（MG05・省エネモード）</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          {/* 結論box */}
          <div className="rounded-2xl border-l-4 border-blue bg-blue-light/40 p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">家族アルバム「みてね」のMIXIが運営し、3機種から選べるサービスです。大手企業が運営する安心感を重視するご家庭に適しています。</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>強み</strong>：東証プライム上場の<strong>MIXI（旧ミクシィ）</strong>が運営しています。用途に応じて<strong>3機種（MG05・トーク・トークPlus）</strong>から選べます。</li>
              <li>・<strong>弱み</strong>：トーク・通話を使う場合は上位プランとなり、月額が上がります。位置精度に特化した設計ではありません。</li>
              <li>・<strong>評判</strong>：2026年オリコン顧客満足度で<strong>総合75.0点・3位</strong>（回答4,952人）、App Storeの評価は<strong>4.2（約9.3万件）</strong>です。初期設定・端末の使いやすさの評価が高く、位置情報の精度は6社中5位でした。</li>
              <li>・<strong>料金</strong>：月額<strong>528円〜748円</strong>です（機種により異なります）。</li>
              <li>・<strong>適したご家庭</strong>：大手企業が運営する安心感を重視するご家庭、将来トーク機能も使いたいご家庭です。<strong>適さないご家庭</strong>：最安値や位置精度を最優先するご家庭です。</li>
            </ul>
            <p className="text-xs text-g500 mt-3">出典：みてねみまもりGPS公式（製品・料金ページ）。料金・仕様は変更される場合があります。お申し込み前に、公式サイトにて最新情報をご確認ください。<Link href="/#ranking" className="text-blue underline">他機種との比較ランキングはこちら</Link></p>
          </div>
          <MiteneAffBannerSlim className="mt-4 mb-2" />

          <h2 className="section-title">口コミ・評判（第三者の調査とアプリ評価）</h2>
          <p className="text-g600 mb-4 text-sm">当サイトでは、出典を確認できる第三者の調査とアプリストアの評価のみを掲載しています。個別の口コミの転載・創作は行っていません（2026年11月12日確認）。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-g200 bg-blue-light text-left">
                  <th className="py-2 px-2 text-g700">指標</th>
                  <th className="py-2 px-2 text-g700">みてねみまもりGPS</th>
                  <th className="py-2 px-2 text-g700">出典</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['総合得点・順位', '75.0点・3位（みもりGPSトークと同点）', '2026年 オリコン顧客満足度 子ども見守りGPS'],
                  ['初期設定のしやすさ', '79.2点・2位', '同上'],
                  ['GPS端末の使いやすさ', '78.9点・2位', '同上'],
                  ['アプリの使いやすさ', '76.9点・3位', '同上'],
                  ['費用', '73.1点・3位', '同上'],
                  ['サポートサービス', '70.1点・4位', '同上'],
                  ['位置情報の精度', '70.0点・5位', '同上'],
                  ['推奨意向／継続意向', '89.6点／93.6点', '同上'],
                  ['アプリの評価', '4.2（約9.3万件）', 'App Store「みてねみまもりGPS」（MIXI, Inc.）'],
                ].map(([k, v, src]) => (
                  <tr key={k} className="border-b border-g100">
                    <td className="py-2 px-2 font-semibold text-g700">{k}</td>
                    <td className="py-2 px-2">{v}</td>
                    <td className="py-2 px-2 text-xs text-g500">{src}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-4">オリコンの調査は、子ども見守りGPSの利用者4,952人の回答に基づくランキングです（総合1位は75.9点、2位のまもサーチは75.1点）。ランキングページの更新日は2026年2月2日です。調査方法の詳細は、オリコン顧客満足度の公式サイトをご確認ください。</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-3">
            <div className="bg-green-light rounded-xl p-5">
              <h3 className="font-bold text-green-dark mb-2">評価されている点（口コミの傾向）</h3>
              <ul className="space-y-1.5 text-sm text-g700">
                <li>・設定した範囲を出入りしたときの通知が役立つ</li>
                <li>・子どもからのメッセージ送信やボタン操作が簡単</li>
                <li>・バッテリーが長持ちし、操作がシンプル</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-5">
              <h3 className="font-bold text-orange-dark mb-2">気になる点として挙がる声</h3>
              <ul className="space-y-1.5 text-sm text-g700">
                <li>・位置情報の更新が遅れたり、誤差が大きかったりすることがある</li>
                <li>・電波状況によって現在地を確認できない場合がある</li>
                <li>・電池切れに気づきにくい、本体の大きさが気になる</li>
                <li>・問い合わせへの回答が遅かった</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-g400 mb-8">傾向は、オリコン顧客満足度の企業ページ（life.oricon.co.jp/rank-child-gps/company/mitene/）に掲載された利用者の口コミ18件を当サイトで要約したものです。位置情報の精度の評価が他の項目より低い点は、オリコンの項目別得点（6社中5位）とも一致しています。精度を重視する場合は、<Link href="/compare/accuracy/" className="text-blue underline">測位精度の比較</Link>もあわせてご確認ください。</p>

          <h2 className="section-title">みてねみまもりGPSとは</h2>
          <p className="text-g600 mb-6">
            みてねみまもりGPSは、MIXI（旧ミクシィ）が提供する子供用GPS端末です。
            家族向けアプリ「みてね」の知見を活かした使いやすさが特徴です。公式サイトでは「利用者数No.1」と表記しています（公式サイトの注記：No.1ロケーションアプリ、26年度1月〜26年度9月までの合計・日系パブリッシャー・iOS&Android合算・Sensor Tower調べ。2026年11月12日確認）。
            月額528円からの手頃な料金設定と、お知らせボタンモデル（MG05）では省エネモードで最大2カ月持続するバッテリーが特徴です（トーク対応機種は最大3週間）。
            ボイスメッセージを送り合えるトーク（MT05・2025年発売）に加え、2026年には防犯ブザーとディスプレイを搭載したトークPlus（MB06）が発売されました。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'MIXI（旧ミクシィ）'],
                    ['月額料金', '528円（MG05）/ 748円（トーク・トークPlus）（税込）'],
                    ['本体価格', '5,280円〜7,480円（税込・機種により異なります）'],
                    ['測位方式', 'GNSS L1/L5デュアルバンド（GPS・みちびき・BeiDou・Galileo・GLONASS）＋A-GPS＋Wi-Fi・携帯基地局＋SBAS'],
                    ['バッテリー', '最大2ヶ月（MG05・省エネモード）／トーク対応機種は最大3週間'],
                    ['通信回線', 'LTE Cat.M1（ドコモ・KDDI・SoftBank。圏外時に自動で切り替え）'],
                    ['防水', '生活防水・防塵（IP55。トークPlusはIP54）'],
                    ['サイズ', '幅50×高さ50×厚み22mm（MG05・MT05）'],
                    ['重量', '61g（MG05）／63g（MT05）／89g（MB06）'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-g100">
                      <td className="py-2 font-semibold text-g700 w-1/3">{k}</td>
                      <td className="py-2 text-g600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">料金プラン</h3>
              <div className="space-y-3">
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">基本プラン</p>
                  <p className="text-2xl font-extrabold text-g800">月額 528円<span className="text-sm font-normal text-g500">（税込）</span></p>
                  <p className="text-sm text-g600 mt-1">位置確認・移動履歴・エリア通知</p>
                </div>
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">トークPlusプラン</p>
                  <p className="text-2xl font-extrabold text-g800">月額 748円<span className="text-sm font-normal text-g500">（税込）</span></p>
                  <p className="text-sm text-g600 mt-1">基本プラン機能＋トーク機能</p>
                </div>
              </div>
            </div>
          </div>

          {/* 機種比較 */}
          <h2 className="section-title">3機種の違い（MG05 / トーク / トークPlus）</h2>
          <p className="text-g600 mb-4 text-sm">みてねみまもりGPSには、現在3つの型番があります。トーク機能の要否と防犯ブザーの有無で選ぶことが基本です（本体価格・月額は2026年10月19日に公式サイト mitene.us/gps の定価を確認。キャンペーン期間中は割引される場合があります）。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-g200 bg-blue-light text-left">
                  <th className="py-2 px-2 text-g700">機種</th>
                  <th className="py-2 px-2 text-g700">本体/月額(税込)</th>
                  <th className="py-2 px-2 text-g700">トーク</th>
                  <th className="py-2 px-2 text-g700">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-g100"><td className="py-2 px-2 font-semibold text-g700 whitespace-nowrap">MG05</td><td className="py-2 px-2">5,280円/月528円</td><td className="py-2 px-2">なし(お知らせボタン)</td><td className="py-2 px-2">最安。位置確認中心のご家庭向け。電池最大約2カ月</td></tr>
                <tr className="border-b border-g100"><td className="py-2 px-2 font-semibold text-g700 whitespace-nowrap">トーク(MT05)</td><td className="py-2 px-2">5,680円/月748円</td><td className="py-2 px-2">あり(音声40秒・無制限)</td><td className="py-2 px-2">双方向ボイスメッセージ対応。共働き・外出が多いご家庭向け</td></tr>
                <tr><td className="py-2 px-2 font-semibold text-g700 whitespace-nowrap">トークPlus(MB06)</td><td className="py-2 px-2">7,480円/月748円</td><td className="py-2 px-2">あり</td><td className="py-2 px-2">最新機種。防犯ブザー(約85dB)+ディスプレイ搭載。やや大型の89g・電池最大約3週間</td></tr>
              </tbody>
            </table>
          </div>
          <div className="card-hover p-5 mb-8">
            <h3 className="font-bold text-g800 mb-2">機種の選び方</h3>
            <ul className="space-y-2 text-sm text-g700">
              <li>・<strong>在宅のご家庭・コスト重視</strong> → MG05が適しています（お知らせボタンのみで足りる場合に適した最安の機種です）。</li>
              <li>・<strong>お子さまと連絡を取りたい</strong> → トーク（MT05）が適しています。音声メッセージで「今どこ？」といったやりとりが可能です。</li>
              <li>・<strong>防犯ブザーも1台にまとめたい</strong> → トークPlus（MB06）が適しています。ただし、89gとやや重く、電池は約3週間と短めです。また、学校では音や画面が友人の関心を引く可能性があります。</li>
            </ul>
            <p className="text-xs text-g400 mt-3">全機種ともL1/L5デュアルバンドGNSS+Wi-Fi+基地局測位に対応しています。見守る大人の人数に制限はありません。出典: みてねみまもりGPS公式 製品仕様（mitene.us/gps/spec）2026年11月12日確認</p>
          </div>

          <div className="text-center mb-10">
            <MiteneAffText />
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '', title: 'リアルタイム位置確認', desc: 'アプリからいつでもお子さまの現在地を確認できます。GPS+Wi-Fiの複合測位により、高い精度を実現しています。' },
              { icon: '', title: '移動履歴の自動記録', desc: '1日の移動経路を自動で記録します。通学路の確認や行動パターンの把握に役立ちます。' },
              { icon: '', title: 'エリア通知', desc: '学校や自宅など、設定したエリアへの出入りを自動で通知します。到着・出発をすぐに把握できます。' },
              { icon: '', title: 'トークPlus機能', desc: '音声メッセージや定型文で、お子さまとやりとりできます。キーホルダーのボタンで簡単に送信できます。' },
              { icon: '', title: 'バッテリー長持ち', desc: 'お知らせボタンモデル（MG05）は省エネモードで最大2ヶ月持続します。トーク対応機種（MT05・MB06）は最大3週間です（公式の製品仕様）。' },
              { icon: '', title: '複数人見守り', desc: 'ご家族全員でお子さまの位置を確認できます。見守り人の追加は無料です。' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-g600">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Pros & Cons */}
          <h2 className="section-title">メリット・デメリット</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・月額528円〜の料金（税込）</li>
                <li>・お知らせボタンモデル（MG05）はバッテリーが省エネモードで最大2ヶ月持ち、充電の手間が少ない点</li>
                <li>・公式サイトで「利用者数No.1」と表記（data.ai by Sensor Tower調べ）</li>
                <li>・「みてね」アプリの使いやすいUI</li>
                <li>・トークPlus対応でコミュニケーションも可能</li>
                <li>・GPS+Wi-Fi測位による高い位置精度</li>
                <li>・幅・高さ50mmの小型サイズ（MG05は61g）でランドセルに入れやすい点</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・トーク機能を使う場合は月額748円の機種が必要</li>
                <li>・防犯ブザーはトークPlus（MB06）のみ搭載（MG05・MT05は非搭載）</li>
                <li>・本体カラーの選択肢が限られる点</li>
                <li>・屋内での精度がやや落ちる場合がある点</li>
                <li>・通話機能は非対応</li>
              </ul>
            </div>
          </div>

          {/* How to use */}
          <h2 className="section-title">使い方・設定手順</h2>
          <div className="space-y-4 mb-8 max-w-2xl">
            {[
              { step: 1, title: '本体を購入', desc: '公式サイトまたはECサイトで本体（5,280円）を購入します。' },
              { step: 2, title: 'アプリをダウンロード', desc: 'iOS/Android向けの「みてねみまもりGPS」アプリをインストールします。' },
              { step: 3, title: 'アカウント登録・端末登録', desc: 'アプリの案内に従い、GPS端末を登録します。QRコードを読み取るだけで設定できます。' },
              { step: 4, title: '見守り設定', desc: 'エリア通知や更新頻度を設定します。見守り人の追加も可能です。' },
              { step: 5, title: 'ランドセルに入れて完了', desc: 'お子さまのランドセルやポケットに入れると、見守りが始まります。' },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start card-hover p-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center font-bold text-sm">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-bold text-g800 text-sm">{s.title}</h3>
                  <p className="text-sm text-g600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="section-title">おすすめのご家庭／適さないご家庭</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-2">おすすめのご家庭</h3>
              <ul className="space-y-1.5 text-sm text-g700">
                <li>・大手（MIXI）運営の安心感を重視したいご家庭</li>
                <li>・家族アルバム「みてね」を利用しており、連携したいご家庭</li>
                <li>・まずGPSから始め、将来トーク・通話も検討したいご家庭（3機種から選択可能）</li>
                <li>・ご家族全員で見守りを共有したいご家庭</li>
              </ul>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange-dark mb-2">適さないご家庭</h3>
              <ul className="space-y-1.5 text-sm text-g700">
                <li>・月額・本体価格を最安に抑えたいご家庭</li>
                <li>・屋内・地下での位置精度を最優先したいご家庭（3測位対応機種をおすすめします）</li>
                <li>・当初からトーク・通話が必須のご家庭（上位プランが前提となります）</li>
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
          <p className="text-sm text-g600 mt-3">みてねみまもりGPSを含む主要5機種の海外利用の可否（公式FAQ）と、海外旅行中の代わりの方法は<Link href="/knowledge/international/" className="text-blue underline">子供用GPSは海外で使える？</Link>でまとめています。</p>

          {/* CTA */}
          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">みてねみまもりGPSが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">月額528円〜、公式サイトで「利用者数No.1」と表記しているGPS端末です。他機種との比較もあわせてご確認ください。</p>
            <MiteneAffBanner className="mb-4" />
            <div className="mb-6"><MiteneAffText /></div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/bot-talk/" className="btn-accent">次のレビュー: BoTトーク</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
