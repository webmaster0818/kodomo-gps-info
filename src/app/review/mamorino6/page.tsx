import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'mamorino6（au）のレビュー｜月額847円・101g・GPS・カメラ連動防犯ブザー・安心ナビの仕様と料金【2026年11月】',
  description:
    'auのmamorino6を、au公式の製品ページ・スペック・料金プランの記載で整理しています。ジュニアケータイプランME月額847円（割引適用で660円）、安心ナビ月額330円、重さ約101g・防水IPX5/IPX8などの仕様と、GPS・カメラ連動防犯ブザーなどの見守り機能をまとめています。',
  keywords: ['mamorino6', 'マモリーノ6', 'au', 'キッズケータイ', 'レビュー'],
};

const PRODUCT = 'https://www.au.com/mobile/product/featurephone/mamorino6/';
const SPEC = 'https://www.au.com/mobile/product/featurephone/mamorino6/spec/';
const PLAN = 'https://www.au.com/mobile/charge/juniorphone-me/';
const CHECKED = '2026年11月24日確認';

const specs: [string, string][] = [
  ['発売日', '2023年2月10日（メーカー：SHARP）'],
  ['サイズ', '約W55×H105×D14.1mm（最厚部14.8mm）'],
  ['重さ', '約101g'],
  ['ディスプレイ', '約3.4インチ（TFT液晶・960×540）'],
  ['バッテリー', '1,540mAh'],
  ['連続待受時間', '約380時間（日本国内使用時）'],
  ['連続通話時間', '約640分（音声通話時・日本国内使用時）'],
  ['充電時間', '約130分（TypeC共通ACアダプタ02）'],
  ['カメラ', 'メイン約500万画素・サブ約200万画素（mamorinoシリーズ初のカメラ搭載）'],
  ['防水・防塵', 'IPX5／IPX8・IP6X（泡タイプのハンドソープで洗える）'],
  ['耐衝撃', 'MIL-STD-810H Method 516.8 準拠の試験（高さ1.22mから鋼板に26方向で落下）'],
  ['SIM', 'nanoSIM／eSIM（どちらか片方で利用）'],
];

const faqData = [
  {
    q: 'mamorino6の月額料金はいくらですか？',
    a: 'au公式の料金プランページでは、「ジュニアケータイプランME」が月額847円（税込）で、au PAY カードお支払い割（－187円）の適用で660円と案内されています。加入条件は、申し込み時点で小学生以下の方が推奨機種（mamorino6）を利用することです。小学生以下の条件を満たさない場合は「ケータイプラン」で利用できます（2026年11月24日確認）。',
  },
  {
    q: '保護者のスマホから居場所を確認するのにお金はかかりますか？',
    a: '製品ページでは、保護者のスマートフォンや携帯電話から簡単な操作でGPSを使って居場所を確認できる「居場所通知」が案内されています。移動経路の確認や設定した時間の居場所確認などができる「安心ナビ」は有料で、新規の場合は初月無料、その後は月額330円（税込）です。',
  },
  {
    q: '防犯ブザーを鳴らすと何が起きますか？',
    a: '防犯ブザーを引くと大音量でブザーが鳴り、ライトが点滅します。同時に保護者に自動で電話を発信し、お子さまの位置情報とカメラで撮影したその場の画像を送信すると製品ページに記載されています（画像の送信は、お子さまと保護者が＋メッセージを利用中の場合）。セコムの「ココセコム」と連動させることもできます（セコムへの申し込みが必要）。',
  },
  {
    q: '家族との通話は無料ですか？',
    a: 'ジュニアケータイプランMEは、家族間での国内通話・国内SMSの送受信と、＋メッセージを無料で利用できると案内されています（同一の「家族割」への加入が必要）。家族以外への国内通話は終日22円／30秒です。',
  },
  {
    q: 'mamorino6でアプリやインターネットは使えますか？',
    a: 'Google Play ストアやGmail、EZwebサイトは利用できないと製品ページに記載されています。通話や＋メッセージ・SMSは、保護者が登録した相手（最大50件）とのみ可能です。',
  },
  {
    q: '解約金はかかりますか？',
    a: '料金プランページでは、2025年10月1日以降に新規契約した回線を1年以内に解約した場合、660円の契約解除料がかかると案内されています。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function Mamorino6Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'mamorino6（au）のレビュー', datePublished: '2026-11-24', dateModified: '2026-11-24', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'mamorino6' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">キッズケータイ</span>
            <span className="tag-pill bg-blue text-white">au</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">mamorino6（au）のレビュー</h1>
          <p className="text-g600 text-lg">au公式の製品ページ・スペックページ・料金プランページの記載をもとに、料金・仕様・見守り機能と、子ども用GPS端末との違いを整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：防犯ブザーと位置・写真の送信を1台にまとめたい小学生以下のご家庭向けの選択肢です</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>料金</strong>：ジュニアケータイプランME月額847円（au PAY カードお支払い割で660円）。移動経路などを確認する安心ナビを使う場合は月額330円が加わります（本体代金は別）。</li>
              <li>・<strong>できること</strong>：登録した相手（最大50件）との通話・＋メッセージ、GPS・カメラ連動防犯ブザー、おうちWi-Fi通知、保護者からのマナーモード解除。</li>
              <li>・<strong>注意点</strong>：ジュニアケータイプランMEの加入条件は「申し込み時点で小学生以下」です。重さは約101gで、位置確認だけの子ども用GPS端末より重くなります。</li>
            </ul>
          </div>

          <h2 className="section-title">mamorino6の主な仕様</h2>
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
            出典：<a href={SPEC} target="_blank" rel="noopener noreferrer" className="text-blue underline">au「mamorino6 スペック＆サービス」</a>、<a href={PRODUCT} target="_blank" rel="noopener noreferrer" className="text-blue underline">製品ページ</a>（{CHECKED}）。連続通話時間・連続待受時間は電波を正常に受信できる静止状態での平均的な利用可能時間で、使い方により大きく変動すると記載されています。耐衝撃・洗浄は無破損・無故障を保証するものではありません。
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
                  <td className="p-3 font-bold text-g800">ジュニアケータイプランME</td>
                  <td className="p-3 text-g700">847円（au PAY カードお支払い割で660円）</td>
                  <td className="p-3 text-g700">申し込み時点で小学生以下の方が推奨機種 mamorino6 を利用する場合。家族間の国内通話・国内SMSと＋メッセージは無料</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">安心ナビ（任意）</td>
                  <td className="p-3 text-g700">330円</td>
                  <td className="p-3 text-g700">保護者の端末から申し込み。新規は初月無料。移動経路の確認や設定した時間の居場所確認など7つの機能</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={PLAN} target="_blank" rel="noopener noreferrer" className="text-blue underline">au「ジュニアケータイプランME」</a>、<a href={PRODUCT} target="_blank" rel="noopener noreferrer" className="text-blue underline">mamorino6 製品ページ（安心ナビ・注記）</a>（{CHECKED}）。au PAY カードお支払い割は「スマイルハート割引」と重ねて適用できないと記載されています。本体代金は契約状況や購入店で異なるため掲載していません。
          </p>

          <h2 className="section-title">見守りに使える機能</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>GPS・カメラ連動防犯ブザー</strong>：ブザーを引くと大音量で鳴り、ライトが点滅します。同時に保護者へ自動で電話を発信し、位置情報とその場の画像を送信します。</li>
            <li>・<strong>居場所通知</strong>：保護者のスマートフォンや携帯電話から、GPS機能を使ってお子さまの居場所を確認できます。</li>
            <li>・<strong>おうちWi-Fi通知</strong>：自宅のWi-Fiのアクセスポイントを検知して、お子さまの帰宅を保護者に通知します。</li>
            <li>・<strong>電池残量の通知・遠隔操作</strong>：電池残量が少なくなると保護者にメッセージで通知します。保護者からメッセージを送ると、mamorino6から大きな音を鳴らしたりマナーモードを解除したりできます。</li>
            <li>・<strong>ココセコム連携</strong>：セコムへの申し込みで、防犯ブザーの連動発信先をココセコムにできます（現場急行サービスは1回ごとに別料金）。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={PRODUCT} target="_blank" rel="noopener noreferrer" className="text-blue underline">mamorino6 製品ページ</a>（{CHECKED}）。GPSなど衛星の電波を受信しづらい地下街・建物内・ビル陰などでは、位置情報の精度が悪くなる場合があると記載されています。
          </p>

          <h2 className="section-title">子ども用GPS端末との違い</h2>
          <p className="text-sm text-g700 mb-3">
            mamorino6は、通話・＋メッセージができる点と、カメラ連動の防犯ブザーを備える点が、位置確認が中心の子ども用GPS端末との大きな違いです。一方で、重さは約101gで、当サイトで公式の値を確認しているあんしんウォッチャー（約53g）やみてねみまもりGPS MG05（61g）と比べると重くなります。
          </p>
          <p className="text-sm text-g700 mb-8">
            通話できる端末は、学校によって持ち込みのルールが異なります。購入前に学校のルールを確認することをおすすめします。詳しくは「<Link href="/compare/gps-vs-phone/" className="text-blue underline">GPSとキッズケータイの比較</Link>」「<Link href="/knowledge/school-rules/" className="text-blue underline">小学校のGPS持ち込みルール</Link>」をご覧ください。
          </p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              ドコモ・ソフトバンクのキッズケータイとの比較は「<Link href="/review/kids-phone/" className="text-blue underline">キッズケータイとGPS端末の比較</Link>」、各機種は「<Link href="/review/ky-41c/" className="text-blue underline">KY-41C（ドコモ）</Link>」「<Link href="/review/kids-phone3/" className="text-blue underline">キッズフォン3（ソフトバンク）</Link>」にまとめています。
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
            出典：<a href={PRODUCT} target="_blank" rel="noopener noreferrer" className="text-blue underline">mamorino6 製品ページ</a>、<a href={SPEC} target="_blank" rel="noopener noreferrer" className="text-blue underline">スペック＆サービス</a>、<a href={PLAN} target="_blank" rel="noopener noreferrer" className="text-blue underline">ジュニアケータイプランME</a>（{CHECKED}）
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
