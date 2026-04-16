import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS 選び方ガイド | 7つのポイントで最適な1台を見つける',
  description:
    '子供GPS端末の選び方を7つのポイント（月額・バッテリー・トーク・精度・サイズ・防水・アプリ）で解説。タイプ別診断でお子さまに最適なGPSが見つかります。',
};

const faqData = [
  { q: '子供GPSを選ぶときに最も重要なポイントは？', a: '最も重要なのは月額料金とバッテリー持ちです。月額は528円〜1,100円まで幅があり、バッテリーは毎日充電〜2ヶ月持ちまで差が大きいため、まずこの2点で絞り込むのがおすすめです。' },
  { q: 'トーク機能は必要ですか？', a: '低学年のお子さまには必須ではありませんが、あると安心です。「今から帰るよ」などの連絡ができるため、特に共働き家庭や習い事がある場合に便利です。月額200円程度の追加で利用できます。' },
  { q: '防水機能は必要ですか？', a: '雨の日の通学や外遊びを考えると、IPX5（生活防水）以上は欲しいところです。ほとんどの機種が生活防水に対応していますが、水泳や入浴には対応していません。' },
  { q: 'GPS端末と腕時計型はどう違う？', a: 'GPS端末はランドセルに入れるだけで済むシンプルなタイプ。腕時計型は通話やカメラ機能がある反面、本体が高価で充電頻度が高くなります。低学年にはGPS端末がおすすめです。' },
  { q: 'アプリの使いやすさは重要？', a: '非常に重要です。毎日使うアプリなので、地図の見やすさ・通知の設定しやすさ・動作の軽さは選ぶ際の大きなポイントです。口コミでアプリの評価も確認しましょう。' },
  { q: '何台も比較するのが面倒です。', a: 'まず月額予算（500円台 or 700円台以上）とトーク機能の要否を決めると、候補が2〜3機種に絞れます。あとはバッテリーとアプリの口コミで最終決定するのが効率的です。' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const points = [
  { icon: '💰', title: '月額料金', desc: '528円〜1,100円まで幅があります。基本的な位置確認のみなら500円台で十分。トーク機能付きは700円台〜。家計に合った料金プランを選びましょう。' },
  { icon: '🔋', title: 'バッテリー持ち', desc: '最大2ヶ月〜毎日充電まで差が大きいポイント。充電忘れが心配なら、1ヶ月以上持つ機種を選ぶと安心です。更新間隔を長くすると持ちが良くなります。' },
  { icon: '💬', title: 'トーク機能', desc: 'テキストや音声メッセージでお子さまとやりとりできる機能。低学年は不要な場合も多いですが、共働き家庭では「帰るよ」の一言が大きな安心に。' },
  { icon: '📍', title: '測位精度', desc: 'GPS+GLONASS+みちびき+Wi-Fiの複合測位対応機種が高精度。ビル街や屋内の精度も確認しましょう。更新間隔も精度に影響します。' },
  { icon: '📏', title: 'サイズ・重量', desc: '40g〜110g、硬貨大〜カード大まで様々。ランドセルに入れるなら50g以下がベスト。腕時計型は手首への負担も考慮しましょう。' },
  { icon: '💧', title: '防水性能', desc: 'IPX5（生活防水）以上が安心。雨の日の通学や水たまりでの遊びにも対応できます。完全防水（IPX8）は少数です。' },
  { icon: '📱', title: 'アプリの使いやすさ', desc: '毎日開くアプリだからUI/UXは重要。地図の見やすさ、通知設定の柔軟さ、動作の軽さをチェック。アプリストアの評価も参考に。' },
];

export default function HowToChoosePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '選び方ガイド' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">選び方ガイド</span>
            <span className="tag-pill bg-orange text-white">7ポイント</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS 選び方ガイド
          </h1>
          <p className="text-g600 text-lg">7つのポイントを押さえて最適な1台を見つけましょう</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">選び方7つのポイント</h2>
          <div className="space-y-4 mb-8">
            {points.map((p, i) => (
              <div key={p.title} className="flex gap-4 items-start card-hover p-5">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue text-white flex items-center justify-center font-bold text-lg">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-g800 mb-1">{p.icon} {p.title}</h3>
                  <p className="text-sm text-g600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">タイプ別診断</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">GPS端末タイプ</h3>
              <p className="text-sm text-g600 mb-3">ランドセルに入れるだけのシンプルタイプ</p>
              <ul className="space-y-1 text-sm text-g700">
                <li>・月額528円〜</li>
                <li>・バッテリー長持ち</li>
                <li>・学校持込OK</li>
                <li>・操作不要</li>
              </ul>
              <p className="text-xs text-blue font-bold mt-3">おすすめ: 小1〜小4</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange mb-3">腕時計型タイプ</h3>
              <p className="text-sm text-g600 mb-3">通話・カメラ付きの多機能タイプ</p>
              <ul className="space-y-1 text-sm text-g700">
                <li>・月額998円〜</li>
                <li>・通話・ビデオ通話可</li>
                <li>・カメラ搭載</li>
                <li>・デザイン性あり</li>
              </ul>
              <p className="text-xs text-orange font-bold mt-3">おすすめ: 小3〜小6</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-green-dark mb-3">キッズケータイ</h3>
              <p className="text-sm text-g600 mb-3">通話+GPS機能の携帯電話タイプ</p>
              <ul className="space-y-1 text-sm text-g700">
                <li>・月額550円〜+通話料</li>
                <li>・音声通話対応</li>
                <li>・防犯ブザー搭載</li>
                <li>・キャリア回線利用</li>
              </ul>
              <p className="text-xs text-green-dark font-bold mt-3">おすすめ: 小4〜中1</p>
            </div>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">ポイントがわかったら比較してみよう</h2>
            <p className="text-g600 mb-6 text-sm">13機種の料金・機能を比較して、お子さまに最適な1台を見つけましょう。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">総合ランキング</Link>
              <Link href="/compare/price/" className="btn-accent">月額料金比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
