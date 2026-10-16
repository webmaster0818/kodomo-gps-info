import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS 選び方ガイド | 7つのポイントで最適な1台を見つける',
  description:
    '子供GPS端末の選び方を、7つのポイント（月額・バッテリー・トーク・精度・サイズ・防水・アプリ）で解説します。タイプ別の比較により、お子さまに合ったGPSを選ぶことができます。',
};

const faqData = [
  { q: '子供GPSを選ぶ際に最も重要なポイントは何ですか？', a: '最も重要なのは、月額料金とバッテリー持ちです。月額は528円〜1,100円と幅があり、バッテリーも毎日充電が必要な機種から2カ月持つ機種まで差が大きいため、まずこの2点で候補を絞り込むことをおすすめします。' },
  { q: 'トーク機能は必要ですか？', a: '低学年のお子さまには必須ではありませんが、あると便利です。「今から帰るよ」などの連絡ができるため、共働きのご家庭や習い事がある場合に特に役立ちます。月額200円程度の追加で利用できます。' },
  { q: '防水機能は必要ですか？', a: '雨の日の通学や外遊びを考慮すると、IPX5（生活防水）以上を備えた機種をおすすめします。ほとんどの機種が生活防水に対応していますが、水泳や入浴には対応していません。' },
  { q: 'GPS端末と腕時計型はどのように違いますか？', a: 'GPS端末は、ランドセルに入れるだけで使えるシンプルなタイプです。腕時計型は通話やカメラの機能がある一方で、本体が高価で充電の頻度が高くなります。低学年のお子さまにはGPS端末をおすすめします。' },
  { q: 'アプリの使いやすさは重要ですか？', a: '非常に重要です。毎日使うアプリのため、地図の見やすさ、通知の設定のしやすさ、動作の軽さは選ぶ際の大きなポイントです。口コミでアプリの評価もご確認ください。' },
  { q: '多くの機種を比較する時間がありません。効率的な選び方はありますか？', a: 'まず月額の予算（500円台か700円台以上か）とトーク機能の要否を決めると、候補を2〜3機種に絞れます。そのうえで、バッテリーとアプリの口コミを確認して最終的に決定する方法が効率的です。' },
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
  { icon: '💰', title: '月額料金', desc: '528円〜1,100円まで幅があります。基本的な位置確認のみであれば500円台で十分です。トーク機能付きは700円台からです。家計に合った料金プランをお選びください。' },
  { icon: '🔋', title: 'バッテリー持ち', desc: '最大2カ月持つ機種から毎日充電が必要な機種まで、差が大きい項目です。充電忘れが心配な場合は、1カ月以上持つ機種をおすすめします。更新間隔を長くすると、バッテリー持ちが良くなります。' },
  { icon: '💬', title: 'トーク機能', desc: 'テキストや音声メッセージでお子さまとやり取りできる機能です。低学年では不要な場合も多いものの、共働きのご家庭では帰宅の連絡を受けられることが大きな安心につながります。' },
  { icon: '📍', title: '測位精度', desc: 'GPS+GLONASS+みちびき+Wi-Fiの複合測位に対応した機種は、精度が高い傾向にあります。ビル街や屋内での精度もご確認ください。更新間隔も精度に影響します。' },
  { icon: '📏', title: 'サイズ・重量', desc: '40g〜110g、硬貨大〜カード大までさまざまです。ランドセルに入れる場合は50g以下が適しています。腕時計型は、手首への負担も考慮してください。' },
  { icon: '💧', title: '防水性能', desc: 'IPX5（生活防水）以上をおすすめします。雨の日の通学や水たまりでの遊びにも対応できます。完全防水（IPX8）の機種は少数です。' },
  { icon: '📱', title: 'アプリの使いやすさ', desc: '毎日開くアプリのため、画面の分かりやすさと操作性は重要です。地図の見やすさ、通知設定の柔軟さ、動作の軽さをご確認ください。アプリストアの評価も参考になります。' },
];

export default function HowToChoosePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPS 選び方ガイド", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '選び方ガイド' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">選び方ガイド</span>
            <span className="tag-pill bg-orange text-white">7ポイント</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS 選び方ガイド
          </h1>
          <p className="text-g600 text-lg">7つのポイントを押さえて、お子さまに合った1台を選ぶための解説です</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">選び方の7つのポイント</h2>
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

          <h2 className="section-title">タイプ別の特徴</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">GPS端末タイプ</h3>
              <p className="text-sm text-g600 mb-3">ランドセルに入れるだけで使えるシンプルなタイプ</p>
              <ul className="space-y-1 text-sm text-g700">
                <li>・月額528円〜</li>
                <li>・バッテリー長持ち</li>
                <li>・学校への持ち込みが可能な場合が多い</li>
                <li>・操作不要</li>
              </ul>
              <p className="text-xs text-blue font-bold mt-3">おすすめ: 小1〜小4</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange mb-3">腕時計型タイプ</h3>
              <p className="text-sm text-g600 mb-3">通話・カメラを備えた多機能タイプ</p>
              <ul className="space-y-1 text-sm text-g700">
                <li>・月額998円〜</li>
                <li>・通話・ビデオ通話が可能</li>
                <li>・カメラ搭載</li>
                <li>・デザイン性が高い</li>
              </ul>
              <p className="text-xs text-orange font-bold mt-3">おすすめ: 小3〜小6</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-green-dark mb-3">キッズケータイ</h3>
              <p className="text-sm text-g600 mb-3">通話とGPS機能を備えた携帯電話タイプ</p>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">各機種の比較</h2>
            <p className="text-g600 mb-6 text-sm">13機種の料金・機能を比較し、お子さまに合った1台をお選びください。</p>
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
