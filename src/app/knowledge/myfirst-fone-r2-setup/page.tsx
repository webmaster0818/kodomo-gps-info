import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'myFirst Fone R2（マイファーストフォンR2）の初期設定｜Wi-Fi接続・本体更新・ペアリング・eSIM開通の手順【2026年11月】',
  description:
    'myFirst Fone R2の初期設定を公式のクイックスタートガイド（eSIM用）とFAQで整理しています。Wi-Fi接続と本体更新、myFirst Circleでのアカウント作成とペアリング、eSIM開通の手順と期限をまとめています。',
  keywords: ['マイファーストフォンR2 初期設定', 'myFirst Fone R2', '初期設定', 'eSIM', 'Wi-Fi', 'myFirst Circle', 'ペアリング'],
};

const QSG_URL = 'https://jp.myfirst.tech/pages/manual-qsg-esim';
const FAQ_URL = 'https://jp.myfirst.tech/pages/myfirst-fone-faq';
const MANUAL_URL = 'https://jp.myfirst.tech/pages/manual-fone-r2';
const ESIM_BLOG = 'https://jp.myfirst.tech/blogs/myfirst-beginners-guide/myfirst-fone-sim-r2-s3-esim';
const RESTART_BLOG = 'https://jp.myfirst.tech/blogs/myfirst-beginners-guide/myfirst-fone-restart';
const PRICE_BLOG = 'https://jp.myfirst.tech/blogs/myfirst-communication/myfirst-fone-r2-price-revision';
const CHECKED = '2026年11月18日確認';

const steps: { title: string; items: string[] }[] = [
  {
    title: '0. 事前準備：myFirst Circle アプリを入れる',
    items: [
      '保護者のスマートフォンに「myFirst Circle」アプリをインストールします（旧アプリ「myFirst Fone」はサービス終了）。',
      'Wi-Fi のネットワーク名とパスワードを手元に用意します。',
    ],
  },
  {
    title: '1. R2 を Wi-Fi に接続する',
    items: [
      '起動時に「ネットワーク検出失敗」と表示されたら、選択肢の「Wi-Fi設定」をタップします。',
      '表示がない場合は、文字盤の画面で上から下にスワイプしてメニューを出し、右上の歯車（設定）→ いちばん上の「Wi-Fi」から接続先を選びます。',
    ],
  },
  {
    title: '2. 本体のソフトウェアを更新する',
    items: [
      'Wi-Fi 接続後、「設定」画面の下から3番目の「ソフトウェアの更新」をタップします。',
      '更新・再起動が終わったら、もう一度「ソフトウェアの更新」をタップして最新か確認します。公式は、開通手続きの前に更新しておく必要があると案内しています。',
    ],
  },
  {
    title: '3. 保護者アカウントを作成する（Circle アプリ）',
    items: [
      'Google・Facebook・Apple のアカウント、または電話番号で作成します。',
      '携帯電話番号に届く認証コードを入力し、myFirst ID・名前・メールアドレス・誕生日を登録します。',
    ],
  },
  {
    title: '4. キッズアカウントを作成する',
    items: [
      'Circle アプリの設定（歯車）で「キッズアカウントを追加」をタップし、ユーザー名とパスワード、お子さまのプロフィールを入力します。',
      'エラーが出る場合は、IDがすでに使われている可能性があります。英数字のみの別のIDでお試しください（R2のよくある質問）。',
    ],
  },
  {
    title: '5. R2 とペアリングする',
    items: [
      '設定でキッズアカウントをタップし、「myFirst Foneとペアリングする」から、R2 の画面に表示された QR コードをスマートフォンのカメラで読み取ります。',
      'R2 に届いた認証コードをアプリに入力すると、ペアリングが完了します。',
    ],
  },
  {
    title: '6. myFirst FreeSIM（eSIM）を開通する',
    items: [
      'Circle アプリの設定で「eSIM有効手続き」（「SIM有効手続き」）→「プランを追加（Add a plan）」をタップします。',
      'お子さまのアカウントを選び、表示された IMEI 番号が端末と一致するか確認します（IMEI は R2 の設定画面の最下部、または製品パッケージの底面に記載）。',
      '利用する国・地域とプランを確認し、支払い情報を入力して確定すると開通が完了します。',
    ],
  },
];

const faqData = [
  {
    q: 'eSIMの開通はいつまでに行えばよいですか？',
    a: '公式のクイックスタートガイド（eSIM用）とよくある質問の共通項目では、最初に電源を入れた日を1日目として3日以内に開通手続きを行うよう案内されています。一方、同じよくある質問の「myFirst Fone R2」の項目には、初めて電源を入れた日を含む30日間が無料期間で、30日以内に開通するよう記載されており、案内が分かれています（2026年11月18日確認）。期限を過ぎると通信できなくなる、または再開通に手数料（税込3,300円）がかかる場合があるため、電源を入れた当日中にペアリングと開通を済ませることをおすすめします。',
  },
  {
    q: '手持ちの格安SIMは使えますか？',
    a: '使えません。公式のよくある質問では、R2は他のSIMカードでは利用できず、myFirst SIM（myFirst FreeSIM）の契約が必須と案内されています。myFirst FreeSIM の通信料は、日本で開通した場合に月額980円と公式FAQに記載されています。',
  },
  {
    q: 'R2で電話番号を使った通話はできますか？',
    a: 'できません。R2はダイヤル通話（電話番号での通話）に対応していません。eSIMはデータSIMのため、音声通話とビデオ通話は保護者の myFirst Circle アプリとの間で行います。',
  },
  {
    q: '位置情報の更新間隔は最短何分ですか？',
    a: '公式のよくある質問では、Circle アプリで設定できる最短の更新頻度は5分と案内されています。アプリの更新により変わる場合があります。',
  },
  {
    q: 'スマートボタンはどう設定しますか？',
    a: 'スマートボタンを3回続けて短く押すと設定画面が表示され、1回押し・2回押し・長押しのそれぞれに使いたい機能を割り当てられます。設定後は、R2の左下の「戻る」ボタンでホーム画面に戻ります。',
  },
  {
    q: '画面が固まって操作できなくなりました。',
    a: '公式ブログでは、R1・R1s・R1c・R2がフリーズした場合、本体の3つのボタンを長押しして強制再起動する方法が紹介されています。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function MyFirstFoneR2SetupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'myFirst Fone R2の初期設定', datePublished: '2026-11-18', dateModified: '2026-11-18', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'myFirst Fone R2の初期設定' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">初期設定</span>
            <span className="tag-pill bg-blue text-white">myFirst Fone R2</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">myFirst Fone R2 の初期設定の手順</h1>
          <p className="text-g600 text-lg">myFirst Japan 公式のクイックスタートガイド（eSIM用）・よくある質問・公式ブログの記載をもとに、R2 を使い始めるまでの手順を整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：「Wi-Fi接続 → 本体更新 → アカウント作成 → ペアリング → eSIM開通」の順に進めます。開通は電源を入れた当日中に済ませるのが確実です</h2>
            <p className="text-g600">
              R2 は eSIM 機種で、<strong>myFirst FreeSIM 以外のSIMは使えません</strong>。公式は、開通手続きの前に<strong>Wi-Fi経由で本体のソフトウェアを最新にする</strong>よう案内しています。アカウント作成・ペアリング・開通はすべて<strong>myFirst Circle アプリ</strong>で行います。開通の期限は公式の案内で「3日以内」と「30日以内」の記載が分かれているため、早めの手続きをおすすめします。
            </p>
          </div>

          <h2 className="section-title">初期設定の手順</h2>
          <div className="space-y-4 mb-3">
            {steps.map((s) => (
              <div key={s.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-2">{s.title}</h3>
                <ul className="space-y-1 text-sm text-g700">
                  {s.items.map((it) => (
                    <li key={it}>・{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：myFirst Japan「<a href={QSG_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">【取扱説明書】クイックスタートガイド eSIM用（対象：R2／S4／S3+）</a>」「<a href={ESIM_BLOG} target="_blank" rel="noopener noreferrer" className="text-blue underline">SIMカード有効化手続き R2／S3+（eSIM）</a>」「<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">よくある質問</a>」（{CHECKED}）。画面の表記はアプリや本体のバージョンで異なる場合があると公式に注記されています。
          </p>

          <h2 className="section-title">つまずきやすい点と公式の案内</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">場面</th>
                  <th className="p-3 text-left border-b-2 border-blue">公式の案内</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['開通の期限', 'クイックスタートガイドと共通FAQは「起動後3日以内」、R2のFAQは「30日以内（無料期間）」と記載が分かれています。期限切れや支払い未完了は自動解約となり、再開通に税込3,300円の手数料がかかる場合があります'],
                  ['ペアリング前に開通しようとした', 'eSIMの開通には事前のペアリングが必要です'],
                  ['キッズアカウント作成でエラー', 'IDが使用済みの可能性。英数字のみの別のIDで登録します'],
                  ['本体の最新バージョン', 'R2 は 2.1.4（2026年5月8日時点の公式FAQ）。更新は「設定」→「ソフトウェアの更新」'],
                  ['設定画面でパスコードを求められた', '「ネットワーク」「タイムゾーン」などの設定のパスコードは 3363 と公式FAQに記載'],
                  ['画面が固まった', '3つのボタンの長押しで強制再起動（R1・R1s・R1c・R2共通）'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800 w-1/3">{k}</td>
                    <td className="p-3 text-g700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：myFirst Japan「<a href={QSG_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">クイックスタートガイド eSIM用</a>」「<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">よくある質問</a>」「<a href={RESTART_BLOG} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Foneの強制再起動のやり方</a>」（{CHECKED}）
          </p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              <strong>本体価格について</strong>：myFirst Japan は2026年6月1日の公式ブログで、R2 の価格を通常価格29,980円（税込）から18,800円（税込）に改定したと告知しています（<a href={PRICE_BLOG} target="_blank" rel="noopener noreferrer" className="text-blue underline">出典</a>・{CHECKED}）。現在の販売価格やセールの有無は公式ストアでご確認ください。各部の名称やボタンの位置は公式の「<a href={MANUAL_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">取扱説明書（R2）</a>」に図で掲載されています。
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
            出典：myFirst Japan「<a href={QSG_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">クイックスタートガイド eSIM用</a>」「<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">よくある質問</a>」「<a href={RESTART_BLOG} target="_blank" rel="noopener noreferrer" className="text-blue underline">強制再起動のやり方</a>」（{CHECKED}）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/myfirst-fone-sim/" className="btn-primary">myFirst Fone のSIM</Link>
              <Link href="/knowledge/myfirst-circle/" className="btn-accent">myFirst Circle アプリとは</Link>
              <Link href="/review/myfirst-fone/" className="btn-primary">myFirst Fone のレビュー</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
