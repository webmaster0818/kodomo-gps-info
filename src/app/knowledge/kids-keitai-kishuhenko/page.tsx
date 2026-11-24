import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'キッズケータイの機種変更｜ドコモ・au・ソフトバンクの手続き場所・事務手数料・プランの条件を公式で比較【2026年11月】',
  description:
    'キッズケータイの機種変更について、ドコモ・au・ソフトバンク各社公式の記載をもとに、手続きできる場所、事務手数料、料金プランの条件、連絡先と見守りサービスの引き継ぎで注意する点を比較しています。',
  keywords: ['キッズケータイ 機種変更', 'キッズケータイ 機種変更 手数料', 'キッズフォン 機種変更', 'mamorino6 機種変更'],
};

const CHECKED = '2026年11月24日確認';

type Row = { carrier: string; models: string; where: string; fee: string; plan: string };

const rows: Row[] = [
  {
    carrier: 'ドコモ',
    models: 'キッズケータイ KY-41C／キッズケータイ コンパクト SK-41D',
    where: 'ドコモショップ（キッズケータイからはオンラインショップにアクセスできず、パソコンからの購入もできないと案内）',
    fee: '店頭4,950円',
    plan: 'キッズケータイプラン3。申し込みは利用者が12歳以下の場合に限る（12歳を超えた後も継続利用可）',
  },
  {
    carrier: 'au',
    models: 'mamorino6',
    where: 'au Style／auショップ、au Online Shop（mamorino6の購入とあわせて契約可。SIMのみの契約は店頭）',
    fee: 'au Online Shop 3,850円／au Style・auショップ 4,950円',
    plan: 'ジュニアケータイプランME。申し込み時点で小学生以下の方が推奨機種を利用する場合',
  },
  {
    carrier: 'ソフトバンク',
    models: 'キッズフォン3／キッズフォン4',
    where: 'ソフトバンクショップ、オンラインショップ',
    fee: '店頭4,950円／オンライン3,850円',
    plan: '基本プラン2（キッズフォン）。キッズフォン4は他の料金プランに変更できない',
  },
];

const faqData = [
  {
    q: 'ドコモのキッズケータイはオンラインで機種変更できますか？',
    a: 'ドコモの製品ページと料金プランページでは、すでに持っているキッズケータイを機種変更する場合、キッズケータイからはオンラインショップにアクセスできず、パソコンからの購入もできないため、ドコモショップで手続きするよう案内されています。また、ドコモオンラインショップでは未成年（18歳未満）名義では購入できないと記載されています（2026年11月24日確認）。',
  },
  {
    q: '機種変更の事務手数料はいくらですか？',
    a: '各社公式ページでは、店頭での手続きは3社とも4,950円（税込）です。オンラインでは、au Online Shop とソフトバンクのオンラインショップが3,850円（税込）と案内されています。ドコモのキッズケータイからの機種変更はドコモショップでの手続きです。',
  },
  {
    q: '子どもが13歳になっても、キッズケータイプランを使い続けられますか？',
    a: 'ドコモのキッズケータイプラン3は、申し込みは利用者が12歳以下の場合に限られますが、申し込み後に12歳を超えた場合でも継続して利用できると案内されています。auのジュニアケータイプランMEは、申し込み時点で小学生以下であることが条件です。進学後も同じプランを続けられるかについては、当サイトではau公式の記載を確認できませんでした。',
  },
  {
    q: '連絡先（電話帳）は新しい機種に移せますか？',
    a: 'auは公式FAQで、電話帳や画像などのデータは利用者自身でバックアップ・移行するよう案内しています。ソフトバンクのキッズフォン3の取扱説明書には「かんたんデータコピー」の項目があります。ドコモ SK-41D は、連絡先を保護者のスマートフォンの専用アプリから登録できると案内されています。機種変更の前に、登録している連絡先を控えておくと安心です。',
  },
  {
    q: 'ドコモのキッズケータイプランは値上げされますか？',
    a: 'ドコモの料金プランページでは、2026年12月1日から月額料金を改定すると案内されています。ドコモの料金改定ページでは、キッズケータイプラン3の月額は550円から660円（いずれも税込）になると掲載されています（2026年11月24日確認）。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function KidsKeitaiKishuhenkoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'キッズケータイの機種変更', datePublished: '2026-11-24', dateModified: '2026-11-24', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち情報', href: '/knowledge/' }, { name: 'キッズケータイの機種変更' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">キッズケータイ</span>
            <span className="tag-pill bg-orange text-white">手続き</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">キッズケータイの機種変更：手続き場所・手数料・プランの条件</h1>
          <p className="text-g600 text-lg">ドコモ・au・ソフトバンクのキッズケータイを新しい機種に替えるときの手続きについて、各社公式の記載を比較しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：ドコモはショップでの手続き、au・ソフトバンクはオンラインでも手続きでき、手数料は店頭より1,100円安くなります</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>ドコモ</strong>：キッズケータイからの機種変更はドコモショップで手続きします。店頭の事務手数料は4,950円です。</li>
              <li>・<strong>au・ソフトバンク</strong>：オンラインの事務手数料は3,850円、店頭は4,950円です。</li>
              <li>・<strong>共通の注意点</strong>：連絡先の移し方と、保護者側の見守りサービス（イマドコサーチ・安心ナビ・位置ナビ）の設定を事前に確認しておくと、切り替え後すぐに使えます。</li>
            </ul>
          </div>

          <h2 className="section-title">3社の機種変更の比較</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">キャリア・機種</th>
                  <th className="p-3 text-left border-b-2 border-blue">手続きできる場所</th>
                  <th className="p-3 text-left border-b-2 border-blue">事務手数料（税込）</th>
                  <th className="p-3 text-left border-b-2 border-blue">料金プランと条件</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.carrier} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">
                      {r.carrier}
                      <div className="text-xs font-normal text-g500 mt-1">{r.models}</div>
                    </td>
                    <td className="p-3 text-g700">{r.where}</td>
                    <td className="p-3 text-g700">{r.fee}</td>
                    <td className="p-3 text-g700">{r.plan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：<a href="https://www.docomo.ne.jp/charge/kidskeitaiplan-3/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ドコモ キッズケータイプラン3</a>、<a href="https://www.docomo.ne.jp/support/switch_shop/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ドコモ 店頭での手続き（契約事務手数料）</a>、<a href="https://www.au.com/mobile/charge/juniorphone-me/" target="_blank" rel="noopener noreferrer" className="text-blue underline">au ジュニアケータイプランME</a>、<a href="https://www.au.com/support/faq/details/00/0000/000032/pg00003220/" target="_blank" rel="noopener noreferrer" className="text-blue underline">au よくあるご質問「機種変更の手数料はいくらですか？」</a>、<a href="https://www.softbank.jp/mobile/price_plan/kids-phone/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ソフトバンク 基本プラン2（キッズフォン）</a>、<a href="https://www.softbank.jp/shop/support/necessary/fee/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ソフトバンク 契約事務手数料</a>（{CHECKED}）。機種代金は購入方法や時期により異なるため掲載していません。
          </p>

          <h2 className="section-title">ドコモ：キッズケータイプラン3は12月1日から月額660円</h2>
          <p className="text-sm text-g700 mb-3">
            ドコモのキッズケータイプラン3で使える機種は、KY-41C・SK-41D・SH-03M と案内されています。料金プランページには「2026年12月1日（火曜）から、月額料金を改定します」と記載されており、ドコモの料金改定ページでは、月額は550円から660円（いずれも税込）になると掲載されています。家族以外への通話料は30秒あたり22円です。
          </p>
          <p className="text-sm text-g700 mb-8">
            ドコモショップで手続きする場合、通常の契約に必要な書類に加えて、利用者（お子さま）のパスポートなどの書類（コピー可）が必要と案内されています。保護者がお子さまの居場所を確認するには、保護者側の回線でイマドコサーチ（月額330円）の契約が必要です。機種ごとの仕様は「<Link href="/review/ky-41c/" className="text-blue underline">KY-41C のレビュー</Link>」「<Link href="/review/sk-41d/" className="text-blue underline">SK-41D のレビュー</Link>」をご覧ください。
          </p>

          <h2 className="section-title">au：ジュニアケータイプランMEは申し込み時点で小学生以下が条件</h2>
          <p className="text-sm text-g700 mb-8">
            auのジュニアケータイプランMEは、申し込み時点で小学生以下の方が推奨機種（mamorino6）を利用する場合のプランです。契約者とお子さまそれぞれの本人確認書類が必要と案内されています。月額は847円で、au PAY カードお支払い割を適用すると660円です。保護者がお子さまの居場所を確認する安心ナビは、探す方が月額330円で、新規の利用者は初月無料ですが、2回目以降の加入は加入日から情報料がかかると記載されています。データについては、公式FAQで「電話帳や画像など、データはお客さまご自身でバックアップ・移行を行っていただきます」と案内されています。詳しくは「<Link href="/review/mamorino6/" className="text-blue underline">mamorino6 のレビュー</Link>」をご覧ください。
          </p>

          <h2 className="section-title">ソフトバンク：基本プラン2（キッズフォン）と位置ナビ</h2>
          <p className="text-sm text-g700 mb-8">
            ソフトバンクのキッズフォンは「基本プラン2（キッズフォン）」（月額748円）で利用します。キッズフォン4の重要事項説明では、他の料金プランに変更できないと記載されています。保護者がお子さまの居場所を確認する位置ナビは、保護者側で月額220円です。12歳未満のお子さまを検索する場合は「位置ナビ検索者設定」を申し込み、お子さまの設定を保護者が代理で操作する手順が案内されています。キッズフォン3の取扱説明書には、データを別の機器にコピーする「かんたんデータコピー」の項目があります。詳しくは「<Link href="/review/kids-phone3/" className="text-blue underline">キッズフォン3 のレビュー</Link>」をご覧ください。
          </p>
          <p className="text-xs text-g400 mb-8">
            出典：<a href="https://www.docomo.ne.jp/charge/plan_renewal2026/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ドコモ 料金改定のお知らせ</a>、<a href="https://www.docomo.ne.jp/product/sk41d/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ドコモ SK-41D 製品ページ</a>、<a href="https://www.au.com/mobile/service/anshin-navi/" target="_blank" rel="noopener noreferrer" className="text-blue underline">au 安心ナビ</a>、<a href="https://www.au.com/support/faq/details/00/0000/000025/pg00002548/" target="_blank" rel="noopener noreferrer" className="text-blue underline">au よくあるご質問「データのバックアップや移行」</a>、<a href="https://www.softbank.jp/mobile/set/common/p/pdf/kids-phone/kihon-plan2-kids-phone4.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">ソフトバンク 基本プラン2（キッズフォン4）重要事項説明（PDF）</a>、<a href="https://app.ent-ext.mb.softbank.jp/service/securitypack/guide/service/ichinavi/kids/kids.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">ソフトバンク 位置ナビ（キッズフォン）設定ガイド</a>、<a href="https://faq.api.softbank.jp/olm_images/sb/251/PDF/kids-phone3_userguide.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">キッズフォン3 取扱説明書（PDF）</a>（{CHECKED}）
          </p>

          <h2 className="section-title">機種変更の前に確認しておくこと</h2>
          <ul className="space-y-2 text-sm text-g700 mb-8">
            <li>・<strong>連絡先の控え</strong>：キッズケータイは登録した相手とだけ通話できる初期設定の機種が多いため、新しい機種で登録し直す相手を控えておきます。</li>
            <li>・<strong>見守りサービスの設定</strong>：保護者側のイマドコサーチ・安心ナビ・位置ナビが、新しい機種で位置を確認できる状態になっているかを、手続き後に一度検索して確かめます。</li>
            <li>・<strong>料金プランの条件</strong>：ドコモは12歳以下、auは小学生以下という申し込み条件があります。お子さまの年齢によっては、キッズ向けのプランに申し込めない場合があります。</li>
            <li>・<strong>学校の持ち込みルール</strong>：機種が変わると形状や機能も変わるため、「<Link href="/knowledge/school-rules/" className="text-blue underline">小学校のGPS持ち込みルール</Link>」もあわせてご確認ください。</li>
          </ul>

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
              <Link href="/knowledge/kids-keitai-tsuwaryo/" className="btn-primary">キッズケータイの通話料</Link>
              <Link href="/compare/carrier/" className="btn-accent">キャリア別比較</Link>
              <Link href="/compare/gps-vs-phone/" className="btn-primary">GPSとキッズケータイの比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
