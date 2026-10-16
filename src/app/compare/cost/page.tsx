import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPSはどれが安い？コスパ・料金比較【2026年】本体＋月額で選ぶ',
  description:
    '子供用GPSは本体価格や月額料金だけで選ぶと、割高になる場合があります。みてねみまもりGPS・あんしんウォッチャー・ソラノメを、本体・月額・初期費用・契約期間・3年総額（TCO）で比較します。兄弟2台目0円・無料月特典・短期利用など、費用を抑えるポイントとFAQも掲載しています。',
  keywords: ['子供GPS', '安い', 'コスパ', '料金', '比較', '総額', 'TCO', '月額'],
};

// 比較表データ：既存比較ページ（compare/school-silent・compare/price）および各機種レビュー
// （review/mitene・review/anshin-watcher・review/soranome）の確認済みデータを転記。
// 料金・初期費用・縛り・3年総額(TCO)は2026年6月時点で各社公式を確認した値（税込）。創作なし。
const costData = [
  {
    name: 'みてねみまもりGPS',
    slug: '/review/mitene/',
    body: '5,280円',
    monthly: '528円（位置情報プラン）',
    initial: 'なし',
    contract: '縛りなし',
    tco: '24,288円',
    note: '本体・月額ともに安く、3機種の中で3年総額が最も安い機種です。1人で使う場合のコストパフォーマンスに優れています。トークPlusプラン（月額748円）は、学校での利用は避けることをおすすめします。',
  },
  {
    name: 'あんしんウォッチャー',
    slug: '/review/anshin-watcher/',
    body: '11,000円',
    monthly: '539円（2台目は0円）',
    initial: 'なし',
    contract: '縛りなし',
    tco: '30,404円',
    note: '本体はやや高めですが、2台目の月額が0円（1つのau IDで最大2台）のため、兄弟2人で使うと1人あたりの費用が最安クラスになります。通常版セットプランには月額無料の特典があります。',
  },
  {
    name: 'ソラノメ',
    slug: '/review/soranome/',
    body: '14,520円',
    monthly: '539円',
    initial: '事務手数料3,300円',
    contract: '縛りなし',
    tco: '37,224円',
    note: '位置精度を重視した位置情報専用機です。本体が高めで、初期事務手数料3,300円がかかるため、費用面では上位2機種に一歩譲ります。',
  },
];

const tipsData = [
  {
    title: '兄弟で使う場合は「2台目0円」を活用する',
    body: 'あんしんウォッチャーは、1つのau IDにつき2台目の月額が0円です。兄弟2人で使うと3年総額は約41,404円（本体11,000円×2＋月額539円×36）＝1人あたり約20,702円となり、1台ずつ別機種を契約するより割安です。',
  },
  {
    title: '「無料月」特典を確認する',
    body: 'あんしんウォッチャーの通常版セットプランは初月を含む12カ月目末日まで月額無料、LEのセットプランは初月無料の特典があります（以降は自動更新で539円/月・2026年6月確認）。契約時に、最新の特典内容を必ずご確認ください。',
  },
  {
    title: '縛りなしを活かして短期間だけ使う',
    body: '主要な子供GPSは契約期間の縛りや解約金がない機種が多く、必要な期間だけ契約して使うことが可能です。夏休みだけ・行事の時期だけといった短期利用であれば、月額×利用月数で総額を抑えられます。短期利用の考え方は、夏休みの短期利用に関する記事もご参照ください。',
  },
  {
    title: '本体だけ・月額だけで決めない（TCOで見る）',
    body: '本体が安くても月額が高ければ長く使うほど割高になり、逆に本体が高くても月額が安ければ長期では逆転します。使う年数（目安3年）の総額＝本体＋月額×利用月数＋初期費用で比較することをおすすめします。',
  },
];

const faqData = [
  {
    q: '子供GPSで一番安いのはどれですか？',
    a: '本体＋月額×36カ月の3年総額（TCO）で比較すると、みてねみまもりGPSが24,288円で最も安くなります。次いで、あんしんウォッチャー（30,404円）、ソラノメ（37,224円・事務手数料3,300円を含む）の順です。1人で使う場合はみてねみまもりGPSが、兄弟2人で使う場合は2台目の月額が0円のあんしんウォッチャーが割安です（2026年6月時点・税込）。',
  },
  {
    q: '本体が安い機種を選べばトータルも安いですか？',
    a: '必ずしもそうではありません。子供GPSは本体代に加えて月額（通信費・サービス利用料）が毎月かかるため、本体が安くても月額が高いと長く使うほど割高になります。逆に、本体が高めでも月額や初期費用が抑えられていれば、長期では有利です。使う年数の総額（TCO）で比較することをおすすめします。',
  },
  {
    q: '初期費用や事務手数料はかかりますか？',
    a: '多くの機種は本体価格のみで、初期費用（事務手数料）は不要です。みてねみまもりGPS・あんしんウォッチャーは初期費用がかからず、ソラノメは初期事務手数料3,300円がかかります（2026年6月確認）。最新の費用は各公式サイトでご確認ください。',
  },
  {
    q: '費用を抑えて使う方法はありますか？',
    a: '(1)兄弟で使うなら2台目の月額が0円になるあんしんウォッチャー、(2)無料月特典のある期間に契約する、(3)契約縛りのない機種が多いので夏休みや行事など必要な期間だけ使う、(4)本体だけ・月額だけで決めず、3年総額（TCO）で比較する、の4点が基本です。',
  },
  {
    q: '短期間だけ使って解約できますか？',
    a: '主要な子供GPSは契約期間の縛りや解約金がない機種が多く、必要な期間だけ契約して解約することが可能です。ただし、一部の機種では最低利用期間が設定されている場合があるため、契約前に各公式サイトで条件をご確認ください。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function CostComparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: '子供GPSはどれが安い？コスパ・料金比較', datePublished: '2026-06-27', dateModified: '2026-06-27', author: { '@type': 'Person', name: '子供見守りGPS最新情報 編集部' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: '比較', href: '/compare/' }, { name: 'コスパ・料金比較' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">コスパ重視</span>
            <span className="tag-pill bg-orange text-white">3年総額で比較</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">子供GPSはどれが安い？コスパ・料金比較</h1>
          <p className="text-g600 text-lg">本体・月額・初期費用を合計した「○年総額（TCO）」で、最も安い機種を比較しています</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          {/* 結論ブロック */}
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">要点：「本体だけ／月額だけ」ではなく、3年総額（TCO）で比較する</h2>
            <p className="text-g600 mb-3">
              子供GPSは本体代に加えて<strong>毎月の月額（通信費・サービス利用料）</strong>がかかります。本体が安くても月額が高いと長く使うほど割高になり、逆に本体が高めでも月額・初期費用が抑えられていれば長期では有利です。そのため、<strong>使う年数（目安3年）の総額＝本体＋月額×利用月数＋初期費用＝TCO</strong>で比較することをおすすめします。
            </p>
            <p className="text-g600 text-sm">
              3年総額で比較すると、1人で使う場合は<strong>みてねみまもりGPSが最安</strong>、兄弟2人で使う場合は<strong>2台目月額0円のあんしんウォッチャー</strong>が割安です。料金は2026年6月時点で各社公式サイトにて確認した値（税込）です。キャンペーンや改定により変わるため、ご利用前に、公式サイトにて最新情報をご確認ください。
            </p>
          </div>

          {/* 料金・総額比較表 */}
          <h2 className="section-title">料金・3年総額（TCO）比較表</h2>
          <p className="text-g600 mb-4 text-sm">本体・月額・初期費用・契約縛り・3年総額（本体＋月額×36カ月）をまとめています。料金は2026年6月時点で各社公式サイトにて確認した値です。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">機種</th>
                  <th className="p-3 text-left border-b-2 border-blue">本体価格</th>
                  <th className="p-3 text-left border-b-2 border-blue">月額</th>
                  <th className="p-3 text-left border-b-2 border-blue">初期費用</th>
                  <th className="p-3 text-left border-b-2 border-blue">契約縛り</th>
                  <th className="p-3 text-left border-b-2 border-blue">3年総額（目安）</th>
                </tr>
              </thead>
              <tbody>
                {costData.map((m) => (
                  <tr key={m.name} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800 whitespace-nowrap"><Link href={m.slug} className="text-blue underline">{m.name}</Link></td>
                    <td className="p-3 text-g700 whitespace-nowrap">{m.body}</td>
                    <td className="p-3 text-g700 whitespace-nowrap">{m.monthly}</td>
                    <td className="p-3 text-g700 whitespace-nowrap">{m.initial}</td>
                    <td className="p-3 text-g700 whitespace-nowrap">{m.contract}</td>
                    <td className="p-3 font-bold text-orange whitespace-nowrap">{m.tco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">※3年総額＝本体価格＋月額×36カ月（ソラノメは初期事務手数料3,300円を加算）で算出した目安です。送料・キャンペーン割引・無料月特典は含みません。料金はすべて税込で、2026年6月時点で各社公式サイトにて確認しています。最新の料金・プランは公式サイトでご確認ください。記載のない費用や条件についても、事前にご確認ください。</p>

          {/* 兄弟利用の補足 */}
          <div className="card-hover p-5 mb-8 bg-green-light/40">
            <h3 className="font-bold text-g800 mb-2">兄弟で使うなら「あんしんウォッチャー」が割安</h3>
            <p className="text-sm text-g600">あんしんウォッチャーは<strong>2台目の月額が0円</strong>（1つのau IDで2台まで）です。兄弟2人で使うと3年総額は約41,404円（本体11,000円×2＋月額539円×36）＝<strong>1人あたり約20,702円</strong>となり、1台ずつ別機種を持つより割安です。1人で使う場合は、みてねみまもりGPSが最安です。</p>
          </div>

          {/* 各機種のコスパポイント */}
          <h2 className="section-title">各機種の「コスパ」ポイント</h2>
          <div className="space-y-3 mb-8">
            {costData.map((m) => (
              <div key={m.name} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1"><Link href={m.slug} className="text-blue underline">{m.name}</Link>（3年総額：{m.tco}）</h3>
                <p className="text-sm text-g600">{m.note}</p>
              </div>
            ))}
          </div>

          {/* 安く使うコツ */}
          <h2 className="section-title">子供GPSの費用を抑える4つのポイント</h2>
          <div className="space-y-3 mb-4">
            {tipsData.map((t) => (
              <div key={t.title} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{t.title}</h3>
                <p className="text-sm text-g600">{t.body}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-g500 mb-8">※無料月特典・キャンペーン・契約条件は時期により変わります。最新の内容は、必ず各公式サイトでご確認ください（2026年6月確認）。</p>

          {/* FAQ */}
          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          {/* 相互リンク */}
          <div className="mt-10">
            <h3 className="font-bold text-g800 mb-4">用途別にもっと比較する</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/compare/after-school/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">学童・習い事の行き帰り比較</p>
                <p className="text-xs text-g600">一人で通うお子さまの見守りに</p>
              </Link>
              <Link href="/compare/school-silent/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">学校向け静音GPS比較</p>
                <p className="text-xs text-g600">音が鳴らない機種を3年総額で比較しています</p>
              </Link>
              <Link href="/compare/battery-life/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">電池持ち比較</p>
                <p className="text-xs text-g600">充電頻度が少ない機種ランキング</p>
              </Link>
              <Link href="/compare/school-trip/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">遠足・修学旅行向け比較</p>
                <p className="text-xs text-g600">行事に持たせる機種を比較しています</p>
              </Link>
              <Link href="/compare/2026-ranking/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">総合ランキング</p>
                <p className="text-xs text-g600">2026年の総合おすすめ</p>
              </Link>
              <Link href="/knowledge/cost-annual/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">年間コストの基礎知識</p>
                <p className="text-xs text-g600">初期費用と月額の総まとめ</p>
              </Link>
            </div>
          </div>

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">機種ごとの詳細を見る</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/mitene/" className="btn-primary">みてねみまもりGPS</Link>
              <Link href="/review/anshin-watcher/" className="btn-accent">あんしんウォッチャー</Link>
              <Link href="/review/soranome/" className="btn-primary">ソラノメ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
