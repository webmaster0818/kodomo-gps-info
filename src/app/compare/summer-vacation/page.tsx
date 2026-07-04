import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '夏休み・帰省の子供見守りGPS比較【2026年】旅行・留守番・祖父母宅で使うなら',
  description:
    '夏休みの子供見守りGPSの使い方を徹底ガイド。帰省先（祖父母宅）での見守り、旅行・レジャーでの迷子対策、留守番や学童の夏期利用まで、シーン別の選び方と設定のコツを解説。みてね・あんしんウォッチャー・ソラノメの比較表（確認済み公表データ）つき。',
  keywords: ['夏休み 子供 GPS', '帰省 子供 見守り', '旅行 子供 GPS 迷子', '夏休み 留守番 見守り', '祖父母 見守り'],
};

// 比較表データ: compare/after-school・battery-life・各レビューの確認済みデータを転記（2026年6月時点・税込）。創作なし。
const summerData = [
  {
    name: 'みてねみまもりGPS',
    slug: '/review/mitene/',
    battery: '最大約2ヶ月',
    monthly: '528円（位置情報プラン）',
    point: '電池持ちが長く、帰省や旅行の数日間なら充電器を持たずに使える。家族アプリとの連携で祖父母にも共有しやすい。',
  },
  {
    name: 'あんしんウォッチャー',
    slug: '/review/anshin-watcher/',
    battery: '最大約2ヶ月',
    monthly: '539円（2台目は月額0円）',
    point: '契約者含め最大10人で見守れるため、帰省先の祖父母もアプリで位置を確認できる。きょうだい利用なら2台目0円。',
  },
  {
    name: 'ソラノメ',
    slug: '/review/soranome/',
    battery: '最大約1週間',
    monthly: '539円',
    point: 'GPS+Wi-Fi+基地局の3測位。旅行前に満充電＋週の途中で1回充電の運用が前提。',
  },
];

const scenes = [
  {
    title: '帰省（祖父母宅で数日〜数週間）',
    tips: [
      '出発前に「祖父母宅」をエリア通知に登録しておくと、家の周りからの出入りが自動で分かります',
      '見守りアプリは祖父母のスマホにも入れて共有を（あんしんウォッチャーは最大10人、みてねは家族共有に対応）',
      '田舎は建物が少なくGPS精度が出やすい一方、山間部では電波の弱いエリアもあるため、到着日に位置表示を一度確認しましょう',
    ],
  },
  {
    title: '旅行・レジャー（人混みでの迷子対策）',
    tips: [
      'テーマパークや祭りなど人混みでは、リアルタイムに近い更新間隔の設定に変更しておくと合流しやすくなります（更新間隔を上げると電池消費は増えます）',
      '端末はポケットより「落ちない場所」（バッグ内ポケット・ズボンのファスナーポケット）に。ストラップ固定が安心です',
      '万一に備えて、子供に「はぐれたらその場で動かない」を事前に約束しておくのがGPS以上に有効です',
    ],
  },
  {
    title: '留守番・学童の夏期利用',
    tips: [
      '共働き家庭の夏休みは「自宅→学童→自宅」の移動確認が主戦場。自宅と学童の2ヶ所をエリア登録すれば到着・出発が自動通知されます',
      '長期休み中は充電忘れが起きやすいので、電池持ちの長い機種（最大約2ヶ月クラス）だと管理がラクです',
      '詳しくは学童・習い事の行き帰り比較もご覧ください',
    ],
  },
];

const faqData = [
  { q: '夏休みだけGPSを使うことはできますか？', a: '機種によります。契約に最低利用期間や解約金がある機種と、縛りの緩い機種があるため、短期利用が前提なら契約条件を必ず確認してください。長期的には新学期以降の登下校見守りにそのまま使う家庭が多く、夏休みは「導入のきっかけ」になりやすいタイミングです。' },
  { q: '帰省先が電波の弱い田舎でも使えますか？', a: '子供用GPSの多くは携帯電話回線（LTE等）で位置を送信するため、携帯の電波が入る場所なら基本的に使えます。山間部など電波の弱い地域では更新が遅れることがあるため、到着日に位置表示を確認しておくと安心です。' },
  { q: '新幹線や飛行機での移動中はどうなりますか？', a: '高速移動中は位置の更新が飛び飛びになることがありますが、故障ではありません。飛行機では電源やモバイル機器の扱いが航空会社の規定に従う必要があるため、搭乗前に確認してください。' },
  { q: '祖父母も位置を見られるようにできますか？', a: 'できます。あんしんウォッチャーは契約者を含め最大10人で見守り可能、みてねみまもりGPSも家族での共有に対応しています。帰省前にアプリの招待設定を済ませておくとスムーズです。' },
  { q: 'プールや水遊びの日はどうすればいいですか？', a: '防水性能は機種によって異なり、水没に耐えない機種もあります。水遊びの日は荷物と一緒に保管する運用が無難です。防水等級は各機種のレビュー・公式サイトでご確認ください。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "夏休み・帰省の子供見守りGPS比較｜旅行・留守番・祖父母宅で使うなら", "datePublished": "2026-07-04", "dateModified": "2026-07-04", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "用途別比較", "item": "https://gps-kodomo.com/compare/"}, {"@type": "ListItem", "position": 3, "name": "夏休み・帰省の見守りGPS", "item": "https://gps-kodomo.com/compare/summer-vacation/"}]}) }} />
      <Breadcrumb items={[{ name: '用途別比較', href: '/' }, { name: '夏休み・帰省' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">夏休み</span>
            <span className="tag-pill bg-orange text-white">帰省・旅行・留守番</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            夏休み・帰省の子供見守りGPS比較
          </h1>
          <p className="text-g600 text-lg">帰省先・旅行の迷子対策・留守番——学校がない期間こそ見守りの出番です</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8" style={{ borderLeft: '4px solid #3B82F6' }}>
            <h2 className="font-extrabold text-g800 mb-3">結論：夏休みは「エリア通知の登録替え」と「電池持ち」で選ぶ</h2>
            <ul className="space-y-2 text-sm text-g700">
              <li>・夏休みは行動範囲が「学校⇔自宅」から「祖父母宅・学童・旅行先」へ変わります。<strong>エリア通知の登録を出発前に切り替える</strong>のが最重要の準備です</li>
              <li>・帰省や旅行では充電環境が不安定になりがち。<strong>電池持ちの長い機種（最大約2ヶ月クラス）なら充電器なしで乗り切れます</strong></li>
              <li>・祖父母との共有機能（複数人見守り）があると、帰省先でも家族全員で見守れます</li>
            </ul>
          </div>

          <h2 className="section-title">シーン別の使い方と設定のコツ</h2>
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

          <h2 className="section-title">夏休みの見守りに向く定番3機種</h2>
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
          <p className="text-xs text-g500 mb-8">※確認済みの公表値（2026年6月時点・税込）を既存の比較・レビューページから転記しています。最新のプラン・防水性能等は各レビューと公式サイトでご確認ください。</p>

          <h2 className="section-title">よくある質問</h2>
          <div className="space-y-3 mb-8">
            {faqData.map((faq) => (
              <details key={faq.q} className="card-hover">
                <summary className="cursor-pointer p-4 font-bold text-g800 text-sm">{faq.q}</summary>
                <p className="px-4 pb-4 text-sm text-g600">{faq.a}</p>
              </details>
            ))}
          </div>

          <h2 className="section-title">あわせて読みたい</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            <Link href="/compare/battery-life/" className="card-hover p-4 block"><p className="font-bold text-g800 text-sm mb-1">電池持ちがいい子供GPS比較</p><p className="text-xs text-g600">帰省・旅行の充電問題を解決</p></Link>
            <Link href="/compare/after-school/" className="card-hover p-4 block"><p className="font-bold text-g800 text-sm mb-1">学童・習い事の見守りGPS</p><p className="text-xs text-g600">夏期の学童通いにも</p></Link>
            <Link href="/knowledge/accuracy/" className="card-hover p-4 block"><p className="font-bold text-g800 text-sm mb-1">GPSの精度と誤差の原因</p><p className="text-xs text-g600">山間部・移動中の見え方</p></Link>
            <Link href="/compare/first-grader/" className="card-hover p-4 block"><p className="font-bold text-g800 text-sm mb-1">新1年生の見守りGPS（入学準備）</p><p className="text-xs text-g600">夏の導入から新学期へ</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}
