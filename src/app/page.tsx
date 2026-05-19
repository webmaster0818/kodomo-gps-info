import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供見守りGPS最新情報 | 2026年おすすめGPS端末比較ランキング',
  description:
    '子供用見守りGPS端末13機種を徹底比較。みてねみまもりGPS、BoTトーク、あんしんウォッチャーなど人気機種の料金・機能・口コミを詳しく紹介。月額528円〜。',
};

const devices = [
  {
    rank: 1,
    name: 'みてねみまもりGPS',
    provider: 'MIXI',
    monthly: '528円〜',
    talk: 'トークPlus対応',
    positioning: 'GPS+GLONASS+みちびき+Wi-Fi',
    battery: '最大2ヶ月',
    feature: '利用者数No.1',
    slug: '/review/mitene/',
    ssSlug: 'ss-mitene',
    features: ['利用者数No.1の安心感', 'トークPlus対応（月額748円）', '移動履歴の自動記録', '複数の見守り人登録', 'バッテリー持ち最大2ヶ月'],
    pros: ['月額528円〜の低コスト', 'アプリの使いやすさが好評', '位置精度が高い'],
    cons: ['トーク機能は追加料金', '本体カラーが限られる'],
    recommend: '初めてGPSを持たせる方・コスパ重視の方',
  },
  {
    rank: 2,
    name: 'あんしんウォッチャー',
    provider: 'KDDI/au',
    monthly: '539円（税込）',
    talk: '非対応',
    positioning: 'GPS+Wi-Fi+携帯基地局',
    battery: '最大1.5ヶ月',
    feature: '2台目無料・au品質',
    slug: '/review/anshin-watcher/',
    ssSlug: 'ss-anshin-watcher',
    features: ['月額539円で最安級', '2台目の月額料金が無料', '最大9人で見守り', 'au回線の安定通信', '現在地・移動履歴確認'],
    pros: ['2台目無料で兄弟利用に最適', 'au回線で通信品質が高い', '月額コストが業界最安級'],
    cons: ['トーク機能なし', 'バッテリーがやや短い'],
    recommend: '兄弟・姉妹で使いたい方・通信品質重視の方',
  },
  {
    rank: 3,
    name: 'BoTトーク',
    provider: 'ビーサイズ',
    monthly: '528円〜',
    talk: 'トーク対応（748円）',
    positioning: 'GPS+GLONASS+みちびき+Wi-Fi',
    battery: '最大1ヶ月',
    feature: '元祖トーク機能・見守りウォレット',
    slug: '/review/bot-talk/',
    ssSlug: 'ss-bot-talk',
    features: ['第6世代の最新モデル', '元祖トーク機能搭載', '見守りウォレット（電子マネー）', 'AIによる行動学習', '生活防水IPX5'],
    pros: ['見守りウォレット機能が便利', 'AI学習で到着予測が正確', 'トーク機能の元祖で実績豊富'],
    cons: ['バッテリーがやや短め', '月額がトーク付きだと748円'],
    recommend: 'トーク＋電子マネーで多機能を求める方',
  },
  {
    rank: 4,
    name: 'まもサーチ',
    provider: 'BBソフトサービス',
    monthly: '539円（税込）',
    talk: '非対応',
    positioning: 'GPS+Wi-Fi+携帯基地局',
    battery: '最大1ヶ月',
    feature: '最大25人見守り',
    slug: '/review/mamosearch/',
    ssSlug: 'ss-mamosearch',
    features: ['最大25人で見守り可能', '第3世代の最新モデル', 'エリア通知機能', '移動履歴の記録', 'コンパクト設計'],
    pros: ['25人まで見守りに参加できる', '祖父母・親戚も一緒に見守れる', 'コンパクトで軽量'],
    cons: ['トーク機能なし', 'バッテリーは使い方次第'],
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
    ssSlug: 'ss-myfirst-fone',
    features: ['音声・ビデオ通話対応', 'キッズスマートウォッチ型', 'カメラ搭載', 'SOS機能', '音楽プレーヤー内蔵'],
    pros: ['通話・ビデオ通話ができる', '腕時計型で紛失しにくい', '多機能で子供が喜ぶ'],
    cons: ['月額が高め', 'バッテリーが短い', '本体価格が高い'],
    recommend: '通話機能重視・腕時計型が良い方',
  },
];

const knowledgeArticles = [
  { title: 'GPS端末はいつから持たせる？適切な時期を解説', slug: '/knowledge/when-to-start/' },
  { title: '子供用GPSの選び方ガイド', slug: '/knowledge/how-to-choose/' },
  { title: 'GPSの位置精度はどれくらい？', slug: '/knowledge/accuracy/' },
  { title: '学校への持ち込みルールと対策', slug: '/knowledge/school-rules/' },
  { title: 'バッテリー持ちを比較検証', slug: '/knowledge/battery/' },
  { title: 'キッズスマホ vs GPS端末の違い', slug: '/knowledge/smartphone-vs-gps/' },
  { title: '防水性能を実機テスト', slug: '/knowledge/waterproof-test/' },
  { title: '見守りGPSの通知機能を徹底解説', slug: '/knowledge/notification-types/' },
];

const faqData = [
  { q: '子供用GPSは何歳から持たせるべき？', a: '小学校入学のタイミング（6〜7歳）で持たせ始めるご家庭が最も多いです。一人で登下校を始める時期に合わせて導入するのがおすすめです。保育園・幼稚園の年長さんから練習で持たせる方もいます。' },
  { q: 'GPS端末の月額料金はいくらかかる？', a: '月額528円〜1,210円が相場です。最安はみてねみまもりGPS（528円）やBoTトーク（528円）。トーク機能付きだと748円程度、トヨタのSayuUは通話対応で1,210円です。2年契約などの縛りはほとんどありません。' },
  { q: 'キッズ携帯とGPS端末はどっちがいい？', a: 'GPS端末はキッズ携帯より小型・軽量で月額も安いのが魅力です。授業中に鳴る心配もなく、学校への持ち込みもOKな場合が多いです。通話が必要な場合はSayuUやキッズ携帯を検討しましょう。' },
  { q: 'GPS端末は学校に持って行ける？', a: 'ほとんどの学校で持ち込み可能です。文部科学省も2020年に「登下校時の防犯対策として携帯・GPS端末の持ち込みを認める」方針を示しています。念のため学校に確認することをおすすめします。' },
  { q: '位置情報の精度はどれくらい？', a: 'GPS＋Wi-Fi＋携帯基地局の複合測位で、屋外では数メートル〜十数メートルの精度です。屋内ではWi-Fi測位により建物内でもある程度の位置把握が可能です。ソラノメなどの3測位対応モデルが精度は高めです。' },
  { q: 'バッテリーはどれくらい持つ？', a: '機種により大きく異なります。みてねみまもりGPSは最大2ヶ月、BoTトークは最大1ヶ月、SayuUは最大3日間です。位置更新の頻度設定によってもバッテリー持ちは変わります。' },
  { q: 'トーク・通話機能は必要？', a: 'お子さまとのコミュニケーション手段として便利です。「今から帰るよ」「迎えに来て」など短いメッセージをやり取りできます。必要に応じてトーク対応モデル（みてねトークPlus、BoTトーク）や通話対応のSayuUを選びましょう。' },
  { q: 'GPS端末の本体価格はいくら？', a: '3,000円〜16,500円程度です。みてねみまもりGPSは5,280円、あんしんウォッチャーは実質無料キャンペーンもあり。SayuUは16,500円と高めですが通話・交通安全機能付きです。' },
  { q: 'SOS・緊急通知機能はある？', a: 'ソラノメにはSOSボタンが搭載されています。その他の機種もエリア出入り通知やバッテリー低下通知など、異常を知らせる機能があります。SayuUは走行検知で交通事故の可能性を通知します。' },
  { q: '解約金や最低利用期間はある？', a: 'ほとんどの機種で解約金や最低利用期間はありません。月額課金なのでいつでも解約可能です。ただし本体を分割購入した場合は残債が発生する場合があります。' },
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

function RankBadge({ rank }: { rank: number }) {
  const suffixes: Record<number, string> = { 1: 'st', 2: 'nd', 3: 'rd' };
  const suffix = suffixes[rank] || 'th';
  const colors: Record<number, string> = {
    1: 'from-yellow-400 to-amber-500 ring-yellow-200',
    2: 'from-gray-300 to-gray-500 ring-gray-200',
    3: 'from-amber-500 to-amber-700 ring-amber-200',
  };
  const bg = colors[rank];
  const gradientClass = bg
    ? `bg-gradient-to-br ${bg} ring-2`
    : 'bg-stone-500';
  return (
    <div className={`absolute top-3 left-3 z-10 ${gradientClass} rounded-lg px-3 py-1.5 shadow-md`}>
      <span className="text-white font-extrabold text-xs tracking-wide">{rank}{suffix}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ===== 1. Hero Section ===== */}
      <section className="relative overflow-hidden min-h-[520px] md:min-h-[600px] flex items-center">
        {/* Background image */}
        <Image
          src="/hero-mother-child.png"
          alt="子供の安全を見守る母親"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/70 via-amber-800/50 to-orange-700/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 md:py-28 text-center">
          <p className="inline-block rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-1.5 text-sm font-semibold text-white mb-6">
            2026年最新版 -- 専門家監修
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 drop-shadow-lg">
            幸せは当たり前の日常にある。
          </h1>
          <p className="text-xl md:text-2xl font-bold text-amber-200 mb-6 drop-shadow-md">
            当たり前を守るために
          </p>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            お子さまの安全を見守るGPS端末を、専門家の目で徹底比較しました。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#ranking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 text-lg transition-all hover:-translate-y-0.5 shadow-lg shadow-amber-500/30"
            >
              おすすめランキングを見る
            </a>
            <Link
              href="/concierge/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 text-white font-bold px-8 py-4 text-lg transition-all hover:bg-white hover:text-amber-800 no-underline"
            >
              無料診断で選ぶ
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 2. Trust Section ===== */}
      <section className="bg-[#FFFBF0] border-b border-amber-100">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-800 mb-10">
            数字で見る安心
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '/icon-gps-pin.png',
                iconAlt: 'GPS解説ページアイコン',
                number: '85+',
                unit: 'ページ',
                label: '徹底解説',
              },
              {
                icon: '/icon-compare.png',
                iconAlt: '機種比較アイコン',
                number: '13',
                unit: '機種',
                label: '全機種比較',
              },
              {
                icon: '/icon-shield.png',
                iconAlt: '安心の専門家監修アイコン',
                number: '安心',
                unit: '',
                label: '専門家監修',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm border border-amber-100"
              >
                <Image
                  src={stat.icon}
                  alt={stat.iconAlt}
                  width={56}
                  height={56}
                  className="mb-4"
                />
                <p className="text-3xl md:text-4xl font-black text-amber-600">
                  {stat.number}
                  {stat.unit && <span className="text-lg font-bold text-gray-600 ml-1">{stat.unit}</span>}
                </p>
                <p className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ name: 'GPS端末比較ランキング' }]} />

      {/* ===== 3. Ranking Section ===== */}
      <section id="ranking" className="bg-[#FFFBF0] py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-800 mb-3">
            おすすめGPS端末ランキング
          </h2>
          <p className="text-center text-gray-500 mb-10 text-sm">
            月額料金・機能・口コミを総合的に評価しました
          </p>

          <div className="space-y-6">
            {devices.map((d) => (
              <article
                key={d.rank}
                className="relative bg-white rounded-2xl border border-amber-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
              >
                <RankBadge rank={d.rank} />

                <div className="flex flex-col md:flex-row">
                  {/* Product screenshot - left side on PC */}
                  <div className="md:w-80 md:shrink-0 bg-gray-50 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/${d.ssSlug}.jpg`} alt={`${d.name} 公式サイト`} className="w-full h-48 md:h-auto md:max-h-72 object-contain" />
                  </div>

                <div className="p-6 md:p-8 flex-1">
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-extrabold text-gray-800">
                      <Link href={d.slug} className="text-gray-800 no-underline hover:text-amber-600 transition-colors">
                        {d.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {d.provider} / 月額 <span className="font-bold text-amber-600">{d.monthly}</span>
                    </p>
                  </div>
                </div>

                {/* Feature / Pros / Cons grid */}
                <div className="grid md:grid-cols-3 gap-4 mb-5">
                  <div className="bg-amber-50 rounded-xl p-4">
                    <p className="font-bold text-amber-700 text-sm mb-2">主な機能</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {d.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-400 mt-0.5 flex-shrink-0">--</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-4">
                    <p className="font-bold text-emerald-700 text-sm mb-2">メリット</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {d.pros.map((p, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-400 mt-0.5 flex-shrink-0">--</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-rose-50 rounded-xl p-4">
                    <p className="font-bold text-rose-600 text-sm mb-2">デメリット</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {d.cons.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-rose-300 mt-0.5 flex-shrink-0">--</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-block rounded-full bg-amber-50 border border-amber-200 text-gray-700 text-xs font-semibold px-3 py-1">
                    おすすめ: {d.recommend}
                  </span>
                  <Link
                    href={d.slug}
                    className="inline-flex items-center justify-center gap-1 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm py-2 px-5 transition-all no-underline"
                  >
                    詳細レビューを見る
                  </Link>
                </div>
                </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. 3 Steps Section ===== */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-800 mb-3">
            かんたん3ステップで選ぶ
          </h2>
          <p className="text-center text-gray-500 mb-10 text-sm">
            初めてでも迷わない、シンプルな選び方
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                icon: '/icon-guide.png',
                iconAlt: 'ガイドアイコン',
                title: '目的を決める',
                desc: '位置確認だけ？トークも必要？通話まで欲しい？お子さまの年齢や生活に合わせて、必要な機能を整理しましょう。',
              },
              {
                step: 2,
                icon: '/icon-compare.png',
                iconAlt: '比較アイコン',
                title: '比較する',
                desc: '月額料金・バッテリー・測位精度など、重視するポイントで各機種を比較。当サイトの比較表が便利です。',
              },
              {
                step: 3,
                icon: '/icon-shield.png',
                iconAlt: 'シールドアイコン',
                title: '安心して購入',
                desc: '全機種に解約金なし・最低利用期間なし。合わなければいつでも変更できるので、まずは試してみましょう。',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center text-center bg-[#FFFBF0] rounded-2xl p-8 border border-amber-100"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white font-black text-sm mb-4">
                  {item.step}
                </span>
                <Image
                  src={item.icon}
                  alt={item.iconAlt}
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. Category Navigation ===== */}
      <section className="bg-[#FFFBF0] py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-800 mb-10">
            カテゴリから探す
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: 'レビュー',
                desc: '各機種の詳細レビュー',
                href: '/review/mitene/',
                bgColor: 'bg-amber-50',
                borderColor: 'border-amber-200',
                textColor: 'text-amber-700',
              },
              {
                title: '比較',
                desc: '機種同士を徹底比較',
                href: '/compare/',
                bgColor: 'bg-emerald-50',
                borderColor: 'border-emerald-200',
                textColor: 'text-emerald-700',
              },
              {
                title: '知識',
                desc: 'GPS端末の基礎知識',
                href: '/knowledge/how-to-choose/',
                bgColor: 'bg-sky-50',
                borderColor: 'border-sky-200',
                textColor: 'text-sky-700',
              },
              {
                title: '目的別',
                desc: '目的に合った端末選び',
                href: '/purpose/',
                bgColor: 'bg-rose-50',
                borderColor: 'border-rose-200',
                textColor: 'text-rose-600',
              },
            ].map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className={`${cat.bgColor} ${cat.borderColor} border rounded-2xl p-6 text-center no-underline transition-all hover:-translate-y-1 hover:shadow-md`}
              >
                <h3 className={`text-lg font-bold ${cat.textColor} mb-1`}>{cat.title}</h3>
                <p className="text-xs text-gray-500">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. Latest Articles ===== */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-800 mb-10">
            お役立ち記事
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {knowledgeArticles.map((article) => (
              <Link
                key={article.slug}
                href={article.slug}
                className="group bg-[#FFFBF0] rounded-xl border border-amber-100 p-5 no-underline transition-all hover:shadow-md hover:border-amber-300"
              >
                <p className="text-sm font-bold text-gray-800 group-hover:text-amber-600 transition-colors leading-snug">
                  {article.title}
                </p>
                <span className="inline-block mt-3 text-xs font-semibold text-amber-500">
                  記事を読む →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. CTA Section ===== */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-amber-600 via-amber-500 to-orange-500 text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white_0%,transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 leading-snug">
            お子さまにぴったりの<br className="sm:hidden" />GPSを見つけましょう
          </h2>
          <p className="text-amber-100 mb-8 text-base md:text-lg">
            13機種の中から、ご家庭の条件に合った最適なGPS端末をお選びいただけます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/concierge/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-amber-700 font-bold px-8 py-4 text-lg transition-all hover:bg-amber-50 hover:-translate-y-0.5 shadow-lg no-underline"
            >
              無料診断で選ぶ
            </Link>
            <a
              href="#ranking"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 text-white font-bold px-8 py-4 text-lg transition-all hover:bg-white hover:text-amber-700 no-underline"
            >
              ランキングをもう一度見る
            </a>
          </div>
        </div>
      </section>

      {/* ===== 8. FAQ ===== */}
      <section id="faq" className="bg-[#FFFBF0] py-14">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-800 mb-10">
            よくある質問
          </h2>
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
