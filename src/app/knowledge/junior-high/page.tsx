import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '中学生にGPSは必要？塾・部活・スマホとの使い分けガイド',
  description:
    '中学生にもGPSが必要かどうかを、スマートフォンとの使い分け、塾や部活での活用、思春期のプライバシーへの配慮といった観点から解説します。中学生世代のGPS端末選びの参考としてご活用ください。',
};

const faqData = [
  { q: '中学生になったらGPSは不要ですか？', a: '不要とは限りません。スマートフォンを持たせない方針のご家庭や、スマートフォンとGPS端末を併用して補完するご家庭もあります。行動範囲が広がる中学生の時期こそ、見守りの必要性は高まります。' },
  { q: 'スマートフォンの位置情報と専用GPSでは、どちらがよいですか？', a: 'スマートフォンはバッテリー持ちが短く、子供が電源を切る可能性もあります。専用GPSは長寿命バッテリーにより、24時間安定して稼働します。スマートフォンと専用GPSの併用も有効です。' },
  { q: '塾や部活で持たせる利点は何ですか？', a: '帰宅時間が遅くなる塾帰りや、部活で想定外の場所にいる場合でも、位置を確認できます。到着・出発の通知により、「今、家を出た」「塾に着いた」といった状況を自動で把握できます。' },
  { q: '子供が嫌がる場合はどうすればよいですか？', a: '一方的に持たせるのではなく、なぜ必要なのかを話し合うことが大切です。「何かあったときに探せる」という家族の安心のためであると説明し、過度な監視はしないことを伝えることをおすすめします。' },
  { q: '中学生でもトーク機能は必要ですか？', a: 'スマートフォンを持っている場合、トーク機能は不要な場合があります。位置確認に特化したシンプルな機種（みてね・あんしんウォッチャー等）で十分な場合も多くあります。' },
  { q: '高校生まで使い続けるのは一般的ですか？', a: '高校生になるとスマートフォンの所持率がさらに高まるため、GPS専用端末の利用を終えるご家庭が多くあります。スマートフォンの位置情報共有機能（iOS「探す」、Googleマップなど）への移行が一般的です。' },
];

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function JuniorHighPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "中学生にGPSは必要？塾・部活・スマホとの使い分けガイド", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '中学生向け' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">中学生にGPSは必要？</h1>
          <p className="text-g600 text-lg">塾・部活での活用、スマートフォンとの使い分け、思春期の子供を見守る際の考え方を解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">中学生にGPSが役立つ場面</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <p className="text-2xl mb-2"></p>
              <h3 className="font-bold text-g800 mb-1">塾帰り・夜遅い時間</h3>
              <p className="text-sm text-g600">帰宅時間が遅い塾帰りに、現在地を確認できるため安心です。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2"></p>
              <h3 className="font-bold text-g800 mb-1">部活の遠征・大会</h3>
              <p className="text-sm text-g600">練習試合や遠征など、普段と異なる場所への移動も確認できます。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2"></p>
              <h3 className="font-bold text-g800 mb-1">電車通学</h3>
              <p className="text-sm text-g600">乗り換えや遅延時の状況も把握できます。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2"></p>
              <h3 className="font-bold text-g800 mb-1">スマートフォンを持たせていないご家庭</h3>
              <p className="text-sm text-g600">スマートフォンを持たせない方針の場合でも、GPS端末で見守ることができます。</p>
            </div>
          </div>

          <h2 className="section-title">スマートフォンを持つ場合のGPS端末の位置づけ</h2>
          <div className="card-hover p-5 mb-8">
            <p className="text-g600 mb-3">スマートフォンを持っている場合は、位置情報共有アプリで足りることもあります。ただし、以下の場合はGPS専用端末の併用が有効です。</p>
            <ul className="space-y-2 text-g600">
              <li>✓ 子供がスマートフォンの電源を切る、または位置情報をオフにする可能性がある場合</li>
              <li>✓ バッテリー切れで位置情報を取得できなくなる事態を避けたい場合</li>
              <li>✓ スマートフォンの紛失時にも位置を把握したい場合</li>
            </ul>
          </div>

          <h2 className="section-title">思春期の子供と向き合う際の確認事項</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: '「監視」ではなく「見守り」であることの説明', desc: '24時間位置情報を追うのではなく、「何かあったときの備え」であることを伝えてください。' },
              { title: '使い方のルールの共同決定', desc: '「○時を過ぎても帰宅していないときのみ確認する」など、親子で合意したルールを作ることで、信頼関係を損なわずに済みます。' },
              { title: '本人の了承を得たうえでの利用', desc: '知らない間に位置を確認されることは、本人にとって不快です。同意を得てから使うことが、トラブルを避けるための基本です。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (<details key={i} className="faq-item"><summary>{faq.q}</summary><div className="faq-answer">{faq.a}</div></details>))}

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">中学生に適した機種を探す</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">全機種ランキング</Link>
              <Link href="/knowledge/overprotective/" className="btn-accent">過保護にならない使い方</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
