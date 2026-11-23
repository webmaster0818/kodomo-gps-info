import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '迷子防止にGPSは使える？位置の更新間隔と「今すぐ検索」の可否を5機種の公式で比較【2026年11月】',
  description:
    '迷子防止に見守りGPSを使うときに知っておきたい位置の更新間隔を、みてね・BoTトーク・まもサーチ・あんしんウォッチャー・みもりGPSトークの5機種の公式記載で比較しています。リアルタイムではない点、測位を早める機能、お出かけ前の準備をまとめています。',
  keywords: ['迷子防止 GPS', '迷子 GPS', '子供 迷子対策', '見守りGPS 更新間隔'],
};

const CHECKED = '2026年11月24日確認';

type Row = { name: string; interval: string; fast: string; search: string; src: string; srcLabel: string; href: string };

const rows: Row[] = [
  {
    name: 'みてねみまもりGPS',
    interval: '高頻度モード 通常1.5分間隔／省エネモード 通常3分間隔。静止時は測位・送信を中断',
    fast: '連続測位モード：お知らせボタンを押すと通常0.5分間隔で30分間（第3〜5世代端末のみ）',
    search: '不可（「リアルタイムに現在地を確認することは出来ません」）',
    src: 'https://help.gps.mitene.us/hc/ja/articles/900004440166',
    srcLabel: 'みてねみまもりGPS ヘルプ「稼働モードとはなんですか？」「位置情報はリアルタイムに更新されますか？」',
    href: '/review/mitene/',
  },
  {
    name: 'BoTトーク',
    interval: 'オートサーチ 最短1.5分間隔（「完全にリアルタイムに追尾するものではありません」）',
    fast: '公式ページに記載なし',
    search: '公式ページに記載なし（保護者が都度サーチ操作をしなくても自動で取得すると案内）',
    src: 'https://www.bsize.com/bot/talk',
    srcLabel: 'BoTトーク 公式ページ',
    href: '/review/bot-talk/',
  },
  {
    name: 'まもサーチ3／まもサーチ2',
    interval: '頻度優先モード 1〜2分／バッテリー持ち優先モード 3〜4分',
    fast: '公式FAQに記載なし',
    search: '現在地検索は第1世代のみ（ベータ版）',
    src: 'https://mamosearch.jp/faq/basic-use01/',
    srcLabel: 'まもサーチ よくある質問',
    href: '/review/mamosearch/',
  },
  {
    name: 'あんしんウォッチャー（au）',
    interval: '移動中：測位優先 約90秒／標準 約3分／バッテリー優先 約5分。定期測位（1〜24時間）も設定可',
    fast: '本体ボタンを3秒長押しで通知後、最短30秒ごとの連続測位（5分・10分・20分から設定）',
    search: '公式FAQに記載なし',
    src: 'https://homeiot.kddi.com/anshinwatcher/kids/faq/036.html',
    srcLabel: 'あんしんウォッチャー よくあるご質問（測位間隔）',
    href: '/review/anshin-watcher/',
  },
  {
    name: 'みもりGPSトーク',
    interval: 'リアルタイムではなく1〜2分間隔で更新',
    fast: '公式FAQに記載なし',
    search: '不可（「アプリから現在いる場所を検索することは出来ない」）',
    src: 'https://mimo-faq.machicomi.jp/?p=3692&scope=faq',
    srcLabel: 'みもり よくある質問（更新間隔・現在地が更新されない）',
    href: '/review/mimori/',
  },
];

const faqData = [
  {
    q: '見守りGPSで、はぐれた子どもの今いる場所がすぐ分かりますか？',
    a: '多くの子ども用GPS端末は、数十秒〜数分の間隔で位置を送る仕組みで、アプリに表示されるのは「最後に送られた位置」です。たとえば、みてねみまもりGPSは公式ヘルプで「リアルタイムに現在地を確認することは出来ません」と案内しており、みもりGPSトークもアプリからの現在地検索はできないと記載しています（2026年11月24日確認）。人混みでは、表示位置から子どもが移動している可能性を前提に探すことが大切です。',
  },
  {
    q: '更新を早くする方法はありますか？',
    a: '機種によっては、ボタン操作で一時的に測位間隔を短くできます。あんしんウォッチャーは本体ボタンの3秒長押しで最短30秒ごとの連続測位、みてねみまもりGPS（第3〜5世代端末）はお知らせボタンで通常0.5分間隔の連続測位モード（30分間）になると公式に記載されています。ただし、いずれもお子さまが自分でボタンを押す必要があります。',
  },
  {
    q: 'AirTagを子どもの迷子防止に使えますか？',
    a: 'Appleの公式サポートページでは、AirTagなどの製品は「人の行動を監視したり、自分のものではない持ち物の場所を特定したりする目的で使うべきではありません」と案内されています。子どもの見守りには、見守り用途として提供されている子ども用GPS端末を選ぶことをおすすめします。詳しくは「AirTagで子供の見守りはできる？」をご覧ください。',
  },
  {
    q: '建物の中や地下では位置が分かりますか？',
    a: 'GPSの電波が届きにくい地下街・建物内・ビル陰などでは、位置の精度が下がったり、更新されなかったりする場合があります。みもりGPSトークの公式FAQでも、地下ではGPS衛星の電波が届きにくい旨が案内されています。屋内での見え方は「屋内でのGPS精度」のページで詳しく説明しています。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function MaigoBoushiGpsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: '迷子防止にGPSは使える？位置の更新間隔と「今すぐ検索」の可否', datePublished: '2026-11-24', dateModified: '2026-11-24', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち情報', href: '/knowledge/' }, { name: '迷子防止にGPSは使える？' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">迷子対策</span>
            <span className="tag-pill bg-blue text-white">使い方</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">迷子防止にGPSは使える？位置の更新間隔と「今すぐ検索」の可否</h1>
          <p className="text-g600 text-lg">子ども用GPS端末5機種の位置の更新間隔と、測位を早める機能を、各社公式の記載で比較しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：はぐれた後の「手がかり」としては役立ちますが、リアルタイムの追跡ではありません</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>更新間隔</strong>：今回確認した5機種は、最短でも約1〜1.5分（ボタン操作時は30秒〜0.5分）間隔で位置を送る仕組みです。アプリの表示は「最後に送られた位置」です。</li>
              <li>・<strong>今すぐ検索</strong>：みてねみまもりGPS・みもりGPSトークは、アプリから現在地を検索できないと公式に記載しています。</li>
              <li>・<strong>迷子対策としての使い方</strong>：出かける前に測位間隔を短いモードに変える、ボタンの押し方をお子さまと練習する、はぐれたときの待ち合わせ場所を決めておく、といった準備と組み合わせることをおすすめします。</li>
            </ul>
          </div>

          <h2 className="section-title">5機種の位置の更新間隔（公式の記載）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">機種</th>
                  <th className="p-3 text-left border-b-2 border-blue">通常の更新間隔</th>
                  <th className="p-3 text-left border-b-2 border-blue">測位を早める機能</th>
                  <th className="p-3 text-left border-b-2 border-blue">アプリから今すぐ検索</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.name} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800"><Link href={r.href} className="text-blue underline">{r.name}</Link></td>
                    <td className="p-3 text-g700">{r.interval}</td>
                    <td className="p-3 text-g700">{r.fast}</td>
                    <td className="p-3 text-g700">{r.search}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：{rows.map((r, i) => (
              <span key={r.src}>
                {i > 0 && '、'}
                <a href={r.src} target="_blank" rel="noopener noreferrer" className="text-blue underline">{r.srcLabel}</a>
              </span>
            ))}、<a href="https://help.gps.mitene.us/hc/ja/articles/900005689946" target="_blank" rel="noopener noreferrer" className="text-blue underline">みてねみまもりGPS ヘルプ（リアルタイム更新）</a>、<a href="https://mimo-faq.machicomi.jp/?p=980&scope=faq" target="_blank" rel="noopener noreferrer" className="text-blue underline">みもり よくある質問（現在地が更新されない）</a>（{CHECKED}）。「公式に記載なし」は、当サイトが確認したページに記載が見当たらなかったことを示します。電波状況や測位の精度により、間隔はこれより長くなる場合があります。
          </p>

          <h2 className="section-title">更新間隔が迷子探しに与える影響</h2>
          <p className="text-sm text-g700 mb-3">
            更新間隔が1.5分の場合、アプリに表示される位置は、最大で約1.5分前（送信の失敗や静止時の中断があればそれ以上前）の位置になります。また、みてねみまもりGPSやみもりGPSトークは、端末が静止しているときは測位を止める仕組みのため、子どもが立ち止まっている場合は最後に動いた地点が表示され続けます。
          </p>
          <p className="text-sm text-g700 mb-8">
            このため、テーマパークや花火大会など人の多い場所では、表示された地点の周辺を探しつつ、その間に子どもが動いている可能性を前提にすることが大切です。エリアの出入りを知らせる通知も、更新間隔より短い時間でエリアを通過すると届かない場合があると、みもりGPSトークの公式FAQに記載されています。
          </p>

          <h2 className="section-title">お出かけ前に準備しておくこと</h2>
          <ul className="space-y-2 text-sm text-g700 mb-8">
            <li>・<strong>測位間隔を短いモードに切り替える</strong>：みてねみまもりGPSの高頻度モード、まもサーチの頻度優先モード、あんしんウォッチャーの測位優先（約90秒）など。電池の減りは早くなるため、満充電で出かけます。</li>
            <li>・<strong>ボタンの押し方を練習する</strong>：あんしんウォッチャー（3秒長押し）やみてねみまもりGPS（お知らせボタン）は、ボタン操作で連続測位に切り替わります。はぐれたら押す、と事前に決めておくと位置の手がかりが細かくなります。</li>
            <li>・<strong>端末の入れ場所を決める</strong>：リュックの外ポケットなど、落としにくく電波が届きやすい場所に入れます。ランドセルに入れる場合の考え方は「<Link href="/knowledge/randoseru-gps/" className="text-blue underline">GPSをランドセルに入れても意味ない？</Link>」で説明しています。</li>
            <li>・<strong>はぐれたときの約束をする</strong>：その場で動かない、近くのお店の人や係員に声をかける、などの行動を事前にお子さまと決めておきます。GPSはあくまで探すための手がかりの一つです。</li>
          </ul>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              夏祭りや帰省での使い方は「<Link href="/knowledge/summer-safety/" className="text-blue underline">夏休みの子供見守りGPS活用ガイド</Link>」、未就学児向けの選び方は「<Link href="/purpose/kindergarten/" className="text-blue underline">幼稚園・保育園児にGPS見守りは必要？</Link>」、精度の考え方は「<Link href="/knowledge/accuracy/" className="text-blue underline">GPSの精度</Link>」をご覧ください。
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
            出典：上記の各社公式ページ、<a href="https://support.apple.com/ja-jp/119874" target="_blank" rel="noopener noreferrer" className="text-blue underline">Apple サポート（AirTagなどの「探す」ネットワーク対応製品と迷惑な追跡の防止）</a>（{CHECKED}）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/apple-airtag/" className="btn-primary">AirTagと専用GPSの違い</Link>
              <Link href="/knowledge/indoor-accuracy/" className="btn-accent">屋内でのGPS精度</Link>
              <Link href="/compare/accuracy/" className="btn-primary">精度で比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
