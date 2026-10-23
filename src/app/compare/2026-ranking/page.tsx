import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '【2026年最新】子供用GPSおすすめランキング11選｜全機種比較',
  description:
    '2026年最新の子供用GPSおすすめランキング11選です。精度・バッテリー・機能・料金・使いやすさの5つの評価軸で全機種を評価しています。初期費用・月額・防水・通知機能の比較表、目的別のおすすめ、選び方ガイドも掲載しています。',
  keywords: ['子供GPS', 'おすすめ', 'ランキング', '2026', '比較', '全機種', '最新'],
  openGraph: {
    images: ['/og.png'],
    title: '【2026年最新】子供用GPSおすすめランキング11選｜全機種比較',
    description: '2026年最新の子供用GPSおすすめランキング11選です。精度・バッテリー・機能・料金・使いやすさの5つの評価軸で全機種を評価しています。',
  },
};

const faqData = [
  { q: '2026年で最もおすすめの子供用GPSはどれですか？', a: '総合1位はみてねみまもりGPS第3世代です。月額528円の低価格、最大2カ月のバッテリー持ち、高い測位精度、分かりやすいアプリ操作を兼ね備えており、費用対効果が最も優れています。初めてGPS端末を持たせる方に特におすすめします。' },
  { q: '月額料金が最も安いGPSはどれですか？', a: 'みてねみまもりGPS（月額528円）、まもサーチ（月額528円）が最安クラスです。いずれも位置確認・エリア通知・SOS通知の基本機能を備えており、費用を抑えたい場合にも十分な性能です。' },
  { q: 'トーク（音声メッセージ）機能付きのGPSはありますか？', a: 'BoTトーク（月額748円）が代表的です。端末のボタンを押すだけで、保護者のスマートフォンに音声メッセージを送ることができます。また、myFirst Fone R2やキッズフォン3は通話機能にも対応しています。' },
  { q: 'バッテリーが最も長持ちするGPSはどれですか？', a: 'みてねみまもりGPS第3世代が最長クラスで、測位間隔3分の設定で最大約2カ月持続します。BoTトークやあんしんウォッチャーも1カ月以上の持続が可能です。腕時計型は毎日〜2日ごとの充電が必要です。' },
  { q: '腕時計型のGPSにはどのようなメリットがありますか？', a: '腕に装着するため紛失しにくいこと、通話やメッセージ機能があること、カメラ付きの機種もあることなどがメリットです。一方で、バッテリーが1〜2日と短いこと、月額料金が高めであること、学校で禁止される場合があることがデメリットです。' },
  { q: '小学校にGPS端末を持っていけますか？', a: 'ほとんどの小学校で、子供用GPS端末の持ち込みは許可されています。スマートフォンは禁止でもGPS端末は認めている学校が大半です。ただし、腕時計型や通話機能付きの端末は制限される場合があるため、事前に学校へご確認ください。' },
  { q: 'GPS端末はいつから持たせるべきですか？', a: '最も多いのは小学校入学時（6歳）です。一人で通学を始めるタイミングが適しています。幼稚園・保育園の年長から持たせるご家庭や、習い事で一人で行動する機会が増える小学2〜3年生で導入するご家庭もあります。' },
  { q: '2台目以降の割引はありますか？', a: 'ほとんどのGPS端末には複数台割引がなく、端末ごとに月額料金がかかります。ただし、保護者アプリは1つで複数台を管理でき、家族で共有できるため、アプリの追加費用は不要です。' },
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

const rankingData = [
  {
    rank: 1, name: 'みてねみまもりGPS（MG05）', score: 95, initial: 5280, monthly: 528,
    battery: '最大2カ月', waterproof: 'IP55', weight: '約61g', carrier: 'ソフトバンク LTE',
    notifications: 'エリア通知/SOS/バッテリー低下/速度異常/定時',
    merit: 'バッテリー持ちが長く、月額料金も低く抑えられています。アプリの操作性にも定評があります。みまもりAIが行動パターンを学習します。',
    demerit: '防水性能はIP55で標準的です。トーク機能はありません。',
    recommend: '初めてGPS端末を持たせる方、費用を抑えたい方、バッテリー持ちを重視する方',
    review: '/review/mitene/',
  },
  {
    rank: 2, name: 'BoTトーク', score: 92, initial: 5280, monthly: 748,
    battery: '最長1ヶ月以上（GPSプラン）', waterproof: '生活防水・防塵', weight: '約58g', carrier: 'LTE-M（ドコモLTEエリア）',
    notifications: 'エリア通知/SOS/バッテリー低下/速度異常/定時/長時間停止',
    merit: '音声メッセージの送受信が可能です。AIが通学ルートを自動で学習し、ルートを外れた際に通知します。通知機能が最も充実しています。',
    demerit: '月額料金は528円クラスの機種より高めです。トーク機能を利用するとバッテリー消費が増えます。',
    recommend: 'お子さまと音声でやり取りしたい方、通知機能を重視する方',
    review: '/review/bot-talk/',
  },
  {
    rank: 3, name: 'あんしんウォッチャー', score: 90, initial: 11000, monthly: 539,
    battery: '最大2カ月', waterproof: 'IP55', weight: '約53g', carrier: 'au LTE',
    notifications: 'エリア通知/SOS/バッテリー低下/定時',
    merit: 'au回線のため山間部のカバー率が高い点が特長です。auユーザーはキャリア決済に対応しています。セコムとの連携オプションもあります。',
    demerit: '初期費用が11,000円とやや高めです。速度異常通知には対応していません。',
    recommend: 'au回線のエリアで使いたい方、山間部・郊外にお住まいの方',
    review: '/review/anshin-watcher/',
  },
  {
    rank: 4, name: 'まもサーチ3', score: 87, initial: 5280, monthly: 528,
    battery: '最大2か月', waterproof: 'IP65', weight: '約39g', carrier: 'ソフトバンク LTE',
    notifications: 'エリア通知/SOS/バッテリー低下/定時/長時間停止',
    merit: '約39gで、当サイトが比較した販売中の機種では最も軽量です。長時間停止通知に対応しています。ストラップホールがあり、取り付けが容易です。',
    demerit: '速度異常通知には対応していません。',
    recommend: '軽さを重視する方、ランドセルに入れられる小型の端末を希望する方',
    review: '/review/mamosearch/',
  },
  {
    rank: 5, name: 'myFirst Fone R2', score: 84, initial: 26980, monthly: 998,
    battery: '連続通話 約6時間', waterproof: 'IPX8', weight: '約48g', carrier: 'ドコモ/ソフトバンク LTE',
    notifications: 'エリア通知/SOS/バッテリー低下/定時',
    merit: '腕時計型で、通話・ビデオ通話が可能です。防水性能はIPX8（生活防水・水深3mで5分まで）と公表されています。カメラと音楽再生機能を備えています。',
    demerit: '初期費用・月額料金ともに最高クラスです。バッテリーは2日程度です。学校で使用できない場合があります。',
    recommend: '通話機能が必要な方、多機能な腕時計型を希望する方',
    review: '/review/myfirst-fone/',
  },
  {
    rank: 6, name: 'キッズフォン3', score: 81, initial: 20880, monthly: 539,
    battery: '約2日', waterproof: 'IPX5/IPX8', weight: '約115g', carrier: 'ソフトバンク LTE',
    notifications: 'エリア通知/SOS/バッテリー低下/定時',
    merit: '通話・SMSに対応しています。カメラを搭載し、防犯ブザーとも連動します。ソフトバンクショップでサポートを受けられます。',
    demerit: 'サイズが大きく重めです。バッテリー持ちが短く、ソフトバンクとの契約が必要です。',
    recommend: '通話機能が必須で、ソフトバンクをご利用の方',
    review: '/review/kids-phone/',
  },
  {
    rank: 7, name: 'Hamic POCKET（ハミックポケット）', score: 79, initial: 12100, monthly: 1100,
    battery: '約2日', waterproof: 'IPX4', weight: '約107g', carrier: 'ドコモ LTE',
    notifications: 'エリア通知/SOS/バッテリー低下',
    merit: 'メッセージ・通話に対応しています。スマートフォンを持つ前の段階として使うことができ、子供向けの画面設計です。',
    demerit: '月額料金が最も高い機種です。バッテリー持ちが短く、防水はIPX4で、重さもあります。',
    recommend: 'スマートフォンを持つ前の段階として持たせたい方',
    review: '/review/hamic/',
  },
  {
    rank: 8, name: 'みもりGPSトーク', score: 78, initial: 3800, monthly: 748,
    battery: '最大2ヶ月（エコモード）', waterproof: 'IPX5', weight: '約62g', carrier: 'ドコモ LTE-M',
    notifications: 'エリア通知/活動範囲外/危険な場所/不審者情報/通知ボタン',
    merit: '親子で音声メッセージを送り合えるトーク機能（回数制限なし）と、日本不審者情報センターと連携した不審者情報の通知を備えています。',
    demerit: '月額748円で、月額528円の機種より高くなります。本体3,800円はキャンペーン価格（2026年10月23日確認）で、通常価格は公式に記載がありません。',
    recommend: '親子の音声のやりとりと、不審者情報の通知を重視する方',
    review: '/review/mimori/',
  },
  {
    rank: 9, name: 'ハロここ', score: 77, initial: 6380, monthly: 580,
    battery: '約1カ月', waterproof: 'IP55', weight: '約42g', carrier: 'ソフトバンク LTE',
    notifications: 'エリア通知/SOS/バッテリー低下/定時',
    merit: 'コンパクトで軽量です。月額580円と手頃で、機能がシンプルなため使いやすい機種です。',
    demerit: '通知機能は基本的なもののみで、速度異常・長時間停止の通知には対応していません。',
    recommend: 'シンプルな機能で十分な方、軽量な端末を希望する方',
    review: '/review/halococo/',
  },
  {
    rank: 10, name: 'あんしんウォッチャー LE', score: 75, initial: 5980, monthly: 539,
    battery: '最大1カ月', waterproof: 'IP55', weight: '約53g', carrier: 'au LTE',
    notifications: 'エリア通知/SOS/バッテリー低下/定時',
    merit: '通常版より初期費用が安く、au回線のカバー力はそのままです。基本機能は通常版と同等です。',
    demerit: '一部の機能が制限されています。キャンペーン限定モデルのため、在庫状況にご注意ください。',
    recommend: 'あんしんウォッチャーを費用を抑えて試したい方',
    review: '/review/anshin-watcher/',
  },
  {
    rank: 11, name: 'まもサーチ ミニ', score: 74, initial: 3980, monthly: 528,
    battery: '約2週間', waterproof: 'IP55', weight: '約30g', carrier: 'ソフトバンク LTE',
    notifications: 'エリア通知/SOS/バッテリー低下',
    merit: '業界最安クラスの初期費用です。約30gと非常に軽量で、試験的な導入に適しています。',
    demerit: 'バッテリー持ちが短めで、通知機能も限定的です。',
    recommend: '初期費用を抑えたい方、試験的にGPS端末を導入したい方',
    review: '/review/mamosearch/',
  },
];

const fullComparisonData = rankingData.map((d) => ({
  name: d.name,
  initial: d.initial,
  monthly: d.monthly,
  battery: d.battery,
  waterproof: d.waterproof,
  weight: d.weight,
  carrier: d.carrier,
}));

const purposeRecommendations = [
  {
    purpose: '費用重視',
    icon: '',
    picks: [
      { name: 'みてねみまもりGPS', reason: '月額528円で、バッテリー持ちが最長クラスです。総合的な費用対効果が最も優れています。' },
      { name: 'まもサーチ ミニ', reason: '初期費用3,980円の最安エントリーモデルです。' },
      { name: 'まもサーチ', reason: '月額528円で軽量・コンパクトです。長時間停止通知にも対応しています。' },
    ],
  },
  {
    purpose: '機能重視',
    icon: '',
    picks: [
      { name: 'BoTトーク', reason: '音声メッセージ、AI学習、通知機能が最も充実しています。' },
      { name: 'myFirst Fone R2', reason: '通話・ビデオ通話・カメラ・音楽再生の機能をすべて備えています。' },
    ],
  },
  {
    purpose: 'バッテリー重視',
    icon: '',
    picks: [
      { name: 'みてねみまもりGPS', reason: 'バッテリー持ちは最大2カ月です。' },
      { name: 'あんしんウォッチャー', reason: 'バッテリー持ちは最大1.5カ月です。au回線による安定した通信も特長です。' },
    ],
  },
  {
    purpose: '通話機能付き',
    icon: '',
    picks: [
      { name: 'myFirst Fone R2', reason: '腕時計型で、通話・ビデオ通話が可能です。' },
      { name: 'キッズフォン3', reason: '電話・SMSに対応し、ソフトバンクショップでサポートを受けられます。' },
      { name: 'Hamic POCKET', reason: 'スマートフォンを持つ前の段階として使える機種です。メッセージと通話に対応しています。' },
    ],
  },
];

export default function Ranking2026Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "【2026年最新】子供用GPSおすすめランキング11選｜全機種比較", "datePublished": "2026-03-15", "dateModified": "2026-10-19", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '比較', href: '/compare/' }, { name: '2026年おすすめランキング' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">2026年最新</span>
            <span className="tag-pill bg-blue text-white">ランキング</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            【2026年最新】子供用GPSおすすめランキング11選
          </h1>
          <p className="text-g600 text-lg">全機種を5つの評価軸で比較し、お子さまに合った1台を選ぶための情報をまとめています。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">

          <h2 className="section-title">評価基準（5つの評価軸）</h2>
          <p className="text-g600 mb-4">
            当サイトでは、子供用GPS端末を以下の5つの軸で評価しています。
            各軸を20点満点（合計100点満点）で採点し、総合点でランキングを決定しています。
          </p>
          <div className="grid sm:grid-cols-5 gap-3 mb-8">
            {[
              { axis: '測位精度', weight: '20点', desc: 'GPS/Wi-Fi/基地局による総合的な精度を評価します。みちびき対応の有無も加味します。' },
              { axis: 'バッテリー', weight: '20点', desc: '1回の充電で持続する日数を評価します。充電の頻度が少ないほど高く評価します。' },
              { axis: '機能', weight: '20点', desc: '通知の種類、トーク、SOS、AI学習など付加機能の充実度を評価します。' },
              { axis: '料金', weight: '20点', desc: '初期費用と月額料金を合わせた2年間の総額を評価します。総額が安いほど高く評価します。' },
              { axis: '使いやすさ', weight: '20点', desc: 'アプリの画面設計、設定の簡単さ、サイズ、重さ、子供の扱いやすさを評価します。' },
            ].map((a) => (
              <div key={a.axis} className="card-hover p-4 text-center">
                <h3 className="font-bold text-g800 text-sm mb-1">{a.axis}</h3>
                <p className="text-blue font-extrabold text-lg mb-1">{a.weight}</p>
                <p className="text-xs text-g500">{a.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">総合ランキング 1〜11位</h2>
          <div className="space-y-6 mb-10">
            {rankingData.map((d) => (
              <div key={d.rank} className={`card-hover p-6 ${d.rank <= 3 ? 'border-l-4 border-orange' : ''}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-white text-lg ${
                    d.rank === 1 ? 'bg-orange' : d.rank === 2 ? 'bg-blue' : d.rank === 3 ? 'bg-green-600' : 'bg-g400'
                  }`}>
                    {d.rank}
                  </span>
                  <div>
                    <h3 className="font-extrabold text-g800 text-lg">{d.name}</h3>
                    <p className="text-sm text-blue font-bold">総合スコア: {d.score}/100点</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-2 mb-3 text-sm">
                  <p className="text-g600"><strong>初期費用:</strong> {d.initial.toLocaleString()}円</p>
                  <p className="text-g600"><strong>月額:</strong> {d.monthly.toLocaleString()}円</p>
                  <p className="text-g600"><strong>バッテリー:</strong> {d.battery}</p>
                  <p className="text-g600"><strong>防水:</strong> {d.waterproof}</p>
                  <p className="text-g600"><strong>重さ:</strong> {d.weight}</p>
                  <p className="text-g600"><strong>回線:</strong> {d.carrier}</p>
                </div>
                <p className="text-xs text-g500 mb-2"><strong>対応通知:</strong> {d.notifications}</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <div className="bg-blue-light rounded-lg p-3">
                    <p className="text-xs font-bold text-blue mb-1">メリット</p>
                    <p className="text-sm text-g600">{d.merit}</p>
                  </div>
                  <div className="bg-orange-light rounded-lg p-3">
                    <p className="text-xs font-bold text-orange mb-1">デメリット</p>
                    <p className="text-sm text-g600">{d.demerit}</p>
                  </div>
                </div>
                <p className="text-sm text-g700 mb-2"><strong>おすすめの方:</strong> {d.recommend}</p>
                <Link href={d.review} className="text-sm text-blue hover:underline font-semibold">
                  詳細レビューを見る →
                </Link>
              </div>
            ))}
          </div>

          <h2 className="section-title">全機種比較表</h2>
          <p className="text-sm text-g500 mb-3">※ 価格は（税込）、2026年5月時点の情報です。横にスクロールすると、すべての項目をご確認いただけます。</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-xs border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-2 px-2 text-left font-bold text-g800">機種名</th>
                  <th className="py-2 px-2 text-right font-bold text-g800">初期費用</th>
                  <th className="py-2 px-2 text-right font-bold text-g800">月額</th>
                  <th className="py-2 px-2 text-left font-bold text-g800">バッテリー</th>
                  <th className="py-2 px-2 text-center font-bold text-g800">防水</th>
                  <th className="py-2 px-2 text-left font-bold text-g800">重さ</th>
                  <th className="py-2 px-2 text-left font-bold text-g800">通信回線</th>
                </tr>
              </thead>
              <tbody>
                {fullComparisonData.map((d) => (
                  <tr key={d.name} className="border-b border-g100">
                    <td className="py-2 px-2 font-semibold text-g700">{d.name}</td>
                    <td className="py-2 px-2 text-right text-g600">{d.initial.toLocaleString()}円</td>
                    <td className="py-2 px-2 text-right text-g600">{d.monthly.toLocaleString()}円</td>
                    <td className="py-2 px-2 text-g600">{d.battery}</td>
                    <td className="py-2 px-2 text-center text-g600">{d.waterproof}</td>
                    <td className="py-2 px-2 text-g600">{d.weight}</td>
                    <td className="py-2 px-2 text-g600">{d.carrier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">目的別おすすめ3選</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {purposeRecommendations.map((p) => (
              <div key={p.purpose} className="card-hover p-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-bold text-g800 text-lg">{p.purpose}</h3>
                </div>
                <div className="space-y-3">
                  {p.picks.map((pick, i) => (
                    <div key={pick.name} className="flex gap-3 items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue text-white flex items-center justify-center font-bold text-xs">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-g800 text-sm">{pick.name}</p>
                        <p className="text-xs text-g600">{pick.reason}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">選び方フローチャート</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">以下の質問に順にお答えいただくと、お子さまに合ったGPS端末の候補を確認できます。</p>
            <div className="space-y-4">
              {[
                { q: '通話機能は必要ですか？', yes: 'myFirst Fone R2 / キッズフォン3 / Hamic POCKET をおすすめします', no: '次の質問へ' },
                { q: '音声メッセージ（トーク）機能は必要ですか？', yes: 'BoTトーク をおすすめします', no: '次の質問へ' },
                { q: '山間部や郊外で使いますか？', yes: 'あんしんウォッチャー（au回線）をおすすめします', no: '次の質問へ' },
                { q: '防水性能を重視しますか？', yes: 'myFirst Fone R2（IPX8）をおすすめします', no: '次の質問へ' },
                { q: '費用を最も重視しますか？', yes: 'みてねみまもりGPS をおすすめします（費用対効果が最も優れた機種）', no: 'まもサーチ（最軽量）をおすすめします' },
              ].map((item, i) => (
                <div key={i} className="bg-blue-light rounded-lg p-4">
                  <p className="font-bold text-g800 text-sm mb-2">Q{i + 1}. {item.q}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded p-2">
                      <p className="text-xs font-bold text-blue mb-1">YES</p>
                      <p className="text-xs text-g600">{item.yes}</p>
                    </div>
                    <div className="bg-white rounded p-2">
                      <p className="text-xs font-bold text-g400 mb-1">NO</p>
                      <p className="text-xs text-g600">{item.no}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="section-title">編集部のおすすめ</h2>
          <div className="card-hover p-6 mb-8 border-l-4 border-orange">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl"></span>
              <div>
                <h3 className="font-extrabold text-g800 text-xl">みてねみまもりGPS 第3世代</h3>
                <p className="text-sm text-orange font-bold">編集部のおすすめ / 総合スコア95点</p>
              </div>
            </div>
            <p className="text-g600 mb-3">
              2026年現在、最もバランスの取れた子供用GPS端末です。月額528円という低価格ながら、
              最大2カ月のバッテリー持ち、高精度な測位、分かりやすいアプリ操作を実現しています。
              みまもりAIが子供の行動パターンを学習し、普段と異なる動きを検知して通知する点も大きな特長です。
            </p>
            <p className="text-g600 mb-4">
              初めてGPS端末を持たせる方や、どの機種を選ぶべきか迷っている方には、この機種をおすすめします。
              費用・機能・使いやすさのいずれも高い水準にあり、安心して選べる機種です。
            </p>
            <Link href="/review/mitene/" className="btn-primary inline-block">
              みてねみまもりGPS の詳細レビュー
            </Link>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 flex flex-wrap gap-3 text-sm">
            <Link href="/compare/price/" className="text-blue hover:underline">月額料金比較</Link>
            <Link href="/compare/accuracy/" className="text-blue hover:underline">精度比較</Link>
            <Link href="/compare/apps/" className="text-blue hover:underline">アプリ比較</Link>
            <Link href="/compare/carrier/" className="text-blue hover:underline">キャリア別比較</Link>
            <Link href="/knowledge/how-to-choose/" className="text-blue hover:underline">GPS選び方ガイド</Link>
            <Link href="/knowledge/cost-annual/" className="text-blue hover:underline">年間コスト比較</Link>
            <Link href="/knowledge/battery/" className="text-blue hover:underline">バッテリー比較</Link>
            <Link href="/knowledge/waterproof-test/" className="text-blue hover:underline">防水性能比較</Link>
            <Link href="/knowledge/notification-types/" className="text-blue hover:underline">通知機能一覧</Link>
            <Link href="/knowledge/gps-range/" className="text-blue hover:underline">通信範囲解説</Link>
          </div>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">お子さまに合ったGPS端末の選び方</h2>
            <p className="text-g600 mb-6 text-sm">ランキングだけでなく、お子さまの生活スタイルに合った機種を選ぶことが大切です。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/price/" className="btn-primary">月額料金で比較</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">GPS選び方ガイド</Link>
            </div>
          </div>

          <p className="text-xs text-g400 mt-8 text-center">最終更新: 2026年5月</p>
        </div>
      </section>
    </>
  );
}
