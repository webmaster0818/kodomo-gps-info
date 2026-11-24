import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'キッズケータイで写真を送る方法｜KY-41C・SK-41D・mamorino6・キッズフォン3の送信手段・送れる相手・料金を公式で比較【2026年11月】',
  description:
    'キッズケータイ4機種で写真を送れるかを、ドコモ・au・ソフトバンク各社公式の製品ページ・料金ページ・取扱説明書で比較しています。カメラの有無、＋メッセージやメール（MMS）などの送信手段、送れる相手、通信料をまとめています。',
  keywords: ['キッズケータイ 写真 送る', 'キッズケータイ 写真', 'キッズフォン 写真 送る', 'mamorino6 写真', 'キッズケータイ ＋メッセージ'],
};

const CHECKED = '2026年11月25日確認';

type Row = { item: string; ky: string; sk: string; m6: string; kp3: string };

const rows: Row[] = [
  { item: 'カメラ', ky: 'あり（アウト・インとも約500万画素）', sk: '製品ページのスペック欄でカメラは非対応の表示', m6: 'あり（メイン約500万画素・サブ約200万画素）', kp3: 'あり（メイン約800万画素・サブ約500万画素）' },
  { item: '子どもから写真を送る', ky: '送れる（＋メッセージ）', sk: '送れない（保護者からの写真の受け取りはできる）', m6: '送れる（＋メッセージ。ホーム画面の「プラメ」）', kp3: '送れる（メール〔MMS〕に添付。SMSでは送れない）' },
  { item: '送れる相手', ky: '連絡先に登録した相手のみ。写真は相手が＋メッセージを利用している場合', sk: '連絡先に登録した相手のみ（文章・音声メッセージ）', m6: '保護者が登録した相手のみ（連絡先は最大50件）。他社の電話番号宛ても可', kp3: '電話帳に登録した管理者・連絡先のみ（最大20件）。ソフトバンク・ワイモバイル以外の相手はメールアドレス宛て' },
  { item: '写真送信の通信料', ky: 'キッズケータイプランの契約中は＋メッセージのパケット通信料が無料', sk: '（写真は送信不可）', m6: 'ジュニアケータイプランMEは＋メッセージの送受信が無料。＋メッセージを利用していない相手への送信は別途SMS送信料', kp3: 'メール（MMS）の送受信は無料' },
  { item: '保護者側の準備', ky: 'スマートフォンに「＋メッセージ」アプリ', sk: 'スマートフォンに「＋メッセージ」アプリ', m6: '＋メッセージの利用（防犯ブザーの写真は双方が＋メッセージ利用中の場合に送信）', kp3: '他社のスマートフォンはメールアドレスで受け取る' },
];

const faqData = [
  {
    q: 'キッズケータイから保護者のスマホに写真を送れますか？',
    a: 'ドコモ KY-41C、au mamorino6、ソフトバンク キッズフォン3 は送れます。KY-41C と mamorino6 は＋メッセージで、キッズフォン3 はメール（MMS）に写真を添付して送ります。ドコモ SK-41D は製品ページに「画像やスタンプの送信をすることはできません」と記載されており、写真は送れません（2026年11月25日確認）。',
  },
  {
    q: '写真を送るとお金はかかりますか？',
    a: 'ドコモは、キッズケータイプランの契約中に＋メッセージで写真や動画を送る場合、パケット通信料は無料と案内しています。au のジュニアケータイプランMEは＋メッセージの送受信が無料ですが、＋メッセージを利用していない相手への送信は別途SMS送信料がかかります。ソフトバンクのキッズフォン3はメール（MMS）の送受信が無料です。',
  },
  {
    q: 'SMSで写真を送れますか？',
    a: 'SMSは文字のみのサービスのため、写真は送れません。キッズフォン3の取扱説明書には「SMSでは写真を添付して送信できません」と記載されています。KY-41C の取扱説明書では、写真や動画を送信できるのは宛先が＋メッセージ利用者の場合とされています。',
  },
  {
    q: '保護者のスマホに必要なアプリはありますか？',
    a: 'ドコモの KY-41C・SK-41D は、製品ページで送信先のスマートフォンに「＋メッセージ」アプリのダウンロードが必要と案内されています。キッズフォン3から他社のスマートフォンに送る場合は、取扱説明書でメールアドレス宛てに送る方法が案内されています。',
  },
  {
    q: '登録していない相手に写真を送ることはできますか？',
    a: '4機種とも、保護者が連絡先（電話帳）に登録した相手とだけメッセージをやり取りする仕組みです。知らない相手に写真が送られることを防げます。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function KidsKeitaiShashinPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'キッズケータイで写真を送る方法', datePublished: '2026-11-25', dateModified: '2026-11-25', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち情報', href: '/knowledge/' }, { name: 'キッズケータイで写真を送る方法' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">キッズケータイ</span>
            <span className="tag-pill bg-orange text-white">使い方</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">キッズケータイで写真を送る方法：4機種の送信手段・相手・料金</h1>
          <p className="text-g600 text-lg">現在販売されているキッズケータイ4機種で写真を送れるかを、各社公式の製品ページ・料金ページ・取扱説明書で比較しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：SK-41D 以外の3機種は写真を送れます</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>KY-41C・mamorino6</strong>：＋メッセージで送ります。写真が届くのは相手も＋メッセージを利用している場合です。</li>
              <li>・<strong>キッズフォン3</strong>：メール（MMS）に添付して送ります。MMSの送受信は無料です。</li>
              <li>・<strong>SK-41D</strong>：子どもの端末から写真は送れません。保護者から送った写真を見ることはできます。</li>
            </ul>
          </div>

          <h2 className="section-title">4機種の写真送信の比較</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">項目</th>
                  <th className="p-3 text-left border-b-2 border-blue">KY-41C（ドコモ）</th>
                  <th className="p-3 text-left border-b-2 border-blue">SK-41D（ドコモ）</th>
                  <th className="p-3 text-left border-b-2 border-blue">mamorino6（au）</th>
                  <th className="p-3 text-left border-b-2 border-blue">キッズフォン3（ソフトバンク）</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.item} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">{r.item}</td>
                    <td className="p-3 text-g700">{r.ky}</td>
                    <td className="p-3 text-g700">{r.sk}</td>
                    <td className="p-3 text-g700">{r.m6}</td>
                    <td className="p-3 text-g700">{r.kp3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：<a href="https://www.docomo.ne.jp/product/ky41c/" target="_blank" rel="noopener noreferrer" className="text-blue underline">KY-41C 製品ページ</a>・<a href="https://www.docomo.ne.jp/binary/pdf/support/manual/KY-41C_J_syousai.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">取扱説明書（PDF）</a>、<a href="https://www.docomo.ne.jp/product/sk41d/" target="_blank" rel="noopener noreferrer" className="text-blue underline">SK-41D 製品ページ</a>・<a href="https://www.docomo.ne.jp/binary/pdf/support/manual/SK-41D_J_syousai.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">取扱説明書（PDF）</a>、<a href="https://www.au.com/mobile/product/featurephone/mamorino6/" target="_blank" rel="noopener noreferrer" className="text-blue underline">mamorino6 製品ページ</a>・<a href="https://www.au.com/mobile/product/featurephone/mamorino6/spec/" target="_blank" rel="noopener noreferrer" className="text-blue underline">スペック</a>・<a href="https://www.au.com/mobile/charge/juniorphone-me/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ジュニアケータイプランME</a>、<a href="https://www.softbank.jp/mobile/products/mimamorimobile/kids-phone3/" target="_blank" rel="noopener noreferrer" className="text-blue underline">キッズフォン3 製品ページ</a>・<a href="https://faq.api.softbank.jp/olm_images/sb/251/PDF/kids-phone3_userguide.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">取扱説明書（PDF）</a>（{CHECKED}）。SK-41D のカメラは、製品ページのスペック欄で非対応の表示になっていることを確認したもので、画素数の記載はありません。
          </p>

          <h2 className="section-title">機種ごとの送り方と注意</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>KY-41C</strong>：取扱説明書に「宛先が＋メッセージ利用者であれば、写真や動画、スタンプを送信できます」と記載されています。＋メッセージを利用していない相手とは SMS（文字のみ）のやり取りになります。製品ページでは、保護者のスマートフォンと Bluetooth で接続している場合にも写真を送受信できると案内されています（相手の端末に「ココツナ」アプリの設定が必要）。</li>
            <li>・<strong>SK-41D</strong>：製品ページに「『キッズケータイ コンパクト』から画像やスタンプの送信をすることはできません」と記載されています。子どもからは文章や音声メッセージを＋メッセージで送れます。保護者から送られた写真は、取扱説明書の手順で保存できます。</li>
            <li>・<strong>mamorino6</strong>：取扱説明書では、連絡先に登録した相手とだけメッセージの送受信ができ、auの電話番号宛てだけでなく国内の他事業者（NTTドコモ、ソフトバンクなど）にもメッセージを送れると記載されています。防犯ブザーを鳴らしたときの撮影写真は、本体か緊急連絡先のどちらかが＋メッセージを利用せず SMS のみを利用している場合は送信されません。</li>
            <li>・<strong>キッズフォン3</strong>：取扱説明書では、メールに写真を添付して送信でき、複数枚を選べると案内されています。相手がソフトバンクまたはワイモバイルの携帯電話なら電話番号だけで送受信でき、それ以外の相手にはメールアドレスで送ります。3MBを超えるメールの本文・添付ファイルは削除されて表示されます。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">出典：上記の各機種の取扱説明書・製品ページ（{CHECKED}）</p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              月額料金や位置検索サービスの違いは「<Link href="/compare/carrier/" className="text-blue underline">キャリア別比較</Link>」、各機種の詳細は「<Link href="/review/ky-41c/" className="text-blue underline">KY-41C</Link>」「<Link href="/review/sk-41d/" className="text-blue underline">SK-41D</Link>」「<Link href="/review/mamorino6/" className="text-blue underline">mamorino6</Link>」「<Link href="/review/kids-phone3/" className="text-blue underline">キッズフォン3</Link>」のレビューをご覧ください。
            </p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
          <p className="text-xs text-g400 mt-3">出典は上記の各社公式ページ・取扱説明書（{CHECKED}）</p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/kids-keitai-tsuwaryo/" className="btn-primary">キッズケータイの通話料</Link>
              <Link href="/knowledge/kids-keitai-denwa-dekinai/" className="btn-accent">電話できないときの確認点</Link>
              <Link href="/compare/carrier/" className="btn-primary">キャリア別比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
