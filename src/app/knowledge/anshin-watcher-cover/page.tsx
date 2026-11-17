import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'あんしんウォッチャーのケース・カバー｜公式シリコンカバーの色・同梱物・購入先と、ランドセルへの付け方【2026年11月】',
  description:
    'あんしんウォッチャー（LE）のケース・カバーをKDDI・au公式の記載で整理しています。公式シリコンカバー（カラビナ付き）のカラー・同梱物・購入先、装着したまま充電できる点、本体サイズと防水防塵（IP55）をまとめています。',
  keywords: ['あんしんウォッチャー', 'ケース', 'カバー', 'シリコンカバー', 'カラビナ', 'ランドセル'],
};

const AU_DEVICE = 'https://www.au.com/life/auhome/device/uha01a/';
const FAQ_BASE = 'https://homeiot.kddi.com/anshinwatcher/kids/faq/';
const KIDS_TOP = 'https://homeiot.kddi.com/anshinwatcher/kids/';
const CHECKED = '2026年11月17日確認';

const faqData = [
  {
    q: 'あんしんウォッチャー LE にも同じカバーが使えますか？',
    a: '使えます。au公式の製品ページでは、シリコンカバーは「あんしんウォッチャー LE／あんしんウォッチャー」専用カバーと案内されています（2026年11月17日確認）。',
  },
  {
    q: 'カバーを付けたまま充電できますか？',
    a: 'できます。公式の製品ページに、専用カバーを装着したまま本体への充電やボタンの押下が可能と記載されています。',
  },
  {
    q: 'カバーは本体に付いてきますか？',
    a: '付いてきません。専用カバーは本体とは別売りで、1色ずつの販売です。本体の同梱物は本体・取扱説明書・保証書で、充電用のUSB Type-Cケーブルも同梱されていません。',
  },
  {
    q: 'カバーはどこで買えますか？',
    a: '公式のよくある質問では、au PAY マーケット、Amazon、楽天市場、Yahoo!ショッピングのECサイトで購入できると案内されています。価格は販売サイトによって異なる場合があるため、購入時に各サイトでご確認ください。',
  },
  {
    q: 'カバーなしでも雨の日に使えますか？',
    a: '本体は防水防塵IP55で、あらゆる方向からの水の直接噴流による有害な影響を受けない等級と製品ページに記載されています。カバーは落下による傷や汚れを防ぐためのもので、防水性能を高めるとは公式に記載されていません。水没させる使い方は避けてください。',
  },
  {
    q: '落として壊れた場合は保証の対象になりますか？',
    a: '製品の保証期間は購入から1年間で、オプションの「トラブルサポート」に加入すると2年間に延長されると公式FAQに記載されています。保証対象には条件があり、詳しくは納品書兼保証書の保証規定で確認するよう案内されています。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function AnshinWatcherCoverPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'あんしんウォッチャーのケース・カバー', datePublished: '2026-11-17', dateModified: '2026-11-17', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'あんしんウォッチャーのケース・カバー' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">アクセサリー</span>
            <span className="tag-pill bg-blue text-white">あんしんウォッチャー</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">あんしんウォッチャーのケース・カバーの選び方</h1>
          <p className="text-g600 text-lg">KDDI・au公式の製品ページとよくある質問の記載をもとに、公式シリコンカバーの内容と、ケースを選ぶときに確認したい本体の仕様を整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：公式の「シリコンカバー（カラビナ付き）」が LE・通常版の両方に使えます。本体とは別売りです</h2>
            <p className="text-g600">
              KDDIは、あんしんウォッチャー LE／あんしんウォッチャー専用の<strong>シリコンカバー（カラビナ付き）</strong>を用意しています。ストラップとカラビナが同梱され、<strong>ランドセルやバッグに取り付けやすく</strong>、<strong>カバーを付けたまま充電やボタン操作ができます</strong>。本体とは別売り・1色ずつの販売で、au PAY マーケット・Amazon・楽天市場・Yahoo!ショッピングで購入できると案内されています。
            </p>
          </div>

          <h2 className="section-title">公式シリコンカバーの内容</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ['商品名', 'あんしんウォッチャー シリコンカバー（カラビナ付き）'],
                  ['対応機種', 'あんしんウォッチャー LE／あんしんウォッチャー'],
                  ['同梱物', 'シリコンカバー、ストラップ、カラビナ'],
                  ['特長', 'シリコン製で柔らかく、落下による傷や汚れから本体を守る。装着したまま充電・ボタン操作が可能'],
                  ['製品ページ掲載のカラー', 'オフホワイト、ラベンダー、ミントグリーン、ロイヤルブルー'],
                  ['販売形態', '本体とは別売り。1色ずつの販売'],
                  ['購入先（公式FAQ）', 'au PAY マーケット、Amazon、楽天市場、Yahoo!ショッピング'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <th className="p-3 text-left text-g800 w-1/3 bg-blue-light/40">{k}</th>
                    <td className="p-3 text-g700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-3">
            出典：au「<a href={AU_DEVICE} target="_blank" rel="noopener noreferrer" className="text-blue underline">あんしんウォッチャー LE／あんしんウォッチャー 製品ページ</a>」、KDDI「<a href={`${FAQ_BASE}016.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">本体のカラーは何色ありますか？</a>」（{CHECKED}）
          </p>
          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              <strong>カラーの記載について</strong>：au の製品ページには上記4色が掲載されています。一方、KDDIのよくある質問では「ブルー」「イエロー」「ピンク」の3色に新色4色を加えた<strong>総7色</strong>（<a href={`${FAQ_BASE}016.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">016</a>）、別の質問では「青色・黄色・ピンク色の総3色」（<a href={`${FAQ_BASE}019.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">019</a>）と記載されており、公式の案内が分かれています（{CHECKED}）。購入できる色は、各販売サイトでご確認ください。
            </p>
          </div>

          <h2 className="section-title">ケースを選ぶ前に確認したい本体の仕様</h2>
          <p className="text-sm text-g700 mb-3">公式カバー以外のケースやポーチを使う場合は、本体のサイズと、充電端子・ボタンの位置をふさがないかを確認しておくと安心です。</p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ['サイズ（幅×高さ×奥行）', '約50mm×50mm×18.8mm'],
                  ['重量', '約53g'],
                  ['防水性・防塵性', 'IP55（あらゆる方向からの水の直接噴流による有害な影響を受けない／正常な作動を妨げる量の粉塵が内部に入らない）'],
                  ['充電端子', 'USB Type-C（定格入力5V／1.5A）。充電ケーブルは同梱されていません'],
                  ['本体カラー', '白の1色'],
                  ['操作', '本体のボタン（長押しで現在地を通知、1回押すとLEDで電池残量を表示）'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <th className="p-3 text-left text-g800 w-1/3 bg-blue-light/40">{k}</th>
                    <td className="p-3 text-g700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：au「<a href={AU_DEVICE} target="_blank" rel="noopener noreferrer" className="text-blue underline">製品ページ（製品仕様・同梱物）</a>」、KDDI「<a href={`${FAQ_BASE}017.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">本体の大きさを知りたいです</a>」「<a href={`${FAQ_BASE}016.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">本体のカラーは何色ありますか？</a>」（{CHECKED}）。ボタン操作は当サイトの「<Link href="/review/anshin-watcher/" className="text-blue underline">あんしんウォッチャーのレビュー</Link>」で取扱説明書の記載をもとに整理しています。
          </p>

          <h2 className="section-title">公式カバーと、カバーなし・汎用ケースの違い</h2>
          <p className="text-sm text-g700 mb-3">公式の記載から分かる範囲で、当サイトが比較の観点を整理したものです。汎用ケースの適合や性能は製品ごとに異なり、公式では確認されていません。</p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">観点</th>
                  <th className="p-3 text-left border-b-2 border-blue">公式シリコンカバー</th>
                  <th className="p-3 text-left border-b-2 border-blue">カバーなし</th>
                  <th className="p-3 text-left border-b-2 border-blue">汎用ケース・ポーチ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['落下時の傷・汚れ', '防ぐ目的の製品と公式に記載', '本体がむき出し', '製品によって異なる'],
                  ['ランドセルへの取り付け', 'ストラップ・カラビナが同梱', '別途ストラップ等が必要', '製品によって異なる'],
                  ['装着したままの充電・ボタン操作', '可能と公式に記載', '—', 'ふさがないか要確認'],
                  ['LE・通常版への適合', '両方に対応と公式に記載', '—', '約50×50×18.8mmに合うか要確認'],
                ].map(([a, b, c, d]) => (
                  <tr key={a} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">{a}</td>
                    <td className="p-3 text-g700">{b}</td>
                    <td className="p-3 text-g700">{c}</td>
                    <td className="p-3 text-g700">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：au「<a href={AU_DEVICE} target="_blank" rel="noopener noreferrer" className="text-blue underline">製品ページ</a>」、KDDI「<a href={KIDS_TOP} target="_blank" rel="noopener noreferrer" className="text-blue underline">あんしんウォッチャー（キッズ向け）</a>」（{CHECKED}）をもとに当サイトで作成
          </p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              <strong>ご注意</strong>：本ページは公式ページの記載を整理したもので、特定の販売サイトや汎用ケースをおすすめするものではありません。カバーの価格・在庫・カラーは販売サイトで変わる場合があります。料金や機能の全体像は「<Link href="/review/anshin-watcher/" className="text-blue underline">あんしんウォッチャーのレビュー</Link>」、初期設定は「<Link href="/knowledge/anshin-watcher-howto/" className="text-blue underline">あんしんウォッチャーの使い方</Link>」をご覧ください。
            </p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
          <p className="text-xs text-g400 mt-3">
            出典：au「<a href={AU_DEVICE} target="_blank" rel="noopener noreferrer" className="text-blue underline">製品ページ</a>」、KDDI「<a href={`${FAQ_BASE}016.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">016</a>」「<a href={`${FAQ_BASE}018.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">製品の保証期間は何年ですか？</a>」「<a href={`${FAQ_BASE}019.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">専用カバーはありますか？</a>」（{CHECKED}）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/anshin-watcher/" className="btn-primary">あんしんウォッチャーのレビュー</Link>
              <Link href="/knowledge/anshin-watcher-howto/" className="btn-accent">あんしんウォッチャーの使い方</Link>
              <Link href="/knowledge/loss/" className="btn-primary">GPS端末の紛失対策</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
