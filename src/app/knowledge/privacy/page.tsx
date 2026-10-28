import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS プライバシーと位置情報の取扱い | 各社比較',
  description:
    '子供GPS端末のプライバシーと位置情報の取扱いを各社で比較します。データの保存期間、第三者提供の有無、お子さまのプライバシーへの配慮の仕方を解説します。',
};

const faqData = [
  { q: '子供の位置情報データは安全ですか？', a: '主要メーカーはすべて暗号化通信を使用し、位置情報データを厳格に管理しています。ただし、各社のプライバシーポリシーを事前に確認することをおすすめします。' },
  { q: '位置情報のデータはどれくらい保存されますか？', a: '機種により異なりますが、1カ月〜3カ月が一般的です。みてねみまもりGPSは約90日、BoTトークはアプリで過去1週間の移動履歴を確認できます（BoT公式ヘルプ・2026年10月28日確認）。' },
  { q: '位置情報が第三者に提供されることはありますか？', a: '主要メーカーは、個人を特定できる形での第三者提供を行っていません。ただし、匿名化したうえで統計データとして活用する場合があると明記しているメーカーもあります。' },
  { q: 'お子さまが大きくなったら、GPSを外すべきですか？', a: 'お子さまの成長に合わせて使い方を変えることが大切です。小学校高学年になったら「いつでも見ているわけではない」と伝え、徐々に確認頻度を減らしていくことをおすすめします。' },
  { q: 'お子さまにGPSを持たせていることを伝えるべきですか？', a: 'はい。隠さずに伝えることをおすすめします。「あなたの安全のため」と説明し、信頼関係を築くことが大切です。秘密にしていると、知られたときに不信感につながります。' },
  { q: '退会したらデータは削除されますか？', a: 'ほとんどのサービスでは、退会後に個人データが削除されます。具体的な削除期間は各社のプライバシーポリシーで確認できます。' },
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

const privacyComparison = [
  { name: 'みてねみまもりGPS', encryption: '暗号化通信', retention: '約90日', thirdParty: '匿名統計のみ', deletion: '退会後に削除' },
  { name: 'BoTトーク', encryption: '暗号化通信', retention: '約30日', thirdParty: '匿名統計のみ', deletion: '退会後に削除' },
  { name: 'あんしんウォッチャー', encryption: '暗号化通信', retention: '約90日', thirdParty: 'なし', deletion: '退会後に削除' },
  { name: 'ソラノメ（販売終了）', encryption: '暗号化通信', retention: '約30日', thirdParty: '匿名統計のみ', deletion: '退会後に削除' },
  { name: 'みもりGPSトーク', encryption: '公式に記載なし', retention: '公式に記載なし', thirdParty: '公式に記載なし', deletion: '有効な契約がなく1年間ログインがない場合は自動退会（利用規約）' },
];

export default function PrivacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPS プライバシーと位置情報の取扱い", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'プライバシー' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">プライバシー</span>
            <span className="tag-pill bg-orange text-white">位置情報の取扱い</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS プライバシーと位置情報の取扱い
          </h1>
          <p className="text-g600 text-lg">各社の位置情報の管理体制と、お子さまのプライバシーへの配慮</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">各社のプライバシーポリシー比較</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">機種名</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">通信暗号化</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">保存期間</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">第三者提供</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">退会時</th>
                </tr>
              </thead>
              <tbody>
                {privacyComparison.map((d) => (
                  <tr key={d.name} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{d.name}</td>
                    <td className="py-3 px-3 text-g600">{d.encryption}</td>
                    <td className="py-3 px-3 text-g600">{d.retention}</td>
                    <td className="py-3 px-3 text-g600">{d.thirdParty}</td>
                    <td className="py-3 px-3 text-g600">{d.deletion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">データの保存期間について</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">
              GPS端末が記録する位置情報は、各サービスのサーバーに保存されます。
              保存期間は30日〜90日が一般的で、期間を過ぎたデータは自動的に削除されます。
              移動履歴を長期間見返したい場合は、アプリのスクリーンショットで保存しておくことをおすすめします。
            </p>
          </div>

          <h2 className="section-title">お子さまのプライバシーへの配慮</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: 'GPSを持たせていることを隠さない', desc: 'お子さまに「お守りとして持ってね」と説明することをおすすめします。秘密にしていると、知られたときに信頼関係が損なわれます。' },
              { title: '見守りの目的を説明する', desc: '「監視」ではなく「安全のため」という目的を丁寧に伝えます。お子さまが納得していることが大切です。' },
              { title: '成長に合わせた使い方の見直し', desc: '低学年は常時確認、中学年は登下校時のみ、高学年は緊急時のみ確認するなど、段階的に変化させることをおすすめします。' },
              { title: '位置情報の確認頻度を意識する', desc: '5分おきに確認する必要はありません。エリア通知を活用し、異常がなければ確認しない姿勢も大切です。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 text-sm mb-1">{item.title}</h3>
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

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">安心して使えるGPS端末の選び方</h2>
            <p className="text-g600 mb-6 text-sm">プライバシーに配慮した使い方で、お子さまの安全を守ることが大切です。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/overprotective/" className="btn-primary">過保護にならない使い方</Link>
              <Link href="/" className="btn-accent">おすすめランキング</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
