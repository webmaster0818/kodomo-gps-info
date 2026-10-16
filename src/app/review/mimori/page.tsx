import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'みもりGPSの評判・口コミは？【2026年】不審者情報連動の防犯GPSの実力・料金を解説',
  description:
    'みもり（ドリームエリア）の機能・料金・口コミをレビューします。不審者情報連動、危険エリア通知、音声メッセージの各機能を搭載しています。防犯を重視して選ぶ方には、みもりをおすすめします。',
};

const faqData = [
  { q: 'みもりの不審者情報連動機能とは？', a: '全国の不審者情報をリアルタイムで取得し、お子さまが不審者の出没エリアに近づくと、自動で保護者に通知する機能です。日本不審者情報センターのデータと連携しています。' },
  { q: 'みもりの月額料金はいくら？', a: '月額748円（税込）です。不審者情報連動や音声メッセージなど防犯機能が充実しているため、安全性を重視する方にとって費用対効果の高い料金設定です。' },
  { q: '音声メッセージ機能はどう使うの？', a: '保護者のスマートフォンのアプリから、GPS端末に音声メッセージを送信できます。端末のスピーカーから音声が流れるため、お子さまへの伝言に便利です。' },
  { q: '危険エリア通知とは？', a: '交通事故の多発地点や犯罪の発生エリアなど、危険な場所にお子さまが近づくと、GPS端末から警告音が鳴り、同時に保護者にも通知される機能です。' },
  { q: 'バッテリーはどのくらい持ちますか？', a: '通常の使用で約1〜2カ月持ちます。位置情報の更新頻度や、音声メッセージの使用頻度によって変動します。' },
  { q: '学校に持って行けますか？', a: 'はい。音声メッセージの受信音はマナーモードに設定できます。小型・軽量のため、ランドセルに入れておくことができます。学校の規則は事前にご確認ください。' },
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

export default function MimoriPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "みもりのレビュー", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'みもり' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">不審者情報連動</span>
            <span className="tag-pill bg-blue text-white">防犯重視</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            みもりのレビュー
          </h1>
          <p className="text-g600 text-lg">ドリームエリア提供 | 不審者情報連動 | 危険エリア通知 | 音声メッセージ</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">みもりとは</h2>
          <p className="text-g600 mb-6">
            みもりは、ドリームエリアが提供する、防犯を重視した子供用GPS端末です。
            最大の特徴は、不審者情報との連動機能です。全国の不審者の出没情報をリアルタイムで取得し、
            お子さまが危険エリアに近づくと、自動で警告・通知を行います。
            音声メッセージ機能や危険エリア通知など、他のGPS端末にはない防犯機能が充実しています。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'ドリームエリア'],
                    ['月額料金', '748円（税込）'],
                    ['本体価格', '8,580円（税込）'],
                    ['測位方式', 'GPS+GLONASS+Wi-Fi+携帯基地局'],
                    ['バッテリー', '約1〜2カ月'],
                    ['通信回線', 'SoftBank LTE'],
                    ['防水', '生活防水（IPX5）'],
                    ['サイズ', '約54×54×20mm'],
                    ['重量', '約55g'],
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
              <h3 className="font-bold text-blue mb-3">主な防犯機能</h3>
              <div className="space-y-3">
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">不審者情報連動</p>
                  <p className="text-sm text-g600 mt-1">全国の不審者の出没情報とリアルタイムで連動し、危険エリアへの接近を自動で通知します。</p>
                </div>
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">危険エリア通知</p>
                  <p className="text-sm text-g600 mt-1">交通事故の多発地点や犯罪の発生エリアで、端末から警告音が鳴ります。</p>
                </div>
                <div className="bg-green-light rounded-xl p-4">
                  <p className="font-bold text-green-dark">音声メッセージ</p>
                  <p className="text-sm text-g600 mt-1">保護者のスマートフォンから、GPS端末に音声メッセージを送信できます。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '🚨', title: '不審者情報連動', desc: '全国の不審者情報をリアルタイムで取得し、お子さまが危険エリアに近づくと自動で通知します。' },
              { icon: '⚠️', title: '危険エリア通知', desc: '事故の多発地点や犯罪の発生エリアで、GPS端末から警告音が鳴ります。' },
              { icon: '🔊', title: '音声メッセージ', desc: '保護者のスマートフォンから、GPS端末に音声メッセージを送信できます。' },
              { icon: '📍', title: '位置確認・履歴', desc: 'リアルタイムでの位置確認と、移動履歴の自動記録に対応しています。' },
              { icon: '🔔', title: 'エリア通知', desc: '登録したエリアへの出入りを自動で通知します。学校・自宅・塾への到着確認に役立ちます。' },
              { icon: '👨‍👩‍👧', title: '複数人での見守り', desc: 'ご家族全員でお子さまの位置を見守ることができます。' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
                <p className="text-2xl mb-2">{f.icon}</p>
                <h3 className="font-bold text-g800 text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-g600">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Pros & Cons */}
          <h2 className="section-title">メリット・デメリット</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・不審者情報連動は業界唯一の防犯機能</li>
                <li>・危険エリア通知により事故・犯罪のリスクを軽減</li>
                <li>・音声メッセージでお子さまに伝言が可能</li>
                <li>・バッテリーが最大2カ月持つ長寿命設計</li>
                <li>・見守る人の追加は無料</li>
                <li>・ドリームエリアは教育機関との連携実績が豊富</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・月額748円で最安ではない点</li>
                <li>・本体価格8,580円はやや高め</li>
                <li>・双方向のトーク機能には非対応</li>
                <li>・端末がやや大きめ（約55g）</li>
                <li>・音声メッセージは保護者からお子さまへの一方向のみ</li>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">みもりをご検討中の方へ</h2>
            <p className="text-g600 mb-6 text-sm">みもりは不審者情報連動を備え、防犯機能の充実度はトップクラスです。お子さまの安全を最優先に考える方に適しています。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/coneco/" className="btn-accent">次のレビュー: coneco</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
