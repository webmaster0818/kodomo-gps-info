import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'SayuU（サユー）徹底レビュー | トヨタの交通安全GPS端末',
  description:
    'トヨタ開発のSayuU（サユー）を徹底レビュー。左右確認検知、走行検知、双方向通話対応。月額1,210円、本体16,500円。交通安全に特化したGPS端末の機能・料金を詳しく解説。',
};

const faqData = [
  { q: 'SayuU（サユー）の左右確認検知とは？', a: '横断歩道などでお子さまが左右を確認したかどうかをセンサーで検知する機能です。左右確認せずに道路を渡ろうとした場合、音声で注意を促します。トヨタの自動車安全技術を応用した独自機能です。' },
  { q: '走行検知とはどんな機能？', a: 'お子さまが車やバイクに乗って移動していることを検知する機能です。通常の徒歩速度を超える移動を検知した場合、保護者に通知が送られます。交通事故や不審車両への乗車を早期に発見できます。' },
  { q: '通話機能はどう使いますか？', a: '保護者のスマホアプリからGPS端末に電話をかけることができます。また、お子さまもGPS端末のボタンを押して保護者に発信可能です。双方向の通話に対応しています。' },
  { q: '月額料金と本体価格は？', a: '月額1,210円（税込）、本体価格は16,500円（税込）です。他機種と比べて高めですが、通話機能・交通安全機能が含まれた料金です。' },
  { q: 'バッテリーはどれくらい持つ？', a: '最大約3日間です。通話機能や各種センサーを搭載しているため、バッテリー消費が多くなっています。毎日の充電が必要です。' },
  { q: 'トヨタが作っているのはなぜ？', a: 'トヨタは「交通事故ゼロ」をビジョンに掲げており、自動車の安全技術だけでなく歩行者の安全も守るために開発されました。自動運転技術で培ったセンサー技術やAI技術を活用しています。' },
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
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/#ranking' }, { name: 'SayuU（サユー）' }]} />

      <section className="bg-gradient-to-br from-orange-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">トヨタ開発</span>
            <span className="tag-pill bg-blue text-white">交通安全サポート</span>
            <span className="tag-pill bg-green text-white">通話対応</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            SayuU（サユー）徹底レビュー
          </h1>
          <p className="text-g600 text-lg">トヨタ提供 | 月額1,210円 | 左右確認検知・走行検知搭載</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">SayuU（サユー）とは</h2>
          <p className="text-g600 mb-6">
            SayuU（サユー）は、トヨタが開発した子供用GPS端末です。
            自動車メーカーならではの「交通安全」に特化した独自機能が最大の特徴。
            横断歩道での左右確認検知、異常な速度移動の走行検知、そして双方向通話にも対応。
            月額1,210円と他機種より高めですが、交通安全をとことん追求したい家庭に選ばれています。
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
                  <p className="text-sm text-g600 mt-1">通話＋交通安全機能付き</p>
                </div>
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">他機種の平均</p>
                  <p className="text-2xl font-extrabold text-g800">月額 528〜539円</p>
                  <p className="text-sm text-g600 mt-1">位置確認のみ</p>
                </div>
                <p className="text-sm text-g500">※ SayuUは通話・交通安全機能込みの価格です</p>
              </div>
            </div>
          </div>

          <h2 className="section-title">独自の交通安全機能</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-6 border-l-4 border-orange">
              <h3 className="font-bold text-g800 mb-2">左右確認検知</h3>
              <p className="text-sm text-g600">
                横断歩道や交差点で、お子さまが左右を確認したかどうかをセンサーで検知。
                確認せずに渡ろうとすると音声で注意を促します。
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
              { icon: '🚗', title: '交通安全サポート', desc: '左右確認検知と走行検知でお子さまの交通安全を見守る。' },
              { icon: '📞', title: '双方向通話', desc: '保護者・子供の双方から通話が可能。緊急時の連絡手段に。' },
              { icon: '📍', title: '位置確認', desc: 'GPS+みちびき+GLONASSでリアルタイムに位置を把握。' },
              { icon: '🔔', title: 'エリア通知', desc: '設定エリアへの出入りを自動通知。' },
              { icon: '📊', title: '移動履歴', desc: '過去の移動経路を記録・確認。' },
              { icon: '🛡️', title: 'トヨタ品質', desc: '自動車メーカーの品質基準で製造。耐久性に優れる。' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
                <p className="text-2xl mb-2">{f.icon}</p>
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
                <li>・交通安全に特化した唯一無二の機能</li>
                <li>・左右確認検知は他機種にない独自技術</li>
                <li>・双方向通話で緊急時も安心</li>
                <li>・走行検知で不審な移動を早期発見</li>
                <li>・トヨタブランドの高い信頼性</li>
                <li>・お子さまに交通安全の習慣を育てる</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・月額1,210円と他機種の約2倍</li>
                <li>・本体価格16,500円と高い</li>
                <li>・バッテリーが最大3日間で毎日充電が必要</li>
                <li>・トーク（テキスト）機能はない</li>
                <li>・初期コストが高い</li>
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

          <div className="mt-10 text-center bg-gradient-to-r from-orange-light to-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">SayuU（サユー）が気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">トヨタの技術で、お子さまの交通安全を守りながら見守れるGPS端末です。</p>
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
