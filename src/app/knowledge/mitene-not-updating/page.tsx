import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'みてねみまもりGPSが動かない・位置が更新されない7つの原因と対処｜公式ヘルプの記載を整理【2026年11月】',
  description:
    'みてねみまもりGPSの位置が動かない（更新されない）原因と対処法を、公式ヘルプセンターの記載にもとづいて整理しています。静止中は送信しない仕様、電源オフモード、決済エラー、電波環境など7つの原因と、確認する順番・リセット方法・問い合わせ先をまとめています。',
  keywords: ['みてねみまもりGPS', '動かない', '更新されない', '位置情報', 'リセット', '電源オフモード'],
};

const HELP = 'https://help.gps.mitene.us/hc/ja/articles/';

const causes = [
  {
    cause: '端末が静止している',
    detail: '端末は内蔵センサーで振動を検知し、移動している間だけ位置情報を送信します。机の上やランドセルを置いたままの状態では、バッテリーの消耗を抑えるために送信を止めます。',
    action: '端末を持って移動すると送信が再開されます。不具合ではありません。',
  },
  {
    cause: '電源オフモードになっている',
    detail: 'アプリの稼働モードが「電源オフ」に設定されていると、位置情報は更新されません。',
    action: '端末に充電ケーブルを接続したまま約5分待ちます。アプリで位置情報が測位されると、端末は自動的に起動状態に戻ります。',
  },
  {
    cause: '月額通信費の決済がエラーになっている',
    detail: 'クレジットカードの有効期限切れなどで月額通信費の決済がエラーになると、位置情報は更新されません。',
    action: '管理者のアプリで決済の状態を確認し、お支払い情報を更新します。',
  },
  {
    cause: '電波環境が悪い・測位精度が低い',
    detail: '屋内・地下・車内・電車内などで衛星やWi-Fiを十分に検出できないと、位置が記録されません。測位できても精度が低いと判断した位置は、アプリに表示されません。',
    action: '空の開けた屋外で移動し、測位されるかを確認します。',
  },
  {
    cause: '「微弱なWi-Fi電波による測位」を除外している',
    detail: 'この設定を「除外する」にしていると、微弱なWi-Fi電波で測位したデータはアプリに表示されません。',
    action: '屋外を移動中なのに更新されない場合は「除外しない」に変えると改善する可能性があります。誤差の大きい位置が頻繁に出るようになったら「除外する」に戻します（設定は以後の測位から適用されます）。',
  },
  {
    cause: 'モバイル通信（LTE）が不安定',
    detail: '位置情報はLTE通信網で送信されます。電波が不安定だと送信できず、次回の測位のタイミング（高頻度モードで90秒後、省エネモードで3分後）に再送信されます。',
    action: 'LTEの電波がよい場所で測位されるかを確認します。通信が不安定な間は、反映まで時間がかかる場合があります。',
  },
  {
    cause: '飛行機・新幹線などで高速に移動した',
    detail: '前回の測位から大きく離れた位置は「異常な測位データ」と判断され、表示されないことがあります。',
    action: '連続して移動していると正常なデータとして表示されるようになります。到着後に徒歩で移動すると通常どおり測位されます。',
  },
];

const faqData = [
  {
    q: 'みてねみまもりGPSの位置はリアルタイムで更新されますか？',
    a: 'リアルタイムではありません。公式ヘルプによると、アプリに表示される位置は稼働モードに応じて90秒または3分の間隔で更新され、送信に失敗した場合や測位の精度が低い場合はそれ以上の間隔があきます。端末が静止している間は測位と送信を中断します。',
  },
  {
    q: '家に帰ったのに到着の通知が届きません。故障でしょうか？',
    a: '故障とは限りません。到着の通知は、前回の測位がみまもりスポットの外側で、次の測位が内側で記録されたときに送信されます。測位のタイミングで屋内に入っていてGPS電波を受信できなかった場合は、通知が送信されません。アプリの測位履歴をご確認ください。みまもりスポットは半径50m〜300mで設定できます。',
  },
  {
    q: 'リセットすると設定や契約は消えますか？',
    a: '消えません。公式ヘルプによると、端末をリセットしても、アプリで設定した稼働モードやみまもりスポットなどの設定は削除されず、月額使用料の支払いも解除されません。',
  },
  {
    q: '充電してもアプリの電池残量が増えません。',
    a: '電池残量の情報は測位データと一緒に送信されるため、満充電（LEDが緑色に点灯）になっても、測位が始まるまでアプリの表示は更新されません。端末を持って移動し、測位されたあとに改めてご確認ください。',
  },
  {
    q: 'すべて確認しても動かない場合はどこに問い合わせればよいですか？',
    a: 'アプリのメニュー（≡）＞「アカウント設定」＞「お問い合わせ」から、みてねみまもりGPSのカスタマーサポートに連絡できます。端末IDと症状をあわせて伝えると、確認が進めやすくなります。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function MiteneNotUpdatingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'みてねみまもりGPSが動かない・位置が更新されない原因と対処', datePublished: '2026-11-15', dateModified: '2026-11-15', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'みてねみまもりGPSが動かない' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">トラブル対処</span>
            <span className="tag-pill bg-blue text-white">みてねみまもりGPS</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">みてねみまもりGPSが動かない・位置が更新されない原因と対処</h1>
          <p className="text-g600 text-lg">公式ヘルプセンターに記載されている原因を、確認しやすい順に整理しています。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：まず「静止中ではないか」「電源オフモード・決済エラーではないか」を確認してください</h2>
            <p className="text-g600">
              みてねみまもりGPSは、<strong>端末が動いている間だけ位置を送信する仕様</strong>です。置いたままの端末の位置が変わらないのは故障ではありません。そのうえで、移動しているのに更新されない場合は、<strong>電源オフモード</strong>と<strong>月額通信費の決済エラー</strong>をアプリで確認します。この2つに当てはまらなければ、電波環境・Wi-Fi測位の設定・リセットの順に確認します。
            </p>
          </div>

          <h2 className="section-title">位置が更新されない7つの原因と対処</h2>
          <p className="text-sm text-g600 mb-4">公式ヘルプ「位置情報が更新されません。」に記載された6つの原因と、「位置情報が動かない（更新されない）ことがあります。」の電源オフモードの記載を、原因ごとに分けて整理しています。</p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">原因</th>
                  <th className="p-3 text-left border-b-2 border-blue">何が起きているか</th>
                  <th className="p-3 text-left border-b-2 border-blue">対処</th>
                </tr>
              </thead>
              <tbody>
                {causes.map((c) => (
                  <tr key={c.cause} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">{c.cause}</td>
                    <td className="p-3 text-g700">{c.detail}</td>
                    <td className="p-3 text-g700">{c.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：みてねみまもりGPS ヘルプセンター「<a href={`${HELP}900004440886`} target="_blank" rel="noopener noreferrer" className="text-blue underline">位置情報が更新されません。</a>」「<a href={`${HELP}4408356575769`} target="_blank" rel="noopener noreferrer" className="text-blue underline">位置情報が動かない（更新されない）ことがあります。</a>」「<a href={`${HELP}900004440206`} target="_blank" rel="noopener noreferrer" className="text-blue underline">電源オフモードからの復旧方法を教えてください。</a>」（いずれも2026年11月15日確認）
          </p>

          <h2 className="section-title">確認する順番（チェックリスト）</h2>
          <ol className="space-y-2 text-sm text-g700 mb-3 list-decimal pl-5">
            <li>端末を持って屋外を数分歩き、位置が更新されるかを確認します（静止中は送信されません）。</li>
            <li>アプリで端末の稼働モードを確認し、電源オフモードであれば充電ケーブルを接続して約5分待ちます。</li>
            <li>管理者のアプリで、月額通信費の決済がエラーになっていないかを確認します。</li>
            <li>端末を充電し、LEDが緑色に点灯する（満充電）まで待ちます。</li>
            <li>アプリのメニュー（≡）の端末情報に表示される端末IDと、端末本体にプリントされたIDが一致するかを確認します。</li>
            <li>付属のリセットピンで端末のリセットボタンを押します（マイク穴と間違えないようご注意ください）。</li>
            <li>改善しない場合は、アプリのメニュー（≡）＞「アカウント設定」＞「お問い合わせ」からカスタマーサポートに連絡します。</li>
          </ol>
          <p className="text-xs text-g400 mb-8">
            出典：みてねみまもりGPS ヘルプセンター「<a href={`${HELP}900004440746`} target="_blank" rel="noopener noreferrer" className="text-blue underline">端末が故障した場合、どうしたらよいですか？</a>」「<a href={`${HELP}4403617174681`} target="_blank" rel="noopener noreferrer" className="text-blue underline">端末のリセット方法を教えてください。</a>」（2026年11月15日確認）
          </p>

          <h2 className="section-title">LEDランプで端末の状態を確認する</h2>
          <div className="card-hover p-5 mb-3">
            <ul className="space-y-2 text-sm text-g700">
              <li>・<strong>充電中</strong>：赤色点滅（残量少）→ 黄色点滅（残量中）→ 緑色点滅（満充電前）→ <strong>緑色点灯で満充電</strong>です。</li>
              <li>・<strong>白色の点滅</strong>：お支払い情報の登録前・SIM開通前に操作した場合や、リセット直後に回線へ接続するまでの間に点滅します。不具合ではなく、接続が完了すると消灯して測位が始まります（MT05・MG05は白く回転しながら点灯します）。</li>
              <li>・<strong>赤色の点滅（充電していないとき）</strong>：電池残量が少ない状態です。充電してください。</li>
            </ul>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：みてねみまもりGPS ヘルプセンター「<a href={`${HELP}50608069937561`} target="_blank" rel="noopener noreferrer" className="text-blue underline">GPS端末のLEDランプの状態について</a>」「<a href={`${HELP}900004440626`} target="_blank" rel="noopener noreferrer" className="text-blue underline">端末に充電できません。</a>」（2026年11月15日確認）
          </p>

          <h2 className="section-title">リセットの方法（機種別）</h2>
          <div className="card-hover p-5 mb-3">
            <ul className="space-y-2 text-sm text-g700">
              <li>・<strong>MB06／MG04・MT04・MG05・MT05／MG01・MG02・MG03</strong>：いずれも付属のリセットピンでリセットボタンを押します。</li>
              <li>・<strong>MG01・MG02のみ</strong>：リセットボタンで効果がない場合、充電ケーブルを電源につないだ状態で端末への抜き差しを5〜10回繰り返す方法が案内されています。</li>
              <li>・リセットしても、稼働モード・みまもりスポットなどの設定や、月額使用料の支払いは解除されません。</li>
            </ul>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：みてねみまもりGPS ヘルプセンター「<a href={`${HELP}4403617174681`} target="_blank" rel="noopener noreferrer" className="text-blue underline">端末のリセット方法を教えてください。</a>」（2026年11月15日確認）
          </p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              <strong>ご注意</strong>：本ページは公式ヘルプセンターの記載を整理したもので、当サイトが端末で動作を検証した結果ではありません。手順や表示はアプリ・端末の更新で変わる場合があります。最新の情報は公式ヘルプセンターをご確認ください。他の機種にも共通する確認事項は「<Link href="/knowledge/troubleshoot/" className="text-blue underline">子供GPS トラブル対処ガイド</Link>」にまとめています。
            </p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
          <p className="text-xs text-g400 mt-3">
            出典：みてねみまもりGPS ヘルプセンター「<a href={`${HELP}900005689946`} target="_blank" rel="noopener noreferrer" className="text-blue underline">位置情報はリアルタイムに更新されますか？</a>」「<a href={`${HELP}16946088603417`} target="_blank" rel="noopener noreferrer" className="text-blue underline">到着・出発の通知が届きません</a>」ほか（2026年11月15日確認）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/mitene/" className="btn-primary">みてねみまもりGPSの詳細</Link>
              <Link href="/knowledge/indoor-accuracy/" className="btn-accent">屋内での位置精度</Link>
              <Link href="/knowledge/troubleshoot/" className="btn-primary">子供GPS トラブル対処ガイド</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
