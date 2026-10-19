import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'myFirst Foneの評判・口コミは？【2026年】腕時計型GPSの通話機能・料金を解説',
  description:
    'myFirst Fone（腕時計型キッズGPS）をレビューします。通話・ビデオ通話に対応し、カメラとSOS機能を搭載しています。腕時計型GPS端末の機能・料金・口コミについて解説します。',
};

const faqData = [
  { q: 'myFirst Foneで通話はできますか？', a: 'はい、音声通話とビデオ通話の両方に対応しています。保護者のスマートフォンのアプリから、お子さまの腕時計に直接電話をかけられます。なお、SIMカード（別途契約）が必要です。' },
  { q: 'myFirst Foneの月額料金はいくら？', a: '端末本体の月額料金は不要ですが、通話・データ通信のためにSIMカード（月額約980円〜）の契約が別途必要です。格安SIMも利用できます。' },
  { q: 'SOS機能はどう使うの？', a: '端末のSOSボタンを長押しすると、事前に登録した緊急連絡先に自動で通知が送られます。同時に端末の位置情報も送信されるため、迅速に対応できます。' },
  { q: 'カメラ機能はありますか？', a: 'はい、インカメラを搭載しています。ビデオ通話に使えるほか、お子さまが写真を撮影してアプリに送信することもできます。' },
  { q: '防水性能はありますか？', a: '公式サイトでは「生活防水 IPX8」（水深3mで5分まで）と案内されています（2026年10月19日確認）。手洗いの際や雨の日でも使用できますが、水泳など長時間の水中での使用は想定されていません。' },
  { q: '対象年齢は何歳くらい？', a: '主な対象年齢は5歳〜12歳程度です。腕時計型のためランドセルに入れ忘れるリスクがなく、常に身に着けていられる点が、小さなお子さまにも適しています。' },
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

export default function MyFirstFonePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "myFirst Fone レビュー", "datePublished": "2026-03-15", "dateModified": "2026-10-19", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'myFirst Fone' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">腕時計型</span>
            <span className="tag-pill bg-blue text-white">通話・ビデオ通話</span>
            <span className="tag-pill bg-green text-white">SOS搭載</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            myFirst Fone レビュー
          </h1>
          <p className="text-g600 text-lg">腕時計型GPS | 通話・ビデオ通話対応 | カメラ付き | SOS機能</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">myFirst Foneとは</h2>
          <p className="text-g600 mb-6">
            myFirst Foneは、腕時計型の子供用GPSスマートウォッチです。
            一般的なGPS端末との最大の違いは、音声通話・ビデオ通話機能を搭載している点です。
            カメラを備えており、写真撮影やビデオ通話ができるほか、SOSボタンで緊急時に通知することもできます。
            「GPSだけでは機能が足りないが、スマートフォンを持たせるにはまだ早い」とお考えのご家庭に選ばれている端末です。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'myFirst（マイファースト）'],
                    ['端末タイプ', '腕時計型スマートウォッチ'],
                    ['本体価格', '約18,000円〜26,800円'],
                    ['SIM', '別途契約（月額約980円〜）'],
                    ['測位方式', 'GPS+GLONASS+Wi-Fi'],
                    ['通話', '音声通話・ビデオ通話対応'],
                    ['カメラ', 'インカメラ搭載'],
                    ['防水', 'IPX8（生活防水・水深3mで5分まで）'],
                    ['SOS', '緊急通知ボタン搭載'],
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
              <h3 className="font-bold text-blue mb-3">コミュニケーション機能</h3>
              <div className="space-y-3">
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">音声通話</p>
                  <p className="text-sm text-g600 mt-1">保護者のスマートフォンから直接通話でき、電話と同じ感覚で使えます。</p>
                </div>
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">ビデオ通話</p>
                  <p className="text-sm text-g600 mt-1">インカメラで、お子さまの顔を見ながら通話できます。</p>
                </div>
                <div className="bg-green-light rounded-xl p-4">
                  <p className="font-bold text-green-dark">SOSボタン</p>
                  <p className="text-sm text-g600 mt-1">長押しすると、緊急連絡先への自動通知と位置情報の送信を行います。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '📞', title: '音声・ビデオ通話', desc: '保護者と直接通話できます。ビデオ通話でお子さまの様子も確認できます。' },
              { icon: '📷', title: 'カメラ機能', desc: '撮影した写真をアプリに送信できます。お子さまの目線での記録が残せます。' },
              { icon: '🆘', title: 'SOS緊急通知', desc: 'ボタンを長押しすると、緊急連絡先に位置情報付きの通知を自動で送信します。' },
              { icon: '📍', title: 'リアルタイム位置確認', desc: 'GPS+Wi-Fiの複合測位で、現在地を正確に把握します。' },
              { icon: '⌚', title: '腕時計型デザイン', desc: '手首に着けるため、置き忘れの心配がありません。カラフルなデザインで、お子さまに人気があります。' },
              { icon: '🎵', title: '音楽再生', desc: '内蔵メモリに音楽を保存して再生できます。お出かけの際の楽しみにもなります。' },
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
                <li>・音声通話・ビデオ通話でリアルタイムに会話可能</li>
                <li>・SOSボタンによる緊急時の備え</li>
                <li>・腕時計型で置き忘れの心配なし</li>
                <li>・カメラ付きでビデオ通話や写真撮影に対応</li>
                <li>・生活防水 IPX8（水深3mで5分まで）</li>
                <li>・音楽再生などのエンタメ機能も充実</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・本体価格が18,000円〜と高め</li>
                <li>・SIMの別途契約で月額コストが高くなる点</li>
                <li>・バッテリー持ちは約1〜2日と短め</li>
                <li>・学校での使用が制限される場合がある点</li>
                <li>・多機能な分、操作がやや複雑</li>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">myFirst Foneをご検討中の方へ</h2>
            <p className="text-g600 mb-6 text-sm">腕時計型GPSと通話機能を備え、スマートフォンを持たせる前の選択肢となる端末です。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/purpose/watch-type/" className="btn-accent">腕時計型GPS特集を見る</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
