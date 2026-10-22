import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '新1年生の見守りGPS比較【2026年】小学校入学準備でいつ・何を選ぶ？',
  description:
    '小学校入学準備における見守りGPSの選び方を解説します。新1年生に必要な機能（エリア通知・電池持ち・音が鳴らない設計）、学校への持ち込み確認と申請の例文、入学前の準備スケジュール、みてね・あんしんウォッチャー・ソラノメ（販売終了）の比較を掲載しています。解説には確認済みの公表データのみを使用しています。',
  keywords: ['新一年生 GPS', '小学校 入学 GPS', '入学準備 GPS', '子供 GPS いつから', '一年生 見守り'],
};

// 比較表データ: compare/after-school・compare/battery-life・各機種レビューの確認済みデータを転記（2026年6月時点・税込）。創作なし。
const firstGraderData = [
  {
    name: 'みてねみまもりGPS',
    slug: '/review/mitene/',
    battery: '最大約2カ月',
    monthly: '528円（位置情報プラン）',
    silent: '◎ 音が鳴らない位置情報専用モデルあり',
    note: '電池持ちが長く、充電忘れの影響を受けにくい機種です。入学直後の慣れない時期でも、保護者の管理負担が小さく済みます。',
  },
  {
    name: 'あんしんウォッチャー',
    slug: '/review/anshin-watcher/',
    battery: '最大約2カ月',
    monthly: '539円（2台目は月額0円）',
    silent: '◎ 位置情報専用',
    note: '上にきょうだいがいるご家庭では、2台目の月額が0円のため割安です。エリア通知・移動履歴にも標準で対応しています。',
  },
  {
    name: 'ソラノメ（販売終了）',
    slug: '/review/soranome/',
    battery: '最大約1週間',
    monthly: '539円',
    silent: '位置情報専用',
    note: '2026年4月1日付の公式告知で現行端末の販売が終了しています（2026年10月17日 公式確認）。新規の購入はできません。GPS+Wi-Fi+基地局の3方式で測位し、電池持ちは約1週間です。',
  },
];

const schedule = [
  { time: '入学前年の12月〜2月', title: '学校のルールを確認する', desc: '入学説明会や学校の説明資料で、GPS端末の持ち込み可否・申請の要否を確認します。分からない場合は、入学後に担任の先生へ確認しても差し支えありません（多くの学校で位置情報専用GPSは許可されています）。確認の際は、学校持ち込みルールのページに掲載している質問テンプレートをご活用ください。' },
  { time: '2月〜3月', title: '機種を選んで購入・設定する', desc: '通学距離・きょうだいの有無・充電管理のしやすさをもとに機種を選び、自宅で初期設定（エリア通知に自宅・学校を登録）まで済ませます。本体購入型は届くまで数日かかるため、3月中旬までに購入しておくことをおすすめします。' },
  { time: '3月末〜入学式まで', title: '通学路で練習する', desc: '入学前に親子で通学路を歩き、GPSの位置表示と通知のタイミングを実際に確認します。ランドセルのどこに入れるか（内ポケットへの固定など）もこの時期に決めておくと、入学初日から安定して使えます。' },
  { time: '入学後', title: '必要に応じて持ち込み申請を提出する', desc: '学校から申請を求められた場合は、申請理由の例文テンプレートを使って提出します。「音が鳴らない・授業中は操作しない・管理は家庭の責任で行う」ことを明記すると、許可を得やすくなります。' },
];

const faqData = [
  { q: '新1年生にGPSはいつから持たせるべきですか？', a: '入学と同時（一人での登下校が始まるタイミング）に持たせるご家庭が最も多くなっています。入学前の3月中に、購入・設定・通学路での練習まで済ませておくと、入学初日から使えます。詳しくは「見守りGPSはいつから必要？」の解説もご覧ください。' },
  { q: '新1年生にはキッズケータイとGPSどちらがいいですか？', a: '低学年のうちは、「音が鳴らない・操作不要・学校に持ち込みやすい」位置情報専用GPSをおすすめします。キッズケータイは通話ができる反面、小学校では持ち込みを原則禁止（申請制）としている学校が多く、ハードルが高くなります。詳しい比較は「GPS vs キッズケータイ」のページで解説しています。' },
  { q: '学校にGPSの持ち込みを申請する必要はありますか？', a: '学校によって異なります。位置情報専用のGPS端末は「携帯電話」に当たらないと判断する学校が多く、申請不要または口頭での確認で済むケースが大半ですが、申請書の提出を求める学校もあります。そのまま使える申請理由の例文を用意していますので、必要な場合はご活用ください。' },
  { q: '入学準備の費用はどのくらい見ておけばいいですか？', a: '見守りGPSは「本体代＋月額料金」の構成が一般的で、月額はおおむね500円台からです（機種により本体価格・プランが異なります）。本体・月額・2台目の条件を含めた総額は、「コスパ・料金比較」のページで機種別に比較できます。' },
  { q: 'ランドセルのどこに入れればいいですか？', a: 'ランドセル内側のファスナーポケットまたは小ポケットに入れ、専用ケースやストラップで固定することをおすすめします。毎日出し入れすると紛失や入れ忘れの原因になるため、「入れたままにする」運用が基本です。' },
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

export default function FirstGraderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "新1年生の見守りGPS比較｜小学校入学準備でいつ・何を選ぶ？", "datePublished": "2026-07-03", "dateModified": "2026-07-03", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '用途別比較', href: '/compare/' }, { name: '新1年生・入学準備' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">入学準備</span>
            <span className="tag-pill bg-orange text-white">新1年生向け</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            新1年生の見守りGPS比較｜小学校の入学準備ガイド
          </h1>
          <p className="text-g600 text-lg">選ぶ時期・機種・選び方について、校則の確認から機種選び、入学前の練習まで解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8" style={{ borderLeft: '4px solid #3B82F6' }}>
            <h2 className="font-extrabold text-g800 mb-3">入学準備のGPS選びは「3月中の設定完了」を目標にすることをおすすめします</h2>
            <ul className="space-y-2 text-sm text-g700">
              <li>・一人での登下校が始まる<strong>入学と同時</strong>に使い始めるご家庭が最も多くなっています。3月中に「校則の確認→購入→設定→通学路での練習」まで済ませることが理想です。</li>
              <li>・新1年生には、<strong>音が鳴らない位置情報専用タイプ</strong>をおすすめします（学校に持ち込みやすく、操作も不要なためです）。</li>
              <li>・選ぶ際の基準は、「<strong>電池持ち</strong>（充電忘れ対策）」「<strong>エリア通知</strong>（学校・自宅への到着通知）」「きょうだい割の有無」の3つです。</li>
            </ul>
          </div>

          <h2 className="section-title">入学前の準備スケジュール</h2>
          <div className="space-y-3 mb-8">
            {schedule.map((s) => (
              <div key={s.title} className="card-hover p-5">
                <p className="text-xs font-bold text-blue mb-1">{s.time}</p>
                <h3 className="font-bold text-g800 text-sm mb-1">{s.title}</h3>
                <p className="text-sm text-g600">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-4 mb-8" style={{ background: 'rgba(59,130,246,0.06)' }}>
            <p className="text-sm text-g700">
              校則の確認方法・申請の例文は、<Link href="/knowledge/school-rules/" className="text-blue-600 font-bold underline">GPS学校持ち込みルール（質問テンプレート・申請例文を掲載）</Link> にまとめています。
            </p>
          </div>

          <h2 className="section-title">新1年生向けの定番3機種の比較</h2>
          <p className="text-g600 mb-4 text-sm">位置情報専用（音が鳴らない・学校に持ち込みやすい）の定番3機種を、入学準備の観点で比較しています。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">機種</th>
                  <th className="p-3 text-left border-b-2 border-blue">電池持ち</th>
                  <th className="p-3 text-left border-b-2 border-blue">月額（税込）</th>
                  <th className="p-3 text-left border-b-2 border-blue">静音性</th>
                </tr>
              </thead>
              <tbody>
                {firstGraderData.map((d) => (
                  <tr key={d.name} className="align-top border-b border-gray-100">
                    <td className="p-3 font-bold text-g800 whitespace-nowrap"><Link href={d.slug} className="text-blue-600 underline">{d.name}</Link></td>
                    <td className="p-3 text-g700 whitespace-nowrap">{d.battery}</td>
                    <td className="p-3 text-g700 whitespace-nowrap">{d.monthly}</td>
                    <td className="p-3 text-g700">{d.silent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-2 mb-4">
            {firstGraderData.map((d) => (
              <p key={d.name} className="text-sm text-g600"><strong className="text-g800">{d.name}</strong>：{d.note}</p>
            ))}
          </div>
          <p className="text-xs text-g500 mb-8">※各機種の確認済み公表値（2026年6月時点・税込）を、既存の比較・レビューページから転記しています。本体価格・最新プランは、各レビューページと公式サイトにてご確認ください。3年総額での比較は<Link href="/compare/cost/" className="underline">コスパ・料金比較</Link>をご覧ください。</p>

          <h2 className="section-title">よくある質問</h2>
          <div className="space-y-3 mb-8">
            {faqData.map((faq) => (
              <details key={faq.q} className="card-hover">
                <summary className="cursor-pointer p-4 font-bold text-g800 text-sm">{faq.q}</summary>
                <p className="px-4 pb-4 text-sm text-g600">{faq.a}</p>
              </details>
            ))}
          </div>

          <h2 className="section-title">関連ページ</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            <Link href="/knowledge/school-rules/" className="card-hover p-4 block"><p className="font-bold text-g800 text-sm mb-1">GPS学校持ち込みルール</p><p className="text-xs text-g600">校則確認テンプレート・申請理由の例文を掲載</p></Link>
            <Link href="/knowledge/when-to-start/" className="card-hover p-4 block"><p className="font-bold text-g800 text-sm mb-1">見守りGPSはいつから必要？</p><p className="text-xs text-g600">年齢・状況別の始める時期</p></Link>
            <Link href="/compare/battery-life/" className="card-hover p-4 block"><p className="font-bold text-g800 text-sm mb-1">電池持ちがいい子供GPS比較</p><p className="text-xs text-g600">充電忘れ対策の観点で比較</p></Link>
            <Link href="/review/kids-phone/" className="card-hover p-4 block"><p className="font-bold text-g800 text-sm mb-1">キッズケータイ vs GPS端末</p><p className="text-xs text-g600">通話が必要になった場合の選択肢</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
