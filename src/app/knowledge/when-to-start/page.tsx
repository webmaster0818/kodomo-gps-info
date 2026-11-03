import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPSは何歳まで？何歳から？｜スマホ利用は12歳で63.8%・13歳で78.3%【国の調査】',
  description:
    '子供GPSを何歳まで持たせるかは、スマートフォンへの切り替え時期が目安です。こども家庭庁の調査（令和6年度）では、スマートフォンでインターネットを利用する割合は11歳45.4%・12歳63.8%・13歳78.3%です。持たせ始める年齢（5〜7歳が84.5%）と年齢別ガイドも掲載しています。',
};

const faqData = [
  { q: '子供GPSは何歳まで使いますか？', a: '決まった上限はありません。こども家庭庁の令和6年度調査では、スマートフォンでインターネットを利用する割合が11歳45.4%から12歳63.8%、13歳78.3%へ上がります。小学校卒業から中学1年生ごろにスマートフォンへ切り替え、GPS端末を卒業するご家庭が多いと考えられます（GPS端末の利用終了年齢そのものの公的統計は確認できていません）。' },
  { q: '子供GPSは何歳から使えますか？', a: '多くのGPS端末には年齢制限がなく、幼稚園年長（5〜6歳）から利用するご家庭もあります。最も多いのは、小学校入学（6〜7歳）のタイミングです。' },
  { q: '幼稚園児にGPSは早すぎますか？', a: '通園バスの乗り降りや園外保育など、年長になると保護者の目が届かない場面が増えます。早すぎるということはなく、不安がある場合は利用を始めることをおすすめします。' },
  { q: '小3で始めるのは遅いですか？', a: '遅くはありません。小3は行動範囲が広がり、友達だけで遊ぶ機会も増えるため、GPSを始めるのに適した時期です。' },
  { q: '中学生でもGPSを使いますか？', a: '中学生になると、スマートフォンに移行するご家庭が多くなります。スマートフォンの「ファミリーリンク」などの見守り機能を活用するケースが一般的です。' },
  { q: 'GPSを始めるきっかけとして多いものは何ですか？', a: '当サイトでは、きっかけの割合を示す公的な調査は確認できていません。小学校入学による一人通学の開始や、一人で習い事に通い始める時期が、持たせ始める節目になります。' },
  { q: '子供がGPSを持つことを嫌がる場合はどうすればよいですか？', a: '「お守りとして持つもの」「家族が安心するためのもの」と説明することをおすすめします。監視ではなく見守りであることを伝え、お子さま自身にお気に入りのカバーを選んでもらうことも効果的です。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "GPS いつから？何歳から始める？年齢別ガイド", "datePublished": "2026-03-15", "dateModified": "2026-11-03", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'いつから？' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">年齢別ガイド</span>
            <span className="tag-pill bg-orange text-white">いつから？</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPSは何歳まで？何歳から始めるべき？
          </h1>
          <p className="text-g600 text-lg">年齢別のガイドと、何歳まで持たせるかの目安を解説します。</p>
          <div className="mt-5 bg-white rounded-2xl p-5 text-sm text-g700 leading-relaxed">
            <p className="mb-2"><strong>何歳から：</strong>持たせ始めた年齢は5〜7歳が84.5%（小学生の親200人の調査）で、小学校入学のタイミングが目安です。</p>
            <p><strong>何歳まで：</strong>スマートフォンへ切り替える12〜13歳ごろが目安です。こども家庭庁の調査では、スマートフォンでインターネットを利用する割合が<strong>11歳45.4%→12歳63.8%→13歳78.3%</strong>と、小学校卒業前後で大きく上がります（<a href="#until" className="text-blue underline">年齢別の表</a>）。</p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">調査データに見る「何歳から」の目安</h2>
          <div className="card-hover p-5 mb-8 bg-blue-light rounded-2xl">
            <p className="text-sm text-g700 leading-relaxed mb-3">
              小学生の親200人を対象にしたアンケート調査では、子供用GPSを<strong>「必要」と答えた人は約80.5%</strong>でした。実際に持たせ始めた年齢は<strong>6歳(年長〜小1)が最多</strong>で、<strong>5〜7歳で持たせ始めた家庭が全体の84.5%</strong>を占めました。
            </p>
            <p className="text-sm text-g700 leading-relaxed">
              したがって、「何歳から」の現実的な目安は<strong>小学校入学のタイミング(年長の冬〜小1の春)</strong>です。一人で登下校・学童・習い事に通い始め、行動範囲が大きく広がるためです。未就学児でも、公園や外出先での迷子対策として持たせるご家庭もあります。年齢そのものよりも、「一人で行動する場面が増えたか」で判断することをおすすめします。
            </p>
            <p className="text-xs text-g400 mt-3">出典: ちいく村/C.Dreams 実施アンケート(小学生の親200人・2023年6月、マイナビ子育て掲載)。2026年6月14日確認</p>
          </div>

          <h2 className="section-title">年齢別ガイド</h2>
          <div className="space-y-4 mb-8">
            {[
              { age: '幼稚園年長（5〜6歳）', bg: 'bg-blue-light', color: 'text-blue', points: ['通園バスの乗降確認に活用', '園外保育・遠足時の安心材料', '早すぎることはなく、不安があれば開始を検討', 'GPS端末タイプがおすすめ（操作不要）'] },
              { age: '小学1年生（6〜7歳）', bg: 'bg-orange-light', color: 'text-orange', points: ['初めての一人通学が最大のきっかけ', '入学準備とあわせた購入が効率的', 'ランドセルに入れるだけで利用可能'] },
              { age: '小学3年生（8〜9歳）', bg: 'bg-green-light', color: 'text-green-dark', points: ['行動範囲が大きく広がる時期', '友達だけで公園や買い物に行く機会が増加', '習い事の送迎が難しくなる時期', 'トーク機能付きの機種が便利'] },
              { age: '小学5年生（10〜11歳）', bg: 'bg-blue-light', color: 'text-blue', points: ['塾通いが本格化する時期', '電車・バスでの一人での移動が増加', 'キッズケータイへの移行も検討', '自立心を育てながら見守る段階'] },
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

          <h2 id="until" className="section-title">何歳まで持たせるか：卒業のタイミング</h2>
          <div className="card-hover p-5 mb-6 bg-blue-light rounded-2xl">
            <p className="text-sm text-g700 leading-relaxed mb-3">
              GPS端末を何歳でやめたかという公的な統計は、当サイトでは確認できていません。そこで当サイトでは、GPS端末の主な切り替え先であるスマートフォンの年齢別の利用率を、国の調査から抜き出して整理しました。
            </p>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border-collapse bg-white min-w-[420px]">
                <thead>
                  <tr className="bg-blue text-white">
                    <th className="py-2 px-3 text-left font-semibold">年齢</th>
                    <th className="py-2 px-3 text-left font-semibold">スマートフォンでネットを利用</th>
                    <th className="py-2 px-3 text-left font-semibold">携帯電話（キッズ携帯等）で利用</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['10歳', '40.5%', '14.8%'],
                    ['11歳', '45.4%', '12.2%'],
                    ['12歳', '63.8%', '7.8%'],
                    ['13歳', '78.3%', '5.4%'],
                    ['14歳', '82.9%', '4.7%'],
                    ['15歳', '90.3%', '3.2%'],
                  ].map(([age, sp, kp]) => (
                    <tr key={age} className="border-b border-g100">
                      <td className="py-2 px-3 font-semibold text-g700">{age}</td>
                      <td className="py-2 px-3 text-g600">{sp}</td>
                      <td className="py-2 px-3 text-g600">{kp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-g400 mb-3">出典: こども家庭庁「令和6年度 青少年のインターネット利用環境実態調査」報告書 図表2-1-1-2-3（回答した青少年3,129人ベース・2025年3月公表）。2026年11月3日確認。数値は「その機器でインターネットを利用している割合」で、所有率とは異なります。</p>
            <p className="text-sm text-g700 leading-relaxed mb-3">
              11歳から12歳で18.4ポイント、12歳から13歳でさらに14.5ポイント上がっており、<strong>小学校卒業から中学1年生ごろ</strong>がスマートフォンへの切り替えの山といえます。一方、キッズ携帯などの携帯電話は10歳の14.8%から年齢とともに下がります。なお、同じ調査では小学生のスマートフォン利用者のうち「自分専用のものを使っている」は72.0%で、残りは家族との共用です。共用のうちは、GPS端末を併用する選択肢も残ります。
            </p>
            <p className="text-sm text-g700 leading-relaxed mb-3">
              実際には<strong>「通話・メッセージなどの連絡手段が必要になったか」</strong>によって切り替えを判断するケースが多いため、学年ごとの目安を以下に整理します。
            </p>
            <ul className="text-sm text-g700 leading-7 space-y-1.5">
              <li>・<strong>小学生（低〜中学年）</strong>：保護者主導の見守りが中心となります。位置が分かれば十分な時期で、<strong>GPS単機能が最も役立ちます</strong>。</li>
              <li>・<strong>高学年（小5〜6）</strong>：塾・習い事・友人宅など行動範囲が拡大します。連絡手段の必要性が生じ始め、GPSを継続するかキッズ携帯に切り替えるかを検討するご家庭が増えます。</li>
              <li>・<strong>中学進学</strong>：部活動・友人との連絡やスマートフォン所持率の上昇により、<strong>GPSからキッズ携帯／スマートフォンへ移行</strong>するご家庭が多くなります。</li>
            </ul>
            <p className="text-sm text-g700 leading-relaxed mt-3">
              「スマートフォンはまだ早いが、位置は把握したい」という時期はGPSを継続し、「本人同士で連絡を取り合う必要が出てきた」段階でキッズ携帯・スマートフォンへ移行すると考えると、切り替え時期を判断しやすくなります。
            </p>
          </div>

          <h2 className="section-title">GPS単機能とキッズ携帯の選び方</h2>
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
                <tr className="border-b border-g100"><td className="py-2 px-3 font-semibold text-g700">本体サイズ</td><td className="py-2 px-3 text-g600">小型・ランドセルに入れやすい</td><td className="py-2 px-3 text-g600">スマートフォン型でやや大きい</td></tr>
                <tr className="border-b border-g100 bg-g50"><td className="py-2 px-3 font-semibold text-g700">向く時期</td><td className="py-2 px-3 text-g600">未就学〜小学生（まだ通話は不要）</td><td className="py-2 px-3 text-g600">高学年〜中学（連絡手段が必要な時期）</td></tr>
                <tr><td className="py-2 px-3 font-semibold text-g700">学校への持ち込み</td><td className="py-2 px-3 text-g600">通話機能がなく、許可されやすい傾向</td><td className="py-2 px-3 text-g600">通話機能があり、申請が必要な場合あり</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">※料金・プランは各社の公式サイトにて、学校への持ち込みルールは各校にてご確認ください（学校ルールは<a href="/knowledge/school-rules/" className="text-blue underline">GPSの学校持ち込み申請ガイド</a>で解説）。</p>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">年齢と生活に合ったGPS端末の選び方</h2>
            <p className="text-g600 mb-6 text-sm">お子さまの年齢と生活に合ったGPS端末を選ぶための情報を掲載しています。</p>
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
