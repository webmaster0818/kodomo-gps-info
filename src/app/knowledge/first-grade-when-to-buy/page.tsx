import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '新一年生のGPSはいつ買う？入学準備の購入時期と4月の品薄対策【2026年】',
  description:
    '小学校入学に向けて、子供用GPSをいつ購入すべきかを解説します。就学時健診（10〜11月）で検討を始め、年明けに比較し、新入生説明会後の2月までに購入することが理想です。4月の入学直前は品薄や設定が間に合わないリスクがあるため、早めの準備をおすすめします。購入時期のカレンダーも掲載しています。',
};

const calendar = [
  { period: '10〜11月（就学時健診）', action: 'GPSの必要性を意識し始める時期です。まずは情報収集を行い、通学路・学童など使用する場面を整理します。' },
  { period: '12〜1月', action: '機種を比較・検討します。料金（本体＋月額）・学校に持ち込めるか（静音か）・電池持ちを基準に、候補を2〜3機種に絞ります。' },
  { period: '2月（新入生説明会の前後）', action: '学校の持ち込みルールが分かるこの時期に、購入・申し込みを行うことが理想です。アプリの設定や通学路のエリア通知の設定も済ませておきます。' },
  { period: '3月', action: '通学路を実際に歩き、位置精度や通知を試験的に確認します。家族の見守りメンバーの招待も済ませます。' },
  { period: '4月（入学）', action: '入学初日から安心して使える状態にしておきます。※4月は新入学の需要により品薄や発送遅延が起きやすいため、この時期に初めて購入することは避けることをおすすめします。' },
];

const prepare = [
  { title: '本体を購入し初期設定する', desc: 'アプリのインストール、お子さまのプロフィール登録、初回の充電を済ませておきます。' },
  { title: '通学路のエリア通知を設定する', desc: '自宅・学校・学童・祖父母宅などに、到着・出発の通知を設定します。入学前に通学路を歩き、精度を確認します。' },
  { title: '見守りメンバーを招待する', desc: '両親・祖父母など複数人で見守れるよう、家族をアプリに招待しておきます。' },
  { title: '学校の持ち込みルールを確認する', desc: '持ち込みの可否・申請の要否を事前に確認します。音が鳴らない静音タイプであれば、許可を得やすくなります。' },
];

const faqData = [
  { q: '新一年生のGPSはいつ買うのがベスト？', a: '入学準備として、2月（新入生説明会の前後）までに購入することが理想です。就学時健診のある10〜11月に検討を始め、年明けに比較し、2月に購入・設定まで終えておくと、4月の入学初日から安心して使えます。' },
  { q: 'なぜ4月の入学直前は避けたほうがいい？', a: '4月は新入学の需要が集中し、人気機種が品薄になったり、発送が遅れたりすることがあります。また、購入後はアプリの設定・通学路のエリア通知の設定・家族の招待などの準備に数日かかるため、入学直前の購入では初日に間に合わないリスクがあります。2〜3月までに準備を整えておくことをおすすめします。' },
  { q: '何歳から持たせる家庭が多い？', a: '小学校入学（6〜7歳）のタイミングで持たせ始めるご家庭が多数です。一人で登下校する機会が増えるためで、入学準備品の一つとして検討されています。詳しくは「子供GPSは何歳から？」もご覧ください。' },
  { q: '入学前にやっておくことは？', a: '本体の購入と初期設定、通学路のエリア通知の設定、家族メンバーの招待、学校の持ち込みルールの確認の4つです。特に通学路については、実際に歩いて位置精度を確認しておくことをおすすめします。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: '新一年生のGPSはいつ買う？入学準備の購入時期と4月の品薄対策', datePublished: '2026-06-24', dateModified: '2026-06-24', author: { '@type': 'Person', name: '子供見守りGPS最新情報 編集部' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '新一年生のGPSはいつ買う' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">入学準備</span>
            <span className="tag-pill bg-blue text-white">購入時期</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">新一年生のGPSはいつ買う？入学準備の購入時期と4月の品薄対策</h1>
          <p className="text-g600 text-lg">就学時健診で検討を始め、年明けに比較し、2月までに購入・設定を終えることが理想です。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">2月（新入生説明会の前後）までの購入・設定をおすすめします</h2>
            <p className="text-g600">
              小学校入学に向けた子供用GPSは、<strong>就学時健診のある10〜11月に検討を始め、年明けに比較し、2月までに購入・設定まで終えておく</strong>ことが理想です。<strong>4月の入学直前は、品薄・発送遅延・設定が間に合わないといったリスク</strong>があるため、避けることをおすすめします。入学初日から安心して使えるよう、早めの準備をおすすめします。
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

          <h2 className="section-title">4月の購入を避けるべき理由</h2>
          <div className="card-hover p-6 mb-8">
            <ul className="space-y-2 text-sm text-g700">
              <li>・<strong>品薄・発送遅延</strong>：新入学の需要が4月に集中し、人気機種が一時的に在庫不足や発送遅れになることがあります。</li>
              <li>・<strong>設定が初日に間に合わない</strong>：アプリの設定・エリア通知の設定・家族の招待・通学路での試験的な確認に数日かかります。</li>
              <li>・<strong>慣れる時間が確保できない</strong>：お子さまが持ち歩きや充電に慣れるための時間は、入学前に確保しておくことが望まれます。</li>
            </ul>
          </div>

          <h2 className="section-title">入学前に行う4つの準備</h2>
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
