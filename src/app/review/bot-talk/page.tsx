import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'BoTトークの評判・口コミは？海外では使える？【2026年10月】料金・トーク機能を公式情報で解説',
  description:
    'BoTトーク（ビーサイズ）第6世代をレビューします。端末は海外では使えません（公式ヘルプ）が、子どもが日本・保護者が海外なら位置確認が可能です。月額528円〜748円の料金、トーク機能、見守りウォレット、口コミを読むときのポイントを解説します。',
};

const faqData = [
  { q: 'BoTトークの口コミを読むときのポイントは？', a: 'BoTトークは、GPSプラン（月額528円）とトークプラン（748円）で使える機能が大きく異なるため、口コミがどちらのプランについての感想かを確認することが最も重要です。また、AI学習型の見守り（行動を学習して通知）という方式のため、使い始めた直後の精度に関する口コミは、学習前の評価である可能性があります。' },
  { q: 'BoTトークは海外でも使えますか？', a: '使えません。BoT端末の位置情報送信は日本国内のLTE網を利用しているため、端末を海外に持ち出しても利用できないと、公式ヘルプ「海外でも利用できますか？」に明記されています（2026年10月15日確認）。ただし、「お子さまが日本国内・見守る保護者が海外」という場合は、保護者側がインターネットに接続できれば位置確認が可能です（単身赴任・海外出張のご家庭でも利用できます）。' },
  { q: 'BoTトークの月額料金はいくら？', a: 'GPSプラン（位置確認のみ）は月額528円（税込）、トークプラン（メッセージ送受信）は月額748円（税込）です。契約期間の縛りや解約金はありません。' },
  { q: '見守りウォレットとは何ですか？', a: '見守りウォレットは、BoTトークに搭載された電子マネー機能です。保護者がアプリからチャージし、お子さまがコンビニなどでの支払いに使えます。利用履歴は保護者のアプリに通知されます。' },
  { q: 'AI行動学習とはどんな機能？', a: 'お子さまの日常の行動パターンをAIが学習し、いつもと異なるルートを通った場合や、予定時刻に到着しない場合に通知する機能です。使うほど精度が向上します。' },
  { q: 'バッテリーはどれくらい持ちますか？', a: '公式の公表値は、GPSプランが電池優先モードで最長1ヶ月以上・頻度優先モードで最長3週間以上、GPS＆トークプランが電池優先モードで最長2週以上・頻度優先モードで最長1週間以上です。条件によっては1〜2日で充電が必要になる場合があると公式FAQに記載されています（2026年10月19日確認）。' },
  { q: '防水性能はありますか？', a: '公式サイトでは「生活防水」「防塵」と案内されています（IP等級の記載はありません。2026年10月19日確認）。雨に濡れる程度を想定したもので、水没には対応していません。' },
  { q: '第6世代の新機能は？', a: '第6世代では、処理速度の向上、バッテリー効率の改善、見守りウォレット機能の追加、より高精度なAI行動学習の搭載が行われています。' },
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

export default function BotTalkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "BoTトーク レビュー", "datePublished": "2026-03-15", "dateModified": "2026-10-19", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'BoTトーク' }]} />

      <section className="bg-gradient-to-br from-green-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-green text-white">第6世代</span>
            <span className="tag-pill bg-orange text-white">見守りウォレット</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            BoTトーク レビュー
          </h1>
          <p className="text-g600 text-lg">ビーサイズ提供 | 元祖トーク機能 | AI行動学習搭載</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          {/* 結論box */}
          <div className="rounded-2xl border-l-4 border-blue bg-blue-light/40 p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">位置確認に加えて「トーク・通話」や電子マネーも必要な場合は、BoTトークが適しています</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>強み</strong>：トークプランでお子さまと<strong>メッセージ・通話</strong>ができます。<strong>見守りウォレット</strong>（電子マネー）を備え、<strong>AI行動学習</strong>でいつもと異なる動きを通知します。</li>
              <li>・<strong>弱み</strong>：多機能な分、<strong>トークプランは月額748円</strong>とやや高めです。位置精度に特化した設計ではありません。</li>
              <li>・<strong>海外での利用</strong>：端末は日本国内のLTE網を使うため、<strong>海外に持ち出すと使えません</strong>。お子さまが日本国内にいて、保護者が海外にいる場合は、アプリから位置を確認できます（<a href="https://support.bot.app/hc/ja/articles/13238381889561" target="_blank" rel="noopener noreferrer" className="text-blue underline">BoT公式ヘルプ</a>・2026年10月15日確認）。他機種の可否は<Link href="/knowledge/international/" className="text-blue underline">子供用GPSは海外で使える？</Link>にまとめています。</li>
              <li>・<strong>料金</strong>：GPSプラン月額<strong>528円</strong>／トークプラン<strong>748円</strong>で、契約期間の縛りや解約金はありません。</li>
              <li>・<strong>適しているご家庭</strong>：位置確認だけでなく、お子さまと連絡も取りたいご家庭です。<strong>適していないご家庭</strong>：できるだけ安く位置確認のみを行いたいご家庭です（GPS特化機種をおすすめします）。</li>
            </ul>
            <p className="text-xs text-g500 mt-3">出典：BoTトーク公式（製品・料金ページ）。料金・仕様は変更される場合があるため、お申し込み前に公式サイトにて最新情報をご確認ください。<Link href="/#ranking" className="text-blue underline">他機種との比較ランキングはこちら</Link></p>
          </div>

          <h2 className="section-title">BoTトークとは</h2>
          <p className="text-g600 mb-6">
            BoTトークは、ビーサイズが提供する子供用GPS端末の元祖的な存在です。
            トーク機能の先駆けとして知られ、第6世代ではAI行動学習や見守りウォレット（電子マネー）機能も搭載しています。
            月額528円の基本プランから、トーク機能付きの748円のプランまで選べます。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'ビーサイズ株式会社'],
                    ['世代', '第6世代（最新）'],
                    ['月額料金', '528円 / 748円（トーク付き）'],
                    ['本体価格', '5,280円（税込）'],
                    ['測位方式', 'GNSS（GPS・みちびき・BeiDou・Galileo・SBAS）＋アシストGPS・Wi-Fi・基地局・クラウド測位'],
                    ['バッテリー', 'GPSプラン：最長1ヶ月以上（バッテリー優先モード）／GPS＆トークプラン：最長2週以上'],
                    ['通信方式', 'LTE-M（ドコモLTEエリア）'],
                    ['防水', '生活防水・防塵（IP等級の記載なし）'],
                    ['大きさ・重量', '50×50×21mm・約58g'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-g100">
                      <td className="py-2 font-semibold text-g700 w-1/3">{k}</td>
                      <td className="py-2 text-g600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-g500 mt-2">出典：<a href="https://www.bsize.com/bot/talk" target="_blank" rel="noopener noreferrer" className="text-blue underline">BoTトーク公式</a>（仕様・料金、2026年10月19日確認）</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">料金プラン</h3>
              <div className="space-y-3">
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">GPSプラン</p>
                  <p className="text-2xl font-extrabold text-g800">月額 528円<span className="text-sm font-normal text-g500">（税込）</span></p>
                  <p className="text-sm text-g600 mt-1">位置確認・行動学習・エリア通知</p>
                </div>
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">トークプラン</p>
                  <p className="text-2xl font-extrabold text-g800">月額 748円<span className="text-sm font-normal text-g500">（税込）</span></p>
                  <p className="text-sm text-g600 mt-1">GPSプラン＋トーク＋見守りウォレット</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '💬', title: '元祖トーク機能', desc: 'テキスト・音声メッセージを送受信できます。ボタン操作のため、お子さまでも簡単に使えます。' },
              { icon: '💳', title: '見守りウォレット', desc: '電子マネー機能を搭載しています。保護者がチャージし、利用履歴も確認できます。' },
              { icon: '🧠', title: 'AI行動学習', desc: '日常の行動パターンを学習し、普段と異なる行動を検知して通知します。使うほど精度が向上します。' },
              { icon: '📍', title: '高精度測位', desc: 'GNSS（GPS・みちびき・BeiDou・Galileo・SBAS）に Wi-Fi・基地局を組み合わせて位置を測位します（BoT公式・2026年10月20日確認）。' },
              { icon: '🔔', title: 'エリア通知', desc: '登録したエリアへの出入りを自動で通知します。学校・塾・自宅などを設定できます。' },
              { icon: '📊', title: '移動履歴', desc: '1日の移動経路を記録・表示します。通学路や行動パターンを確認できます。' },
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
                <li>・元祖トーク機能による実績と安定性</li>
                <li>・見守りウォレットで電子マネーにも対応</li>
                <li>・AI行動学習で普段と異なる行動を自動検知</li>
                <li>・月額528円〜の手頃な料金</li>
                <li>・第6世代で性能が大幅に向上</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・バッテリーが最大1カ月（みてねより短い）</li>
                <li>・トーク機能は追加料金が必要（748円）</li>
                <li>・通話機能は非対応</li>
                <li>・SOSボタンは非搭載</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">おすすめのご家庭 / 適していないご家庭</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-2">おすすめのご家庭</h3>
              <ul className="space-y-1.5 text-sm text-g700">
                <li>・お子さまとメッセージ・通話でやり取りしたいご家庭</li>
                <li>・おつかいやコンビニ用に電子マネー（見守りウォレット）を持たせたいご家庭</li>
                <li>・行動パターンから「いつもと違う」動きを自動で把握したいご家庭（AI行動学習）</li>
                <li>・1台で見守り・連絡・お金の管理を完結させたいご家庭</li>
              </ul>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange-dark mb-2">適していないご家庭</h3>
              <ul className="space-y-1.5 text-sm text-g700">
                <li>・月額をできるだけ抑え、位置確認のみで十分なご家庭（GPS特化機種をおすすめします）</li>
                <li>・電子マネーやトークが不要なご家庭</li>
                <li>・屋内・地下での位置精度を最優先したいご家庭（3方式測位の機種をおすすめします）</li>
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
          <p className="text-sm text-g600 mt-3">BoTを含む主要5機種の海外利用の可否（公式FAQ）と、海外旅行中の代わりの方法は<Link href="/knowledge/international/" className="text-blue underline">子供用GPSは海外で使える？</Link>でまとめています。</p>

          <div className="mt-10 text-center bg-gradient-to-r from-green-light to-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">BoTトークをご検討中の方へ</h2>
            <p className="text-g600 mb-6 text-sm">トーク・見守りウォレット・AI行動学習を備えた、見守り以外の用途にも対応する多機能GPS端末です。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/anshin-watcher/" className="btn-accent">次: あんしんウォッチャー</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
