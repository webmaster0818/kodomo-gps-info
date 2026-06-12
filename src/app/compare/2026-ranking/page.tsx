import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '【2026年最新】子供用GPSおすすめランキング14選｜全機種比較',
  description:
    '2026年最新の子供用GPSおすすめランキング14選。精度・バッテリー・機能・料金・使いやすさの5軸で全機種を徹底評価。初期費用・月額・防水・通知機能の比較表、目的別おすすめ、選び方ガイドまで完全網羅。',
  keywords: ['子供GPS', 'おすすめ', 'ランキング', '2026', '比較', '全機種', '最新'],
  openGraph: {
    title: '【2026年最新】子供用GPSおすすめランキング14選｜全機種比較',
    description: '2026年最新の子供用GPSおすすめランキング14選。精度・バッテリー・機能・料金・使いやすさの5軸で全機種を徹底評価。',
  },
};

const faqData = [
  { q: '2026年で一番おすすめの子供用GPSは？', a: '総合1位はみてねみまもりGPS第3世代です。月額528円の低コスト、最大2ヶ月のバッテリー持ち、高い測位精度、直感的なアプリ操作を兼ね備え、コストパフォーマンスが最も優れています。初めてGPSを持たせる方に特におすすめです。' },
  { q: '月額料金が一番安いGPSはどれ？', a: 'みてねみまもりGPS（月額528円）、まもサーチ（月額528円）が最安クラスです。いずれも位置確認・ジオフェンス・SOS通知の基本機能を備えており、コスパ重視なら十分な性能です。' },
  { q: 'トーク（音声メッセージ）機能付きのGPSはある？', a: 'BoTトーク（月額748円）が代表的です。端末のボタンを押すだけで保護者のスマホに音声メッセージを送れます。また、myFirst Fone R2やキッズフォン3は通話機能まで対応しています。' },
  { q: 'バッテリーが一番長持ちするGPSは？', a: 'みてねみまもりGPS第3世代が最長クラスで、測位間隔3分設定で最大約2ヶ月持続します。BoTトークやあんしんウォッチャーも1ヶ月以上の持続が可能です。腕時計型は毎日〜2日ごとの充電が必要です。' },
  { q: '腕時計型のGPSはどんなメリットがありますか？', a: '腕に装着するため紛失しにくい、通話やメッセージ機能がある、カメラ付きの機種もある等のメリットがあります。デメリットとしてはバッテリーが1〜2日と短い、月額料金が高め、学校で禁止される場合がある点です。' },
  { q: '小学校にGPS端末を持っていけますか？', a: 'ほとんどの小学校で子供用GPS端末の持ち込みは許可されています。スマートフォンは禁止でもGPSはOKという学校が大半です。ただし腕時計型や通話機能付きは制限される場合があるため、事前に学校に確認しましょう。' },
  { q: 'GPS端末はいつから持たせるべき？', a: '最も多いのは小学校入学時（6歳）です。一人で通学を始めるタイミングが最適です。幼稚園・保育園年長から持たせる家庭や、習い事で一人行動が増える小学2〜3年で導入する家庭もあります。' },
  { q: '2台目以降の割引はありますか？', a: '残念ながら、ほとんどのGPS端末に複数台割引はありません。端末ごとに月額料金がかかります。ただし保護者アプリは1つで複数台管理でき、家族で共有できるため、アプリの追加費用は不要です。' },
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
    rank: 1, name: 'みてねみまもりGPS 第3世代', score: 95, initial: 5280, monthly: 528,
    battery: '最大2ヶ月', waterproof: 'IP55', weight: '約56g', carrier: 'ソフトバンク LTE',
    notifications: 'ジオフェンス/SOS/バッテリー低下/速度異常/定時',
    merit: '圧倒的なバッテリー持ちと低月額。アプリの操作性も高評価。みまもりAIが行動パターンを学習。',
    demerit: '防水性能はIP55で標準的。トーク機能なし。',
    recommend: '初めてGPSを持たせる方、コスパ重視の方、バッテリー持ちを重視する方',
    review: '/review/mitene/',
  },
  {
    rank: 2, name: 'BoTトーク', score: 92, initial: 5280, monthly: 748,
    battery: '最大1ヶ月', waterproof: 'IP55', weight: '約50g', carrier: 'ソフトバンク LTE',
    notifications: 'ジオフェンス/SOS/バッテリー低下/速度異常/定時/長時間停止',
    merit: '音声メッセージ送受信が可能。AIが通学ルートを自動学習し、逸脱時に通知。通知機能が最も充実。',
    demerit: '月額が528円クラスより高め。トーク利用時はバッテリー消費が増える。',
    recommend: '子供と音声でやり取りしたい方、通知機能を重視する方',
    review: '/review/bot-talk/',
  },
  {
    rank: 3, name: 'あんしんウォッチャー', score: 90, initial: 11000, monthly: 539,
    battery: '最大1.5ヶ月', waterproof: 'IP55', weight: '約53g', carrier: 'au LTE',
    notifications: 'ジオフェンス/SOS/バッテリー低下/定時',
    merit: 'au回線で山間部のカバー率が高い。auユーザーならキャリア決済対応。セコムとの連携オプションあり。',
    demerit: '初期費用が11,000円とやや高い。速度異常通知に非対応。',
    recommend: 'au回線のエリアで使いたい方、山間部・郊外にお住まいの方',
    review: '/review/anshin-watcher/',
  },
  {
    rank: 4, name: 'まもサーチ', score: 87, initial: 5280, monthly: 528,
    battery: '最大1ヶ月', waterproof: 'IP55', weight: '約36g', carrier: 'ソフトバンク LTE',
    notifications: 'ジオフェンス/SOS/バッテリー低下/定時/長時間停止',
    merit: '業界最軽量クラスの約36g。長時間停止通知に対応。ストラップホール付きで取り付けやすい。',
    demerit: 'バッテリー持ちは1ヶ月とやや短め。速度異常通知なし。',
    recommend: '軽さを重視する方、ランドセルに入れる小型端末が欲しい方',
    review: '/review/mamosearch/',
  },
  {
    rank: 5, name: 'soranome（ソラノメ）', score: 85, initial: 9020, monthly: 539,
    battery: '最大1週間', waterproof: 'IP55', weight: '約39g', carrier: 'ドコモ LTE',
    notifications: 'ジオフェンス/SOS/バッテリー低下/定時',
    merit: 'ドコモ回線で都市部の安定性が高い。デザインがおしゃれで子供に人気。コンパクトで軽量。',
    demerit: 'バッテリー持ちが短い（約1週間）。初期費用が高め。',
    recommend: 'ドコモ回線のエリアで使いたい方、デザイン重視の方',
    review: '/review/soranome/',
  },
  {
    rank: 6, name: 'myFirst Fone R2', score: 84, initial: 26980, monthly: 998,
    battery: '約2日', waterproof: 'IP68', weight: '約58g', carrier: 'ドコモ/ソフトバンク LTE',
    notifications: 'ジオフェンス/SOS/バッテリー低下/定時',
    merit: '腕時計型で通話・ビデオ通話が可能。IP68最高防水。カメラ搭載。音楽再生機能あり。',
    demerit: '初期費用・月額ともに最高クラス。バッテリーが2日程度。学校で使えない可能性。',
    recommend: '通話機能が必要な方、多機能な腕時計型が欲しい方',
    review: '/review/myfirst-fone/',
  },
  {
    rank: 7, name: 'coneco（コネコ）', score: 82, initial: 8580, monthly: 748,
    battery: '約2週間', waterproof: 'IPX4', weight: '約60g', carrier: 'ドコモ LTE',
    notifications: 'ジオフェンス/SOS/バッテリー低下/定時',
    merit: 'テキストメッセージの送受信が可能。定型文を端末のボタンで選んで送れる。ドコモ回線。',
    demerit: '防水性能がIPX4と低め。月額が高め。',
    recommend: 'テキストメッセージでやり取りしたい方',
    review: '/review/coneco/',
  },
  {
    rank: 8, name: 'キッズフォン3', score: 81, initial: 20880, monthly: 539,
    battery: '約2日', waterproof: 'IPX5/IPX8', weight: '約115g', carrier: 'ソフトバンク LTE',
    notifications: 'ジオフェンス/SOS/バッテリー低下/定時',
    merit: '通話・SMSに対応。カメラ搭載。防犯ブザー連動。ソフトバンクショップでサポート。',
    demerit: 'サイズが大きく重い。バッテリーが短い。ソフトバンク契約が必要。',
    recommend: '通話機能必須でソフトバンクユーザーの方',
    review: '/review/kids-phone/',
  },
  {
    rank: 9, name: 'Hamic POCKET（ハミックポケット）', score: 79, initial: 12100, monthly: 1100,
    battery: '約2日', waterproof: 'IPX4', weight: '約107g', carrier: 'ドコモ LTE',
    notifications: 'ジオフェンス/SOS/バッテリー低下',
    merit: 'メッセージ・通話に対応。プリスマホのような使い方が可能。子供向けUI。',
    demerit: '月額が最も高い。バッテリーが短い。防水がIPX4。重い。',
    recommend: 'スマホの前段階として持たせたい方',
    review: '/review/hamic/',
  },
  {
    rank: 10, name: 'ミモリ', score: 78, initial: 7480, monthly: 748,
    battery: '約3週間', waterproof: 'IP55', weight: '約55g', carrier: 'ソフトバンク LTE',
    notifications: 'ジオフェンス/SOS/バッテリー低下/定時',
    merit: '防犯ブザー一体型。鳴らすと自動で位置情報と録音を送信。見守りと防犯の両立。',
    demerit: '月額がやや高め。アプリの機能はシンプル。',
    recommend: '防犯ブザーとGPSを一体化させたい方',
    review: '/review/mimori/',
  },
  {
    rank: 11, name: 'ハロここ', score: 77, initial: 6380, monthly: 580,
    battery: '約1ヶ月', waterproof: 'IP55', weight: '約42g', carrier: 'ソフトバンク LTE',
    notifications: 'ジオフェンス/SOS/バッテリー低下/定時',
    merit: 'コンパクトで軽量。月額580円と手頃。シンプルな機能で使いやすい。',
    demerit: '通知機能が基本的。速度異常・長時間停止には非対応。',
    recommend: 'シンプルな機能で十分な方、軽量端末が欲しい方',
    review: '/review/halococo/',
  },
  {
    rank: 12, name: 'あんしんウォッチャー LE', score: 75, initial: 5980, monthly: 539,
    battery: '最大1ヶ月', waterproof: 'IP55', weight: '約53g', carrier: 'au LTE',
    notifications: 'ジオフェンス/SOS/バッテリー低下/定時',
    merit: '通常版より初期費用が安い。au回線のカバー力はそのまま。基本機能は同等。',
    demerit: '一部機能が制限。キャンペーン限定モデルのため在庫に注意。',
    recommend: 'あんしんウォッチャーを低コストで試したい方',
    review: '/review/anshin-watcher/',
  },
  {
    rank: 13, name: 'まもサーチ ミニ', score: 74, initial: 3980, monthly: 528,
    battery: '約2週間', waterproof: 'IP55', weight: '約30g', carrier: 'ソフトバンク LTE',
    notifications: 'ジオフェンス/SOS/バッテリー低下',
    merit: '業界最安クラスの初期費用。超軽量約30g。お試しに最適。',
    demerit: 'バッテリー持ちが短め。通知機能が限定的。',
    recommend: '初期費用を抑えたい方、お試しでGPSを導入したい方',
    review: '/review/mamosearch/',
  },
  {
    rank: 14, name: 'みもりGPS ライト', score: 72, initial: 4980, monthly: 528,
    battery: '約2週間', waterproof: 'IP55', weight: '約48g', carrier: 'ソフトバンク LTE',
    notifications: 'ジオフェンス/SOS/バッテリー低下',
    merit: '低価格で防犯ブザー機能付き。初期費用を抑えつつ防犯対策も。',
    demerit: 'バッテリーがやや短い。上位モデルに比べ機能が限定。',
    recommend: '低コストで防犯ブザー付きGPSが欲しい方',
    review: '/review/mimori/',
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
    purpose: 'コスパ重視',
    icon: '💰',
    picks: [
      { name: 'みてねみまもりGPS', reason: '月額528円で最長バッテリー。総合コスパNo.1。' },
      { name: 'まもサーチ ミニ', reason: '初期費用3,980円の最安エントリーモデル。' },
      { name: 'まもサーチ', reason: '月額528円で軽量コンパクト。長時間停止通知付き。' },
    ],
  },
  {
    purpose: '機能重視',
    icon: '🔧',
    picks: [
      { name: 'BoTトーク', reason: '音声メッセージ+AI学習+通知機能が最充実。' },
      { name: 'myFirst Fone R2', reason: '通話・ビデオ・カメラ・音楽と全部入り。' },
      { name: 'coneco', reason: 'テキストメッセージ送受信でやり取り可能。' },
    ],
  },
  {
    purpose: 'バッテリー重視',
    icon: '🔋',
    picks: [
      { name: 'みてねみまもりGPS', reason: '最大2ヶ月の圧倒的バッテリー持ち。' },
      { name: 'あんしんウォッチャー', reason: '最大1.5ヶ月。au回線の安定感も魅力。' },
    ],
  },
  {
    purpose: '通話機能付き',
    icon: '📞',
    picks: [
      { name: 'myFirst Fone R2', reason: '腕時計型で通話・ビデオ通話が可能。' },
      { name: 'キッズフォン3', reason: '電話・SMS対応。ソフトバンクショップでサポート。' },
      { name: 'Hamic POCKET', reason: 'プリスマホ的に使える。メッセージ＋通話。' },
    ],
  },
];

export default function Ranking2026Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "【2026年最新】子供用GPSおすすめランキング14選｜全機種比較", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "比較", "item": "https://gps-kodomo.com/compare/"}, {"@type": "ListItem", "position": 3, "name": "2026年おすすめランキング", "item": "https://gps-kodomo.com/compare/2026-ranking/"}]}) }} />
      <Breadcrumb items={[{ name: '比較', href: '/' }, { name: '2026年おすすめランキング' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">2026年最新</span>
            <span className="tag-pill bg-blue text-white">ランキング</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            【2026年最新】子供用GPSおすすめランキング14選
          </h1>
          <p className="text-g600 text-lg">全機種を5つの評価軸で徹底比較｜あなたにぴったりの1台が見つかる</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">

          <h2 className="section-title">評価基準（5つの評価軸）</h2>
          <p className="text-g600 mb-4">
            当サイトでは、子供用GPS端末を以下の5つの軸で評価しています。
            各軸を20点満点（合計100点満点）でスコアリングし、総合点でランキングを決定しました。
          </p>
          <div className="grid sm:grid-cols-5 gap-3 mb-8">
            {[
              { axis: '測位精度', weight: '20点', desc: 'GPS/Wi-Fi/基地局の総合精度。みちびき対応の有無も加味。' },
              { axis: 'バッテリー', weight: '20点', desc: '1回の充電で持続する日数。充電頻度の少なさを評価。' },
              { axis: '機能', weight: '20点', desc: '通知種類、トーク、SOS、AI学習など付加機能の充実度。' },
              { axis: '料金', weight: '20点', desc: '初期費用+月額の2年トータルコスト。安いほど高評価。' },
              { axis: '使いやすさ', weight: '20点', desc: 'アプリUI、設定の簡単さ、サイズ、重さ、子供の扱いやすさ。' },
            ].map((a) => (
              <div key={a.axis} className="card-hover p-4 text-center">
                <h3 className="font-bold text-g800 text-sm mb-1">{a.axis}</h3>
                <p className="text-blue font-extrabold text-lg mb-1">{a.weight}</p>
                <p className="text-xs text-g500">{a.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">総合ランキング 1〜14位</h2>
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
                <p className="text-sm text-g700 mb-2"><strong>こんな人におすすめ:</strong> {d.recommend}</p>
                <Link href={d.review} className="text-sm text-blue hover:underline font-semibold">
                  詳細レビューを見る →
                </Link>
              </div>
            ))}
          </div>

          <h2 className="section-title">全機種比較表</h2>
          <p className="text-sm text-g500 mb-3">※ 価格は税込。2026年5月時点。横スクロールで全項目を確認できます。</p>
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
                  <span className="text-2xl">{p.icon}</span>
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
            <p className="text-g600 mb-4">以下の質問に答えるだけで、あなたにぴったりのGPS端末が見つかります。</p>
            <div className="space-y-4">
              {[
                { q: '通話機能は必要ですか？', yes: 'myFirst Fone R2 / キッズフォン3 / Hamic POCKET がおすすめ', no: '次の質問へ' },
                { q: '音声メッセージ（トーク）機能は必要ですか？', yes: 'BoTトーク がおすすめ', no: '次の質問へ' },
                { q: '山間部や郊外で使いますか？', yes: 'あんしんウォッチャー（au回線）がおすすめ', no: '次の質問へ' },
                { q: '防水性能を重視しますか？', yes: 'myFirst Fone R2（IP68）がおすすめ', no: '次の質問へ' },
                { q: 'とにかくコスパ重視ですか？', yes: 'みてねみまもりGPS がおすすめ（コスパNo.1）', no: 'まもサーチ（最軽量）がおすすめ' },
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

          <h2 className="section-title">編集部の一押し</h2>
          <div className="card-hover p-6 mb-8 border-l-4 border-orange">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🏆</span>
              <div>
                <h3 className="font-extrabold text-g800 text-xl">みてねみまもりGPS 第3世代</h3>
                <p className="text-sm text-orange font-bold">編集部イチオシ / 総合スコア95点</p>
              </div>
            </div>
            <p className="text-g600 mb-3">
              2026年現在、最もバランスの取れた子供用GPS端末です。月額528円という低コストながら、
              最大2ヶ月のバッテリー持ち、高精度な測位、直感的なアプリ操作を実現しています。
              みまもりAIが子供の行動パターンを学習し、いつもと違う動きを検知して通知してくれる点も大きな魅力です。
            </p>
            <p className="text-g600 mb-4">
              「初めてGPSを持たせる」「どれを選べばいいかわからない」という方には、迷わずこの機種をおすすめします。
              コスパ・機能・使いやすさのすべてが高水準で、失敗のない選択肢です。
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

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">お子さんにぴったりのGPSを見つけよう</h2>
            <p className="text-g600 mb-6 text-sm">ランキングだけでなく、お子さんの生活スタイルに合った機種を選ぶことが大切です。</p>
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
