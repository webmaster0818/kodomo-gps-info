import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'myFirst Circleアプリとは｜旧アプリからの移行・家族の追加・位置情報の共有設定・更新間隔【2026年11月】',
  description:
    'myFirst Foneの保護者用アプリ「myFirst Circle」を公式FAQの記載で整理しています。旧アプリとの違い、家族の追加手順、メイン管理者以外が位置情報を見るための共有設定、更新間隔と測位方式をまとめています。',
  keywords: ['myFirst Circle', 'マイファーストサークル', 'myFirst Fone', 'アプリ', '使い方', '位置情報'],
};

const FAQ_URL = 'https://jp.myfirst.tech/pages/myfirst-fone-faq';
const UPDATE_URL = 'https://jp.myfirst.tech/pages/update';
const CHECKED = '2026年11月17日確認';

const versions: [string, string, string][] = [
  ['myFirst Circle（アプリ）', 'iOS 4.0.1／Android 4.0.1', '旧アプリ「myFirst Fone」はサービス終了'],
  ['myFirst Fone S4', '3.1.5', 'eSIM機種'],
  ['myFirst Fone R2', '2.1.4', 'eSIM機種'],
  ['myFirst Fone S3+', '2.1.5', 'eSIM機種'],
  ['myFirst Fone M1／S3／S3c／R1s／R1', '2.1.6', 'nanoSIM機種'],
  ['myFirst Fone R1c', '2.1.5', 'nanoSIM機種'],
];

const faqData = [
  {
    q: '旧アプリ「myFirst Fone」のアカウントはそのまま使えますか？',
    a: '使えません。公式FAQによると、2024年9月1日以降、myFirst Fone の端末は旧アプリ「myFirst Fone」では利用できず、「myFirst Circle」への移行が必要です。R1・R1s を「Fone OS」に更新した後は、Circle アプリで新しくアカウントを作成するよう案内されています。旧アプリはサービスを終了しています。',
  },
  {
    q: 'myFirst Fone を持っていなくてもアプリは使えますか？',
    a: '使えます。端末がない場合は位置情報の取得はできませんが、同じアプリを使っている人と友達になることで、通話・メッセージ・SNS投稿などの機能を利用できると公式FAQに記載されています。',
  },
  {
    q: '祖父母のスマートフォンでも子どもの位置を見られますか？',
    a: '見られます。ただし、メイン管理者以外のアカウントがリアルタイムの位置情報を見るには「位置情報の共有」の設定が必要です。位置情報の履歴を確認できるのはメイン管理者のみと案内されています。手順は本ページの「位置情報の共有設定」をご確認ください。',
  },
  {
    q: 'Apple Watch で通知を受け取れますか？',
    a: '公式FAQでは、myFirst Circle アプリは Apple Watch に対応していないと案内されています。そのほかのスマートウォッチでも通知が表示されない場合があり、動作保証の対象外です。着信やメッセージの通知は、アプリを入れたスマートフォンでのみ表示されます。',
  },
  {
    q: '「時計が削除されました」という通知が届きます。',
    a: 'myFirst Fone R1 の「デバイス外れアラート」の通知です。不要な場合は、メイン管理者のアプリでキッズアカウント内の「デバイス外れアラート」をオフにすると通知されなくなります。サブ管理者からは設定できません（公式FAQ）。',
  },
  {
    q: '位置情報の誤差はどのくらいですか？',
    a: '公式FAQでは、高速移動を伴わない状態で100m前後の誤差は仕様の範囲内と案内されています。電車や車など速度の出る乗り物で移動している間は、正確な位置を取得できない可能性が高くなります。GPSもWi-Fiも取れず基地局（LBS）で測位した場合は、数キロメートルの誤差が出ることがあるとも記載されています。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function MyfirstCirclePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'myFirst Circleアプリとは', datePublished: '2026-11-17', dateModified: '2026-11-17', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'myFirst Circleアプリとは' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">アプリ</span>
            <span className="tag-pill bg-blue text-white">myFirst Fone</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">myFirst Circleアプリとは｜移行・家族の追加・位置情報の共有</h1>
          <p className="text-g600 text-lg">myFirst Japan 公式FAQの記載をもとに、保護者用アプリ「myFirst Circle」の位置づけと、つまずきやすい設定を整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：myFirst Fone を使うには「myFirst Circle」が必要です。旧アプリのアカウントは引き継げません</h2>
            <p className="text-g600">
              myFirst Circle は、キッズスマートウォッチ「myFirst Fone」と保護者のスマートフォンをつなぐアプリです。2024年9月1日以降、端末は旧アプリ「myFirst Fone」では使えず、<strong>Circle アプリでの新規アカウント作成</strong>が必要です。祖父母など<strong>メイン管理者以外が位置を見るには「位置情報の共有」の設定</strong>が必要で、<strong>位置情報の履歴はメイン管理者だけ</strong>が確認できます。位置情報の最短更新間隔は<strong>5分</strong>です。
            </p>
          </div>

          <h2 className="section-title">myFirst Circle の基本情報</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ['役割', 'myFirst Fone とのペアリング、通話・ビデオ通話、メッセージ、位置情報の確認'],
                  ['対応スマートフォン', 'ほとんどのiOS・Androidスマートフォン（最新のOPPO端末では互換性の問題を確認・修正対応中と記載）'],
                  ['旧アプリとの関係', '2024年9月1日以降は旧アプリ「myFirst Fone」で利用不可。旧アプリはサービス終了'],
                  ['端末なしでの利用', '可能（位置情報は取得できない。友達になった相手との通話・メッセージ・SNS投稿などは利用可）'],
                  ['位置情報の最短更新間隔', '5分（アプリの更新等で変わる場合あり）'],
                  ['位置情報の履歴', 'メイン管理者のみ確認可能'],
                  ['eSIM機種のSIM開通', 'Circle アプリの「設定」から手続き（R2・S3+など）'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <th className="p-3 text-left text-g800 w-1/3 bg-blue-light/40">{k}</th>
                    <td className="p-3 text-g700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：myFirst Japan「<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone よくある質問</a>」（{CHECKED}）
          </p>

          <h2 className="section-title">家族（連絡先）を追加する手順</h2>
          <p className="text-sm text-g700 mb-3">追加したい相手のスマートフォンにも myFirst Circle を入れ、アカウントを作成しておく必要があります。公式FAQの手順は次のとおりです。</p>
          <ol className="space-y-2 text-sm text-g700 mb-3 list-decimal pl-5">
            <li>メイン管理者のアプリを開き、右下の歯車マークから設定画面を開きます。</li>
            <li>「連絡帳」をタップし、画面右上の「＋」をタップします。</li>
            <li>検索欄に、相手のアカウントに登録された電話番号を、先頭の0を「+81」に置き換えて入力します（例：080-1234-5678 → +818012345678）。</li>
            <li>表示されたアカウントの「追加」をタップします（「ユーザーを招待する」ではありません）。</li>
            <li>必要事項を入力します。お子さまの連絡先にも登録する場合は「お子様のアカウントに追加」をオンにし、対象のキッズアカウントを選んでリクエストを送信します。</li>
            <li>相手のアプリで「設定」→「連絡先」から届いたリクエストを開き、必要事項を入力して承認すると追加が完了します。</li>
          </ol>
          <p className="text-xs text-g400 mb-8">
            出典：myFirst Japan「<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone よくある質問</a>」（友達追加の方法・{CHECKED}）
          </p>

          <h2 className="section-title">メイン管理者以外が位置を見るための「位置情報の共有」設定</h2>
          <p className="text-sm text-g700 mb-3">友達として追加しただけでは、メイン管理者以外のアカウントはリアルタイムの位置情報を見られません。公式FAQでは次の2段階の設定が案内されています。</p>
          <ol className="space-y-2 text-sm text-g700 mb-3 list-decimal pl-5">
            <li><strong>家族グループに入れる</strong>：「設定」→ 位置情報を共有したいキッズアカウント →「連絡帳」を開き、共有したい大人のアカウントの右上の人マーク →「グループ設定」を一番左の「Family」に変更します。</li>
            <li><strong>共有相手を追加する</strong>：キッズアカウントの画面に戻り、「設定」→「キッズアカウント」→ 画面下のほうにある「位置情報の共有」から、共有したいアカウントを追加します。</li>
          </ol>
          <p className="text-sm text-g700 mb-3">この設定をしても、位置情報の<strong>履歴</strong>を確認できるのはメイン管理者のみです。管理者を交代したり、サブ管理者を置いたりする場合は、相手を「家族」に追加したうえで「核家族」に招待する必要があります（位置情報の共有だけなら「核家族」への追加は不要です）。</p>
          <p className="text-xs text-g400 mb-8">
            出典：myFirst Japan「<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone よくある質問</a>」（友達追加しても位置情報が見れない・友達追加／核家族追加・{CHECKED}）
          </p>

          <h2 className="section-title">位置情報が古い・履歴が残らないときの確認点</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">症状</th>
                  <th className="p-3 text-left border-b-2 border-blue">公式FAQの案内</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['「ホーム」と「履歴」で位置が違う', '「ホーム」の位置が更新されていない可能性があります。アプリを閉じて開き直し、変わらなければ地図上のアイコンをクリックしてリフレッシュボタンを押します。'],
                  ['「履歴」に反映されない', '時計を操作していないと位置情報は取得されません。キッズアカウントのページで「追跡モード」を設定すると、操作していないときも自動で取得します。'],
                  ['更新するとエラーが出る', 'サーバーの混雑や通信状態による不具合が考えられるため、時間をおいて再度試すよう案内されています。'],
                  ['位置が大きくずれる', '屋内ではGPSを検出できず、Wi-Fi・基地局（LBS）で測位します。LBSのみの場合は数キロメートルの誤差が出ることがあります。'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">{k}</td>
                    <td className="p-3 text-g700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：myFirst Japan「<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone よくある質問</a>」（{CHECKED}）
          </p>

          <h2 className="section-title">アプリと各機種の最新バージョン（公式FAQ・2026年5月8日時点）</h2>
          <p className="text-sm text-g700 mb-3">連携がうまくいかない場合は、アプリと端末の両方が最新かどうかをご確認ください。公式FAQに掲載されている最新バージョンは次のとおりです。</p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">アプリ・機種</th>
                  <th className="p-3 text-left border-b-2 border-blue">最新バージョン</th>
                  <th className="p-3 text-left border-b-2 border-blue">備考</th>
                </tr>
              </thead>
              <tbody>
                {versions.map(([a, b, c]) => (
                  <tr key={a} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">{a}</td>
                    <td className="p-3 text-g700">{b}</td>
                    <td className="p-3 text-g700">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：myFirst Japan「<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone よくある質問</a>」（「myFirst Fone」各機種の最新バージョンについて・{CHECKED}）。ペアリングの手順は公式の「<a href={UPDATE_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">アップデートのお知らせ</a>」でも案内されています。
          </p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              <strong>ご注意</strong>：本ページは myFirst Japan 公式FAQの記載を整理したもので、画面の名称や手順はアプリの更新で変わる場合があります。最新の手順は公式FAQでご確認ください。本体の料金・機能は「<Link href="/review/myfirst-fone/" className="text-blue underline">myFirst Fone のレビュー</Link>」、SIMについては「<Link href="/knowledge/myfirst-fone-sim/" className="text-blue underline">myFirst Fone で使えるSIM</Link>」で整理しています。
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
            出典：myFirst Japan「<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone よくある質問</a>」（{CHECKED}）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/myfirst-fone/" className="btn-primary">myFirst Fone のレビュー</Link>
              <Link href="/knowledge/myfirst-fone-sim/" className="btn-accent">myFirst Fone で使えるSIM</Link>
              <Link href="/purpose/watch-type/" className="btn-primary">腕時計型で選ぶ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
