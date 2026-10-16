import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供にスマホとGPS、どっちがいい？【年齢別おすすめ】',
  description:
    '子供にスマートフォンとGPS端末のどちらを持たせるべきかを、料金・機能・安全性・学校への持ち込みの観点から比較します。年齢別のおすすめと、GPS端末からスマートフォンへ移行する時期も解説します。',
};

const faqData = [
  { q: '小学校低学年にスマートフォンは早いですか？', a: '一般的に、小学校低学年にスマートフォンは早いとされています。SNSやゲームへの依存リスク、有害コンテンツへのアクセス、高額な月額料金を考慮すると、GPS端末のほうが適しています。見守り機能に特化しており、月額500円前後で利用できます。' },
  { q: 'キッズスマートフォンとGPS端末の違いは何ですか？', a: 'キッズスマートフォンは、通話・メッセージ・カメラ・アプリなどスマートフォンの機能を、制限を設けたうえで提供します。GPS端末は位置情報の共有と簡易メッセージに特化しており、それ以外の機能はありません。月額料金もGPS端末のほうが安価です。' },
  { q: 'GPS端末でもメッセージは送れますか？', a: 'BoTトーク、myFirst Fone、ハミックポケットなどは音声メッセージやテキストメッセージに対応しています。簡単なやり取りであれば、GPS端末でも十分に対応できます。' },
  { q: '学校にスマートフォンは持ち込めますか？', a: '文部科学省は、原則として小学校へのスマートフォンの持ち込みを禁止しています。GPS端末は、多くの学校で持ち込みが認められています。学校のルールを事前にご確認ください。' },
  { q: 'GPS端末からスマートフォンに切り替える時期の目安を教えてください。', a: '小学校高学年（5〜6年生）から中学入学時が、一般的な切り替えの時期です。友人との連絡手段が必要になり、行動範囲が広がる時期に検討することをおすすめします。' },
  { q: 'おすすめのキッズスマートフォンを教えてください。', a: 'ドコモのキッズケータイ KY-41C、auのmamorino6、ソフトバンクのキッズフォン3などが代表的です。フィルタリング機能と位置情報機能を標準で搭載しており、月額1,000円前後から利用できます。' },
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

export default function SmartphoneVsGpsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供にスマホとGPS、どっちがいい？【年齢別おすすめ】", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'スマートフォンとGPSの比較' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">スマートフォンとGPS</span>
            <span className="tag-pill bg-orange text-white">年齢別おすすめ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供にはスマートフォンとGPS端末のどちらがよい？
          </h1>
          <p className="text-g600 text-lg">料金・機能・安全性を比較し、年齢別のおすすめを解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">スマートフォンとGPS端末の比較表</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left font-bold text-g800">比較項目</th>
                  <th className="p-3 text-center font-bold text-g800">GPS端末</th>
                  <th className="p-3 text-center font-bold text-g800">キッズスマートフォン</th>
                  <th className="p-3 text-center font-bold text-g800">通常のスマートフォン</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: '月額料金', gps: '0〜748円', kids: '550〜1,100円', smartphone: '1,000〜3,000円' },
                  { item: '端末価格', gps: '5,280〜26,800円', kids: '10,000〜22,000円', smartphone: '20,000〜80,000円' },
                  { item: '位置情報', gps: 'あり（専用）', kids: 'あり', smartphone: 'あり（アプリ）' },
                  { item: '通話機能', gps: '一部機種のみ', kids: 'あり（制限付き）', smartphone: 'あり' },
                  { item: 'メッセージ', gps: '一部機種のみ', kids: 'あり（制限付き）', smartphone: 'あり' },
                  { item: 'SNS・ゲーム', gps: 'なし', kids: '制限あり', smartphone: 'あり' },
                  { item: 'カメラ', gps: 'なし', kids: 'あり', smartphone: 'あり' },
                  { item: 'フィルタリング', gps: '不要', kids: '標準搭載', smartphone: '別途設定が必要' },
                  { item: '学校持ち込み', gps: 'ほぼ可能', kids: '学校による', smartphone: '原則不可' },
                  { item: 'バッテリー', gps: '3〜14日', kids: '1〜2日', smartphone: '1日' },
                  { item: 'SOS機能', gps: 'あり（多くの機種）', kids: 'あり', smartphone: 'アプリで対応' },
                ].map((row) => (
                  <tr key={row.item} className="border-b border-gray-200">
                    <td className="p-3 font-bold text-g700">{row.item}</td>
                    <td className="p-3 text-center text-g600">{row.gps}</td>
                    <td className="p-3 text-center text-g600">{row.kids}</td>
                    <td className="p-3 text-center text-g600">{row.smartphone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">年齢別のおすすめ</h2>
          <div className="space-y-4 mb-8">
            <div className="card-hover p-6 border-l-4 border-blue">
              <h3 className="font-bold text-g800 mb-2">小学校低学年（1〜3年生）→ GPS端末がおすすめ</h3>
              <p className="text-sm text-g600 mb-3">
                この年齢では、スマートフォンのSNSやゲーム機能は必要ありません。GPS端末は見守りに特化しており、
                操作もシンプルです。月額料金も安く、学校への持ち込みも認められやすいため最適です。
              </p>
              <div className="bg-blue-light rounded-lg p-3">
                <p className="text-sm text-g700 font-bold">おすすめ機種: みもり、あんしんウォッチャー、BoTトーク</p>
              </div>
            </div>

            <div className="card-hover p-6 border-l-4 border-orange">
              <h3 className="font-bold text-g800 mb-2">小学校高学年（4〜6年生）→ GPS端末またはキッズスマートフォンを検討</h3>
              <p className="text-sm text-g600 mb-3">
                友人関係が広がり、連絡手段が必要になる時期です。メッセージ機能付きGPS端末で十分な場合もあれば、
                キッズスマートフォンが必要な場合もあります。お子さまの行動範囲や、友人のスマートフォン所持状況を考慮してご判断ください。
              </p>
              <div className="bg-orange-light rounded-lg p-3">
                <p className="text-sm text-g700 font-bold">おすすめ: myFirst Fone（GPS+通話）、キッズケータイ</p>
              </div>
            </div>

            <div className="card-hover p-6 border-l-4 border-green-dark">
              <h3 className="font-bold text-g800 mb-2">中学生 → キッズスマートフォンまたは通常のスマートフォン（利用制限を設定）</h3>
              <p className="text-sm text-g600 mb-3">
                中学入学を機に、スマートフォンを持たせるご家庭が増えます。部活や塾の連絡、友人とのコミュニケーションにスマートフォンが必要になります。
                フィルタリング設定やスクリーンタイム制限を必ず行い、段階的にスマートフォンの使い方を教えることをおすすめします。
              </p>
              <div className="bg-green-light rounded-lg p-3">
                <p className="text-sm text-g700 font-bold">ポイント: フィルタリングの設定は必須です。利用ルールはご家族で決めてください。</p>
              </div>
            </div>
          </div>

          <h2 className="section-title">GPS端末の利点と欠点</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-light rounded-xl p-6">
              <h3 className="font-bold text-blue mb-3">GPS端末の利点</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・月額料金が安い（0〜748円）</li>
                <li>・見守り機能に特化したシンプルな設計</li>
                <li>・学校への持ち込みがほぼ認められる</li>
                <li>・バッテリーが長持ち（3〜14日）</li>
                <li>・SNS・ゲーム依存のリスクがない</li>
                <li>・有害コンテンツに触れる心配がない</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">GPS端末の欠点</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・通話ができない機種が多い</li>
                <li>・友人との連絡手段にならない</li>
                <li>・成長に伴い機能が不足する</li>
                <li>・カメラやアプリは使えない</li>
                <li>・高学年以降は持ち歩きを嫌がる場合がある</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">キッズスマートフォンの選択肢</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left font-bold text-g800">機種</th>
                  <th className="p-3 text-center font-bold text-g800">キャリア</th>
                  <th className="p-3 text-center font-bold text-g800">月額目安</th>
                  <th className="p-3 text-center font-bold text-g800">位置情報</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'キッズケータイ KY-41C', carrier: 'ドコモ', price: '550円〜', gps: 'あり（イマドコサーチ）' },
                  { name: 'mamorino6', carrier: 'au', price: '550円〜', gps: 'あり（安心ナビ）' },
                  { name: 'キッズフォン3', carrier: 'ソフトバンク', price: '539円〜', gps: 'あり（位置ナビ）' },
                  { name: 'Hamic POCKET L', carrier: 'SIMフリー', price: '1,100円〜', gps: 'あり（専用アプリ）' },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-gray-200">
                    <td className="p-3 font-bold text-g700">{row.name}</td>
                    <td className="p-3 text-center text-g600">{row.carrier}</td>
                    <td className="p-3 text-center text-g600">{row.price}</td>
                    <td className="p-3 text-center text-g600">{row.gps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">GPS端末からスマートフォンへ移行する時期</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">以下のような状況が見られた場合は、スマートフォンへの移行をご検討ください。</p>
            <div className="space-y-3">
              {[
                { sign: '友人との連絡手段が必要になった', desc: '友人がスマートフォンやキッズケータイを持ち始め、連絡手段としてLINE等が必要になった場合です。' },
                { sign: '行動範囲が大幅に広がった', desc: '塾や習い事で遠方に通うようになり、リアルタイムの連絡が必要な場面が増えた場合です。' },
                { sign: '子供自身がルールを守れるようになった', desc: '時間管理ができ、約束事を守れるようになった段階で、利用制限を設定したスマートフォンの導入を検討できます。' },
                { sign: '中学入学の時期', desc: '環境が変わる中学入学は、スマートフォンを導入する最も一般的な時期です。部活や塾の連絡に必要となることが多くあります。' },
              ].map((item) => (
                <div key={item.sign} className="flex items-start gap-3 bg-blue-light rounded-lg p-3">
                  <span className="font-bold text-blue text-sm whitespace-nowrap min-w-fit">{item.sign}</span>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">お子さまに適した見守りツールの選び方</h2>
            <p className="text-g600 mb-6 text-sm">年齢と用途に合わせて、GPS端末とキッズスマートフォンを比較検討することをおすすめします。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/gps-vs-phone/" className="btn-primary">GPS端末とスマートフォンの比較</Link>
              <Link href="/knowledge/when-to-start/" className="btn-accent">GPSはいつから？</Link>
              <Link href="/" className="btn-accent">おすすめランキング</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
