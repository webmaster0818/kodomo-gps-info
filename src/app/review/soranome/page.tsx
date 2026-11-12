import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'soranome（ソラノメ）のレビュー【2026年11月】料金・仕様・販売終了の状況を公式で確認',
  description:
    'soranome（ソラノメ）を公式サイトの仕様で確認しました。測位はGPS（単独測位）とWi-Fi（SOS発動時）、通信はドコモ4G/LTE、月額539円・最大4台登録・電池最大1週間です。現行端末は2026年4月1日付の公式告知で販売を終了しています（2026年11月12日 公式確認）。',
};

const faqData = [
  { q: 'ソラノメの測位方式は？', a: '公式の端末仕様では、測位方式は「GPS（単独測位モード）、WiFi（SOS発動時）」です。対応GNSSはGPS・GLONASS・BeiDou・Galileo・みちびき・A-GPSです。携帯基地局による測位は公式仕様に記載がありません。公式は「環境によっては大きなずれが発生する場合がある」と注記しています（2026年11月12日 公式確認）。' },
  { q: 'SOSボタンはどう使いますか？', a: '公式サイトでは、GPS端末の本体ボタンを3回押すか長押しすると、保護者のアプリにSOS通知が届くと案内されています。SOS発動時はWi-Fiでも測位します。' },
  { q: '月額料金はいくらですか？', a: '月額基本料金539円（税込）です。別途、本体代金（通常 一括14,520円）と初期事務手数料3,300円（税込）がかかります。解約月の月額料金は日割りされず満額請求です（公式の料金欄・特定商取引法に基づく表記）。' },
  { q: 'バッテリーはどれくらい持ちますか？', a: '公式の端末仕様では「電池持ち 最大1週間」、バッテリー容量は700mAh、充電端子はMicroUSBです。電池残量が20%以下・10%以下になるとアプリに通知が届きます。' },
  { q: '何人で見守りできますか？', a: '公式サイトでは「スマホ一台でGPS端末を最大4台まで登録できる」と案内されています（見守る側の人数ではなく、1台のスマートフォンに登録できる端末の数です）。' },
  { q: 'トーク・通話機能はありますか？', a: 'トーク・通話機能は搭載されていません。位置確認・SOS・エリア通知に特化したGPS端末です。' },
  { q: 'ソラノメと他の機種の違いは？', a: '39g・51×51×15mmの小型端末で、ボタンによるSOS通知とエリア通知（10か所）に対応しています。通話・トーク機能はないため、お子さまとメッセージのやり取りをしたい場合は、BoTトークやみてねみまもりGPSなど通話・トーク対応機種が候補となります。なお、現行端末は2026年4月1日付の公式告知で販売を終了しています（2026年11月12日 公式確認）。' },
  { q: 'ソラノメの解約で注意することは？', a: '特定商取引法に基づく表記では、解約はマイページから申し入れ、解約月の月額料金は日割りされず満額請求、本体を割賦購入して残債がある場合は一括で支払うと定められています。解約後はその端末を再利用できません。現行端末は2026年4月1日付の公式告知で販売を終了しているため、新規の契約・購入はできません（2026年11月12日 公式確認）。' },
  { q: 'ソラノメは今も購入できますか？', a: '購入できません。公式サイトの2026年4月1日付の告知で現行端末の販売を終了しており、次期端末は開発中と発表されています。2026年11月12日の公式確認時点で、次期端末の発売時期は告知されていません。通話・トークのない位置情報専用の機種を探している場合は、みてねみまもりGPS（位置情報プラン）やあんしんウォッチャーが販売中です。' },
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

export default function SoranomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "soranome（ソラノメ）のレビュー", "datePublished": "2026-03-15", "dateModified": "2026-11-12", "author": {"@type": "Organization", "name": "子供見守りGPS最新情報 編集部", "url": "https://gps-kodomo.com/"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'soranome（ソラノメ）' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-g400 text-white">販売終了</span>
            <span className="tag-pill bg-blue text-white">ドコモ4G/LTE</span>
            <span className="tag-pill bg-orange text-white">SOSボタン搭載</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            soranome（ソラノメ）のレビュー
          </h1>
          <p className="text-g600 text-lg">株式会社グローバルコネクション運営 | 月額539円 | 端末4台まで登録</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          {/* 結論box */}
          <div className="rounded-2xl border-l-4 border-blue bg-blue-light/40 p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">ソラノメの現行端末は販売終了しています（2026年11月12日 公式確認）</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>仕様</strong>：測位は<strong>GPS（単独測位）とWi-Fi（SOS発動時）</strong>、通信はドコモ4G/LTEです。39g・IP55・耐落下1.5m、SOSボタンとエリア通知（10か所）に対応しています。</li>
              <li>・<strong>注意点</strong>：電池持ちは<strong>最大1週間</strong>、本体は通常<strong>14,520円</strong>＋初期事務手数料3,300円です。<strong>通話・トーク機能はありません</strong>。</li>
              <li>・<strong>料金</strong>：月額<strong>539円</strong>です。解約月は日割りされず満額請求です。</li>
              <li>・<strong>販売状況</strong>：公式サイトの2026年4月1日付の告知で現行端末の販売を終了し、次期端末は開発中と発表されています。2026年11月12日時点で、次期端末の発売時期は告知されていません。</li>
            </ul>
            <p className="text-xs text-g500 mt-3">出典：soranome公式サイト（端末仕様・料金・利用規約・特定商取引法に基づく表記／運営 株式会社グローバルコネクション）。最新の状況は公式サイトでご確認ください。<Link href="/#ranking" className="text-blue underline">他機種との比較ランキングはこちら</Link></p>
          </div>

          <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 mb-6 text-sm text-gray-700">
            <strong>【重要・2026年11月12日 公式確認】</strong>公式サイトの2026年4月1日付告知により、soranomeの<strong>現行端末は販売終了</strong>となっています(次期端末を開発中と発表)。以下のレビューは現行端末の情報で、新規の購入はできません。最新の状況は、<a href="https://soranome.net/" target="_blank" rel="noopener noreferrer nofollow" className="underline text-blue-600">公式サイト</a>でご確認ください。
          </div>
          <h2 className="section-title">soranome（ソラノメ）とは</h2>
          <p className="text-g600 mb-6">
            soranome（ソラノメ）は、株式会社グローバルコネクションが運営する子供用のポケットGPS端末です（専用アプリは「PocketGPS」）。
            測位はGPS（単独測位モード）で、SOS発動時はWi-Fiでも測位します。
            本体ボタンを3回押すか長押しすると、保護者のアプリにSOS通知が届きます。
            現行端末は2026年4月1日付の公式告知で販売を終了しており、以下は既にお持ちの方向けの情報です。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['運営会社', '株式会社グローバルコネクション'],
                    ['月額料金', '539円（税込）'],
                    ['本体価格', '14,520円（税込・通常）＋初期事務手数料3,300円'],
                    ['測位方式', 'GPS（単独測位モード）・Wi-Fi（SOS発動時）'],
                    ['対応GNSS', 'GPS・GLONASS・BeiDou・Galileo・みちびき・A-GPS'],
                    ['バッテリー', '最大1週間（700mAh・MicroUSB）'],
                    ['サイズ・重さ', '51×51×15mm・39g'],
                    ['SOS機能', 'SOSボタン搭載'],
                    ['登録できる端末', 'スマホ1台につき最大4台'],
                    ['通信回線', 'ドコモ 4G/LTE（FOMA）'],
                    ['防水防塵・耐落下', 'IP55・1.5m'],
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
              <h3 className="font-bold text-blue mb-3">測位のしくみ（公式仕様）</h3>
              <div className="space-y-3">
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue text-sm">通常時：GPS（単独測位モード）</p>
                  <p className="text-sm text-g600">GPS・GLONASS・BeiDou・Galileo・みちびき・A-GPSに対応しています。</p>
                </div>
                <div className="bg-green-light rounded-xl p-4">
                  <p className="font-bold text-green-dark text-sm">SOS発動時：Wi-Fiでも測位</p>
                  <p className="text-sm text-g600">携帯基地局による測位は公式仕様に記載がありません。公式は、環境によって大きなずれが出る場合があると注記しています。</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '', title: '現在地の確認', desc: '専用アプリ「PocketGPS」から、お子さまの現在地を確認できます。' },
              { icon: '', title: 'SOSボタン', desc: '本体ボタンを3回押すか長押しすると、保護者のアプリにSOS通知が届きます。' },
              { icon: '', title: 'エリア出入り通知', desc: '登録したエリア（10か所まで）の出入りをアプリに通知します。' },
              { icon: '', title: '移動履歴', desc: '単日の移動履歴は30日前まで、連続した移動履歴は7日分をまとめて表示できます。' },
              { icon: '', title: 'バッテリー通知', desc: '電池残量が20%以下・10%以下になるとアプリに通知します。' },
              { icon: '', title: '端末4台まで登録', desc: 'スマートフォン1台に、GPS端末を最大4台まで登録できます。' },
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
                <li>・39gの小型端末で、IP55・耐落下1.5mです</li>
                <li>・SOSボタンで緊急時に備えられます</li>
                <li>・月額539円と手頃な料金です</li>
                <li>・エリアの出入りを通知できます</li>
                <li>・移動履歴を30日前までさかのぼって確認できます</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・電池持ちは最大1週間です</li>
                <li>・本体14,520円（通常）に加え、初期事務手数料3,300円がかかります</li>
                <li>・測位はGPS単独が基本で、Wi-FiはSOS発動時のみです</li>
                <li>・トーク・通話機能はありません</li>
                <li>・1台のスマートフォンに登録できる端末は最大4台です</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">現行端末が向いていたご家庭・向かないご家庭</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-2">向いていたご家庭</h3>
              <ul className="space-y-1.5 text-sm text-g700">
                <li>・小さく軽い端末をランドセルやかばんに入れたいご家庭</li>
                <li>・登下校の到着・出発をエリア通知で確認したいご家庭</li>
                <li>・SOSボタンで緊急時に備えたいご家庭</li>
                <li>・通話・トークは不要で、位置確認のみで十分なご家庭</li>
              </ul>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange-dark mb-2">向かないご家庭</h3>
              <ul className="space-y-1.5 text-sm text-g700">
                <li>・お子さまとメッセージ・通話でやり取りしたいご家庭（トーク対応機種をおすすめします）</li>
                <li>・充電の手間を減らしたいご家庭（電池持ちは最大約1週間）</li>
                <li>・本体価格をできるだけ抑えたいご家庭</li>
                <li>・屋内や地下での位置確認を重視するご家庭（通常時はGPS単独測位）</li>
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

          <div className="mt-10 text-center bg-green-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">販売中の機種を探している方へ</h2>
            <p className="text-g600 mb-6 text-sm">ソラノメの現行端末は販売を終了しています。位置情報専用の機種は、他の機種との比較からお選びいただけます。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/mamosearch/" className="btn-accent">次: まもサーチ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
