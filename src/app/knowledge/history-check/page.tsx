import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供用GPSの移動履歴の確認方法｜機種別ガイド',
  description:
    '子供用GPSの移動履歴確認方法を機種別に解説。みてねみまもりGPS、あんしんウォッチャー、BoTトークなどの手順、保存期間の比較、履歴データの活用方法、プライバシーバランスを紹介します。',
  keywords: ['GPS', '移動履歴', '確認方法', '子供', '見守り', '機種別', 'ガイド'],
  openGraph: {
    title: '子供用GPSの移動履歴の確認方法｜機種別ガイド',
    description: '子供用GPSの移動履歴確認方法を機種別に解説。保存期間や活用方法も紹介。',
  },
};

const faqData = [
  { q: '移動履歴はどのくらいの期間保存されますか？', a: '機種によって異なります。みてねみまもりGPSは最大90日間、あんしんウォッチャーは最大90日間、BoTトークは最大1年間の履歴を保存しています。保存期間を超えた履歴は自動的に削除されます。' },
  { q: '移動履歴の確認にはスマホが必要ですか？', a: 'はい。ほとんどの機種ではスマホアプリから確認します。一部の機種ではPC版のWeb画面からも確認できます。アプリを開いて「履歴」タブを選択し、日付を指定して表示します。' },
  { q: '移動履歴のデータをエクスポートできますか？', a: '機種によって対応が異なります。一部の機種ではCSVやPDF形式での出力に対応しています。対応していない機種の場合は、スクリーンショットで記録する方法が一般的です。' },
  { q: '位置情報の更新間隔と履歴の精度は関係ありますか？', a: 'はい。更新間隔が短い（1〜3分）ほど移動ルートが詳細に記録されます。逆に更新間隔が長い（10〜30分）と、ポイント間が直線で結ばれるため正確なルートが分かりにくくなります。' },
  { q: '子供に移動履歴を見せるべきですか？', a: '親子の信頼関係を保つために、定期的に一緒に確認するのがおすすめです。「今日はここを通ったんだね」と会話のきっかけにし、危険な場所を通っていたら一緒に安全なルートを考えましょう。' },
  { q: '履歴データが表示されない場合の原因は？', a: 'GPS電波の届かない場所（地下、建物の奥）では位置情報が取得できず履歴が抜けます。また、バッテリー切れの時間帯も記録されません。端末の通信状態とバッテリー残量を確認しましょう。' },
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

const deviceGuides = [
  { name: 'みてねみまもりGPS', period: '最大90日間', steps: 'アプリ「みてねみまもりGPS」を開く → 「きろく」タブ → 日付を選択 → 地図上に移動ルートが表示', note: 'タイムライン表示で時刻ごとの位置を確認可能。' },
  { name: 'あんしんウォッチャー', period: '最大90日間', steps: 'au HOME アプリを開く → 端末を選択 → 「移動りれき」→ 日付指定で地図表示', note: '指定日時の位置情報をピンポイントで確認可能。' },
  { name: 'BoTトーク', period: '最大1年間', steps: 'BoTトークアプリを開く → 「きろく」→ カレンダーから日付選択 → ルートと滞在地点を表示', note: 'AI学習で「いつもの場所」を自動認識。異常検知に活用。' },
  { name: 'soranome（ソラノメ）', period: '最大30日間', steps: 'soranomeアプリを開く → 「履歴」→ 日時を選択 → 移動ルートを地図で確認', note: 'シンプルな画面で操作しやすい。' },
];

const usageIdeas = [
  { icon: '🗺️', title: '通学ルートの安全確認', desc: '毎日の通学ルートを確認し、危険な道を通っていないかチェック。安全なルートを一緒に考えるきっかけに。' },
  { icon: '⏰', title: '帰宅時間の把握', desc: '実際の帰宅時間を履歴で確認。寄り道パターンを把握し、約束の時間を守れているか確認。' },
  { icon: '📊', title: '行動パターンの分析', desc: '曜日ごとの行動パターンを把握。いつもと違う動きがあった場合に早めに気づけます。' },
  { icon: '🚨', title: '万が一の際の証拠保全', desc: '事件・事故に巻き込まれた場合、移動履歴が重要な情報源になります。保存期間内のデータを確保。' },
];

export default function HistoryCheckPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供用GPSの移動履歴の確認方法｜機種別ガイド", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "お役立ち", "item": "https://gps-kodomo.com/knowledge/"}, {"@type": "ListItem", "position": 3, "name": "移動履歴の確認方法", "item": "https://gps-kodomo.com/knowledge/history-check/"}]}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '移動履歴の確認方法' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">移動履歴</span>
            <span className="tag-pill bg-orange text-white">機種別ガイド</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供用GPSの移動履歴の確認方法｜機種別ガイド
          </h1>
          <p className="text-g600 text-lg">各機種の履歴確認手順と保存期間、活用方法を詳しく解説</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">移動履歴とは？</h2>
          <p className="text-g600 mb-6">
            移動履歴とは、GPS端末が記録したお子さまの移動ルートを時系列で確認できる機能です。
            リアルタイムの位置確認とは異なり、過去の移動を振り返ることができるため、
            通学ルートの安全確認や行動パターンの把握に活用できます。
            保存期間は機種により7日〜1年間と大きく異なるため、選択時の重要なポイントです。
          </p>

          <h2 className="section-title">機種別の確認手順と保存期間</h2>
          <div className="space-y-4 mb-8">
            {deviceGuides.map((d) => (
              <div key={d.name} className="card-hover p-5">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-bold text-g800">{d.name}</h3>
                  <span className="text-xs bg-blue-light text-blue px-2 py-1 rounded-full font-medium">保存期間: {d.period}</span>
                </div>
                <p className="text-sm text-g600 mb-1"><span className="font-medium text-g700">手順:</span> {d.steps}</p>
                <p className="text-sm text-g500">{d.note}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">保存期間の比較</h2>
          <div className="bg-blue-light rounded-xl p-6 mb-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-g800">
                  <th className="pb-3 font-bold">GPS端末</th>
                  <th className="pb-3 font-bold">保存期間</th>
                  <th className="pb-3 font-bold">更新間隔（最短）</th>
                  <th className="pb-3 font-bold">エクスポート</th>
                </tr>
              </thead>
              <tbody className="text-g600">
                {[
                  { name: 'みてねみまもりGPS', period: '90日', interval: '1.5分', export: '非対応' },
                  { name: 'あんしんウォッチャー', period: '90日', interval: '3分', export: '非対応' },
                  { name: 'BoTトーク', period: '1年', interval: '3分', export: '非対応' },
                  { name: 'soranome', period: '30日', interval: '3分', export: '非対応' },
                ].map((d) => (
                  <tr key={d.name} className="border-t border-g200">
                    <td className="py-2 font-medium text-g800">{d.name}</td>
                    <td className="py-2">{d.period}</td>
                    <td className="py-2">{d.interval}</td>
                    <td className="py-2">{d.export}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">履歴データの活用方法</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {usageIdeas.map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-2xl">{item.icon}</p>
                <div>
                  <h3 className="font-bold text-g800">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">プライバシーへの配慮</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: '確認頻度のルールを決める', desc: '毎日こまかくチェックすると監視感が強まります。週1回の振り返りや異常時のみ確認など、ルールを決めましょう。' },
              { title: '子供と一緒に確認する', desc: '親が一方的にチェックするのではなく、一緒に見ることで信頼関係を維持。安全な帰り方を話し合うきっかけに。' },
              { title: '年齢に応じた対応を', desc: '低学年は親主導で確認OK。高学年以降は子供の同意を得た上で、確認頻度を徐々に減らしていきましょう。' },
              { title: '目的を明確にする', desc: '「安全確認のため」に限定し、行動を細かく追及するための利用は避けましょう。信頼関係が損なわれます。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <p className="text-xs text-g400 mt-4 text-right">最終更新: 2026年5月</p>

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">移動履歴で安全な見守りを実現</h2>
            <p className="text-g600 mb-6 text-sm">お子さまの行動パターンを把握し、安全なルートを一緒に考えましょう。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/privacy/" className="btn-primary">プライバシーと見守り</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">GPS選び方ガイド</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
