import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'myFirst Foneの評判・口コミは？【2026年】腕時計型GPSの通話機能・料金を解説',
  description:
    'myFirst Fone（腕時計型キッズGPS）を公式ストアの情報でレビューします。S4は34,800円・M1は14,800円（税込）、専用SIM（myFirst Free SIM・月額980円）が必要で、電話番号での通話はできません。機能・料金・注意点を解説します。',
};

const faqData = [
  { q: 'myFirst Foneで通話はできますか？', a: '保護者のスマートフォンの「myFirst Circle」アプリを通じて、音声通話とビデオ通話ができます（データ通信またはWi-Fi経由）。データ専用SIMのため、電話番号を使ったダイヤル通話はできません（公式ストア・FAQ、2026年11月11日確認）。' },
  { q: 'myFirst Foneの月額料金はいくら？', a: '通信には専用の「myFirst Free SIM」の契約が必要で、日本で開通した場合のデータ通信料は月額980円です（公式FAQ）。S4・R2・M1はいずれも他社のSIMでは使えません。M1は初回30日間無料と案内されています。支払いはクレジットカードのみです（2026年11月11日確認）。' },
  { q: 'SOS機能はどう使うの？', a: 'S4には「ワンタッチSOSボタン」があり、緊急時に簡単な操作で保護者などに通知できると公式に記載されています。授業中に機能を止める「クラスモード」中も、SOS機能は使えます（2026年11月11日確認）。具体的な操作方法は取扱説明書でご確認ください。' },
  { q: 'カメラ機能はありますか？', a: 'はい。S4は5MP、M1は前面2MPのカメラを搭載しています。ビデオ通話のほか、写真やボイスメモをアプリで共有できます（公式ストア、2026年11月11日確認）。' },
  { q: '防水性能はありますか？', a: 'S4は「生活防水 IPX8」、M1は「生活防水 IP67」と公式ストアに記載されています（2026年11月11日確認）。S4は「完全防水ではありません。水中での長時間使用や入浴・シャワーでの使用はお控えください」と案内されています。' },
  { q: '対象年齢は何歳くらい？', a: '公式ストアでは対象年齢4歳から、S4の推奨年齢は5〜12歳と案内されています（2026年11月11日確認）。腕時計型のため、ランドセルに入れ忘れることがありません。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "myFirst Fone レビュー", "datePublished": "2026-03-15", "dateModified": "2026-11-11", "author": {"@type": "Organization", "name": "子供見守りGPS最新情報 編集部", "url": "https://gps-kodomo.com/"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'myFirst Fone' }]} />

      {/* Hero */}
      <section className="bg-[#F4F7FA] py-12">
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
            公式ストアでは現在、S4・R2・M1の3機種を扱っています。一般的なGPS端末との違いは、保護者のアプリとの音声通話・ビデオ通話やカメラを備えている点です。
            通信には専用の「myFirst Free SIM」（月額980円）が必要で、データ専用のため電話番号での通話はできません。
            「GPSだけでは機能が足りないが、スマートフォンを持たせるにはまだ早い」とお考えのご家庭向けの端末です。
            本ページの仕様・価格は、2026年11月11日に公式ストア（jp.myfirst.tech）の製品ページとFAQで確認した内容です。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'myFirst（マイファースト）'],
                    ['端末タイプ', '腕時計型スマートウォッチ'],
                    ['本体価格（税込）', 'S4 34,800円／M1 14,800円（公式ストア）'],
                    ['SIM', 'myFirst Free SIM必須（月額980円・他社SIM不可）'],
                    ['測位方式', 'GPS・Wi-Fi・基地局（LBS）。S4はL1/L5のデュアルバンドGPS'],
                    ['位置の更新', '最短5分間隔（公式FAQ）'],
                    ['通話', 'アプリ経由の音声・ビデオ通話（電話番号での通話は不可）'],
                    ['カメラ', 'S4 5MP／M1 前面2MP'],
                    ['防水', 'S4 生活防水IPX8／M1 生活防水IP67'],
                    ['重さ・電池', 'S4 48g・605mAh／M1 47g・730mAh（待機最大24時間）'],
                    ['SOS', 'S4はワンタッチSOSボタン'],
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
                  <p className="text-sm text-g600 mt-1">保護者のスマートフォンの「myFirst Circle」アプリから通話できます。電話番号での通話はできません。</p>
                </div>
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">ビデオ通話</p>
                  <p className="text-sm text-g600 mt-1">インカメラで、お子さまの顔を見ながら通話できます。</p>
                </div>
                <div className="bg-green-light rounded-xl p-4">
                  <p className="font-bold text-green-dark">SOSボタン</p>
                  <p className="text-sm text-g600 mt-1">S4は、緊急時に簡単な操作で保護者などに通知できます（公式記載）。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '', title: '音声・ビデオ通話', desc: '保護者と直接通話できます。ビデオ通話でお子さまの様子も確認できます。' },
              { icon: '', title: 'カメラ機能', desc: '撮影した写真をアプリに送信できます。お子さまの目線での記録が残せます。' },
              { icon: '', title: 'SOS緊急通知', desc: 'S4はワンタッチSOSボタンで、緊急時に保護者などへ通知できます。' },
              { icon: '', title: '位置確認・エリア通知', desc: 'GPS・Wi-Fi・基地局の3つの方法で測位し、学校や自宅などのエリアへの出入りを通知します（更新は最短5分間隔）。' },
              { icon: '⌚', title: 'クラスモード（S4）', desc: '学校や勉強時間中は、SOS以外の機能を自動で止められます。ゲームやSNSなどの外部アプリはインストールできません。' },
              { icon: '', title: '音楽再生（S4）', desc: 'MP3プレーヤーとスピーカーを搭載し、最大1,500曲を保存できます（公式記載）。' },
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
                <li>・音声通話・ビデオ通話でリアルタイムに会話可能</li>
                <li>・SOSボタンによる緊急時の備え</li>
                <li>・腕時計型で置き忘れの心配なし</li>
                <li>・カメラ付きでビデオ通話や写真撮影に対応</li>
                <li>・生活防水（S4 IPX8／M1 IP67）</li>
                <li>・授業中はクラスモードでSOS以外の機能を止められる（S4）</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・本体価格はS4が34,800円と高め（M1は14,800円）</li>
                <li>・専用SIM（月額980円）が必要で、手持ちのSIMは使えない</li>
                <li>・電話番号での通話はできない（アプリ経由のみ）</li>
                <li>・学校での使用が制限される場合がある点</li>
                <li>・M1の待機時間は最大24時間（公式）で、毎日の充電が前提</li>
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
