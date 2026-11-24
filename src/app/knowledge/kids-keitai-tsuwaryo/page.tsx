import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'キッズケータイの通話料｜ドコモ・au・ソフトバンクの月額・家族間無料の条件・SMS料金を公式で比較【2026年11月】',
  description:
    'キッズケータイの通話料を、ドコモ・au・ソフトバンク各社公式の料金プランページで比較しています。月額、家族以外への通話料（22円／30秒）、家族間が無料になる条件、SMSの料金と、通話できる相手の制限をまとめています。',
  keywords: ['キッズケータイ 通話料', 'キッズケータイ 料金', 'キッズフォン 通話料', 'ジュニアケータイプランME 通話料'],
};

const CHECKED = '2026年11月24日確認';

type Row = { item: string; docomo: string; au: string; sb: string };

const rows: Row[] = [
  { item: '料金プラン', docomo: 'キッズケータイプラン3', au: 'ジュニアケータイプランME', sb: '基本プラン2（キッズフォン）' },
  { item: '月額（税込）', docomo: '550円（2026年12月1日から660円）', au: '847円（au PAY カードお支払い割で660円）', sb: '748円' },
  { item: '家族への国内通話', docomo: '無料（同一「ファミリー割引」グループ内）', au: '無料（同一の「家族割」）', sb: '無料（「家族割引」に申し込み、同一家族グループ内）' },
  { item: '家族以外への国内通話', docomo: '30秒あたり22円', au: '終日22円／30秒', sb: '1回5分以内は無料、5分を超えた分は22円／30秒' },
  { item: 'SMS送信', docomo: '国内の送受信は無料', au: '3.3円／通（70文字まで）。家族間は無料', sb: 'ソフトバンク携帯電話宛は無料、それ以外は3.3円／通（キッズフォン3以降）' },
  { item: '通話できる相手', docomo: '初期設定では連絡先に登録した相手のみ（KY-41C・SK-41D）', au: '保護者が登録した相手のみ（mamorino6・最大50件）', sb: '電話帳に登録した管理者・連絡先のみ（キッズフォン3は最大20件）' },
];

const faqData = [
  {
    q: 'キッズケータイから親に電話すると通話料はかかりますか？',
    a: '3社とも、同じ家族割引のグループに入っていれば家族への国内通話は無料と案内されています。ドコモは同一「ファミリー割引」グループ、auは同一の「家族割」、ソフトバンクは「家族割引」への申し込みと同一家族グループであることが条件です。保護者が別の通信会社の場合は、家族以外への通話料がかかります（2026年11月24日確認）。',
  },
  {
    q: '祖父母や友達に電話すると、いくらかかりますか？',
    a: '家族割引のグループに入っていない相手への国内通話は、ドコモとauが30秒あたり22円です。ソフトバンクの基本プラン2（キッズフォン）は、1回5分以内の国内通話は無料で、5分を超えた分が22円／30秒と案内されています。',
  },
  {
    q: '通話料が高くなりすぎない方法はありますか？',
    a: 'キッズケータイの多くは、初期設定で登録した相手としか通話できません。通話する相手を家族割引のグループ内に限れば、通話料はかかりません。auでは「料金安心サービス」（ご利用停止コース・月額110円）で、設定した金額を超えると国内の発信などを停止できると案内されています。停止中も着信や緊急通報の発信は利用できます。',
  },
  {
    q: '通話定額のオプションはありますか？',
    a: '当サイトで各社の料金プランページを確認した範囲では、現在申し込めるキッズケータイ向けの通話定額オプションは見当たりませんでした。ソフトバンクは1回5分以内の国内通話が基本料金に含まれています。',
  },
  {
    q: 'ドコモのキッズケータイプランは値上げされますか？',
    a: 'ドコモの料金プランページでは、2026年12月1日から月額料金を改定すると案内されており、料金改定ページではキッズケータイプラン3の月額が550円から660円（いずれも税込）になると掲載されています。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function KidsKeitaiTsuwaryoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'キッズケータイの通話料', datePublished: '2026-11-24', dateModified: '2026-11-24', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち情報', href: '/knowledge/' }, { name: 'キッズケータイの通話料' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">キッズケータイ</span>
            <span className="tag-pill bg-orange text-white">料金</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">キッズケータイの通話料：3社の月額・家族間無料の条件・SMS料金</h1>
          <p className="text-g600 text-lg">ドコモ・au・ソフトバンクのキッズケータイ向け料金プランについて、通話料とSMS料金を各社公式の料金プランページで比較しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：家族への通話は3社とも無料、家族以外は22円／30秒が基本です</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>家族への国内通話</strong>：同じ家族割引のグループに入っていれば、3社とも無料です。</li>
              <li>・<strong>家族以外への国内通話</strong>：ドコモ・auは30秒あたり22円です。ソフトバンクは1回5分以内なら無料で、5分を超えた分が22円／30秒です。</li>
              <li>・<strong>通話できる相手</strong>：3社とも、登録した相手とだけ通話できるしくみがあり、知らない相手への発信で通話料が増える心配は小さくなっています。</li>
            </ul>
          </div>

          <h2 className="section-title">3社の通話料・SMS料金の比較</h2>
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
            出典：<a href="https://www.docomo.ne.jp/charge/kidskeitaiplan-3/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ドコモ キッズケータイプラン3</a>、<a href="https://www.docomo.ne.jp/charge/plan_renewal2026/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ドコモ 料金改定のお知らせ</a>、<a href="https://www.au.com/mobile/charge/juniorphone-me/" target="_blank" rel="noopener noreferrer" className="text-blue underline">au ジュニアケータイプランME</a>、<a href="https://www.au.com/mobile/product/featurephone/mamorino6/" target="_blank" rel="noopener noreferrer" className="text-blue underline">au mamorino6 製品ページ</a>、<a href="https://www.softbank.jp/mobile/price_plan/kids-phone/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ソフトバンク 基本プラン2（キッズフォン）</a>、<a href="https://www.docomo.ne.jp/binary/pdf/support/manual/KY-41C_J_syousai.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">KY-41C 取扱説明書（PDF）</a>、<a href="https://faq.api.softbank.jp/olm_images/sb/251/PDF/kids-phone3_userguide.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">キッズフォン3 取扱説明書（PDF）</a>（{CHECKED}）。料金はすべて税込です。機種代金は含みません。
          </p>

          <h2 className="section-title">毎月の目安：保護者側の見守りサービスも合わせて考える</h2>
          <p className="text-sm text-g700 mb-3">
            キッズケータイで保護者がお子さまの居場所を確認するには、保護者側で見守りサービスを契約します。ドコモはイマドコサーチ（月額330円）、auは安心ナビ（探す方が月額330円）、ソフトバンクは位置ナビ（保護者側で月額220円）です。家族への通話だけで使う場合、毎月の目安は次のとおりです。
          </p>
          <ul className="space-y-1.5 text-sm text-g700 mb-3">
            <li>・<strong>ドコモ</strong>：550円＋330円＝880円（2026年12月1日からは660円＋330円＝990円）</li>
            <li>・<strong>au</strong>：847円＋330円＝1,177円（au PAY カードお支払い割の適用時は660円＋330円＝990円）</li>
            <li>・<strong>ソフトバンク</strong>：748円＋220円＝968円</li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：上記の料金プランページ、<a href="https://www.au.com/mobile/service/anshin-navi/" target="_blank" rel="noopener noreferrer" className="text-blue underline">au 安心ナビ</a>、<a href="https://www.softbank.jp/mobile/products/mimamorimobile/kids-phone3/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ソフトバンク キッズフォン3 製品ページ（位置ナビ）</a>（{CHECKED}）。当サイトで公式の月額を足し合わせた目安で、割引やキャンペーンの適用によって変わります。
          </p>

          <h2 className="section-title">通話料を抑えるためのポイント</h2>
          <ul className="space-y-2 text-sm text-g700 mb-8">
            <li>・<strong>家族割引のグループに入れる</strong>：家族への国内通話を無料にするには、各社の家族割引（ファミリー割引・家族割・家族割引）のグループに入る必要があります。</li>
            <li>・<strong>登録する相手を決めておく</strong>：登録した相手とだけ通話できる設定を使い、家族以外の登録先を必要な相手に絞ります。</li>
            <li>・<strong>上限を決める（au）</strong>：auの料金安心サービス（ご利用停止コース・月額110円）は、設定した金額を超えると国内の発信などを停止します。停止中も着信・SMS受信・緊急通報の発信は利用できると案内されています（<a href="https://www.au.com/mobile/service/ryokin-anshin/" target="_blank" rel="noopener noreferrer" className="text-blue underline">au 料金安心サービス</a>）。</li>
          </ul>
          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              通話が不要で位置確認だけでよい場合は、月額528円前後の子ども用GPS端末も選択肢になります。違いは「<Link href="/compare/gps-vs-phone/" className="text-blue underline">GPSとキッズケータイの比較</Link>」、料金の一覧は「<Link href="/compare/price/" className="text-blue underline">子供GPS 月額料金比較</Link>」をご覧ください。
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
              <Link href="/knowledge/kids-keitai-denwa-dekinai/" className="btn-accent">電話できないときの確認点</Link>
              <Link href="/compare/carrier/" className="btn-primary">キャリア別比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
