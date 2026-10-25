import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '発達特性のあるお子さまとGPS | 見守りと家族の安心',
  description:
    '発達特性のあるお子さまや、思わぬ場所へ出かけてしまうことがあるお子さまを見守るためのGPS活用ガイドです。自治体のSOSネットワークや福祉用具の助成の確認方法もご紹介します。',
};

const faqData = [
  { q: '発達特性のあるお子さまには、どのようなGPSが適していますか？', a: 'ランドセルやポケットに入れられる、コンパクトで軽量な端末が適しています。あわせて、ご本人が取り外しにくい装着方法をとれることや、バッテリーが長く持続することも重要です。トーク機能よりも、位置情報の正確さを重視して選ぶことをおすすめします。' },
  { q: '自治体の「SOSネットワーク」とは何ですか？', a: '多くの自治体では、行方不明時の迅速な発見を目的とした「徘徊SOSネットワーク」が整備されています。事前に登録しておくと、行方不明時に地域で情報が共有されます。詳細は、お住まいの自治体の窓口にてご確認ください。' },
  { q: '福祉用具の助成は受けられますか？', a: '一部の自治体では、認知症や発達特性のある方を対象としたGPS端末の助成制度があります。「お住まいの自治体名 + GPS 助成」で検索するか、福祉窓口にてご確認ください。制度の有無・条件は、自治体によって大きく異なります。' },
  { q: '学校や放課後デイと連携できますか？', a: '家族間で位置情報を共有できるGPSであれば、保護者の同意のもと、必要に応じて学校や支援者にもアプリのアカウントを共有する方法があります。ただし、個人情報の取り扱いについては慎重にご検討ください。' },
  { q: 'ご本人がGPSを嫌がる場合はどうすればよいですか？', a: 'ご本人の特性やコミュニケーション方法に応じて、装着方法を工夫することが大切です。医師・支援者・ご家族で相談しながら、安全とご本人の気持ちの両立を図ることをおすすめします。' },
  { q: '高齢の家族にも使えますか？', a: '機能上は使用可能ですが、操作性やSOSボタンの使いやすさの面では、高齢者向けに設計されたGPS端末のほうが適している場合があります。「子供GPSと高齢者GPSの違い」のページもあわせてご参照ください。' },
];

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function DisabilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "発達特性のあるお子さまとGPS", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '発達特性・見守り' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">発達特性のあるお子さまとGPS</h1>
          <p className="text-g600 text-lg">見守りと家族の安心を両立するためのGPSの活用方法と、地域の支援制度についてご説明します。</p>
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
              { title: '登下校や移動時の見守り', desc: '決まったルートでの移動中に位置を把握することで、早期の発見につながります。' },
              { title: '想定外の外出時の発見', desc: '予期せず家を離れてしまった場合にも、位置情報で居場所を確認できます。' },
              { title: '長時間の外出先での見守り', desc: '学校・放課後等デイサービス・公園など、複数の活動場所でも見守ることができます。' },
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
              <p className="text-2xl mb-2"></p>
              <h3 className="font-bold text-g800 mb-1">長寿命バッテリー</h3>
              <p className="text-sm text-g600">充電忘れによる見守りの空白を防ぐため、みてね（MG05・省エネモード時）・あんしんウォッチャーなど、最大2カ月持続する機種をおすすめします。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2"></p>
              <h3 className="font-bold text-g800 mb-1">測位精度の高さ</h3>
              <p className="text-sm text-g600">GPS+Wi-Fi+基地局の3測位に対応するなど、屋内でも精度が保たれる機種が適しています。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2"></p>
              <h3 className="font-bold text-g800 mb-1">装着のしやすさ</h3>
              <p className="text-sm text-g600">軽量・コンパクトで、ご本人が取り外しにくい装着方法を工夫できる機種をおすすめします。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2"></p>
              <h3 className="font-bold text-g800 mb-1">複数人見守り</h3>
              <p className="text-sm text-g600">BoTトーク（無制限）・まもサーチ（25人）など、支援者と情報を共有しやすい機種が役立ちます。</p>
            </div>
          </div>

          <h2 className="section-title">自治体の支援制度</h2>
          <div className="card-hover p-5 mb-8">
            <p className="text-g600 mb-3">
              多くの自治体では、以下のような制度が整備されています。具体的な条件・制度内容は自治体によって大きく異なるため、
              お住まいの地域の福祉窓口やホームページにて、必ずご確認ください。
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

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">GPS端末の選び方</h2>
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
