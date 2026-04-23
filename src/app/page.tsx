import type { Metadata } from 'next';
import Link from 'next/link';
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
    features: ['利用者数No.1の安心感', 'トークPlus対応（月額748円）', '移動履歴の自動記録', '複数の見守り人登録', 'バッテリー持ち最大2ヶ月'],
    pros: ['月額528円〜の低コスト', 'アプリの使いやすさが好評', '位置精度が高い'],
    cons: ['トーク機能は追加料金', '本体カラーが限られる'],
    recommend: '初めてGPSを持たせる方・コスパ重視の方',
  },
  {
    rank: 2,
    name: 'BoTトーク',
    provider: 'ビーサイズ',
    monthly: '528円〜',
    talk: 'トーク対応（748円）',
    positioning: 'GPS+GLONASS+みちびき+Wi-Fi',
    battery: '最大1ヶ月',
    feature: '元祖トーク機能・見守りウォレット',
    slug: '/review/bot-talk/',
    features: ['第6世代の最新モデル', '元祖トーク機能搭載', '見守りウォレット（電子マネー）', 'AIによる行動学習', '生活防水IPX5'],
    pros: ['見守りウォレット機能が便利', 'AI学習で到着予測が正確', 'トーク機能の元祖で実績豊富'],
    cons: ['バッテリーがやや短め', '月額がトーク付きだと748円'],
    recommend: 'トーク＋電子マネーで多機能を求める方',
  },
  {
    rank: 3,
    name: 'あんしんウォッチャー',
    provider: 'KDDI/au',
    monthly: '539円（税込）',
    talk: '非対応',
    positioning: 'GPS+Wi-Fi+携帯基地局',
    battery: '最大1.5ヶ月',
    feature: '2台目無料・au品質',
    slug: '/review/anshin-watcher/',
    features: ['月額539円で最安級', '2台目の月額料金が無料', '最大9人で見守り', 'au回線の安定通信', '現在地・移動履歴確認'],
    pros: ['2台目無料で兄弟利用に最適', 'au回線で通信品質が高い', '月額コストが業界最安級'],
    cons: ['トーク機能なし', 'バッテリーがやや短い'],
    recommend: '兄弟・姉妹で使いたい方・通信品質重視の方',
  },
  {
    rank: 4,
    name: 'soranome（ソラノメ）',
    provider: 'エスキュービズム',
    monthly: '539円（税込）',
    talk: '非対応',
    positioning: 'GPS+Wi-Fi+携帯基地局（3測位）',
    battery: '最大1週間',
    feature: 'SOS通知・3測位対応',
    slug: '/review/soranome/',
    features: ['GPS+Wi-Fi+基地局の3測位', 'SOSボタン搭載', '最大4人で見守り', 'エリア出入り通知', '移動履歴の確認'],
    pros: ['3測位で位置精度が高い', 'SOSボタンで緊急時も安心', '月額539円で手頃'],
    cons: ['バッテリーが最大1週間と短い', 'トーク機能なし'],
    recommend: '位置精度を最優先する方・SOS機能が欲しい方',
  },
  {
    rank: 5,
    name: 'まもサーチ',
    provider: 'BBソフトサービス',
    monthly: '539円（税込）',
    talk: '非対応',
    positioning: 'GPS+Wi-Fi+携帯基地局',
    battery: '最大1ヶ月',
    feature: '最大25人見守り',
    slug: '/review/mamosearch/',
    features: ['最大25人で見守り可能', '第3世代の最新モデル', 'エリア通知機能', '移動履歴の記録', 'コンパクト設計'],
    pros: ['25人まで見守りに参加できる', '祖父母・親戚も一緒に見守れる', 'コンパクトで軽量'],
    cons: ['トーク機能なし', 'バッテリーは使い方次第'],
    recommend: '大家族・祖父母も見守りに参加させたい方',
  },
  {
    rank: 6,
    name: 'SayuU（サユー）',
    provider: 'トヨタ',
    monthly: '1,210円（税込）',
    talk: '通話対応',
    positioning: 'GPS+みちびき+GLONASS',
    battery: '最大3日間',
    feature: '交通安全サポート・左右確認検知',
    slug: '/review/sayuu/',
    features: ['トヨタ開発の交通安全サポート', '左右確認検知機能', '走行検知で危険通知', '双方向通話対応', 'トヨタ品質の安心感'],
    pros: ['交通安全に特化した独自機能', '通話ができる安心感', 'トヨタブランドの信頼性'],
    cons: ['月額1,210円と高め', 'バッテリーが3日間と短い', '本体価格16,500円'],
    recommend: '交通安全が心配な方・通話機能が欲しい方',
  },
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-light via-white to-orange-light">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 text-center">
          <p className="tag-pill bg-blue text-white mb-4">2026年最新版</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-g800 leading-tight mb-6">
            お子さまの安全を、<br className="sm:hidden" />
            GPSでもっと安心に
          </h1>
          <p className="text-lg text-g600 max-w-2xl mx-auto mb-8">
            人気の子供用GPS端末13機種を徹底比較。月額料金・機能・口コミから、
            お子さまにぴったりのGPSが見つかります。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#ranking" className="btn-primary">ランキングを見る</a>
            <a href="#comparison" className="btn-accent">比較表を見る</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-g100">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: '13機種', label: '徹底比較', color: 'text-blue' },
              { num: '月額528円〜', label: '業界最安級', color: 'text-green' },
              { num: '全国対応', label: 'どこでも使える', color: 'text-orange' },
              { num: 'トーク機能', label: '対応モデルあり', color: 'text-blue' },
            ].map((stat) => (
              <div key={stat.label} className="p-4">
                <p className={`text-2xl md:text-3xl font-extrabold ${stat.color}`}>{stat.num}</p>
                <p className="text-sm text-g500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ name: 'GPS端末比較ランキング' }]} />

      {/* Comparison Table */}
      <section id="comparison" className="bg-g50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-title section-title-center">TOP6 GPS端末 比較表</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>順位</th>
                  <th>機種名</th>
                  <th>提供元</th>
                  <th>月額</th>
                  <th>トーク</th>
                  <th>測位</th>
                  <th>バッテリー</th>
                  <th>特徴</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((d) => (
                  <tr key={d.rank}>
                    <td className="text-center font-bold">{d.rank}位</td>
                    <td>
                      <Link href={d.slug} className="text-blue font-bold no-underline hover:underline">
                        {d.name}
                      </Link>
                    </td>
                    <td className="text-g600">{d.provider}</td>
                    <td className="font-semibold whitespace-nowrap">{d.monthly}</td>
                    <td>{d.talk}</td>
                    <td className="text-sm">{d.positioning}</td>
                    <td className="whitespace-nowrap">{d.battery}</td>
                    <td className="text-sm">{d.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ranking Detail */}
      <section id="ranking" className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-title section-title-center">TOP6 おすすめGPS端末ランキング</h2>
          <div className="space-y-8" id="devices">
            {devices.map((d) => (
              <article key={d.rank} className="card-hover p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className={`rank-badge rank-${d.rank}`}>{d.rank}</span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-g800">
                      <Link href={d.slug} className="text-g800 no-underline hover:text-blue">
                        {d.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-g500">{d.provider} | 月額 {d.monthly}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-blue-light rounded-xl p-4">
                    <p className="font-bold text-blue text-sm mb-2">主な機能</p>
                    <ul className="text-sm text-g700 space-y-1">
                      {d.features.map((f, i) => (
                        <li key={i}>・{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-light rounded-xl p-4">
                    <p className="font-bold text-green-dark text-sm mb-2">メリット</p>
                    <ul className="text-sm text-g700 space-y-1">
                      {d.pros.map((p, i) => (
                        <li key={i}>・{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-orange-light rounded-xl p-4">
                    <p className="font-bold text-orange-dark text-sm mb-2">デメリット</p>
                    <ul className="text-sm text-g700 space-y-1">
                      {d.cons.map((c, i) => (
                        <li key={i}>・{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="tag-pill bg-g100 text-g700">おすすめ: {d.recommend}</span>
                  <Link href={d.slug} className="btn-primary text-sm py-2 px-4">
                    詳細レビューを見る
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-g50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-title section-title-center">利用者の声</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { text: '小1の娘に持たせています。学校から帰宅したらアプリに通知が来るので安心', user: '30代女性・みてねGPS利用' },
              { text: '習い事の送迎の際にGPSで位置確認。待ち合わせがスムーズに', user: '40代男性・BoTトーク利用' },
              { text: '兄弟2人に持たせたくて、2台目無料のあんしんウォッチャーにしました', user: '30代女性・あんしんウォッチャー利用' },
              { text: '電池持ちが良く、週1充電で済むのが助かります', user: '30代女性・みてねGPS利用' },
            ].map((t, i) => (
              <div key={i} className="card-hover p-6">
                <p className="text-g700 mb-3">「{t.text}」</p>
                <p className="text-sm text-g500">--- {t.user}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-g400 mt-4 text-center">※口コミは利用者の声を参考に作成した想定例です</p>
        </div>
      </section>

      {/* Campaign Info */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-title section-title-center">最新キャンペーン情報【2026年4月】</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'みてねみまもりGPS', info: '本体価格2,904円（税込）で業界最安級', color: 'bg-blue-light' },
              { name: 'あんしんウォッチャー', info: '2台目月額無料キャンペーン継続中', color: 'bg-green-light' },
              { name: 'BoTトーク', info: '見守りウォレット新機能追加', color: 'bg-orange-light' },
            ].map((c) => (
              <div key={c.name} className={`${c.color} rounded-xl p-6`}>
                <h3 className="font-bold text-g800 mb-2">{c.name}</h3>
                <p className="text-sm text-g700">{c.info}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-g400 mt-4 text-center">※各社の最新情報は公式サイトでご確認ください</p>
        </div>
      </section>

      {/* Purpose Guide */}
      <section id="purpose" className="bg-g50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-title section-title-center">目的別クイックガイド</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '💰',
                title: '安くGPSを持たせたい',
                desc: '月額528円〜のみてねみまもりGPSやBoTトークがおすすめ。2台目無料のあんしんウォッチャーも兄弟利用にお得。',
                link: '/review/mitene/',
                linkText: 'みてねみまもりGPSを見る',
              },
              {
                icon: '💬',
                title: '子供と話せるGPSが欲しい',
                desc: 'トーク機能付きならみてねトークPlusやBoTトーク。通話までしたいならトヨタのSayuUがおすすめ。',
                link: '/review/bot-talk/',
                linkText: 'BoTトークを見る',
              },
              {
                icon: '🛡️',
                title: '防犯・SOS機能重視',
                desc: 'SOSボタン搭載のソラノメがおすすめ。緊急時にボタンひとつで保護者に通知できます。',
                link: '/review/soranome/',
                linkText: 'ソラノメを見る',
              },
              {
                icon: '🎒',
                title: '入学準備として',
                desc: '初めてのGPSなら利用者数No.1のみてねみまもりGPS。シンプル操作で子供でも安心。',
                link: '/review/mitene/',
                linkText: 'みてねみまもりGPSを見る',
              },
              {
                icon: '🚗',
                title: '交通安全が心配',
                desc: 'トヨタのSayuUは左右確認検知・走行検知など交通安全に特化。通学路の安全を見守ります。',
                link: '/review/sayuu/',
                linkText: 'SayuUを見る',
              },
              {
                icon: '👨‍👩‍👧‍👦',
                title: '大家族で見守りたい',
                desc: 'まもサーチなら最大25人で見守り可能。祖父母や親戚も一緒にお子さまを見守れます。',
                link: '/review/mamosearch/',
                linkText: 'まもサーチを見る',
              },
            ].map((item) => (
              <div key={item.title} className="card-hover p-6">
                <p className="text-3xl mb-3">{item.icon}</p>
                <h3 className="text-lg font-bold text-g800 mb-2">{item.title}</h3>
                <p className="text-sm text-g600 mb-4">{item.desc}</p>
                <Link href={item.link} className="text-blue text-sm font-semibold no-underline hover:underline">
                  {item.linkText} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Steps Guide */}
      <section id="guide" className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-title section-title-center">子供用GPS 選び方5ステップ</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { step: 1, title: '目的を明確にする', desc: '位置確認だけ？トークも必要？通話まで欲しい？お子さまの年齢や生活環境に合わせて、必要な機能を整理しましょう。' },
              { step: 2, title: '月額料金を比較する', desc: '月額528円〜1,210円まで幅があります。トーク機能の有無で料金が変わる機種もあるので、必要な機能と予算のバランスを確認。' },
              { step: 3, title: 'バッテリー持ちを確認する', desc: '充電頻度はストレスに直結。最大2ヶ月持つ機種もあれば3日間の機種も。お子さまに充電習慣をつけられるかも考慮。' },
              { step: 4, title: '測位精度と通信品質を比較する', desc: 'GPS+Wi-Fi+基地局の複合測位が主流。au回線、SoftBank回線など通信会社の違いもエリアカバーに影響します。' },
              { step: 5, title: '実際の口コミを参考にする', desc: '公式情報だけでなく、実際に使っている保護者の口コミも参考に。アプリの使いやすさや位置精度の実感は口コミが頼りです。' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start card-hover p-5">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue text-white flex items-center justify-center font-extrabold">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-g50 py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="section-title section-title-center">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue to-blue-dark text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            お子さまにぴったりのGPSを見つけよう
          </h2>
          <p className="text-blue-light mb-8">
            13機種の中から、ご家庭の条件に合った最適なGPS端末をお選びいただけます。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#ranking" className="btn-accent">ランキングをもう一度見る</a>
            <a href="#comparison" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-6 py-3 font-bold text-white no-underline hover:bg-white hover:text-blue transition-colors">
              比較表を見る
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
