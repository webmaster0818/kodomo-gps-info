import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'キッズケータイ KY-41C（ドコモ）のレビュー｜月額550円・109g・電池・見守り機能をGPS端末と比較【2026年11月】',
  description:
    'ドコモのキッズケータイ KY-41C を、NTTドコモ公式の製品ページとスペック表の記載で整理しています。キッズケータイプラン月額550円、イマドコサーチ月額330円、重さ約109g・電池1500mAh・防水IPX5/IPX8などの仕様と、帰宅通知・遠隔操作などの見守り機能、子ども用GPS端末との違いをまとめています。',
  keywords: ['KY-41C', 'キッズケータイ', 'ドコモ', 'イマドコサーチ', 'レビュー'],
};

const PRODUCT = 'https://www.docomo.ne.jp/product/ky41c/';
const SPEC = 'https://www.docomo.ne.jp/product/ky41c/spec.html';
const IMADOCO = 'https://www.docomo.ne.jp/service/imadoco/';
const CHECKED = '2026年11月16日確認';

const specs: [string, string][] = [
  ['発売日', '2023年2月24日（製造：京セラ株式会社）'],
  ['サイズ', '約107（高さ）×54（幅）×13.4（厚さ）mm'],
  ['重さ', '約109g（電池含む）'],
  ['ディスプレイ', '約3.4インチ（FWVGA・TFT）。表面はガラスではなくアクリル'],
  ['バッテリー', '1500mAh（内蔵・取り外し不可）'],
  ['連続待受時間', '約320時間（4G・静止時の規格上の値）'],
  ['充電時間', '約130分（ACアダプタ 08 など）。ACアダプタは同梱されず別売'],
  ['カメラ', 'アウト・インともに約500万画素'],
  ['防水・防塵', 'IPX5／IPX8・IP6X'],
  ['耐衝撃', 'MIL-STD-810H（高さ1.22mから26方向の落下試験）準拠'],
  ['防犯ブザー', '約100dB（本体から10cmの場合）。作動時に緊急連絡先の保護者へ発信可能'],
  ['eSIM', '非対応'],
];

const faqData = [
  {
    q: 'KY-41Cの月額料金はいくらですか？',
    a: 'ドコモの製品ページでは、KY-41Cで使う「キッズケータイプラン」が月額550円（税込）と案内されています。保護者のスマートフォンから居場所を検索するには、別途イマドコサーチ（月額330円・税込、初回31日間無料、見守る方のみ）の契約が必要です（2026年11月16日確認）。',
  },
  {
    q: 'KY-41CでLINEやインターネットは使えますか？',
    a: '使えません。KY-41Cは、登録した相手との通話と「＋メッセージ」、GPSなどに機能が限定されており、サイトへのアクセスやSNSへの投稿はできないと公式に記載されています。',
  },
  {
    q: '保護者がドコモ以外でも居場所を確認できますか？',
    a: 'できます。イマドコサーチは、探す方がドコモ以外でも利用できるようになったと案内されています。見守られる側（KY-41C）はドコモ回線の契約が必要です。',
  },
  {
    q: 'オンラインショップで子ども名義で買えますか？',
    a: 'ドコモオンラインショップでは、未成年（18歳未満）名義では購入できないと記載されています。また、キッズケータイからの機種変更はオンラインショップでは手続きできず、ドコモショップでの手続きが案内されています。',
  },
  {
    q: '電池が劣化したら交換できますか？',
    a: 'バッテリーは取り外しできません。交換は、故障取扱窓口で本体を預けて行う形になると公式に記載されています。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function Ky41cPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'キッズケータイ KY-41C（ドコモ）のレビュー', datePublished: '2026-11-16', dateModified: '2026-11-16', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'キッズケータイ KY-41C' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">キッズケータイ</span>
            <span className="tag-pill bg-blue text-white">ドコモ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">キッズケータイ KY-41C（ドコモ）のレビュー</h1>
          <p className="text-g600 text-lg">NTTドコモ公式の製品ページ・スペック表の記載をもとに、料金・仕様・見守り機能と、子ども用GPS端末との違いを整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：通話と位置確認を1台にまとめたい場合の選択肢です。位置確認だけなら軽いGPS端末も比較してください</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>料金</strong>：キッズケータイプラン月額550円に、保護者側のイマドコサーチ月額330円を合わせると、毎月880円（税込）が目安です（本体代金は別）。</li>
              <li>・<strong>できること</strong>：登録した相手との通話・＋メッセージ、約100dBの防犯ブザー、自宅Wi-Fiを使った帰宅通知、保護者のスマホからのマナーモード解除。</li>
              <li>・<strong>注意点</strong>：重さは約109gで、子ども用GPS端末（例：あんしんウォッチャー約53g、みてねみまもりGPS MG05 61g）より重くなります。インターネット・SNS・LINEは使えません。</li>
            </ul>
          </div>

          <h2 className="section-title">KY-41Cの主な仕様</h2>
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
            出典：<a href={SPEC} target="_blank" rel="noopener noreferrer" className="text-blue underline">NTTドコモ「キッズケータイ KY-41C スペックとサービス・機能」</a>、<a href={PRODUCT} target="_blank" rel="noopener noreferrer" className="text-blue underline">製品ページ</a>（{CHECKED}）。連続待受時間は規格上の基準値で、使い方により大きく変わります。耐衝撃試験は無破損・無故障を保証するものではないと記載されています。
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
                  <td className="p-3 text-g700">お子さまの回線。＋メッセージでの写真・動画の送信はパケット通信料無料</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">イマドコサーチ</td>
                  <td className="p-3 text-g700">330円</td>
                  <td className="p-3 text-g700">見守る方のみ。初回31日間無料。見守る相手を5人まで登録可能</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">ケータイお探しサービス（任意）</td>
                  <td className="p-3 text-g700">55円</td>
                  <td className="p-3 text-g700">紛失時におおよその位置を検索。未契約時はスポット契約3,300円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={PRODUCT} target="_blank" rel="noopener noreferrer" className="text-blue underline">KY-41C 製品ページ（料金関連・注記）</a>、<a href={IMADOCO} target="_blank" rel="noopener noreferrer" className="text-blue underline">イマドコサーチ公式ページ</a>（{CHECKED}）。本体代金は購入方法や時期により異なるため、ドコモオンラインショップ・ドコモショップでご確認ください。
          </p>

          <h2 className="section-title">見守りに使える機能</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>居場所の確認</strong>：保護者のスマートフォン・携帯電話・パソコンから「イマドコサーチ」で確認します（要契約）。</li>
            <li>・<strong>帰宅の通知</strong>：帰宅予定の時間帯を設定すると、15分ごとに自宅のWi-Fiルーターのアクセスポイントを検索し、最初に検出した時点で保護者に通知します（事前設定が必要）。</li>
            <li>・<strong>見守り範囲からの離脱通知</strong>：お子さまが見守り範囲から離れると、保護者のスマートフォンとキッズケータイに通知が届きます。1台のスマートフォンから最大5台のキッズケータイを見守り設定できます。</li>
            <li>・<strong>遠隔でマナーモード解除</strong>：電話に気づかない時に、保護者のスマートフォンの専用アプリからマナーモードを解除できます。着信自動応答にすると、操作なしでスピーカー通話になります。</li>
            <li>・<strong>防犯ブザー</strong>：ストラップを引くかスライドスイッチで約100dBのブザーが鳴り、防犯ライトが点滅します。作動時に緊急連絡先の保護者へ発信できます。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={PRODUCT} target="_blank" rel="noopener noreferrer" className="text-blue underline">KY-41C 製品ページ（製品特長・注記）</a>（{CHECKED}）
          </p>

          <h2 className="section-title">子ども用GPS端末との違い</h2>
          <p className="text-sm text-g700 mb-3">
            KY-41Cは、通話できる点と、防犯ブザー・カメラを備える点が子ども用GPS端末との大きな違いです。一方で、重さは約109gで、たとえばみてねみまもりGPS MG05（61g）やあんしんウォッチャー（約53g）と比べると重くなります。月額は、キッズケータイプランとイマドコサーチを合わせて880円で、位置確認のみのGPS端末（月額528〜539円の機種）より高くなります（いずれも各社公式の記載・{CHECKED}）。
          </p>
          <p className="text-sm text-g700 mb-8">
            学校によっては、通話できる端末の持ち込みを認めていない場合があります。購入前に学校のルールを確認することをおすすめします。詳しくは「<Link href="/compare/gps-vs-phone/" className="text-blue underline">GPSとキッズケータイの比較</Link>」「<Link href="/knowledge/school-rules/" className="text-blue underline">小学校のGPS持ち込みルール</Link>」をご覧ください。
          </p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              イマドコサーチの検索方法や対応端末は「<Link href="/review/imadoco-search/" className="text-blue underline">イマドコサーチのレビュー</Link>」、3キャリアのキッズケータイの比較は「<Link href="/review/kids-phone/" className="text-blue underline">キッズケータイとGPS端末の比較</Link>」にまとめています。
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
            出典：<a href={PRODUCT} target="_blank" rel="noopener noreferrer" className="text-blue underline">KY-41C 製品ページ</a>、<a href={IMADOCO} target="_blank" rel="noopener noreferrer" className="text-blue underline">イマドコサーチ公式ページ</a>（{CHECKED}）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/carrier/" className="btn-primary">キャリア別比較</Link>
              <Link href="/review/imadoco-search/" className="btn-accent">イマドコサーチの詳細</Link>
              <Link href="/knowledge/smartphone-vs-gps/" className="btn-primary">スマホとGPSどっちがいい？</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
