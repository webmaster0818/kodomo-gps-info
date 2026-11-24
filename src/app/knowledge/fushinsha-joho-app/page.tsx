import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '不審者情報アプリ｜警察の公式防犯アプリ5つとYahoo!防災速報の配信内容・機能を公式で確認【2026年11月】',
  description:
    '子どもの見守りに使える不審者情報のアプリを、警視庁・大阪府警・愛知県警・福岡県警・兵庫県警の公式防犯アプリと、全国の防犯情報を通知するYahoo!防災速報について、各公式ページの記載で整理しています。',
  keywords: ['不審者情報 アプリ', '不審者情報 通知', '防犯アプリ 警察', 'Digi Police', '安まちアプリ'],
};

const CHECKED = '2026年11月24日確認';

type App = { name: string; by: string; area: string; content: string; feature: string; src: string; srcLabel: string };

const apps: App[] = [
  {
    name: 'Digi Police（デジポリス）',
    by: '警視庁',
    area: '東京都',
    content: '街頭犯罪や子供に対する声かけ事案の情報、子供と女性の安全に関する情報、特殊詐欺のアポ電情報など',
    feature: '声かけ事案などが連続して発生しているエリアに入るとお知らせする「エリア通知機能」、過去1か月の不審者情報などを地図に表示する「見守りパトロール機能」、防犯ブザー機能',
    src: 'https://www.keishicho.metro.tokyo.lg.jp/kurashi/tokushu/furikome/digipolice.html',
    srcLabel: '警視庁「Digi Police」',
  },
  {
    name: '安まちアプリ',
    by: '大阪府警察',
    area: '大阪府',
    content: 'ひったくり情報、不審者情報等の犯罪等の発生情報や防犯対策情報（安まちメール）をプッシュ通知。地区と情報の種類を選べる',
    feature: '防犯マップ、防犯ブザー・痴漢撃退（起動と同時に登録したメールアドレスへ位置情報付きで知らせる）',
    src: 'https://www.police.pref.osaka.lg.jp/seikatsu/11608.html',
    srcLabel: '大阪府警察「安まちアプリ・安まちメール」',
  },
  {
    name: 'アイチポリス',
    by: '愛知県警察',
    area: '愛知県',
    content: '犯罪発生情報、不審者情報、交通重大事故情報などを地図上に公開。メールマガジン「パトネットあいち」の配信情報も地図に反映',
    feature: 'パトロール機能、家族や友達に現在地を送信する機能、プッシュ通知',
    src: 'https://apps.apple.com/jp/app/id1282249026',
    srcLabel: 'App Store「アイチポリス」（提供：愛知県警察本部）',
  },
  {
    name: 'みまもっち',
    by: '福岡県警察',
    area: '福岡県',
    content: '声掛けやつきまとい、ニセ電話詐欺など、身近で発生した事件情報や防犯情報を配信し、地図上で表示',
    feature: '登録メンバーへメッセージと位置情報を送る「今ここ！」、防犯ブザー・ちかん対策機能',
    src: 'https://www.police.pref.fukuoka.jp/seian/seian/pr-app.html',
    srcLabel: '福岡県警察「みまもっち」',
  },
  {
    name: 'ひょうご防犯ネット＋（プラス）',
    by: '兵庫県警察',
    area: '兵庫県',
    content: '「子どもに対する情報」「女性に対する情報」「路上強盗・ひったくり」など6種別の防犯情報',
    feature: '防犯ブザー（登録メンバーへ位置情報を通知）、ココ通知、エリア通知',
    src: 'https://www.police.pref.hyogo.lg.jp/bounet/index.htm',
    srcLabel: '兵庫県警察「ひょうご防犯ネット＋」',
  },
];

const faqData = [
  {
    q: '不審者情報のアプリは無料ですか？',
    a: '当サイトで確認した5つの警察の公式アプリと「Yahoo!防災速報」は、いずれもApp Storeで無料と表示されています。ダウンロードや情報の受信にかかるデータ通信料は利用者の負担になります（2026年11月24日確認）。',
  },
  {
    q: '住んでいる都道府県に警察のアプリがない場合はどうすればよいですか？',
    a: '「Yahoo!防災速報」は、各都道府県の警察本部が発表する犯罪発生情報や防犯に関する注意情報を、関係する地域の方に通知するサービスです。通知の種類には「声かけ・不審者」が含まれ、現在地と国内最大3地点の情報を受け取れます。神奈川県警察も、Yahoo!防災速報を通じて防犯情報を通知していると案内しています。',
  },
  {
    q: '警察のメール配信は今も使えますか？',
    a: '警視庁の「メールけいしちょう」や神奈川県警察の「ピーガルくん安全メール」は、配信種別に声かけ事案などを含むメール配信を案内しています。一方、大阪府警察の安まちメールは、メールアドレスでの配信を令和8年3月31日で終了し、安まちアプリへの配信のみになりました。福岡県警察の「ふっけい安心メール」は一時運用停止中と案内されています（2026年11月24日確認）。',
  },
  {
    q: '通知された「声かけ」はすべて犯罪ですか？',
    a: 'すべてが犯罪とは限りません。兵庫県警察は、防犯情報には「声かけ」など犯罪に至らないものや、悪意のない事案が含まれている場合があると利用規約に記載しています。警視庁は、発生した犯罪がすべて配信されるわけではないと案内しています。通知は、通学路で気をつける場所を親子で話し合うきっかけとして使うのが現実的です。',
  },
  {
    q: '不審者情報アプリと子ども用GPSはどう使い分けますか？',
    a: '不審者情報アプリは、地域で起きた事案を保護者が知るためのものです。お子さまの居場所を確認したり、お子さまが助けを求めたりする機能は、子ども用GPS端末やキッズケータイが担います。防犯面の機種選びは「防犯・安全重視で選ぶ」「防犯ブザー付きのGPS・キッズケータイ」をご覧ください。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function FushinshaJohoAppPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: '不審者情報アプリ：警察の公式防犯アプリとYahoo!防災速報', datePublished: '2026-11-24', dateModified: '2026-11-24', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち情報', href: '/knowledge/' }, { name: '不審者情報アプリ' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">防犯</span>
            <span className="tag-pill bg-blue text-white">アプリ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">不審者情報アプリ：警察の公式防犯アプリ5つとYahoo!防災速報</h1>
          <p className="text-g600 text-lg">地域の不審者情報や声かけ事案を保護者が受け取れる無料のアプリについて、警察の公式ページとアプリの公式掲載で配信内容と機能を確認しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：住んでいる都道府県の警察の公式アプリを確認し、なければYahoo!防災速報を使う方法が分かりやすい選び方です</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>警察の公式アプリ</strong>：都道府県警察が配信する不審者情報・声かけ事案を、地区を選んで受け取れます。防犯ブザー機能を備えるアプリもあります。</li>
              <li>・<strong>Yahoo!防災速報</strong>：各都道府県の警察本部が発表する防犯情報を通知します。「声かけ・不審者」の通知を、現在地と国内最大3地点で受け取れます。</li>
              <li>・<strong>メール配信</strong>：大阪府警察はメールでの配信を終了し、福岡県警察は一時運用停止中です。メールだけに頼らず、アプリでの受信も検討してください。</li>
            </ul>
          </div>

          <h2 className="section-title">警察の公式防犯アプリ（当サイトで公式を確認した5つ）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">アプリ・提供</th>
                  <th className="p-3 text-left border-b-2 border-blue">配信される情報</th>
                  <th className="p-3 text-left border-b-2 border-blue">子どもの見守りに関わる主な機能</th>
                </tr>
              </thead>
              <tbody>
                {apps.map((a) => (
                  <tr key={a.name} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">
                      {a.name}
                      <div className="text-xs font-normal text-g500 mt-1">{a.by}（{a.area}）</div>
                    </td>
                    <td className="p-3 text-g700">{a.content}</td>
                    <td className="p-3 text-g700">{a.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：{apps.map((a, i) => (
              <span key={a.src}>
                {i > 0 && '、'}
                <a href={a.src} target="_blank" rel="noopener noreferrer" className="text-blue underline">{a.srcLabel}</a>
              </span>
            ))}（{CHECKED}）。5つともApp Storeで無料と表示されています。このほかの道県警察もApp Storeで防犯アプリを提供していますが、当サイトで内容を確認したものだけを掲載しています。
          </p>

          <h2 className="section-title">全国で使える：Yahoo!防災速報の防犯情報</h2>
          <p className="text-sm text-g700 mb-3">
            LINEヤフーの「Yahoo!防災速報」は、各都道府県の警察本部が発表する犯罪発生情報や、防犯に関する注意情報を、関係する地域の方に通知するサービスです。通知の種類は「声かけ・不審者」「ちかん・わいせつ」「ひったくり」「強盗」「通り魔」「その他注意情報」です。現在地と国内最大3地点に通知でき、App Storeでは無料と表示されています。神奈川県警察は、Yahoo!防災速報を通じて防犯情報を通知しており、市区町村単位で3か所まで設定できると案内しています。
          </p>
          <p className="text-xs text-g400 mb-8">
            出典：<a href="https://notice.yahoo.co.jp/emg/sokuho/service/crimeinfo.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">Yahoo!防災速報「防犯情報」</a>、<a href="https://apps.apple.com/jp/app/id481914139" target="_blank" rel="noopener noreferrer" className="text-blue underline">App Store「Yahoo!防災速報」</a>、<a href="https://www.police.pref.kanagawa.jp/kurashi/kodomo_jyosei/mesd0191.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">神奈川県警察「ピーガルくん安全メール」</a>（{CHECKED}）
          </p>

          <h2 className="section-title">警察のメール配信の状況</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>警視庁「メールけいしちょう」</strong>：配信種別に「子供に対する犯罪等」「声かけ等」があります。「子供に対する犯罪等」は、13歳未満の児童（中学生を除く）が被害の対象となる声かけ、つきまといなどの情報と定義されています。発生した犯罪がすべて配信されるわけではないと案内されています。</li>
            <li>・<strong>神奈川県警察「ピーガルくん安全メール」</strong>：声かけ事案、不審者情報などを配信しています。登録と情報配信は無料で、受信時の通信料は利用者の負担です。</li>
            <li>・<strong>大阪府警察「安まちメール」</strong>：メールアドレスでの配信は令和8年3月31日で終了し、安まちアプリへの配信のみになっています。</li>
            <li>・<strong>福岡県警察「ふっけい安心メール」</strong>：一時運用停止中と案内されています。事件発生情報は「みまもっち」で配信されています。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：<a href="https://www.keishicho.metro.tokyo.lg.jp/about_mpd/joho/mail_info.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">警視庁「メールけいしちょう」</a>、<a href="https://www.police.pref.kanagawa.jp/kurashi/kodomo_jyosei/mesd0191.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">神奈川県警察「ピーガルくん安全メール」</a>、<a href="https://www.police.pref.osaka.lg.jp/seikatsu/11608.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">大阪府警察</a>、<a href="https://www.police.pref.fukuoka.jp/seian/seian/kodomonoanzentaisaku/mimamocchi.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">福岡県警察「ふっけい安心メールの一時運用停止について」</a>（{CHECKED}）
          </p>

          <h2 className="section-title">不審者情報を受け取るときの注意</h2>
          <p className="text-sm text-g700 mb-8">
            兵庫県警察は、防犯情報には「声かけ」など犯罪に至らないものや、道を聞くつもりで声をかけたのにお子さまが怖いと感じて逃げた場合など、悪意のない事案が含まれている場合があると利用規約に記載しています。通知を受け取ったら、場所と時間帯を確認し、通学路や遊び場で気をつける点を親子で話し合う材料として活用することをおすすめします。お子さまの居場所の確認や緊急時の連絡には、子ども用GPSやキッズケータイを組み合わせます。
          </p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              GPSを使った不審者対策は「<Link href="/knowledge/stranger-danger/" className="text-blue underline">子供の不審者対策にGPSは有効？</Link>」、防犯ブザーを搭載した機種は「<Link href="/knowledge/bouhan-buzzer-gps/" className="text-blue underline">防犯ブザー付きのGPS・キッズケータイ</Link>」、危険エリア通知の比較は「<Link href="/purpose/safety/" className="text-blue underline">防犯・安全重視で選ぶ</Link>」をご覧ください。
            </p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
          <p className="text-xs text-g400 mt-3">出典は上記の警察・提供元の公式ページ（{CHECKED}）</p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/stranger-danger/" className="btn-primary">不審者対策にGPSは有効？</Link>
              <Link href="/knowledge/commute-safety/" className="btn-accent">通学路の安全対策</Link>
              <Link href="/purpose/safety/" className="btn-primary">防犯・安全重視で選ぶ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
