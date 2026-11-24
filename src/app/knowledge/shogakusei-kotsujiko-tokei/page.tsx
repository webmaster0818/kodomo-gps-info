import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '小学生の交通事故の統計｜学年別・時間帯別・月別・通行目的別の死者・重傷者数を交通安全白書で整理【2026年11月】',
  description:
    '小学生の交通事故の統計を、内閣府「令和7年版交通安全白書」の公表データ（警察庁資料）と警察庁の分析資料で整理しています。歩行中・自転車乗用中の死者・重傷者数の推移、学年別、時間帯別、月別、通行目的別、法令違反別の数値をまとめています。',
  keywords: ['小学生 交通事故 統計', '小学生 交通事故', '子供 交通事故 統計', '小学1年生 交通事故', '登下校 交通事故'],
};

const CHECKED = '2026年11月25日確認';
const WP = 'https://www8.cao.go.jp/koutu/taisaku/r07kou_haku/zenbun/genkyo/feature/feature_1_1.html';

const trend = [
  { year: '平成27年', walk: 666, bike: 402, total: '1,185' },
  { year: '令和2年', walk: 366, bike: 224, total: '637' },
  { year: '令和3年', walk: 424, bike: 235, total: '709' },
  { year: '令和4年', walk: 330, bike: 235, total: '618' },
  { year: '令和5年', walk: 398, bike: 257, total: '720' },
  { year: '令和6年', walk: 357, bike: 254, total: '686' },
];

const grades = [
  { g: '小学1年生', walk: 446, bike: 90, total: 575, rate: '77.6%' },
  { g: '小学2年生', walk: 453, bike: 135, total: 641, rate: '70.7%' },
  { g: '小学3年生', walk: 359, bike: 188, total: 608, rate: '59.0%' },
  { g: '小学4年生', walk: 256, bike: 250, total: 555, rate: '46.1%' },
  { g: '小学5年生', walk: 198, bike: 260, total: 501, rate: '39.5%' },
  { g: '小学6年生', walk: 163, bike: 282, total: 490, rate: '33.3%' },
];

const hours = [
  { h: '6〜7時台', n: 193 },
  { h: '8〜9時台', n: 87 },
  { h: '10〜11時台', n: 73 },
  { h: '12〜13時台', n: 122 },
  { h: '14〜15時台', n: 639 },
  { h: '16〜17時台', n: 617 },
  { h: '18〜19時台', n: 120 },
  { h: '20〜21時台', n: 22 },
  { h: 'その他の時間帯', n: 2 },
];

const months = [
  ['4月', 155], ['5月', 165], ['6月', 188], ['7月', 146], ['8月', 99], ['9月', 165],
  ['10月', 218], ['11月', 160], ['12月', 183], ['1月', 122], ['2月', 144], ['3月', 130],
] as const;

const purposes = [
  { p: '下校中', n: 484, r: '25.8%' },
  { p: '遊戯', n: 332, r: '17.7%' },
  { p: '登校中', n: 232, r: '12.4%' },
  { p: '訪問', n: 204, r: '10.9%' },
  { p: '買物', n: 112, r: '6.0%' },
  { p: '散歩', n: 79, r: '4.2%' },
  { p: '観光・娯楽', n: 72, r: '3.8%' },
  { p: 'その他・学業中・調査不能', n: 360, r: '19.2%' },
];

const faqData = [
  {
    q: '小学生の交通事故で一番多いのはどんな場面ですか？',
    a: '令和2年〜6年の合計では、小学生の交通事故死者・重傷者のうち歩行中が1,875人で55.6％を占め、最も多くなっています。歩行中の通行目的別では「下校中」が484人（25.8％）で最多です（内閣府「令和7年版交通安全白書」特集-第2図・第4図、警察庁資料による。2026年11月25日確認）。',
  },
  {
    q: '何年生の事故が多いですか？',
    a: '歩行中の死者・重傷者は小学1年生446人、2年生453人と低学年が特に多く、学年が上がるにつれて減ります（令和2年〜6年の合計）。一方、自転車乗用中は学年が上がるほど増え、6年生では282人と歩行中（163人）を上回ります。',
  },
  {
    q: '事故が多い時間帯はいつですか？',
    a: '歩行中の小学生の死者・重傷者は14時〜15時台が639人で最も多く、次いで16時〜17時台が617人です（令和2年〜6年の合計）。当サイトで計算すると、14時〜17時台の合計は1,256人で、全体1,875人の約67％にあたります。',
  },
  {
    q: '事故が多い月はいつですか？',
    a: '令和2年〜6年の合計では10月が218人で最も多く、6月（188人）、12月（183人）が続きます。白書は、小学生では1学期期間中の5月・6月、2学期期間中の10月・12月に多いと説明しています。夏休みの8月は99人で最も少ない月です。',
  },
  {
    q: '子どもの側に法令違反がある事故はどのくらいですか？',
    a: '白書によると、歩行中の小学生の死者・重傷者では約6割で法令違反等があり、「飛出し」が613人（33.5％）で最も多く、次いで横断違反309人（16.9％）です（第1当事者と第2当事者の合計）。全年齢層では飛出しは3.6％で、小学生で特に多いことが分かります。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const th = 'p-3 text-left border-b-2 border-blue';
const td = 'p-3 text-g700';

export default function ShogakuseiKotsujikoTokeiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: '小学生の交通事故の統計', datePublished: '2026-11-25', dateModified: '2026-11-25', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち情報', href: '/knowledge/' }, { name: '小学生の交通事故の統計' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">安全</span>
            <span className="tag-pill bg-orange text-white">統計データ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">小学生の交通事故の統計：学年・時間帯・月・通行目的で見る傾向</h1>
          <p className="text-g600 text-lg">小学生の交通事故死者・重傷者数を、内閣府「令和7年版交通安全白書」が公表している図表データ（警察庁資料による）で整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：低学年の歩行中、下校時間帯の事故が多くなっています</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>状態別</strong>：令和2年〜6年の合計で、小学生の死者・重傷者の55.6％（1,875人）が歩行中です。</li>
              <li>・<strong>学年別</strong>：歩行中は1年生446人・2年生453人が特に多く、高学年になると自転車乗用中が増えます。</li>
              <li>・<strong>時間帯・目的</strong>：14時〜17時台に多く、通行目的別では「下校中」が最多です。</li>
            </ul>
            <p className="text-xs text-g400 mt-3">ここでの数値は「死者・重傷者数」で、軽傷者は含みません。</p>
          </div>

          <h2 className="section-title">小学生の死者・重傷者数の推移（状態別）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className={th}>年</th>
                  <th className={th}>歩行中</th>
                  <th className={th}>自転車乗用中</th>
                  <th className={th}>小学生 合計（全状態）</th>
                </tr>
              </thead>
              <tbody>
                {trend.map((r) => (
                  <tr key={r.year} className="border-b border-gray-100">
                    <td className="p-3 font-bold text-g800">{r.year}</td>
                    <td className={td}>{r.walk}人</td>
                    <td className={td}>{r.bike}人</td>
                    <td className={td}>{r.total}人</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={WP} target="_blank" rel="noopener noreferrer" className="text-blue underline">内閣府「令和7年版交通安全白書」特集 第1章</a> 特集-第1図（警察庁資料による）（{CHECKED}）。合計には自動車乗車中・二輪車乗車中・その他を含みます。令和6年の歩行中の死者は8人、重傷者は349人です（同 特集-第13図）。
          </p>

          <h2 className="section-title">学年別の死者・重傷者数（令和2年〜6年の合計）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className={th}>学年</th>
                  <th className={th}>歩行中</th>
                  <th className={th}>自転車乗用中</th>
                  <th className={th}>合計（全状態）</th>
                  <th className={th}>歩行中の割合</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((r) => (
                  <tr key={r.g} className="border-b border-gray-100">
                    <td className="p-3 font-bold text-g800">{r.g}</td>
                    <td className={td}>{r.walk}人</td>
                    <td className={td}>{r.bike}人</td>
                    <td className={td}>{r.total}人</td>
                    <td className={td}>{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={WP} target="_blank" rel="noopener noreferrer" className="text-blue underline">令和7年版交通安全白書</a> 特集-第3図（{CHECKED}）。警察庁の<a href="https://www.npa.go.jp/bureau/traffic/bunseki/R8harunoundou_koutuujikobunseki.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">令和8年春の全国交通安全運動に向けた分析（PDF）</a>でも、令和3年〜7年の合計について「小学生は低学年ほど歩行中の事故、高学年になるほど自転車乗用中の事故の割合が高くなっている」と分析されています。
          </p>

          <h2 className="section-title">時間帯別（歩行中・令和2年〜6年の合計）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className={th}>時間帯</th>
                  <th className={th}>死者・重傷者数</th>
                </tr>
              </thead>
              <tbody>
                {hours.map((r) => (
                  <tr key={r.h} className="border-b border-gray-100">
                    <td className="p-3 font-bold text-g800">{r.h}</td>
                    <td className={td}>{r.n}人</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={WP} target="_blank" rel="noopener noreferrer" className="text-blue underline">令和7年版交通安全白書</a> 特集-第5図（{CHECKED}）。「その他の時間帯」は0〜5時台・22〜23時台の合計です。14時〜17時台の合計1,256人（約67％）は当サイトによる計算です。
          </p>

          <h2 className="section-title">月別（歩行中・令和2年〜6年の合計）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse text-center">
              <thead>
                <tr className="bg-blue-light">
                  {months.map(([m]) => (
                    <th key={m} className="p-2 border-b-2 border-blue">{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {months.map(([m, n]) => (
                    <td key={m} className="p-2 text-g700">{n}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={WP} target="_blank" rel="noopener noreferrer" className="text-blue underline">令和7年版交通安全白書</a> 特集-第6図（単位：人・{CHECKED}）。白書は「小学生では1学期期間中である5月及び6月、2学期期間中である10月及び12月に多く」と説明しています。
          </p>

          <h2 className="section-title">通行目的別（歩行中・令和2年〜6年の合計）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className={th}>通行目的</th>
                  <th className={th}>死者・重傷者数</th>
                  <th className={th}>構成率</th>
                </tr>
              </thead>
              <tbody>
                {purposes.map((r) => (
                  <tr key={r.p} className="border-b border-gray-100">
                    <td className="p-3 font-bold text-g800">{r.p}</td>
                    <td className={td}>{r.n}人</td>
                    <td className={td}>{r.r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={WP} target="_blank" rel="noopener noreferrer" className="text-blue underline">令和7年版交通安全白書</a> 特集-第4図（{CHECKED}）。「その他・学業中・調査不能」は白書の「その他」349人・「学業中」6人・「調査不能」5人を当サイトで合算した値です。白書の構成率は小数点以下第2位を四捨五入しているため、合計が100にならない場合があります。
          </p>

          <h2 className="section-title">数字から分かること</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>入学直後の1〜2年生の歩行中</strong>：歩行中の死者・重傷者は1年生・2年生で全体の4割以上（1,875人中899人）を占めます。</li>
            <li>・<strong>朝より下校時間帯</strong>：登校時間帯にあたる6〜7時台が193人に対し、14〜15時台は639人です。通行目的別でも下校中（484人）が登校中（232人）の約2倍です。</li>
            <li>・<strong>飛出し</strong>：白書によると、歩行中の小学生の死者・重傷者の約6割で法令違反等があり、飛出しが613人（33.5％）で最多です（第1当事者と第2当事者の合計）。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">出典：<a href={WP} target="_blank" rel="noopener noreferrer" className="text-blue underline">令和7年版交通安全白書</a> 特集-第3図〜第7図（{CHECKED}）。割合・倍率は当サイトによる計算です。</p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              通学路での見守りの考え方は「<Link href="/knowledge/commute-safety/" className="text-blue underline">通学路の安全対策</Link>」、一人で歩き始める時期の準備は「<Link href="/knowledge/walking-alone/" className="text-blue underline">子供の一人歩き</Link>」をご覧ください。子ども用GPS端末は居場所の確認に使うもので、交通事故そのものを防ぐ機能ではありません。
            </p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
          <p className="text-xs text-g400 mt-3">出典は上記の内閣府「令和7年版交通安全白書」・警察庁資料（{CHECKED}）</p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/commute-safety/" className="btn-primary">通学路の安全対策</Link>
              <Link href="/knowledge/walking-alone/" className="btn-accent">子供の一人歩き</Link>
              <Link href="/purpose/safety/" className="btn-primary">防犯・安全で選ぶ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
