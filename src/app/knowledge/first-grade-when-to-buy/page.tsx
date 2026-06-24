import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '新一年生のGPSはいつ買う？入学準備の購入時期と4月の品薄対策【2026年】',
  description:
    '小学校入学に向けて子供用GPSをいつ買うべきかを解説。就学時健診（10〜11月）で検討を始め、年明けに比較、新入生説明会後の2月までに購入するのが理想です。4月の入学直前は品薄・設定が間に合わないリスクがあるため、早めの準備がおすすめ。購入時期カレンダー付き。',
};

const calendar = [
  { period: '10〜11月（就学時健診）', action: '「GPSが必要かも」と意識し始める時期。まずは情報収集と、通学路・学童など使うシーンの整理を。' },
  { period: '12〜1月', action: '機種を比較・検討。料金（本体＋月額）・学校に持ち込めるか（静音か）・電池持ちで候補を2〜3機種に絞る。' },
  { period: '2月（新入生説明会の前後）', action: '学校の持ち込みルールが分かるこのタイミングで購入＆申し込みが理想。アプリ設定や通学路のエリア通知設定を済ませておく。' },
  { period: '3月', action: '通学路を実際に歩いて位置精度・通知を試運転。家族の見守りメンバー招待も済ませる。' },
  { period: '4月（入学）', action: '初日から安心して使える状態に。※4月は新入学需要で品薄・発送遅延が起きやすいので、ここで初めて買うのは避けたい。' },
];

const prepare = [
  { title: '本体を購入し初期設定する', desc: 'アプリのインストール、子供のプロフィール登録、初回充電を済ませておきます。' },
  { title: '通学路のエリア通知を設定', desc: '自宅・学校・学童・祖父母宅などに到着/出発通知を設定。入学前に通学路を歩いて精度を確認。' },
  { title: '見守りメンバーを招待', desc: '両親・祖父母など複数人で見守れるよう、家族をアプリに招待しておきます。' },
  { title: '学校の持ち込みルールを確認', desc: '持ち込み可否・申請の要否を事前に確認。音が鳴らない静音タイプだと許可されやすいです。' },
];

const faqData = [
  { q: '新一年生のGPSはいつ買うのがベスト？', a: '入学準備として2月（新入生説明会の前後）までに購入するのが理想です。就学時健診のある10〜11月に検討を始め、年明けに比較し、2月に購入・設定まで終えておくと、4月の入学初日から安心して使えます。' },
  { q: 'なぜ4月の入学直前は避けたほうがいい？', a: '4月は新入学の需要が集中し、人気機種が品薄になったり発送が遅れたりすることがあります。また、購入後はアプリ設定・通学路のエリア通知設定・家族の招待など準備に数日かかるため、入学直前だと初日に間に合わないリスクがあります。2〜3月までに揃えておくのが安心です。' },
  { q: '何歳から持たせる家庭が多い？', a: '小学校入学（6〜7歳）のタイミングで持たせ始める家庭が多数です。登下校を一人でする機会が増えるためで、入学準備品の一つとして検討されます。詳しくは「子供GPSは何歳から？」もご覧ください。' },
  { q: '入学前にやっておくことは？', a: '本体購入と初期設定、通学路のエリア通知設定、家族メンバーの招待、学校の持ち込みルール確認の4つです。特に通学路は実際に歩いて位置精度を確認しておくと安心です。' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function FirstGradeWhenToBuyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: '新一年生のGPSはいつ買う？入学準備の購入時期と4月の品薄対策', datePublished: '2026-06-24', dateModified: '2026-06-24', author: { '@type': 'Person', name: 'GPS見守りナビ編集部' }, publisher: { '@type': 'Organization', name: 'GPS子供見守り最新情報' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://gps-kodomo.com/' }, { '@type': 'ListItem', position: 2, name: 'お役立ち', item: 'https://gps-kodomo.com/knowledge/' }, { '@type': 'ListItem', position: 3, name: '新一年生のGPSはいつ買う', item: 'https://gps-kodomo.com/knowledge/first-grade-when-to-buy/' }] }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '新一年生のGPSはいつ買う' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">入学準備</span>
            <span className="tag-pill bg-blue text-white">購入時期</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">新一年生のGPSはいつ買う？入学準備の購入時期と4月の品薄対策</h1>
          <p className="text-g600 text-lg">就学時健診で検討開始 → 年明けに比較 → 2月までに購入・設定が理想です</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：2月（新入生説明会の前後）までに購入・設定を</h2>
            <p className="text-g600">
              小学校入学に向けた子供用GPSは、<strong>就学時健診のある10〜11月に検討を始め、年明けに比較、2月までに購入・設定まで終えておく</strong>のが理想です。<strong>4月の入学直前は品薄・発送遅延・設定が間に合わないリスク</strong>があるため避けたいところ。入学初日から安心して使えるよう、早めに準備しましょう。
            </p>
          </div>

          <h2 className="section-title">GPS購入時期カレンダー（新一年生）</h2>
          <div className="space-y-3 mb-8">
            {calendar.map((c) => (
              <div key={c.period} className="card-hover p-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="font-bold text-blue sm:w-48 shrink-0">{c.period}</div>
                <div className="text-sm text-g600">{c.action}</div>
              </div>
            ))}
          </div>

          <h2 className="section-title">なぜ「4月に買う」は避けたいのか</h2>
          <div className="card-hover p-6 mb-8">
            <ul className="space-y-2 text-sm text-g700">
              <li>・<strong>品薄・発送遅延</strong>：新入学需要が4月に集中し、人気機種が一時的に在庫薄・発送遅れになることがある</li>
              <li>・<strong>設定が初日に間に合わない</strong>：アプリ設定・エリア通知設定・家族招待・通学路の試運転に数日かかる</li>
              <li>・<strong>慣らす時間がない</strong>：子供が持ち歩きや充電に慣れる時間を、入学前に確保しておきたい</li>
            </ul>
          </div>

          <h2 className="section-title">入学前にやっておく4つの準備</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {prepare.map((p) => (
              <div key={p.title} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{p.title}</h3>
                <p className="text-sm text-g600">{p.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">入学準備の関連ガイド</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/when-to-start/" className="btn-primary">子供GPSは何歳から？</Link>
              <Link href="/compare/school-silent/" className="btn-accent">学校向け静音GPS比較</Link>
              <Link href="/knowledge/school-rules/" className="btn-primary">学校の持ち込みルール</Link>
              <Link href="/" className="btn-accent">おすすめランキング</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
