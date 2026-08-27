import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPSは何歳から？何歳まで？【データで解説】84.5%が5〜7歳・卒業の目安も',
  description:
    '子供にGPSをいつから持たせるべき？幼稚園年長・小1・小3・小5の年齢別ガイド、始めるきっかけTOP5、何歳まで持たせるかの目安、GPS単機能とキッズ携帯の選び方まで解説。最適なタイミングがわかります。',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "GPS いつから？何歳から始める？年齢別ガイド", "datePublished": "2026-03-15", "dateModified": "2026-07-25", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "お役立ち", "item": "https://gps-kodomo.com/knowledge/"}, {"@type": "ListItem", "position": 3, "name": "いつから？", "item": "https://gps-kodomo.com/knowledge/when-to-start/"}]}) }} />
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
          <p className="text-g600 text-lg">年齢別のガイドと、何歳まで持たせるかの目安をお届けします</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">データで見る「何歳から」の答え</h2>
          <div className="card-hover p-5 mb-8 bg-blue-light rounded-2xl">
            <p className="text-sm text-g700 leading-relaxed mb-3">
              小学生の親200人を対象にしたアンケート調査では、子供用GPSを<strong>「必要」と答えた人は約80.5%</strong>。実際に持たせ始めた年齢は<strong>6歳(年長〜小1)が最多</strong>で、<strong>5〜7歳で持たせ始めた家庭が全体の84.5%</strong>を占めました。
            </p>
            <p className="text-sm text-g700 leading-relaxed">
              つまり「何歳から」の現実的な答えは<strong>小学校入学のタイミング(年長の冬〜小1の春)</strong>です。一人で登下校・学童・習い事に通い始め、行動範囲が一気に広がるためです。未就学児でも、公園やお出かけ先での迷子対策として持たせる家庭もあります。年齢そのものより「一人で行動する場面が増えたか」で判断するのがおすすめです。
            </p>
            <p className="text-xs text-g400 mt-3">出典: ちいく村/C.Dreams 実施アンケート(小学生の親200人・2023年6月、マイナビ子育て掲載)。2026年6月14日確認</p>
          </div>

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

          <h2 className="section-title">何歳まで持たせる？卒業のタイミング</h2>
          <div className="card-hover p-5 mb-6 bg-blue-light rounded-2xl">
            <p className="text-sm text-g700 leading-relaxed mb-3">
              「何歳まで」に決まった正解はなく、公的な統計もありません。実際の判断は<strong>「通話・メッセージなどの連絡手段が必要になったか」</strong>で切り替わることが多いため、学年ごとの目安を整理します。
            </p>
            <ul className="text-sm text-g700 leading-7 space-y-1.5">
              <li>・<strong>小学生（低〜中学年）</strong>：親主導の見守りが中心。位置だけ分かれば十分な時期で、<strong>GPS単機能が最も活きる</strong>。</li>
              <li>・<strong>高学年（小5〜6）</strong>：塾・習い事・友人宅など行動範囲が拡大。連絡手段のニーズが出始め、GPS継続かキッズ携帯かを検討する家庭が増える。</li>
              <li>・<strong>中学進学</strong>：部活・友人との連絡やスマホ所持率の上昇により、<strong>GPS→キッズ携帯／スマホへ移行</strong>する家庭が多い。</li>
            </ul>
            <p className="text-sm text-g700 leading-relaxed mt-3">
              「まだスマホは早いが位置は知りたい」という時期はGPSを継続、「本人同士で連絡を取り合う必要が出てきた」ならキッズ携帯・スマホへ、と考えると切り替え時期を判断しやすくなります。
            </p>
          </div>

          <h2 className="section-title">GPS単機能とキッズ携帯、どちらを選ぶ？</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse min-w-[520px]">
              <thead>
                <tr className="bg-blue text-white">
                  <th className="py-3 px-3 text-left font-semibold">比較項目</th>
                  <th className="py-3 px-3 text-left font-semibold">子供見守りGPS</th>
                  <th className="py-3 px-3 text-left font-semibold">キッズ携帯</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-g100"><td className="py-2 px-3 font-semibold text-g700">主な機能</td><td className="py-2 px-3 text-g600">位置情報・エリア通知（一部SOSボタン）</td><td className="py-2 px-3 text-g600">通話・メール＋位置情報</td></tr>
                <tr className="border-b border-g100 bg-g50"><td className="py-2 px-3 font-semibold text-g700">月額の目安</td><td className="py-2 px-3 text-g600">数百円〜（機種による）</td><td className="py-2 px-3 text-g600">数百円〜（キャリアのプランによる）</td></tr>
                <tr className="border-b border-g100"><td className="py-2 px-3 font-semibold text-g700">本体サイズ</td><td className="py-2 px-3 text-g600">小型・ランドセルに入れやすい</td><td className="py-2 px-3 text-g600">スマホ型でやや大きい</td></tr>
                <tr className="border-b border-g100 bg-g50"><td className="py-2 px-3 font-semibold text-g700">向く時期</td><td className="py-2 px-3 text-g600">未就学〜小学生（まだ通話は不要）</td><td className="py-2 px-3 text-g600">高学年〜中学（連絡手段が必要に）</td></tr>
                <tr><td className="py-2 px-3 font-semibold text-g700">学校への持ち込み</td><td className="py-2 px-3 text-g600">通話機能がなく許可されやすい傾向</td><td className="py-2 px-3 text-g600">通話機能があり申請が必要な場合も</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">※料金・プランは各社公式で、学校の持ち込みルールは各校でご確認ください（学校ルールは<a href="/knowledge/school-rules/" className="text-blue underline">GPSの学校持ち込み申請ガイド</a>で解説）。</p>

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
              <Link href="/knowledge/first-grade-when-to-buy/" className="btn-primary">新一年生はいつ買う？入学準備</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">選び方ガイド</Link>
              <Link href="/" className="btn-accent">おすすめランキング</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
