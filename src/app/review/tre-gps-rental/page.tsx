import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'TRE GPS レンタルの料金と端末｜1日3,190円から・4機種の違い・返却期限と延滞料金【2026年11月】',
  description:
    '小型GPSのレンタルサービス「TRE GPS レンタル」を公式の料金表・商品一覧で整理しています。4機種の料金（1日〜365日・税込）と仕様の違い、レンタル期間の数え方と延滞料金をまとめ、日数ごとの1日あたり費用を試算しています。',
  keywords: ['TRE GPS', 'TRE GPS レンタル', 'GPS レンタル', '子供 GPS レンタル', '短期'],
};

const TOP = 'https://rental.tregps.com/';
const PRICE = 'https://rental.tregps.com/price';
const PRODUCT = 'https://rental.tregps.com/product';
const CHECKED = '2026年11月17日確認';

// 公式料金表（税込）。列は Type U / Type U+ / Type S / Type P
const prices: [string, number, number, number, number][] = [
  ['1日', 3190, 5830, 6500, 7500],
  ['3日', 3480, 6200, 7000, 8000],
  ['5日', 3680, 6500, 7500, 8500],
  ['7日', 3880, 7000, 8000, 9000],
  ['10日', 4480, 7500, 8500, 9500],
  ['15日', 5480, 8500, 9000, 11000],
  ['20日', 5880, 9500, 10500, 12500],
  ['30日', 6881, 12000, 13000, 15500],
  ['45日', 8880, 16500, 17000, 18000],
  ['60日', 10700, 19500, 21000, 23000],
  ['90日', 13800, 24000, 25500, 30500],
  ['180日', 22780, 38000, 39500, 45500],
  ['365日', 34700, 56000, 57500, 60500],
];

const yen = (n: number) => `${n.toLocaleString('ja-JP')}円`;

const faqData = [
  {
    q: 'レンタル期間はいつから数えますか？',
    a: '公式サイトでは、商品到着日の翌日からレンタル期間が始まると案内されています。不在で受け取れなかった場合も、レンタル期間は翌日から始まります。使い始める日が決まっている場合は、お届け日の指定が勧められています（2026年11月17日確認）。',
  },
  {
    q: '返却が遅れるとどうなりますか？',
    a: '返却はレンタル期間終了後2日以内の消印有効で、ポスト投函で返却できます。返却期限を過ぎた消印の場合は、1日あたり税込3,300円／台の延滞料金がかかると公式サイトに記載されています。',
  },
  {
    q: '子どもに持たせるならどの機種ですか？',
    a: '公式の商品一覧では、Type U が「サイズ重視」（47×40×17mm・42g）、Type P は「車両専用モデル」（300g）と案内されています。子どもに持たせる用途では、小型の Type U、充電持ちを重視する場合は拡張バッテリー付きの Type U+ が候補になります。Type U+ のサイズ・重さは、確認した比較表に記載がありませんでした。',
  },
  {
    q: '海外でも使えますか？',
    a: 'Type U・Type U+ は、オプションの「海外対応変更」（3,300円）で、全世界160以上の国と地域で使える端末に変更できると案内されています。Type S・Type P は国内のみです。中国では、専用アプリが使う Google マップを利用できない場合があり、VPN対応WiFiの持参が推奨されています。',
  },
  {
    q: '端末をなくした場合の費用は？',
    a: 'オプションの「紛失故障安心パック」に加入すると、端末の弁済金の80〜100％が免除されると案内されています。最低加入料金は5日プランの設定で、30日以上のプランは一律料金です。具体的な金額はお申し込み画面でご確認ください。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function TreGpsRentalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'TRE GPS レンタルの料金と端末', datePublished: '2026-11-17', dateModified: '2026-11-17', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'TRE GPS レンタル' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">レンタル</span>
            <span className="tag-pill bg-blue text-white">短期利用</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">TRE GPS レンタルの料金と端末の選び方</h1>
          <p className="text-g600 text-lg">TRE GPS レンタル公式サイトの料金表・商品一覧の記載をもとに、4機種の料金と仕様、レンタル期間の数え方を整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：最も小さい Type U は1日3,190円・30日6,881円（税込）。月額契約なしで、旅行や行事など期間を決めて使うためのサービスです</h2>
            <p className="text-g600">
              TRE GPS レンタルは、小型GPS端末を<strong>最短1日から</strong>借りられるサービスです。料金は<strong>レンタル期間分だけ</strong>で、公式の料金表では送料・位置検索・サポートは0円からと表示されています。期間は<strong>商品到着日の翌日から</strong>数え、返却は<strong>期間終了後2日以内の消印有効</strong>です。延滞すると1日3,300円／台かかるため、日程に余裕を持ったお届け日の指定が重要です。
            </p>
          </div>

          <h2 className="section-title">4機種の違い</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">項目</th>
                  <th className="p-3 text-left border-b-2 border-blue">Type U（U+）</th>
                  <th className="p-3 text-left border-b-2 border-blue">Type S</th>
                  <th className="p-3 text-left border-b-2 border-blue">Type P</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['公式の位置づけ', 'サイズ重視（U+は汎用性重視・拡張バッテリー付き）', '位置の正確性重視・カードサイズ', '充電長持ち重視・車両専用モデル'],
                  ['サイズ・重さ', '47×40×17mm・42g（Type U）', '86×54×6.5mm・38g', '90×64×34mm・300g'],
                  ['充電持ち（目安）', '最大7日程度（U+は最大30日程度）', '最大10日程度', '最大90日程度'],
                  ['防塵防水', 'Type U：生活防水レベル／U+：IP68相当', 'IP65', 'IP68'],
                  ['海外利用', '可（海外対応端末への変更オプションあり）', '国内のみ', '国内のみ'],
                  ['自動位置更新の間隔', '1分〜240分・オフ', '5秒〜240分・オフ', '1分〜240分・オフ'],
                  ['1日プラン（税込）', 'U 3,190円／U+ 5,830円', '6,500円', '7,500円'],
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
          <p className="text-sm text-g700 mb-3">共通の機能として、履歴の保存1年間、管理者数は無制限、エリア設定5個、移動検知・速度検知・現在地シェア・充電通知・SOS通知が公式の比較表に記載されています。充電持ちはネットワーク環境によって変わります。</p>
          <p className="text-xs text-g400 mb-8">
            出典：TRE GPS レンタル「<a href={PRODUCT} target="_blank" rel="noopener noreferrer" className="text-blue underline">商品一覧（機能比較）</a>」「<a href={TOP} target="_blank" rel="noopener noreferrer" className="text-blue underline">トップページ</a>」（{CHECKED}）
          </p>

          <h2 className="section-title">レンタル料金表（税込）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">期間</th>
                  <th className="p-3 text-right border-b-2 border-blue">Type U</th>
                  <th className="p-3 text-right border-b-2 border-blue">Type U+</th>
                  <th className="p-3 text-right border-b-2 border-blue">Type S</th>
                  <th className="p-3 text-right border-b-2 border-blue">Type P</th>
                </tr>
              </thead>
              <tbody>
                {prices.map(([d, u, up, s, p]) => (
                  <tr key={d} className="border-b border-gray-100">
                    <td className="p-3 font-bold text-g800">{d}</td>
                    <td className="p-3 text-right text-g700">{yen(u)}</td>
                    <td className="p-3 text-right text-g700">{yen(up)}</td>
                    <td className="p-3 text-right text-g700">{yen(s)}</td>
                    <td className="p-3 text-right text-g700">{yen(p)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：TRE GPS レンタル「<a href={PRICE} target="_blank" rel="noopener noreferrer" className="text-blue underline">料金表</a>」（{CHECKED}）。期間限定の割引やオプション料金は含みません。料金は変更される場合があるため、お申し込み時に公式サイトでご確認ください。
          </p>

          <h2 className="section-title">利用日数ごとの1日あたりの費用（Type U・当サイト試算）</h2>
          <p className="text-sm text-g700 mb-3">公式料金表の税込料金を日数で割った値です（円未満四捨五入）。短期ほど1日あたりは割高になり、長く借りるほど下がります。</p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">利用期間</th>
                  <th className="p-3 text-right border-b-2 border-blue">料金（税込）</th>
                  <th className="p-3 text-right border-b-2 border-blue">1日あたり</th>
                  <th className="p-3 text-left border-b-2 border-blue">想定する場面</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1日', 3190, 3190, '遊園地・イベントなど日帰り'],
                  ['3日', 3480, 1160, '帰省・2泊3日の旅行'],
                  ['7日', 3880, 554, '1週間の旅行・林間学校の前後'],
                  ['30日', 6881, 229, '夏休みなどの長期休暇'],
                  ['365日', 34700, 95, '1年間の継続利用'],
                ].map(([a, b, c, d]) => (
                  <tr key={a as string} className="border-b border-gray-100">
                    <td className="p-3 font-bold text-g800">{a}</td>
                    <td className="p-3 text-right text-g700">{yen(b as number)}</td>
                    <td className="p-3 text-right text-g700">約{yen(c as number)}</td>
                    <td className="p-3 text-g700">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-g700 mb-3">1年以上使う見込みがある場合は、購入して月額料金を払う子ども用GPS端末のほうが総額を抑えられる場合があります。購入型の費用は「<Link href="/compare/cost/" className="text-blue underline">子ども用GPSの費用比較</Link>」、短期利用の考え方は「<Link href="/knowledge/summer-short-term/" className="text-blue underline">夏休みなどの短期利用</Link>」で整理しています。</p>
          <p className="text-xs text-g400 mb-8">
            試算の元データ：TRE GPS レンタル「<a href={PRICE} target="_blank" rel="noopener noreferrer" className="text-blue underline">料金表</a>」（{CHECKED}）。場面の例は当サイトが期間の目安として付けたものです。
          </p>

          <h2 className="section-title">申し込みから返却までの流れ</h2>
          <ol className="space-y-2 text-sm text-g700 mb-3 list-decimal pl-5">
            <li>GPS端末・オプション・お届け日を選んで申し込みます。お届け日を指定しない場合は、平日12時までの申し込みで当日出荷（最短翌日着）、12時以降は翌平日の出荷です。出荷は平日のみです。</li>
            <li>端末は初期設定を済ませた状態で届きます。届け先はご自宅以外（親族宅・勤務先・営業所など）も指定できます。</li>
            <li>商品到着日の翌日からレンタル期間が始まります。</li>
            <li>期間終了後2日以内の消印有効で、ポスト投函により返却します。期限を過ぎた消印は1日あたり税込3,300円／台の延滞料金がかかります。</li>
          </ol>
          <p className="text-sm text-g700 mb-3">銀行振込の場合、お届け日を指定したお申し込みは、申込日から3日以内に振込を確認できないと自動キャンセルになると案内されています。</p>
          <p className="text-xs text-g400 mb-8">
            出典：TRE GPS レンタル「<a href={PRICE} target="_blank" rel="noopener noreferrer" className="text-blue underline">料金表（ご利用の流れ）</a>」「<a href={TOP} target="_blank" rel="noopener noreferrer" className="text-blue underline">トップページ</a>」（{CHECKED}）
          </p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              <strong>ご注意</strong>：本ページは TRE GPS レンタル公式サイトの記載を整理したもので、料金・在庫・オプション内容は変更される場合があります。公式サイトには期間限定のキャンペーンも掲載されていますが、対象期間が限られるため本ページの料金表には含めていません。学校への持ち込み可否は、各学校のルールをご確認ください（「<Link href="/knowledge/school-rules/" className="text-blue underline">学校のルール</Link>」）。
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
            出典：TRE GPS レンタル「<a href={TOP} target="_blank" rel="noopener noreferrer" className="text-blue underline">トップページ</a>」「<a href={PRICE} target="_blank" rel="noopener noreferrer" className="text-blue underline">料金表</a>」「<a href={PRODUCT} target="_blank" rel="noopener noreferrer" className="text-blue underline">商品一覧</a>」（{CHECKED}）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/summer-short-term/" className="btn-primary">短期利用の比較</Link>
              <Link href="/purpose/no-contract/" className="btn-accent">縛りなしで選ぶ</Link>
              <Link href="/knowledge/international/" className="btn-primary">海外で使う場合</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
