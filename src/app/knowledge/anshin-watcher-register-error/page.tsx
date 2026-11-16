import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'あんしんウォッチャーが登録できない時の確認点｜対応OS・au ID・2台の上限・解約済み端末【KDDI公式で確認】',
  description:
    'あんしんウォッチャーをau HOMEアプリに登録できない場合に確認したい点を、KDDI公式のよくあるご質問と料金ページの記載にもとづいて整理しています。対応OS、au IDとau HOME契約、1つのau IDで2台までの上限、解約済み・中古端末の再利用制限、充電と再起動の方法をまとめています。',
  keywords: ['あんしんウォッチャー', '登録できない', 'au HOME', '登録方法', 'エラー'],
};

const FAQ = 'https://homeiot.kddi.com/anshinwatcher/kids/faq/';
const CHARGE = 'https://www.au.com/life/auhome/charge/';
const CHECKED = '2026年11月16日確認';

const faqData = [
  {
    q: 'あんしんウォッチャーはau以外のスマホでも登録できますか？',
    a: `登録できます。KDDIのよくあるご質問では、ドコモ・ソフトバンク・楽天モバイル・Y!モバイルなどのスマートフォンでも利用できると案内されています。au HOMEアプリが必要で、対応OSはAndroid 13.0以上・iOS 16.0以上です。au・UQ mobile・povo・auひかりを契約していない方は、au IDを取得して利用します（${CHECKED}）。`,
  },
  {
    q: '3台目のあんしんウォッチャーが登録できません。',
    a: '1つのau IDで利用登録できるのは、あんしんウォッチャー・あんしんウォッチャーLE・かんたん見守りプラグをあわせて最大2台までです。3台目を使う場合は、別のau IDでau HOMEを契約する必要があります。',
  },
  {
    q: 'フリマなどで買った中古のあんしんウォッチャーは登録できますか？',
    a: '前の持ち主がau HOMEアプリに利用登録した端末は、au HOMEを解約すると再利用できないと公式に記載されています。例外は、解約月の翌月末までに同じau IDで再度申し込み、機器登録を行った場合だけです。中古品は登録できない可能性が高いため、購入前にご注意ください。',
  },
  {
    q: '機種変更したら、あんしんウォッチャーを登録し直す必要がありますか？',
    a: '必要ありません。公式のよくあるご質問では、新しいスマートフォンにau HOMEアプリをインストールし、契約しているau IDでログインすれば、登録済みの内容で利用できると案内されています。',
  },
  {
    q: '確認しても登録できない場合はどうすればよいですか？',
    a: 'エラー画面が表示された場合は、画面の指示に従ってください。充電や再起動を試しても解決しない場合は、KDDIのお客さまセンターへの問い合わせをおすすめします。表示されたエラーの内容を控えておくと、問い合わせがスムーズです。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const checks = [
  {
    no: 1,
    title: 'スマートフォンのOSが対応しているか',
    body: 'au HOMEアプリの対応OSは Android 13.0以上・iOS 16.0以上です。これより古いOSのスマートフォンでは、アプリを入れられないか、登録の手順に進めない場合があります。',
    src: `${FAQ}007.html`,
    srcName: 'どの通信会社のスマートフォンでも使えますか。',
  },
  {
    no: 2,
    title: 'au IDでログインし、au HOMEを契約しているか',
    body: 'au HOMEを契約していない場合は、個装箱の裏面「ご利用開始の手順」にあるQRコードからau HOMEを申し込んだ後に、アプリへログインします。ログインするau IDは、au HOMEを契約したau IDと同じものを使います。',
    src: `${FAQ}022.html`,
    srcName: '購入してからスマホに設定する方法を教えてください。',
  },
  {
    no: 3,
    title: '登録の手順が合っているか',
    body: 'au HOMEアプリの【デバイス】タブ →【設定】→【登録】の順に進みます。登録が完了すると、ホーム画面とデバイスタブに登録したあんしんウォッチャーが表示されます。',
    src: `${FAQ}022.html`,
    srcName: '購入してからスマホに設定する方法を教えてください。',
  },
  {
    no: 4,
    title: '同じau IDに、すでに2台登録していないか',
    body: '1つのau IDで利用登録できるのは、あんしんウォッチャー・あんしんウォッチャーLE・かんたん見守りプラグをあわせて最大2台までです。兄弟で使っている家庭で3台目を追加する場合は、この上限に当たります。',
    src: CHARGE,
    srcName: 'au HOME 料金ページ（お申し込みにあたってのご注意事項）',
  },
  {
    no: 5,
    title: '一度登録して解約した端末・中古品ではないか',
    body: '一度利用登録した端末は、au HOMEを解約すると再利用できません。解約月の翌月末までに同じau IDで再度au HOMEを申し込み、機器登録を行った場合に限り再利用できます（この場合は基本プランの契約となり、初期費用2,200円がかかると案内されています）。',
    src: `${FAQ}009.html`,
    srcName: '解約後、再契約は可能ですか？',
  },
  {
    no: 6,
    title: '本体が充電され、電源が入っているか',
    body: 'あんしんウォッチャーには電源スイッチがなく、起動できる状態まで充電されると自動で電源が入ります。電源を入れるには、充電するか、ボタンを約10秒長押しします。',
    src: `${FAQ}023.html`,
    srcName: '電源のオンオフの仕方を教えてください。',
  },
];

export default function AnshinWatcherRegisterErrorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'あんしんウォッチャーが登録できない時の確認点', datePublished: '2026-11-16', dateModified: '2026-11-16', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'あんしんウォッチャーが登録できない時の確認点' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">トラブル対処</span>
            <span className="tag-pill bg-blue text-white">あんしんウォッチャー</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">あんしんウォッチャーが登録できない時の確認点</h1>
          <p className="text-g600 text-lg">KDDI公式のよくあるご質問と料金ページの記載をもとに、au HOMEアプリへの登録で確認したい6つの点を整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：OS・au ID・2台の上限・解約済み端末の4点を先に確認してください</h2>
            <p className="text-g600">
              登録できない原因として公式の記載から確認できるのは、<strong>スマートフォンのOSが対応していない</strong>（Android 13.0以上・iOS 16.0以上が必要）、<strong>au HOMEを契約したau IDでログインしていない</strong>、<strong>同じau IDにすでに2台登録している</strong>、<strong>一度登録して解約した端末（中古品を含む）を使おうとしている</strong>、の4点です。あわせて、本体の充電と電源も確認してください。
            </p>
          </div>

          <h2 className="section-title">登録前に確認する6つの点</h2>
          <div className="space-y-4 mb-8">
            {checks.map((c) => (
              <div key={c.no} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-2">{c.no}. {c.title}</h3>
                <p className="text-sm text-g700 mb-2">{c.body}</p>
                <p className="text-xs text-g400">
                  出典：<a href={c.src} target="_blank" rel="noopener noreferrer" className="text-blue underline">{c.srcName}</a>（KDDI・{CHECKED}）
                </p>
              </div>
            ))}
          </div>

          <h2 className="section-title">充電できない・反応しない場合の対処</h2>
          <p className="text-sm text-g600 mb-3">本体が充電されないと電源が入らず、登録に進めません。公式のよくあるご質問では、故障と判断する前に次の点を確認するよう案内されています。</p>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・ACアダプタを一度コンセントから外し、差し込み直す</li>
            <li>・ACアダプタを差し込む際に、本体のボタンを押しながら差し込んでいないか確認する</li>
            <li>・AC 100Vのコンセントを使っているか確認する</li>
            <li>・別のUSB Type-Cケーブル（定格入力5V／1.5A）で充電できるか試す</li>
          </ul>
          <p className="text-sm text-g700 mb-3">
            再起動する場合は、ボタンを<strong>約10秒長押し</strong>します。再起動が始まるとLEDランプが赤／青に点滅し、完了すると消灯します。確認しても充電できない場合は、故障の可能性があるため、KDDIのお客さまセンターへの連絡が案内されています。
          </p>
          <p className="text-xs text-g400 mb-8">
            出典：よくあるご質問「<a href={`${FAQ}021.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">充電できません。故障でしょうか？</a>」「<a href={`${FAQ}020.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">再起動の方法を知りたいです。</a>」（{CHECKED}）
          </p>

          <h2 className="section-title">原因と対処の早見表</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">当てはまる状況</th>
                  <th className="p-3 text-left border-b-2 border-blue">考えられる原因</th>
                  <th className="p-3 text-left border-b-2 border-blue">対処</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 text-g700">アプリを入れられない</td>
                  <td className="p-3 text-g700">OSが対応範囲外</td>
                  <td className="p-3 text-g700">Android 13.0以上・iOS 16.0以上のスマートフォンで登録する</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 text-g700">ログイン後に登録へ進めない</td>
                  <td className="p-3 text-g700">au HOME未契約、または別のau IDでログイン</td>
                  <td className="p-3 text-g700">箱裏のQRコードからau HOMEを申し込み、同じau IDでログインする</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 text-g700">兄弟の3台目が登録できない</td>
                  <td className="p-3 text-g700">1つのau IDで2台までの上限</td>
                  <td className="p-3 text-g700">別のau IDでau HOMEを契約する</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 text-g700">中古品・以前使っていた端末</td>
                  <td className="p-3 text-g700">解約済み端末は再利用不可</td>
                  <td className="p-3 text-g700">解約月の翌月末まで・同じau IDの場合を除き、新しい端末を用意する</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 text-g700">本体が反応しない</td>
                  <td className="p-3 text-g700">充電不足・電源が入っていない</td>
                  <td className="p-3 text-g700">充電する、またはボタンを約10秒長押しする</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">早見表は、上記のKDDI公式の記載を当サイトで状況別に並べ直したものです。エラー画面が表示された場合は、画面の指示を優先してください。</p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              登録後の通知・ボタンの設定は「<Link href="/knowledge/anshin-watcher-howto/" className="text-blue underline">あんしんウォッチャーの使い方</Link>」、料金や2台目の仕組みは「<Link href="/review/anshin-watcher/" className="text-blue underline">あんしんウォッチャーのレビュー</Link>」をご覧ください。
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
            出典：<a href={FAQ} target="_blank" rel="noopener noreferrer" className="text-blue underline">あんしんウォッチャー よくあるご質問</a>（010・007・009ほか）、<a href={CHARGE} target="_blank" rel="noopener noreferrer" className="text-blue underline">au HOME 料金ページ</a>（{CHECKED}）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/anshin-watcher-howto/" className="btn-primary">あんしんウォッチャーの使い方</Link>
              <Link href="/review/anshin-watcher/" className="btn-accent">あんしんウォッチャーの詳細</Link>
              <Link href="/knowledge/troubleshoot/" className="btn-primary">子供GPSのトラブル対処</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
