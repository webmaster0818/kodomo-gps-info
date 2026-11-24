import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'キッズケータイで電話できない・かかってこないときの確認点｜発信制限・着信拒否・機内モードを取扱説明書で整理【2026年11月】',
  description:
    'キッズケータイで電話がかけられない・かかってこないときに確認する点を、ドコモ KY-41C・SK-41D、au mamorino6、ソフトバンク キッズフォン3の取扱説明書の記載で整理しています。発信制限・着信拒否・機内モード・学校モードなどを機種別にまとめています。',
  keywords: ['キッズケータイ 電話できない', 'キッズケータイ 電話 かかってこない', 'キッズケータイ 着信拒否', 'キッズケータイ 発信制限'],
};

const CHECKED = '2026年11月24日確認';

type Row = { model: string; out: string; inc: string; src: string; srcLabel: string };

const rows: Row[] = [
  {
    model: 'キッズケータイ KY-41C（ドコモ）',
    out: '機内モード、「発信制限（連絡先登録外）」の設定。初期設定では連絡先に登録した相手だけに電話をかけられる',
    inc: '「音量」の「電話やメッセージ」がオフ、「マナー／音なし」・機内モード、「着信拒否（連絡先登録外）」「着信拒否（指定番号）」の設定',
    src: 'https://www.docomo.ne.jp/binary/pdf/support/manual/KY-41C_J_syousai.pdf',
    srcLabel: 'KY-41C 取扱説明書（PDF）',
  },
  {
    model: 'キッズケータイ コンパクト SK-41D（ドコモ）',
    out: '機内モード（110・119・118を除き発着信できない）、「発信制限」の設定（初期設定では登録した相手のみ）',
    inc: '「着信拒否」の設定（初期設定では登録した相手からのみ着信）、マナーモード・機内モード、簡易電源オフ中は着信音が鳴らない',
    src: 'https://www.docomo.ne.jp/binary/pdf/support/manual/SK-41D_J_syousai.pdf',
    srcLabel: 'SK-41D 取扱説明書（PDF）',
  },
  {
    model: 'mamorino6（au）',
    out: '正しいSIMカードか、連絡先の電話番号が正しいか（市外局番から入力しているか）、機内モード、電源',
    inc: '電波の状態・サービスエリア外、相手の番号が連絡先に登録されているか、機内モード、「学校モード」、電源、SIMカード',
    src: 'https://www.au.com/content/dam/au-com/support/service/mobile/guide/manual/mamorino6/mamorino6_torisetsu_shousai.pdf',
    srcLabel: 'mamorino6 取扱説明書 詳細版（PDF）',
  },
  {
    model: 'キッズフォン3（ソフトバンク）',
    out: '電話帳に登録した管理者または連絡先との間でのみ発着信できる。電話が繋がらないときは電波状態の良い場所へ移動',
    inc: '相手が電話帳に登録されているか（登録は最大20件：管理者1件＋連絡先19件）、電波状態',
    src: 'https://faq.api.softbank.jp/olm_images/sb/251/PDF/kids-phone3_userguide.pdf',
    srcLabel: 'キッズフォン3 取扱説明書（PDF）',
  },
];

const faqData = [
  {
    q: '祖父母から電話がかかってきません。なぜですか？',
    a: 'キッズケータイの多くは、初期設定で連絡先（電話帳）に登録した相手からの電話だけを受けるようになっています。ドコモ SK-41D の取扱説明書では、初期設定では登録した相手からのみ着信し、それ以外からも受けるには「着信拒否」をオフにすると案内されています。まずは祖父母の電話番号が正しく登録されているかを確認してください（2026年11月24日確認）。',
  },
  {
    q: '子どもが登録していない番号に電話をかけられません。',
    a: 'ドコモ KY-41C・SK-41D は、初期設定では連絡先に登録した相手だけに電話をかけられます。登録していない相手にかけるには、その番号を連絡先に登録するか、保護者メニューで「発信制限」をオフにすると取扱説明書に記載されています。ソフトバンクのキッズフォン3は、電話帳に登録した管理者または連絡先との間でのみ発着信できます。',
  },
  {
    q: '圏外ではないのに電話がつながりません。',
    a: 'KY-41C の取扱説明書では、電波の性質により「圏外ではない」状態でも発信や着信ができない場合があるため、場所を移動してかけ直すよう案内されています。電源の入れ直しや、多くの人が集まる場所では時間をずらしてかけ直すことも記載されています。',
  },
  {
    q: '学校にいる間、電話がかかってこないのは故障ですか？',
    a: 'mamorino6 には、疑似的に電源を切った状態にする「学校モード」があり、取扱説明書の「電話がかかってこない」の確認項目に含まれています。ドコモ SK-41D にも「簡易電源オフ」があり、その間は着信音が鳴りません。下校後にこれらのモードが解除されているかを確認してください。',
  },
  {
    q: '確認しても直らない場合はどうすればよいですか？',
    a: '電源の入れ直しと、SIMカードが正しく挿入されているかを確認したうえで、契約している通信会社の窓口（ショップやお客さまセンター）に相談してください。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function KidsKeitaiDenwaDekinaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'キッズケータイで電話できない・かかってこないときの確認点', datePublished: '2026-11-24', dateModified: '2026-11-24', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち情報', href: '/knowledge/' }, { name: 'キッズケータイで電話できないとき' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">キッズケータイ</span>
            <span className="tag-pill bg-orange text-white">トラブル対処</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">キッズケータイで電話できない・かかってこないときの確認点</h1>
          <p className="text-g600 text-lg">ドコモ・au・ソフトバンクのキッズケータイ4機種について、取扱説明書の「故障とお考えになる前に」などに記載された確認項目を整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：まず「相手の番号が連絡先に登録されているか」を確認してください</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>登録の確認</strong>：キッズケータイの多くは、初期設定で連絡先に登録した相手とだけ発着信できます。登録漏れや番号の誤り（市外局番の入れ忘れなど）が最初の確認点です。</li>
              <li>・<strong>モードの確認</strong>：機内モード、マナーモード、学校モード（mamorino6）、簡易電源オフ（SK-41D）になっていないかを確認します。</li>
              <li>・<strong>電波と電源</strong>：場所を移動してかけ直し、それでも直らなければ電源を入れ直します。</li>
            </ul>
          </div>

          <h2 className="section-title">機種別の確認項目</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">機種</th>
                  <th className="p-3 text-left border-b-2 border-blue">電話をかけられないとき</th>
                  <th className="p-3 text-left border-b-2 border-blue">電話がかかってこない・鳴らないとき</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.model} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">{r.model}</td>
                    <td className="p-3 text-g700">{r.out}</td>
                    <td className="p-3 text-g700">{r.inc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：{rows.map((r, i) => (
              <span key={r.src}>
                {i > 0 && '、'}
                <a href={r.src} target="_blank" rel="noopener noreferrer" className="text-blue underline">{r.srcLabel}</a>
              </span>
            ))}（{CHECKED}）。設定の操作手順は機種ごとに異なるため、各取扱説明書の該当ページをご確認ください。
          </p>

          <h2 className="section-title">確認の順番</h2>
          <ol className="space-y-2 text-sm text-g700 mb-8 list-decimal pl-5">
            <li><strong>相手の番号が連絡先に登録されているか</strong>：番号の誤りや、市外局番の入れ忘れがないかも確認します（mamorino6 の取扱説明書に記載）。</li>
            <li><strong>発信制限・着信拒否の設定</strong>：ドコモ KY-41C・SK-41D は、保護者メニューの通話の設定で「発信制限」「着信拒否」を変更できます。登録していない相手と通話する必要がある場合に見直します。</li>
            <li><strong>機内モード・マナーモード・学校モード</strong>：機内モード中は発着信ができません。マナーモードや音量の設定で、着信音が鳴らないだけの場合もあります。</li>
            <li><strong>電波の状態</strong>：圏外ではない表示でもつながらない場合があるため、場所を移動してかけ直します。人が多い場所では時間をずらします。</li>
            <li><strong>電源とSIMカード</strong>：電源が入っているかを確認したうえで電源を入れ直し、SIMカードが正しく挿入されているかを確認します。</li>
          </ol>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              位置情報が更新されない場合の確認点は「<Link href="/knowledge/troubleshoot/" className="text-blue underline">子供GPSのトラブル対処</Link>」、通話料については「<Link href="/knowledge/kids-keitai-tsuwaryo/" className="text-blue underline">キッズケータイの通話料</Link>」をご覧ください。機種ごとの仕様は「<Link href="/review/ky-41c/" className="text-blue underline">KY-41C</Link>」「<Link href="/review/sk-41d/" className="text-blue underline">SK-41D</Link>」「<Link href="/review/mamorino6/" className="text-blue underline">mamorino6</Link>」「<Link href="/review/kids-phone3/" className="text-blue underline">キッズフォン3</Link>」のレビューにまとめています。
            </p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
          <p className="text-xs text-g400 mt-3">出典は上記の各社取扱説明書（{CHECKED}）</p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/troubleshoot/" className="btn-primary">子供GPSのトラブル対処</Link>
              <Link href="/knowledge/kids-keitai-kishuhenko/" className="btn-accent">キッズケータイの機種変更</Link>
              <Link href="/review/kids-phone/" className="btn-primary">キッズケータイとGPS端末の比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
