import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '学童・習い事の行き帰りに子供GPS比較【2026年】一人で通う見守りにおすすめ',
  description:
    '学童・塾・習い事へお子さまが一人で通う際の見守りに適した子供GPSを比較します。複数の拠点間の移動を見守るには、エリア通知（到着・出発の自動通知）・移動履歴・電池持ちが重要です。みてねみまもりGPS・あんしんウォッチャー・ソラノメ（販売終了）を観点別に比較し、よくある質問もまとめています。',
  keywords: ['子供GPS', '学童', '習い事', '塾', '一人で通う', '放課後', '行き帰り', '比較'],
};

// 比較表データ：既存比較ページ（compare/battery-life・compare/school-silent）および各機種レビュー
// （review/mitene・review/anshin-watcher・review/soranome）の確認済みデータを転記。
// エリア通知・移動履歴・電池持ち・月額は2026年6月時点で各社公式を確認した値（税込）。創作なし。
const afterSchoolData = [
  {
    name: 'みてねみまもりGPS',
    slug: '/review/mitene/',
    arrival: '◎ エリア通知（到着・出発を自動通知）',
    history: '◎ 移動履歴を自動記録',
    battery: '最大約2カ月',
    monthly: '528円（位置情報プラン）',
    note: '学校・自宅・学童などを登録すると、到着・出発を自動で通知します。電池持ちが長く、充電忘れの影響を受けにくい機種です。1人で利用する場合は、総額も最安クラスです。',
  },
  {
    name: 'あんしんウォッチャー',
    slug: '/review/anshin-watcher/',
    arrival: '◎ エリア通知あり',
    history: '◎ 移動履歴あり',
    battery: '最大約2カ月',
    monthly: '539円（2台目は0円）',
    note: '位置確認・エリア通知・移動履歴に特化した機種です。電池持ちが長く、複数拠点を回る放課後の見守りでも安定して使えます。兄弟2人で使う場合は、2台目の月額が0円のため割安です。',
  },
  {
    name: 'ソラノメ（販売終了）',
    slug: '/review/soranome/',
    arrival: 'エリア通知あり',
    history: '移動履歴あり',
    battery: '最大約1週間',
    monthly: '539円',
    note: '2026年4月1日付の公式告知で現行端末の販売が終了しています（2026年10月17日 公式確認）。新規の購入はできません。既にお持ちの場合、エリア通知・移動履歴に対応しており、電池持ちは上記2機種より短いため、こまめな充電が前提です。',
  },
];

const pointData = [
  {
    title: 'エリア通知（到着・出発の自動通知）',
    body: '学童・塾・習い事の教室・自宅などをエリアとして登録しておくと、お子さまがそこに「到着した」「出発した」タイミングで、スマートフォンに自動で通知が届きます。仕事中でも手を止めずに行き帰りを把握でき、放課後の複数拠点の移動を見守るうえで最も重要な機能です。今回比較した3機種は、いずれも対応しています。',
  },
  {
    title: '移動履歴（通った道・寄り道の確認）',
    body: '当日どのルートを通ったか、寄り道をしていないかを後から確認できます。学童から習い事へお子さまが自分で移動するような場合に、いつもと異なる動きにすぐ気付くことができます。3機種とも移動履歴に対応しています。',
  },
  {
    title: '電池持ち（充電頻度）',
    body: '放課後の見守りは毎日のことのため、充電忘れによって位置が分からなくなる事態は避ける必要があります。位置情報専用のみてねみまもりGPS・あんしんウォッチャーは最大約2カ月（みてねはMG05・省エネモード時）と長持ちで、充電の手間が少なく済みます。詳しくは電池持ち比較ページもご覧ください。',
  },
];

const faqData = [
  {
    q: '学童・習い事に通う子供にGPSは必要ですか？',
    a: 'お子さまが一人で学童・塾・習い事へ通い始めると、保護者が付き添えない行き帰りの時間が増えます。子供GPSがあれば、到着・出発の自動通知や移動履歴によって「いま到着したか」「無事に帰宅しているか」を把握でき、放課後の見守りの安心につながります。必要かどうかは、通う距離・時間帯・お子さまの年齢をもとにご判断ください。',
  },
  {
    q: '放課後の見守りで重視すべき機能は？',
    a: '(1)エリア通知（学童・習い事・自宅への到着・出発を自動通知）、(2)移動履歴（通ったルートの確認）、(3)電池持ち（毎日使うため、充電頻度が少ないほど安心）の3点が重要です。今回比較した3機種は、いずれもエリア通知・移動履歴に対応しています。',
  },
  {
    q: '学童・習い事の行き帰りにおすすめの機種は？',
    a: 'エリア通知・移動履歴に対応し、電池持ちが最大約2カ月（みてねはMG05・省エネモード時）と長いみてねみまもりGPS・あんしんウォッチャーをおすすめします。兄弟で複数の習い事に通う場合は、2台目の月額が0円になるあんしんウォッチャーが割安です。なお、ソラノメは2026年4月1日付の公式告知で現行端末の販売を終了しています（2026年10月17日 公式確認）。',
  },
  {
    q: '習い事の教室に着いたら自動で通知が来ますか？',
    a: 'はい。教室や学童をエリアとして登録しておくと、お子さまがそのエリアに出入りしたタイミングで、保護者のスマートフォンに自動で通知が届きます（エリア通知）。仕事中でも「到着した」「出発した」がリアルタイムに分かるため、複数拠点を回る放課後の見守りに適しています。',
  },
  {
    q: '通話機能はあった方がいいですか？',
    a: '行き帰りの「位置の見守り」のみが目的であれば、通話・トーク機能のない位置情報専用機で十分で、電池持ちも長くなります。お子さまと連絡を取り合いたい場合は、トーク・通話機能付きの機種が便利です。ただし、その分電池の消費が増え、学校では敬遠されやすい点にご注意ください。用途に合わせてお選びください。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function AfterSchoolComparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: '学童・習い事の行き帰りに子供GPS比較', datePublished: '2026-06-27', dateModified: '2026-06-27', author: { '@type': 'Person', name: '子供見守りGPS最新情報 編集部' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: '比較', href: '/compare/' }, { name: '学童・習い事向けGPS比較' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">放課後の見守り</span>
            <span className="tag-pill bg-orange text-white">学童・習い事</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">学童・習い事の行き帰りに子供GPS比較</h1>
          <p className="text-g600 text-lg">一人で通うお子さまの見守りに適した機種を、到着通知・移動履歴・電池持ちの観点で比較します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          {/* 結論ブロック */}
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">放課後・複数拠点の移動を見守る機種は「エリア通知・移動履歴・電池持ち」で選ぶことをおすすめします</h2>
            <p className="text-g600 mb-3">
              お子さまが学童・塾・習い事へ一人で通うようになると、自宅・学童・習い事など<strong>複数拠点を行き来する移動</strong>を見守る場面が増えます。この用途には、<strong>エリア通知（到着・出発の自動通知）</strong>で「いま到着したか」をリアルタイムに把握でき、<strong>移動履歴</strong>で通ったルートを後から確認でき、毎日使うため<strong>電池持ちの長さ</strong>で充電忘れを防げる機種が適しています。
            </p>
            <p className="text-g600 text-sm">
              この観点では、エリア通知・移動履歴に対応し、電池持ちが最大約2カ月（みてねはMG05・省エネモード時）の<strong>みてねみまもりGPS・あんしんウォッチャー</strong>をおすすめします。兄弟で複数の習い事に通う場合は、2台目の月額が0円になるあんしんウォッチャーが割安です。料金・仕様は、2026年6月時点で各社公式サイトにて確認した値（税込）です。
            </p>
          </div>

          {/* 用途別おすすめ比較表 */}
          <h2 className="section-title">学童・習い事向けおすすめ比較表</h2>
          <p className="text-g600 mb-4 text-sm">放課後の行き帰りの見守りで重要な「到着通知（エリア通知）・移動履歴・電池持ち・月額」の4項目で比較しています。仕様・料金は、各社公式サイトにて2026年6月時点で確認した値です。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">機種</th>
                  <th className="p-3 text-left border-b-2 border-blue">到着通知（エリア通知）</th>
                  <th className="p-3 text-left border-b-2 border-blue">移動履歴</th>
                  <th className="p-3 text-left border-b-2 border-blue">電池持ち</th>
                  <th className="p-3 text-left border-b-2 border-blue">月額</th>
                </tr>
              </thead>
              <tbody>
                {afterSchoolData.map((m) => (
                  <tr key={m.name} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800 whitespace-nowrap"><Link href={m.slug} className="text-blue underline">{m.name}</Link></td>
                    <td className="p-3 text-g600 text-xs">{m.arrival}</td>
                    <td className="p-3 text-g600 text-xs">{m.history}</td>
                    <td className="p-3 text-g700 whitespace-nowrap">{m.battery}</td>
                    <td className="p-3 text-g700 whitespace-nowrap">{m.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">※料金は税込・月額です。電池持ちは各社の公式・公表値にもとづく目安で、位置情報の更新頻度や利用状況により変動します。みてねみまもりGPSは、トーク機能のない位置情報プランの月額を記載しています。ご利用前に、公式サイトにて最新の料金・仕様をご確認ください（2026年6月確認）。記載のない条件についても、公式サイトにてご確認ください。</p>

          {/* 各機種ポイント */}
          <h2 className="section-title">各機種の「学童・習い事向け」ポイント</h2>
          <div className="space-y-3 mb-8">
            {afterSchoolData.map((m) => (
              <div key={m.name} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1"><Link href={m.slug} className="text-blue underline">{m.name}</Link>（電池持ち：{m.battery}）</h3>
                <p className="text-sm text-g600">{m.note}</p>
              </div>
            ))}
          </div>

          {/* 重視すべき点 */}
          <h2 className="section-title">学童・習い事で重視すべき3つの点</h2>
          <div className="space-y-3 mb-8">
            {pointData.map((p) => (
              <div key={p.title} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{p.title}</h3>
                <p className="text-sm text-g600">{p.body}</p>
              </div>
            ))}
          </div>

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
            <h3 className="font-bold text-g800 mb-4">用途別の比較ページ</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/compare/cost/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">コスパ・料金比較</p>
                <p className="text-xs text-g600">3年総額で最も安い機種の比較</p>
              </Link>
              <Link href="/compare/school-silent/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">学校向け静音GPS比較</p>
                <p className="text-xs text-g600">音が鳴らない機種の3年総額比較</p>
              </Link>
              <Link href="/compare/battery-life/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">電池持ち比較</p>
                <p className="text-xs text-g600">充電頻度が少ない機種ランキング</p>
              </Link>
              <Link href="/compare/school-trip/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">遠足・修学旅行向け比較</p>
                <p className="text-xs text-g600">行事に持たせる機種の比較</p>
              </Link>
              <Link href="/compare/2026-ranking/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">総合ランキング</p>
                <p className="text-xs text-g600">2026年の総合おすすめ</p>
              </Link>
              <Link href="/knowledge/after-school/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">放課後の見守り基礎知識</p>
                <p className="text-xs text-g600">一人で通い始める前の確認事項</p>
              </Link>
            </div>
          </div>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">機種ごとの詳細</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/mitene/" className="btn-primary">みてねみまもりGPS</Link>
              <Link href="/review/anshin-watcher/" className="btn-accent">あんしんウォッチャー</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
