import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS キャンペーン・クーポン比較 | 2026年最新のお得情報',
  description:
    '子供用GPSで実施されることの多いキャンペーン・クーポンの傾向を整理します。本体無料・月額割引・乗り換え特典など、お得な導入方法の見方と注意点を解説します。',
};

const faqData = [
  { q: '子供GPSのキャンペーンが多い時期はいつですか？', a: '入学・進級シーズンの1〜4月、夏休み前の6〜7月、新生活関連の9〜10月などに、本体割引やキャンペーンが実施される傾向があります。具体的な実施状況は、公式サイトにてご確認ください。' },
  { q: '本体無料キャンペーンに注意点はありますか？', a: '本体無料の場合、最低利用期間や月額プランの指定があるケースがあります。解約時に残額の請求が発生しないか、契約条件を事前にご確認ください。' },
  { q: 'クーポンコードはどこで手に入りますか？', a: '公式サイトのキャンペーンページ、公式LINEやメルマガ、ECモールのクーポンページなどで配布されるのが一般的です。新規会員登録時に配布されるケースも多いため、登録のタイミングを活用することをおすすめします。' },
  { q: '乗り換えキャンペーンはありますか？', a: '他社GPSからの乗り換え特典が時期によって用意されていることがあります。旧端末の写真提出や契約書の提示により割引される形式が多く見られます。詳細は公式サイトにてご確認ください。' },
  { q: 'Amazonや楽天のセールで安く購入できますか？', a: 'Amazonプライムデーや楽天スーパーセールでは、本体価格が割引されることがあります。ただし、月額料金の割引は公式サイト限定のケースが多いため、総額で比較することをおすすめします。' },
  { q: 'キャンペーン併用は可能ですか？', a: 'キャンペーンは、基本的に併用できない場合がほとんどです。本体割引と月額割引のいずれかを選ぶ形となるため、利用予定期間をもとに総額が安くなる方を選ぶことをおすすめします。' },
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

export default function CampaignPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPS キャンペーン・クーポン比較", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '比較', href: '/compare/' }, { name: 'キャンペーン・クーポン' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">キャンペーン</span>
            <span className="tag-pill bg-blue text-white">お得に導入</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS キャンペーン・クーポン比較
          </h1>
          <p className="text-g600 text-lg">お得な導入方法の見方と注意点を整理しています。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">キャンペーンを活用するメリット</h2>
          <p className="text-g600 mb-6">
            子供GPSには本体購入費と月額料金を合算したコストがかかるため、キャンペーンの活用によって初期費用を抑えられるかが重要です。
            最新のキャンペーン情報は時期によって変動するため、購入直前に各社の公式サイトで最新状況を確認することをおすすめします。
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">💰</p>
              <h3 className="font-bold text-g800 mb-1">初期費用を抑えられる</h3>
              <p className="text-sm text-g600">本体価格の割引や無料キャンペーンにより、5,000〜10,000円ほど節約できる場合があります。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">🎁</p>
              <h3 className="font-bold text-g800 mb-1">月額割引・無料期間</h3>
              <p className="text-sm text-g600">初月無料や数カ月間の割引など、利用開始時の負担を抑える施策が用意されることがあります。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">🔄</p>
              <h3 className="font-bold text-g800 mb-1">乗り換え特典</h3>
              <p className="text-sm text-g600">他社から乗り換える場合、旧端末の下取りや特別割引が適用されるケースがあります。</p>
            </div>
          </div>

          <h2 className="section-title">よく見られるキャンペーンパターン</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: '本体割引・本体無料', desc: '本体価格を数千円〜全額割り引くパターンです。一定期間の継続利用が条件となることが多く見られます。' },
              { title: '初月無料・月額割引', desc: '最初の1〜3カ月の月額料金を、無料または半額にする施策です。短期間試したいご家庭に適しています。' },
              { title: '兄弟・2台目割引', desc: 'あんしんウォッチャーのように、2台目の月額料金が無料になるなどの常設特典がある機種もあります。' },
              { title: '友人紹介・家族紹介', desc: '紹介コードの入力により、双方に特典が付与されるケースです。公式サイトやSNSで案内されます。' },
              { title: 'シーズナルセール', desc: '入学シーズンや夏休み前に、本体が値下げされることが多く見られます。年間の購入タイミングを把握しておくことをおすすめします。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">主要機種のキャンペーン窓口</h2>
          <p className="text-g600 mb-4 text-sm">
            具体的な金額や適用条件は、時期により変動します。以下は、キャンペーン情報を確認できる各機種の案内ページの目安です。必ず最新の内容を公式サイトにてご確認ください。
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { name: 'みてねみまもりGPS', desc: '公式サイトで定期的にキャンペーンを実施しています。本体価格や月額割引の詳細は、公式サイトにてご確認ください。', href: '/review/mitene/' },
              { name: 'BoTトーク', desc: 'トーク機能付きプランの割引施策が発表されることがあります。公式サイトにてご確認ください。', href: '/review/bot-talk/' },
              { name: 'あんしんウォッチャー', desc: '2台目の月額料金無料が常設されています。期間限定の本体割引情報は、公式サイトにてご確認ください。', href: '/review/anshin-watcher/' },
              { name: 'まもサーチ', desc: '公式サイトで季節限定セールが実施される場合があります。詳細は公式サイトにてご確認ください。', href: '/review/mamosearch/' },
              { name: 'SayuU', desc: '交通安全に特化したモデルです。キャンペーン情報は公式サイトにてご確認ください。', href: '/review/sayuu/' },
              { name: 'soranome（販売終了）', desc: '2026年4月1日付の公式告知で現行端末の販売が終了しています（2026年10月17日 公式確認）。', href: '/review/soranome/' },
            ].map((item) => (
              <div key={item.name} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">
                  <Link href={item.href} className="text-blue hover:underline">{item.name}</Link>
                </h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">キャンペーン利用時の注意点</h2>
          <div className="bg-orange-light rounded-xl p-6 mb-8">
            <ul className="space-y-2 text-sm text-g700">
              <li>・最低利用期間が条件になっている場合、途中解約で違約金が発生することがあります。</li>
              <li>・「本体無料」の条件として、長期の契約期間が設定されていないかをご確認ください。</li>
              <li>・クーポンコードは利用期限・対象プランが限定されている場合が多くあります。</li>
              <li>・ECモール経由と公式サイト経由で適用されるキャンペーンが異なるケースがあります。</li>
              <li>・キャンペーンは予告なく終了・変更されるため、必ず購入直前に最新情報をご確認ください。</li>
            </ul>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">子供GPSをお得に導入するための情報</h2>
            <p className="text-g600 mb-6 text-sm">購入前にキャンペーンの傾向を把握し、適切なタイミングで導入することをおすすめします。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/price/" className="btn-primary">料金比較ページ</Link>
              <Link href="/purpose/cheap/" className="btn-accent">安い順ランキング</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
