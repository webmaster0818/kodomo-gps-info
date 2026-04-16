import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPSはいらない？必要ない？不要論への5つの反論',
  description:
    '「子供GPSはいらない」「必要ない」と思う5つの理由とその反論を紹介。実際に役立った場面、不要な人・必要な人の特徴をわかりやすく解説します。',
};

const faqData = [
  { q: '子供GPSは本当に必要ですか？', a: '必須ではありませんが、あると安心です。特に小学校入学後の一人通学が始まるタイミングでは、多くの保護者が「あってよかった」と感じています。' },
  { q: 'GPSなしで育てている家庭も多い？', a: 'はい、GPS端末の普及率はまだ100%ではありません。ただし、年々利用する家庭は増えており、都市部では小学生の約30〜40%がGPSを持っているとされています。' },
  { q: 'GPSの月額がもったいないと感じます。', a: '月額528円〜748円は、1日あたり約17円〜25円です。この費用でお子さまの位置がわかる安心感を得られると考えると、コストパフォーマンスは高いと言えます。' },
  { q: '防犯ブザーで十分では？', a: '防犯ブザーは「周囲に助けを求める」道具、GPSは「保護者が位置を把握する」道具です。役割が異なるので、両方持たせるのが最も安全です。' },
  { q: 'GPSがあると子供の自立を妨げない？', a: 'GPSは「監視」ではなく「見守り」のツールです。使い方次第で子供の自立を妨げることなく、むしろ安心して行動範囲を広げられるようになります。' },
  { q: '結局、いる・いらないの判断基準は？', a: '「一人で通学・外出する」「共働きで見守りが難しい」「地域に不審者情報が多い」のいずれかに該当するなら、GPS導入を検討する価値があります。' },
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
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'GPSは必要？' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">お悩み解決</span>
            <span className="tag-pill bg-orange text-white">いる？いらない？</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPSはいらない？必要ない？
          </h1>
          <p className="text-g600 text-lg">「不要」と思う理由とその反論を正直に解説します</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">「いらない」と思う5つの理由と反論</h2>
          <div className="space-y-4 mb-8">
            {[
              {
                reason: '月額がもったいない',
                counter: '月額528円（1日約17円）で位置確認ができます。万が一の時の安心感を考えると、十分なコストパフォーマンスです。外食1回分より安い金額で見守りが可能。',
              },
              {
                reason: '防犯ブザーで十分',
                counter: '防犯ブザーは「音を出す」だけ。保護者への通知機能はありません。GPSがあれば「どこにいるか」「いつもと違う場所にいないか」が遠隔でわかります。',
              },
              {
                reason: '子供を監視するようで嫌',
                counter: '「監視」ではなく「見守り」です。エリア通知を活用すれば、常に画面を見る必要はありません。通知が来ない＝安全、という使い方ができます。',
              },
              {
                reason: '自分の子供時代にはなかった',
                counter: '子供の犯罪被害件数は減少傾向ですが、不審者情報は依然として多く報告されています。環境が変わった今、昔と同じ対策では不十分な場合があります。',
              },
              {
                reason: '子供の自立を妨げそう',
                counter: 'GPSを持たせることで「一人で出かけても大丈夫」と保護者が許可を出しやすくなり、結果的に子供の行動範囲が広がるケースが多いです。',
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

          <h2 className="section-title">実際に役立った場面</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              '帰りが遅くて心配した時、アプリで「まだ学校にいる」と確認できた',
              '友達の家に遊びに行ったが連絡がなく、GPSで場所を確認して安心した',
              '習い事に着いたか確認できるので、毎回電話する必要がなくなった',
              '台風の日、通学路を外れていないか確認できて安心だった',
            ].map((text, i) => (
              <div key={i} className="card-hover p-4">
                <p className="text-sm text-g700">{text}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">不要な人・必要な人の特徴</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-light rounded-xl p-6">
              <h3 className="font-bold text-blue mb-3">GPSが不要な人</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・毎日送り迎えができる</li>
                <li>・子供が一人で外出しない</li>
                <li>・学校が自宅のすぐ近く</li>
                <li>・治安が良く不審者情報が少ない</li>
                <li>・常に大人の目が届く環境</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange mb-3">GPSが必要な人</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・子供が一人で通学する</li>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">まずは月額528円から試してみませんか？</h2>
            <p className="text-g600 mb-6 text-sm">解約金なし・契約縛りなしで始められるGPS端末なら、気軽にお試しできます。</p>
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
