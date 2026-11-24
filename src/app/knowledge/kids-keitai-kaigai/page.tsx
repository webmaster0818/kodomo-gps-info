import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'キッズケータイは海外で使える？｜KY-41C・SK-41D・mamorino6・キッズフォン3の国際ローミング対応を公式で確認【2026年11月】',
  description:
    'キッズケータイ4機種が海外で使えるかを、ドコモ・au・ソフトバンク各社公式の取扱説明書・スペックページ・重要事項説明書で確認しています。国際ローミングへの対応、渡航時の注意、海外で子どもと連絡を取る方法をまとめています。',
  keywords: ['キッズケータイ 海外', 'キッズケータイ 海外 使える', 'キッズフォン 海外', 'mamorino6 海外', 'キッズケータイ ローミング'],
};

const CHECKED = '2026年11月25日確認';

type Row = { model: string; carrier: string; roaming: string; source: string };

const rows: Row[] = [
  { model: 'KY-41C', carrier: 'ドコモ', roaming: '使えない', source: '取扱説明書「本端末は日本国内でのみ使用可能です」。スペックページの海外の対応バンドはすべて「-」' },
  { model: 'SK-41D', carrier: 'ドコモ', roaming: '使えない', source: '取扱説明書「本端末は日本国内でのみ使用可能です」。スペックページの海外の対応バンドはすべて「-」' },
  { model: 'mamorino6', carrier: 'au', roaming: '使えない', source: 'スペックページの「au世界サービス」が「―」（非対応）' },
  { model: 'キッズフォン3', carrier: 'ソフトバンク', roaming: '使えない', source: '重要事項説明書「キッズフォン３は海外でのご利用はできません」。料金ページの基本プラン2（キッズフォン）にも「海外では利用できません」' },
];

const faqData = [
  {
    q: 'キッズケータイを海外旅行に持って行けば使えますか？',
    a: '当サイトで確認した4機種（ドコモ KY-41C・SK-41D、au mamorino6、ソフトバンク キッズフォン3）は、いずれも海外では使えません。ドコモの2機種は取扱説明書に「本端末は日本国内でのみ使用可能です」と記載され、mamorino6 はスペックページで au世界サービスが非対応、キッズフォン3 は重要事項説明書に「海外でのご利用はできません」と記載されています（2026年11月25日確認）。',
  },
  {
    q: '海外からイマドコサーチや安心ナビで子どもの居場所を調べられますか？',
    a: '子どもが海外にいる場合、キッズケータイ自体が海外で通信できないため、位置検索はできません。保護者が海外にいて子どもが日本国内にいる場合について、ソフトバンクは重要事項説明書で、管理者や連絡先が世界対応ケータイを利用していれば国内のキッズフォン3と音声発着信・メール送受信ができると案内しています。その場合は海外利用時の通話料・通信料がかかり、高額になる場合があるとしています。',
  },
  {
    q: '飛行機に乗るときはどうすればよいですか？',
    a: 'KY-41C・SK-41D・mamorino6 の取扱説明書では、航空機への搭乗時は電源を切るか機内モードに設定するよう案内されています。mamorino6 の機内モードは「ほごしゃメニュー」から保護者が設定します。',
  },
  {
    q: '海外で子どもの居場所を確認したいときはどうすればよいですか？',
    a: 'キッズケータイでは対応できないため、海外で使える端末を別に用意する必要があります。子ども用GPS端末の海外対応は機種ごとに異なり、多くは日本国内専用です。詳しくは当サイトの「子供GPSは海外で使える？」で各社の公式回答を整理しています。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function KidsKeitaiKaigaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'キッズケータイは海外で使える？', datePublished: '2026-11-25', dateModified: '2026-11-25', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち情報', href: '/knowledge/' }, { name: 'キッズケータイは海外で使える？' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">キッズケータイ</span>
            <span className="tag-pill bg-orange text-white">海外</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">キッズケータイは海外で使える？4機種の国際ローミング対応</h1>
          <p className="text-g600 text-lg">現在販売されているキッズケータイ4機種が海外で使えるかを、各社公式の取扱説明書・スペックページ・重要事項説明書で確認しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：4機種とも海外では使えません</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>通話・メッセージ・位置検索</strong>：4機種とも国際ローミングに対応しておらず、海外では通信できません。</li>
              <li>・<strong>海外渡航時</strong>：子どもと連絡を取る手段や居場所を確認する手段は、キッズケータイとは別に用意する必要があります。</li>
              <li>・<strong>保護者だけが海外にいる場合</strong>：ソフトバンクは、保護者が世界対応ケータイを使えば国内のキッズフォン3と連絡できると案内しています（海外利用時の料金がかかります）。</li>
            </ul>
          </div>

          <h2 className="section-title">4機種の海外利用の可否</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">機種</th>
                  <th className="p-3 text-left border-b-2 border-blue">会社</th>
                  <th className="p-3 text-left border-b-2 border-blue">海外での利用</th>
                  <th className="p-3 text-left border-b-2 border-blue">公式の記載</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.model} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">{r.model}</td>
                    <td className="p-3 text-g700">{r.carrier}</td>
                    <td className="p-3 text-g700">{r.roaming}</td>
                    <td className="p-3 text-g700">{r.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：<a href="https://www.docomo.ne.jp/binary/pdf/support/manual/KY-41C_J_syousai.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">KY-41C 取扱説明書（PDF）</a>・<a href="https://www.docomo.ne.jp/product/ky41c/spec.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">スペック</a>、<a href="https://www.docomo.ne.jp/binary/pdf/support/manual/SK-41D_J_syousai.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">SK-41D 取扱説明書（PDF）</a>・<a href="https://www.docomo.ne.jp/product/sk41d/spec.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">スペック</a>、<a href="https://www.au.com/mobile/product/featurephone/mamorino6/spec/" target="_blank" rel="noopener noreferrer" className="text-blue underline">mamorino6 スペック</a>・<a href="https://www.au.com/content/dam/au-com/support/service/mobile/guide/manual/mamorino6/mamorino6_torisetsu_shousai.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">取扱説明書（PDF）</a>、ソフトバンク <a href="https://www.softbank.jp/mobile/set/common/p/pdf/kids-phone/kihon-plan2-kids-phone3.pdf" target="_blank" rel="noopener noreferrer" className="text-blue underline">キッズフォン3 重要事項説明書（PDF）</a>・<a href="https://www.softbank.jp/mobile/price_plan/kids-phone/" target="_blank" rel="noopener noreferrer" className="text-blue underline">基本プラン2（キッズフォン）</a>（{CHECKED}）。
          </p>

          <h2 className="section-title">渡航前に確認しておきたいこと</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>機内では電源を切るか機内モードに</strong>：KY-41C・SK-41D・mamorino6 の取扱説明書で案内されています。mamorino6 は「ほごしゃメニュー」から保護者が機内モードを設定します。</li>
            <li>・<strong>Bluetooth・無線LANは国内で</strong>：KY-41C・SK-41D の取扱説明書では Bluetooth・無線LAN機能を、mamorino6 の取扱説明書では無線LAN（Wi-Fi）機能を日本国内で使うよう案内しています。海外で使うと罰せられることがあると記載されています。</li>
            <li>・<strong>保護者が海外から連絡する場合</strong>：ソフトバンクの重要事項説明書では、管理者や連絡先が世界対応ケータイを使えば国内のキッズフォン3と音声発着信・メール送受信ができる一方、海外利用時の通話料・通信料が適用され高額になる場合があると案内しています。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">出典：上記の各機種の取扱説明書・重要事項説明書（{CHECKED}）</p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              子ども用GPS端末の海外対応は「<Link href="/knowledge/international/" className="text-blue underline">子供GPSは海外で使える？</Link>」で各社の公式回答を整理しています。キッズケータイ各機種の詳細は「<Link href="/review/ky-41c/" className="text-blue underline">KY-41C</Link>」「<Link href="/review/sk-41d/" className="text-blue underline">SK-41D</Link>」「<Link href="/review/mamorino6/" className="text-blue underline">mamorino6</Link>」「<Link href="/review/kids-phone3/" className="text-blue underline">キッズフォン3</Link>」のレビューをご覧ください。
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
              <Link href="/knowledge/international/" className="btn-primary">子供GPSの海外対応</Link>
              <Link href="/knowledge/kids-keitai-denwa-dekinai/" className="btn-accent">電話できないときの確認点</Link>
              <Link href="/compare/carrier/" className="btn-primary">キャリア別比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
