import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPSと高齢者GPSの違い | 機能と選び方の比較',
  description:
    '子供向けGPSと高齢者向けGPSの違いを解説します。機能・操作性・バッテリー・SOS機能の違いをもとに、家族それぞれに合う選び方を紹介します。',
};

const faqData = [
  { q: '子供用GPSを高齢の家族に使えますか？', a: '機能面では使用可能です。位置情報の取得や家族での共有は、同じように利用できます。ただし、SOSボタンの操作性や装着のしやすさの点では、高齢者向けに設計されたGPSの方が優れていることが多くあります。' },
  { q: '高齢者GPSと子供GPSの主な違いは何ですか？', a: '主な違いは、①SOSボタンの大きさと押しやすさ、②装着方法（子供はランドセル／高齢者は杖や靴に装着できるタイプがある）、③操作の分かりやすさ、の3点です。月額料金はほぼ同水準です。' },
  { q: '認知症の家族向けに子供GPSで代用できますか？', a: '代用可能なケースもあります。ただし、認知症の方は端末を外してしまったり、使い方を忘れてしまったりすることもあるため、装着方法の工夫が必要です。徘徊対策専用のGPSの方が適している場合もあります。' },
  { q: '自治体のGPS貸与制度は子供にも使えますか？', a: '多くの自治体のGPS貸与制度は高齢者・認知症の方向けが中心で、一般的な子供の見守りを目的とした利用は対象外です。詳細はお住まいの自治体にてご確認ください。' },
  { q: '子供と高齢者の両方を見守りたい場合は、2台契約すべきですか？', a: 'あんしんウォッチャーの「2台目月額無料」など、家族で複数台を使うと割引になる機種もあります。家族全体の見守りの必要性を整理したうえで、ご検討ください。' },
  { q: '高齢者向けGPSのおすすめ機種はどれですか？', a: '当サイトは子供向けGPSの比較を中心としていますが、みてね・BoTトーク・あんしんウォッチャーなどは家族で幅広く使える設計です。高齢者専用の機種もあるため、用途を明確にしたうえで選ぶことをおすすめします。' },
];

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function ElderlyDifferencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPSと高齢者GPSの違い", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '子供GPSと高齢者GPSの違い' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">子供GPSと高齢者GPSの違い</h1>
          <p className="text-g600 text-lg">機能・設計・活用方法の違いをもとに、家族それぞれに合う選び方を解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">主な違いの比較</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-blue text-white"><th className="p-3 text-left">比較項目</th><th className="p-3 text-left">子供GPS</th><th className="p-3 text-left">高齢者GPS</th></tr></thead>
              <tbody>
                <tr className="border-b border-g100"><td className="p-3 font-semibold">主な利用目的</td><td className="p-3 text-g600">登下校・外出時の見守り</td><td className="p-3 text-g600">徘徊・行方不明時の発見</td></tr>
                <tr className="border-b border-g100"><td className="p-3 font-semibold">SOSボタン</td><td className="p-3 text-g600">小型・簡単な操作</td><td className="p-3 text-g600">大型・押しやすさ重視</td></tr>
                <tr className="border-b border-g100"><td className="p-3 font-semibold">装着方法</td><td className="p-3 text-g600">ランドセル・ポケット</td><td className="p-3 text-g600">杖・靴・ペンダント型</td></tr>
                <tr className="border-b border-g100"><td className="p-3 font-semibold">トーク/通話</td><td className="p-3 text-g600">音声メッセージ中心</td><td className="p-3 text-g600">通話機能重視のことが多い</td></tr>
                <tr className="border-b border-g100"><td className="p-3 font-semibold">月額料金</td><td className="p-3 text-g600">500〜1,200円台</td><td className="p-3 text-g600">500〜1,500円台</td></tr>
                <tr className="border-b border-g100"><td className="p-3 font-semibold">自治体助成</td><td className="p-3 text-g600">一般的に対象外</td><td className="p-3 text-g600">制度あり（自治体による）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">※仕様や料金は機種・自治体によって大きく異なります。最新情報は公式サイト・自治体窓口でご確認ください。</p>

          <h2 className="section-title">子供GPSを家族全員に活用する考え方</h2>
          <div className="card-hover p-5 mb-6">
            <p className="text-g600 mb-3">
              子供GPSとして人気の機種の多くは、年齢を問わず使える設計になっています。
              子供の登下校の見守りと並行して、高齢の親の外出を見守るご家庭も増えています。
            </p>
            <ul className="space-y-2 text-g600">
              <li>✓ あんしんウォッチャー：2台目の月額料金が無料のため、家族の複数人で利用しやすい機種です</li>
              <li>✓ まもサーチ：1台につき保護者5人まで、位置情報を共有できます</li>
              <li>✓ BoTトーク：見守り人数に制限がなく、多世代で利用できます</li>
            </ul>
          </div>

          <h2 className="section-title">高齢者向けGPSを選ぶ際のチェックポイント</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: 'SOSボタンの押しやすさ', desc: '緊急時にすぐに押せる大きなボタンがあるかをご確認ください。視覚的に分かりやすい色分けも重要です。' },
              { title: '装着方法のバリエーション', desc: '衣服・靴・杖・ペンダントなど、ご本人が違和感なく身に付けられる方法があるかをご確認ください。' },
              { title: '操作の分かりやすさ', desc: '高齢のご本人が使用する場合は、複雑な操作が必要ないかをご確認ください。' },
              { title: '自治体の助成制度', desc: 'お住まいの自治体にGPS貸与制度や助成制度がある場合、対象機種が指定されていることがあります。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (<details key={i} className="faq-item"><summary>{faq.q}</summary><div className="faq-answer">{faq.a}</div></details>))}

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">家族で使える機種を探す</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/purpose/family/" className="btn-primary">家族で使えるGPS</Link>
              <Link href="/knowledge/disability/" className="btn-accent">発達特性のある子の見守り</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
