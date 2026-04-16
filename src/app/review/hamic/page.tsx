import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Hamic 徹底レビュー | キッズスマホ型の見守りデバイス',
  description:
    'Hamic（Hamee提供）のキッズスマホ型見守りデバイスを徹底レビュー。LINE的メッセージ機能、カメラ、GPS見守り機能を搭載。スマホデビュー前の練習端末としても最適。',
};

const faqData = [
  { q: 'HamicはスマホとGPS端末のどちらに近い？', a: 'Hamicはキッズスマホ型のデバイスです。GPS位置確認に加え、LINE的なメッセージ機能やカメラを搭載しており、スマホに近い使い勝手です。ただし、一般的なアプリのインストールは制限されています。' },
  { q: 'Hamicの月額料金はいくら？', a: 'Hamic POCKETはデータSIM込みで月額1,100円（税込）です。端末+通信+アプリが一体のサービスなので別途SIM契約は不要です。' },
  { q: 'メッセージ機能はどう使うの？', a: '専用アプリ「Hamicアプリ」でテキスト・スタンプ・写真のやりとりが可能です。LINEに似た操作感で、お子さまも直感的に使えます。送受信相手は保護者が管理できます。' },
  { q: 'カメラ機能はありますか？', a: 'はい、カメラを搭載しています。撮影した写真をメッセージで送ったり、保護者のアプリで確認したりできます。' },
  { q: 'GPS見守り機能はありますか？', a: 'はい、リアルタイム位置確認、移動履歴、エリア通知などのGPS見守り機能を標準搭載しています。' },
  { q: '対象年齢は何歳くらい？', a: '主に小学校中学年〜高学年（8歳〜12歳）が対象です。スマホを持たせる前の練習端末として活用するご家庭が多いです。' },
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

export default function HamicPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/#ranking' }, { name: 'Hamic' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">キッズスマホ型</span>
            <span className="tag-pill bg-blue text-white">メッセージ機能</span>
            <span className="tag-pill bg-green text-white">カメラ付き</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            Hamic 徹底レビュー
          </h1>
          <p className="text-g600 text-lg">Hamee提供 | キッズスマホ型 | LINE的メッセージ | カメラ | GPS見守り</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">Hamicとは</h2>
          <p className="text-g600 mb-6">
            Hamicは、スマホアクセサリー大手のHameeが提供するキッズスマホ型の見守りデバイスです。
            GPS位置確認はもちろん、LINEのようなメッセージ機能やカメラを搭載しており、
            「GPS端末では物足りないけどスマホはまだ早い」というご家庭に最適です。
            保護者が利用範囲を管理できるため、安心してスマホデビューの準備ができます。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'Hamee（ハミィ）'],
                    ['端末タイプ', 'キッズスマホ型'],
                    ['月額料金', '1,100円（税込・データSIM込）'],
                    ['本体価格', '約12,100円（税込）'],
                    ['測位方式', 'GPS+Wi-Fi'],
                    ['メッセージ', 'テキスト・スタンプ・写真'],
                    ['カメラ', '搭載'],
                    ['防水', '生活防水'],
                    ['バッテリー', '約2〜3日'],
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
                  <p className="font-bold text-orange">LINE的メッセージ</p>
                  <p className="text-sm text-g600 mt-1">テキスト・スタンプ・写真でやりとり。送信相手は保護者が管理。</p>
                </div>
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">カメラ機能</p>
                  <p className="text-sm text-g600 mt-1">写真撮影してメッセージで送信可能。お子さまの目線を共有。</p>
                </div>
                <div className="bg-green-light rounded-xl p-4">
                  <p className="font-bold text-green-dark">GPS見守り</p>
                  <p className="text-sm text-g600 mt-1">リアルタイム位置確認・移動履歴・エリア通知を標準搭載。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '💬', title: 'メッセージ機能', desc: 'LINE的な操作感でテキスト・スタンプ・写真のやりとりが可能。' },
              { icon: '📷', title: 'カメラ', desc: '写真を撮って保護者に送信。お子さまの日常を共有。' },
              { icon: '📍', title: 'GPS位置確認', desc: 'リアルタイムでお子さまの現在地を確認できます。' },
              { icon: '🔔', title: 'エリア通知', desc: '登録エリアの出入りを自動通知。到着・出発がすぐわかる。' },
              { icon: '🔒', title: '利用制限管理', desc: '保護者がアプリの利用範囲や連絡先を管理。安心して持たせられる。' },
              { icon: '📱', title: 'スマホ練習', desc: 'スマホデビュー前の練習端末として最適。段階的にITリテラシーを育成。' },
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
                <li>・LINE的メッセージでコミュニケーション充実</li>
                <li>・カメラ付きで写真共有が可能</li>
                <li>・GPS見守り機能を標準搭載</li>
                <li>・SIM込み月額1,100円でわかりやすい料金</li>
                <li>・スマホデビューの練習に最適</li>
                <li>・保護者による利用制限管理が充実</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・月額1,100円はGPS端末より高い</li>
                <li>・本体価格12,100円で初期費用が必要</li>
                <li>・バッテリー持ちは2〜3日で短め</li>
                <li>・音声通話には非対応</li>
                <li>・学校持ち込みが制限される可能性</li>
                <li>・画面付きで遊びに使ってしまう懸念</li>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">Hamicが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">キッズスマホ型で見守りもコミュニケーションも。スマホデビュー前の安心な選択肢。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/kids-phone/" className="btn-accent">キッズケータイとの比較を見る</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
