import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '中学生にGPSは必要？塾・部活・スマホとの使い分けガイド',
  description:
    '中学生にもGPSは必要？スマホとの使い分け、塾や部活での活用、思春期のプライバシーへの配慮まで、中学生世代のGPS選びを解説します。',
};

const faqData = [
  { q: '中学生になったらGPSは不要ですか？', a: '不要とは限りません。スマホを持たせない方針の家庭や、スマホ+GPSの併用で補完する家庭もあります。行動範囲が広がる中学生こそ見守りのニーズは高まります。' },
  { q: 'スマホの位置情報と専用GPS、どちらがいい？', a: 'スマホはバッテリー持ちが短く、子どもが電源を切る可能性もあります。専用GPSは長寿命バッテリーで24時間安定して稼働します。スマホ＋専用GPSの併用も有効です。' },
  { q: '塾や部活で持たせるメリットは？', a: '帰宅時間が遅くなる塾帰りや、部活で想定外の場所にいる場合も位置確認できます。到着/出発通知で「今家を出た」「塾に着いた」が自動で分かります。' },
  { q: '子どもが嫌がる場合はどうすれば？', a: '一方的に持たせるのではなく、なぜ必要かを話し合うことが大切です。「何かあった時に探せる」という家族の安心のためと説明し、過度な監視にはしないことを伝えましょう。' },
  { q: '中学生でもトーク機能は必要？', a: 'スマホを持っているならトーク機能は不要かもしれません。位置確認に特化したシンプルな機種（みてね・あんしんウォッチャー等）で十分なケースも多いです。' },
  { q: '高校生まで使い続けるのは一般的？', a: '高校生になるとスマホ所持率がさらに高まるため、GPS専用端末は卒業する家庭が多いです。スマホの位置情報共有機能（iOS「探す」、Googleマップなど）への移行が一般的です。' },
];

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function JuniorHighPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '中学生向け' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">中学生にGPSは必要？</h1>
          <p className="text-g600 text-lg">塾・部活・スマホとの使い分け、思春期の子を見守る考え方</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">中学生こそGPSが役立つシーン</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">📚</p>
              <h3 className="font-bold text-g800 mb-1">塾帰り・夜遅い時間</h3>
              <p className="text-sm text-g600">帰宅時間が遅い塾帰りに、今どこにいるか確認できる安心感。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">🏃</p>
              <h3 className="font-bold text-g800 mb-1">部活の遠征・大会</h3>
              <p className="text-sm text-g600">練習試合や遠征など、普段と違う場所への移動も追跡可能。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">🚆</p>
              <h3 className="font-bold text-g800 mb-1">電車通学</h3>
              <p className="text-sm text-g600">乗り換えや遅延時の状況も把握できる。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">📱</p>
              <h3 className="font-bold text-g800 mb-1">スマホ未所持家庭</h3>
              <p className="text-sm text-g600">まだスマホを持たせない方針でも、GPSなら見守れる。</p>
            </div>
          </div>

          <h2 className="section-title">スマホ所持家庭でのGPSの立ち位置</h2>
          <div className="card-hover p-5 mb-8">
            <p className="text-g600 mb-3">スマホを持っているなら位置情報共有アプリで足りるケースもありますが、以下の場合はGPS専用端末の併用が有効です：</p>
            <ul className="space-y-2 text-g600">
              <li>✓ 子どもがスマホの電源を切る/位置情報をオフにする可能性がある</li>
              <li>✓ バッテリー切れで位置情報が取れなくなるのを避けたい</li>
              <li>✓ スマホ紛失時にも位置を把握したい</li>
            </ul>
          </div>

          <h2 className="section-title">思春期の子と向き合うコツ</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: '「監視」ではなく「見守り」と伝える', desc: '24時間位置情報を追うのではなく、「何かあった時の備え」であることを伝えましょう。' },
              { title: '使い方のルールを一緒に決める', desc: '「○時を過ぎても帰宅していない時だけ確認する」など、親子で合意したルールを作ると信頼関係を損ねません。' },
              { title: '本人の了承を得て使う', desc: '知らない間に位置を追われるのは本人にとって不快です。同意を得てから使うことがトラブル回避の基本です。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (<details key={i} className="faq-item"><summary>{faq.q}</summary><div className="faq-answer">{faq.a}</div></details>))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
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
