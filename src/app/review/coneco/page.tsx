import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'coneco（コネコ）の評判・口コミは？新規販売終了【2026年10月】仕様と代わりの機種',
  description:
    'coneco（カーメイト）は本体の新規販売を終了しています（公式サイト・2026年10月31日確認）。ご利用中の方向けに公式仕様をまとめ、1分間隔のリアルタイム追跡と、車載機器メーカーの高精度な測位技術が特長です。位置情報の更新頻度を重視する方に適した機種です。',
};

const faqData = [
  { q: 'conecoは今も購入できますか？', a: 'いいえ。カーメイト公式サイトで「coneco本体の新規販売は終了いたしました」と案内されています（終了日の記載はありません。2026年10月19日確認）。ご利用中の方へのサービスは継続すると案内されています。これから購入する場合は、BoTトーク・みてねみまもりGPS・まもサーチ3など販売中の機種をご検討ください。' },
  { q: 'conecoの位置更新頻度はどのくらいですか？', a: '最短1分間隔でリアルタイム追跡が可能です。他の多くのGPS端末が3〜5分間隔である中、業界トップクラスの更新頻度です。' },
  { q: 'conecoの月額料金はいくらですか？', a: '月額480円（税込・coneco端末1台あたり）です。利用開始月の利用料金は発生しません（coneco利用規約の料金表・2026年10月31日確認）。支払いはクレジットカードのみで、最低利用期間はありません。' },
  { q: 'カーメイトはどのような会社ですか？', a: 'カーメイトは車載用品メーカーとして50年以上の歴史を持つ東証上場企業です。GPS測位やセンサー技術のノウハウを活かした高精度な位置情報端末を開発しています。' },
  { q: 'バッテリーはどのくらい持ちますか？', a: '公式サイトでは、1日4時間の移動と4回のメッセージを想定して「約4日程度」と案内されています（620mAh、2026年10月19日確認）。更新頻度とバッテリー持ちのバランスを調整できます。' },
  { q: '防水性能はありますか？', a: '公式仕様は「IPX3相当（生活防水）」です。多少の雨であれば問題ありませんが、水没には対応していません。' },
  { q: 'エリア通知機能はありますか？', a: 'はい。登録したエリアへの出入りを自動で通知します（エリアは5か所まで・アプリを起動していなくても通知を受信できます。公式サイト・2026年10月31日確認）。学校や塾への到着・出発の確認に役立ちます。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "coneco のレビュー", "datePublished": "2026-03-15", "dateModified": "2026-10-19", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'coneco' }]} />

      {/* Hero */}
      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">1分間隔追跡</span>
            <span className="tag-pill bg-blue text-white">高精度測位</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            conecoのレビュー
          </h1>
          <p className="text-g600 text-lg">カーメイト提供 | 1分間隔リアルタイム追跡 | 車載技術の高精度GPS</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border-l-4 border-orange bg-orange-light/40 p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">conecoは本体の新規販売を終了しています</h2>
            <p className="text-sm text-g700">カーメイト公式サイトで「coneco本体の新規販売は終了いたしました」と案内されています（終了日の記載なし）。ご利用中の方へのサービスは継続されます。これから購入する場合は、<Link href="/review/bot-talk/" className="text-blue underline">BoTトーク</Link>・<Link href="/review/mitene/" className="text-blue underline">みてねみまもりGPS</Link>・<Link href="/review/mamosearch/" className="text-blue underline">まもサーチ3</Link>などの販売中の機種をご検討ください。</p>
            <p className="text-xs text-g500 mt-2">出典：<a href="https://www.carmate.jp/coneco/" target="_blank" rel="noopener noreferrer" className="text-blue underline">coneco公式（カーメイト）</a>・<a href="https://consumer-guide.coneco.carmate.jp/terms.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">coneco利用規約（料金表）</a>（2026年10月31日確認）</p>
          </div>

          <h2 className="section-title">conecoとは</h2>
          <p className="text-g600 mb-6">
            conecoは、車載用品メーカー大手のカーメイトが提供する子供用GPS端末です。
            最大の特徴は、業界トップクラスの1分間隔のリアルタイム追跡です。
            車載機器で培ったGPS測位技術を子供向けに最適化しており、高い位置精度を備えています。
            お子さまの現在地を、より正確かつリアルタイムに把握したい保護者に選ばれています。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'カーメイト'],
                    ['月額料金', '480円（税込）'],
                    ['本体価格', '新規販売終了（カーメイト公式オンラインストアも「ただいまご注文いただけません」・2026年10月31日確認）'],
                    ['測位方式', 'GPS・GLONASS・Galileo（取得できない場合は基地局で大まかな位置を表示）'],
                    ['更新間隔', '1分・3分・5分・10分から選択（履歴は1年前まで）'],
                    ['バッテリー', '約4日程度（620mAh・1日4時間移動／メッセージ4回の想定）'],
                    ['通信回線', 'LTE-M'],
                    ['防水', 'IPX3相当（生活防水）'],
                    ['大きさ・重量', '43×106×16mm・約64g'],
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
                  <p className="text-sm text-g600 mt-1">ほぼリアルタイムで移動を把握でき、帰り道の様子を詳しく確認できます。</p>
                </div>
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">一般的なGPS（3〜5分間隔）</p>
                  <p className="text-sm text-g600 mt-1">大まかな位置は把握できますが、タイムラグがあります。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '', title: '1分間隔追跡', desc: '業界トップクラスの更新頻度で、お子さまの移動をほぼリアルタイムで把握できます。' },
              { icon: '', title: '高精度測位', desc: '車載機器メーカーの技術力により、高い位置精度を実現しています。' },
              { icon: '', title: '移動履歴', desc: '細かい間隔で位置を記録するため、通学路を詳細に把握できます。' },
              { icon: '', title: 'エリア通知', desc: '登録したエリアの出入りを自動で通知し、到着・出発をすぐに確認できます。' },
              { icon: '', title: '更新頻度切り替え', desc: '1分・3分・5分から選択でき、バッテリー持ちとのバランスを調整できます。' },
              { icon: '', title: '縦長の形状', desc: '43×106×16mm・約64gの縦長の本体です（公式仕様）。' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
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
                <li>・1分間隔の業界最速のリアルタイム追跡</li>
                <li>・車載機器メーカーの高い測位精度</li>
                <li>・月額480円（税込・利用規約の料金表）</li>
                                <li>・更新頻度を柔軟に変更できます</li>
                <li>・東証上場企業が提供</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・1分間隔での使用時は、バッテリー消費が速くなります</li>
                                <li>・SOSボタンは搭載されていません</li>
                <li>・防水性能はIPX3相当で、他機種よりやや低くなっています</li>
                <li>・本体の新規販売は終了しています</li>
                <li>・不審者情報との連動などの防犯機能はありません</li>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">conecoの代わりの機種を探す方へ</h2>
            <p className="text-g600 mb-6 text-sm">conecoは新規販売を終了しています。これから購入する場合は、販売中の機種を比較してお選びください。</p>
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
