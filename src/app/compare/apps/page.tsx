import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPSアプリの使いやすさ比較 | 主要機種のアプリ機能まとめ',
  description:
    '主要な子供見守りGPSのアプリ機能を比較します。操作性・通知設定・家族共有の柔軟性・対応OSなど、アプリの観点から選ぶ際のポイントを整理しています。',
};

const faqData = [
  { q: 'GPSアプリはiPhoneでもAndroidでも使えますか？', a: '主要機種のアプリは基本的にiOS/Androidの両対応です。対応OSのバージョンは機種ごとに異なるため、契約前に公式サイトでご確認ください。' },
  { q: '家族全員のスマートフォンにアプリを入れても、追加料金はかかりませんか？', a: '多くの機種で追加料金は発生しません。家族の見守り人数の上限は機種によって異なります（BoTトーク・みてねは無制限、まもサーチは25人、ソラノメは4人など）。' },
  { q: '通知はカスタマイズできますか？', a: '多くのアプリで、エリア出発/到着通知、バッテリー低下通知、SOS通知などをON/OFF設定できます。カスタマイズの柔軟性は機種ごとに異なります。' },
  { q: '位置情報の更新間隔は変更できますか？', a: '機種によっては更新間隔を変更できますが、頻度を上げるとバッテリー消費が増えます。標準値は、1分〜数分間隔が一般的です。' },
  { q: 'アプリが強制終了する、または接続できない場合は、どうすればよいですか？', a: 'まずアプリの再起動、次に端末の再起動、通信環境の確認を行ってください。改善しない場合は、各社のサポート窓口にお問い合わせください。' },
  { q: '複数の子供を1つのアプリで管理できますか？', a: '機種によって対応が異なります。同じ機種を2台使う場合は、1つのアプリで管理できるケースが多く見られます。詳細は公式サイトでご確認ください。' },
];

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

const appComparison = [
  { name: 'みてねみまもりGPS', os: 'iOS/Android', share: '無制限', notify: 'エリア通知・バッテリー通知' },
  { name: 'BoTトーク', os: 'iOS/Android', share: '無制限', notify: 'AI学習通知・エリア通知・音声メッセージ' },
  { name: 'あんしんウォッチャー', os: 'iOS/Android', share: '最大9人', notify: 'エリア通知・バッテリー通知' },
  { name: 'ソラノメ', os: 'iOS/Android', share: '最大4人', notify: 'SOS通知・エリア通知' },
  { name: 'まもサーチ', os: 'iOS/Android', share: '最大25人', notify: 'エリア通知・バッテリー通知' },
  { name: 'SayuU', os: 'iOS/Android', share: '公式サイトで要確認', notify: '左右確認・走行検知・通話' },
];

export default function AppsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPSアプリの使いやすさ比較", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '比較', href: '/compare/' }, { name: 'アプリ比較' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">子供GPSアプリの使いやすさ比較</h1>
          <p className="text-g600 text-lg">主要機種のアプリ機能・操作性・家族共有を一覧で比較します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">主要機種のアプリ比較表</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-blue text-white"><th className="p-3 text-left">機種名</th><th className="p-3 text-left">対応OS</th><th className="p-3 text-left">家族共有</th><th className="p-3 text-left">主な通知機能</th></tr></thead>
              <tbody>
                {appComparison.map((row) => (
                  <tr key={row.name} className="border-b border-g100">
                    <td className="p-3 font-semibold text-g800">{row.name}</td>
                    <td className="p-3 text-g600">{row.os}</td>
                    <td className="p-3 text-g600">{row.share}</td>
                    <td className="p-3 text-g600">{row.notify}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">※アプリ機能は変更される場合があります。最新情報は各公式サイトでご確認ください。</p>

          <h2 className="section-title">アプリ選びのポイント</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: '対応OSの確認', desc: 'ご家庭のスマートフォン（iOS/Android）で使えるか、対応する最低OSバージョンをご確認ください。' },
              { title: '共有できる人数', desc: '両親・祖父母まで共有する場合は、見守り人数の上限もご確認ください。' },
              { title: '通知のカスタマイズ', desc: 'ON/OFFの切り替え、エリア設定の数、通知音など、細かい設定ができるかどうかが選ぶ際のポイントです。' },
              { title: '操作のわかりやすさ', desc: '毎日使うアプリのため、初期設定のしやすさや地図の見やすさも重要です。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (<details key={i} className="faq-item"><summary>{faq.q}</summary><div className="faq-answer">{faq.a}</div></details>))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">アプリの詳細は各機種のレビューをご覧ください</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">全機種ランキング</Link>
              <Link href="/compare/accuracy/" className="btn-accent">精度比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
