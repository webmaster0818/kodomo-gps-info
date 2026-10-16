import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'GPS 過保護にならない使い方 | 監視と見守りの違い',
  description:
    'GPS端末を過保護・過度な監視にならないように使う方法を解説します。監視と見守りの違い、お子さまとの約束の作り方、年齢に応じた使い方の変化、専門家の意見をご紹介します。',
};

const faqData = [
  { q: 'GPSを持たせるのは過保護ですか？', a: '過保護かどうかは「使い方」によって決まります。5分おきに位置を確認するのは過保護ですが、エリア通知を使い、異常時のみ確認するのは適切な見守りです。' },
  { q: 'お子さまにGPSを嫌がられた場合は、どうすればよいですか？', a: '「あなたを信用していないのではなく、安全のため」と伝えることをおすすめします。カバーをお子さまに選ばせたり、「お守り」として捉えてもらったりする工夫も効果的です。' },
  { q: '何歳までGPSを持たせるべきですか？', a: '一般的には小学校卒業（12歳）までです。中学進学後は、スマートフォンの見守り機能に移行するご家庭が多くなっています。お子さまの成熟度に合わせてご判断ください。' },
  { q: 'パートナーとGPSの使い方で意見が分かれています。', a: '「見守りのルール」を夫婦で事前に決めておくことが大切です。例えば「通学時のみ確認する」「エリア通知だけ使う」など、具体的な使い方について合意しておくことをおすすめします。' },
  { q: 'お子さまの友達がGPSを持っていない場合、からかわれませんか？', a: '最近はGPS端末の普及が進んでおり、持っている子供も増えています。ランドセルに入れるタイプであれば外見ではわからないため、からかわれる心配は少ないと考えられます。' },
  { q: '専門家はGPSについてどのような見解を示していますか？', a: '子育ての専門家の多くは「適切に使えば有効な見守りツール」という立場です。ただし「GPSに頼りすぎず、安全教育と組み合わせることが大切」と指摘しています。' },
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

export default function OverprotectivePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "GPS 過保護にならない使い方", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '過保護にならない使い方' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">お悩み解決</span>
            <span className="tag-pill bg-orange text-white">使い方ガイド</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            GPS 過保護にならない使い方
          </h1>
          <p className="text-g600 text-lg">監視と見守りの違いを理解し、GPSを適切に活用するためのガイドです</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">監視と見守りの違い</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">監視（避けるべき使い方）</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・5分おきの位置確認</li>
                <li>・移動のたびに電話で問い詰めること</li>
                <li>・子供に内緒でGPSを持たせること</li>
                <li>・友達の家にいることを逐一指摘すること</li>
                <li>・GPSを外すことを一切認めないこと</li>
              </ul>
            </div>
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">見守り（適切な使い方）</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・エリア通知による異常時のみの確認</li>
                <li>・帰宅が遅いときだけの位置確認</li>
                <li>・子供へのGPSの目的の説明</li>
                <li>・通知がない場合は確認を控えること</li>
                <li>・成長に合わせた使い方の見直し</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">お子さまとの約束の作り方</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">GPSを持たせる前に、お子さまとルールを決めておくことをおすすめします。</p>
            <div className="space-y-3">
              {[
                { rule: 'GPSはお守りだよ', desc: '「お父さん・お母さんが安心するためのお守り」と伝え、監視ではないことを理解してもらいます。' },
                { rule: 'いつも見ているわけではないよ', desc: '「心配なときだけ確認する」と約束し、常に監視しているわけではないことを伝えます。' },
                { rule: '充電は自分でしようね', desc: '充電の習慣をつけさせることで、GPSへの責任感と自立心を育てます。' },
                { rule: '大きくなったら外してもいいよ', desc: 'ずっと持たせるものではないことを伝え、将来への安心感を与えます。' },
                { rule: '嫌なときは言ってね', desc: 'お子さまの意見も尊重する姿勢を示し、信頼関係を維持します。' },
              ].map((item) => (
                <div key={item.rule} className="flex items-start gap-3 bg-blue-light rounded-lg p-3">
                  <span className="font-bold text-blue text-sm whitespace-nowrap">{item.rule}</span>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="section-title">年齢に応じた使い方の変化</h2>
          <div className="space-y-3 mb-8">
            {[
              { age: '小1〜小2', usage: '登下校時にエリア通知を使い、到着・出発を確認します。異常時のみ、アプリで位置を確認します。', frequency: '通知確認のみ' },
              { age: '小3〜小4', usage: '通学と習い事の行き帰りを確認します。友達の家に遊びに行くときも、位置を把握します。', frequency: '通知確認＋帰宅遅延時' },
              { age: '小5〜小6', usage: '緊急時のみ確認します。自分で判断する機会を増やし、自立を促します。連絡にはトーク機能を使います。', frequency: '異常時のみ' },
              { age: '中学以降', usage: 'GPS端末の利用を終え、スマートフォンの見守りアプリに移行するか、見守り自体を終了します。', frequency: '必要に応じて' },
            ].map((item) => (
              <div key={item.age} className="card-hover p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="tag-pill bg-blue text-white text-xs">{item.age}</span>
                  <span className="text-xs text-g500">確認頻度: {item.frequency}</span>
                </div>
                <p className="text-sm text-g600">{item.usage}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">専門家の意見</h2>
          <div className="card-hover p-6 mb-8">
            <div className="space-y-4">
              <div className="bg-blue-light rounded-xl p-4">
                <p className="text-sm text-g700 italic">
                  「GPS端末は適切に使えば、子供の安全と自立の両立を助けるツールになります。
                  大切なのは"見守り"と"監視"の線引きを保護者自身が意識すること。
                  通知機能を上手に活用し、常にアプリを開く習慣は避けましょう。」
                </p>
                <p className="text-xs text-g500 mt-2">- 子育て支援の専門家より</p>
              </div>
              <div className="bg-orange-light rounded-xl p-4">
                <p className="text-sm text-g700 italic">
                  「GPSを持たせることで保護者が安心し、子供に"一人で行ってきていいよ"と
                  言えるようになることが多い。結果として子供の行動範囲が広がり、
                  自立心の発達につながるケースを多く見ています。」
                </p>
                <p className="text-xs text-g500 mt-2">- 教育カウンセラーの意見</p>
              </div>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">適切な見守りの始め方</h2>
            <p className="text-g600 mb-6 text-sm">適切な使い方により、お子さまの安全と自立の両立を目指すことをおすすめします。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/unnecessary/" className="btn-primary">GPSは必要？</Link>
              <Link href="/" className="btn-accent">おすすめランキング</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
