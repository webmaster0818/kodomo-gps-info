import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'キッズケータイの充電器｜KY-41C・SK-41D・mamorino6・キッズフォン3の端子・別売の指定アダプタ・充電時間を公式で比較【2026年11月】',
  description:
    'キッズケータイ4機種の充電器を、ドコモ・au・ソフトバンク各社公式の製品ページ・仕様ページ・取扱説明書で比較しています。充電端子の形、充電器が同梱されているか、公式が案内する別売アダプタ、充電時間と電池容量、充電時の注意をまとめています。',
  keywords: ['キッズケータイ 充電器', 'キッズケータイ 充電', 'キッズフォン 充電器', 'mamorino6 充電器', 'SK-41D 充電'],
};

const CHECKED = '2026年11月25日確認';

type Row = { item: string; ky: string; sk: string; m6: string; kp3: string };

const rows: Row[] = [
  { item: '充電端子', ky: 'USB Type-C', sk: '専用の磁石式端子（付属のUSB充電ケーブル SK01 を使用）', m6: 'USB Type-C', kp3: 'USB Type-C' },
  { item: '充電器（ACアダプタ）の同梱', ky: 'なし', sk: 'なし（USB充電ケーブル SK01 は同梱）', m6: 'なし（ACアダプタ・USB Type-Cケーブルとも同梱なし）', kp3: 'なし（ACアダプタは別売）' },
  { item: '公式が案内する別売アダプタ', ky: 'ACアダプタ08 または ACアダプタ09M', sk: '2ポートACアダプタ01M', m6: 'TypeC共通ACアダプタ02', kp3: 'ソフトバンク指定のACアダプタ（取扱説明書では USB PD-PPS対応の急速充電ACアダプタで説明）' },
  { item: '充電時間（公式の目安）', ky: '約130分', sk: '約90分（2ポートACアダプタ01M）', m6: '約130分（TypeC共通ACアダプタ02）', kp3: '約65分（USB Type-C PD-PPS対応 ACアダプタ）' },
  { item: '電池容量', ky: '1500mAh', sk: '542mAh', m6: '1,540mAh', kp3: '1700mAh' },
  { item: 'ワイヤレス充電', ky: '非対応', sk: '非対応', m6: '非対応', kp3: '非対応' },
];

const faqData = [
  {
    q: 'キッズケータイに充電器は付いていますか？',
    a: '当サイトで確認した4機種（ドコモ KY-41C・SK-41D、au mamorino6、ソフトバンク キッズフォン3）は、いずれもACアダプタが同梱されていません。SK-41D には専用の「USB充電ケーブル SK01」が同梱されていますが、電源アダプタは付属していません。mamorino6 は ACアダプタと USB Type-C ケーブルの両方が同梱されていないと取扱説明書に記載されています（2026年11月25日確認）。',
  },
  {
    q: 'スマートフォンの充電器を使えますか？',
    a: 'KY-41C・mamorino6・キッズフォン3 の充電端子は USB Type-C です。ただし各社とも、充電には指定の（別売の）充電器を案内しています。mamorino6 の取扱説明書では、パソコンからのUSB充電は指定のACアダプタより時間がかかる場合があり、電池が切れた状態では指定のACアダプタで充電するよう記載されています。SK-41D は専用の磁石式端子のため、付属の USB充電ケーブル SK01 が必要です。',
  },
  {
    q: '充電にどのくらい時間がかかりますか？',
    a: '公式の目安は、KY-41C が約130分、SK-41D が約90分、mamorino6 が約130分、キッズフォン3 が約65分です。いずれも各社が指定するACアダプタで計測した値です。mamorino6 は電源を入れたままでも充電できますが、充電時間は長くなると案内されています。',
  },
  {
    q: '濡れたまま充電してもよいですか？',
    a: '各社とも、濡れた状態で充電しないよう案内しています。KY-41C・SK-41D の取扱説明書では、水に濡れた後はよく水抜きをして乾いた布で拭き取り、常温で1時間以上乾燥させてから充電するよう記載されています。充電器やケーブルなどの付属品・オプション品は防水ではありません。',
  },
  {
    q: '充電が必要になったことは保護者に分かりますか？',
    a: 'mamorino6 は、電池残量が少なくなると保護者にメッセージで通知すると案内されています。キッズフォン3も、電池残量が減ると保護者に「充電推奨」の通知メールが届くと取扱説明書に記載されています。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function KidsKeitaiJudenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'キッズケータイの充電器', datePublished: '2026-11-25', dateModified: '2026-11-25', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち情報', href: '/knowledge/' }, { name: 'キッズケータイの充電器' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">キッズケータイ</span>
            <span className="tag-pill bg-orange text-white">充電</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">キッズケータイの充電器：4機種の端子・別売アダプタ・充電時間</h1>
          <p className="text-g600 text-lg">現在販売されているキッズケータイ4機種の充電まわりを、各社公式の製品ページ・仕様ページ・取扱説明書で比較しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：4機種とも充電器は別売です。SK-41D だけ端子が専用です</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>充電器は同梱なし</strong>：4機種ともACアダプタは付属していません。購入と同時に用意しておく必要があります。</li>
              <li>・<strong>端子</strong>：KY-41C・mamorino6・キッズフォン3 は USB Type-C、SK-41D は付属ケーブルを磁石で取り付ける専用端子です。</li>
              <li>・<strong>充電時間</strong>：公式の目安はキッズフォン3が約65分と最も短く、KY-41C・mamorino6 は約130分です。</li>
            </ul>
          </div>

          <h2 className="section-title">4機種の充電まわりの比較</h2>
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
            出典：<a href="https://www.docomo.ne.jp/product/ky41c/" target="_blank" rel="noopener noreferrer" className="text-blue underline">KY-41C 製品ページ</a>・<a href="https://www.docomo.ne.jp/product/ky41c/spec.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">スペック</a>、<a href="https://www.docomo.ne.jp/product/sk41d/" target="_blank" rel="noopener noreferrer" className="text-blue underline">SK-41D 製品ページ</a>・<a href="https://www.docomo.ne.jp/binary/pdf/support/manual/SK-41D_J_syousai.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">取扱説明書（PDF）</a>、<a href="https://www.au.com/mobile/product/featurephone/mamorino6/spec/" target="_blank" rel="noopener noreferrer" className="text-blue underline">mamorino6 スペック</a>・<a href="https://www.au.com/content/dam/au-com/support/service/mobile/guide/manual/mamorino6/mamorino6_torisetsu_shousai.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">取扱説明書（PDF）</a>、<a href="https://www.softbank.jp/mobile/products/mimamorimobile/kids-phone3/" target="_blank" rel="noopener noreferrer" className="text-blue underline">キッズフォン3 製品ページ</a>・<a href="https://faq.api.softbank.jp/olm_images/sb/251/PDF/kids-phone3_userguide.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">取扱説明書（PDF）</a>（{CHECKED}）。充電時間は各社が指定するACアダプタで計測した目安です。
          </p>

          <h2 className="section-title">機種ごとの補足</h2>
          <ul className="space-y-2 text-sm text-g700 mb-8">
            <li>・<strong>KY-41C</strong>：製品ページでは「充電には、別売の『ACアダプタ08』または『ACアダプタ09M』が必要です」と案内されています。スペックページの充電の欄には、ポータブルACアダプタ 01kuruko・02、ACアダプタ 05・07・08、3ポートACアダプタ01 が対応（いずれも約130分）と記載されています。卓上ホルダは使えません。</li>
            <li>・<strong>SK-41D</strong>：付属の USB充電ケーブル SK01 の充電端子には磁石があり、本体の充電端子の正しい位置に取り付けると固定されます。製品ページでは「電源アダプタは付属していません。充電には別売の『2ポートACアダプタ01M』がご利用いただけます」と案内されています。ケーブルをなくすと充電できなくなるため、保管場所を決めておくと安心です。</li>
            <li>・<strong>mamorino6</strong>：取扱説明書の周辺機器として TypeC共通ACアダプタ02 が案内されています。パソコンからのUSB充電もできますが、指定のACアダプタでの充電より時間がかかる場合があります。</li>
            <li>・<strong>キッズフォン3</strong>：取扱説明書に「ACアダプタは別売です。ソフトバンク指定のACアダプタをお使いください」と記載されています。充電中はお知らせLEDが赤く点灯し、充電が完了すると消灯します。</li>
          </ul>

          <h2 className="section-title">充電するときの注意</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>濡れたまま充電しない</strong>：4機種とも防水ですが、濡れた状態での充電は禁止されています。KY-41C・SK-41D は、水に濡れた後は水抜きをして拭き取り、常温で1時間以上乾燥させてから充電するよう案内されています。</li>
            <li>・<strong>充電器は防水ではない</strong>：付属品・オプション品は防水／防塵性能を備えていません。</li>
            <li>・<strong>充電する場所の温度</strong>：KY-41C・SK-41D の取扱説明書では、周囲温度5℃〜35℃の場所で充電するよう記載されています。</li>
            <li>・<strong>SK-41D の磁石部</strong>：磁気カードなどをUSB充電ケーブルの磁石部に近づけないよう案内されています。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">出典：上記の各機種の取扱説明書・製品ページ（{CHECKED}）</p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              子ども用GPS端末の電池持ちと充電の頻度は「<Link href="/knowledge/battery/" className="text-blue underline">子供GPSのバッテリー比較</Link>」、キッズケータイ各機種の詳細は「<Link href="/review/ky-41c/" className="text-blue underline">KY-41C</Link>」「<Link href="/review/sk-41d/" className="text-blue underline">SK-41D</Link>」「<Link href="/review/mamorino6/" className="text-blue underline">mamorino6</Link>」「<Link href="/review/kids-phone3/" className="text-blue underline">キッズフォン3</Link>」のレビューをご覧ください。
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
              <Link href="/knowledge/kids-keitai-denwa-dekinai/" className="btn-primary">電話できないときの確認点</Link>
              <Link href="/knowledge/battery/" className="btn-accent">バッテリー比較</Link>
              <Link href="/compare/carrier/" className="btn-primary">キャリア別比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
