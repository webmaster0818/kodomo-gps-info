import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'soranome（ソラノメ）徹底レビュー | GPS+Wi-Fi+基地局の3測位',
  description:
    'soranome（ソラノメ）を徹底レビュー。GPS+Wi-Fi+基地局の3測位、SOSボタン搭載、月額539円。最大4人見守り対応。位置精度重視の方におすすめ。',
};

const faqData = [
  { q: 'ソラノメの3測位とは何ですか？', a: 'GPS衛星・Wi-Fiアクセスポイント・携帯基地局の3つの方式を組み合わせて位置を特定する技術です。屋外ではGPS、屋内ではWi-Fi、地下では基地局測位と、環境に応じて最適な方式を自動で切り替えます。' },
  { q: 'SOSボタンはどう使いますか？', a: 'GPS端末のSOSボタンを3秒長押しすると、登録した保護者全員のスマホにプッシュ通知と位置情報が送信されます。子供が危険を感じたときにすぐに助けを求められます。' },
  { q: '月額料金はいくらですか？', a: '月額539円（税込）です。契約期間の縛りや解約金はありません。別途、本体代金が必要です。' },
  { q: 'バッテリーはどれくらい持つ？', a: '最大約1週間です。位置情報の更新頻度が高いため、他機種より短めですが、その分位置精度が高くなっています。' },
  { q: '何人で見守りできますか？', a: '最大4人まで見守りメンバーを登録できます。両親と祖父母など、家族で見守りを分担できます。' },
  { q: 'トーク・通話機能はありますか？', a: 'トーク・通話機能は搭載されていません。位置確認・SOS・エリア通知に特化したGPS端末です。' },
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

export default function SoranomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/#ranking' }, { name: 'soranome（ソラノメ）' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">3測位対応</span>
            <span className="tag-pill bg-orange text-white">SOSボタン搭載</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            soranome（ソラノメ）徹底レビュー
          </h1>
          <p className="text-g600 text-lg">エスキュービズム提供 | 月額539円 | 最大4人見守り</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">soranome（ソラノメ）とは</h2>
          <p className="text-g600 mb-6">
            soranome（ソラノメ）は、エスキュービズムが提供する子供用GPS端末です。
            GPS+Wi-Fi+携帯基地局の3測位システムにより、屋内外を問わず高精度な位置特定が可能。
            SOSボタンを搭載しており、お子さまが緊急時にワンプッシュで保護者に通知できます。
            月額539円の手頃な価格で、位置精度と安全性を重視する家庭におすすめです。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'エスキュービズム'],
                    ['月額料金', '539円（税込）'],
                    ['本体価格', '14,520円（税込）'],
                    ['測位方式', 'GPS+Wi-Fi+携帯基地局（3測位）'],
                    ['バッテリー', '最大約1週間'],
                    ['SOS機能', 'SOSボタン搭載'],
                    ['最大見守り人数', '4人'],
                    ['通信回線', 'SoftBank LTE'],
                    ['防水', '生活防水（IP55）'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-g100">
                      <td className="py-2 font-semibold text-g700 w-1/3">{k}</td>
                      <td className="py-2 text-g600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">3測位システムの仕組み</h3>
              <div className="space-y-3">
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue text-sm">GPS衛星測位</p>
                  <p className="text-sm text-g600">屋外で高精度。数メートルの精度。</p>
                </div>
                <div className="bg-green-light rounded-xl p-4">
                  <p className="font-bold text-green-dark text-sm">Wi-Fi測位</p>
                  <p className="text-sm text-g600">建物内でもWi-Fiで位置を特定。</p>
                </div>
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange-dark text-sm">携帯基地局測位</p>
                  <p className="text-sm text-g600">地下やGPS非受信エリアもカバー。</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '📡', title: '3測位システム', desc: 'GPS+Wi-Fi+基地局で屋内外問わず高精度な位置特定。' },
              { icon: '🆘', title: 'SOSボタン', desc: '緊急時にボタン長押しで保護者全員に通知。お子さまの安全を守る。' },
              { icon: '🔔', title: 'エリア出入り通知', desc: '設定エリアの出入りを自動通知。登下校の確認に便利。' },
              { icon: '📊', title: '移動履歴', desc: '過去の移動経路を確認。通学路の安全を把握。' },
              { icon: '🔋', title: 'バッテリー通知', desc: 'バッテリー残量が少なくなると保護者に通知。' },
              { icon: '👨‍👩‍👧', title: '最大4人見守り', desc: '家族4人までお子さまの位置を確認可能。' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
                <p className="text-2xl mb-2">{f.icon}</p>
                <h3 className="font-bold text-g800 text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-g600">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">メリット・デメリット</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・3測位で他機種より位置精度が高い</li>
                <li>・SOSボタンで緊急時も安心</li>
                <li>・月額539円で手頃な料金</li>
                <li>・エリア出入り通知が便利</li>
                <li>・IP55防水で雨の日も安心</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・バッテリーが最大1週間と短い</li>
                <li>・本体価格が14,520円と高め</li>
                <li>・トーク・通話機能なし</li>
                <li>・見守り人数が最大4人と少なめ</li>
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

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-green-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">ソラノメが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">3測位＋SOSボタンで、位置精度と安全性を両立したGPS端末です。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/mamosearch/" className="btn-accent">次: まもサーチ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
