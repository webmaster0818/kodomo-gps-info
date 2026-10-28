import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'BoTトークの評判・口コミは？海外では使える？【2026年10月】料金・トーク機能を公式情報で解説',
  description:
    'BoTトーク（ビーサイズ）第6世代をレビューします。端末は海外では使えません（公式ヘルプ）が、子どもが日本・保護者が海外なら位置確認が可能です。月額528円〜748円の料金、トーク機能、見守りウォレット、口コミを読むときのポイントを解説します。',
};

const faqData = [
  { q: 'BoTトークの口コミを読むときのポイントは？', a: 'BoTトークは、GPSプラン（月額528円）とGPS＆トークプラン（748円）でトーク機能の有無と電池持ちが異なるため、口コミがどちらのプランについての感想かを確認することが重要です。また、公式サイトでは行動範囲の学習に1ヶ月以上の利用が必要と案内されているため、使い始めた直後の通知に関する口コミは、学習前の評価である可能性があります。' },
  { q: 'BoTトークは海外でも使えますか？', a: '使えません。BoT端末の位置情報送信は日本国内のLTE網を利用しているため、端末を海外に持ち出しても利用できないと、公式ヘルプ「海外でも利用できますか？」に明記されています（2026年10月28日確認）。ただし、「お子さまが日本国内・見守る保護者が海外」という場合は、保護者側がインターネットに接続できれば位置確認が可能です（単身赴任・海外出張のご家庭でも利用できます）。' },
  { q: 'BoTトークの月額料金はいくら？', a: 'GPSプラン（トーク機能なし）は月額528円（税込）、GPS＆トークプラン（トークの送受信が無制限）は月額748円（税込）です。プランはアプリからいつでも変更でき、契約事務手数料・年縛り・解約違約金はありません。端末代は5,280円（税込）＋送料です（BoT公式・2026年10月28日確認）。' },
  { q: '見守りウォレットとは何ですか？', a: 'BoTトーク（第6世代）と交通系ICカード（Suica・PASMO・ICOCAなど11種類。こども用カードも可）を一緒に持ち歩くことで、ICカードの残高、自動改札の入場・出場、バスの乗車・下車、お買い物の金額と時刻をアプリで確認できる機能です。BoTトーク自体が電子マネーになるわけではなく、BoTアプリからICカードへのチャージもできません。GPSプラン・GPS＆トークプランのどちらでも追加料金なしで利用でき、別売りの専用ケース「シリコンウォレット」の使用が推奨されています（BoT公式ヘルプ・2026年10月28日確認）。' },
  { q: 'AI行動学習とはどんな機能？', a: '公式サイトでは「見守りAI」と案内されています。自宅・学校・習い事などのよく行く場所や行動範囲を学習し、「通知スポット」への到着・出発や、普段行かない場所へ行ったときにプッシュ通知で知らせます。通知スポットは手動でも設定できます。行動範囲の学習には1ヶ月以上の利用が必要で、利用方法によっては提供できない場合があると記載されています（2026年10月28日確認）。' },
  { q: 'バッテリーはどれくらい持ちますか？', a: '公式の公表値は、GPSプランが電池優先モードで最長1ヶ月以上・頻度優先モードで最長3週間以上、GPS＆トークプランが電池優先モードで最長2週以上・頻度優先モードで最長1週間以上です。なお、公式ヘルプ「BoTの仕様」ではGPS＆トークプランを約3週間程度（電池優先）・約2週間程度（頻度優先）と記載しており、製品ページと表記が異なります。また、未再生のトークを長時間放置するとLEDの点滅で電池の消耗が大きくなり、1〜2日で電池が切れる場合があると公式ヘルプに記載されています（2026年10月28日確認）。' },
  { q: '防水性能はありますか？', a: '公式サイトでは「生活防水」「防塵」「耐衝撃」と案内されています（IP等級の記載はありません。2026年10月28日確認）。生活防水のため水没させないよう注意書きがあります。' },
  { q: '第6世代の新機能は？', a: '第6世代（見守りウォレット機能搭載モデル）は2026年2月18日に発売されました。公式ヘルプによると、第5世代（あんしんディスプレイ搭載モデル）との違いは見守りウォレット機能の有無で、位置情報やバッテリーなどの性能に違いはありません。重さは第6世代が58g、第5世代が60gです（2026年10月28日確認）。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "BoTトーク レビュー", "datePublished": "2026-03-15", "dateModified": "2026-10-28", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'BoTトーク' }]} />

      <section className="bg-green-light py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-green text-white">第6世代</span>
            <span className="tag-pill bg-orange text-white">見守りウォレット</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            BoTトーク レビュー
          </h1>
          <p className="text-g600 text-lg">ビーサイズ提供 | 声が送れるGPS（トーク） | 見守りAI搭載</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          {/* 結論box */}
          <div className="rounded-2xl border-l-4 border-blue bg-blue-light/40 p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">位置確認に加えて、声のメッセージ（トーク）や交通系ICカードの見守りも必要な場合は、BoTトークが適しています</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>強み</strong>：GPS＆トークプランでお子さまと<strong>声のメッセージ（トーク）</strong>を送り合えます（リアルタイムの通話ではありません）。<strong>見守りウォレット</strong>で交通系ICカードの残高や改札の入出場を確認でき、<strong>見守りAI</strong>が普段行かない場所への移動を通知します。</li>
              <li>・<strong>弱み</strong>：トークを使う場合は<strong>月額748円</strong>になり、電池持ちもGPSプランより短くなります（最長2週以上）。</li>
              <li>・<strong>海外での利用</strong>：端末は日本国内のLTE網を使うため、<strong>海外に持ち出すと使えません</strong>。お子さまが日本国内にいて、保護者が海外にいる場合は、アプリから位置を確認できます（<a href="https://support.bot.app/hc/ja/articles/13238381889561" target="_blank" rel="noopener noreferrer" className="text-blue underline">BoT公式ヘルプ</a>・2026年10月28日確認）。他機種の可否は<Link href="/knowledge/international/" className="text-blue underline">子供用GPSは海外で使える？</Link>にまとめています。</li>
              <li>・<strong>料金</strong>：GPSプラン月額<strong>528円</strong>／トークプラン<strong>748円</strong>で、契約期間の縛りや解約金はありません。</li>
              <li>・<strong>適しているご家庭</strong>：位置確認だけでなく、お子さまと連絡も取りたいご家庭です。<strong>適していないご家庭</strong>：できるだけ安く位置確認のみを行いたいご家庭です（GPS特化機種をおすすめします）。</li>
            </ul>
            <p className="text-xs text-g500 mt-3">出典：BoTトーク公式（製品・料金ページ、2026年10月28日確認）。料金・仕様は変更される場合があるため、お申し込み前に公式サイトにて最新情報をご確認ください。<Link href="/#ranking" className="text-blue underline">他機種との比較ランキングはこちら</Link></p>
          </div>

          <h2 className="section-title">BoTトークとは</h2>
          <p className="text-g600 mb-6">
            BoTトークは、ビーサイズが提供する子供用GPS端末です。
            録音した声を親子で送り合える「トーク」と、時刻・トークの送り主・電池残量を表示するディスプレイを備え、第6世代では交通系ICカードを見守る「見守りウォレット」機能に対応しています。
            月額528円のGPSプランと、トーク機能付きの748円のGPS＆トークプランから選べます。
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
                    ['本体価格', '5,280円（税込）＋送料'],
                    ['測位方式', 'GNSS（GPS・みちびき・BeiDou・Galileo・SBAS）＋アシストGPS・クラウド測位（Wi-Fi・携帯基地局）・モーションAI'],
                    ['バッテリー', 'GPSプラン：最長1ヶ月以上（バッテリー優先モード）／GPS＆トークプラン：最長2週以上'],
                    ['通信方式', 'LTE-M（ドコモLTEエリア）'],
                    ['耐久性', '生活防水・防塵・耐衝撃（IP等級の記載なし）'],
                    ['大きさ・重量', '50×50×21mm・約58g'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-g100">
                      <td className="py-2 font-semibold text-g700 w-1/3">{k}</td>
                      <td className="py-2 text-g600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-g500 mt-2">出典：<a href="https://www.bsize.com/bot/talk" target="_blank" rel="noopener noreferrer" className="text-blue underline">BoTトーク公式</a>（仕様・料金、2026年10月28日確認）</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">料金プラン</h3>
              <div className="space-y-3">
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">GPSプラン</p>
                  <p className="text-2xl font-extrabold text-g800">月額 528円<span className="text-sm font-normal text-g500">（税込）</span></p>
                  <p className="text-sm text-g600 mt-1">位置確認・見守りAIの通知・見守りウォレット（トーク機能なし）</p>
                </div>
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">GPS＆トークプラン</p>
                  <p className="text-2xl font-extrabold text-g800">月額 748円<span className="text-sm font-normal text-g500">（税込）</span></p>
                  <p className="text-sm text-g600 mt-1">GPSプランの機能＋親子のトーク送受信（無制限）</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '', title: 'トーク（声のメッセージ）', desc: '端末中央のボタンを長押しで録音、押すと再生します。保護者はアプリから声またはテキスト（音声AIが代読）で送れ、お子さまからのトークは文字起こしされます。送受信は約1分間隔で、リアルタイムの会話ではありません。' },
              { icon: '', title: '見守りウォレット', desc: '交通系ICカードと一緒に持ち歩くと、残高・改札の入出場・お買い物の金額をアプリで確認できます（第6世代のみ。チャージはできません）。' },
              { icon: '', title: '見守りAI', desc: 'よく行く場所や行動範囲を学習し、到着・出発や普段行かない場所への移動を通知します（行動範囲の学習には1ヶ月以上の利用が必要）。' },
              { icon: '', title: '高精度測位', desc: 'GNSS（GPS・みちびき・BeiDou・Galileo・SBAS）に Wi-Fi・基地局を組み合わせて位置を測位します（BoT公式・2026年10月28日確認）。' },
              { icon: '', title: '通知スポット', desc: '登録した場所への到着・出発をプッシュ通知で知らせます。学校・塾・自宅などを手動でも設定できます。' },
              { icon: '', title: '移動履歴', desc: '位置は最短1.5分間隔で自動更新され、過去1週間分の移動履歴をさかのぼって確認できます。' },
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
                <li>・トークの送受信は月額に含まれ、追加料金がかかりません</li>
                <li>・見守りウォレットで交通系ICカードの残高・改札の入出場を確認できます</li>
                <li>・見守りAIが普段行かない場所への移動を通知します</li>
                <li>・月額528円〜で、契約事務手数料・年縛り・解約違約金がありません</li>
                <li>・サイレントモードが標準で、学校に持ち込みやすい設計です</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・電池持ちはGPSプランで最長1ヶ月以上、GPS＆トークプランで最長2週以上です</li>
                <li>・トークを使うには月額748円のプランが必要です</li>
                <li>・リアルタイムの音声通話には対応していません</li>
                <li>・公式サイトにSOS（緊急通知）ボタンの記載はありません</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">おすすめのご家庭 / 適していないご家庭</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-2">おすすめのご家庭</h3>
              <ul className="space-y-1.5 text-sm text-g700">
                <li>・お子さまと声のメッセージ（トーク）でやり取りしたいご家庭</li>
                <li>・電車・バス通学で、交通系ICカードの残高や改札の入出場を確認したいご家庭（見守りウォレット）</li>
                <li>・普段行かない場所への移動を自動で把握したいご家庭（見守りAI）</li>
                <li>・1台で位置確認と連絡を済ませたいご家庭</li>
              </ul>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange-dark mb-2">適していないご家庭</h3>
              <ul className="space-y-1.5 text-sm text-g700">
                <li>・月額をできるだけ抑え、位置確認のみで十分なご家庭（GPS特化機種をおすすめします）</li>
                <li>・SOSボタンやリアルタイムの通話が必要なご家庭</li>
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

          <div className="mt-10 text-center bg-green-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">BoTトークをご検討中の方へ</h2>
            <p className="text-g600 mb-6 text-sm">トーク・見守りウォレット・見守りAIを備えたGPS端末です。料金・仕様はお申し込み前に公式サイトでご確認ください。</p>
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
