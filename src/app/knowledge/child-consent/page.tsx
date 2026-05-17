import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供がGPSを嫌がる時の伝え方｜親子で納得できる使い方',
  description:
    '子供がGPSを嫌がる理由と、年齢別の効果的な伝え方を解説。監視ではなく「見守り」として納得してもらう方法、親子でルールを決めるコツ、成功事例を紹介します。',
  keywords: ['子供', 'GPS', '嫌がる', '伝え方', '見守り', 'プライバシー', '親子'],
  openGraph: {
    title: '子供がGPSを嫌がる時の伝え方｜親子で納得できる使い方',
    description: '子供がGPSを嫌がる理由と年齢別の伝え方。親子で納得できる見守りの方法を紹介。',
  },
};

const faqData = [
  { q: '子供がGPSを「監視されている」と感じるのはなぜ？', a: '特に小学校高学年以降は自立心が芽生え、行動を常に把握されることに抵抗を感じます。友達との比較で「自分だけ持たされている」と思うことも原因です。GPSの目的を「あなたを信頼しているからこそ、何かあった時に助けるため」と伝えることが大切です。' },
  { q: '友達がGPSを持っていない場合、どう説明すれば？', a: '「家庭ごとに見守りの方法は違う。うちはGPSで見守る方法を選んでいる」と説明しましょう。また「お友達の家にはお友達の家のルールがあるように、うちにはうちのルールがある」という伝え方も有効です。' },
  { q: '何歳くらいから子供の同意を得るべきですか？', a: '小学3〜4年生頃から、GPSを持つ理由を説明し同意を得ることが望ましいです。低学年のうちは「お守り」として自然に持たせ、成長に合わせて目的を説明していきましょう。' },
  { q: '一度嫌がられた後、再度持たせるにはどうすれば？', a: 'まずは子供の気持ちを受け止め、しばらく期間を空けましょう。その後、ニュースや身近な事件をきっかけに「もしもの時のため」として提案し直すと受け入れられやすくなります。ルールを一緒に決めることも重要です。' },
  { q: 'GPSの位置情報を確認する頻度はどのくらいが適切？', a: 'お子さまとルールを決めましょう。例えば「帰宅予定時刻を過ぎた時だけ確認する」「心配な時はLINEで一報入れてから確認する」など。無断で頻繁に確認すると信頼関係を損なう可能性があります。' },
  { q: 'GPS卒業のタイミングはいつ頃ですか？', a: '中学生〜高校生で段階的に見守りの頻度を減らし、最終的にはお子さま自身の判断に任せる家庭が多いです。一律の正解はなく、子供の自立度と親子の信頼関係に応じて決めましょう。' },
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

const reasons = [
  { icon: '👁️', title: '監視されている感覚', desc: '「いつも見られている」という感覚がストレスに。特に高学年は自分のプライベート空間を大切にし始めます。' },
  { icon: '🙈', title: 'プライバシーへの意識', desc: '友達との行動を親に知られたくないという気持ち。秘密基地や寄り道も子供にとっては大切な体験です。' },
  { icon: '👫', title: '友達との比較', desc: '「自分だけ持たされている」という疎外感。信頼されていないと感じることがあります。' },
  { icon: '😤', title: '自立心の芽生え', desc: '「一人でちゃんとできる」という自信がある子ほど、GPSに抵抗を感じる傾向があります。' },
];

const ageApproach = [
  { age: '低学年（6〜8歳）', approach: '「お守り」「魔法のアイテム」として自然に。迷子になった時にお母さんが迎えに行ける魔法だよ、と伝える。' },
  { age: '中学年（8〜10歳）', approach: '「何かあった時にすぐ助けに行くため」と正直に。地震や事件のニュースを例に出し、もしもの備えとして説明。' },
  { age: '高学年（10〜12歳）', approach: '「あなたを信頼しているからこそ」と対等に。ルールを一緒に決め、プライバシーへの配慮を見せる。' },
  { age: '中学生（12歳〜）', approach: '「お互いの安心のため」として提案。確認頻度のルール、卒業の条件を一緒に設定。自主性を尊重。' },
];

const rules = [
  { title: '確認するタイミングを決める', desc: '「帰宅予定時刻を30分過ぎても連絡がない時だけ」など、具体的な条件を設定。' },
  { title: '確認した時は伝える', desc: '「心配だったから確認したよ」と正直に伝える。隠れて確認すると信頼関係を損ないます。' },
  { title: '定期的にルールを見直す', desc: '半年〜1年ごとにルールを見直し、成長に合わせて緩和していく。' },
  { title: '卒業条件を決める', desc: '「中学生になったら」「○年生になったら頻度を減らす」など、将来の見通しを共有。' },
];

export default function ChildConsentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'GPSの伝え方' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">親子関係</span>
            <span className="tag-pill bg-orange text-white">GPS見守り</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供がGPSを嫌がる時の伝え方｜親子で納得できる使い方
          </h1>
          <p className="text-g600 text-lg">監視ではなく「見守り」として親子で納得するためのガイド</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">子供がGPSを嫌がる理由</h2>
          <p className="text-g600 mb-6">
            GPS端末に抵抗を示すお子さまは少なくありません。
            しかし、嫌がる理由を理解し、適切な伝え方をすることで、多くの家庭で親子ともに納得してGPSを活用しています。
            大切なのは「監視」ではなく「見守り」であることを、子供の年齢に合わせて伝えることです。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {reasons.map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-2xl">{item.icon}</p>
                <div>
                  <h3 className="font-bold text-g800">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">年齢別の伝え方</h2>
          <div className="bg-blue-light rounded-xl p-6 mb-8">
            <p className="text-sm text-g700 mb-4">お子さまの年齢に合わせた効果的な伝え方です。</p>
            <div className="space-y-3">
              {ageApproach.map((g) => (
                <div key={g.age} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 text-sm">
                  <span className="font-bold text-g800 sm:w-44 flex-shrink-0">{g.age}</span>
                  <span className="text-g600">{g.approach}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="section-title">「見守り」の説明方法</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: '目的を正直に伝える', desc: '「あなたが嫌いだから」ではなく「あなたが大切だから、何かあった時にすぐ助けに行きたい」と伝えます。' },
              { step: 2, title: '子供の気持ちを受け止める', desc: '「嫌だよね」「監視みたいに感じるよね」と気持ちに共感してから説明に入ります。' },
              { step: 3, title: '子供にもメリットを示す', desc: '「迷子になっても見つけてもらえる」「帰りが遅くても怒られない（位置がわかるから）」と子供目線のメリットを伝えます。' },
              { step: 4, title: '対等なルールを提案する', desc: '「いつでも見るわけじゃない」と約束し、確認タイミングを一緒に決めます。' },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start card-hover p-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center font-bold text-sm">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-bold text-g800 text-sm">{s.title}</h3>
                  <p className="text-sm text-g600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">親子で決めるルール例</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {rules.map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
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

          <p className="text-xs text-g400 mt-4 text-right">最終更新: 2026年5月</p>

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">親子で納得できるGPS見守りを始めよう</h2>
            <p className="text-g600 mb-6 text-sm">お子さまの気持ちを尊重しながら、安全を守る方法を見つけましょう。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/privacy/" className="btn-primary">プライバシーと見守り</Link>
              <Link href="/knowledge/overprotective/" className="btn-accent">過保護にならない使い方</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
