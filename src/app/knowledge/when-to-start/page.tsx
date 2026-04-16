import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'GPS いつから？何歳から始める？年齢別ガイド',
  description:
    '子供にGPSをいつから持たせるべき？幼稚園年長・小1・小3・小5の年齢別ガイドと、先輩ママの声、始めるきっかけTOP5を紹介。最適なタイミングがわかります。',
};

const faqData = [
  { q: '子供GPSは何歳から使えますか？', a: '多くのGPS端末は年齢制限がなく、幼稚園年長（5〜6歳）から利用する家庭もあります。最も多いのは小学校入学（6〜7歳）のタイミングです。' },
  { q: '幼稚園児にGPSは早すぎますか？', a: '通園バスの乗り降りや園外保育など、年長になると親の目が届かない場面が増えます。早すぎることはなく、心配なら始めて損はありません。' },
  { q: '小3で始めるのは遅い？', a: '遅くありません。小3は行動範囲が広がり友達だけで遊ぶ機会も増えるため、むしろGPSを始める良いタイミングです。' },
  { q: '中学生でもGPSを使いますか？', a: '中学生になるとスマートフォンに移行する家庭が多いです。スマホの「ファミリーリンク」等の見守り機能を活用するケースが一般的です。' },
  { q: 'GPSを始めるきっかけで多いのは？', a: '最も多いのは「小学校入学」で約60%。次いで「一人で習い事に行くようになった」「不審者情報を聞いた」「友達が持っていた」の順です。' },
  { q: '子供がGPSを嫌がったらどうする？', a: '「お守りだよ」「パパとママが安心するんだよ」と説明しましょう。監視ではなく見守りであることを伝え、お気に入りのカバーを選ばせるのも効果的です。' },
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

export default function WhenToStartPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'いつから？' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">年齢別ガイド</span>
            <span className="tag-pill bg-orange text-white">いつから？</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            GPS いつから？何歳から始めるべき？
          </h1>
          <p className="text-g600 text-lg">年齢別のガイドと先輩ママの声をお届けします</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">年齢別ガイド</h2>
          <div className="space-y-4 mb-8">
            {[
              { age: '幼稚園年長（5〜6歳）', bg: 'bg-blue-light', color: 'text-blue', points: ['通園バスの乗降確認に', '園外保育・遠足時の安心材料', 'まだ早いかも？→心配なら始めてOK', 'GPS端末タイプがおすすめ（操作不要）'] },
              { age: '小学1年生（6〜7歳）', bg: 'bg-orange-light', color: 'text-orange', points: ['最も多いスタートタイミング（約60%）', '初めての一人通学が最大のきっかけ', '入学準備と一緒に購入がスムーズ', 'ランドセルに入れるだけで完了'] },
              { age: '小学3年生（8〜9歳）', bg: 'bg-green-light', color: 'text-green-dark', points: ['行動範囲が一気に広がる時期', '友達だけで公園や買い物に行く', '習い事の送迎が難しくなる', 'トーク機能付きが便利になる'] },
              { age: '小学5年生（10〜11歳）', bg: 'bg-blue-light', color: 'text-blue', points: ['塾通いが本格化する時期', '電車・バスで一人移動が増える', 'キッズケータイへの移行も検討', '自立心を育てつつ見守る段階'] },
            ].map((item) => (
              <div key={item.age} className={`${item.bg} rounded-xl p-6`}>
                <h3 className={`font-bold ${item.color} mb-3 text-lg`}>{item.age}</h3>
                <ul className="space-y-2 text-sm text-g700">
                  {item.points.map((p) => (
                    <li key={p}>・{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="section-title">始めるきっかけTOP5</h2>
          <div className="space-y-3 mb-8">
            {[
              { rank: 1, text: '小学校入学（一人通学の開始）', pct: '約60%' },
              { rank: 2, text: '一人で習い事に通うようになった', pct: '約20%' },
              { rank: 3, text: '地域で不審者情報を聞いた', pct: '約10%' },
              { rank: 4, text: '友達がGPSを持っていた', pct: '約5%' },
              { rank: 5, text: 'ニュース・SNSで事件を知った', pct: '約5%' },
            ].map((item) => (
              <div key={item.rank} className="flex items-center gap-4 card-hover p-4">
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${item.rank <= 3 ? 'bg-orange text-white' : 'bg-g100 text-g600'}`}>
                  {item.rank}
                </span>
                <div className="flex-1">
                  <p className="font-bold text-g800 text-sm">{item.text}</p>
                </div>
                <p className="font-extrabold text-blue">{item.pct}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">先輩ママの声</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { name: 'Aさん（小1男子のママ）', text: '入学と同時にみてねを購入。帰りが遅いとき「まだ学校にいる」とわかるだけで全然違います。もっと早く買えばよかった！' },
              { name: 'Bさん（小3女子のママ）', text: '友達の家に遊びに行く機会が増えて購入。「どこにいるか」がわかるだけで、心配で電話する回数が激減しました。' },
              { name: 'Cさん（年長男子のママ）', text: '幼稚園バスが来るまでの待ち時間が心配で導入。GPSで確認できるので、仕事中も安心です。' },
              { name: 'Dさん（小5女子のママ）', text: '塾通いが始まり購入。電車通学なので、乗り換えの確認に重宝しています。中学まではGPSで見守る予定です。' },
            ].map((voice) => (
              <div key={voice.name} className="card-hover p-5">
                <p className="font-bold text-g800 text-sm mb-2">{voice.name}</p>
                <p className="text-sm text-g600">{voice.text}</p>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">GPSを始めるなら今がチャンス</h2>
            <p className="text-g600 mb-6 text-sm">お子さまの年齢と生活に合った最適なGPS端末を見つけましょう。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/how-to-choose/" className="btn-primary">選び方ガイド</Link>
              <Link href="/" className="btn-accent">おすすめランキング</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
