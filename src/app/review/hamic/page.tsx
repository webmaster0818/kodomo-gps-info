import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Hamic（ハミック）の評判・口コミは？【2026年】キッズスマホ型見守りの実力・料金を解説',
  description:
    'Hamee提供のキッズスマートフォン型見守りデバイス「Hamic」をレビューします。LINEのようなメッセージ機能、カメラ、GPS見守り機能を搭載しており、スマートフォンを持たせる前の練習用端末としても適しています。',
};

const faqData = [
  { q: 'HamicはスマートフォンとGPS端末のどちらに近いですか？', a: 'Hamicはキッズスマートフォン型のデバイスです。GPSによる位置確認に加え、LINEのようなメッセージ機能やカメラを搭載しており、スマートフォンに近い使い勝手です。ただし、一般的なアプリのインストールは制限されています。' },
  { q: 'Hamicの月額料金はいくらですか？', a: 'Hamic POCKETは、データSIM込みで月額1,100円（税込）です。端末・通信・アプリが一体となったサービスのため、別途SIMを契約する必要はありません。' },
  { q: 'メッセージ機能はどのように使いますか？', a: '専用アプリ「Hamicアプリ」で、テキスト・スタンプ・写真のやりとりが可能です。LINEに似た操作感のため、お子さまも直感的に使えます。送受信の相手は保護者が管理できます。' },
  { q: 'カメラ機能はありますか？', a: 'はい。カメラを搭載しています。撮影した写真をメッセージで送信したり、保護者のアプリで確認したりできます。' },
  { q: 'GPS見守り機能はありますか？', a: 'はい。リアルタイムの位置確認、移動履歴、エリア通知などのGPS見守り機能を標準で搭載しています。' },
  { q: '対象年齢は何歳くらいですか？', a: '主な対象は小学校中学年〜高学年（8歳〜12歳）です。スマートフォンを持たせる前の練習用端末として活用するご家庭が多くあります。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Hamic レビュー", "datePublished": "2026-03-15", "dateModified": "2026-10-19", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'Hamic' }]} />

      {/* Hero */}
      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">キッズスマートフォン型</span>
            <span className="tag-pill bg-blue text-white">メッセージ機能</span>
            <span className="tag-pill bg-green text-white">カメラ搭載</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            Hamic レビュー
          </h1>
          <p className="text-g600 text-lg">Hamee提供 | キッズスマートフォン型 | メッセージ機能 | カメラ | GPS見守り</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">Hamicとは</h2>
          <p className="text-g600 mb-6">
            Hamicは、スマートフォンアクセサリー大手のHameeが提供する、キッズスマートフォン型の見守りデバイスです。
            GPSによる位置確認に加え、LINEのようなメッセージ機能やカメラを搭載しており、
            「GPS端末では機能が足りないが、スマートフォンを持たせるにはまだ早い」とお考えのご家庭に適しています。
            保護者が利用範囲を管理できるため、スマートフォンを持たせる前の準備段階として活用できます。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'Hamee（ハミィ）'],
                    ['端末タイプ', 'キッズスマートフォン型'],
                    ['月額料金', '1,100円（税込・データSIM込）'],
                    ['本体価格', '18,700円（税込・Hamic POCKET L。2026年10月26日時点で公式ストアは全色売り切れ）'],
                    ['測位方式', 'GPS+Wi-Fi'],
                    ['メッセージ', 'テキスト・スタンプ・写真'],
                    ['カメラ', '搭載'],
                    ['防水', 'IP64（Hamic POCKET L・専用ケース装着時）'],
                    ['バッテリー', '約1.5日が目安（Hamic POCKET L・2,000mAh）'],
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
                  <p className="font-bold text-orange">LINE風メッセージ</p>
                  <p className="text-sm text-g600 mt-1">テキスト・スタンプ・写真でやりとりできます。送信相手は保護者が管理します。</p>
                </div>
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">カメラ機能</p>
                  <p className="text-sm text-g600 mt-1">撮影した写真をメッセージで送信でき、お子さまの目線を共有できます。</p>
                </div>
                <div className="bg-green-light rounded-xl p-4">
                  <p className="font-bold text-green-dark">GPS見守り</p>
                  <p className="text-sm text-g600 mt-1">リアルタイムの位置確認・移動履歴・エリア通知を標準で搭載しています。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '', title: 'メッセージ機能', desc: 'LINEのような操作感で、テキスト・スタンプ・写真のやりとりが可能です。' },
              { icon: '', title: 'カメラ', desc: '撮影した写真を保護者に送信し、お子さまの日常を共有できます。' },
              { icon: '', title: 'GPS位置確認', desc: 'リアルタイムでお子さまの現在地を確認できます。' },
              { icon: '', title: 'エリア通知', desc: '登録したエリアへの出入りを自動で通知します。到着・出発をすぐに把握できます。' },
              { icon: '', title: '利用制限管理', desc: '保護者がアプリの利用範囲や連絡先を管理できるため、安心して持たせることができます。' },
              { icon: '', title: 'スマートフォンの練習', desc: 'スマートフォンを持たせる前の練習用端末として適しています。段階的にITリテラシーを育むことができます。' },
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
                <li>・LINEのようなメッセージ機能でコミュニケーションが充実</li>
                <li>・カメラを搭載し、写真の共有が可能</li>
                <li>・GPS見守り機能を標準搭載</li>
                <li>・SIM込みで月額1,100円のわかりやすい料金</li>
                <li>・スマートフォンを持たせる前の練習に適している点</li>
                <li>・保護者による利用制限管理が充実</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・月額1,100円とGPS端末より高い料金</li>
                <li>・本体価格18,700円（Hamic POCKET L）の初期費用が必要。公式ストアでは2026年10月26日時点で全色売り切れ</li>
                <li>・バッテリーの持ちは約1.5日が目安と短め（公式の目安）</li>
                <li>・音声通話には非対応</li>
                <li>・学校への持ち込みが制限される可能性がある点</li>
                <li>・画面があるため、遊びに使用される懸念がある点</li>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">Hamicが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">キッズスマートフォン型で、見守りとコミュニケーションの両方に対応しています。スマートフォンを持たせる前の選択肢としてご検討ください。</p>
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
