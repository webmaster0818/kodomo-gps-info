import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '発達特性のあるお子さまとGPS | 見守りと家族の安心',
  description:
    '発達特性のあるお子さまや、思わぬ場所へ出かけてしまうお子さまを見守るためのGPS活用ガイド。自治体のSOSネットワークや福祉用具助成の確認方法も紹介します。',
};

const faqData = [
  { q: '発達特性のある子にはどんなGPSが向いていますか？', a: 'ランドセルやポケットに入れられるコンパクトで軽量な端末、本人が取り外しにくい装着方法、長寿命バッテリーのものが向いています。トーク機能よりも位置情報の正確さを重視して選びましょう。' },
  { q: '自治体の「SOSネットワーク」とは何ですか？', a: '多くの自治体で行方不明時の迅速な発見を目指す「徘徊SOSネットワーク」が整備されています。事前登録しておくと、行方不明時に地域で情報共有されます。お住まいの自治体窓口で詳細をご確認ください。' },
  { q: '福祉用具の助成は受けられますか？', a: '一部の自治体では、認知症や発達特性のある方向けにGPS端末の助成制度があります。「お住まいの自治体名 + GPS 助成」で検索するか、福祉窓口でご確認ください。制度の有無・条件は自治体により大きく異なります。' },
  { q: '学校や放課後デイと連携できますか？', a: '保護者の同意のもと、家族間で位置情報を共有できるGPSであれば、学校や支援者にも必要に応じてアプリアカウントを共有する方法があります。ただし個人情報の扱いは慎重に検討してください。' },
  { q: 'GPSで本人が嫌がる場合は？', a: 'ご本人の特性やコミュニケーション方法に応じて、装着方法を工夫することが大切です。医師・支援者・ご家族で相談しながら、安全と本人の気持ちのバランスを取りましょう。' },
  { q: '高齢の家族にも使えますか？', a: '機種的には使用可能ですが、高齢者向けに設計されたGPS端末の方が操作性やSOSボタンの使いやすさで適していることがあります。「子供GPSと高齢者GPSの違い」ページも参考にしてください。' },
];

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function DisabilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '発達特性・見守り' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">発達特性のあるお子さまとGPS</h1>
          <p className="text-g600 text-lg">見守りと家族の安心を両立するGPS活用と、地域の支援制度について</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-5 mb-8 border-l-4 border-orange">
            <p className="text-sm text-g600">
              本ページは、発達特性のあるお子さまや、思わぬタイミングで家を離れてしまうことがあるお子さまを見守る保護者の方に向けた情報です。
              お子さま一人ひとりの特性や状況は異なりますので、具体的な対応は医師・支援者・ご家族でご相談の上でお決めください。
            </p>
          </div>

          <h2 className="section-title">GPSが役立つシーン</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: '登下校や移動時の見守り', desc: '決まったルートでの移動中に、位置を把握することで早期発見につながります。' },
              { title: '想定外の外出時の発見', desc: 'ふと家を離れてしまった場合にも、位置情報で居場所を確認できます。' },
              { title: '長時間の外出先での安心', desc: '学校・放課後デイ・公園など、複数の活動場所でも見守れます。' },
              { title: '家族間の情報共有', desc: '保護者だけでなく、祖父母・支援者などにも位置情報を共有することで、支える人の輪を広げられます。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">機種選びのポイント</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">🔋</p>
              <h3 className="font-bold text-g800 mb-1">長寿命バッテリー</h3>
              <p className="text-sm text-g600">充電忘れによる「見守り空白」を防ぐため、みてね・あんしんウォッチャーなど最大2ヶ月持つ機種が安心。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">📍</p>
              <h3 className="font-bold text-g800 mb-1">測位精度の高さ</h3>
              <p className="text-sm text-g600">ソラノメのGPS+Wi-Fi+基地局の3測位など、屋内でも精度が保たれる機種が有利。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">🎒</p>
              <h3 className="font-bold text-g800 mb-1">装着のしやすさ</h3>
              <p className="text-sm text-g600">軽量コンパクトで、ご本人が取り外ししにくい装着方法を工夫できる機種を選びましょう。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">👥</p>
              <h3 className="font-bold text-g800 mb-1">複数人見守り</h3>
              <p className="text-sm text-g600">BoTトーク無制限・まもサーチ25人など、支援者と情報共有しやすい機種が助けになります。</p>
            </div>
          </div>

          <h2 className="section-title">自治体の支援制度</h2>
          <div className="card-hover p-5 mb-8">
            <p className="text-g600 mb-3">
              多くの自治体で以下のような制度が整備されています。具体的な条件・制度内容は自治体によって大きく異なるため、
              お住まいの地域の福祉窓口やホームページで必ずご確認ください。
            </p>
            <ul className="space-y-2 text-g600">
              <li>・徘徊SOSネットワーク（行方不明時の情報共有）</li>
              <li>・GPS端末購入費助成（対象者限定）</li>
              <li>・高齢者向けGPS貸与制度</li>
              <li>・相談支援事業所での情報提供</li>
            </ul>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (<details key={i} className="faq-item"><summary>{faq.q}</summary><div className="faq-answer">{faq.a}</div></details>))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">選び方を詳しく見る</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/how-to-choose/" className="btn-primary">選び方ガイド</Link>
              <Link href="/knowledge/elderly-difference/" className="btn-accent">高齢者GPSとの違い</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
