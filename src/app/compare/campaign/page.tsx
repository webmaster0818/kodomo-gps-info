import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS キャンペーン・クーポン比較 | 2026年最新のお得情報',
  description:
    '子供用GPSで実施されがちなキャンペーン・クーポンの傾向を整理。本体無料・月額割引・乗り換え特典など、お得な導入方法の見方と注意点を解説します。',
};

const faqData = [
  { q: '子供GPSのキャンペーンはいつ多い？', a: '入学・進級シーズンの1〜4月、夏休み前の6〜7月、新生活関連の9〜10月などに本体割引やキャンペーンが実施される傾向があります。具体的な実施状況は公式サイトで要確認です。' },
  { q: '本体無料キャンペーンには落とし穴がありますか？', a: '本体無料の場合、最低利用期間や月額プランの指定があるケースがあります。解約時に残額請求が発生しないか、契約条件を事前に確認しましょう。' },
  { q: 'クーポンコードはどこで手に入りますか？', a: '公式サイトのキャンペーンページ、公式LINEやメルマガ、ECモールのクーポンページなどで配布されるのが一般的です。新規会員登録時に配布されるケースも多いため、登録のタイミングを活用しましょう。' },
  { q: '乗り換えキャンペーンはありますか？', a: '他社GPSからの乗り換え特典が時期によって用意されていることがあります。旧端末の写真提出や契約書の提示で割引される形式が多く、詳細は公式サイトで確認してください。' },
  { q: 'Amazonや楽天のセールで安く買える？', a: 'Amazonプライムデーや楽天スーパーセールでは本体価格が割引されることがあります。ただし月額料金の割引は公式サイト限定のケースが多いため、総額で比較するのがおすすめです。' },
  { q: 'キャンペーン併用は可能ですか？', a: '基本的にキャンペーンは併用不可の場合がほとんどです。本体割引か月額割引のどちらかを選ぶ形になるため、利用予定期間から総額が安くなる方を選びましょう。' },
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
      <Breadcrumb items={[{ name: '比較', href: '/' }, { name: 'キャンペーン・クーポン' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">キャンペーン</span>
            <span className="tag-pill bg-blue text-white">お得に導入</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS キャンペーン・クーポン比較
          </h1>
          <p className="text-g600 text-lg">お得な導入方法の見方と注意ポイントを整理</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">キャンペーンを活用するメリット</h2>
          <p className="text-g600 mb-6">
            子供GPSは本体購入費＋月額料金の合算コストがかかるため、キャンペーン活用で初期費用を抑えられるかが重要です。
            最新のキャンペーン情報は時期によって変動するため、購入直前に各社の公式サイトで最新状況を確認することをおすすめします。
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">💰</p>
              <h3 className="font-bold text-g800 mb-1">初期費用を抑えられる</h3>
              <p className="text-sm text-g600">本体価格の割引や無料キャンペーンで5,000〜10,000円ほど節約できる場合も。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">🎁</p>
              <h3 className="font-bold text-g800 mb-1">月額割引・無料期間</h3>
              <p className="text-sm text-g600">初月無料や数ヶ月割引など、使い始めに優しい施策が用意されることがある。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">🔄</p>
              <h3 className="font-bold text-g800 mb-1">乗り換え特典</h3>
              <p className="text-sm text-g600">他社から移る場合、旧端末下取りや特別割引が適用されるケースあり。</p>
            </div>
          </div>

          <h2 className="section-title">よく見られるキャンペーンパターン</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: '本体割引・本体無料', desc: '本体価格を数千円〜全額割り引くパターン。一定期間の継続利用が条件になることが多い。' },
              { title: '初月無料・月額割引', desc: '最初の1〜3ヶ月の月額料金を無料または半額にする施策。短期でお試ししたい家庭に有効。' },
              { title: '兄弟・2台目割引', desc: 'あんしんウォッチャーのように2台目月額無料などの常設特典がある機種も存在。' },
              { title: '友人紹介・家族紹介', desc: '紹介コード入力で双方に特典が付与されるケース。公式サイトやSNSで案内されます。' },
              { title: 'シーズナルセール', desc: '入学シーズンや夏休み前に本体が値下げされることが多い。年間の購入タイミングを逃さない。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">主要機種のキャンペーン窓口</h2>
          <p className="text-g600 mb-4 text-sm">
            具体的な金額や適用条件は時期により変動します。以下はキャンペーン情報をチェックできる各機種の案内ページの目安です。必ず最新の内容を公式サイトでご確認ください。
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { name: 'みてねみまもりGPS', desc: '公式サイトで定期的にキャンペーン実施。本体価格や月額割引の詳細は公式で要確認。', href: '/review/mitene/' },
              { name: 'BoTトーク', desc: 'トーク機能付きプランのお得施策が発表されることあり。公式サイトで要確認。', href: '/review/bot-talk/' },
              { name: 'あんしんウォッチャー', desc: '2台目月額無料が常設。期間限定の本体割引情報は公式で要確認。', href: '/review/anshin-watcher/' },
              { name: 'まもサーチ', desc: '公式サイトで季節限定セール実施の可能性あり。詳細は公式サイトで要確認。', href: '/review/mamosearch/' },
              { name: 'SayuU', desc: '交通安全特化モデル。キャンペーン情報は公式サイトで要確認。', href: '/review/sayuu/' },
              { name: 'soranome', desc: 'キャンペーン情報は公式サイトで要確認。', href: '/review/soranome/' },
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
              <li>・「本体無料」の裏側に長期契約縛りが設定されていないか確認しましょう。</li>
              <li>・クーポンコードは利用期限・対象プランが限定されていることが多いです。</li>
              <li>・ECモール経由と公式サイト経由で適用されるキャンペーンが異なるケースがあります。</li>
              <li>・キャンペーンは予告なく終了・変更されるため、必ず購入直前に最新情報を確認してください。</li>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">お得に子供GPSを始めよう</h2>
            <p className="text-g600 mb-6 text-sm">購入前にキャンペーンの傾向を知って、最適なタイミングで導入しましょう。</p>
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
