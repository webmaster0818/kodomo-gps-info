import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'GPS 学校持ち込みルール | 許可される条件と申請方法',
  description:
    'GPS端末の学校持ち込みルールを詳しく解説。許可されるケースと条件、持ち込み申請の書き方、ランドセルへの上手な入れ方まで網羅。先生への相談方法もわかります。',
};

const faqData = [
  { q: 'GPS端末は学校に持ち込めますか？', a: 'ほとんどの小学校でGPS端末の持ち込みは許可されています。通話機能のない位置確認専用端末は「携帯電話」に該当しないため、規制の対象外となるケースが多いです。' },
  { q: '持ち込み申請は必要ですか？', a: '学校によります。事前に担任の先生に確認し、必要であれば持ち込み許可申請書を提出しましょう。多くの場合、口頭での確認だけでOKな学校もあります。' },
  { q: 'ランドセルのどこに入れればいい？', a: 'ランドセルの小ポケットや内側のファスナーポケットが最適です。専用のケースやストラップを使って固定すると、落下や紛失を防げます。' },
  { q: '授業中に音が鳴りませんか？', a: 'GPS端末は基本的に音が鳴りません。トーク機能付きの機種でも、通知音をオフに設定できます。バイブレーション機能のみにしておけば授業の妨げになりません。' },
  { q: 'キッズケータイは持ち込めますか？', a: '文部科学省のガイドラインでは、小学校への携帯電話の持ち込みは「原則禁止」とされています。ただし、保護者が申請すれば許可される学校もあります。GPS端末の方が持ち込みやすいです。' },
  { q: '先生にGPS持ち込みを反対されたら？', a: '「通話機能がなく授業に影響しない」「防犯目的である」「ランドセルに入れたまま」という点を説明しましょう。それでも不可の場合は、登下校時のみランドセル内に入れる形で交渉してみてください。' },
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

export default function SchoolRulesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '学校持ち込み' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">学校ルール</span>
            <span className="tag-pill bg-orange text-white">持ち込みガイド</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            GPS 学校持ち込みルール
          </h1>
          <p className="text-g600 text-lg">許可される条件・申請方法・ランドセルへの入れ方を解説</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">学校持ち込みの現状</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">
              文部科学省は2020年に「小学校への携帯電話の持ち込みは原則禁止」としつつも、
              GPS端末については明確な禁止規定を設けていません。通話機能のないGPS端末は
              「携帯電話」に該当しないと判断する学校がほとんどで、持ち込みが認められるケースが大半です。
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-green-light rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-green-dark">約90%</p>
                <p className="text-sm text-g600">GPS端末の持ち込みを許可</p>
              </div>
              <div className="bg-orange-light rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-orange">約8%</p>
                <p className="text-sm text-g600">申請が必要</p>
              </div>
              <div className="bg-blue-light rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-blue">約2%</p>
                <p className="text-sm text-g600">持ち込み不可</p>
              </div>
            </div>
          </div>

          <h2 className="section-title">許可されるケースと条件</h2>
          <div className="space-y-3 mb-8">
            {[
              { title: '通話機能がない端末', desc: '位置確認のみのGPS端末は携帯電話に該当しないため、ほぼ許可されます。' },
              { title: 'ランドセル内に収納', desc: '授業中はランドセルに入れたまま。机に出したり操作したりしないことが条件。' },
              { title: '音が出ない設定', desc: '通知音やバイブレーションをオフにして、授業の妨げにならないようにする。' },
              { title: '保護者の申請がある', desc: '防犯目的であることを学校に伝え、必要に応じて申請書を提出する。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">持ち込み申請の書き方</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">学校によっては持ち込み許可申請書の提出が必要です。以下のポイントを押さえましょう。</p>
            <ul className="space-y-2 text-sm text-g700">
              <li>・端末名と型番を記載（例: みてねみまもりGPS 第3世代）</li>
              <li>・通話機能がないことを明記</li>
              <li>・防犯目的であることを記載</li>
              <li>・ランドセル内に収納し授業中は使用しないことを約束</li>
              <li>・音が出ない設定にすることを約束</li>
              <li>・万が一の紛失時は自己責任であることを承諾</li>
            </ul>
          </div>

          <h2 className="section-title">ランドセルへの入れ方</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: '小ポケット', desc: 'ランドセル前面の小ポケットに入れる方法。出し入れしやすく、忘れにくい場所です。' },
              { title: '内側ファスナーポケット', desc: 'ランドセル内側のポケットに入れる方法。教科書と分離でき、紛失リスクが低い。' },
              { title: '専用ケース＋ストラップ', desc: 'GPSをケースに入れてランドセルのフックに固定。落下を防ぎ、充電時の取り出しも簡単。' },
              { title: 'キーホルダータイプ', desc: 'ランドセルのDカンやファスナーに取り付け。取り外しが最も簡単な方法。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-4">
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

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">学校に持ち込みやすいGPS端末を選ぼう</h2>
            <p className="text-g600 mb-6 text-sm">小型・軽量・音が出ないGPS端末なら、学校でも安心です。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/how-to-choose/" className="btn-primary">選び方ガイド</Link>
              <Link href="/" className="btn-accent">おすすめランキング</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
