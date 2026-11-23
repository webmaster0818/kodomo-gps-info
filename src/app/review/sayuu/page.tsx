import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'SayuU（サユー）の評判・口コミは？【2026年】トヨタの交通安全GPSの実力・料金を解説',
  description:
    'トヨタが開発したSayuU（サユー）をレビューします。左右確認検知・かけ出し検知・通話・テキストチャットに対応し、現行のSayuU 2は月額1,210円、本体19,800円です（2026年11月23日 公式確認）。交通安全に特化したGPS端末の機能と料金を解説します。',
};

const faqData = [
  { q: 'SayuU（サユー）の左右確認検知とは？', a: '横断歩道などで、お子さまが左右を確認したかどうかをセンサーで検知する機能です。公式FAQでは、内蔵のモーションセンサで角速度をもとにOK/NGを判定し、保護者は後で行動の履歴を振り返れると説明されています。安全確認地点には、トヨタ車の統計データに基づいて一時停止を無視する車両が多い地点が全国にあらかじめ設定されています（手動登録は20地点まで）。' },
  { q: 'かけ出し検知（走行検知）とはどのような機能ですか？', a: 'お子さまが走り出したことを検知・記録し、保護者に通知する機能です。公式FAQでは、モーションセンサで検知した加速度とGPSで測った移動速度から判定すると説明されています。公式は「親子間で安全な歩行について話すきっかけ」としての活用を案内しています。車やバイクでの移動を検知する機能ではありません。' },
  { q: '通話機能はどう使いますか？', a: '保護者のスマートフォンアプリから、GPS端末に電話をかけることができます。また、お子さまもGPS端末のボタンを押して保護者に発信できます。双方向の通話に対応しています。' },
  { q: '月額料金と本体価格はいくらですか？', a: '現行のSayuU 2は、月額料金1,210円（税込）、本体価格19,800円（税込）です（2026年11月23日 公式確認）。旧モデルのSayuU 1は、2026年10月20日掲載の公式のお知らせで「2026年11月30日をもって販売を終了」とされています（11月23日時点の公式販売サイトでは9,800円で販売中）。初期費用として送料780円と事務手数料1,210円もかかります。' },
  { q: 'バッテリーはどれくらい持ちますか？', a: '公式サポートのFAQでは、SayuU 2は「2日に1回の充電が必要」とされています（1日あたり移動モード4時間・みまもりOFF帯3時間30分・待機モード16時間30分で使った場合の目安。電池容量は1,440mAh）。旧モデルのSayuU 1は1日1回の充電が目安です。' },
  { q: 'トヨタが開発しているのはなぜですか？', a: 'トヨタは「交通事故ゼロ」をビジョンに掲げており、自動車の安全技術にとどまらず、歩行者の安全も守ることを目的に開発されました。左右確認検知の安全確認地点には、トヨタ車の統計データに基づく地点が使われています。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "SayuU（サユー）レビュー", "datePublished": "2026-03-15", "dateModified": "2026-11-23", "author": {"@type": "Organization", "name": "子供見守りGPS最新情報 編集部", "url": "https://gps-kodomo.com/"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
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
          <p className="text-g600 text-lg">トヨタ提供 | 月額1,210円 | 左右確認検知・かけ出し検知搭載</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          {/* 結論box */}
          <div className="rounded-2xl border-l-4 border-orange bg-orange-light/40 p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">交通安全機能を最も重視する場合はSayuUが適しています。左右確認検知・かけ出し検知と双方向通話を求めるご家庭向けです（料金は高めです）</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>強み</strong>：他機種にない<strong>左右確認検知・かけ出し検知</strong>の交通安全機能を備え、<strong>双方向通話</strong>にも対応しています。トヨタが提供する製品です。</li>
              <li>・<strong>弱み</strong>：月額<strong>1,210円</strong>と他機種の約2倍で、本体も<strong>19,800円</strong>（SayuU 2）と高額です。充電は公式FAQで「2日に1回」が目安です。</li>
              <li>・<strong>料金</strong>：月額1,210円（税込）と本体19,800円（税込・SayuU 2）です。旧モデルのSayuU 1は2026年11月30日で販売終了の予定です（公式のお知らせ）。</li>
              <li>・<strong>適したご家庭</strong>：交通安全の習慣づけを重視するご家庭、通話も使いたいご家庭です。<strong>適さないご家庭</strong>：料金と電池持ちを重視するご家庭、位置確認のみで足りるご家庭です。</li>
            </ul>
            <p className="text-xs text-g500 mt-3">出典：トヨタ（SayuU）公式の製品ページ・仕様・お知らせ、公式販売サイト（shop.sayuu.site）、公式サポートFAQ（2026年11月23日確認）。料金・仕様は変更される場合があります。お申し込み前に、公式サイトにて最新情報をご確認ください。<Link href="/#ranking" className="text-orange underline">他機種との比較ランキングはこちら</Link></p>
          </div>

          <h2 className="section-title">SayuU（サユー）とは</h2>
          <p className="text-g600 mb-6">
            SayuU（サユー）は、トヨタが開発した子供用GPS端末です。
            自動車メーカーならではの「交通安全」に特化した独自機能が最大の特徴です。
            横断歩道などでの左右確認検知、走り出しを記録するかけ出し検知に加え、双方向通話にも対応しています。
            月額1,210円と他機種より高めです。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'トヨタ自動車'],
                    ['月額料金', '1,210円（税込）'],
                    ['本体価格', '19,800円（税込・SayuU 2）'],
                    ['測位方式', 'GNSS（みちびき含む）+A-GPS+Wi-Fi+携帯基地局'],
                    ['バッテリー', '容量1,440mAh・2日に1回の充電が目安（公式FAQ・利用条件つき）'],
                    ['通話・メッセージ', '通話・テキストチャット・ボイスメッセージ'],
                    ['特殊機能', '左右確認検知・かけ出し検知'],
                    ['通信回線', 'LTE（ドコモLTEエリア）'],
                    ['防水', 'IP68（生活防水）'],
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
                安全確認地点で、お子さまが左右を確認したかどうかを内蔵のモーションセンサで検知し、
                保護者が後から行動の履歴を振り返れます。地点はトヨタ車の統計データで一時停止無視の車両が多い場所が
                全国にあらかじめ設定されています（手動登録は20地点まで）。
              </p>
            </div>
            <div className="card-hover p-6 border-l-4 border-blue">
              <h3 className="font-bold text-g800 mb-2">かけ出し検知</h3>
              <p className="text-sm text-g600">
                お子さまが走り出したことを、加速度とGPSの移動速度から検知・記録し、保護者に通知します。
                公式は、親子で安全な歩行について話すきっかけとしての活用を案内しています。
              </p>
            </div>
          </div>

          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '', title: '交通安全サポート', desc: '左右確認検知とかけ出し検知で、お子さまの交通安全を見守ります。' },
              { icon: '', title: '双方向通話', desc: '保護者・お子さまの双方から通話が可能です。緊急時の連絡手段として活用できます。' },
              { icon: '', title: '位置確認', desc: 'GNSS（みちびき含む）・A-GPS・Wi-Fi・携帯基地局で位置を測り、1分に1回自動で更新します。' },
              { icon: '', title: 'エリア通知', desc: '設定したエリアへの出入りを自動で通知します。' },
              { icon: '', title: '移動履歴', desc: '過去の移動経路を記録し、確認できます。' },
              { icon: '', title: 'SOS機能', desc: '作動するとブザーが鳴り、周囲の音を録音して保護者のスマホに自動送信します（公式FAQ。防犯ブザーとしては音は小さめと案内）。' },
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
                <li>・かけ出し検知で走り出しを記録・通知</li>
                <li>・トヨタブランドの高い信頼性</li>
                <li>・お子さまの交通安全の習慣づくりに役立つ点</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・月額1,210円と他機種の約2倍</li>
                <li>・本体価格が19,800円（SayuU 2）と高額</li>
                <li>・充電は2日に1回が目安（公式FAQ）</li>
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
                <li>・充電の手間を減らしたいご家庭（2日に1回が目安）</li>
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
