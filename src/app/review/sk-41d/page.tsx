import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'キッズケータイ コンパクト SK-41D（ドコモ）のレビュー｜腕につける39g・月額550円・電池・SOSボタンをKY-41Cと比較【2026年11月】',
  description:
    'ドコモのキッズケータイ コンパクト SK-41D を、ドコモ公式の製品ページとスペック表で整理しています。腕につけられる約39gの本体、月額550円、イマドコサーチ月額330円、連続待受約120時間などの仕様と、SOSボタンなどの見守り機能、KY-41Cとの違いをまとめています。',
  keywords: ['SK-41D', 'キッズケータイ コンパクト', 'ドコモ', 'イマドコサーチ', 'レビュー'],
};

const PRODUCT = 'https://www.docomo.ne.jp/product/sk41d/';
const SPEC = 'https://www.docomo.ne.jp/product/sk41d/spec.html';
const IMADOCO = 'https://www.docomo.ne.jp/service/imadoco/';
const CHECKED = '2026年11月24日確認';

const specs: [string, string][] = [
  ['発売日', '2024年7月12日（製造：セイコーソリューションズ株式会社）'],
  ['サイズ', '約45（高さ）×41（幅）×14.3（厚さ）mm'],
  ['重さ', '約39g（電池含む）'],
  ['ディスプレイ', '約1.6インチ（有機EL）。表面はアクリル製'],
  ['バッテリー', '542mAh（内蔵・着脱不可）'],
  ['連続待受時間', '約120時間（4G・静止時の規格上の値）'],
  ['連続通話時間', 'VoLTE（AMR-WB）約220分／VoLTE（HD+）約200分'],
  ['カメラ', '非対応'],
  ['防水・防塵', 'IPX5／IPX8・IP6X'],
  ['耐衝撃', 'MIL-STD-810H Method 516.8 準拠の落下試験（高さ1.22mから鋼板に26方面）'],
  ['同梱品', 'かんたん操作ガイド・USB充電ケーブル SK01・交換バンド SK01（電源アダプタは別売）'],
  ['eSIM', '非対応'],
];

const compareRows: [string, string, string][] = [
  ['持ち方', '腕につける（バンドを外してカバンに付けることも可能）', 'ポケット・カバンに入れる'],
  ['重さ', '約39g', '約109g'],
  ['ディスプレイ', '約1.6インチ', '約3.4インチ'],
  ['バッテリー', '542mAh', '1500mAh'],
  ['連続待受時間', '約120時間', '約320時間'],
  ['カメラ', '非対応', 'アウト・イン 各約500万画素'],
  ['緊急時', 'SOSボタン（緊急連絡先の保護者へ発信）', '防犯ブザー約100dB（作動時に緊急連絡先へ発信可能）'],
  ['料金プラン', 'キッズケータイプラン 月額550円', 'キッズケータイプラン 月額550円'],
];

const faqData = [
  {
    q: 'SK-41Dの月額料金はいくらですか？',
    a: 'ドコモの製品ページでは、SK-41Dで使う「キッズケータイプラン」が月額550円（税込）と案内されています。保護者のスマートフォンから居場所を検索するには、別途イマドコサーチ（月額330円・税込、初回31日間無料）の契約が必要です（2026年11月24日確認）。本体はオープン価格のため、販売店で確認する必要があります。',
  },
  {
    q: 'SK-41Dに防犯ブザーはありますか？',
    a: 'ドコモの製品ページでは、緊急時の機能として本体側面の「SOSボタン」が案内されています。押すと緊急連絡先に設定した保護者のスマートフォンに発信して通話でき、110番・119番への緊急通報もできます。防犯ブザーについては、製品ページ・スペック表に記載が見当たりませんでした。大きな音で周囲に知らせる機能が必要な場合は、KY-41Cなど防犯ブザーを搭載した機種と比較してください。',
  },
  {
    q: 'SK-41Dで写真を撮ったり送ったりできますか？',
    a: 'カメラは非対応です。＋メッセージでは、文章・音声メッセージ・定型文・位置情報の送信ができますが、SK-41Dから画像やスタンプは送信できないと公式に記載されています。',
  },
  {
    q: '保護者がドコモ以外でも居場所を確認できますか？',
    a: 'できます。イマドコサーチは、探す方がドコモ以外でも利用できるようになったと案内されています。連絡先の登録や自宅のアクセスポイントの登録には、保護者のスマートフォンに専用アプリのダウンロードが必要です。',
  },
  {
    q: 'オンラインショップで買えますか？',
    a: 'ドコモオンラインショップでは、未成年（18歳未満）名義では購入できないと記載されています。また、すでに持っているキッズケータイから機種変更する場合は、オンラインショップではなくドコモショップでの手続きが案内されています。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function Sk41dPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'キッズケータイ コンパクト SK-41D（ドコモ）のレビュー', datePublished: '2026-11-24', dateModified: '2026-11-24', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'キッズケータイ コンパクト SK-41D' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">キッズケータイ</span>
            <span className="tag-pill bg-blue text-white">ドコモ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">キッズケータイ コンパクト SK-41D（ドコモ）のレビュー</h1>
          <p className="text-g600 text-lg">NTTドコモ公式の製品ページ・スペック表の記載をもとに、料金・仕様・見守り機能と、同じドコモのKY-41Cとの違いを整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：軽さと「腕につけて着信に気づける」点を重視する場合の選択肢です。カメラ・防犯ブザーが必要ならKY-41Cも比較してください</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>料金</strong>：キッズケータイプラン月額550円に、保護者側のイマドコサーチ月額330円を合わせると、毎月880円（税込）が目安です（本体代金は別・オープン価格）。</li>
              <li>・<strong>できること</strong>：登録した相手との通話・＋メッセージ（文章・音声・位置情報）、SOSボタンでの保護者への発信、自宅Wi-Fiを使った帰宅通知。</li>
              <li>・<strong>注意点</strong>：カメラは非対応で、画像・スタンプは送れません。電池は542mAh・連続待受約120時間で、KY-41C（1500mAh・約320時間）より短くなります。</li>
            </ul>
          </div>

          <h2 className="section-title">SK-41Dの主な仕様</h2>
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
            出典：<a href={SPEC} target="_blank" rel="noopener noreferrer" className="text-blue underline">NTTドコモ「キッズケータイ コンパクト SK-41D スペックとサービス・機能」</a>、<a href={PRODUCT} target="_blank" rel="noopener noreferrer" className="text-blue underline">製品ページ</a>（{CHECKED}）。連続待受時間・連続通話時間は規格上の基準値で、使い方により半分以下になることがあると記載されています。
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
                  <td className="p-3 font-bold text-g800">キッズケータイプラン</td>
                  <td className="p-3 text-g700">550円</td>
                  <td className="p-3 text-g700">お子さまの回線。＋メッセージで文章や音声メッセージを送る場合のパケット通信料は無料</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">イマドコサーチ</td>
                  <td className="p-3 text-g700">330円</td>
                  <td className="p-3 text-g700">初回31日間無料。見守る相手を5人まで登録可能</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={PRODUCT} target="_blank" rel="noopener noreferrer" className="text-blue underline">SK-41D 製品ページ（料金関連・注記）</a>、<a href={IMADOCO} target="_blank" rel="noopener noreferrer" className="text-blue underline">イマドコサーチ公式ページ</a>（{CHECKED}）。本体はオープン価格のため、ドコモショップなど販売店でご確認ください。
          </p>

          <h2 className="section-title">見守りに使える機能</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>腕につけて使える</strong>：腕につけると、遊びに集中しているときも連絡に気づきやすく、そのまま通話できると案内されています。バンドはお子さまが自分で着脱でき、身につけられない場所ではバンドを外してカバンに付けられます。</li>
            <li>・<strong>SOSボタン</strong>：本体側面のボタンを押すと、緊急連絡先に設定した保護者のスマートフォンに発信して通話できます。110番・119番への緊急通報もできます。</li>
            <li>・<strong>居場所の確認</strong>：保護者のスマートフォンから「イマドコサーチ」で居場所や移動の様子を確認します（要契約）。</li>
            <li>・<strong>帰宅の通知</strong>：保護者向け専用アプリで自宅のアクセスポイントを登録すると、帰宅時に自宅のWi-Fiルーターを検知して保護者のスマートフォンに通知が届きます。</li>
            <li>・<strong>登録した相手とだけつながる</strong>：家族など登録した相手とのみ通話・＋メッセージができ、WebサイトへのアクセスやSNSへの投稿はできません。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={PRODUCT} target="_blank" rel="noopener noreferrer" className="text-blue underline">SK-41D 製品ページ（製品特長・注記）</a>（{CHECKED}）
          </p>

          <h2 className="section-title">同じドコモのKY-41Cとの違い</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">項目</th>
                  <th className="p-3 text-left border-b-2 border-blue">SK-41D</th>
                  <th className="p-3 text-left border-b-2 border-blue">KY-41C</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(([k, a, b]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">{k}</td>
                    <td className="p-3 text-g700">{a}</td>
                    <td className="p-3 text-g700">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：SK-41Dは<a href={SPEC} target="_blank" rel="noopener noreferrer" className="text-blue underline">ドコモのスペック表</a>（{CHECKED}）、KY-41Cは<a href="https://www.docomo.ne.jp/product/ky41c/spec.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">ドコモのスペック表</a>（2026年11月16日確認・<Link href="/review/ky-41c/" className="text-blue underline">KY-41Cのレビュー</Link>）。
          </p>
          <p className="text-sm text-g700 mb-8">
            位置確認だけで足りる場合は、通話機能のない子ども用GPS端末（月額528〜539円の機種）も選択肢になります。通話できる端末は学校によって持ち込みのルールが異なるため、購入前に確認することをおすすめします。詳しくは「<Link href="/compare/gps-vs-phone/" className="text-blue underline">GPSとキッズケータイの比較</Link>」「<Link href="/purpose/watch-type/" className="text-blue underline">腕時計型の子供GPS</Link>」をご覧ください。
          </p>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
          <p className="text-xs text-g400 mt-3">
            出典：<a href={PRODUCT} target="_blank" rel="noopener noreferrer" className="text-blue underline">SK-41D 製品ページ</a>、<a href={SPEC} target="_blank" rel="noopener noreferrer" className="text-blue underline">スペック表</a>、<a href={IMADOCO} target="_blank" rel="noopener noreferrer" className="text-blue underline">イマドコサーチ公式ページ</a>（{CHECKED}）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/ky-41c/" className="btn-primary">KY-41Cのレビュー</Link>
              <Link href="/review/imadoco-search/" className="btn-accent">イマドコサーチの詳細</Link>
              <Link href="/review/kids-phone/" className="btn-primary">キッズケータイとGPS端末の比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
