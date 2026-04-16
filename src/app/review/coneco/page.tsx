import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'coneco 徹底レビュー | 1分間隔リアルタイム追跡GPS',
  description:
    'coneco（カーメイト）の機能・料金・口コミを徹底レビュー。1分間隔のリアルタイム追跡、車載機器メーカーの高精度測位技術。位置情報の更新頻度を重視する方に最適。',
};

const faqData = [
  { q: 'conecoの位置更新頻度は？', a: '最短1分間隔でリアルタイム追跡が可能です。他の多くのGPS端末が3〜5分間隔である中、業界トップクラスの更新頻度です。' },
  { q: 'conecoの月額料金はいくら？', a: '月額480円（税込）です。本体価格は別途必要ですが、月額料金は業界でも低価格帯に位置しています。' },
  { q: 'カーメイトはどんな会社？', a: 'カーメイトは車載用品メーカーとして50年以上の歴史を持つ東証上場企業です。GPS測位やセンサー技術のノウハウを活かした高精度な位置情報端末を開発しています。' },
  { q: 'バッテリーはどのくらい持ちますか？', a: '1分間隔の高頻度更新時は約3〜4日、通常更新（3分間隔）で約1〜2週間持ちます。更新頻度とバッテリー持ちのバランスを調整できます。' },
  { q: '防水性能はありますか？', a: 'IPX4相当の生活防水対応です。多少の雨なら問題ありませんが、水没には対応していません。' },
  { q: 'エリア通知機能はありますか？', a: 'はい、登録したエリアへの出入りを自動通知します。学校や塾への到着・出発の確認に便利です。' },
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

export default function ConecoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/#ranking' }, { name: 'coneco' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">1分間隔追跡</span>
            <span className="tag-pill bg-blue text-white">高精度測位</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            coneco 徹底レビュー
          </h1>
          <p className="text-g600 text-lg">カーメイト提供 | 1分間隔リアルタイム追跡 | 車載技術の高精度GPS</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">conecoとは</h2>
          <p className="text-g600 mb-6">
            conecoは、車載用品メーカー大手のカーメイトが提供する子供用GPS端末です。
            最大の特徴は業界トップクラスの1分間隔リアルタイム追跡。
            車載機器で培ったGPS測位技術を子供向けに最適化しており、高い位置精度を誇ります。
            「今どこにいるか」をより正確に、よりリアルタイムに知りたい保護者に選ばれています。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'カーメイト'],
                    ['月額料金', '480円（税込）'],
                    ['本体価格', '6,600円（税込）'],
                    ['測位方式', 'GPS+GLONASS+みちびき+Wi-Fi'],
                    ['更新間隔', '最短1分間隔'],
                    ['バッテリー', '約3日〜2週間'],
                    ['通信回線', 'LTE-M'],
                    ['防水', '生活防水（IPX4）'],
                    ['重量', '約33g'],
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
              <h3 className="font-bold text-blue mb-3">更新頻度の違い</h3>
              <div className="space-y-3">
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">coneco（1分間隔）</p>
                  <p className="text-sm text-g600 mt-1">ほぼリアルタイムで移動を把握。帰り道の様子がよくわかる。</p>
                </div>
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">一般的なGPS（3〜5分間隔）</p>
                  <p className="text-sm text-g600 mt-1">大まかな位置は把握可能。タイムラグあり。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '⚡', title: '1分間隔追跡', desc: '業界トップクラスの更新頻度。お子さまの移動をほぼリアルタイムで把握。' },
              { icon: '📍', title: '高精度測位', desc: '車載機器メーカーの技術力で高い位置精度を実現。' },
              { icon: '📝', title: '移動履歴', desc: '細かい間隔での位置記録で、通学路を詳細に把握可能。' },
              { icon: '🔔', title: 'エリア通知', desc: '登録エリアの出入りを自動通知。到着・出発がすぐわかる。' },
              { icon: '🔋', title: '更新頻度切り替え', desc: '1分・3分・5分から選択可能。バッテリーとのバランス調整。' },
              { icon: '🎒', title: '超軽量設計', desc: '約33gの軽量ボディ。ランドセルに入れても負担なし。' },
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
                <li>・1分間隔の業界最速リアルタイム追跡</li>
                <li>・車載機器メーカーの高い測位精度</li>
                <li>・月額480円の低価格</li>
                <li>・約33gの超軽量コンパクト設計</li>
                <li>・更新頻度を柔軟に変更可能</li>
                <li>・東証上場企業の安心感</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・1分間隔使用時はバッテリー消費が速い</li>
                <li>・トーク・メッセージ機能は非対応</li>
                <li>・SOSボタンは搭載されていない</li>
                <li>・防水性能はIPX4で他機種よりやや低い</li>
                <li>・不審者情報連動などの防犯機能はなし</li>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">conecoが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">1分間隔のリアルタイム追跡で、お子さまの「今」がすぐわかります。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/myfirst-fone/" className="btn-accent">次のレビュー: myFirst Fone</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
