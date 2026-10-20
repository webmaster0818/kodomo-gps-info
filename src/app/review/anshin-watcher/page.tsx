import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'あんしんウォッチャーの寿命と買い替えの目安｜電池交換不可・保証1年・充電できない時の対処【2026年10月】',
  description:
    'あんしんウォッチャー（KDDI/au）の寿命と買い替えの目安を公式情報で整理しました。電池は内蔵式で交換できません。保証は購入から1年で、期間内の故障は新しい機器と交換、期間外は預かり修理がなく新規購入となります。充電できない時の公式の確認手順や電池残量の見方も掲載しています（2026年10月20日確認）。',
};

const faqData = [
  { q: 'あんしんウォッチャーの実際の口コミはどこで読めますか？', a: '楽天市場など販売ページのレビュー欄で、購入者の実際の口コミを読むことができます。口コミを読む際は、「電池持ち」「位置のズレ」「通知の速さ」に関する記述が、通学見守りという用途に直結する判断材料になります。当ページでは口コミの転載・創作は行わず、公式の一次情報（料金・仕様）を確認日とあわせて整理しています。' },
  { q: 'あんしんウォッチャーの月額料金は？', a: '月額539円（税込・au HOME基本利用料）です。通常版のセットプランは初月を含む12カ月目の末日まで月額無料、LEのセットプランは初月無料の特典があります（以降は自動更新で539円/月）。日割り計算はありません。' },
  { q: '2台目は本当に無料ですか？', a: '2台目の月額料金は0円です。1つのau IDにつき最大2台まで利用登録でき、月額539円は契約単位の料金のため、2台登録しても追加の月額はかかりません（本体代金は別途必要です）。兄弟・姉妹で使う場合、1台あたり約270円のランニングコストになります。' },
  { q: '何人まで見守りできますか？', a: '契約者のほかに家族9人を招待でき、契約者を含め最大10人で位置情報を共有できます。両親・祖父母・親戚まで見守りメンバーに追加できます。' },
  { q: '家族招待のやり方は？', a: '無料の「au HOME」アプリの家族招待機能を使います。契約者がアプリから新しいユーザーを招待し、招待される側はau IDまたはメールアドレスがあれば参加できます。権限は「管理者」（デバイス登録・家族招待など契約者と同等）と「利用者」（見守り機能のみ）の2種類から選べます。' },
  { q: 'バッテリーはどれくらい持ちますか？交換はできますか？', a: '公式スペックでは1回の充電で最大2カ月（1,500mAh）です。この数値は、移動中の測位間隔が標準（約3分）、定期測位が約24時間、平日に1日合計約2時間移動（土日は未使用）、屋外利用という条件での目安で、電波環境や利用状況によって短くなります。充電はUSB Type-Cで、充電用ケーブルとACアダプタは同梱されていません。電池は内蔵式のため、取り外し・交換はできないと公式FAQに明記されています。' },
  { q: 'au以外の回線でも使えますか？', a: 'はい、保護者のスマートフォンはau以外（ドコモ・ソフトバンク・格安SIMなど）でも問題ありません。GPS端末側の通信にはKDDIのLTE-M回線を使用しますが、保護者側のau HOMEアプリはどのキャリアでも動作します。なお、端末の海外利用はできません。' },
  { q: 'トーク・通話機能はありますか？', a: 'トーク・通話機能は搭載されていません。位置確認・エリア通知・移動履歴に特化したシンプルなGPS端末です。本体ボタンを3秒長押しすると、保護者に現在地を通知できる機能はあります。' },
  { q: '解約時に違約金はかかりますか？', a: '最低利用期間・解約違約金はありません（公式FAQに明記）。ただし、通常版は解約すると12カ月無料期間の残りが無効になり、LEは初月解約でも539円が発生します。また、一度利用登録した端末は、解約後の再利用が原則できません（解約月の翌月末までの再申込を除く）。この点にご注意ください。' },
  { q: 'あんしんウォッチャーの寿命は何年くらいですか？', a: '本体寿命の年数について、au・KDDIの公式な目安は公表されていません（2026年10月20日確認）。公式に定められているのは、保証期間が購入から1年であること、電池が内蔵式で交換できないことの2点です。当サイトでは年数を断定せず、「保証期間を過ぎて故障した場合」「設定を見直しても電池持ちの短さが改善しない場合」を買い替えの検討時期の目安としてご案内しています。' },
  { q: 'あんしんウォッチャーの買い替えの目安は？', a: '公式情報にもとづくと、(1)保証期間（購入から1年）を過ぎて故障した場合、(2)電池持ちが短くなり、現在地の更新間隔をバッテリー優先の設定（移動中約5分・定期24時間・連続測位なし）にしても改善しない場合、が買い替えの検討時期の目安です。保証期間内の故障であれば、お客さまセンターでの故障診断のうえ新しい機器が送付されるため、買い替えの必要はありません。' },
  { q: '故障した場合、修理はできますか？', a: 'au公式サポートによると、故障時の預かり修理は受け付けていません。保証期間（購入から1年）内であれば、お客さまセンターへ連絡し、故障診断のうえ新しい機器が送付されます。保証期間外の場合は、au PAY マーケットなどで新しい機器を購入する案内です。なお、水濡れ・湿気による故障は保証の対象外と取扱説明書に記載されています。機器を交換した場合は、au HOMEアプリでの再設定が必要です。' },
  { q: '充電できないときはどうすればよいですか？', a: '公式FAQでは、故障と判断する前に次の4点の確認を案内しています。(1)ACアダプタをコンセントから一度抜いて差し直す、(2)本体のボタンを押しながら差し込んでいないか確認する、(3)AC100Vのコンセントを使っているか確認する、(4)USB Type-Cケーブル（定格入力5V／1.5A）を別のものに替えて試す。それでも充電できない場合は、機器故障の可能性があるため、お客さまセンターへの連絡が案内されています。充電中はLEDが赤点灯、充電完了で緑点灯します。' },
  { q: '電池残量はどうやって確認しますか？', a: '本体のボタンを1回押すと、LEDの色で残量を確認できます。取扱説明書によると、消灯は0%、赤点灯は1〜10%、緑点灯は11〜100%です。また、LEDが赤く点滅している場合はエラーを示します。動作が不安定な場合は、ボタンを約10秒長押しすると再起動できます。' },
  { q: '解約した端末を、あとで再び使えますか？', a: '公式FAQによると、解約後はその端末を利用できなくなります。ただし、解約月の翌月末までに同じau IDでau HOME（またはwith HOME）に申し込み、機器登録を行った場合に限り再利用できます。それ以外の場合は、新しい機器の購入が必要です。' },
  { q: 'あんしんウォッチャーの2台目の月額はいくらですか？', a: '2台目の月額は0円です。月額539円は1つのau ID（au HOME契約）単位の料金で、2台目を登録しても月額は増えません（本体代金は別途必要です）。兄弟・姉妹2人で使うと、1台あたり約270円のランニングコストになります。なお、1つのau IDで登録できるのは2台までです。' },
  { q: 'あんしんウォッチャーのデメリット・短所は？', a: '主なデメリットは、(1)トーク・通話機能がない、(2)電池が内蔵式で交換できない（劣化したら買い替え）、(3)1つのau IDで登録できるのは2台まで、(4)海外では利用できない、(5)解約した端末は原則再利用できない、の5点です。お子さまと通話・メッセージをしたい場合は、トーク機能のある他機種もあわせてご検討ください。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "あんしんウォッチャーの寿命と買い替えの目安｜電池交換不可・保証1年・充電できない時の対処", "datePublished": "2026-03-15", "dateModified": "2026-10-20", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'あんしんウォッチャー' }]} />

      <section className="bg-gradient-to-br from-orange-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">2台目無料</span>
            <span className="tag-pill bg-blue text-white">au品質</span>
            <span className="tag-pill bg-green text-white">2026年10月20日 更新</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            あんしんウォッチャーの寿命と買い替えの目安・レビュー
          </h1>
          <p className="text-g600 text-lg">電池交換不可 | 保証は購入から1年 | 月額539円 | 2台目0円 | 契約者含め最大10人で見守り</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8 bg-blue-light/50 border-l-4 border-blue rounded-xl">
            <h2 className="font-extrabold text-g800 mb-3">あんしんウォッチャーの寿命と買い替えの目安</h2>
            <ul className="space-y-2 text-sm text-g700 mb-4">
              <li>・<strong>本体寿命の年数</strong>：au・KDDIの公式な目安は公表されていません。当サイトでは年数を断定せず、下表の状況別に判断することをおすすめしています。</li>
              <li>・<strong>電池交換</strong>：電池は内蔵式のため、<strong>取り外し・交換はできません</strong>（KDDI公式FAQ）。</li>
              <li>・<strong>保証期間</strong>：<strong>購入から1年</strong>です。期間内の故障は、故障診断のうえ新しい機器が送付されます。<strong>預かり修理は受け付けていません</strong>（au公式サポート）。</li>
              <li>・<strong>電池持ち</strong>：1回の充電で<strong>最大2カ月</strong>（1,500mAh）です。測位間隔約3分・平日1日約2時間の移動などを想定した目安で、利用状況により短くなります。</li>
            </ul>
            <h3 className="font-bold text-g800 text-sm mb-2">状況別の対応（公式情報をもとに当サイトで整理）</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="border-b-2 border-g200 text-left">
                    <th className="py-2 px-2 text-g700">状況</th>
                    <th className="py-2 px-2 text-g700">公式の扱い</th>
                    <th className="py-2 px-2 text-g700">買い替え</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['購入から1年以内に故障した', 'お客さまセンターへ連絡し、故障診断のうえ新しい機器を送付（水濡れ・湿気による故障は保証対象外）', '不要（交換で対応）'],
                    ['購入から1年を過ぎて故障した', '預かり修理なし。au PAY マーケットなどで新しい機器を購入', '必要'],
                    ['電池持ちが短くなった', '電池は交換不可。測位間隔をバッテリー優先（移動中約5分・定期24時間・連続測位なし）にすると電池持ちを改善できると案内', '設定を見直しても改善しない場合に検討'],
                    ['充電できない', 'ACアダプタの差し直し、AC100Vの確認、5V／1.5A対応の別ケーブルで試すなど4点を確認。改善しなければお客さまセンターへ', '保証期間内なら交換、期間外なら検討'],
                    ['解約後にもう一度使いたい', '解約月の翌月末までに同じau IDで再申込・機器登録した場合のみ再利用可', 'それ以外は必要'],
                  ].map(([s, o, r]) => (
                    <tr key={s} className="border-b border-g100 align-top">
                      <td className="py-2 px-2 font-semibold text-g700">{s}</td>
                      <td className="py-2 px-2 text-g600">{o}</td>
                      <td className="py-2 px-2 text-g600">{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-g500 mt-3">
              出典（2026年10月20日確認）：
              <a href="https://homeiot.kddi.com/faq/troublesetting/troublesetting_19_032.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">KDDI公式FAQ「電池パックは交換できますか？」</a>／
              <a href="https://www.au.com/support/service/life/trouble/" target="_blank" rel="noopener noreferrer" className="text-blue underline">au公式「困ったとき・わからないときは」（保証・故障時の対応）</a>／
              <a href="https://homeiot.kddi.com/anshinwatcher/kids/faq/021.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">公式FAQ「充電できません。故障でしょうか？」</a>／
              <a href="https://homeiot.kddi.com/anshinwatcher/kids/faq/013.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">公式FAQ「1回の充電でどのくらい電池は持ちますか？」</a>／
              <a href="https://homeiot.kddi.com/faq/troublesetting/troublesetting_19_029.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">公式FAQ「解約しても再契約すれば使えますか？」</a>／
              <a href="https://homeiot.kddi.com/faq/pdf/uha01a_torisetsu.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">取扱説明書（保証書）</a>
            </p>
          </div>

          <h2 className="section-title">あんしんウォッチャーとは</h2>
          <p className="text-g600 mb-6">
            あんしんウォッチャーは、KDDI（au）が提供する子供用GPS端末です。
            月額539円（au HOME基本利用料）で、1つのau IDにつき2台目の端末を月額0円で追加できるため、兄弟・姉妹での利用に適している点が最大の特徴です。
            契約者を含めて最大10人で見守りができ、KDDIのLTE-M回線による安定した通信も強みです。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック（公式・2026年10月20日確認）</h3>
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
                    ['保証期間', '購入から1年（期間内の故障は新しい機器と交換）'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-g100">
                      <td className="py-2 font-semibold text-g700 w-1/3">{k}</td>
                      <td className="py-2 text-g600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-g400 mt-2">出典：au公式デバイスページ・取扱説明書・公式FAQ「本体の値段」（2026年10月20日確認）</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">コスト比較</h3>
              <div className="space-y-3">
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">1台利用</p>
                  <p className="text-2xl font-extrabold text-g800">月額 539円</p>
                  <p className="text-xs text-g500 mt-1">通常版セットプランは初月を含む12カ月無料、LEは初月無料です。</p>
                </div>
                <div className="bg-green-light rounded-xl p-4">
                  <p className="font-bold text-green-dark">2台利用（兄弟）</p>
                  <p className="text-2xl font-extrabold text-g800">月額 539円<span className="text-sm font-normal text-g500">（2台合計）</span></p>
                  <p className="text-sm text-green-dark font-semibold mt-1">1台あたり約270円</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="section-title">2台目の追加方法と料金の仕組み</h2>
          <div className="card-hover p-5 mb-8">
            <p className="text-sm text-g600 mb-3">
              「2台目無料」の仕組みは次のとおりです（au公式の記載にもとづきます）。
            </p>
            <ul className="space-y-2 text-sm text-g700 mb-3">
              <li>・月額539円は<strong>au HOME契約（au ID）単位</strong>の料金で、端末ごとの料金ではありません。</li>
              <li>・1つのau IDに「あんしんウォッチャー」「あんしんウォッチャー LE」「かんたん見守りプラグ」をあわせて<strong>最大2台まで</strong>登録できます。</li>
              <li>・2台目は<strong>本体代金のみ</strong>（通常版11,000円 / LE 5,680円）で、月額の追加は0円です。</li>
              <li>・追加手順：au HOMEアプリの「デバイス」タブ →「あんしんウォッチャーの利用を開始する」から2台目を登録します。</li>
            </ul>
            <p className="text-sm text-g600">
              兄弟2人の場合は、LEを2台使うことで本体コストも抑えられます。1つのau HOME契約で登録できるのは2台までですが、公式FAQによると、最大5つのau HOME契約をまとめることで、最大10台を1つのau HOMEアプリで確認できます。
            </p>
            <p className="text-xs text-g400 mt-2">出典：au HOME料金ページ・KDDI公式コラム（2026年6月12日確認）／<a href="https://homeiot.kddi.com/anshinwatcher/kids/faq/004.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">公式FAQ「複数のあんしんウォッチャーを一つのスマホに登録できますか？」</a>（2026年10月20日確認）</p>
          </div>

          <h2 className="section-title">家族招待のやり方（何人まで見守れる？）</h2>
          <div className="card-hover p-5 mb-8">
            <ul className="space-y-2 text-sm text-g700 mb-3">
              <li>・招待できる家族は<strong>9人</strong>です。契約者を含めて<strong>最大10人</strong>で位置情報を共有できます。</li>
              <li>・招待は無料の「au HOME」アプリから行います。契約者がログインし、新しいユーザーを招待します。</li>
              <li>・招待される側に必要なのは<strong>au IDまたはメールアドレス</strong>のみです（auユーザーでなくても参加できます）。</li>
              <li>・権限は2種類です：<strong>管理者</strong>（デバイス登録・解除や家族招待まで可能）/ <strong>利用者</strong>（見守り機能のみ）</li>
            </ul>
            <p className="text-sm text-g600">
              祖父母を「利用者」権限で招待しておけば、設定を変更される心配なく、見守りのみを共有できます。
            </p>
            <p className="text-xs text-g400 mt-2">出典：au HOMEアプリ公式ページ・公式FAQ（2026年6月12日確認）</p>
          </div>

          <h2 className="section-title">バッテリー寿命と交換可否・電池残量の確認方法</h2>
          <div className="card-hover p-5 mb-8">
            <ul className="space-y-2 text-sm text-g700 mb-3">
              <li>・電池持ちは、公式スペックで<strong>1回の充電で最大2カ月</strong>です（1,500mAh）。移動中の測位間隔が標準（約3分）、定期測位が約24時間、平日に1日合計約2時間移動（土日は未使用）、屋外利用という条件での目安です。</li>
              <li>・電池持ちを優先する場合、公式FAQでは「移動中の測位間隔：バッテリー優先（約5分）」「定期測位：24時間」「連続測位：なし」の組み合わせが案内されています。</li>
              <li>・充電端子は<strong>USB Type-C</strong>（定格入力5V／1.5A）です。<strong>充電用ケーブルとACアダプタは同梱されていません</strong>（取扱説明書の同梱物一覧）。出力5V・1.5A以上のACアダプタの使用が推奨されています。</li>
              <li>・<strong>電池は内蔵式のため交換できない</strong>と公式FAQに明記されています。</li>
              <li>・電池残量は、本体のボタンを1回押すとLEDの色で確認できます（消灯：0%／赤点灯：1〜10%／緑点灯：11〜100%）。残量が少なくなると、アプリにも通知が届きます。</li>
            </ul>
            <p className="text-sm text-g600">
              電池を交換して使い続けることはできないため、設定を見直しても電池持ちが短い状態が続く場合が、買い替えを検討する時期の目安です。本体寿命の年数は公式に公表されていないため、当サイトでは年数を断定していません。
            </p>
            <p className="text-xs text-g400 mt-2">出典：<a href="https://www.au.com/life/auhome/device/uha01a/" target="_blank" rel="noopener noreferrer" className="text-blue underline">au公式デバイスページ</a>、KDDI公式FAQ（電池パックの交換／電池持ち）、取扱説明書（2026年10月20日確認）</p>
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
              長く使う場合は12カ月無料の通常版、初期費用を抑えたい場合や2台目にはLEを選ぶのが基本的な考え方です。
            </p>
            <p className="text-xs text-g400 mt-2">出典：au HOME料金ページ・各申込ページ（2026年6月12日確認）</p>
          </div>

          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '📍', title: '現在地確認', desc: 'アプリからワンタップで現在地を確認できます。GNSS+Wi-Fi+基地局の3方式で測位します。' },
              { icon: '🔔', title: 'エリア通知', desc: '学校・自宅・塾など、設定したエリアへの到着・出発を自動で通知します。' },
              { icon: '🆘', title: '現在地通知ボタン', desc: '本体ボタンを3秒長押しすると、保護者に現在地を通知します。緊急時のSOSとして利用できます。' },
              { icon: '🚃', title: '乗り物検知', desc: '時速15km以上での移動を検知して通知します。電車・車での移動を把握できます。' },
              { icon: '💰', title: '2台目無料', desc: '兄弟・姉妹で使う場合、1台あたり約270円とコストを大きく抑えられます。' },
              { icon: '👨‍👩‍👧‍👦', title: '最大10人見守り', desc: '契約者と招待した9人で見守れます。祖父母や親戚も見守りに参加できます。' },
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
                <li>・2台目月額0円で、兄弟での利用に適している点</li>
                <li>・月額539円+長期無料特典（通常版12カ月）</li>
                <li>・最低利用期間・解約違約金なし</li>
                <li>・契約者含め最大10人で見守り可能</li>
                <li>・バッテリー最大約2カ月の長持ち設計</li>
                <li>・KDDI/auブランドの信頼性とサポート</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・トーク・通話機能なし</li>
                <li>・電池が内蔵式で交換不可（劣化したら買い替え）</li>
                <li>・1つのau IDで登録できるのは2台まで</li>
                <li>・海外では利用不可</li>
                <li>・解約した端末は原則再利用できない点</li>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">あんしんウォッチャーをご検討中の方へ</h2>
            <p className="text-g600 mb-6 text-sm">2台目月額0円とau品質を備え、兄弟・姉妹の見守りに適したGPS端末です。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/soranome/" className="btn-accent">次: ソラノメ（販売終了）</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
