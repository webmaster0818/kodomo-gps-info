import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPSと高齢者GPSの違い | 機能と選び方の比較',
  description:
    '子供向けGPSと高齢者向けGPSの違いを解説。機能・操作性・バッテリー・SOS機能の違いから、家族それぞれに合う選び方を紹介します。',
};

const faqData = [
  { q: '子供用GPSを高齢の家族に使えますか？', a: '機能的には使用可能です。位置情報の取得・家族共有は同じように使えます。ただし、高齢者向けに設計されたGPSのほうが、SOSボタンの操作性・装着のしやすさで優れていることが多いです。' },
  { q: '高齢者GPSと子供GPSの大きな違いは？', a: '主な違いは、①SOSボタンの大きさと押しやすさ、②装着方法（子供はランドセル／高齢者は杖や靴に装着できるタイプがある）、③操作の分かりやすさ、です。月額料金はほぼ同水準です。' },
  { q: '認知症の家族向けに子供GPSで代用できますか？', a: '代用可能なケースもあります。ただし、認知症の方は端末を外してしまったり、使い方を忘れてしまうこともあるため、装着方法の工夫が必要です。専門の徘徊対策GPSの方が向いていることもあります。' },
  { q: '自治体のGPS貸与制度は子供にも使えますか？', a: '多くの自治体のGPS貸与制度は高齢者・認知症向けが中心で、一般的な子供見守り目的での利用は対象外です。お住まいの自治体でご確認ください。' },
  { q: '両方のニーズがある家族は2台契約すべき？', a: 'あんしんウォッチャーの「2台目月額無料」など、家族で複数台使うと割引になる機種もあります。家族全体の見守りニーズを整理して検討しましょう。' },
  { q: '高齢者向けGPSでおすすめの機種は？', a: '本サイトは子供向けGPSの比較が中心ですが、みてね・BoTトーク・あんしんウォッチャーなどは家族で幅広く使える設計です。高齢者専用機種もあるため、用途を明確にした上で選びましょう。' },
];

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function ElderlyDifferencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '子供GPSと高齢者GPSの違い' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">子供GPSと高齢者GPSの違い</h1>
          <p className="text-g600 text-lg">機能・設計・活用方法の違いから、家族それぞれに合う選び方を解説</p>
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
                <tr className="border-b border-g100"><td className="p-3 font-semibold">SOSボタン</td><td className="p-3 text-g600">小型・操作簡単</td><td className="p-3 text-g600">大型・押しやすさ重視</td></tr>
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
              子供GPSとして人気の機種の多くは、実は年齢を問わず使える設計になっています。
              子供の登下校の見守りと並行して、高齢の親の外出を見守る家庭も増えてきています。
            </p>
            <ul className="space-y-2 text-g600">
              <li>✓ あんしんウォッチャー：2台目月額無料で家族複数人で使いやすい</li>
              <li>✓ まもサーチ：見守り人数最大25人で、家族全員の情報を共有可能</li>
              <li>✓ BoTトーク：見守り人数無制限で、多世代で使える</li>
            </ul>
          </div>

          <h2 className="section-title">高齢者向けGPSを選ぶ際のチェックポイント</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: 'SOSボタンの押しやすさ', desc: '緊急時に瞬時に押せる大きなボタンがあるか。視覚的に分かりやすい色分けも重要。' },
              { title: '装着方法のバリエーション', desc: '衣服・靴・杖・ペンダントなど、本人が違和感なく身につけられる方法があるか。' },
              { title: '操作の分かりやすさ', desc: '高齢のご本人が使用する場合は、複雑な操作が必要ないかを確認。' },
              { title: '自治体の助成制度', desc: 'お住まいの自治体にGPS貸与制度や助成制度がある場合、対象機種が指定されていることも。' },
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
