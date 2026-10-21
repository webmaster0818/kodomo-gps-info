import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'キッズケータイとGPS端末の比較 | docomo・au・SB 3キャリア比較',
  description:
    'キッズケータイ（docomo・au・ソフトバンク）の3キャリアを比較し、GPS端末との違いを解説します。月額料金・機能・制約を比較し、お子さまにキッズケータイとGPS端末のどちらが適しているかをご説明します。',
};

const faqData = [
  { q: 'キッズケータイとGPS端末の最も大きな違いは何ですか？', a: '最も大きな違いは、キッズケータイでは音声通話ができる点です。ただし、月額550円〜のキャリア契約が必要で、保護者も同じキャリアであることが条件になる場合があります。GPS端末は月額528円〜で、キャリアを問わず利用できます。' },
  { q: 'キッズケータイの月額料金はいくらですか？', a: 'docomo「キッズケータイプラン」が月額550円、au「ジュニアケータイプラン」が月額550円、ソフトバンク「キッズフォンプラン」が月額539円です。いずれも端末代金が別途必要です。' },
  { q: 'キッズケータイは学校に持って行けますか？', a: '学校によってルールが異なります。通話機能があるため、GPS端末より持ち込みを制限する学校が多い傾向にあります。事前に学校の規則をご確認ください。' },
  { q: 'GPS端末のほうが適しているのはどのような場合ですか？', a: '月額費用を抑えたい場合、学校への持ち込みを優先したい場合、通話は不要で位置確認のみを行いたい場合は、GPS端末をおすすめします。シンプルで小型のため、低学年のお子さまにも負担が少ない点が特長です。' },
  { q: 'キッズケータイのほうが適しているのはどのような場合ですか？', a: 'お子さまと直接通話したい場合、緊急時に電話で連絡を取りたい場合、高学年で行動範囲が広い場合は、キッズケータイが適しています。防犯ブザーを内蔵したモデルもあります。' },
  { q: 'キッズケータイからスマートフォンへの移行はいつ頃ですか？', a: '一般的には、小学校高学年から中学入学のタイミングが多い傾向です。キッズケータイは中学以降に機能不足を感じやすく、GPS端末は小学校卒業で役目を終えるケースが多く見られます。' },
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

export default function KidsPhonePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "キッズケータイとGPS端末の比較", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'キッズケータイ vs GPS' }]} />

      {/* Hero */}
      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">3キャリア比較</span>
            <span className="tag-pill bg-blue text-white">GPS端末との違い</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            キッズケータイとGPS端末の比較
          </h1>
          <p className="text-g600 text-lg">docomo・au・ソフトバンクの3キャリア比較と、GPS端末との違い・選び方</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">キッズケータイとGPS端末の選び方</h2>
          <p className="text-g600 mb-6">
            お子さまの見守り手段として、「キッズケータイ」と「GPS端末」のどちらを選ぶべきか迷われる保護者の方は多くいらっしゃいます。
            キッズケータイは通話機能が利点ですが、月額費用やキャリアの縛りがあります。
            GPS端末はシンプルで安価ですが、通話はできません。
            この記事では、docomo・au・ソフトバンクの3キャリアのキッズケータイを比較し、GPS端末との違いを解説します。
          </p>

          {/* 3キャリア比較表 */}
          <h2 className="section-title">3キャリアのキッズケータイ比較</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue text-white">
                  <th className="p-3 text-left">項目</th>
                  <th className="p-3 text-center">docomo<br />キッズケータイ</th>
                  <th className="p-3 text-center">au<br />mamorino</th>
                  <th className="p-3 text-center">SoftBank<br />キッズフォン</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['月額料金', '550円', '550円', '539円'],
                  ['端末価格', '約22,000円', '約22,000円', '約20,000円'],
                  ['通話', '家族間無料', '家族間無料', '家族間無料'],
                  ['SMS', '対応', '対応', '対応'],
                  ['GPS', '対応', '対応', '対応'],
                  ['防犯ブザー', '搭載', '搭載', '搭載'],
                  ['カメラ', 'なし', 'なし', '搭載（一部モデル）'],
                  ['防水', 'IPX5/IPX8', 'IPX5/IPX8', 'IPX5/IPX7'],
                  ['キャリア縛り', '保護者docomo必須', '保護者au必須', '保護者SB必須'],
                ].map(([item, d, a, s]) => (
                  <tr key={item} className="border-b border-g100">
                    <td className="p-3 font-semibold text-g700">{item}</td>
                    <td className="p-3 text-center text-g600">{d}</td>
                    <td className="p-3 text-center text-g600">{a}</td>
                    <td className="p-3 text-center text-g600">{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* GPS端末との比較 */}
          <h2 className="section-title">キッズケータイとGPS端末の比較</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue text-white">
                  <th className="p-3 text-left">比較項目</th>
                  <th className="p-3 text-center">キッズケータイ</th>
                  <th className="p-3 text-center">GPS端末</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['月額料金', '539円〜550円', '480円〜748円'],
                  ['端末価格', '約20,000〜22,000円', '約3,800〜8,580円'],
                  ['通話', '音声通話可能', '不可（一部トーク対応）'],
                  ['キャリア縛り', '保護者同キャリア必須', 'キャリア不問'],
                  ['学校持ち込み', '制限される場合あり', 'ほぼ可能'],
                  ['サイズ・重量', 'やや大きい（約100g）', 'コンパクト（約30〜55g）'],
                  ['バッテリー', '約1週間', '約1週間〜2カ月'],
                  ['防犯ブザー', '搭載', '一部機種のみ'],
                  ['対象年齢', '小学校中〜高学年向き', '小学校低学年〜向き'],
                ].map(([item, keitai, gps]) => (
                  <tr key={item} className="border-b border-g100">
                    <td className="p-3 font-semibold text-g700">{item}</td>
                    <td className="p-3 text-center text-g600">{keitai}</td>
                    <td className="p-3 text-center text-g600">{gps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* どちらが向いているか */}
          <h2 className="section-title">キッズケータイとGPS端末の向き・不向き</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-light rounded-xl p-6">
              <h3 className="font-bold text-blue mb-3">GPS端末がおすすめの方</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・月額費用を抑えたい方</li>
                <li>・学校への持ち込みを優先したい方</li>
                <li>・通話は不要で、位置確認のみを行いたい方</li>
                <li>・低学年のお子さま</li>
                <li>・キャリアの縛りを受けたくない方</li>
                <li>・シンプルに使いたい方</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange mb-3">キッズケータイがおすすめの方</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・お子さまと直接電話で話したい方</li>
                <li>・緊急時に通話で連絡を取りたい方</li>
                <li>・高学年で行動範囲が広いお子さま</li>
                <li>・防犯ブザーを重視したい方</li>
                <li>・ご家族が同じキャリアを利用している方</li>
                <li>・将来的にスマートフォンへの移行を予定している方</li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          {/* CTA */}
          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">GPS端末を詳しく比較したい方へ</h2>
            <p className="text-g600 mb-6 text-sm">13機種のGPS端末を料金・機能で比較しています。お子さまに合った端末選びにご活用ください。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">GPS端末13機種を比較する</Link>
              <Link href="/purpose/cheap/" className="btn-accent">安い順で比較する</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
