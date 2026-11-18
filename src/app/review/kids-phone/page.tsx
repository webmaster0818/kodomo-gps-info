import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'キッズケータイとGPS端末の比較 | docomo・au・SB 3キャリア比較',
  description:
    'キッズケータイ（docomo・au・ソフトバンク）の3キャリアを比較し、GPS端末との違いを解説します。月額料金・機能・制約を比較し、お子さまにキッズケータイとGPS端末のどちらが適しているかをご説明します。',
};

const faqData = [
  { q: 'キッズケータイとGPS端末の最も大きな違いは何ですか？', a: '最も大きな違いは、キッズケータイでは音声通話ができる点です。一方で、キャリアの回線契約（月額550円〜）が必要で、家族間の通話無料は同じキャリアの家族割に入っていることが条件です（au・ソフトバンクの公式）。GPS端末は機種ごとに月額と見守りアプリの条件が異なり、保護者の携帯電話のキャリアを問わない機種もあります。' },
  { q: 'キッズケータイの月額料金はいくらですか？', a: '2026年11月18日に各社の公式で確認した月額（税込）は、ドコモ「キッズケータイプラン」550円（KY-41C）、au「ジュニアケータイプランME」847円（au PAY カードお支払い割の適用で660円・推奨機種 mamorino6）、ソフトバンク「基本プラン2（キッズフォン）」748円（キッズフォン4・3など）です。居場所の確認には、ドコモはイマドコサーチ（月額330円・見守る方）、ソフトバンクは位置ナビ（月額220円・保護者側）が別に必要です。いずれも本体代金は別です。' },
  { q: 'キッズケータイは学校に持って行けますか？', a: '学校によってルールが異なります。auは mamorino6 の製品ページで、学校への持ち込みは事前に学校へ確認するよう案内しています。GPS端末も同様に、事前に学校の規則をご確認ください。' },
  { q: 'GPS端末のほうが適しているのはどのような場合ですか？', a: '月額費用を抑えたい場合、学校への持ち込みを優先したい場合、通話は不要で位置確認のみを行いたい場合は、GPS端末をおすすめします。シンプルで小型のため、低学年のお子さまにも負担が少ない点が特長です。' },
  { q: 'キッズケータイのほうが適しているのはどのような場合ですか？', a: 'お子さまと直接通話したい場合、緊急時に電話で連絡を取りたい場合、高学年で行動範囲が広い場合は、キッズケータイが適しています。防犯ブザーを内蔵したモデルもあります。' },
  { q: 'キッズケータイからスマートフォンへの移行はいつ頃ですか？', a: '一般的には、小学校高学年から中学入学のタイミングで検討されることが多いといわれます。なお、au「ジュニアケータイプランME」「ジュニアケータイプランN」は申込時点で小学生以下であることが加入条件です（au公式）。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "キッズケータイとGPS端末の比較", "datePublished": "2026-03-15", "dateModified": "2026-11-18", "author": {"@type": "Organization", "name": "子供見守りGPS最新情報 編集部", "url": "https://gps-kodomo.com/"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
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
            キッズケータイは通話機能が利点ですが、回線の月額費用がかかり、家族間の通話無料は同じキャリアの家族割が条件です。
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
                  ['対象機種（例）', 'キッズケータイ KY-41C', 'mamorino6', 'キッズフォン4／キッズフォン3'],
                  ['料金プラン（月額・税込）', 'キッズケータイプラン 550円', 'ジュニアケータイプランME 847円（au PAY カードお支払い割で660円）', '基本プラン2（キッズフォン） 748円'],
                  ['居場所の確認', 'イマドコサーチ 月額330円（見守る方・保護者はドコモ以外の回線でも可）', 'ココセコム連携などの居場所お知らせ機能（製品ページ）', '位置ナビ 月額220円（保護者側・保護者はソフトバンクかワイモバイルが必要）'],
                  ['通話', '家族など登録した相手とのみ通話', '家族間の国内通話無料（同一の家族割）', '家族間の国内通話無料（家族割引が必要）'],
                  ['防犯ブザー', '搭載（鳴らすと緊急連絡先に発信）', '搭載（保護者へ発信・位置と画像を送信）', '撮影機能付き防犯ブザー（位置と写真を送信）'],
                  ['カメラ', 'あり（アウト・イン 各約500万画素）', 'あり（約500万画素／サブ約200万画素）', 'あり（約800万画素）'],
                  ['防水・防塵', 'IPX5/IPX8・IP6X', 'IPX5/IPX8・IP6X', 'キッズフォン4：IPX5/IPX8・IP6X／キッズフォン3：IPX5/IPX7・IP5X'],
                  ['重さ', '約109g', '約101g', 'キッズフォン4：約117g'],
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
          <p className="text-xs text-g500 mb-8">
            ※2026年11月18日に各社の公式ページで確認（
            <a href="https://www.docomo.ne.jp/product/ky41c/" target="_blank" rel="nofollow noopener" className="underline">ドコモ KY-41C</a>・
            <a href="https://www.docomo.ne.jp/product/ky41c/spec.html" target="_blank" rel="nofollow noopener" className="underline">仕様</a>／
            <a href="https://www.au.com/mobile/product/featurephone/mamorino6/" target="_blank" rel="nofollow noopener" className="underline">au mamorino6</a>・
            <a href="https://www.au.com/mobile/product/featurephone/mamorino6/spec/" target="_blank" rel="nofollow noopener" className="underline">仕様</a>・
            <a href="https://www.au.com/mobile/charge/juniorphone-me/" target="_blank" rel="nofollow noopener" className="underline">ジュニアケータイプランME</a>／
            <a href="https://www.softbank.jp/mobile/products/mimamorimobile/kids-phone4/" target="_blank" rel="nofollow noopener" className="underline">ソフトバンク キッズフォン4</a>・
            <a href="https://www.softbank.jp/mobile/products/mimamorimobile/kids-phone3/" target="_blank" rel="nofollow noopener" className="underline">キッズフォン3</a>・
            <a href="https://www.softbank.jp/mobile/price_plan/kids-phone/" target="_blank" rel="nofollow noopener" className="underline">基本プラン2</a>）。
            本体価格は時期・購入方法で変わるため掲載していません。au は「ジュニアケータイプランN」（月額737円・割引適用で550円・推奨機種 mamorino5/4）もあります。
          </p>

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
                  ['月額（回線）', '550〜847円（上表・税込）', '機種により異なる（料金比較ページ参照）'],
                  ['通話', '音声通話可能', '不可の機種が多い（一部はアプリで通話・トーク対応）'],
                  ['保護者のキャリア', '家族間通話無料は同じキャリアの家族割が条件', '機種ごとのアプリで確認（キャリア不問の機種もあり）'],
                  ['学校持ち込み', '学校のルールを事前に確認', '学校のルールを事前に確認'],
                  ['重さ', '約101〜117g（上表の3機種）', '機種により異なる（各レビュー参照）'],
                  ['防犯ブザー', '3機種とも搭載', '一部機種のみ'],
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
