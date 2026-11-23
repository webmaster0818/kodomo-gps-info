import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'キッズフォン3（ソフトバンク）のレビュー｜月額748円・115g・位置ナビ220円・電池約1週間の仕様と見守り機能【2026年11月】',
  description:
    'ソフトバンクのキッズフォン3を、ソフトバンク公式の製品ページと料金プランページの記載で整理しています。基本プラン2月額748円、位置ナビ月額220円、重さ約115g・電池1700mAh・防水IPX5/IPX7などの仕様と、撮影機能付き防犯ブザーなどの見守り機能をまとめています。',
  keywords: ['キッズフォン3', 'ソフトバンク', 'キッズフォン', '位置ナビ', 'レビュー'],
};

const PRODUCT = 'https://www.softbank.jp/mobile/products/mimamorimobile/kids-phone3/';
const PLAN = 'https://www.softbank.jp/mobile/price_plan/kids-phone/';
const CHECKED = '2026年11月24日確認';

const specs: [string, string][] = [
  ['発売日', '2023年1月27日（製造：ZTE Corporation）'],
  ['サイズ', '約52×105×14.9mm'],
  ['重さ', '約115g（ブザーストラップ含む）'],
  ['ディスプレイ', '約3.5インチ（TFT液晶・HD 1440×720ドット）'],
  ['バッテリー', '1700mAh'],
  ['電池の持ち', '満充電から約1週間（電話・メール・タイマー通知などを使うZTE独自基準の実験値。位置情報の自動更新や速度検知を使うと短くなる場合あり）'],
  ['連続待受時間', '4G LTE 約255時間／4G（AXGP）約279時間／3G 約264.6時間（静止時）'],
  ['充電時間', '約65分（USB Type-C PD-PPS対応ACアダプタ）'],
  ['カメラ', 'メイン約800万画素・サブ約500万画素'],
  ['防水・防塵', 'IPX5／IPX7・IP5X'],
  ['耐衝撃', 'MIL-STD-810G Method 516.6:Shock-Procedure IV 準拠の落下試験（高さ1.22mから26方面）'],
  ['SIM', 'eSIM'],
  ['おサイフケータイ・Bluetooth', '非対応'],
];

const faqData = [
  {
    q: 'キッズフォン3の月額料金はいくらですか？',
    a: 'ソフトバンクの料金プランページでは、キッズフォン3で使う「基本プラン2（キッズフォン）」が月額748円（税込・機種代金は含まず）と案内されています。保護者のスマートフォンから居場所を確認する「位置ナビ」は保護者側で月額220円（お子さま側は無料）です（2026年11月24日確認）。',
  },
  {
    q: '保護者がソフトバンク以外でも居場所を確認できますか？',
    a: '位置ナビで検索するには、保護者がソフトバンクまたはワイモバイルの携帯電話を利用していることが必要と製品ページに記載されています。保護者が他社回線の場合は、購入前にソフトバンクショップで確認することをおすすめします。',
  },
  {
    q: 'キッズフォン3でLINEやインターネットは使えますか？',
    a: '使えません。製品ページでは、ウェブサイトの閲覧と追加アプリのダウンロードができないと案内されています。連絡先は最大20件まで登録でき、登録していない相手からの電話やメールは自動でブロックされます。',
  },
  {
    q: '通話料はかかりますか？',
    a: '料金プランページでは、1回5分以内の国内通話は無料、5分を超えた分は22円／30秒と案内されています。「家族割引」で同一家族グループ内の場合、家族への国内通話は無料です。SMSの送信は3.3円／通（ソフトバンク携帯電話宛は無料・受信は無料）です。',
  },
  {
    q: '海外で使えますか？',
    a: '基本プラン2（キッズフォン）は「海外では利用できません」と料金プランページに記載されています。海外旅行での見守りは「子供GPSの海外利用」のページも参考にしてください。',
  },
  {
    q: '解約金はかかりますか？',
    a: '料金プランページでは、2026年7月1日以降に新規契約・のりかえで加入した回線を、回線提供開始月から12カ月以内に解約する場合、契約解除料528円がかかると案内されています。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function KidsPhone3Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'キッズフォン3（ソフトバンク）のレビュー', datePublished: '2026-11-24', dateModified: '2026-11-24', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'キッズフォン3' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">キッズケータイ</span>
            <span className="tag-pill bg-blue text-white">ソフトバンク</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">キッズフォン3（ソフトバンク）のレビュー</h1>
          <p className="text-g600 text-lg">ソフトバンク公式の製品ページ・料金プランページの記載をもとに、料金・仕様・見守り機能と、子ども用GPS端末との違いを整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：保護者がソフトバンクかワイモバイルで、通話と位置確認を1台にまとめたい場合の選択肢です</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>料金</strong>：基本プラン2（キッズフォン）月額748円に、保護者側の位置ナビ月額220円を合わせると、毎月968円（税込）が目安です（機種代金は別）。</li>
              <li>・<strong>できること</strong>：登録した相手（最大20件）との通話・メール、撮影機能付き防犯ブザー、交通系ICカードのタッチを知らせる「タッチでメール」（基本プラン2なら追加料金なし）。</li>
              <li>・<strong>注意点</strong>：位置ナビの検索には保護者のソフトバンクかワイモバイル回線が必要です。重さは約115gで、位置確認だけの子ども用GPS端末より重くなります。</li>
            </ul>
          </div>

          <h2 className="section-title">キッズフォン3の主な仕様</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {specs.map(([k, v]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <th className="p-3 text-left font-bold text-g800 whitespace-nowrap bg-blue-light/40">{k}</th>
                    <td className="p-3 text-g700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={PRODUCT} target="_blank" rel="noopener noreferrer" className="text-blue underline">ソフトバンク「キッズフォン3」製品ページ（基本スペック・詳細スペック）</a>（{CHECKED}）。連続待受時間は電波を正常に受信できる静止状態での平均的な利用時間で、使用環境により半分以下になることがあると記載されています。
          </p>

          <h2 className="section-title">料金の内訳</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">項目</th>
                  <th className="p-3 text-left border-b-2 border-blue">月額（税込）</th>
                  <th className="p-3 text-left border-b-2 border-blue">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">基本プラン2（キッズフォン）</td>
                  <td className="p-3 text-g700">748円</td>
                  <td className="p-3 text-g700">お子さまの回線。対象機種はキッズフォン4・キッズフォン3・キッズフォン2・キッズフォン・みまもりケータイ4。海外では利用不可</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">位置ナビ</td>
                  <td className="p-3 text-g700">220円</td>
                  <td className="p-3 text-g700">保護者側のみ（お子さま側は無料）。現在地と過去3日分の位置情報、タイマー通知、エリア通知</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">タッチでメール</td>
                  <td className="p-3 text-g700">追加料金なし</td>
                  <td className="p-3 text-g700">基本プラン2の利用者は追加料金なし（同梱の専用ケースの装着が必要）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={PLAN} target="_blank" rel="noopener noreferrer" className="text-blue underline">ソフトバンク「基本プラン2（キッズフォン）」料金プランページ</a>、<a href={PRODUCT} target="_blank" rel="noopener noreferrer" className="text-blue underline">キッズフォン3 製品ページ（位置ナビ・タッチでメール）</a>（{CHECKED}）。料金プランページには、対象プランとのセット割（6カ月間748円割引）のキャンペーンも掲載されています。適用条件と期間は公式ページでご確認ください。機種代金は購入方法や時期により異なるため掲載していません。
          </p>

          <h2 className="section-title">見守りに使える機能</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>位置ナビ</strong>：お子さまの現在地と過去3日分の位置情報を地図で確認できます。指定した時間に位置情報を自動で知らせる「タイマー通知」、指定した場所への出入りを知らせる「エリア通知」があります。</li>
            <li>・<strong>撮影機能付き防犯ブザー</strong>：防犯ブザーを引っ張ると、位置情報と周囲を撮影した写真が保護者に自動で送信されます。</li>
            <li>・<strong>タッチでメール</strong>：電車やバスで交通系ICカードをタッチすると、駅名や位置情報をメールで知らせます。送信先は複数設定できます。</li>
            <li>・<strong>連絡先ブロック</strong>：連絡先は最大20件まで登録でき、登録していない人からの電話やメールは自動でブロックされます。</li>
            <li>・<strong>アシストガイド</strong>：1日の予定表や、やり方・持ち物を絵カードで登録できる無料の機能です（申し込み不要）。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={PRODUCT} target="_blank" rel="noopener noreferrer" className="text-blue underline">キッズフォン3 製品ページ</a>（{CHECKED}）
          </p>

          <h2 className="section-title">子ども用GPS端末との違い</h2>
          <p className="text-sm text-g700 mb-3">
            キッズフォン3は、通話・メールができる点と、カメラ・撮影機能付き防犯ブザーを備える点が、位置確認が中心の子ども用GPS端末との大きな違いです。一方で、重さは約115gで、当サイトで公式の値を確認しているあんしんウォッチャー（約53g）やみてねみまもりGPS MG05（61g）と比べると重くなります。月額は、基本プラン2と位置ナビを合わせて968円で、月額528〜539円のGPS端末より高くなります。
          </p>
          <p className="text-sm text-g700 mb-8">
            通話できる端末は、学校によって持ち込みのルールが異なります。購入前に学校のルールを確認することをおすすめします。詳しくは「<Link href="/compare/gps-vs-phone/" className="text-blue underline">GPSとキッズケータイの比較</Link>」「<Link href="/knowledge/school-rules/" className="text-blue underline">小学校のGPS持ち込みルール</Link>」をご覧ください。
          </p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              ドコモ・auのキッズケータイとの比較は「<Link href="/review/kids-phone/" className="text-blue underline">キッズケータイとGPS端末の比較</Link>」「<Link href="/compare/carrier/" className="text-blue underline">キャリア別比較</Link>」、各機種は「<Link href="/review/ky-41c/" className="text-blue underline">KY-41C（ドコモ）</Link>」「<Link href="/review/mamorino6/" className="text-blue underline">mamorino6（au）</Link>」にまとめています。
            </p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
          <p className="text-xs text-g400 mt-3">
            出典：<a href={PRODUCT} target="_blank" rel="noopener noreferrer" className="text-blue underline">キッズフォン3 製品ページ</a>、<a href={PLAN} target="_blank" rel="noopener noreferrer" className="text-blue underline">基本プラン2（キッズフォン）料金プランページ</a>（{CHECKED}）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/carrier/" className="btn-primary">キャリア別比較</Link>
              <Link href="/review/kids-phone/" className="btn-accent">キッズケータイとGPS端末の比較</Link>
              <Link href="/knowledge/smartphone-vs-gps/" className="btn-primary">スマホとGPSどっちがいい？</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
