import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'キッズケータイを紛失したら｜ドコモ・au・ソフトバンクの利用停止の窓口・探し方・再開と機種変更の手数料を公式で整理【2026年11月】',
  description:
    'キッズケータイを紛失したときの手順を、ドコモ・au・ソフトバンク各社公式の案内で整理しています。回線の利用停止の電話番号と受付時間、位置検索・遠隔ロック、警察への遺失届、見つかった後の再開と新しい端末の手数料をまとめています。',
  keywords: ['キッズケータイ 紛失', 'キッズケータイ なくした', 'キッズフォン 紛失', 'mamorino 紛失', 'キッズケータイ 利用停止'],
};

const CHECKED = '2026年11月25日確認';

type Row = { item: string; docomo: string; au: string; sb: string };

const rows: Row[] = [
  { item: '利用停止の電話窓口', docomo: 'ドコモの携帯から 15712／一般電話から 0120-524-360（24時間・年中無休）', au: '0077-7-113（つながらない場合 0120-925-314・24時間365日）', sb: '0800-919-0113（故障・事故・盗難・紛失受付）' },
  { item: 'Webでの停止', docomo: 'ドコモオンライン手続き', au: 'My au', sb: 'My SoftBank（「回線停止・解除」→「中断」）' },
  { item: '停止の手数料／停止中の基本料', docomo: '無料／かかる', au: '無料／かかる', sb: '紛失時の案内ページに記載なし' },
  { item: '端末を探す方法', docomo: 'ケータイお探しサービス（KY-41C・SK-41D 対象）、イマドコサーチ', au: '安心ナビ（mamorino6 対応）', sb: '位置ナビ（キッズフォン3）' },
  { item: '見つかった後の再開', docomo: '電話窓口などで再開（同じ電話番号）', au: 'My au または 0077-7-113', sb: 'My SoftBank または電話（解除は9時〜20時・ショップ不可）' },
  { item: '新しい端末で使う場合', docomo: 'ドコモショップ窓口のみ・契約事務手数料4,950円', au: '機種変更の手続きで電話番号などを引き継ぎ', sb: 'eSIMの再発行が必要・手数料4,950円（ショップ・取扱店）' },
];

const faqData = [
  {
    q: 'キッズケータイをなくしたら、最初に何をすればよいですか？',
    a: 'まず保護者のスマートフォンなどから見守りサービスで位置を確認し、見つからない場合は通信会社に回線の利用停止を申し込みます。ドコモはドコモの携帯から15712、一般電話から0120-524-360（24時間・年中無休）、auは0077-7-113（24時間365日）、ソフトバンクは0800-919-0113が窓口です。Webでも手続きできます（2026年11月25日確認）。',
  },
  {
    q: '利用を止めている間も料金はかかりますか？',
    a: 'ドコモとauは、利用中断（緊急通話停止）の手数料は無料ですが、停止中も基本使用料やオプションの使用料はかかると案内しています。auは、停止の翌月から数えて3か月目の月末までに解除しないと、回線が一時休止に移ると記載しています。',
  },
  {
    q: '回線を止めても、位置を探せますか？',
    a: 'auは、回線を停止すると「携帯電話を探す（ロック解除含む）」が利用できないと案内しています。見守りサービスで位置を確認してから停止するかどうかを判断し、すぐに見つからない場合は不正利用を防ぐために停止を優先してください。',
  },
  {
    q: '警察に届け出る必要はありますか？',
    a: 'auは、補償サービスを利用するには警察署や交番で作成する遺失届が必要と案内しています。ドコモ・ソフトバンクの補償でも、警察への届け出の情報（受理番号など）や盗難届・紛失届が求められます。落とした場所が分からない場合も、早めに最寄りの警察署・交番に届け出ておくと安心です。',
  },
  {
    q: '見つからなかった場合、同じ電話番号で新しい機種を使えますか？',
    a: '3社とも、電話番号を引き継いで新しい端末で使えます。ドコモは新しい電話機で再開する場合も同じ電話番号で利用でき、手続きはドコモショップ窓口のみ・契約事務手数料は4,950円です。auは機種変更の手続きで電話番号などを引き継げます。ソフトバンクのキッズフォン3はeSIM専用のため、ショップ・取扱店でeSIMの再発行（手数料4,950円）が必要です。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function KidsKeitaiFunshitsuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'キッズケータイを紛失したら', datePublished: '2026-11-25', dateModified: '2026-11-25', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち情報', href: '/knowledge/' }, { name: 'キッズケータイを紛失したら' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">キッズケータイ</span>
            <span className="tag-pill bg-orange text-white">トラブル対応</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">キッズケータイを紛失したら：利用停止の窓口・探し方・再開の手続き</h1>
          <p className="text-g600 text-lg">キッズケータイ（ドコモ KY-41C・SK-41D／au mamorino6／ソフトバンク キッズフォン3）を紛失したときの手順を、各社公式の案内で整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：探す → 利用停止 → 届け出 → 再開か機種変更、の順で進めます</h2>
            <ol className="space-y-1.5 text-sm text-g700 list-decimal pl-5">
              <li><strong>探す</strong>：保護者側の見守りサービス（イマドコサーチ・安心ナビ・位置ナビ）で最後の位置を確認します。</li>
              <li><strong>利用停止</strong>：見つからなければ、各社の電話窓口かWebで回線を止めます。停止の手数料はドコモ・auとも無料です。</li>
              <li><strong>届け出</strong>：警察署・交番に遺失届を出します。補償サービスを使う場合に必要です。</li>
              <li><strong>再開か機種変更</strong>：見つかったら停止を解除し、見つからなければ同じ電話番号で新しい端末に切り替えます。</li>
            </ol>
          </div>

          <h2 className="section-title">3社の窓口と手続きの比較</h2>
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
            出典：<a href="https://www.docomo.ne.jp/support/inquiry/lost/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ドコモ 紛失・盗難時のお問い合わせ</a>、<a href="https://www.docomo.ne.jp/support/discontinuance/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ドコモ 利用中断・再開</a>、<a href="https://www.docomo.ne.jp/service/search/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ドコモ ケータイお探しサービス</a>、<a href="https://www.au.com/support/service/mobile/trouble/loss/" target="_blank" rel="noopener noreferrer" className="text-blue underline">au 紛失・盗難にあったとき</a>、<a href="https://www.au.com/support/service/mobile/procedure/service/stopping/" target="_blank" rel="noopener noreferrer" className="text-blue underline">au 緊急通話停止</a>、<a href="https://www.softbank.jp/mobile/support/lost/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ソフトバンク 紛失・盗難時</a>、<a href="https://www.softbank.jp/mobile/set/common/p/pdf/mimamorimobile/kihon-plan-kids-phone3.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">キッズフォン3 重要事項説明書（PDF）</a>（{CHECKED}）。ドコモの電話窓口は、ご本人確認のため契約者の電話番号とネットワーク暗証番号（4桁）を用意するよう案内されています。
          </p>

          <h2 className="section-title">手順1：見守りサービスと端末の機能で探す</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>ドコモ</strong>：ケータイお探しサービスは、2023年2月から KY-41C、2024年7月から SK-41D が対象です（SH-03M などの過去の機種は対象外）。月額55円、またはなくした後のスポット契約3,300円で、ケータイ補償サービス・smartあんしん補償の契約中は月額無料です。月額契約は端末購入から14日以内の申し込みが必要です。保護者がイマドコサーチ（月額330円）を契約していれば、その画面でも位置を確認できます。</li>
            <li>・<strong>au</strong>：保護者側の安心ナビ（探す方 月額330円）で mamorino6 の位置を確認できます。mamorino6 は、緊急連絡先に登録した電話番号から本文に「ロック」と入力したメッセージを送ると、本体が再起動してロックがかかり操作できなくなります（取扱説明書）。</li>
            <li>・<strong>ソフトバンク</strong>：位置ナビで、キッズフォン3を紛失したときにおおよその位置を検索できると案内されています（検索する側は位置ナビ 月額220円）。取扱説明書には、あんしん設定の「遠隔ロック／アラーム」の項目があります。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：<a href="https://www.docomo.ne.jp/service/search/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ドコモ ケータイお探しサービス</a>、<a href="https://www.au.com/content/dam/au-com/support/service/mobile/guide/manual/mamorino6/mamorino6_torisetsu_shousai.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">mamorino6 取扱説明書（PDF）</a>、<a href="https://www.softbank.jp/mobile/support/manual/mimamori-keitai/kids-phone3/detail/67579/" target="_blank" rel="noopener noreferrer" className="text-blue underline">キッズフォン3 オンラインマニュアル（位置ナビ）</a>、<a href="https://faq.api.softbank.jp/olm_images/sb/251/PDF/kids-phone3_userguide.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">キッズフォン3 取扱説明書（PDF）</a>（{CHECKED}）
          </p>

          <h2 className="section-title">手順2：回線の利用を止める</h2>
          <p className="text-sm text-g700 mb-3">
            見つからない場合は、上の表の窓口で回線を止めます。ソフトバンクは、契約者本人からの連絡が難しい場合は家族からの電話でも受け付けると案内しています。ドコモとauは停止の手数料が無料ですが、停止中も基本使用料などはかかります。
          </p>
          <p className="text-sm text-g700 mb-8">
            auは、回線を停止すると「携帯電話を探す（ロック解除含む）」が使えなくなると案内しています。また、停止の翌月から数えて3か月目の月末までに解除しない場合、回線は一時休止に移ります。
          </p>

          <h2 className="section-title">手順3：警察に届け出る</h2>
          <p className="text-sm text-g700 mb-8">
            auは、回線停止の連絡が済んだら警察への遺失届の提出や、紛失した施設への連絡も検討するよう案内しており、補償サービスを使うには警察署や交番で作成する遺失届が必要と記載しています。届け出の受理番号などは控えておきます。
          </p>

          <h2 className="section-title">手順4：見つかったら再開、見つからなければ新しい端末へ</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>ドコモ</strong>：再開時も同じ電話番号で使えます。新しい電話機で再開する場合は、ドコモショップ窓口のみの受付で、契約事務手数料4,950円（税込）と端末代金がかかります。</li>
            <li>・<strong>au</strong>：見つかった場合は My au か電話で停止を解除します。見つからなかった場合は、機種変更の手続きで電話番号などを引き継げます。</li>
            <li>・<strong>ソフトバンク</strong>：停止の解除は電話または My SoftBank で受け付け、ショップでは受け付けていません（解除の受付は9時〜20時）。キッズフォン3はeSIM専用のため、新しい端末で使うにはショップ・取扱店でeSIMの再発行（手数料4,950円）が必要です。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">出典：上記の各社公式ページ（{CHECKED}）。機種変更の手数料と各社のプラン条件は「<Link href="/knowledge/kids-keitai-kishuhenko/" className="text-blue underline">キッズケータイの機種変更</Link>」で比較しています。</p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              子ども用GPS端末（あんしんウォッチャー・みてねみまもりGPS など）をなくした場合は「<Link href="/knowledge/loss/" className="text-blue underline">子供GPSを紛失したら？対処法ガイド</Link>」をご覧ください。
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
              <Link href="/knowledge/loss/" className="btn-accent">子供GPSを紛失したら</Link>
              <Link href="/knowledge/kids-keitai-chuko/" className="btn-primary">キッズケータイの中古</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
