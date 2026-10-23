import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供用GPSの大きさ・重さ比較【2026年10月】10機種の公式サイズ一覧｜最軽量は39g',
  description:
    '子供用GPS10機種の大きさ（mm）・重さ（g）・電池持ち・防水等級を、2026年10月19日に各社公式サイトで確認して一覧にしました。位置情報専用のポケット型の多くは約50mm四方で、重さは39〜64gです。重さと電池持ちの関係、500円玉との比較も解説します。',
  keywords: ['子供GPS', 'サイズ', '重さ', '比較', '大きさ', '軽量', 'コンパクト'],
  openGraph: {
    images: ['/og.png'],
    title: '子供用GPSの大きさ・重さ比較【2026年10月】10機種の公式サイズ一覧',
    description: '子供用GPS10機種の大きさ・重さ・電池持ち・防水等級を、各社公式サイトの仕様で比較しています。',
  },
};

const CHECKED = '2026年10月19日';

const faqData = [
  { q: '子供用GPSの大きさはどのくらいですか？', a: '位置情報専用のポケット型は、多くが縦横約50mm（49〜52mm）・厚み15〜22mmです（2026年10月19日に各社公式サイトで確認したポケット型7機種のうち6機種。conecoは43×106mmの縦長です）。500円玉（直径26.5mm）を縦横2枚ずつ並べた程度の大きさです。トーク機能付きで画面のあるみてねみまもりGPSトークPlus（50×98.2×20mm）や、スマートフォン型のHamic POCKET L（専用ケース込みで約57.6×106.5×24.2mm）は縦に長い形です。' },
  { q: '一番軽いGPS端末はどれですか？', a: '2026年10月19日時点で公式に重さが公表されている機種のうち、販売中で最も軽いのは「まもサーチ3」（約39g）です。同じ39gのsoranomeは2026年3月31日で新規受付を終了しています。次いでmyFirst Fone R2（約48g）、あんしんウォッチャー（約53g）、BoTトーク（約58g）の順です。' },
  { q: '軽いGPSほど電池が持たないのですか？', a: '今回比較した10機種では、重さと電池持ちに一貫した関係は見られませんでした。最も軽い部類のまもサーチ3（約39g）は電池長持ちモードで最大2か月と公表されている一方、64gのconecoは約4日程度です。電池持ちは位置情報の更新間隔の設定で大きく変わるため、各社が公表している条件（モード）をあわせてご確認ください。' },
  { q: 'みてねみまもりGPSの重さは？', a: '現行のお知らせボタン搭載モデル（MG05）は約61g、トーク（MT05）は約63g、防犯ブザーと画面を備えたトークPlus（MB06）は約89gです（みてねみまもりGPS公式の仕様ページ）。以前の第3世代（2023年発売）は約56gでした。' },
  { q: 'ランドセルのどこに入れるのが適していますか？', a: 'GPSの電波は金属や体に遮られやすいため、ランドセルの底よりも、上部や前ポケットなど外側に近い位置に入れることをおすすめします。入れる場所は、各機種の取扱説明書の案内もあわせてご確認ください。' },
  { q: '腕時計型GPSのサイズ感はどうですか？', a: 'myFirst Fone R2は公式で厚さ13.6mm・重さ約48gと公表されています（縦横の寸法は公式に記載がありません）。腕時計型は学校によって持ち込みが禁止されている場合があるため、事前にご確認ください。' },
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

// 2026-10-19 各社公式サイトで確認。重さの軽い順
const sizeData = [
  { name: 'まもサーチ3', size: '49×49×15.5', weight: '約39g', w: 39, type: 'ポケット型', battery: '最大2か月（電池長持ちモード）', water: 'IP65', src: 'https://mamosearch.jp/function/', status: '' },
  { name: 'soranome', size: '51×51×15', weight: '約39g', w: 39, type: 'ポケット型', battery: '最大1週間', water: 'IP55', src: 'https://soranome.net/', status: '2026年3月31日で新規受付終了' },
  { name: 'myFirst Fone R2', size: '厚さ13.6（縦横は公式記載なし）', weight: '約48g', w: 48, type: '腕時計型', battery: '連続通話 約6時間', water: 'IPX8', src: 'https://jp.myfirst.tech/products/myfirst-fone-r2', status: '' },
  { name: 'あんしんウォッチャー', size: '約50×50×18.8', weight: '約53g', w: 53, type: 'ポケット型', battery: '最大2カ月', water: 'IP55', src: 'https://www.au.com/life/auhome/device/uha01a/', status: '' },
  { name: 'BoTトーク（第6世代）', size: '50×50×21', weight: '約58g', w: 58, type: 'ポケット型', battery: 'GPSプラン 最長1ヶ月以上（電池優先モード）', water: '生活防水・防塵（等級の記載なし）', src: 'https://www.bsize.com/bot/talk', status: '' },
  { name: 'みてねみまもりGPS（MG05）', size: '50×50×22', weight: '約61g', w: 61, type: 'ポケット型', battery: '最大2ヶ月（省エネモード）', water: 'IP55', src: 'https://mitene.us/gps/spec', status: '' },
  { name: 'みもりGPSトーク（MR-03B）', size: '52×52×22', weight: '約62g', w: 62, type: 'ポケット型', battery: '最大2ヶ月（エコモード）', water: 'IPX5', src: 'https://machicomi.jp/mimori/spec.html', status: '' },
  { name: 'coneco', size: '43×106×16', weight: '約64g', w: 64, type: 'ポケット型（縦長）', battery: '約4日程度', water: 'IPX3相当', src: 'https://www.carmate.jp/coneco/', status: '新規販売終了' },
  { name: 'みてねみまもりGPS トークPlus（MB06）', size: '50×98.2×20', weight: '約89g', w: 89, type: '画面付き', battery: '最大約3週間（ボイスメッセージ付きプラン）', water: 'IP54', src: 'https://mitene.us/gps/spec', status: '' },
  { name: 'Hamic POCKET L', size: '約57.6×106.5×24.2（専用ケース込み）', weight: '約151.8g（ケース・電池込み）', w: 151.8, type: 'スマートフォン型', battery: '約1.5日が目安', water: 'IP64（ケース装着時）', src: 'https://hamic.ai/collections/hamic-pocket/products/hamic-pocket-l-%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88', status: '公式ストアは全色売り切れ（10/19時点）' },
];

const coin500 = 7.1; // 500円硬貨（2021年発行）の質量 7.1g・直径26.5mm（造幣局）

const weightCategories = [
  { category: '40g以下', models: ['まもサーチ3（39g）', 'soranome（39g・新規受付終了）'], note: '販売中の機種ではまもサーチ3が最軽量です。500円玉約5.5枚分の重さです。' },
  { category: '40〜60g', models: ['myFirst Fone R2（48g）', 'あんしんウォッチャー（53g）', 'BoTトーク（58g）'], note: '腕時計型のmyFirst Fone R2もこの区分です。あんしんウォッチャーとBoTトークは、ほぼ同じ縦横約50mmの大きさです。' },
  { category: '60〜70g', models: ['みてねみまもりGPS MG05（61g）', 'みもりGPSトーク（62g）', 'coneco（64g・新規販売終了）'], note: 'みてねとみもりは最大2ヶ月の電池持ちを公表している機種です。厚みは22mmと、今回の比較では厚めです。' },
  { category: '80g以上', models: ['みてねみまもりGPS トークPlus（89g）', 'Hamic POCKET L（151.8g・ケース込み）'], note: '画面や防犯ブザーを備えた機種です。ポケットよりもランドセルやカバンへの収納に向いています。' },
];

export default function SizeWeightPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供用GPSの大きさ・重さ比較｜10機種の公式サイズ一覧", "datePublished": "2026-03-15", "dateModified": "2026-10-19", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '比較', href: '/compare/' }, { name: 'サイズ・重さ比較' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">サイズ比較</span>
            <span className="tag-pill bg-blue text-white">10機種・公式仕様</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供用GPSの大きさ・重さ比較
          </h1>
          <p className="text-g600 text-lg">10機種の大きさ・重さ・電池持ち・防水等級を、各社公式サイトの仕様で比較しています（{CHECKED}確認）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border-l-4 border-blue bg-blue-light/40 p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">位置情報専用のポケット型の多くは「縦横約50mm・厚み15〜22mm」、重さは39〜64gです</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>販売中で最も軽い</strong>のは<strong>まもサーチ3（約39g）</strong>です。次いでmyFirst Fone R2（約48g）、あんしんウォッチャー（約53g）です。</li>
              <li>・<strong>最も薄い</strong>ポケット型は<strong>soranome（15mm・新規受付終了）</strong>と<strong>まもサーチ3（15.5mm）</strong>です。みてねみまもりGPS（MG05）とみもりGPSトークは22mmです。</li>
              <li>・<strong>重さと電池持ちは比例しません</strong>。39gのまもサーチ3は最大2か月、64gのconecoは約4日程度と公表されています。</li>
              <li>・画面付きのトークPlus（約89g）やスマートフォン型のHamic POCKET L（約151.8g・ケース込み）は、ポケット型より大きく重い機種です。</li>
            </ul>
            <p className="text-xs text-g500 mt-3">出典：各社公式サイトの仕様ページ（下表の「公式」リンク、{CHECKED}確認）。当サイトが以前掲載していた値（2026年5月時点）は、多くの機種で現在の公式値と異なっていたため、{CHECKED}に全面的に改めました。</p>
          </div>

          <h2 className="section-title">10機種の大きさ・重さ比較表</h2>
          <p className="text-sm text-g500 mb-3">※ {CHECKED}に各社公式サイトで確認した値です。重さの軽い順に掲載しています。電池持ちは各社が公表している最大値と条件（モード）です。</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-2 text-left font-bold text-g800">機種名</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">タイプ</th>
                  <th className="py-3 px-2 text-left font-bold text-g800">大きさ(mm)<br />縦×横×厚み</th>
                  <th className="py-3 px-2 text-right font-bold text-g800">重さ</th>
                  <th className="py-3 px-2 text-left font-bold text-g800">電池持ち（公式）</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">防水</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">出典</th>
                </tr>
              </thead>
              <tbody>
                {sizeData.map((d) => (
                  <tr key={d.name} className="border-b border-g100 align-top">
                    <td className="py-3 px-2 font-semibold text-g700">{d.name}{d.status && <span className="block text-xs font-normal text-orange">{d.status}</span>}</td>
                    <td className="py-3 px-2 text-center text-g600">{d.type}</td>
                    <td className="py-3 px-2 text-g600">{d.size}</td>
                    <td className="py-3 px-2 text-right font-bold text-g800 whitespace-nowrap">{d.weight}</td>
                    <td className="py-3 px-2 text-g600">{d.battery}</td>
                    <td className="py-3 px-2 text-center text-g600">{d.water}</td>
                    <td className="py-3 px-2 text-center"><a href={d.src} target="_blank" rel="noopener noreferrer" className="text-blue underline">公式</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">500円玉と比べた重さ</h2>
          <p className="text-g600 mb-3 text-sm">500円硬貨（2021年発行）は直径26.5mm・質量7.1gです（造幣局）。各機種の重さを500円玉の枚数に置き換えると、次のとおりです（当サイト算出）。</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">機種名</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">重さ</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">500円玉換算</th>
                </tr>
              </thead>
              <tbody>
                {sizeData.map((d) => (
                  <tr key={d.name} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{d.name}</td>
                    <td className="py-3 px-3 text-right text-g600">{d.w}g</td>
                    <td className="py-3 px-3 text-right text-g600">約{(d.w / coin500).toFixed(1)}枚分</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">重さ別の区分</h2>
          <div className="space-y-4 mb-8">
            {weightCategories.map((wc) => (
              <div key={wc.category} className="card-hover p-5">
                <h3 className="font-bold text-g800 text-lg mb-2">{wc.category}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {wc.models.map((m) => (
                    <span key={m} className="tag-pill bg-blue-light text-g700 text-xs">{m}</span>
                  ))}
                </div>
                <p className="text-sm text-g600">{wc.note}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">サイズ・重さで選ぶポイント</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: '', title: '軽さを優先するなら40g前後', desc: '販売中のポケット型ではまもサーチ3（約39g）が最も軽く、あんしんウォッチャー（約53g）が続きます。幼児や低学年で、持たせる位置が服のポケットになる場合の候補です。' },
              { icon: '', title: '電池持ちは重さではなくモードで比べる', desc: '公表値は「電池長持ちモード」「省エネモード」など条件つきの最大値です。位置の更新間隔を短くすると電池持ちは短くなるため、同じ条件どうしで比べることをおすすめします。' },
              { icon: '', title: '厚みは15〜22mmの幅がある', desc: 'ズボンや上着のポケットに入れる場合は、15mm台のまもサーチ3が薄型です。ランドセルやカバンに入れる場合は、22mmの機種でも大きな差はありません。' },
              { icon: '⌚', title: '腕時計型・画面付きは学校ルールを確認', desc: '腕時計型や画面付きの機種は、サイズよりも先に学校への持ち込みルールをご確認ください。禁止されている場合は、画面のないポケット型をお選びください。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <div>
                  <h3 className="font-bold text-g800">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">サイズ・重さから選ぶGPS端末</h2>
            <p className="text-g600 mb-6 text-sm">お子さまの年齢や使い方に合ったサイズの端末をお選びください。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/battery-life/" className="btn-primary">電池持ちで比較</Link>
              <Link href="/compare/price/" className="btn-accent">月額料金比較</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-primary">GPS選び方ガイド</Link>
            </div>
          </div>

          <p className="text-xs text-g400 mt-6 text-center">最終更新: {CHECKED}</p>
        </div>
      </section>
    </>
  );
}
