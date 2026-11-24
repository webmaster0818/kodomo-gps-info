import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'キッズケータイの中古は使える？｜ドコモ・au・ソフトバンクの対象機種・契約手数料・ネットワーク利用制限の確認方法を公式で整理【2026年11月】',
  description:
    '中古のキッズケータイを使う前に確認したい点を、ドコモ・au・ソフトバンク各社公式の料金プランページと案内で整理しています。キッズ向けプランの対象機種、SIMのみ契約の手数料、ネットワーク利用制限の確認方法、譲渡前のリセットをまとめています。',
  keywords: ['キッズケータイ 中古', 'キッズケータイ 中古 使える', 'キッズフォン 中古', 'mamorino 中古', 'キッズケータイ 白ロム'],
};

const CHECKED = '2026年11月25日確認';

type Row = { item: string; docomo: string; au: string; sb: string };

const rows: Row[] = [
  { item: '料金プラン', docomo: 'キッズケータイプラン3', au: 'ジュニアケータイプランME', sb: '基本プラン2（キッズフォン）' },
  { item: 'プランで使える機種', docomo: 'KY-41C・SK-41D・SH-03M', au: '推奨機種 mamorino6（希望すれば mamorino5・mamorino4 も可）', sb: 'キッズフォン4・キッズフォン3・キッズフォン2・キッズフォン・みまもりケータイ4' },
  { item: '端末を買わずに申し込む場合', docomo: '上記の機種を利用中であることをドコモが確認できた場合に限り申し込める', au: 'SIMのみの契約は店頭で受付', sb: '専用USIMカードが必要（キッズフォン3はeSIM専用）' },
  { item: '利用者の条件', docomo: '12歳以下（1人1回線まで）', au: '申し込み時点で小学生以下', sb: '料金プランページに年齢の記載なし' },
  { item: '新規契約の事務手数料（税込）', docomo: '4,950円（オンラインショップは無料）', au: '店頭 4,950円', sb: '4,950円（オンラインショップは3,850円）' },
];

const faqData = [
  {
    q: '中古で買ったキッズケータイでも、キッズ向けの料金プランを契約できますか？',
    a: '3社とも、キッズ向けプランは対象機種を使っていることが条件です。ドコモは、端末の購入を伴わない場合、KY-41C・SK-41D・SH-03M を利用中であることをドコモが確認できた場合に限り申し込めると案内しています。ただし、中古端末そのものの扱いを明記した公式の記載は、当社が確認した範囲では3社とも見当たりませんでした。購入前に各社の窓口で確認することをおすすめします（2026年11月25日確認）。',
  },
  {
    q: '赤ロム（ネットワーク利用制限）はどうやって確認しますか？',
    a: '3社とも、端末のIMEI（製造番号15桁）を入力して確認できるページを用意しています。auは「中古の携帯電話機や譲渡された携帯電話機をご利用になる場合は、契約や取得方法にかかわらず利用制限されている可能性があります」として、事前の確認を求めています。IMEIは本体の設定画面や箱のラベルで確認できます。',
  },
  {
    q: 'ドコモのキッズケータイを、ほかの会社のSIMで使えますか？',
    a: 'キッズ向けのプランは各社の対象機種でしか使えません。ソフトバンクは重要事項説明書で「キッズフォンはSIMロック解除の対象ではありません」と案内しています。ドコモの案内では、他社で購入した機種の利用について「一切動作保証いたしません」とされています。',
  },
  {
    q: '前の持ち主の設定が残っていることはありますか？',
    a: 'ソフトバンクは、譲渡や解約でキッズフォンの利用をやめる場合は事前に本体の設定をリセットするよう案内しており、リセットしないと譲受人に管理者設定などの詳細情報を閲覧される可能性があると説明しています。中古品を受け取ったら、使い始める前に初期化されているかを確認してください。',
  },
  {
    q: '旧機種（キッズフォン2・mamorino5 など）は今のプランで使えますか？',
    a: 'ソフトバンクの基本プラン2（キッズフォン）はキッズフォン2も対象機種に含まれています。auのジュニアケータイプランMEは、希望すれば mamorino5・mamorino4 も選べますが、＋メッセージには対応していないと記載されています。ドコモのキッズケータイプラン3は KY-41C・SK-41D・SH-03M が対象です。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function KidsKeitaiChukoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'キッズケータイの中古は使える？', datePublished: '2026-11-25', dateModified: '2026-11-25', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち情報', href: '/knowledge/' }, { name: 'キッズケータイの中古は使える？' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">キッズケータイ</span>
            <span className="tag-pill bg-orange text-white">契約・手続き</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">キッズケータイの中古は使える？対象機種・手数料・確認しておきたい点</h1>
          <p className="text-g600 text-lg">中古のキッズケータイを使う前に確認したい点を、ドコモ・au・ソフトバンク各社の公式ページで整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：対象機種・ネットワーク利用制限・初期化の3点を先に確認します</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>対象機種</strong>：キッズ向けプランは各社の対象機種でしか使えません。買う前に、その機種がプランの対象かを確認します。</li>
              <li>・<strong>ネットワーク利用制限</strong>：各社の確認ページにIMEIを入力し、利用制限がかかっていないかを確認します。</li>
              <li>・<strong>初期化</strong>：前の持ち主の設定が残っていないか、使い始める前に確認します。</li>
              <li>・中古端末でキッズ向けプランを契約できるかを明記した公式の記載は、当サイトが確認した範囲では3社とも見当たりませんでした。購入前に各社の窓口で確認するのが確実です。</li>
            </ul>
          </div>

          <h2 className="section-title">3社のキッズ向けプランの対象機種と契約条件</h2>
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
            出典：<a href="https://www.docomo.ne.jp/charge/kidskeitaiplan-3/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ドコモ キッズケータイプラン</a>、<a href="https://www.docomo.ne.jp/support/simcard_other/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ドコモ 他社で購入した機種の利用</a>、<a href="https://www.au.com/mobile/charge/juniorphone-me/" target="_blank" rel="noopener noreferrer" className="text-blue underline">au ジュニアケータイプランME</a>、<a href="https://www.au.com/support/faq/details/00/0000/000028/pg00002818/" target="_blank" rel="noopener noreferrer" className="text-blue underline">au 契約事務手数料（FAQ）</a>、<a href="https://www.softbank.jp/mobile/price_plan/kids-phone/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ソフトバンク 基本プラン2（キッズフォン）</a>、<a href="https://www.softbank.jp/mobile/set/common/p/pdf/kids-phone/kihon-plan2-kids-phone.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">ソフトバンク 重要事項説明書（PDF）</a>、<a href="https://www.softbank.jp/support/faq/view/10043" target="_blank" rel="noopener noreferrer" className="text-blue underline">ソフトバンク 新規契約事務手数料（FAQ）</a>（{CHECKED}）。料金はすべて税込です。
          </p>

          <h2 className="section-title">確認① ネットワーク利用制限（赤ロム）</h2>
          <p className="text-sm text-g700 mb-3">
            分割払いの代金が支払われていない端末や、不正に契約・取得された端末は、通信会社がネットワークへの接続を制限する場合があります。ソフトバンクは「正規取扱店以外（オークションや中古市場など）で購入した携帯電話機が不正に契約・取得されたものであれば、利用制限の対象となる場合があります」と案内しています。購入前に、端末のIMEI（製造番号15桁）を各社の確認ページに入力して確かめます。
          </p>
          <ul className="space-y-1.5 text-sm text-g700 mb-3">
            <li>・ドコモ：<a href="http://nw-restriction.nttdocomo.co.jp/top.php" target="_blank" rel="noopener noreferrer" className="text-blue underline">ネットワーク利用制限携帯電話機確認サイト</a></li>
            <li>・au：<a href="https://www.au.com/support/service/mobile/network-riyoseigen/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ネットワーク利用制限について（確認ページへの案内）</a></li>
            <li>・ソフトバンク：<a href="https://www.softbank.jp/mobile/support/3g/restriction/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ネットワーク利用制限について（確認ページへの案内）</a></li>
          </ul>
          <p className="text-xs text-g400 mb-8">出典：上記の各社公式ページ（{CHECKED}）</p>

          <h2 className="section-title">確認② SIMロックと他社SIM</h2>
          <p className="text-sm text-g700 mb-8">
            キッズ向けプランは各社の対象機種でしか使えないため、中古品を買うときは「どの会社の機種か」を確認します。ソフトバンクは重要事項説明書で「キッズフォンはSIMロック解除の対象ではありません」と記載しています。また、キッズフォンを使うには専用のUSIMカードが必要で、キッズフォン3はeSIM専用モデルです。ドコモは、他社で購入した機種の利用については「一切動作保証いたしません」と案内しています（{CHECKED}）。
          </p>

          <h2 className="section-title">確認③ 前の持ち主の設定と見守りサービス</h2>
          <p className="text-sm text-g700 mb-3">
            ソフトバンクの重要事項説明書では、譲渡や解約でキッズフォンの利用をやめる場合は事前に本体の設定をリセットするよう案内されています。リセットしないと、キッズフォンに反映された設定が残り、譲受人に管理者設定などの詳細情報を閲覧される可能性があると記載されています。譲渡の手続きには4,950円の譲渡手数料がかかります。
          </p>
          <p className="text-sm text-g700 mb-8">
            保護者が居場所を確認する見守りサービス（ドコモのイマドコサーチ、auの安心ナビ、ソフトバンクの位置ナビ）は、保護者側で契約して、お子さまの端末の電話番号などを登録して使います。中古端末を使い始めるときは、新しい回線の番号で登録し直します。各サービスの料金は「<Link href="/knowledge/kids-keitai-tsuwaryo/" className="text-blue underline">キッズケータイの通話料</Link>」でまとめています。
          </p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              子ども用GPS端末の中古品については「<Link href="/knowledge/second-hand/" className="text-blue underline">子供用GPSの中古購入・買い替えガイド</Link>」、新しい機種への切り替えは「<Link href="/knowledge/kids-keitai-kishuhenko/" className="text-blue underline">キッズケータイの機種変更</Link>」をご覧ください。
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
              <Link href="/knowledge/second-hand/" className="btn-accent">子供用GPSの中古購入</Link>
              <Link href="/compare/carrier/" className="btn-primary">キャリア別比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
