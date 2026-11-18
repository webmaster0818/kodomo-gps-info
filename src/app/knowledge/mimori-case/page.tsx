import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'みもりGPSトークのケース｜公式PUレザー・シリコンケースの価格・色・対応型番と、ケースだけ買う方法【2026年11月】',
  description:
    'みもりGPSトークの専用ケースを公式ストア・公式サイト・公式FAQの記載で整理しています。PUレザーケース（4色）とシリコンケース（2色）の価格・サイズ・付属品、対応型番（MR-03A/B）、旧モデルに使えない点、ケースだけをアプリから購入する手順をまとめています。',
  keywords: ['みもりGPSトーク', 'ケース', 'みもり ケース', 'PUレザーケース', 'シリコンケース', 'ランドセル'],
};

const ACC_URL = 'https://machicomi.jp/mimori/accessories.html';
const STORE_URL = 'https://mimori.machicomi.jp/contents/order_2026/';
const PUL_URL = 'https://mimori.machicomi.jp/contents/order_2026/?Dtpl=spec_index&item=pulether&color=l-bblue';
const SIL_URL = 'https://mimori.machicomi.jp/contents/order_2026/?Dtpl=spec_index&item=silicon&color=s-ramune';
const SINGLE_URL = 'https://faq.mimori-ai.jp/695408-';
const SPEC_URL = 'https://machicomi.jp/mimori/spec.html';
const CHECKED = '2026年11月18日確認';

const faqData = [
  {
    q: 'ケースは本体に付いてきますか？',
    a: '付いてきません。公式サイトでは「専用ケース別売」と案内されています。公式ストアでは本体と同時に購入でき、PUレザーケースは税込1,980円、シリコンケースは税込1,848円です（2026年11月18日確認）。',
  },
  {
    q: 'ケースだけを買うことはできますか？',
    a: '公式ストア（Web）ではケースの単体販売は行っておらず、ケースをカートに入れると本体も追加されます。すでに本体をお持ちの方は、公式FAQによると、みもりアプリのトップ「+追加」→「あたらしく『みもりGPS』を購入する」→「専用ケースを購入」から、契約中のモデルを選んで購入できます。代金は月額費用の請求先のクレジットカードに請求され、1個につき送料350円（全国一律）がかかると記載されています。',
  },
  {
    q: '旧モデルのみもりGPSにも使えますか？',
    a: '使えません。公式ストアの商品説明では、PUレザーケース・シリコンケースともに「みもりGPS第3世代モデル（型番：MR-03A/B）専用」で、旧モデル（型番：MR-01A/B、MR-02A）には使用できないと記載されています。アプリから購入する際も、ご自身の端末のモデルを必ず確認するよう案内されています。',
  },
  {
    q: 'ケースに入れたまま充電やボタン操作はできますか？',
    a: 'できます。公式ストアの商品説明に、ケースに入れたまま充電でき、ボタンの操作とおしらせランプの確認ができると記載されています。公式サイトでは、音声時計もケースに入れたまま確認できると案内されています。',
  },
  {
    q: 'ランドセルに付けるならどちらのケースが合いますか？',
    a: '公式の説明では、PUレザーケースは「ランドセルの肩紐にピッタリフィット」で、金属のフックと裏側のマジックテープ・滑り止めで肩紐に取り付ける作りです。シリコンケースはカラビナでランドセルやカバンに付けられ、付属のストラップで首や肩から下げることもできる2WAYタイプです。登下校中心ならPUレザー、放課後の外遊びやお出かけにも使うならシリコン、という使い分けが公式の説明から読み取れます。',
  },
  {
    q: 'ケースの保証はありますか？',
    a: '公式ストアの商品説明では、いずれのケースも保証は購入日から3ヶ月間（自然破損に限る）と記載されています。なお、ケースは本体の保護を保証するものではないと注記されています。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function MimoriCasePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'みもりGPSトークのケース', datePublished: '2026-11-18', dateModified: '2026-11-18', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'みもりGPSトークのケース' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">アクセサリー</span>
            <span className="tag-pill bg-blue text-white">みもりGPSトーク</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">みもりGPSトークの専用ケースの選び方と購入方法</h1>
          <p className="text-g600 text-lg">みもりGPSの公式サイト・公式ストア・公式FAQの記載をもとに、専用ケース2種類の違いと、ケースだけを購入する方法を整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：公式ケースは「PUレザー」と「シリコン」の2種類です。いずれも第3世代（MR-03A/B）専用で、本体とは別売りです</h2>
            <p className="text-g600">
              みもりGPSトークの公式ケースは、ランドセルの肩紐に付ける<strong>PUレザーケース（税込1,980円・4色）</strong>と、カラビナとストラップで付け方を選べる<strong>シリコンケース（税込1,848円・2色）</strong>の2種類です（公式ストア価格・{CHECKED}）。どちらも<strong>旧モデル（MR-01A/B、MR-02A）には使えません</strong>。公式ストアではケースだけの購入はできず、本体をお持ちの方は<strong>みもりアプリから単品で購入</strong>します。
            </p>
          </div>

          <h2 className="section-title">公式ケース2種類の比較</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">項目</th>
                  <th className="p-3 text-left border-b-2 border-blue">PUレザーケース</th>
                  <th className="p-3 text-left border-b-2 border-blue">シリコンケース</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['公式ストア価格（本体と同時購入）', '1,800円（税込1,980円）', '1,680円（税込1,848円）'],
                  ['カラー', 'プレミアムブラック、ロイヤルブルー、ベビーブルー、チェリーピンク', 'ラムネ、ピーチ'],
                  ['取り付け方', '上部の金属フック＋裏側のマジックテープ・滑り止めでランドセルの肩紐に固定', 'カラビナでランドセル・カバン・ベルトループに取り付け。付属ストラップで首や肩から下げられる'],
                  ['フタ・本体の保持', 'フタはマジックテープで開閉', '本体をシリコンで包むタイプ。全方位の衝撃から守ると説明'],
                  ['サイズ（商品詳細ページ）', '横55mm×縦58.5mm×幅26mm（フック除く）／ベルト横145mm×縦28mm', '横56mm×縦63mm×幅25mm（カラビナ除く）'],
                  ['付属品', 'PUレザーケース本体', 'ケース本体、アジャスター付ストラップ（反射材織り込み）、カラビナ（装着済）、リング'],
                  ['型番（例）', 'MRC-L03BB（ベビーブルー）', 'MRC-S03R02（ラムネ）'],
                  ['対応機種', '第3世代（MR-03A/B）専用', '第3世代（MR-03A/B）専用'],
                  ['ケースの保証', '購入日から3ヶ月（自然破損に限る）', '購入日から3ヶ月（自然破損に限る）'],
                ].map(([k, a, b]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <th className="p-3 text-left text-g800 w-1/4 bg-blue-light/40">{k}</th>
                    <td className="p-3 text-g700">{a}</td>
                    <td className="p-3 text-g700">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-3">
            出典：みもりストア「<a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">ストアトップ</a>」「<a href={PUL_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">PUレザーケース 製品詳細</a>」「<a href={SIL_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">シリコンケース 製品詳細</a>」、みもりGPS公式「<a href={ACC_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">専用ケース</a>」（{CHECKED}）
          </p>
          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              <strong>サイズの記載について</strong>：公式サイトの「専用ケース」ページでは、PUレザーケースが50mm×54mm×23mm、シリコンケースが55mm×63mm×25mmと記載されており、ストアの商品詳細ページの数値と異なります（{CHECKED}）。いずれのページも「記載サイズは目安」と注記しています。本体のサイズは52mm×52mm×22mm・重さ62gです（<a href={SPEC_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">製品仕様</a>）。
            </p>
          </div>

          <h2 className="section-title">ケースだけを購入する方法（本体をお持ちの方）</h2>
          <p className="text-sm text-g700 mb-3">公式ストア（Web）ではケースの単体販売を行っていないため、ケースをカートに入れると本体も自動で追加されます。公式FAQでは、アプリから単品で購入する手順が次のように案内されています。</p>
          <ol className="space-y-2 text-sm text-g700 mb-3 list-decimal pl-6">
            <li>みもりアプリのトップ画面で「+追加」をタップします。</li>
            <li>「あたらしく『みもりGPS』を購入する」をタップします。</li>
            <li>「専用ケースを購入」をタップします。</li>
            <li>ご自身が契約しているモデルを選び、「決定」をタップします（モデルの選び間違いが増えているため、アイコンと手元の端末を必ず確認するよう注記があります）。</li>
          </ol>
          <ul className="space-y-1 text-sm text-g700 mb-3">
            <li>・代金は、月額費用の請求先として登録しているクレジットカードに請求されます。</li>
            <li>・発送は正式受注後、2〜3営業日が目安です。</li>
            <li>・送料は1個につき350円（全国一律）です。</li>
          </ul>
          <div className="card-hover p-5 mb-3 bg-orange-light/40">
            <p className="text-sm text-g700">
              <strong>アプリ購入時の価格について</strong>：公式FAQの在庫・価格欄（2024年7月18日更新）には、みもりGPSトーク用のレザーケースが税込1,848円、シリコンケースが税込1,628円（いずれも送料別）と記載されており、公式ストアの価格（税込1,980円・1,848円）と異なります。FAQの更新日が古いため、実際の価格はアプリの購入画面でご確認ください。同じ欄には、全端末共通の防水ケースも掲載されています。
            </p>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：みもりGPS FAQ「<a href={SINGLE_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">ケースの購入について</a>」、みもりストア「<a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">ストアトップ</a>」（{CHECKED}）
          </p>

          <h2 className="section-title">ケースを選ぶときの確認ポイント</h2>
          <p className="text-sm text-g700 mb-3">公式の記載から、購入前に確認しておきたい点を当サイトで整理しました。</p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">確認すること</th>
                  <th className="p-3 text-left border-b-2 border-blue">公式の記載</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['手元の端末の型番', 'ケースは MR-03A/B 専用。MR-01A/B・MR-02A には使用不可'],
                  ['主な使い方', '登下校でランドセルの肩紐に付けるならPUレザー。カバンやベルトループ、首掛けにも使うならシリコン'],
                  ['充電・操作', 'どちらもケースに入れたまま充電・ボタン操作・ランプ確認が可能'],
                  ['雨の日', '本体は生活防水IPX5（製品仕様）。ケースの防水性能は公式に記載がありません'],
                  ['購入経路', '本体と同時なら公式ストア、ケースだけならみもりアプリ'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800 w-1/3">{k}</td>
                    <td className="p-3 text-g700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：みもりストア「<a href={PUL_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">PUレザーケース</a>」「<a href={SIL_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">シリコンケース</a>」、みもりGPS公式「<a href={SPEC_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">製品仕様</a>」（{CHECKED}）をもとに当サイトで作成
          </p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              <strong>ご注意</strong>：本ページは公式ページの記載を整理したもので、汎用ケースの適合は確認していません。価格・在庫・カラーは変わる場合があります。料金や機能の全体像は「<Link href="/review/mimori/" className="text-blue underline">みもりGPSトークのレビュー</Link>」、他の機種のケースは「<Link href="/knowledge/anshin-watcher-cover/" className="text-blue underline">あんしんウォッチャーのケース・カバー</Link>」をご覧ください。
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
            出典：みもりGPS公式「<a href="https://machicomi.jp/mimori/" target="_blank" rel="noopener noreferrer" className="text-blue underline">トップ</a>」「<a href={ACC_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">専用ケース</a>」、みもりストア「<a href={PUL_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">PUレザーケース</a>」「<a href={SIL_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">シリコンケース</a>」、FAQ「<a href={SINGLE_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">ケースの購入について</a>」（{CHECKED}）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/mimori/" className="btn-primary">みもりGPSトークのレビュー</Link>
              <Link href="/knowledge/randoseru-gps/" className="btn-accent">GPSをランドセルに入れる意味</Link>
              <Link href="/knowledge/loss/" className="btn-primary">GPS端末の紛失対策</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
