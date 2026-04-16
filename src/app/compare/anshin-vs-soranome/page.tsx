import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'あんしんウォッチャー vs ソラノメ どっちがいい？10項目比較',
  description:
    'あんしんウォッチャーとソラノメを月額料金・本体価格・精度・バッテリーなど10項目で徹底比較。2台目コストの違いや家庭に合った選び方を解説します。',
};

const faqData = [
  { q: 'あんしんウォッチャーとソラノメ、月額はどちらが安い？', a: 'あんしんウォッチャーは月額539円、ソラノメは月額539円で同額です。ただし、あんしんウォッチャーは2台目が月額0円になるキャンペーンがあるため、兄弟で使う場合はあんしんウォッチャーが断然お得です。' },
  { q: '2台目のコストはどう違いますか？', a: 'あんしんウォッチャーは2台目の月額が無料（本体代のみ）です。ソラノメは2台目も月額539円かかります。兄弟2人に持たせる場合、年間で約6,468円の差が出ます。' },
  { q: 'バッテリー持ちはどちらが良い？', a: 'あんしんウォッチャーは最大約1.5ヶ月、ソラノメは最大約1週間です。バッテリー持ちではあんしんウォッチャーが大きく有利です。' },
  { q: '精度に違いはありますか？', a: 'どちらもGPS+Wi-Fi+基地局の複合測位に対応しています。ソラノメはGPS+GLONASS+みちびき対応で衛星測位の精度がやや高い場合があります。' },
  { q: '結局どちらがおすすめですか？', a: '兄弟で使うなら2台目無料のあんしんウォッチャー、衛星測位の精度やデザインにこだわるならソラノメがおすすめです。' },
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

const compareItems = [
  { item: '月額料金', anshin: '539円', soranome: '539円' },
  { item: '本体価格', anshin: '5,680円', soranome: '14,520円' },
  { item: '2台目月額', anshin: '0円（キャンペーン）', soranome: '539円' },
  { item: 'バッテリー', anshin: '最大約1.5ヶ月', soranome: '最大約1週間' },
  { item: '測位方式', anshin: 'GPS+Wi-Fi+基地局', soranome: 'GPS+GLONASS+みちびき+Wi-Fi' },
  { item: '見守り人数', anshin: '最大9人', soranome: '最大4人' },
  { item: 'エリア通知', anshin: '対応', soranome: '対応' },
  { item: 'SOS機能', anshin: 'ボタン通知', soranome: 'SOS通知' },
  { item: 'サイズ', anshin: '約50×50×15mm', soranome: '約51×51×15mm' },
  { item: '通信回線', anshin: 'au LTE', soranome: 'docomo LTE' },
];

export default function AnshinVsSoranomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: '比較', href: '/' }, { name: 'あんしんウォッチャー vs ソラノメ' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">徹底比較</span>
            <span className="tag-pill bg-orange text-white">2台目コスト注目</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            あんしんウォッチャー vs ソラノメ 徹底比較
          </h1>
          <p className="text-g600 text-lg">兄弟で使うなら？コスト・精度・機能を10項目で比較</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">10項目比較表</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-4 text-left font-bold text-g800">比較項目</th>
                  <th className="py-3 px-4 text-left font-bold text-blue">あんしんウォッチャー</th>
                  <th className="py-3 px-4 text-left font-bold text-orange">ソラノメ</th>
                </tr>
              </thead>
              <tbody>
                {compareItems.map((row) => (
                  <tr key={row.item} className="border-b border-g100">
                    <td className="py-3 px-4 font-semibold text-g700">{row.item}</td>
                    <td className="py-3 px-4 text-g600">{row.anshin}</td>
                    <td className="py-3 px-4 text-g600">{row.soranome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">2台目コスト比較</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">兄弟2人にGPSを持たせた場合の年間コストを比較します。</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-light rounded-xl p-4">
                <h3 className="font-bold text-green-dark mb-2">あんしんウォッチャー（2台）</h3>
                <p className="text-sm text-g700">月額: 539円（2台目0円）</p>
                <p className="text-sm text-g700">年間: 6,468円 + 本体代</p>
                <p className="text-lg font-extrabold text-green-dark mt-2">圧倒的にお得!</p>
              </div>
              <div className="bg-orange-light rounded-xl p-4">
                <h3 className="font-bold text-orange-dark mb-2">ソラノメ（2台）</h3>
                <p className="text-sm text-g700">月額: 1,078円（539円 x 2台）</p>
                <p className="text-sm text-g700">年間: 12,936円 + 本体代</p>
                <p className="text-lg font-extrabold text-orange-dark mt-2">年間差額: 約6,468円</p>
              </div>
            </div>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">各機種の詳細レビューもチェック</h2>
            <p className="text-g600 mb-6 text-sm">それぞれの機種の詳しい機能・口コミはレビューページでご確認ください。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/anshin-watcher/" className="btn-primary">あんしんウォッチャーのレビュー</Link>
              <Link href="/review/soranome/" className="btn-accent">ソラノメのレビュー</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
