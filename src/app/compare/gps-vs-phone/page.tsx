import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'GPSとキッズケータイはどちらがよい？12項目で比較',
  description:
    '子供GPS端末とキッズケータイを、月額・通話・バッテリー・学校への持ち込みなど12項目で比較します。低学年にはGPS端末、高学年にはキッズケータイなど、年齢別のおすすめも解説します。',
};

const faqData = [
  { q: 'GPSとキッズケータイでは、月額はどちらが安いですか？', a: 'GPS端末は月額528円〜、キッズケータイは月額550円〜が目安です。ただし、キッズケータイは通話料が別途かかる場合があり、総額ではGPS端末のほうが安くなるケースが多く見られます。' },
  { q: '小学校にはどちらが持ち込みやすいですか？', a: 'GPS端末のほうが持ち込みやすい傾向にあります。多くの学校では携帯電話の持ち込みを制限していますが、通話機能のないGPS端末は許可されるケースがほとんどです。' },
  { q: '低学年にはどちらがおすすめですか？', a: '低学年（小1〜小3）にはGPS端末をおすすめします。操作が簡単で紛失のリスクが低く、学校への持ち込みも容易です。' },
  { q: '高学年にはどちらがおすすめですか？', a: '高学年（小4〜小6）では、キッズケータイも選択肢になります。行動範囲が広がり、緊急時に通話が必要になる場面が増えるためです。' },
  { q: 'GPSとキッズケータイを両方持たせるのはよい方法ですか？', a: '可能ですが、費用が倍になります。GPS端末のトーク機能付きモデルであればメッセージ機能で連絡も取れるため、まずはGPS端末1台で試すことをおすすめします。' },
  { q: '中学生になったらどうすればよいですか？', a: '中学生になると、スマートフォンに移行するご家庭がほとんどです。GPS端末を解約し、スマートフォンの見守り機能（ファミリーリンク等）に切り替える方法が一般的です。' },
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

const compareItems = [
  { item: '月額料金', gps: '528円〜', phone: '550円〜' },
  { item: '通話機能', gps: 'なし', phone: 'あり' },
  { item: 'メッセージ', gps: 'トーク対応機種あり', phone: 'SMS・専用アプリ' },
  { item: 'バッテリー', gps: '最大2カ月', phone: '約1週間' },
  { item: 'サイズ・重量', gps: '約40〜55g', phone: '約100〜110g' },
  { item: '学校持込', gps: 'ほぼ許可', phone: '制限あり' },
  { item: '操作性', gps: 'ボタン1〜3個', phone: 'タッチ・ボタン操作' },
  { item: 'GPS精度', gps: '高精度（専用設計）', phone: '標準的' },
  { item: '緊急時', gps: 'SOSボタン（一部機種）', phone: '緊急通話・防犯ブザー' },
  { item: 'コスト（2年間）', gps: '約18,000円〜', phone: '約25,000円〜' },
  { item: '紛失リスク', gps: '低い（ランドセル固定）', phone: 'やや高い' },
  { item: '子供の自立', gps: '見守りが中心', phone: '連絡手段として自立を促す' },
];

export default function GpsVsPhonePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "GPSとキッズケータイはどちらがよい？12項目で比較", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '比較', href: '/compare/' }, { name: 'GPS vs キッズケータイ' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">比較</span>
            <span className="tag-pill bg-orange text-white">12項目</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            GPSとキッズケータイはどちらがよい？
          </h1>
          <p className="text-g600 text-lg">見守りGPS端末とキッズケータイを12項目で比較します</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">12項目の比較表</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-4 text-left font-bold text-g800">比較項目</th>
                  <th className="py-3 px-4 text-left font-bold text-blue">GPS端末</th>
                  <th className="py-3 px-4 text-left font-bold text-orange">キッズケータイ</th>
                </tr>
              </thead>
              <tbody>
                {compareItems.map((row) => (
                  <tr key={row.item} className="border-b border-g100">
                    <td className="py-3 px-4 font-semibold text-g700">{row.item}</td>
                    <td className="py-3 px-4 text-g600">{row.gps}</td>
                    <td className="py-3 px-4 text-g600">{row.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">年齢別のおすすめ</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-6">
              <h3 className="font-bold text-blue mb-3">低学年（小1〜小3）→ GPS端末</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・操作がシンプルで、子供が迷わずに使える</li>
                <li>・ランドセルに入れるだけで使える</li>
                <li>・学校への持ち込みが容易</li>
                <li>・月額費用が安い</li>
                <li>・紛失・破損のリスクが低い</li>
              </ul>
            </div>
            <div className="card-hover p-6">
              <h3 className="font-bold text-orange mb-3">高学年（小4〜小6）→ キッズケータイ</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・行動範囲が広がり、通話が必要になる</li>
                <li>・塾や習い事の連絡手段として便利</li>
                <li>・緊急時に直接通話できる</li>
                <li>・自立心を育てる機会になる</li>
                <li>・中学進学後のスマートフォンへの移行に向けた準備になる</li>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">GPS端末の比較ランキング</h2>
            <p className="text-g600 mb-6 text-sm">GPS端末をお選びの際は、13機種の比較ランキングをご覧ください。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">GPS端末ランキング</Link>
              <Link href="/compare/price/" className="btn-accent">月額料金比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
