import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'キッズケータイ vs GPS端末 徹底比較 | docomo・au・SB 3キャリア比較',
  description:
    'キッズケータイ（docomo・au・ソフトバンク）3キャリアを比較し、GPS端末との違いを解説。月額料金・機能・制約を徹底比較。お子さまに最適なのはケータイ？GPS？',
};

const faqData = [
  { q: 'キッズケータイとGPS端末の一番の違いは？', a: 'キッズケータイは音声通話ができる点が最大の違いです。ただし月額550円〜のキャリア契約が必要で、保護者も同じキャリアであることが条件になる場合があります。GPS端末は月額528円〜でキャリア不問です。' },
  { q: 'キッズケータイの月額料金はいくら？', a: 'docomo「キッズケータイプラン」月額550円、au「ジュニアケータイプラン」月額550円、ソフトバンク「キッズフォンプラン」月額539円です。いずれも端末代金は別途必要です。' },
  { q: 'キッズケータイは学校に持って行ける？', a: '学校によってルールが異なります。通話機能があるため、GPS端末より持ち込みが制限される学校が多い傾向です。学校の規則を事前に確認してください。' },
  { q: 'GPS端末の方が良いケースは？', a: '月額コストを抑えたい、学校への持ち込みを優先したい、通話は不要で位置確認だけしたい場合はGPS端末がおすすめです。シンプルで小型なので低学年のお子さまにも負担が少ないです。' },
  { q: 'キッズケータイの方が良いケースは？', a: 'お子さまと直接通話したい、緊急時に電話で連絡を取りたい、高学年で行動範囲が広い場合はキッズケータイが適しています。防犯ブザー内蔵のモデルもあります。' },
  { q: 'キッズケータイからスマホへの移行はいつ頃？', a: '一般的に小学校高学年〜中学入学のタイミングが多いです。キッズケータイは中学以降は機能不足を感じやすく、GPS端末は小学校卒業で役目を終えるケースが多いです。' },
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
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/#ranking' }, { name: 'キッズケータイ vs GPS' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">3キャリア比較</span>
            <span className="tag-pill bg-blue text-white">GPS端末との違い</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            キッズケータイ vs GPS端末 徹底比較
          </h1>
          <p className="text-g600 text-lg">docomo・au・ソフトバンクの3キャリア比較 | GPS端末との違い・選び方</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">キッズケータイとGPS端末、どっちを選ぶ？</h2>
          <p className="text-g600 mb-6">
            お子さまの見守り手段として「キッズケータイ」と「GPS端末」のどちらを選ぶべきか悩む保護者は多いです。
            キッズケータイは通話機能が魅力ですが、月額コストやキャリア縛りがあります。
            GPS端末はシンプルで安価ですが通話はできません。
            この記事ではdocomo・au・ソフトバンクの3キャリアのキッズケータイを比較し、GPS端末との違いを徹底解説します。
          </p>

          {/* 3キャリア比較表 */}
          <h2 className="section-title">3キャリア キッズケータイ比較</h2>
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
          <h2 className="section-title">キッズケータイ vs GPS端末 比較</h2>
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
                  ['学校持ち込み', '制限される場合あり', 'ほぼOK'],
                  ['サイズ・重量', 'やや大きい（約100g）', 'コンパクト（約30〜55g）'],
                  ['バッテリー', '約1週間', '約1週間〜2ヶ月'],
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
          <h2 className="section-title">あなたに合うのはどっち？</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-light rounded-xl p-6">
              <h3 className="font-bold text-blue mb-3">GPS端末がおすすめの方</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・月額コストを抑えたい</li>
                <li>・学校への持ち込みを優先したい</li>
                <li>・通話は不要で位置確認だけしたい</li>
                <li>・低学年のお子さま</li>
                <li>・キャリアの縛りを受けたくない</li>
                <li>・とにかくシンプルに使いたい</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange mb-3">キッズケータイがおすすめの方</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・お子さまと直接電話で話したい</li>
                <li>・緊急時に通話連絡を取りたい</li>
                <li>・高学年で行動範囲が広い</li>
                <li>・防犯ブザーを重視したい</li>
                <li>・家族が同じキャリアを使っている</li>
                <li>・将来的にスマホへ移行予定</li>
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
          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">GPS端末を詳しく比較したい方へ</h2>
            <p className="text-g600 mb-6 text-sm">13機種のGPS端末を料金・機能で徹底比較。お子さまに最適な一台が見つかります。</p>
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
