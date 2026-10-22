import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'soranome（ソラノメ）の評判・口コミは？【2026年】3測位の精度・料金を解説',
  description:
    'soranome（ソラノメ）をレビューします。GPS+Wi-Fi+基地局の3測位とSOSボタンを搭載し、月額539円で最大4人の見守りに対応しています。現行端末は2026年4月1日付の公式告知で販売を終了しています（2026年10月17日 公式確認）。',
};

const faqData = [
  { q: 'ソラノメの3測位とは何ですか？', a: 'GPS衛星・Wi-Fiアクセスポイント・携帯基地局の3つの方式を組み合わせて位置を特定する技術です。屋外ではGPS、屋内ではWi-Fi、地下では基地局測位というように、環境に応じて最適な方式を自動で切り替えます。' },
  { q: 'SOSボタンはどう使いますか？', a: 'GPS端末のSOSボタンを3秒長押しすると、登録した保護者全員のスマートフォンにプッシュ通知と位置情報が送信されます。お子さまが危険を感じたときに、すぐに助けを求めることができます。' },
  { q: '月額料金はいくらですか？', a: '月額539円（税込）です。契約期間の縛りや解約金はありません。別途、本体代金が必要です。' },
  { q: 'バッテリーはどれくらい持ちますか？', a: '最大約1週間です。位置情報の更新頻度が高いため他機種より短めですが、その分、位置精度が高くなっています。' },
  { q: '何人で見守りできますか？', a: '最大4人まで見守りメンバーを登録できます。両親と祖父母など、家族で見守りを分担できます。' },
  { q: 'トーク・通話機能はありますか？', a: 'トーク・通話機能は搭載されていません。位置確認・SOS・エリア通知に特化したGPS端末です。' },
  { q: 'ソラノメの評判・口コミはどうですか？', a: '公式スペックと仕様から客観的に評価すると、GPS+Wi-Fi+基地局の3測位による位置精度の高さとSOSボタンが強みとして挙げられます。一方、バッテリーが最大約1週間と短い点、本体価格が14,520円とやや高い点は、使い勝手の面で指摘されやすい特性です。当サイトでは体験談の創作は行わず、公式仕様にもとづき評価しています。実際の口コミは販売ページやレビューサイトの出典付き情報をご確認ください。' },
  { q: 'ソラノメと他の機種の違いは？', a: '最大の違いは「3測位による位置精度重視」の設計です。GPSのみの機種より屋内や地下での位置特定に強い一方、位置更新の頻度が高いぶんバッテリーは最大約1週間と短めです。通話・トーク機能はないため、お子さまとメッセージのやり取りをしたい場合は、BoTトークやみてねみまもりGPSなど通話・トーク対応機種が候補となります。なお、現行端末は2026年4月1日付の公式告知で販売を終了しています（2026年10月17日 公式確認）。' },
  { q: 'ソラノメは解約に縛りや違約金がありますか？', a: '契約期間の縛り・解約金はありません。月額539円（税込）で、いつでも解約できます（別途、本体代金14,520円が必要です）。現行端末は2026年4月1日付の公式告知で販売を終了しているため、新規の契約・購入はできません（2026年10月17日 公式確認）。' },
  { q: 'ソラノメは今も購入できますか？', a: '購入できません。公式サイトの2026年4月1日付の告知で現行端末の販売を終了しており、次期端末は開発中と発表されています。2026年10月17日の公式確認時点で、次期端末の発売時期は告知されていません。通話・トークのない位置情報専用の機種を探している場合は、みてねみまもりGPS（位置情報プラン）やあんしんウォッチャーが販売中です。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "soranome（ソラノメ）のレビュー", "datePublished": "2026-03-15", "dateModified": "2026-10-17", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'soranome（ソラノメ）' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-g400 text-white">販売終了</span>
            <span className="tag-pill bg-blue text-white">3測位対応</span>
            <span className="tag-pill bg-orange text-white">SOSボタン搭載</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            soranome（ソラノメ）のレビュー
          </h1>
          <p className="text-g600 text-lg">エスキュービズム提供 | 月額539円 | 最大4人見守り</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          {/* 結論box */}
          <div className="rounded-2xl border-l-4 border-blue bg-blue-light/40 p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">ソラノメの現行端末は販売終了しています（2026年10月17日 公式確認）</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>強み</strong>：GPS+Wi-Fi+基地局の<strong>3測位</strong>により、屋内・地下も含めて位置精度が高くなっています。SOSボタン・IP55防水も搭載しています。</li>
              <li>・<strong>弱み</strong>：バッテリーが<strong>最大約1週間</strong>と短く、本体は<strong>14,520円</strong>とやや高めです。<strong>通話・トーク機能はありません</strong>。</li>
              <li>・<strong>料金</strong>：月額<strong>539円</strong>で、契約期間の縛りや解約金はありません。</li>
              <li>・<strong>販売状況</strong>：公式サイトの2026年4月1日付の告知で現行端末の販売を終了し、次期端末は開発中と発表されています。2026年10月17日時点で、次期端末の発売時期は告知されていません。</li>
            </ul>
            <p className="text-xs text-g500 mt-3">出典：エスキュービズム公式（ソラノメ製品ページ・仕様）。最新の状況は公式サイトでご確認ください。<Link href="/#ranking" className="text-blue underline">他機種との比較ランキングはこちら</Link></p>
          </div>

          <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 mb-6 text-sm text-gray-700">
            <strong>【重要・2026年10月17日 公式確認】</strong>公式サイトの2026年4月1日付告知により、soranomeの<strong>現行端末は販売終了</strong>となっています(次期端末を開発中と発表)。以下のレビューは現行端末の情報で、新規の購入はできません。最新の状況は、<a href="https://soranome.net/" target="_blank" rel="noopener noreferrer nofollow" className="underline text-blue-600">公式サイト</a>でご確認ください。
          </div>
          <h2 className="section-title">soranome（ソラノメ）とは</h2>
          <p className="text-g600 mb-6">
            soranome（ソラノメ）は、エスキュービズムが提供する子供用GPS端末です。
            GPS+Wi-Fi+携帯基地局の3測位システムにより、屋内外を問わず高精度な位置特定が可能です。
            SOSボタンを搭載しており、お子さまが緊急時にワンプッシュで保護者に通知できます。
            現行端末は2026年4月1日付の公式告知で販売を終了しており、以下は既にお持ちの方向けの情報です。
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
                  <p className="text-sm text-g600">屋外で高精度に測位します。精度は数メートルです。</p>
                </div>
                <div className="bg-green-light rounded-xl p-4">
                  <p className="font-bold text-green-dark text-sm">Wi-Fi測位</p>
                  <p className="text-sm text-g600">建物内でもWi-Fiで位置を特定します。</p>
                </div>
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange-dark text-sm">携帯基地局測位</p>
                  <p className="text-sm text-g600">地下やGPSを受信できないエリアもカバーします。</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '', title: '3測位システム', desc: 'GPS+Wi-Fi+基地局により、屋内外を問わず高精度に位置を特定します。' },
              { icon: '', title: 'SOSボタン', desc: '緊急時にボタンを長押しすると、保護者全員に通知します。' },
              { icon: '', title: 'エリア出入り通知', desc: '設定したエリアの出入りを自動で通知します。登下校の確認に役立ちます。' },
              { icon: '', title: '移動履歴', desc: '過去の移動経路を確認でき、通学路の安全を把握できます。' },
              { icon: '', title: 'バッテリー通知', desc: 'バッテリー残量が少なくなると、保護者に通知します。' },
              { icon: '', title: '最大4人見守り', desc: '家族4人まで、お子さまの位置を確認できます。' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
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
                <li>・3測位により、他機種より位置精度が高くなっています</li>
                <li>・SOSボタンで緊急時に備えられます</li>
                <li>・月額539円と手頃な料金です</li>
                <li>・エリアの出入りを通知できます</li>
                <li>・IP55防水で、雨の日にも使用できます</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・バッテリーが最大1週間と短くなっています</li>
                <li>・本体価格が14,520円と高めです</li>
                <li>・トーク・通話機能はありません</li>
                <li>・見守り人数が最大4人と少なめです</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">現行端末が向いていたご家庭・向かないご家庭</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-2">向いていたご家庭</h3>
              <ul className="space-y-1.5 text-sm text-g700">
                <li>・登下校の位置を正確に把握したいご家庭</li>
                <li>・ビル内や地下街など、GPSが届きにくい場所も通るご家庭</li>
                <li>・SOSボタンで緊急時に備えたいご家庭</li>
                <li>・通話・トークは不要で、位置確認のみで十分なご家庭</li>
              </ul>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange-dark mb-2">向かないご家庭</h3>
              <ul className="space-y-1.5 text-sm text-g700">
                <li>・お子さまとメッセージ・通話でやり取りしたいご家庭（トーク対応機種をおすすめします）</li>
                <li>・充電の手間を減らしたいご家庭（電池持ちは最大約1週間）</li>
                <li>・本体価格をできるだけ抑えたいご家庭</li>
                <li>・5人以上で見守りを分担したいご家庭（最大4人）</li>
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

          <div className="mt-10 text-center bg-green-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">販売中の機種を探している方へ</h2>
            <p className="text-g600 mb-6 text-sm">ソラノメの現行端末は販売を終了しています。位置情報専用の機種は、他の機種との比較からお選びいただけます。</p>
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
