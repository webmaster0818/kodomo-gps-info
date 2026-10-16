import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPSはいらない？必要ない？不要論への5つの反論',
  description:
    '「子供GPSはいらない」「必要ない」と考える5つの理由と、それぞれへの反論を紹介します。役立つ場面の例や、GPSが不要な方・必要な方の特徴を分かりやすく解説します。',
};

const faqData = [
  { q: '子供GPSは本当に必要ですか？', a: '必須ではありませんが、持たせておくと安心につながります。特に、小学校入学後に一人での通学が始まる時期には、多くの保護者が「持たせてよかった」と感じています。' },
  { q: 'GPSなしで育てている家庭も多い？', a: 'はい。GPS端末の普及率は、まだ100%ではありません。ただし、利用するご家庭は年々増えており、都市部では小学生の約30〜40%がGPSを持っているとされています。' },
  { q: 'GPSの月額がもったいないと感じます。', a: '月額528円〜748円は、1日あたり約17円〜25円です。この費用でお子さまの位置が分かる安心感を得られることを考えると、費用対効果は高いといえます。' },
  { q: '防犯ブザーで十分では？', a: '防犯ブザーは「周囲に助けを求める」ための道具であり、GPSは「保護者が位置を把握する」ための道具です。役割が異なるため、両方を持たせることが最も安全です。' },
  { q: 'GPSがあると子供の自立を妨げない？', a: 'GPSは「監視」ではなく「見守り」のための道具です。使い方次第で、お子さまの自立を妨げることなく、むしろ安心して行動範囲を広げられるようになります。' },
  { q: '結局、いる・いらないの判断基準は？', a: '「一人で通学・外出する」「共働きで見守りが難しい」「地域に不審者情報が多い」のいずれかに該当する場合は、GPSの導入を検討する価値があります。' },
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

export default function UnnecessaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPSはいらない？必要ない？不要論への5つの反論", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'GPSは必要？' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">お悩み解決</span>
            <span className="tag-pill bg-orange text-white">いる？いらない？</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPSはいらない？必要ない？
          </h1>
          <p className="text-g600 text-lg">「不要」と考える理由と、それぞれへの反論を解説します</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">「いらない」と考える5つの理由と反論</h2>
          <div className="space-y-4 mb-8">
            {[
              {
                reason: '月額がもったいない',
                counter: '月額528円（1日約17円）で位置を確認できます。万一の際の安心感を考えると、十分な費用対効果があります。外食1回分より安い金額で見守りが可能です。',
              },
              {
                reason: '防犯ブザーで十分',
                counter: '防犯ブザーは「音を出す」だけの道具であり、保護者への通知機能はありません。GPSがあれば、「どこにいるか」「いつもと違う場所にいないか」を離れた場所から把握できます。',
              },
              {
                reason: '子供を監視するようで嫌',
                counter: 'GPSは「監視」ではなく「見守り」のための道具です。エリア通知を活用すれば、常に画面を見ている必要はありません。「通知が届かない＝安全」という使い方ができます。',
              },
              {
                reason: '自分の子供時代にはなかった',
                counter: '子供の犯罪被害件数は減少傾向にありますが、不審者情報は依然として多く報告されています。環境が変化している現在では、昔と同じ対策では不十分な場合があります。',
              },
              {
                reason: '子供の自立を妨げそう',
                counter: 'GPSを持たせることで、保護者が「一人で出かけても大丈夫」と許可を出しやすくなり、結果的にお子さまの行動範囲が広がる場合が多くあります。',
              },
            ].map((item, i) => (
              <div key={i} className="card-hover p-5">
                <div className="bg-orange-light rounded-lg p-3 mb-3">
                  <p className="font-bold text-orange-dark text-sm">理由{i + 1}: 「{item.reason}」</p>
                </div>
                <div className="bg-green-light rounded-lg p-3">
                  <p className="text-sm text-g700"><span className="font-bold text-green-dark">反論:</span> {item.counter}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">GPSが役立つ場面の例</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              '帰りが遅く心配なときに、アプリで「まだ学校にいる」ことを確認できます。',
              '友達の家に遊びに行ったまま連絡がない場合も、GPSで場所を確認できます。',
              '習い事の教室に着いたかどうかを確認できるため、毎回電話をする必要がなくなります。',
              '台風の日などに、お子さまが通学路を外れていないかを確認できます。',
            ].map((text, i) => (
              <div key={i} className="card-hover p-4">
                <p className="text-sm text-g700">{text}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">GPSが不要な方・必要な方の特徴</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-light rounded-xl p-6">
              <h3 className="font-bold text-blue mb-3">GPSが不要な方</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・毎日送り迎えができる</li>
                <li>・お子さまが一人で外出しない</li>
                <li>・学校が自宅のすぐ近くにある</li>
                <li>・治安が良く、不審者情報が少ない</li>
                <li>・常に大人の目が届く環境にある</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange mb-3">GPSが必要な方</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・お子さまが一人で通学する</li>
                <li>・共働きで見守りが難しい</li>
                <li>・通学路が長い・交通量が多い</li>
                <li>・習い事に一人で通う</li>
                <li>・地域に不審者情報が多い</li>
              </ul>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">月額528円から始められる見守り</h2>
            <p className="text-g600 mb-6 text-sm">解約金や契約期間の縛りがないGPS端末であれば、気軽にお試しいただけます。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">おすすめランキング</Link>
              <Link href="/compare/price/" className="btn-accent">月額料金比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
