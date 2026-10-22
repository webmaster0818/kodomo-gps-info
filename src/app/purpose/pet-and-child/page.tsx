import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供とペットのGPS見守り｜兼用できる？おすすめの使い分け',
  description:
    '子供用GPSとペット用GPSの違いを比較します。通信方式・バッテリー・防水・サイズの違い、兼用できるケースとできないケース、使い分けの方法、両方を使う場合の費用の比較を解説します。',
  keywords: ['ペット', '子供', 'GPS', '兼用', '見守り', '犬', '猫', '使い分け'],
  openGraph: {
    images: ['/og.png'],
    title: '子供とペットのGPS見守り｜兼用できる？おすすめの使い分け',
    description: '子供用GPSとペット用GPSの違いを比較し、兼用の可否と使い分けの方法を解説します。',
  },
};

const faqData = [
  { q: '子供用GPSをペットに使えますか？', a: '技術的には使用できますが、おすすめしません。子供用GPSは人の生活圏（屋内・電車・建物内）での精度を重視し、ペット用GPSは屋外の広い範囲での追跡を重視しています。また、子供用GPSは月額課金制が多く、ペットのみに使う場合は割高になることがあります。ペットにはペット専用のGPSトラッカーが適しています。' },
  { q: 'ペット用GPSを子供に使えますか？', a: 'ペット用GPSを子供に使うことはおすすめしません。理由は、(1)通知機能が子供の見守りに適した設計ではない、(2)エリア通知の設定が限定的、(3)SOSボタンがない、(4)アプリの画面設計が人の見守り向けではない、の4点です。お子さまの安全のためには、子供専用のGPSをご利用ください。' },
  { q: 'AirTagは子供にもペットにも使えますか？', a: 'AirTagはBluetooth追跡タグで、GPS端末ではありません。近くにiPhoneユーザーがいれば位置が更新されますが、リアルタイムの追跡はできません。子供の通学路の見守りには不十分で、ペットが迷子になった場合も即時の発見は困難です。補助的なツールとしてのご利用をおすすめします。' },
  { q: '子供とペット両方にGPSを使う場合、同じアプリで管理できますか？', a: '基本的には管理できません。子供用GPSアプリとペット用GPSアプリは別々のサービスです。一部のスマートタグ（Tile等）は複数のデバイスを1つのアプリで管理できますが、GPS追跡ではなくBluetooth追跡のため、精度や機能面で専用機には劣ります。' },
  { q: '子供用GPSとペット用GPSを両方契約すると月額いくらですか？', a: '子供用GPS（月額528〜748円）+ペット用GPS（月額500〜1,500円）で、合計月額約1,000〜2,250円が目安です。年間で約12,000〜27,000円になります。初期費用（端末代）も別途必要ですので、両方合わせて初期費用は約10,000〜30,000円です。' },
  { q: '子供がペットの散歩に行く場合、どちらのGPSを持たせればよいですか？', a: 'お子さまにGPSを持たせてください。子供用GPSのほうがエリア通知やSOSボタンなどの安全機能が充実しているため、お子さまの安全を優先することをおすすめします。ペット用のGPSは首輪に装着し、万一ペットが逃げた場合に備えてください。' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const comparisonData = [
  { feature: '通信方式', child: 'LTE/4G回線（携帯電話回線）', pet: 'LTE/4G + GPS衛星（広域対応モデルあり）', diff: '子供用は携帯回線が前提で、ペット用には山間部に対応したモデルもあります' },
  { feature: 'バッテリー持ち', child: '3日〜1.5カ月', pet: '1日〜2週間', diff: 'ペット用は位置更新の頻度が高いため、バッテリーの消耗が早い傾向があります' },
  { feature: '防水性能', child: 'IPX4〜IPX5（生活防水）', pet: 'IPX6〜IP67（水没対応モデルあり）', diff: 'ペット用は川遊び等を想定しており、防水性能が高めです' },
  { feature: 'サイズ・重さ', child: '26〜53g / 名刺サイズ以下', pet: '25〜60g / 首輪装着型が主流', diff: '装着方法が異なります（子供はポケット、ペットは首輪）' },
  { feature: '月額料金', child: '528〜998円', pet: '500〜1,500円', diff: '大きな差はありません。ペット用は高機能モデルが高めです' },
  { feature: '通知機能', child: 'エリア通知・SOS・速度アラート', pet: 'エリア通知・脱走アラート', diff: '子供用のほうが通知の種類が豊富です' },
  { feature: 'アプリ機能', child: '行動履歴・トーク・複数管理', pet: '位置確認・行動パターン・健康管理', diff: '子供用は見守りに特化し、ペット用は健康管理にも対応しています' },
];

const canShare = [
  { scenario: 'AirTag等のBluetoothタグ', possible: true, detail: '近距離での紛失防止の用途であれば、子供のカバンにもペットの首輪にも同じ製品を使用できます。ただし、リアルタイムの追跡はできないため、補助的な用途に限られます。' },
  { scenario: 'Tile等のスマートトラッカー', possible: true, detail: '1つのアプリで複数のデバイスを管理できます。Bluetoothの範囲内のみの追跡のため、本格的な見守りには不十分です。' },
  { scenario: 'BoTトーク（子供用）をペットに転用', possible: false, detail: '首輪への固定が難しく、防水性能も不十分です。ペット用のアクティビティログ機能もありません。月額料金がペット専用機より高い場合もあります。' },
  { scenario: 'ペット用GPSトラッカーを子供に転用', possible: false, detail: 'SOSボタンがなく、エリア通知の設定数も少なく、アプリが子供の見守りに適した設計ではありません。安全面でリスクがあります。' },
];

const costComparison = [
  { pattern: '子供用GPSのみ', initial: '5,280〜11,000円', monthly: '528〜748円', annual: '11,616〜19,976円', note: '子供の見守りに適した構成' },
  { pattern: 'ペット用GPSのみ', initial: '5,000〜15,000円', monthly: '500〜1,500円', annual: '11,000〜33,000円', note: 'ペットの脱走防止に適した構成' },
  { pattern: '子供用 + ペット用（両方）', initial: '10,280〜26,000円', monthly: '1,028〜2,248円', annual: '22,616〜52,976円', note: 'それぞれに適した機種を選べる構成' },
  { pattern: 'AirTag 2個（兼用）', initial: '9,960円（4,980円×2）', monthly: '0円', annual: '9,960円（初年度のみ）', note: '補助用途のみ。本格的な追跡は不可' },
];

const usageTips = [
  { icon: '', title: '子供の見守りを優先する', desc: '予算が限られる場合は、まず子供用GPSの導入をおすすめします。ペット用GPSは後から追加できます。' },
  { icon: '', title: 'ペットは脱走リスクに応じて判断する', desc: '完全室内飼いの猫であれば、玄関にセンサーを設置するほうが費用を抑えられる場合もあります。散歩中のリード外れが心配な犬には、GPS付き首輪が有効です。' },
  { icon: '', title: 'アプリは分けて管理する', desc: '子供用とペット用は別のアプリになるのが一般的です。通知の混同を防ぐため、通知音や表示名を分けて設定してください。' },
  { icon: '', title: '費用は年間で比較する', desc: '初期費用だけでなく、年間の総額で比較することをおすすめします。両方を使う場合は年間3〜5万円が目安です。' },
];

export default function PetAndChildPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供とペットのGPS見守り｜兼用できる？おすすめの使い分け", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '目的別おすすめ', href: '/purpose/' }, { name: '子供とペットのGPS見守り' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">子供&ペット</span>
            <span className="tag-pill bg-blue text-white">GPS比較</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供とペットのGPS見守り
          </h1>
          <p className="text-g600 text-lg">兼用の可否と使い分けの方法の解説</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-g600 mb-8">
            「子供とペットの両方にGPSを使いたいが、同じ端末で兼用できないか」というご質問を多くいただきます。子供用とペット用のGPSはそれぞれ異なる目的で設計されているため、当サイトでは兼用をおすすめしていません。このページでは、子供用GPSとペット用GPSの違い、兼用できるケースとできないケース、使い分けの方法、両方を使う場合の費用の比較を解説します。
          </p>

          <h2 className="section-title">子供用GPSとペット用GPSの違い</h2>
          <p className="text-sm text-g500 mb-3">※ 代表的な機種の比較です。製品によって仕様は異なります。</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">比較項目</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">子供用GPS</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">ペット用GPS</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">違いのポイント</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((c) => (
                  <tr key={c.feature} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700 whitespace-nowrap">{c.feature}</td>
                    <td className="py-3 px-3 text-g600">{c.child}</td>
                    <td className="py-3 px-3 text-g600">{c.pet}</td>
                    <td className="py-3 px-3 text-g600">{c.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">兼用できるケース・できないケース</h2>
          <div className="space-y-4 mb-8">
            {canShare.map((item) => (
              <div key={item.scenario} className="card-hover p-5 flex gap-4 items-start">
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white ${item.possible ? 'bg-blue' : 'bg-orange'}`}>
                  {item.possible ? '兼用可' : '兼用不可'}
                </span>
                <div>
                  <h3 className="font-bold text-g800">{item.scenario}</h3>
                  <p className="text-sm text-g600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">使い分けの方法</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {usageTips.map((tip) => (
              <div key={tip.title} className="card-hover p-5 flex gap-4 items-start">
                <div>
                  <h3 className="font-bold text-g800">{tip.title}</h3>
                  <p className="text-sm text-g600">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">両方を使う場合の費用の比較</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">パターン</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">初期費用</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">月額</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">年間コスト</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">備考</th>
                </tr>
              </thead>
              <tbody>
                {costComparison.map((c) => (
                  <tr key={c.pattern} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{c.pattern}</td>
                    <td className="py-3 px-3 text-right text-g600">{c.initial}</td>
                    <td className="py-3 px-3 text-right text-g600">{c.monthly}</td>
                    <td className="py-3 px-3 text-right text-g600">{c.annual}</td>
                    <td className="py-3 px-3 text-g600">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">子供とペット、それぞれに適したGPSの選び方</h2>
            <p className="text-g600 mb-6 text-sm">ご家族の安全を守るために、用途に合ったGPSをお選びください。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/price/" className="btn-primary">月額料金比較</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">GPS選び方ガイド</Link>
            </div>
          </div>

          <p className="text-xs text-g400 mt-6 text-center">最終更新: 2026年5月</p>
        </div>
      </section>
    </>
  );
}
