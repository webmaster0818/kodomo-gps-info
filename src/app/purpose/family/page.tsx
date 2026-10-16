import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS 兄弟・2台目におすすめ | 家族プラン・見守り人数で選ぶ',
  description:
    '兄弟で子供GPSを使う場合は、2台目が無料になるあんしんウォッチャーが代表的な選択肢です。見守り人数が多い機種（BoTトーク・まもサーチなど）もあわせて比較し、ご家族に合った選び方を解説します。',
};

const faqData = [
  { q: '兄弟2人で子供GPSを使う場合、どれがお得ですか？', a: 'あんしんウォッチャーは2台目の月額料金が無料になるため、兄弟での利用において特に費用面のメリットがあります。端末代は2台分必要ですが、毎月の利用料金が1台分で済む点が大きな利点です。' },
  { q: '家族みんなで位置情報を見るには？', a: 'ほとんどの子供GPSは、保護者のアプリに複数人を招待できます。BoTトークのように見守り人数に制限がない機種や、まもサーチのように最大25人まで追加できる機種は、祖父母や親戚まで共有したいご家庭に向いています。' },
  { q: '1台のGPSを兄弟で使い回してもいい？', a: '技術的には、ランドセルに入れ替えることで使い回すことは可能です。ただし、どちらが持っているかを毎回変更するのは現実的ではありません。ごきょうだいそれぞれに別の端末を持たせたほうが、位置情報の取り違えを防げます。' },
  { q: '親子で別のスマートフォンから見られますか？', a: '共働きのご家庭では、父親と母親それぞれのスマートフォンに同じアプリをインストールし、同じアカウントで閲覧する方法、または見守りメンバーとして招待する方法で共有できます。詳しくは、機種ごとのアプリの仕様をご確認ください。' },
  { q: '双子でも同じ機種で大丈夫？', a: '同じ機種を2台購入すれば、アプリ内で別の端末として識別されます。ごきょうだいの端末を1つのアプリでまとめて確認できるため、通知の設定も個別に管理できます。' },
  { q: 'おじいちゃん・おばあちゃんも位置を確認できますか？', a: '見守る人を追加できる機種であれば可能です。祖父母のスマートフォンにアプリをインストールして招待すれば、離れて暮らしているご家族もリアルタイムで見守ることができます。' },
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

export default function FamilyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPS 兄弟・2台目におすすめ", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '目的別', href: '/purpose/' }, { name: '兄弟・2台目' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">兄弟・家族</span>
            <span className="tag-pill bg-blue text-white">2台目対応</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPSの選び方：兄弟・2台目・家族プラン
          </h1>
          <p className="text-g600 text-lg">2台目が無料の機種と見守り人数の多い機種の比較</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">兄弟で使う場合の選び方</h2>
          <p className="text-g600 mb-6">
            ごきょうだいに同時にGPSを持たせる場合のポイントは、「2台目の月額料金」と「見守りアプリが複数の端末に対応しているか」の2点です。
            さらに、共働きや祖父母との同居などで見守る人数が多いご家庭では、招待できる見守りメンバーの数もご確認ください。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">2台目が割安になる機種</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・<Link href="/review/anshin-watcher/" className="text-blue hover:underline">あんしんウォッチャー</Link>：2台目の月額料金が無料</li>
                <li>・本体代のみで追加でき、兄弟で利用する際の毎月の費用を抑えやすい</li>
              </ul>
            </div>
            <div className="bg-blue-light rounded-xl p-6">
              <h3 className="font-bold text-blue mb-3">見守り人数が多い機種</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・<Link href="/review/bot-talk/" className="text-blue hover:underline">BoTトーク</Link>：見守り人数に制限なし</li>
                <li>・<Link href="/review/mamosearch/" className="text-blue hover:underline">まもサーチ</Link>：最大25人まで追加可能</li>
                <li>・祖父母や親戚とも位置情報を共有しやすい</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">兄弟で利用する場合の費用比較</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-sm text-g600 mb-4">
              ごきょうだい2人で1年間利用した場合の、毎月の費用の考え方を整理しました。具体的な金額は、各公式サイトにて最新情報をご確認ください。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-blue-light">
                    <th className="p-3 text-left">機種</th>
                    <th className="p-3 text-left">2台目の扱い</th>
                    <th className="p-3 text-left">特徴</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-g100">
                    <td className="p-3 font-semibold"><Link href="/review/anshin-watcher/" className="text-blue hover:underline">あんしんウォッチャー</Link></td>
                    <td className="p-3 text-g600">2台目月額無料</td>
                    <td className="p-3 text-g600">兄弟で利用する際の費用を最小限に抑えやすい</td>
                  </tr>
                  <tr className="border-b border-g100">
                    <td className="p-3 font-semibold"><Link href="/review/mitene/" className="text-blue hover:underline">みてねみまもりGPS</Link></td>
                    <td className="p-3 text-g600">2台目も通常料金</td>
                    <td className="p-3 text-g600">月額528円×2台。見守る人は無料で追加可能</td>
                  </tr>
                  <tr className="border-b border-g100">
                    <td className="p-3 font-semibold"><Link href="/review/bot-talk/" className="text-blue hover:underline">BoTトーク</Link></td>
                    <td className="p-3 text-g600">2台目も通常料金</td>
                    <td className="p-3 text-g600">見守り人数に制限がない点が強み</td>
                  </tr>
                  <tr className="border-b border-g100">
                    <td className="p-3 font-semibold"><Link href="/review/mamosearch/" className="text-blue hover:underline">まもサーチ</Link></td>
                    <td className="p-3 text-g600">2台目も通常料金</td>
                    <td className="p-3 text-g600">最大25人まで見守りメンバーに追加可能</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="section-title">家族プランを活用する際のポイント</h2>
          <div className="space-y-4 mb-8">
            {[
              { icon: '👨‍👩‍👧‍👦', title: '共働きのご家庭はご両親とも招待', desc: '父親・母親それぞれのスマートフォンで位置情報を確認できるよう、お二人とも見守る人に追加することをおすすめします。通知も両方に届きます。' },
              { icon: '👴', title: '祖父母との共有', desc: '離れて暮らす祖父母も招待することで、お孫さんの帰宅や通学の様子を見守ることができます。' },
              { icon: '🏫', title: '兄弟で通学時間が異なる場合', desc: '別々の学校に通うごきょうだいには、それぞれに端末を持たせて個別に見守るほうが分かりやすくなります。' },
              { icon: '📲', title: '通知の調整', desc: 'ご家族全員に通知が届くと煩わしい場合は、通知を受け取るメンバーを絞り込める機種側の設定をご活用ください。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-2xl">{item.icon}</p>
                <div>
                  <h3 className="font-bold text-g800">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">ごきょうだいそろっての見守り</h2>
            <p className="text-g600 mb-6 text-sm">2台目の割引や、多人数での見守りに対応した機種を比較し、ご家族に合ったものをお選びください。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/anshin-watcher/" className="btn-primary">あんしんウォッチャーを詳しく見る</Link>
              <Link href="/compare/price/" className="btn-accent">料金比較ページへ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
