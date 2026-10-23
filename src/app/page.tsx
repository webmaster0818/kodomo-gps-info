import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供見守りGPS最新情報 | 2026年おすすめGPS端末比較ランキング',
  description:
    '子供用見守りGPS端末13機種を、公式サイトの情報にもとづいて比較しています。みてねみまもりGPS、BoTトーク、あんしんウォッチャーなど主要機種の料金・機能・口コミをご紹介します。月額528円〜。',
};

const devices = [
  {
    rank: 1,
    name: 'みてねみまもりGPS',
    provider: 'MIXI',
    monthly: '528円〜',
    talk: 'トークPlus対応',
    positioning: 'GPS+GLONASS+みちびき+Wi-Fi',
    battery: '最大2カ月',
    feature: '利用者数No.1（公式表記）',
    slug: '/review/mitene/',
    ssSlug: 'mitene',
    officialUrl: 'https://mitene.us/gps',
    officialHost: 'mitene.us',
    spec: { monthly: '528円〜748円', price: '5,280円〜7,480円', talk: 'ボイスメッセージ（トーク・トークPlus）／通話なし', battery: '最大2カ月（MG05・省エネモード）' },
    features: ['公式表記で「利用者数No.1」', 'トークPlus対応（月額748円）', '移動履歴の自動記録', '複数の見守り人登録', 'バッテリー持ち最大2カ月'],
    pros: ['月額528円〜の低価格', '定評のあるアプリの操作性', '高い位置精度'],
    cons: ['トーク機能は追加料金', '限られた本体カラー'],
    recommend: '初めてGPS端末を持たせる方・費用を抑えたい方',
  },
  {
    rank: 2,
    name: 'あんしんウォッチャー',
    provider: 'KDDI/au',
    monthly: '539円（税込）',
    talk: '非対応',
    positioning: 'GPS+Wi-Fi+携帯基地局',
    battery: '最大1.5カ月',
    feature: '2台目無料・au品質',
    slug: '/review/anshin-watcher/',
    ssSlug: 'anshin-watcher',
    officialUrl: 'https://homeiot.kddi.com/anshinwatcher/kids/',
    officialHost: 'homeiot.kddi.com',
    spec: { monthly: '539円（2台目まで同額）', price: '5,680円（LE）／11,000円', talk: 'なし（ボタンで現在地を通知）', battery: '最大2カ月' },
    features: ['月額539円で2台まで利用可能', '2台目の月額料金が無料', '最大9人で見守り', 'au回線の安定通信', '現在地・移動履歴確認'],
    pros: ['2台目無料で兄弟での利用に最適', 'au回線による高い通信品質', '最大2カ月の電池持ち'],
    cons: ['トーク・通話機能なし', '1つのau IDで登録できるのは2台まで'],
    recommend: '兄弟・姉妹で使いたい方・通信品質重視の方',
  },
  {
    rank: 3,
    name: 'BoTトーク',
    provider: 'ビーサイズ',
    monthly: '528円〜',
    talk: 'トーク対応（748円）',
    positioning: 'GPS+GLONASS+みちびき+Wi-Fi',
    battery: '最大1カ月',
    feature: '元祖トーク機能・見守りウォレット',
    slug: '/review/bot-talk/',
    ssSlug: 'bot-talk',
    officialUrl: 'https://www.bsize.com/bot/talk',
    officialHost: 'www.bsize.com',
    spec: { monthly: '528円〜748円', price: '5,280円＋送料', talk: 'ボイスメッセージ（トークプラン）／通話なし', battery: '最長1カ月以上（GPSプラン）' },
    features: ['第6世代の最新モデル', '元祖トーク機能搭載', '見守りウォレット（電子マネー）', 'AIによる行動学習', '生活防水IPX5'],
    pros: ['見守りウォレット機能が便利', 'AI学習で到着予測が正確', 'トーク機能の元祖で実績豊富'],
    cons: ['バッテリーがやや短め', 'トーク機能を利用する場合は月額748円'],
    recommend: 'トークと電子マネーを併用したい方',
  },
  {
    rank: 4,
    name: 'まもサーチ',
    provider: 'BBソフトサービス',
    monthly: '528円（税込）',
    talk: '非対応',
    positioning: 'GPS+Wi-Fi+携帯基地局',
    battery: '最大2カ月',
    feature: '最大25人見守り',
    slug: '/review/mamosearch/',
    ssSlug: 'mamosearch',
    officialUrl: 'https://mamosearch.jp',
    officialHost: 'mamosearch.jp',
    spec: { monthly: '528円（年額5,500円も可）', price: '5,280円', talk: 'なし（ボタンで現在地を通知）', battery: '最大2カ月（電池優先モード）' },
    features: ['最大25人で見守り可能', '第3世代の最新モデル', 'エリア通知機能', '移動履歴の記録', 'コンパクト設計'],
    pros: ['最大25人での見守り', '祖父母・親戚も参加できる見守り', 'コンパクトで軽量'],
    cons: ['トーク機能なし', 'バッテリー持ちは設定により変動'],
    recommend: '大家族・祖父母も見守りに参加させたい方',
  },
  {
    rank: 5,
    name: 'myFirst Fone R2',
    provider: 'myFirst',
    monthly: '980円（税込）',
    talk: '通話・ビデオ通話対応',
    positioning: 'GPS+Wi-Fi+携帯基地局',
    battery: '最大2日間',
    feature: 'キッズスマートウォッチ・通話対応',
    slug: '/review/myfirst-fone/',
    ssSlug: 'myfirst-fone',
    officialUrl: 'https://jp.myfirst.tech/products/myfirst-fone-r2',
    officialHost: 'jp.myfirst.tech',
    spec: { monthly: '980円（年間一括8,580円）', price: '18,800円', talk: '音声・ビデオ通話（専用アプリ同士）', battery: '連続通話 約6時間' },
    features: ['音声・ビデオ通話対応', 'キッズスマートウォッチ型', 'カメラ搭載', 'SOS機能', '音楽プレーヤー内蔵'],
    pros: ['通話・ビデオ通話に対応', '紛失しにくい腕時計型', '機能が豊富'],
    cons: ['月額が高め', '短いバッテリー持ち', '高めの本体価格'],
    recommend: '通話機能を重視する方・腕時計型を希望する方',
  },
];

const knowledgeArticles = [
  { title: 'GPS端末はいつから持たせる？適切な時期の解説', slug: '/knowledge/when-to-start/' },
  { title: '子供用GPSの選び方ガイド', slug: '/knowledge/how-to-choose/' },
  { title: 'GPSの位置精度はどれくらい？', slug: '/knowledge/accuracy/' },
  { title: '学校への持ち込みルールと対策', slug: '/knowledge/school-rules/' },
  { title: 'バッテリー持ちの比較', slug: '/knowledge/battery/' },
  { title: 'キッズスマートフォンとGPS端末の違い', slug: '/knowledge/smartphone-vs-gps/' },
  { title: '防水性能の比較', slug: '/knowledge/waterproof-test/' },
  { title: '見守りGPSの通知機能の解説', slug: '/knowledge/notification-types/' },
];

const faqData = [
  { q: '子供用GPSは何歳から持たせるべきですか？', a: '小学校入学のタイミング（6〜7歳）で持たせ始めるご家庭が最も多い傾向です。お子さまが一人で登下校を始める時期に合わせて導入することをおすすめします。保育園・幼稚園の年長から、練習として持たせるご家庭もあります。' },
  { q: 'GPS端末の月額料金はいくらですか？', a: '月額528円〜1,210円が相場です。最も安いのはみてねみまもりGPS（528円）とBoTトーク（528円）です。トーク機能を利用する場合は748円程度、トヨタのSayuUは通話対応で1,210円です。2年契約などの契約期間の縛りがある機種はほとんどありません。' },
  { q: 'キッズ携帯とGPS端末はどちらがよいですか？', a: 'GPS端末はキッズ携帯より小型・軽量で、月額料金も抑えられます。授業中に音が鳴る心配が少なく、学校への持ち込みが認められる場合も多くあります。通話が必要な場合は、SayuUやキッズ携帯をご検討ください。' },
  { q: 'GPS端末は学校に持って行けますか？', a: 'ほとんどの学校で持ち込みが可能です。文部科学省も2020年に「登下校時の防犯対策として携帯・GPS端末の持ち込みを認める」方針を示しています。ご利用前に、在籍する学校へご確認ください。' },
  { q: '位置情報の精度はどの程度ですか？', a: 'GPS＋Wi-Fi＋携帯基地局の複合測位により、屋外では数メートル〜十数メートルの精度です。屋内でもWi-Fi測位により、ある程度の位置把握が可能です。GPS・Wi-Fi・基地局の3測位に対応したモデルは、精度が高い傾向にあります。' },
  { q: 'バッテリーはどの程度持ちますか？', a: '機種により大きく異なります。みてねみまもりGPSは最大2カ月、BoTトークは最大1カ月、SayuUは最大3日間です。位置更新の頻度設定によっても、バッテリー持ちは変わります。' },
  { q: 'トーク・通話機能は必要ですか？', a: 'お子さまとの連絡手段として役立ちます。「今から帰るよ」「迎えに来て」などの短いメッセージをやり取りできます。必要に応じて、トーク対応モデル（みてねトークPlus、BoTトーク）や通話対応のSayuUをお選びください。' },
  { q: 'GPS端末の本体価格はいくらですか？', a: '3,000円〜16,500円程度です。みてねみまもりGPSは5,280円で、あんしんウォッチャーは実質無料となるキャンペーンが実施される場合もあります。SayuUは16,500円と高めですが、通話機能と交通安全機能を備えています。' },
  { q: 'SOS・緊急通知機能はありますか？', a: 'myFirst FoneにはSOSボタンが搭載されています。みもりGPSトークには、押すと周囲の音を録音し、現在地とともに保護者へ通知するボタンがあります。その他の機種にも、エリア出入り通知やバッテリー低下通知など、異常を知らせる機能があります。SayuUは走行検知により、交通事故の可能性を通知します。' },
  { q: '解約金や最低利用期間はありますか？', a: 'ほとんどの機種で、解約金や最低利用期間は設けられていません。月額課金のため、いつでも解約が可能です。ただし、本体を分割購入した場合は残債が発生することがあります。' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

const SS_DATE = '2026年10月21日';
const SPEC_DATE = '2026年10月21日';

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供見守りGPS最新情報", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "ItemList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "みてねみまもりGPS", "url": "https://gps-kodomo.com/review/mitene/"}, {"@type": "ListItem", "position": 2, "name": "あんしんウォッチャー", "url": "https://gps-kodomo.com/review/anshin-watcher/"}, {"@type": "ListItem", "position": 3, "name": "BoTトーク", "url": "https://gps-kodomo.com/review/bot-talk/"}, {"@type": "ListItem", "position": 4, "name": "まもサーチ", "url": "https://gps-kodomo.com/review/mamosearch/"}, {"@type": "ListItem", "position": 5, "name": "myFirst Fone R2", "url": "https://gps-kodomo.com/review/myfirst-fone/"}]}) }} />

      {/* ===== 1. ファーストビュー（画像は縮小のみで左右を切らない） ===== */}
      <section className="hero" aria-labelledby="hero-title">
        <picture>
          <source media="(min-width: 768px)" srcSet="/hero-pc.webp" type="image/webp" />
          <source media="(min-width: 768px)" srcSet="/hero-pc.jpg" />
          <source srcSet="/hero-sp.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero-sp.jpg" alt="母親と手をつなぎ、笑顔で見上げながら歩く小学生" className="hero-img" fetchPriority="high" />
        </picture>
        <div className="hero-copy">
          <p className="hero-badge">2026年最新版<span aria-hidden="true">—</span>公式情報にもとづく比較</p>
          <h1 id="hero-title" className="hero-title">子供見守りGPS端末の<br />比較情報</h1>
          <p className="hero-sub">お子さまの日常の安全を見守るために</p>
          <p className="hero-text">当サイトでは、お子さまの安全を見守るGPS端末を、各社の公式サイトの情報にもとづいて比較しています。</p>
          <div className="hero-cta">
            <a href="#compare-table" className="btn-accent">比較表を見る</a>
            <a href="#ranking" className="btn-outline">おすすめランキング</a>
          </div>
        </div>
      </section>

      {/* ===== 2. 掲載方針（数字は実数のみ） ===== */}
      <section className="border-b border-g200 bg-white">
        <ul className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-g200 px-4">
          <li className="py-4 sm:py-5 sm:px-6 first:sm:pl-0 flex sm:block items-baseline gap-3"><p className="text-xs font-bold tracking-[0.12em] text-g500">掲載機種</p><p className="text-2xl font-bold text-blue-dark sm:mt-1">13<span className="ml-1 text-sm font-bold text-g600">機種</span></p></li>
          <li className="py-4 sm:py-5 sm:px-6 first:sm:pl-0 flex sm:block items-baseline gap-3"><p className="text-xs font-bold tracking-[0.12em] text-g500">解説・比較ページ</p><p className="text-2xl font-bold text-blue-dark sm:mt-1">100<span className="ml-1 text-sm font-bold text-g600">ページ以上</span></p></li>
          <li className="py-4 sm:py-5 sm:px-6 first:sm:pl-0 flex sm:block items-baseline gap-3"><p className="text-xs font-bold tracking-[0.12em] text-g500">情報の確認方法</p><p className="text-[15px] font-bold text-blue-dark sm:mt-2 leading-snug">各社の公式サイトで確認し、<br className="hidden sm:inline" />確認日を記載</p></li>
        </ul>
      </section>

      <Breadcrumb items={[{ name: 'GPS端末比較ランキング' }]} />

      {/* ===== 3. 比較表（1機種1行・横に並べて縦に伸ばさない） ===== */}
      <section id="compare-table" className="bg-white pt-10 pb-14 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="home-h2">主要5機種の比較表</h2>
          <p className="home-lead">料金・通話・電池持ちを1行ずつ並べています。金額はすべて税込で、各社の公式サイトの記載です（{SPEC_DATE}確認）。</p>
          <div className="spec-scroll">
            <table className="spec-table">
              <thead>
                <tr>
                  <th scope="col" className="spec-sticky">機種</th>
                  <th scope="col">月額料金</th>
                  <th scope="col">本体価格</th>
                  <th scope="col">通話・トーク</th>
                  <th scope="col">電池持ち（公式の最大値）</th>
                  <th scope="col">こんな方に</th>
                  <th scope="col"><span className="sr-only">詳細</span></th>
                </tr>
              </thead>
              <tbody>
                {devices.map((d) => (
                  <tr key={d.rank}>
                    <th scope="row" className="spec-sticky">
                      <span className={`rank-num rank-num-${d.rank}`}>{d.rank}</span>
                      <Link href={d.slug} className="spec-name">{d.name}</Link>
                      <span className="block text-[11px] font-normal text-g500">{d.provider}</span>
                    </th>
                    <td className="font-bold text-blue-dark">{d.spec.monthly}</td>
                    <td>{d.spec.price}</td>
                    <td>{d.spec.talk}</td>
                    <td>{d.spec.battery}</td>
                    <td className="text-[13px] text-g600 min-w-[180px]">{d.recommend}</td>
                    <td><Link href={d.slug} className="spec-link">詳細</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-[11px] text-g500 md:hidden">表は横にスクロールできます。</p>
          <p className="mt-3 text-xs text-g500">電池持ちは各社が示す条件での最大値で、位置の更新間隔や電波の状況によって短くなります。最新の料金は各公式サイトでご確認ください。</p>
        </div>
      </section>

      {/* ===== 4. ランキング（公式サイトのキャプチャ＋要点を横並び） ===== */}
      <section id="ranking" className="bg-[#F4F7FA] py-14 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="home-h2">おすすめGPS端末ランキング</h2>
          <p className="home-lead">月額料金・機能・使いやすさを総合して順位を付けています。画像は各社の公式サイトのトップページです（{SS_DATE}撮影）。</p>

          <div className="space-y-4">
            {devices.map((d) => (
              <article key={d.rank} className="rank-card">
                <figure className="rank-shot">
                  <div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>{d.officialHost}</span></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/ss/${d.ssSlug}.jpg`} alt={`${d.name}の公式サイト（${SS_DATE}撮影）`} loading="lazy" width={1280} height={800} />
                  <figcaption>公式サイト（{SS_DATE}撮影）</figcaption>
                </figure>
                <div className="rank-body">
                  <div className="flex items-start gap-3">
                    <span className={`rank-num rank-num-${d.rank} mt-0.5`}>{d.rank}</span>
                    <div className="min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-g900 leading-snug">
                        <Link href={d.slug} className="text-g900 no-underline hover:text-blue">{d.name}</Link>
                      </h3>
                      <p className="text-[13px] text-g500 mt-0.5">{d.provider}　月額 <strong className="text-blue-dark">{d.spec.monthly}</strong></p>
                    </div>
                  </div>
                  <dl className="rank-points">
                    <div><dt>主な機能</dt><dd>{d.features.slice(0, 3).join('／')}</dd></div>
                    <div><dt>よい点</dt><dd>{d.pros.join('／')}</dd></div>
                    <div><dt>注意点</dt><dd>{d.cons.join('／')}</dd></div>
                    <div><dt>こんな方に</dt><dd>{d.recommend}</dd></div>
                  </dl>
                  <div className="mt-4">
                    <Link href={d.slug} className="btn-primary !py-2.5 !px-6 !text-sm">詳細レビューを見る</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. 選び方3ステップ ===== */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="home-h2">はじめて選ぶときの3ステップ</h2>
          <p className="home-lead">初めてGPS端末を選ぶ方にも分かりやすい手順をご紹介します。</p>
          <ol className="grid md:grid-cols-3 gap-4">
            {[
              { step: '01', title: '目的を決める', desc: '位置確認のみでよいか、トークや通話も必要かを検討します。お子さまの年齢や生活に合わせて、必要な機能を整理してください。' },
              { step: '02', title: '比較する', desc: '月額料金・バッテリー・測位精度など、重視する項目で各機種を比較します。当サイトの比較表をご活用ください。' },
              { step: '03', title: '申し込む', desc: '掲載機種には、解約金や最低利用期間のない料金体系が多くあります。ご家庭に合わない場合も変更しやすいため、まずはお試しいただくことをおすすめします。' },
            ].map((item) => (
              <li key={item.step} className="border-t-2 border-blue-dark pt-4">
                <p className="text-sm font-bold tracking-[0.12em] text-blue">STEP {item.step}</p>
                <h3 className="mt-1 text-lg font-bold text-g900">{item.title}</h3>
                <p className="mt-2 text-sm text-g600 leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== 6. カテゴリ・記事 ===== */}
      <section className="bg-[#F4F7FA] py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="home-h2">カテゴリから探す</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {[
              { title: '機種別レビュー', desc: '各機種の詳細レビュー', href: '/review/' },
              { title: '比較', desc: '機種同士の比較', href: '/compare/' },
              { title: '基礎知識', desc: 'GPS端末の基礎知識', href: '/knowledge/how-to-choose/' },
              { title: '目的別', desc: '目的に合った端末選び', href: '/purpose/' },
            ].map((cat) => (
              <Link key={cat.title} href={cat.href} className="link-tile">
                <span className="block font-bold text-g900">{cat.title}</span>
                <span className="block mt-1 text-xs text-g500">{cat.desc}</span>
              </Link>
            ))}
          </div>

          <h2 className="home-h2">お役立ち記事</h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 border-t border-g200 mb-12">
            {knowledgeArticles.map((article) => (
              <li key={article.slug} className="border-b border-g200">
                <Link href={article.slug} className="list-link">{article.title}</Link>
              </li>
            ))}
          </ul>

          <h2 className="home-h2">用途から比較する</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { title: '料金で比較', desc: '本体代と月額料金の3年間の総額による比較', href: '/compare/cost/' },
              { title: '学童・習い事の行き帰り', desc: '一人で通う放課後の見守りに適した機種', href: '/compare/after-school/' },
              { title: '学校向け静音GPS', desc: '音が鳴らない機種・トーク機能のない機種の比較', href: '/compare/school-silent/' },
              { title: '電池持ちで比較', desc: '充電の頻度が少ない機種のランキング', href: '/compare/battery-life/' },
              { title: '大きさ・重さで比較', desc: '10機種の公式サイズ・重さ・防水等級の一覧', href: '/compare/size-weight/' },
              { title: '遠足・修学旅行向け', desc: '行事に持たせる機種と、持ち込み可否の考え方', href: '/compare/school-trip/' },
              { title: '総合ランキング', desc: '2026年の総合的なおすすめ機種', href: '/compare/2026-ranking/' },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="link-tile">
                <span className="block font-bold text-g900 text-[15px]">{c.title}</span>
                <span className="block mt-1 text-xs text-g500 leading-relaxed">{c.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. CTA ===== */}
      <section className="bg-blue-dark text-white py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl md:text-[28px] font-bold leading-snug">お子さまに合った<br className="sm:hidden" />GPS端末の選び方</h2>
          <p className="mt-3 text-[#C9D6E3] text-[15px]">当サイトでは、13機種の中からご家庭の条件に合ったGPS端末をお選びいただけるよう、情報を整理しています。</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/purpose/" className="btn-accent">目的別に選ぶ</Link>
            <a href="#compare-table" className="btn-outline btn-outline-inverse">比較表を見る</a>
          </div>
        </div>
      </section>

      {/* ===== 8. FAQ ===== */}
      <section id="faq" className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="home-h2">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
