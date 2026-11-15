import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'GPSをランドセルに入れても意味ない？分かること・分からないことと持たせ方【公式ヘルプで確認】',
  description:
    '子供用GPSをランドセルに入れても意味がないのかを、メーカー公式ヘルプの記載にもとづいて整理しています。ランドセルに入れた場合に分かること・分からないこと、置きっぱなしの間に起きること、校舎内での位置のずれ、放課後の持ち替えなどの対策をまとめています。',
  keywords: ['GPS', 'ランドセル', '意味ない', '子供', '持たせ方', 'どこにつける'],
};

const HELP = 'https://help.gps.mitene.us/hc/ja/articles/';
const CHECKED = '2026年11月15日確認';

const faqData = [
  {
    q: 'ランドセルに入れて持たせるのは、メーカーが想定している使い方ですか？',
    a: 'はい。みてねみまもりGPSの公式ヘルプでは、端末を「ランドセルに入れたり、付属のストラップなどで下げることが出来る」と説明しています。BoTトークの公式サイトでも「カバンに入る」「カバンの肩ベルトに下げても」と案内されています。',
  },
  {
    q: 'ランドセルを教室に置いている間、アプリには何が表示されますか？',
    a: '表示されるのはランドセル（端末）の位置です。みてねみまもりGPSの場合、端末が静止している間は位置情報を送信しないため、最後に送信した位置が表示され続けます。お子さまがランドセルから離れて移動しても、アプリからは分かりません。',
  },
  {
    q: '学校にいるのに「外に出た」と通知されたのはなぜですか？',
    a: 'みてねみまもりGPSの公式ヘルプによると、校舎内などGPSの電波が届きにくい場所では、離れた場所のWi-Fiアクセスポイントで測位して位置が大きくずれることがあります。アプリの「位置精度の調整」で、微弱なWi-Fi電波による測位を除外する設定ができます。',
  },
  {
    q: '放課後に遊びに行くとき、どうすればよいですか？',
    a: 'ランドセルを自宅に置いて出かけると、端末も自宅に残ります。放課後は端末をランドセルから出し、付属のストラップやカラビナ付きのケースで、お子さまが持ち歩くカバンやズボンのベルト通しなどに付け替える方法があります。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const cases = [
  {
    scene: '登下校中（ランドセルを背負って移動）',
    result: '分かる',
    note: '端末はお子さまと一緒に移動しているため、通学路の位置や、学校・自宅への到着を確認できます。ランドセルに入れる持たせ方が最も役立つ場面です。',
  },
  {
    scene: '授業中・休み時間（ランドセルは教室）',
    result: '学校にいることは分かる',
    note: '校内のどこにいるかまでは分かりません。校舎内では測位がずれることがあります（下記）。',
  },
  {
    scene: '学童・習い事（ランドセルを置いて活動）',
    result: '施設にいることは分かる',
    note: '施設の外へ出かけた場合、ランドセルを置いたままであれば端末は施設に残ります。',
  },
  {
    scene: '帰宅後に遊びに行く（ランドセルは自宅）',
    result: '分からない',
    note: '端末は自宅に残るため、アプリには自宅の位置が表示されたままになります。「意味がない」と感じやすいのはこの場面です。',
  },
  {
    scene: 'ランドセルごと置き忘れた・離れた',
    result: '分からない',
    note: 'アプリに表示されるのはランドセルの位置です。お子さまの居場所とは一致しません。',
  },
];

export default function RandoseruGpsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'GPSをランドセルに入れても意味ない？分かること・分からないことと持たせ方', datePublished: '2026-11-15', dateModified: '2026-11-15', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'GPSをランドセルに入れても意味ない？' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">持たせ方</span>
            <span className="tag-pill bg-blue text-white">ランドセル</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">GPSをランドセルに入れても意味ない？分かること・分からないこと</h1>
          <p className="text-g600 text-lg">メーカー公式ヘルプの記載にもとづき、ランドセルに入れた場合に起きることと、持たせ方の工夫を整理しています。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：登下校の見守りには役立ちます。ただし、表示されるのは「ランドセルの位置」です</h2>
            <p className="text-g600">
              ランドセルに入れる持たせ方は、メーカー自身が想定している使い方です。お子さまがランドセルを背負って移動している<strong>登下校中は、位置や到着を確認できます</strong>。一方で、アプリに表示されるのはあくまで<strong>端末（ランドセル）の位置</strong>です。ランドセルを置いて遊びに出かけた場合や、学童・習い事で置いたまま外出した場合は、お子さまの居場所は分かりません。「意味がない」と感じる原因の多くはこの点にあるため、<strong>放課後は端末を持ち替える</strong>ことをおすすめします。
            </p>
          </div>

          <h2 className="section-title">メーカーが案内している持たせ方</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>みてねみまもりGPS</strong>：「ランドセルに入れたり、付属のストラップなどで下げることが出来る小型のGPS端末」と説明されています。付属品には専用ストラップが含まれます。</li>
            <li>・<strong>BoTトーク</strong>：「ポンとカバンに入るコンパクトで軽量なデザイン。カバンの肩ベルトに下げても、小ぶりで使いやすく」と案内されています。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：みてねみまもりGPS ヘルプセンター「<a href={`${HELP}900005412203`} target="_blank" rel="noopener noreferrer" className="text-blue underline">みてねみまもりGPSとは、どのようなサービスですか？</a>」、<a href="https://mitene.us/gps" target="_blank" rel="noopener noreferrer" className="text-blue underline">みてねみまもりGPS 公式サイト（仕様・付属品）</a>、<a href="https://www.bsize.com/bot/talk" target="_blank" rel="noopener noreferrer" className="text-blue underline">BoTトーク 公式サイト</a>（{CHECKED}）
          </p>

          <h2 className="section-title">ランドセルに入れた場合に分かること・分からないこと</h2>
          <p className="text-sm text-g600 mb-3">端末がお子さまと一緒に動いているかどうかで、場面ごとに当サイトで整理したものです。</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">場面</th>
                  <th className="p-3 text-left border-b-2 border-blue">お子さまの居場所</th>
                  <th className="p-3 text-left border-b-2 border-blue">補足</th>
                </tr>
              </thead>
              <tbody>
                {cases.map((c) => (
                  <tr key={c.scene} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">{c.scene}</td>
                    <td className="p-3 text-g700 whitespace-nowrap">{c.result}</td>
                    <td className="p-3 text-g700">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">置きっぱなしの間に起きること（みてねみまもりGPSの例）</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>静止中は位置を送信しない</strong>：端末は内蔵センサーで振動を検知し、移動しているときだけ位置情報を送信します。ランドセルを置いている間は、最後に送信した位置が表示され続けます。</li>
            <li>・<strong>更新は90秒または3分間隔</strong>：リアルタイムの現在地ではなく、稼働モードに応じて90秒または3分の間隔で表示されます。</li>
            <li>・<strong>校舎内では位置がずれることがある</strong>：GPSの電波が届きにくい建物の中では、離れた場所のWi-Fiアクセスポイントで測位するため、建物内にいても「外に出た」と認識される場合があります。アプリの「位置精度の調整」で、微弱なWi-Fi電波による測位を除外できます。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：みてねみまもりGPS ヘルプセンター「<a href={`${HELP}900004440886`} target="_blank" rel="noopener noreferrer" className="text-blue underline">位置情報が更新されません。</a>」「<a href={`${HELP}900005689946`} target="_blank" rel="noopener noreferrer" className="text-blue underline">地図アプリなどのように、位置情報はリアルタイムに更新されますか？</a>」「<a href={`${HELP}900004440806`} target="_blank" rel="noopener noreferrer" className="text-blue underline">位置情報が正しくありません。おかしな位置情報が表示されます。</a>」（{CHECKED}）。他社の端末では、送信の条件や間隔が異なります。各機種の仕様は<Link href="/review/" className="text-blue underline">機種別レビュー</Link>をご確認ください。
          </p>

          <h2 className="section-title">「意味がない」を避けるための持たせ方の工夫</h2>
          <ol className="space-y-3 text-sm text-g700 mb-8 list-decimal pl-5">
            <li><strong>登下校はランドセルに入れたままにする</strong>：学校によっては、ランドセルに入れたまま校内で出さないことが持ち込みの条件になります。学校のルールと申請方法は「<Link href="/knowledge/school-rules/" className="text-blue underline">小学校のGPS持ち込みは許可される？</Link>」で整理しています。</li>
            <li><strong>放課後は端末を持ち替える</strong>：帰宅後に遊びに行くときは、端末をランドセルから出し、ストラップやカラビナでお子さまが持ち歩くカバンなどに付け替えます。玄関に置き場所を決めておくと、持ち替えの習慣が付きやすくなります。</li>
            <li><strong>学童・習い事で外出する日は持たせ方を決めておく</strong>：施設から公園などへ出かける場合があるときは、施設の方針を確認したうえで、お子さまが身に付ける形で持たせます。学童での使い方は「<Link href="/knowledge/after-school/" className="text-blue underline">学童・放課後の見守りとGPS</Link>」をご覧ください。</li>
            <li><strong>入れる場所に気を付ける</strong>：電波が遮られにくいポケットを選び、落下しないよう固定します。紛失を防ぐ工夫は「<Link href="/knowledge/loss/" className="text-blue underline">子供GPSを紛失したら？</Link>」でまとめています。</li>
            <li><strong>校内での誤通知が多い場合は設定を見直す</strong>：みてねみまもりGPSの場合は、上記の「位置精度の調整」や、有効な測位レベルを「標準」にする設定で改善することがあると案内されています。</li>
          </ol>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              本ページは、各メーカーの公式ヘルプ・公式サイトの記載（{CHECKED}）と、端末の位置＝ランドセルの位置という仕組みにもとづいて整理したものです。測位の精度は周囲の環境によって変わり、メーカーも具体的な誤差の値は示していません。位置のずれや更新の止まり方は機種によって異なりますので、ご利用の機種の公式ヘルプもあわせてご確認ください。
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
            出典：上記のみてねみまもりGPS ヘルプセンター各記事、<a href="https://www.bsize.com/bot/talk" target="_blank" rel="noopener noreferrer" className="text-blue underline">BoTトーク 公式サイト</a>（{CHECKED}）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/gps-range/" className="btn-primary">GPSの通信範囲と室内での使用</Link>
              <Link href="/knowledge/mitene-not-updating/" className="btn-accent">位置が更新されない原因</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-primary">子供GPSの選び方</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
