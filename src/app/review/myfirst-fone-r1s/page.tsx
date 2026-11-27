import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { MyfirstAffText } from '@/components/AffiliateMyfirst';

export const metadata: Metadata = {
  title: 'myFirst Fone R1・R1sとは｜公式ストアの販売状況（R1sは処分特価9,980円）・使えるSIM・アプリ移行の注意点【2026年11月】',
  description:
    'myFirst Fone R1・R1sを公式ストアとFAQの記載で整理しています。R1sは処分特価9,980円・在庫限り、R1は公式ストアに商品ページがありません。使えるSIM（ドコモ・ソフトバンク回線のみ）、Circleアプリへの移行などの注意点をまとめています。',
  keywords: ['myFirst Fone R1', 'myFirst Fone R1s', 'マイファーストフォン R1', 'キッズスマートウォッチ', 'SIM'],
};

const STORE_R1S = 'https://jp.myfirst.tech/products/clearance-myfirst-fone-r1s';
const FONE_SERIES = 'https://jp.myfirst.tech/collections/myfirst-fone-series';
const FAQ_URL = 'https://jp.myfirst.tech/pages/myfirst-fone-faq';
const SIMCARD_URL = 'https://jp.myfirst.tech/pages/myfirst-fone-about-sim-card';
const CHECKED = '2026年11月17日確認';

const r1sFeatures: [string, string][] = [
  ['通信', '4G LTE。nanoSIM機種（SIMの入れ替えが可能）'],
  ['対応回線', '日本国内のドコモ回線・ソフトバンク回線のみ（au回線は不可）'],
  ['主な機能', 'GPSによる位置確認、音声通話・ビデオ通話（保護者の専用アプリと連携）'],
  ['心拍数モニター', '設定した範囲を超えるとアラートを発信'],
  ['文字盤', 'アニメーションや撮影した写真を設定可能'],
  ['アラーム', '保護者の声を録音してアラーム音に設定可能'],
  ['MP3プレーヤー', '内蔵。骨伝導イヤホン（別売）と組み合わせて使用可能'],
  ['耐水', '生活耐水（日常の水濡れ）'],
  ['技適', '取得済み（技適番号 210-152231）'],
  ['付属品', 'カラビナ・ネックストラップ・ポーチは、仕様変更により現在販売中の製品には付属しない'],
];

const faqData = [
  {
    q: 'myFirst Fone R1 は今も公式ストアで買えますか？',
    a: '2026年11月17日に myFirst Japan 公式ストアの商品ページ一覧（サイトマップ）を確認したところ、R1 の商品ページはありませんでした。myFirst Fone 本体の商品ページがあったのは S4・R2・M1 と、処分特価の R1s です。R1 を他の販売店で購入する場合、公式FAQでは「R1や一部販売店で取り扱う機種には myFirst FreeSIM が付属していない場合がある」と案内されています。',
  },
  {
    q: 'R1s の価格はいくらですか？',
    a: '公式ストアでは「【処分特価】myFirst Fone R1s」として、スペースブルーとコットンキャンディーの2色が9,980円で掲載されています（2026年11月17日確認）。クリアランスセールの対象で、商品はすべて新品未開封、在庫限りの販売で完売後の再入荷は未定と記載されています。別途、通信用のSIMが必要です。',
  },
  {
    q: 'R1・R1s で電話番号を使った通話はできますか？',
    a: 'myFirst FreeSIM（データSIM）を使う場合はできません。他社の電話番号付き音声SIMを使う場合は、Circleアプリのキッズアカウントに電話番号が登録されているか確認するよう公式FAQで案内されています。ただし、公式の対応SIM表では Y!mobile SIM の音声通話は R1s・R1c で動作しないことを確認したと記載されています（2026年4月時点）。',
  },
  {
    q: '旧アプリ「myFirst Fone」で使っていた R1 はどうなりますか？',
    a: '2024年9月1日以降、myFirst Fone の端末は旧アプリでは使えず、新しい「myFirst Circle」アプリへの移行が必要です。R1・R1s を「Fone OS」に更新した後は、旧アプリのアカウントではなく、Circleアプリで新規アカウントを作成するよう公式FAQで案内されています。',
  },
  {
    q: '「時計が削除されました」という通知が届きます。',
    a: 'myFirst Fone R1 に搭載されている「デバイス外れアラート」の通知です。不要な場合は、メイン管理者のアプリでキッズアカウント内の「デバイス外れアラート」をオフにします。サブ管理者からは設定できません（公式FAQ）。',
  },
  {
    q: 'R1・R1s を海外で使えますか？',
    a: '公式FAQ（R1sのよくある質問）では、日本国内で販売している製品は日本国内のドコモ回線・ソフトバンク回線のみに対応していると案内されています。海外で現地のSIMを使うと利用できる可能性はあるものの、日本以外での使用は保証の対象外です。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function MyfirstFoneR1sPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'myFirst Fone R1・R1sとは', datePublished: '2026-11-17', dateModified: '2026-11-17', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'myFirst Fone R1・R1s' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">腕時計型</span>
            <span className="tag-pill bg-blue text-white">myFirst Fone</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">myFirst Fone R1・R1sの販売状況と使う前の注意点</h1>
          <p className="text-g600 text-lg">myFirst Japan 公式ストアの商品ページとよくある質問の記載をもとに、R1・R1s の現在の扱いと、SIM・アプリの注意点を整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：R1s は公式ストアで処分特価9,980円・在庫限り。R1 は公式ストアに商品ページがありません</h2>
            <p className="text-g600">
              R1・R1s は、SIMを入れ替えられる <strong>nanoSIM 機種</strong>です。使える回線は<strong>ドコモ回線・ソフトバンク回線のみ</strong>で、保護者側は <strong>myFirst Circle アプリ</strong>が必要です（旧アプリは終了）。R1s は公式ストアで<strong>処分特価・在庫限り</strong>の販売で、完売後の再入荷は未定です。継続して販売されている機種を選びたい場合は、公式ストアに掲載のある S4・R2・M1 も比較対象になります。
            </p>
          </div>

          <h2 className="section-title">公式ストアでの扱い（2026年11月17日時点）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">機種</th>
                  <th className="p-3 text-left border-b-2 border-blue">公式ストアの掲載</th>
                  <th className="p-3 text-left border-b-2 border-blue">SIMの種類</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">myFirst Fone R1s</td>
                  <td className="p-3 text-g700">【処分特価】9,980円（スペースブルー／コットンキャンディー）。新品未開封・在庫限り・再入荷未定</td>
                  <td className="p-3 text-g700">nanoSIM</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">myFirst Fone R1</td>
                  <td className="p-3 text-g700">商品ページの掲載なし（公式FAQ・取扱説明書一覧には記載あり）</td>
                  <td className="p-3 text-g700">nanoSIM</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">S4・R2・M1</td>
                  <td className="p-3 text-g700">商品ページの掲載あり</td>
                  <td className="p-3 text-g700">S4・R2はeSIM／M1はnanoSIM</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：myFirst Japan 公式ストア「<a href={STORE_R1S} target="_blank" rel="noopener noreferrer" className="text-blue underline">【処分特価】myFirst Fone R1s</a>」「<a href={FONE_SERIES} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone シリーズ</a>」と商品ページ一覧（サイトマップ）、「<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">よくある質問</a>」（{CHECKED}）。在庫と価格は変わるため、購入時に公式ストアでご確認ください。
          </p>

          <h2 className="section-title">myFirst Fone R1s の主な特徴（公式ストア・FAQの記載）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {r1sFeatures.map(([k, v]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <th className="p-3 text-left text-g800 w-1/3 bg-blue-light/40">{k}</th>
                    <td className="p-3 text-g700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：myFirst Japan 公式ストア「<a href={STORE_R1S} target="_blank" rel="noopener noreferrer" className="text-blue underline">【処分特価】myFirst Fone R1s</a>」、「<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">よくある質問</a>」（「myFirst Fone R1s」のよくある質問・{CHECKED}）。重さ・電池容量などの数値は、確認した公式ページに記載がなかったため掲載していません。
          </p>

          <h2 className="section-title">使う前に確認したい4つの点</h2>
          <ul className="space-y-3 text-sm text-g700 mb-3">
            <li>
              <strong>1. SIMが必要です</strong>：専用の myFirst FreeSIM（日本で開通した場合 月額980円・データ無制限・電話番号なし）か、公式の対応表にあるドコモ回線・ソフトバンク回線のSIMを用意します。nanoSIM 機種の FreeSIM は、端末を起動する前に公式サイトの「開通・解約ページ」で開通手続きをします。R1 や一部販売店の商品には FreeSIM が付属していない場合があります。
            </li>
            <li>
              <strong>2. 他社SIMの音声通話は動かない場合があります</strong>：公式の対応表では、Y!mobile SIM の音声通話は R1s・R1c で動作しないことを確認したと記載されています（2026年4月時点）。データ通信は動作確認済みのSIMがあります。詳しくは「<Link href="/knowledge/myfirst-fone-sim/" className="text-blue underline">myFirst Fone で使えるSIM</Link>」で整理しています。
            </li>
            <li>
              <strong>3. 保護者のアプリは myFirst Circle です</strong>：旧アプリ「myFirst Fone」はサービスを終了しています。Fone OS に更新した R1・R1s は、Circleアプリで新規アカウントを作成して使います（「<Link href="/knowledge/myfirst-circle/" className="text-blue underline">myFirst Circleアプリとは</Link>」）。
            </li>
            <li>
              <strong>4. 端末のソフトウェアを最新にします</strong>：公式FAQに掲載された最新バージョンは、R1・R1s が 2.1.6、R1c が 2.1.5 です（2026年5月8日時点）。R1・R1s・R1c の保護フィルムは R2 にも貼れますが、R2 の画面より少し小さく、隙間が生じると案内されています。
            </li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：myFirst Japan「<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">よくある質問</a>」「<a href={SIMCARD_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone 対応SIMカード</a>」（{CHECKED}）
          </p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              <strong>ご注意</strong>：本ページは myFirst Japan 公式ページの記載を整理したもので、R1s の在庫・価格は変わる場合があります。販売中の S4・M1 の料金・機能は「<Link href="/review/myfirst-fone/" className="text-blue underline">myFirst Fone のレビュー</Link>」で整理しています。腕時計型のほかの機種は「<Link href="/purpose/watch-type/" className="text-blue underline">腕時計型で選ぶ</Link>」もご覧ください。
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
            出典：myFirst Japan 公式ストア「<a href={STORE_R1S} target="_blank" rel="noopener noreferrer" className="text-blue underline">【処分特価】myFirst Fone R1s</a>」、「<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">よくある質問</a>」「<a href={SIMCARD_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">対応SIMカード</a>」（{CHECKED}）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="mb-6"><MyfirstAffText /></div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/myfirst-fone/" className="btn-primary">myFirst Fone（S4・M1）のレビュー</Link>
              <Link href="/knowledge/myfirst-fone-sim/" className="btn-accent">myFirst Fone で使えるSIM</Link>
              <Link href="/knowledge/myfirst-circle/" className="btn-primary">myFirst Circleアプリ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
