import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '夏休み・帰省の子供見守りGPS比較【2026年】旅行・留守番・祖父母宅で使うなら',
  description:
    '夏休みにおける子供見守りGPSの使い方をご案内します。帰省先（祖父母宅）での見守り、旅行・レジャーでの迷子対策、留守番や学童の夏期利用まで、シーン別の選び方と設定のポイントを解説します。みてね・あんしんウォッチャー・ソラノメ（販売終了）の比較表（確認済みの公表データ）も掲載しています。',
  keywords: ['夏休み 子供 GPS', '帰省 子供 見守り', '旅行 子供 GPS 迷子', '夏休み 留守番 見守り', '祖父母 見守り'],
};

// 比較表データ: compare/after-school・battery-life・各レビューの確認済みデータを転記（2026年6月時点・税込）。創作なし。
const summerData = [
  {
    name: 'みてねみまもりGPS',
    slug: '/review/mitene/',
    battery: '最大約2カ月',
    monthly: '528円（位置情報プラン）',
    point: '電池持ちが長く、帰省や旅行の数日間であれば充電器を持たずに使えます。家族アプリとの連携により、祖父母とも共有しやすい機種です。',
  },
  {
    name: 'あんしんウォッチャー',
    slug: '/review/anshin-watcher/',
    battery: '最大約2カ月',
    monthly: '539円（2台目は月額0円）',
    point: '契約者を含め最大10人で見守れるため、帰省先の祖父母もアプリで位置を確認できます。きょうだいで利用する場合、2台目は0円です。',
  },
  {
    name: 'ソラノメ（販売終了）',
    slug: '/review/soranome/',
    battery: '最大約1週間',
    monthly: '539円',
    point: '2026年4月1日付の公式告知で現行端末の販売が終了しています（2026年10月17日 公式確認）。既にお持ちの場合、旅行前に満充電にし、週の途中で1回充電する運用が前提となります。',
  },
];

const scenes = [
  {
    title: '帰省（祖父母宅で数日〜数週間）',
    tips: [
      '出発前に「祖父母宅」をエリア通知に登録しておくと、家の周りからの出入りが自動で分かります',
      '見守りアプリは祖父母のスマートフォンにも入れて共有することをおすすめします（あんしんウォッチャーは最大10人、みてねは家族共有に対応）',
      '田舎は建物が少なくGPS精度が出やすい一方、山間部では電波の弱いエリアもあるため、到着日に位置表示を一度ご確認ください',
    ],
  },
  {
    title: '旅行・レジャー（人混みでの迷子対策）',
    tips: [
      'テーマパークや祭りなど人混みでは、リアルタイムに近い更新間隔の設定に変更しておくと合流しやすくなります（更新間隔を上げると電池消費は増えます）',
      '端末はポケットよりも「落ちない場所」（バッグの内ポケット・ズボンのファスナーポケット）に入れ、ストラップで固定することをおすすめします',
      '万一に備えて、「はぐれたらその場で動かない」ことをお子さまと事前に約束しておくことが、GPS以上に有効です',
    ],
  },
  {
    title: '留守番・学童の夏期利用',
    tips: [
      '共働き家庭の夏休みは「自宅→学童→自宅」の移動確認が中心となります。自宅と学童の2カ所をエリア登録すれば、到着・出発が自動で通知されます',
      '長期休み中は充電を忘れやすいため、電池持ちの長い機種（最大約2カ月クラス）であれば管理が容易です',
      '詳しくは、学童・習い事の行き帰り比較もご覧ください',
    ],
  },
];

const faqData = [
  { q: '夏休みだけGPSを使うことはできますか？', a: '機種によります。契約に最低利用期間や解約金がある機種と、縛りの緩い機種があるため、短期利用が前提の場合は、契約条件を必ずご確認ください。新学期以降の登下校の見守りにそのまま使うご家庭も多く、夏休みは導入のきっかけになりやすい時期です。' },
  { q: '帰省先が電波の弱い田舎でも使えますか？', a: '子供用GPSの多くは携帯電話回線（LTE等）で位置を送信するため、携帯電話の電波が入る場所であれば基本的に使えます。山間部など電波の弱い地域では更新が遅れることがあるため、到着日に位置表示をご確認ください。' },
  { q: '新幹線や飛行機での移動中はどうなりますか？', a: '高速移動中は位置の更新が途切れ途切れになることがありますが、故障ではありません。飛行機では、電源やモバイル機器の扱いについて航空会社の規定に従う必要があるため、搭乗前にご確認ください。' },
  { q: '祖父母も位置を見られるようにできますか？', a: '可能です。あんしんウォッチャーは契約者を含め最大10人で見守ることができ、みてねみまもりGPSも家族での共有に対応しています。帰省前に、アプリの招待設定を済ませておくことをおすすめします。' },
  { q: 'プールや水遊びの日は、どのように扱えばよいですか？', a: '防水性能は機種によって異なり、水没に耐えない機種もあります。水遊びの日は、荷物と一緒に保管することをおすすめします。防水等級は各機種のレビュー・公式サイトでご確認ください。' },
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

export default function SummerVacationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "夏休み・帰省の子供見守りGPS比較｜旅行・留守番・祖父母宅で使うなら", "datePublished": "2026-07-04", "dateModified": "2026-07-04", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '用途別比較', href: '/compare/' }, { name: '夏休み・帰省' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">夏休み</span>
            <span className="tag-pill bg-orange text-white">帰省・旅行・留守番</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            夏休み・帰省の子供見守りGPS比較
          </h1>
          <p className="text-g600 text-lg">帰省先での見守り、旅行時の迷子対策、留守番など、学校がない期間の見守りについて解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8" style={{ borderLeft: '4px solid #3B82F6' }}>
            <h2 className="font-extrabold text-g800 mb-3">夏休みは「エリア通知の登録変更」と「電池持ち」を基準に選ぶことをおすすめします</h2>
            <ul className="space-y-2 text-sm text-g700">
              <li>・夏休みは行動範囲が「学校⇔自宅」から「祖父母宅・学童・旅行先」へ変わります。<strong>エリア通知の登録を出発前に切り替える</strong>ことが、最も重要な準備です</li>
              <li>・帰省や旅行では、充電環境が不安定になりがちです。<strong>電池持ちの長い機種（最大約2カ月クラス）であれば、充電器なしで期間中を過ごせます</strong></li>
              <li>・祖父母との共有機能（複数人見守り）があると、帰省先でも家族全員で見守れます</li>
            </ul>
          </div>

          <h2 className="section-title">シーン別の使い方と設定のポイント</h2>
          <div className="space-y-4 mb-8">
            {scenes.map((sc) => (
              <div key={sc.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-2">{sc.title}</h3>
                <ul className="space-y-1.5 text-sm text-g600">
                  {sc.tips.map((t) => (<li key={t}>・{t}</li>))}
                </ul>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-4 mb-8" style={{ background: 'rgba(59,130,246,0.06)' }}>
            <p className="text-sm text-g700">
              学童・習い事の行き帰りは <Link href="/compare/after-school/" className="text-blue-600 font-bold underline">学童・習い事の見守りGPS比較</Link>、遠足・宿泊行事は <Link href="/compare/school-trip/" className="text-blue-600 font-bold underline">遠足・修学旅行の比較</Link> で詳しく解説しています。
            </p>
          </div>

          <h2 className="section-title">夏休みの見守りに適した定番3機種</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">機種</th>
                  <th className="p-3 text-left border-b-2 border-blue">電池持ち</th>
                  <th className="p-3 text-left border-b-2 border-blue">月額（税込）</th>
                </tr>
              </thead>
              <tbody>
                {summerData.map((d) => (
                  <tr key={d.name} className="align-top border-b border-gray-100">
                    <td className="p-3 font-bold text-g800 whitespace-nowrap"><Link href={d.slug} className="text-blue-600 underline">{d.name}</Link></td>
                    <td className="p-3 text-g700 whitespace-nowrap">{d.battery}</td>
                    <td className="p-3 text-g700 whitespace-nowrap">{d.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-2 mb-4">
            {summerData.map((d) => (
              <p key={d.name} className="text-sm text-g600"><strong className="text-g800">{d.name}</strong>：{d.point}</p>
            ))}
          </div>
          <p className="text-xs text-g500 mb-8">※料金はすべて（税込）です。2026年6月時点で確認した公表値を、当サイトの既存の比較・レビューページから転記しています。最新のプラン・防水性能等は各レビューと公式サイトでご確認ください。</p>

          <h2 className="section-title">よくある質問</h2>
          <div className="space-y-3 mb-8">
            {faqData.map((faq) => (
              <details key={faq.q} className="card-hover">
                <summary className="cursor-pointer p-4 font-bold text-g800 text-sm">{faq.q}</summary>
                <p className="px-4 pb-4 text-sm text-g600">{faq.a}</p>
              </details>
            ))}
          </div>

          <h2 className="section-title">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            <Link href="/compare/battery-life/" className="card-hover p-4 block"><p className="font-bold text-g800 text-sm mb-1">電池持ちが良い子供GPS比較</p><p className="text-xs text-g600">帰省・旅行時の充電に関する比較</p></Link>
            <Link href="/compare/after-school/" className="card-hover p-4 block"><p className="font-bold text-g800 text-sm mb-1">学童・習い事の見守りGPS</p><p className="text-xs text-g600">夏期の学童通いでの見守り</p></Link>
            <Link href="/knowledge/accuracy/" className="card-hover p-4 block"><p className="font-bold text-g800 text-sm mb-1">GPSの精度と誤差の原因</p><p className="text-xs text-g600">山間部・移動中の見え方</p></Link>
            <Link href="/compare/first-grader/" className="card-hover p-4 block"><p className="font-bold text-g800 text-sm mb-1">新1年生の見守りGPS（入学準備）</p><p className="text-xs text-g600">夏の導入から新学期へ</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
