import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'みもり 徹底レビュー | 不審者情報連動の防犯GPS',
  description:
    'みもり（ドリームエリア）の機能・料金・口コミを徹底レビュー。不審者情報連動、危険エリア通知、音声メッセージ機能搭載。防犯重視で選ぶならみもりがおすすめ。',
};

const faqData = [
  { q: 'みもりの不審者情報連動機能とは？', a: '全国の不審者情報をリアルタイムで取得し、お子さまが不審者出没エリアに近づくと自動で保護者に通知します。日本不審者情報センターのデータと連携しています。' },
  { q: 'みもりの月額料金はいくら？', a: '月額748円（税込）です。不審者情報連動や音声メッセージなど防犯機能が充実しているため、安全性を重視する方にコスパの良い料金設定です。' },
  { q: '音声メッセージ機能はどう使うの？', a: '保護者のスマホアプリから音声メッセージをGPS端末に送信できます。端末のスピーカーから音声が流れるので、お子さまへの伝言に便利です。' },
  { q: '危険エリア通知とは？', a: '交通事故多発地点や犯罪発生エリアなど、危険な場所にお子さまが近づくとGPS端末から警告音が鳴り、同時に保護者にも通知されます。' },
  { q: 'バッテリーはどのくらい持ちますか？', a: '通常使用で約1〜2ヶ月持ちます。位置情報の更新頻度や音声メッセージの使用頻度によって変動します。' },
  { q: '学校に持って行けますか？', a: 'はい、音声メッセージの受信音はマナーモードに設定可能です。小型・軽量なのでランドセルに入れておけます。学校の規則は事前にご確認ください。' },
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
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/#ranking' }, { name: 'みもり' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">不審者情報連動</span>
            <span className="tag-pill bg-blue text-white">防犯重視</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            みもり 徹底レビュー
          </h1>
          <p className="text-g600 text-lg">ドリームエリア提供 | 不審者情報連動 | 危険エリア通知 | 音声メッセージ</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">みもりとは</h2>
          <p className="text-g600 mb-6">
            みもりは、ドリームエリアが提供する防犯重視の子供用GPS端末です。
            最大の特徴は不審者情報との連動機能。全国の不審者出没情報をリアルタイムで取得し、
            お子さまが危険エリアに近づくと自動で警告・通知してくれます。
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
                    ['バッテリー', '約1〜2ヶ月'],
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
              <h3 className="font-bold text-blue mb-3">防犯機能ハイライト</h3>
              <div className="space-y-3">
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">不審者情報連動</p>
                  <p className="text-sm text-g600 mt-1">全国の不審者出没情報とリアルタイム連動。危険エリア接近を自動通知。</p>
                </div>
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">危険エリア通知</p>
                  <p className="text-sm text-g600 mt-1">交通事故多発地点・犯罪発生エリアで端末から警告音が鳴る。</p>
                </div>
                <div className="bg-green-light rounded-xl p-4">
                  <p className="font-bold text-green-dark">音声メッセージ</p>
                  <p className="text-sm text-g600 mt-1">保護者のスマホからGPS端末に音声メッセージを送信可能。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '🚨', title: '不審者情報連動', desc: '全国の不審者情報をリアルタイム取得。お子さまが危険エリアに近づくと自動通知。' },
              { icon: '⚠️', title: '危険エリア通知', desc: '事故多発地点や犯罪発生エリアでGPS端末から警告音が鳴る。' },
              { icon: '🔊', title: '音声メッセージ', desc: '保護者のスマホからGPS端末に音声メッセージを送信可能。' },
              { icon: '📍', title: '位置確認・履歴', desc: 'リアルタイム位置確認と移動履歴の自動記録。' },
              { icon: '🔔', title: 'エリア通知', desc: '登録エリアの出入りを自動通知。学校・自宅・塾の到着確認に。' },
              { icon: '👨‍👩‍👧', title: '複数人見守り', desc: '家族みんなでお子さまの位置を見守り可能。' },
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
                <li>・危険エリア通知で事故・犯罪リスクを軽減</li>
                <li>・音声メッセージでお子さまに伝言可能</li>
                <li>・バッテリー最大2ヶ月の長寿命</li>
                <li>・見守り人の追加無料</li>
                <li>・ドリームエリアは教育機関との連携実績豊富</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・月額748円で最安ではない</li>
                <li>・本体価格8,580円はやや高め</li>
                <li>・双方向トーク機能は非対応</li>
                <li>・端末サイズがやや大きめ（約55g）</li>
                <li>・音声メッセージは保護者→子供の一方通行</li>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">みもりが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">不審者情報連動で防犯力トップクラス。お子さまの安全を最優先に守ります。</p>
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
