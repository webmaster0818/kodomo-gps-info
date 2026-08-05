import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'あんしんウォッチャーの寿命は？電池交換不可・最大2カ月＝買い替え時期【2026年】評判・口コミ・2台目無料も',
  description:
    'あんしんウォッチャー（KDDI/au）の寿命・バッテリーを公式情報で解説。電池は内蔵式で交換不可、1回の充電で最大約2カ月（1,500mAh）。劣化したら端末の買い替えが前提です。あわせて月額539円・2台目0円・最大10人見守り・評判・口コミ・LEとの違い・解約条件まで（2026年6月確認）。',
};

const faqData = [
  { q: 'あんしんウォッチャーの月額料金は？', a: '月額539円（税込・au HOME基本利用料）です。通常版のセットプランは初月を含む12カ月目の末日まで月額無料、LEのセットプランは初月無料の特典があります（以降自動更新で539円/月）。日割り計算はありません。' },
  { q: '2台目は本当に無料ですか？', a: '2台目の月額料金は0円です。1つのau IDにつき最大2台まで利用登録でき、月額539円は契約単位のため2台登録しても追加月額はかかりません（本体代金は別途必要）。兄弟・姉妹で使う場合、1台あたり約270円のランニングコストになります。' },
  { q: '何人まで見守りできますか？', a: '契約者のほかに家族9人を招待でき、契約者を含め最大10人で位置情報を共有できます。両親・祖父母・親戚まで見守りメンバーに追加可能です。' },
  { q: '家族招待のやり方は？', a: '無料の「au HOME」アプリの家族招待機能を使います。契約者がアプリから新しいユーザーを招待し、招待される側はau IDまたはメールアドレスがあれば参加できます。権限は「管理者」（デバイス登録・家族招待など契約者と同等）と「利用者」（見守り機能のみ）の2種類から選べます。' },
  { q: 'バッテリーはどれくらい持ちますか？交換はできますか？', a: '公式スペックで1回の充電で最大約2カ月（1,500mAh・利用状況により変動）、充電はUSB Type-Cです。なお電池は内蔵式のため取り外し・交換はできないと公式FAQに明記されています。バッテリーが劣化した場合は買い替えが前提になります。' },
  { q: 'au以外の回線でも使えますか？', a: 'はい、保護者のスマホはau以外（ドコモ・ソフトバンク・格安SIMなど）でも問題ありません。GPS端末側の通信にKDDIのLTE-M回線を使用しますが、保護者側のau HOMEアプリはどのキャリアでも動作します。なお端末の海外利用はできません。' },
  { q: 'トーク・通話機能はありますか？', a: 'トーク・通話機能は搭載されていません。位置確認・エリア通知・移動履歴に特化したシンプルなGPS端末です。本体ボタンを3秒長押しすると保護者に現在地を通知できる機能はあります。' },
  { q: '解約時に違約金はかかりますか？', a: '最低利用期間・解約違約金はありません（公式FAQ明記）。ただし通常版は解約すると12カ月無料期間の残りが無効になり、LEは初月解約でも539円が発生します。また一度利用登録した端末は、解約後の再利用が原則できない（解約月の翌月末までの再申込を除く）点に注意してください。' },
  { q: 'あんしんウォッチャーの寿命は何年くらいですか？', a: '本体寿命の年数について公式な目安は公表されていません。電池は内蔵式で交換できないため、リチウムイオン電池の一般的な劣化（充電を繰り返すと容量が落ちる）を考えると、数年単位での買い替えを見込んでおくのが現実的です。1回の充電での電池持ちは公式スペックで最大約2カ月です。' },
  { q: 'あんしんウォッチャーの2台目の月額はいくらですか？', a: '2台目の月額は0円です。月額539円は1つのau ID（au HOME契約）単位の料金で、2台目を登録しても月額は増えません（本体代金は別途必要）。兄弟・姉妹2人で使うと、1台あたり約270円のランニングコストになります。なお1つのau IDで登録できるのは2台までです。' },
  { q: 'あんしんウォッチャーのデメリット・短所は？', a: '主なデメリットは、(1)トーク・通話機能がない、(2)電池が内蔵式で交換不可（劣化したら買い替え）、(3)1つのau IDで登録できるのは2台まで、(4)海外では利用不可、(5)解約した端末は原則再利用できない、の5点です。子供と通話・メッセージをしたい場合は、トーク機能のある他機種も検討するとよいでしょう。' },
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

export default function AnshinWatcherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "あんしんウォッチャーの評判・口コミ｜2台目無料・何人まで・バッテリー寿命まで徹底解説", "datePublished": "2026-03-15", "dateModified": "2026-07-25", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "レビュー", "item": "https://gps-kodomo.com/review/"}, {"@type": "ListItem", "position": 3, "name": "あんしんウォッチャー", "item": "https://gps-kodomo.com/review/anshin-watcher/"}]}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/#ranking' }, { name: 'あんしんウォッチャー' }]} />

      <section className="bg-gradient-to-br from-orange-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">2台目無料</span>
            <span className="tag-pill bg-blue text-white">au品質</span>
            <span className="tag-pill bg-green text-white">2026年6月23日 更新</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            あんしんウォッチャー 徹底レビュー
          </h1>
          <p className="text-g600 text-lg">KDDI/au提供 | 月額539円 | 2台目0円 | 契約者含め最大10人で見守り</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8 bg-blue-light/50 border-l-4 border-blue rounded-xl">
            <h2 className="font-extrabold text-g800 mb-3">結論：あんしんウォッチャーの「寿命」早わかり</h2>
            <ul className="space-y-2 text-sm text-g700">
              <li>・<strong>電池持ち</strong>：1回の充電で<strong>最大約2カ月</strong>（1,500mAh・位置更新頻度で変動／USB Type-C充電）</li>
              <li>・<strong>電池交換</strong>：内蔵式で<strong>交換不可</strong>（公式FAQ明記）。劣化したら端末ごと買い替えが前提</li>
              <li>・<strong>本体寿命の目安</strong>：公式な年数の公表はなし。リチウムイオン電池の一般的な劣化から<strong>数年単位での買い替え</strong>を見込むのが現実的</li>
              <li>・<strong>充電忘れ対策</strong>：残量が少なくなるとアプリに通知が届く設計</li>
            </ul>
            <p className="text-xs text-g500 mt-3">出典：au公式デバイスページ／KDDI公式FAQ「電池パックは交換できますか？」（2026年6月12日確認）。詳細は下の「バッテリー寿命と交換可否」をご覧ください。</p>
          </div>

          <h2 className="section-title">あんしんウォッチャーとは</h2>
          <p className="text-g600 mb-6">
            あんしんウォッチャーは、KDDI（au）が提供する子供用GPS端末です。
            月額539円（au HOME基本利用料）で、1つのau IDにつき2台目の端末は月額0円で追加できるため、兄弟・姉妹での利用に強いのが最大の特徴。
            契約者を含めて最大10人で見守りでき、KDDIのLTE-M回線による安定した通信が強みです。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック（公式・2026年6月確認）</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'KDDI / au'],
                    ['月額料金', '539円（税込）※無料期間特典あり'],
                    ['2台目', '月額0円（au IDごとに最大2台）'],
                    ['本体価格', '通常版11,000円 / LE 5,680円（税込）'],
                    ['測位方式', 'GNSS（GPS・みちびき等）+Wi-Fi+基地局'],
                    ['バッテリー', '1,500mAh・最大約2カ月（USB Type-C充電）'],
                    ['通信回線', 'KDDI LTE-M（海外利用不可）'],
                    ['見守り人数', '招待9人+契約者=最大10人'],
                    ['防水防塵', 'IP55'],
                    ['サイズ/重量', '約50×50×18.8mm / 約53g'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-g100">
                      <td className="py-2 font-semibold text-g700 w-1/3">{k}</td>
                      <td className="py-2 text-g600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-g400 mt-2">出典: au HOME公式（料金・デバイスページ）2026年6月12日確認</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">コスト比較</h3>
              <div className="space-y-3">
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">1台利用</p>
                  <p className="text-2xl font-extrabold text-g800">月額 539円</p>
                  <p className="text-xs text-g500 mt-1">通常版セットプランは初月含む12カ月無料、LEは初月無料</p>
                </div>
                <div className="bg-green-light rounded-xl p-4">
                  <p className="font-bold text-green-dark">2台利用（兄弟）</p>
                  <p className="text-2xl font-extrabold text-g800">月額 539円<span className="text-sm font-normal text-g500">（2台合計）</span></p>
                  <p className="text-sm text-green-dark font-semibold mt-1">1台あたり約270円！</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="section-title">2台目の追加方法と料金の仕組み</h2>
          <div className="card-hover p-5 mb-8">
            <p className="text-sm text-g600 mb-3">
              「2台目無料」の正確な仕組みは次のとおりです（au公式の記載に基づく）。
            </p>
            <ul className="space-y-2 text-sm text-g700 mb-3">
              <li>・月額539円は<strong>au HOME契約（au ID）単位</strong>の料金。端末ごとではない</li>
              <li>・1つのau IDに「あんしんウォッチャー」「あんしんウォッチャー LE」「かんたん見守りプラグ」をあわせて<strong>最大2台まで</strong>登録可能</li>
              <li>・2台目は<strong>本体代金のみ</strong>（通常版11,000円 / LE 5,680円）で、月額の追加は0円</li>
              <li>・追加手順: au HOMEアプリの「デバイス」タブ →「あんしんウォッチャーの利用を開始する」から2台目を登録</li>
            </ul>
            <p className="text-sm text-g600">
              兄弟2人ならLEを2台使うことで本体コストも抑えられます。3台以上は1つのau IDでは登録できない点に注意してください。
            </p>
            <p className="text-xs text-g400 mt-2">出典: au HOME料金ページ・KDDI公式コラム（2026年6月12日確認）</p>
          </div>

          <h2 className="section-title">家族招待のやり方（何人まで見守れる？）</h2>
          <div className="card-hover p-5 mb-8">
            <ul className="space-y-2 text-sm text-g700 mb-3">
              <li>・招待できる家族は<strong>9人</strong>。契約者を含めて<strong>最大10人</strong>で位置情報を共有可能</li>
              <li>・招待は無料の「au HOME」アプリから。契約者がログインして新しいユーザーを招待する</li>
              <li>・招待される側に必要なのは<strong>au IDまたはメールアドレス</strong>のみ（auユーザーでなくてもOK）</li>
              <li>・権限は2種類: <strong>管理者</strong>（デバイス登録・解除や家族招待まで可能）/ <strong>利用者</strong>（見守り機能のみ）</li>
            </ul>
            <p className="text-sm text-g600">
              祖父母を「利用者」権限で招待しておけば、設定を触られる心配なく見守りだけ共有できます。
            </p>
            <p className="text-xs text-g400 mt-2">出典: au HOMEアプリ公式ページ・公式FAQ（2026年6月12日確認）</p>
          </div>

          <h2 className="section-title">バッテリー寿命と交換可否（買う前に知っておくべき点）</h2>
          <div className="card-hover p-5 mb-8">
            <ul className="space-y-2 text-sm text-g700 mb-3">
              <li>・電池持ちは公式スペックで<strong>1回の充電で最大約2カ月</strong>（1,500mAh、位置更新頻度により変動）</li>
              <li>・充電端子は<strong>USB Type-C</strong>。充電アダプターの同梱有無は公式の同梱品リストでご確認ください</li>
              <li>・<strong>電池は内蔵式のため交換不可</strong>と公式FAQに明記。バッテリーが劣化したら端末買い替えが前提</li>
              <li>・本体・バッテリーの寿命年数の公式な目安は公表されていません</li>
              <li>・電池残量が少なくなるとアプリに通知が届くため、充電忘れは起きにくい設計</li>
            </ul>
            <p className="text-sm text-g600">
              「電池交換すれば長く使えるか」を気にする方は多いですが、交換不可のため、リチウムイオン電池の一般的な劣化を考えると数年単位での買い替えを見込んでおくのが現実的です。
            </p>
            <p className="text-xs text-g400 mt-2">出典: au公式デバイスページ、KDDI公式FAQ「電池パックは交換できますか？」（2026年6月12日確認）</p>
          </div>

          <h2 className="section-title">通常版とLEの違い</h2>
          <div className="card-hover p-5 mb-8">
            <p className="text-sm text-g600 mb-3">公式ページには「機能・仕様は同一」と記載されており、違いは本体価格と月額の無料期間です。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-g200">
                    <th className="py-2 text-left text-g700">項目</th>
                    <th className="py-2 text-left text-g700">あんしんウォッチャー（通常版）</th>
                    <th className="py-2 text-left text-g700">あんしんウォッチャー LE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-g100"><td className="py-2 font-semibold text-g700">本体価格</td><td className="py-2 text-g600">11,000円（税込）</td><td className="py-2 text-g600">5,680円（税込）</td></tr>
                  <tr className="border-b border-g100"><td className="py-2 font-semibold text-g700">月額無料期間（セットプラン）</td><td className="py-2 text-g600">初月含む12カ月無料</td><td className="py-2 text-g600">初月のみ無料</td></tr>
                  <tr className="border-b border-g100"><td className="py-2 font-semibold text-g700">機能・スペック</td><td className="py-2 text-g600" colSpan={2}>同一（測位・通知・バッテリー等）</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-g600 mt-3">
              長く使うなら12カ月無料の通常版、初期費用を抑えたい・2台目ならLE、という選び分けが基本です。
            </p>
            <p className="text-xs text-g400 mt-2">出典: au HOME料金ページ・各申込ページ（2026年6月12日確認）</p>
          </div>

          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '📍', title: '現在地確認', desc: 'アプリからワンタップで現在地を確認。GNSS+Wi-Fi+基地局の3方式測位。' },
              { icon: '🔔', title: 'エリア通知', desc: '学校・自宅・塾など設定エリアへの到着/出発を自動通知。' },
              { icon: '🆘', title: '現在地通知ボタン', desc: '本体ボタン3秒長押しで保護者に現在地を通知。もしもの時のSOSに。' },
              { icon: '🚃', title: '乗り物検知', desc: '時速15km以上での移動を検知して通知。電車・車での移動がわかる。' },
              { icon: '💰', title: '2台目無料', desc: '兄弟・姉妹で使えば1台あたり約270円の圧倒的コスパ。' },
              { icon: '👨‍👩‍👧‍👦', title: '最大10人見守り', desc: '契約者+招待9人。祖父母や親戚も見守りに参加できる。' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
                <p className="text-2xl mb-2">{f.icon}</p>
                <h3 className="font-bold text-g800 text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-g600">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">メリット・デメリット</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・2台目月額0円で兄弟利用に最適</li>
                <li>・月額539円+長期無料特典（通常版12カ月）</li>
                <li>・最低利用期間・解約違約金なし</li>
                <li>・契約者含め最大10人で見守り可能</li>
                <li>・バッテリー最大約2カ月の長持ち設計</li>
                <li>・KDDI/auブランドの信頼感とサポート</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・トーク・通話機能なし</li>
                <li>・電池が内蔵式で交換不可（劣化したら買い替え）</li>
                <li>・1つのau IDで登録できるのは2台まで</li>
                <li>・海外では利用不可</li>
                <li>・解約した端末は原則再利用できない</li>
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

          <div className="mt-10 text-center bg-gradient-to-r from-orange-light to-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">あんしんウォッチャーが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">2台目月額0円＋au品質で、兄弟・姉妹の見守りに最適なGPS端末です。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/soranome/" className="btn-accent">次: ソラノメ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
