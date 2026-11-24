import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'キッズケータイの契約に必要なもの｜ドコモ・au・ソフトバンクの本人確認書類・子どもの書類・年齢条件・手数料を公式で比較【2026年11月】',
  description:
    'キッズケータイを新しく契約するときに必要なものを、ドコモ・au・ソフトバンク各社公式の料金プランページ・本人確認書類の案内・FAQで比較しています。契約者の本人確認書類、子ども（利用者）の書類、支払い方法、プランの年齢条件、契約できる場所と事務手数料をまとめています。',
  keywords: ['キッズケータイ 契約 必要なもの', 'キッズケータイ 契約', 'キッズケータイ 必要書類', 'キッズフォン 契約 必要なもの', 'mamorino6 契約'],
};

const CHECKED = '2026年11月25日確認';

type Row = { item: string; docomo: string; au: string; sb: string };

const rows: Row[] = [
  { item: '対象のプラン・機種', docomo: 'キッズケータイプラン（KY-41C・SK-41D など）', au: 'ジュニアケータイプランME（mamorino6）', sb: '基本プラン2（キッズフォン）（キッズフォン3 など）' },
  { item: '契約者の本人確認書類', docomo: '運転免許証・マイナンバーカードなど（現住所記載のもの・コピー不可）', au: '本人確認書類の原本（店頭では印鑑も案内あり）', sb: '運転免許証・日本国パスポート・マイナンバーカードなどの原本' },
  { item: '子ども（利用者）の書類', docomo: '店頭：新規契約の書類とは別に利用者のパスポートなどの書類（コピー可）。オンライン：利用者の現住所がわかる本人確認書類', au: '契約者と小学生以下の子どもそれぞれの本人確認書類が必要', sb: '使用者の本人確認書類と家族確認書類' },
  { item: '支払い方法', docomo: '契約者本人名義のクレジットカードまたはキャッシュカード', au: 'クレジットカード・キャッシュカード・通帳と届出印のいずれか', sb: '口座振替（通帳またはキャッシュカードと届出印）またはクレジットカード' },
  { item: 'プランの年齢条件', docomo: '利用者が12歳以下の場合に限り申し込み可（12歳を超えても継続利用可）', au: '申し込み時点で小学生以下の方が推奨機種（mamorino6）を利用する場合', sb: '料金ページ・重要事項説明書に年齢条件の記載なし' },
  { item: '契約事務手数料', docomo: '4,950円（ドコモオンラインショップは無料）', au: '4,950円（ウェブサイト・アプリでの手続きは3,850円）', sb: '4,950円（オンラインショップで自宅等受け取りは3,850円）' },
  { item: 'オンラインでの契約の注意', docomo: '未成年（18歳未満）名義では購入不可', au: 'mamorino6 の購入とあわせて契約。SIMのみの契約は店頭のみ', sb: '契約者が18歳未満の場合は「自宅等で受け取る」を選べない' },
];

const faqData = [
  {
    q: 'キッズケータイの契約には子どもの書類も必要ですか？',
    a: '必要です。ドコモはキッズケータイプランの新規契約で、通常の書類とは別に利用者のパスポートなどの書類（コピー可）が必要と案内しています。au はジュニアケータイプランMEで契約者と小学生以下の子どもそれぞれの本人確認書類が必要としています。ソフトバンクは契約者と使用者が異なる場合、使用者の本人確認書類と家族確認書類が必要です（2026年11月25日確認）。',
  },
  {
    q: '健康保険証は本人確認書類に使えますか？',
    a: 'ドコモは、2025年12月2日以降は「健康保険証」を本人確認書類として利用できないと案内しています。未成年については健康保険証に代わり「資格確認書」での受付が可能です。各社とも書類の扱いが変わることがあるため、来店前に公式の本人確認書類のページを確認してください。',
  },
  {
    q: 'オンラインでキッズケータイを契約できますか？',
    a: 'できます。ただし条件があります。ドコモオンラインショップは未成年（18歳未満）名義では購入できません。au は mamorino6 の購入とあわせた契約に限り、SIMのみの契約は店頭のみです。ソフトバンクは契約者が18歳未満の場合、自宅等での受け取りを選べません。',
  },
  {
    q: '子どもの名義で契約できますか？',
    a: 'ドコモはキッズケータイプランをオンラインで申し込む場合、利用者が小学生以下なら契約者が親権者であることの確認を求めています。au は契約者が小学生以下の場合は親権者名義での契約になると案内しています。ソフトバンクは12歳以上であれば本人名義で契約できますが、親権者同意書と親権者の本人確認書類が必要です。',
  },
  {
    q: '契約事務手数料はいくらですか？',
    a: '店頭では3社とも4,950円です。ドコモオンラインショップは無料、au のウェブサイト・アプリでの手続きは3,850円、ソフトバンクのオンラインショップで自宅等受け取りを選んだ場合は3,850円です。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function KidsKeitaiKeiyakuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'キッズケータイの契約に必要なもの', datePublished: '2026-11-25', dateModified: '2026-11-25', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち情報', href: '/knowledge/' }, { name: 'キッズケータイの契約に必要なもの' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">キッズケータイ</span>
            <span className="tag-pill bg-orange text-white">契約</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">キッズケータイの契約に必要なもの：3社の書類・年齢条件・手数料</h1>
          <p className="text-g600 text-lg">ドコモ・au・ソフトバンクでキッズケータイを新しく契約するときに必要なものを、各社公式の案内で比較しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：保護者の本人確認書類・支払い方法に加えて、子どもの書類が必要です</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>保護者（契約者）</strong>：本人確認書類の原本と、クレジットカードまたはキャッシュカードなどの支払い手段を用意します。</li>
              <li>・<strong>子ども（利用者）</strong>：3社とも、子どもの年齢や家族関係を確認できる書類を求めています。書類の例は会社ごとに異なります。</li>
              <li>・<strong>年齢条件</strong>：ドコモは12歳以下、au は小学生以下が対象のプランです。</li>
            </ul>
          </div>

          <h2 className="section-title">3社の必要なものの比較</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">項目</th>
                  <th className="p-3 text-left border-b-2 border-blue">ドコモ</th>
                  <th className="p-3 text-left border-b-2 border-blue">au</th>
                  <th className="p-3 text-left border-b-2 border-blue">ソフトバンク</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.item} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">{r.item}</td>
                    <td className="p-3 text-g700">{r.docomo}</td>
                    <td className="p-3 text-g700">{r.au}</td>
                    <td className="p-3 text-g700">{r.sb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：ドコモ <a href="https://www.docomo.ne.jp/charge/kidskeitaiplan-3/" target="_blank" rel="noopener noreferrer" className="text-blue underline">キッズケータイプラン</a>・<a href="https://www.docomo.ne.jp/support/subscribe/" target="_blank" rel="noopener noreferrer" className="text-blue underline">新規契約に必要なもの</a>・<a href="https://www.docomo.ne.jp/support/identification/" target="_blank" rel="noopener noreferrer" className="text-blue underline">本人確認書類</a>、au <a href="https://www.au.com/mobile/charge/juniorphone-me/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ジュニアケータイプランME</a>・<a href="https://www.au.com/support/service/mobile/procedure/preparation/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ご来店時に必要なもの</a>・<a href="https://www.au.com/mobile/information/contract/" target="_blank" rel="noopener noreferrer" className="text-blue underline">契約に関する案内</a>、ソフトバンク <a href="https://www.softbank.jp/mobile/price_plan/kids-phone/" target="_blank" rel="noopener noreferrer" className="text-blue underline">基本プラン2（キッズフォン）</a>・<a href="https://www.softbank.jp/shop/support/necessary/id/" target="_blank" rel="noopener noreferrer" className="text-blue underline">本人確認書類</a>・<a href="https://www.softbank.jp/support/faq/view/10042" target="_blank" rel="noopener noreferrer" className="text-blue underline">FAQ 10042</a>・<a href="https://www.softbank.jp/support/faq/view/20471" target="_blank" rel="noopener noreferrer" className="text-blue underline">FAQ 20471</a>（{CHECKED}）。書類の扱いは変わることがあるため、来店前に各社の最新の案内をご確認ください。
          </p>

          <h2 className="section-title">会社ごとの補足</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>ドコモ</strong>：キッズケータイプランのページでは、利用者情報の登録と親権者の確認のため、店頭では利用者のパスポートなどの書類（コピー可）が必要と案内されています。オンラインで利用者を登録する場合は利用者の現住所がわかる本人確認書類のアップロードが必要で、利用者が小学生以下なら契約者が親権者であること（同一名字・同一住所）を確認できる書類も求められます。</li>
            <li>・<strong>au</strong>：ジュニアケータイプランMEのページに「ご本人さま確認書類　ご契約者様と小学生以下のお子様それぞれ必要です」と記載されています。契約者が未成年の場合は親権者同伴での来店が必要で、契約者が小学生以下の場合は親権者名義での契約になります。</li>
            <li>・<strong>ソフトバンク</strong>：本人確認書類のページに「契約者さまとご使用者さまが異なる場合は、ご使用者さまも同様の本人確認書類および、家族確認書類が必要」と記載されています。子どもが使う場合にどの書類を使うかの具体例は、キッズフォン専用のページでは確認できませんでした。来店前にショップへ確認すると確実です。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">出典：上記の各社公式ページ（{CHECKED}）</p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              月額料金と位置検索サービスの違いは「<Link href="/compare/carrier/" className="text-blue underline">キャリア別比較</Link>」、すでにキッズケータイを使っていて買い替える場合は「<Link href="/knowledge/kids-keitai-kishuhenko/" className="text-blue underline">キッズケータイの機種変更</Link>」、中古端末を使う場合は「<Link href="/knowledge/kids-keitai-chuko/" className="text-blue underline">キッズケータイの中古</Link>」をご覧ください。
            </p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
          <p className="text-xs text-g400 mt-3">出典は上記の各社公式ページ（{CHECKED}）</p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/kids-keitai-kishuhenko/" className="btn-primary">キッズケータイの機種変更</Link>
              <Link href="/knowledge/kids-keitai-tsuwaryo/" className="btn-accent">キッズケータイの通話料</Link>
              <Link href="/compare/carrier/" className="btn-primary">キャリア別比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
