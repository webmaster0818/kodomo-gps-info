import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供とペットのGPS見守り｜兼用できる？おすすめの使い分け',
  description:
    '子供用GPSとペット用GPSの違いを徹底比較。通信方式・バッテリー・防水・サイズの違い、兼用できるケース・できないケース、おすすめの使い分け方法、両方使う場合のコスト比較まで解説。',
  keywords: ['ペット', '子供', 'GPS', '兼用', '見守り', '犬', '猫', '使い分け'],
  openGraph: {
    title: '子供とペットのGPS見守り｜兼用できる？おすすめの使い分け',
    description: '子供用GPSとペット用GPSの違いを比較。兼用の可否、おすすめの使い分け方法を解説。',
  },
};

const faqData = [
  { q: '子供用GPSをペットに使えますか？', a: '技術的には使えますが、おすすめしません。子供用GPSは人間の生活圏（屋内・電車・建物内）での精度を重視し、ペット用GPSは屋外の広範囲での追跡を重視しています。また、子供用GPSは月額課金制が多く、ペットだけに使うにはコスパが悪い場合があります。ペットにはペット専用のGPSトラッカーが最適です。' },
  { q: 'ペット用GPSを子供に使えますか？', a: 'ペット用GPSは子供に使うべきではありません。理由は、(1)通知機能が子供の見守りに最適化されていない、(2)ジオフェンス設定が限定的、(3)SOSボタンがない、(4)アプリのUIが人間の見守り向けでないためです。子供の安全には子供専用GPSを使いましょう。' },
  { q: 'AirTagは子供にもペットにも使えますか？', a: 'AirTagはBluetooth追跡タグであり、GPS端末ではありません。近くにiPhoneユーザーがいれば位置が更新されますが、リアルタイム追跡はできません。子供の通学路見守りには不十分で、ペットが迷子になった場合も即時発見は難しいです。あくまで補助的なツールとして使いましょう。' },
  { q: '子供とペット両方にGPSを使う場合、同じアプリで管理できますか？', a: '基本的にはできません。子供用GPSアプリとペット用GPSアプリは別々のサービスです。ただし、一部のスマートタグ（Tile等）は複数デバイスを1つのアプリで管理できます。ただしこれはGPS追跡ではなくBluetooth追跡のため、精度や機能面で専用機には劣ります。' },
  { q: '子供用GPSとペット用GPSを両方契約すると月額いくらですか？', a: '子供用GPS（月額528〜748円）+ペット用GPS（月額500〜1,500円）で、合計月額約1,000〜2,250円が目安です。年間で約12,000〜27,000円になります。初期費用（端末代）も別途必要ですので、両方合わせて初期費用は約10,000〜30,000円です。' },
  { q: '子供がペットの散歩に行く場合、どちらのGPSを持たせればいいですか？', a: '子供にGPSを持たせてください。子供用GPSの方がジオフェンス通知やSOSボタンなど安全機能が充実しており、保護者が最も心配する「子供の安全」を優先するべきです。ペットのGPSは首輪に装着しておき、万が一ペットが逃げた場合に備えましょう。' },
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
  { feature: '通信方式', child: 'LTE/4G回線（携帯電話回線）', pet: 'LTE/4G + GPS衛星（広域対応モデルあり）', diff: '子供用は携帯回線前提、ペット用は山間部対応モデルもあり' },
  { feature: 'バッテリー持ち', child: '3日〜1.5ヶ月', pet: '1日〜2週間', diff: 'ペット用は位置更新頻度が高いためバッテリー消耗が早い傾向' },
  { feature: '防水性能', child: 'IPX4〜IPX5（生活防水）', pet: 'IPX6〜IP67（水没対応モデルあり）', diff: 'ペット用は川遊び等を想定し高い防水性能' },
  { feature: 'サイズ・重さ', child: '26〜53g / 名刺サイズ以下', pet: '25〜60g / 首輪装着型が主流', diff: '装着方法が異なる（子供はポケット、ペットは首輪）' },
  { feature: '月額料金', child: '528〜998円', pet: '500〜1,500円', diff: '大きな差はなし。ペット用は高機能モデルが高め' },
  { feature: '通知機能', child: 'ジオフェンス・SOS・速度アラート', pet: 'ジオフェンス・脱走アラート', diff: '子供用の方が通知の種類が豊富' },
  { feature: 'アプリ機能', child: '行動履歴・トーク・複数管理', pet: '位置確認・行動パターン・健康管理', diff: '子供用は見守り特化、ペット用は健康管理も' },
];

const canShare = [
  { scenario: 'AirTag等のBluetoothタグ', possible: true, detail: '近距離の紛失防止用途なら、子供のカバンにもペットの首輪にも同じ製品を使える。ただしリアルタイム追跡はできないため、あくまで補助的な用途。' },
  { scenario: 'Tile等のスマートトラッカー', possible: true, detail: '1つのアプリで複数デバイスを管理可能。Bluetooth範囲内のみの追跡なので、本格的な見守りには不十分。' },
  { scenario: 'GPS BoT（子供用）をペットに転用', possible: false, detail: '首輪への固定が難しく、防水性能が不十分。ペット用のアクティビティログ機能もない。月額料金がペット専用機より高い場合も。' },
  { scenario: 'ペット用GPSトラッカーを子供に転用', possible: false, detail: 'SOSボタンなし、ジオフェンスの設定数が少ない、アプリが子供の見守りに最適化されていない。安全面でリスクがある。' },
];

const costComparison = [
  { pattern: '子供用GPSのみ', initial: '5,280〜11,000円', monthly: '528〜748円', annual: '11,616〜19,976円', note: '子供の見守りに最適化' },
  { pattern: 'ペット用GPSのみ', initial: '5,000〜15,000円', monthly: '500〜1,500円', annual: '11,000〜33,000円', note: 'ペットの脱走防止に最適化' },
  { pattern: '子供用 + ペット用（両方）', initial: '10,280〜26,000円', monthly: '1,028〜2,248円', annual: '22,616〜52,976円', note: 'それぞれに最適な機種を選べる' },
  { pattern: 'AirTag 2個（兼用）', initial: '9,960円（4,980円×2）', monthly: '0円', annual: '9,960円（初年度のみ）', note: '補助用途のみ。本格追跡は不可' },
];

const usageTips = [
  { icon: '👦', title: '子供の見守りを最優先にする', desc: '予算が限られる場合は、まず子供用GPSを導入しましょう。子供の安全は何よりも大切です。ペット用GPSは後から追加できます。' },
  { icon: '🐕', title: 'ペットは脱走リスクに応じて判断', desc: '完全室内飼いの猫なら、玄関にセンサーを設置する方がコスパが良い場合も。散歩中のリード外れが心配な犬は、GPS付き首輪が有効です。' },
  { icon: '📱', title: 'アプリは分けて管理', desc: '子供用とペット用は別アプリになるのが一般的。通知の混同を防ぐために、通知音や表示名を分けて設定しましょう。' },
  { icon: '💰', title: 'コストは年間で比較', desc: '初期費用だけでなく年間のトータルコストで比較しましょう。両方使う場合は年間3〜5万円が目安です。' },
];

export default function PetAndChildPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: '目的別おすすめ', href: '/' }, { name: '子供とペットのGPS見守り' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">子供&ペット</span>
            <span className="tag-pill bg-blue text-white">GPS比較</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供とペットのGPS見守り
          </h1>
          <p className="text-g600 text-lg">兼用できる？おすすめの使い分け方法を徹底解説</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-g600 mb-8">
            「子供とペットの両方にGPSを使いたいけど、同じ端末で兼用できないの？」というご質問をよくいただきます。結論から言うと、子供用とペット用のGPSはそれぞれ異なる目的で設計されているため、兼用は基本的におすすめしません。このページでは、子供用GPSとペット用GPSの違い、兼用できるケースとできないケース、おすすめの使い分け方法、両方使う場合のコスト比較を詳しく解説します。
          </p>

          <h2 className="section-title">子供用GPSとペット用GPSの違い</h2>
          <p className="text-sm text-g500 mb-3">※ 代表的な機種の比較。製品によって仕様は異なります。</p>
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
                  {item.possible ? 'OK' : 'NG'}
                </span>
                <div>
                  <h3 className="font-bold text-g800">{item.scenario}</h3>
                  <p className="text-sm text-g600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">おすすめの使い分け方法</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {usageTips.map((tip) => (
              <div key={tip.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-2xl">{tip.icon}</p>
                <div>
                  <h3 className="font-bold text-g800">{tip.title}</h3>
                  <p className="text-sm text-g600">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">両方使う場合のコスト比較</h2>
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

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">子供とペット、それぞれに最適なGPSを</h2>
            <p className="text-g600 mb-6 text-sm">大切な家族の安全を守るために、用途に合ったGPS選びを始めましょう。</p>
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
