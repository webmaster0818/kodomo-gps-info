import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'SayuU（サユー）の評判・口コミは？【2026年】トヨタの交通安全GPSの実力・料金を解説',
  description:
    'トヨタが開発したSayuU（サユー）をレビューします。左右確認検知・走行検知・双方向通話に対応し、月額1,210円、本体16,500円です。交通安全に特化したGPS端末の機能と料金を解説します。',
};

const faqData = [
  { q: 'SayuU（サユー）の左右確認検知とは？', a: '横断歩道などで、お子さまが左右を確認したかどうかをセンサーで検知する機能です。左右を確認せずに道路を渡ろうとした場合は、音声で注意を促します。トヨタの自動車安全技術を応用した独自の機能です。' },
  { q: '走行検知とはどのような機能ですか？', a: 'お子さまが車やバイクに乗って移動していることを検知する機能です。通常の徒歩の速度を超える移動を検知した場合、保護者に通知が送られます。交通事故や不審な車両への乗車を早期に発見できます。' },
  { q: '通話機能はどう使いますか？', a: '保護者のスマートフォンアプリから、GPS端末に電話をかけることができます。また、お子さまもGPS端末のボタンを押して保護者に発信できます。双方向の通話に対応しています。' },
  { q: '月額料金と本体価格はいくらですか？', a: '月額料金は1,210円（税込）、本体価格は16,500円（税込）です。他機種と比べて高めですが、通話機能・交通安全機能を含んだ料金です。' },
  { q: 'バッテリーはどれくらい持ちますか？', a: '最大約3日間です。通話機能や各種センサーを搭載しているため、バッテリーの消費が多くなっています。毎日の充電が必要です。' },
  { q: 'トヨタが開発しているのはなぜですか？', a: 'トヨタは「交通事故ゼロ」をビジョンに掲げており、自動車の安全技術にとどまらず、歩行者の安全も守ることを目的に開発されました。自動運転技術で培ったセンサー技術やAI技術を活用しています。' },
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

export default function SayuuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "SayuU（サユー）レビュー", "datePublished": "2026-03-15", "dateModified": "2026-07-17", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'SayuU（サユー）' }]} />

      <section className="bg-orange-light py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">トヨタ開発</span>
            <span className="tag-pill bg-blue text-white">交通安全サポート</span>
            <span className="tag-pill bg-green text-white">通話対応</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            SayuU（サユー）レビュー
          </h1>
          <p className="text-g600 text-lg">トヨタ提供 | 月額1,210円 | 左右確認検知・走行検知搭載</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          {/* 結論box */}
          <div className="rounded-2xl border-l-4 border-orange bg-orange-light/40 p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">交通安全機能を最も重視する場合はSayuUが適しています。左右確認検知・走行検知と双方向通話を求めるご家庭向けです（料金は高めです）</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>強み</strong>：他機種にない<strong>左右確認検知・走行検知</strong>の交通安全機能を備え、<strong>双方向通話</strong>にも対応しています。トヨタが提供する製品です。</li>
              <li>・<strong>弱み</strong>：月額<strong>1,210円</strong>と他機種の約2倍で、本体も<strong>16,500円</strong>と高額です。バッテリーは<strong>最大約3日</strong>のため毎日の充電が必要で、テキストのトーク機能はありません。</li>
              <li>・<strong>料金</strong>：月額1,210円（税込）と本体16,500円（税込）です。</li>
              <li>・<strong>適したご家庭</strong>：交通安全の習慣づけを重視するご家庭、通話も使いたいご家庭です。<strong>適さないご家庭</strong>：料金と電池持ちを重視するご家庭、位置確認のみで足りるご家庭です。</li>
            </ul>
            <p className="text-xs text-g500 mt-3">出典：トヨタ（SayuU）公式の製品ページ・仕様。料金・仕様は変更される場合があります。お申し込み前に、公式サイトにて最新情報をご確認ください。<Link href="/#ranking" className="text-orange underline">他機種との比較ランキングはこちら</Link></p>
          </div>

          <h2 className="section-title">SayuU（サユー）とは</h2>
          <p className="text-g600 mb-6">
            SayuU（サユー）は、トヨタが開発した子供用GPS端末です。
            自動車メーカーならではの「交通安全」に特化した独自機能が最大の特徴です。
            横断歩道での左右確認検知、異常な速度での移動を検知する走行検知に加え、双方向通話にも対応しています。
            月額1,210円と他機種より高めですが、交通安全を重視するご家庭に選ばれています。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'トヨタ自動車'],
                    ['月額料金', '1,210円（税込）'],
                    ['本体価格', '16,500円（税込）'],
                    ['測位方式', 'GPS+みちびき+GLONASS'],
                    ['バッテリー', '最大約3日間'],
                    ['通話', '双方向通話対応'],
                    ['特殊機能', '左右確認検知・走行検知'],
                    ['通信回線', 'LTE'],
                    ['防水', '生活防水（IPX5）'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-g100">
                      <td className="py-2 font-semibold text-g700 w-1/3">{k}</td>
                      <td className="py-2 text-g600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">コスト比較</h3>
              <div className="space-y-3">
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">SayuU</p>
                  <p className="text-2xl font-extrabold text-g800">月額 1,210円</p>
                  <p className="text-sm text-g600 mt-1">通話＋交通安全機能を搭載</p>
                </div>
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">他機種の平均</p>
                  <p className="text-2xl font-extrabold text-g800">月額 528〜539円</p>
                  <p className="text-sm text-g600 mt-1">位置確認のみ</p>
                </div>
                <p className="text-sm text-g500">※ SayuUは通話・交通安全機能を含む価格です。</p>
              </div>
            </div>
          </div>

          <h2 className="section-title">独自の交通安全機能</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-6 border-l-4 border-orange">
              <h3 className="font-bold text-g800 mb-2">左右確認検知</h3>
              <p className="text-sm text-g600">
                横断歩道や交差点で、お子さまが左右を確認したかどうかをセンサーで検知します。
                確認せずに渡ろうとすると、音声で注意を促します。
                トヨタの自動車安全技術のセンサーを歩行者向けに応用した独自技術です。
              </p>
            </div>
            <div className="card-hover p-6 border-l-4 border-blue">
              <h3 className="font-bold text-g800 mb-2">走行検知</h3>
              <p className="text-sm text-g600">
                お子さまが通常の歩行速度を大幅に超えて移動している場合（車やバイクでの移動）を検知し、
                保護者に通知します。交通事故や不審な車両への乗車の早期発見に役立ちます。
              </p>
            </div>
          </div>

          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '', title: '交通安全サポート', desc: '左右確認検知と走行検知で、お子さまの交通安全を見守ります。' },
              { icon: '', title: '双方向通話', desc: '保護者・お子さまの双方から通話が可能です。緊急時の連絡手段として活用できます。' },
              { icon: '', title: '位置確認', desc: 'GPS+みちびき+GLONASSで、リアルタイムに位置を把握できます。' },
              { icon: '', title: 'エリア通知', desc: '設定したエリアへの出入りを自動で通知します。' },
              { icon: '', title: '移動履歴', desc: '過去の移動経路を記録し、確認できます。' },
              { icon: '', title: 'トヨタ品質', desc: '自動車メーカーの品質基準で製造されており、耐久性に優れています。' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-g600">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">メリット・デメリット</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・交通安全に特化した独自の機能</li>
                <li>・左右確認検知は他機種にない独自技術</li>
                <li>・双方向通話で緊急時にも連絡が可能</li>
                <li>・走行検知で不審な移動を早期発見</li>
                <li>・トヨタブランドの高い信頼性</li>
                <li>・お子さまの交通安全の習慣づくりに役立つ点</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・月額1,210円と他機種の約2倍</li>
                <li>・本体価格が16,500円と高額</li>
                <li>・バッテリーは最大3日間で、毎日の充電が必要</li>
                <li>・トーク（テキスト）機能は非搭載</li>
                <li>・高い初期コスト</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">おすすめのご家庭／適さないご家庭</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-2">おすすめのご家庭</h3>
              <ul className="space-y-1.5 text-sm text-g700">
                <li>・登下校で交通量の多い道路や横断歩道を通るご家庭</li>
                <li>・お子さまに交通安全の習慣を身につけさせたいご家庭</li>
                <li>・位置確認に加えて双方向の通話も使いたいご家庭</li>
                <li>・料金よりも安全機能の充実を優先したいご家庭</li>
              </ul>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange-dark mb-2">適さないご家庭</h3>
              <ul className="space-y-1.5 text-sm text-g700">
                <li>・月額・本体のコストをできるだけ抑えたいご家庭（他機種の約2倍）</li>
                <li>・充電の手間を減らしたいご家庭（電池持ちは最大約3日）</li>
                <li>・テキストのトークでお子さまとやりとりしたいご家庭（トーク非対応）</li>
                <li>・位置確認のみで足りるご家庭（安全機能が不要な場合）</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">SayuU（サユー）が気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">トヨタの技術を活かし、お子さまの交通安全に配慮しながら見守ることができるGPS端末です。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/mitene/" className="btn-accent">1位: みてねみまもりGPS</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
