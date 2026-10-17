import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'おじいちゃん・おばあちゃんとGPS位置情報を共有する方法',
  description:
    '祖父母とGPSの位置情報を共有する方法を解説します。アプリの共有設定、機種別の手順、共有時の注意点、祖父母が使いやすいGPS端末、離れて暮らす場合の活用法を紹介します。',
  keywords: ['おじいちゃん', 'おばあちゃん', 'GPS', '共有', '祖父母', '位置情報', '見守り'],
  openGraph: {
    images: ['/og.png'],
    title: 'おじいちゃん・おばあちゃんとGPS位置情報を共有する方法',
    description: '祖父母とGPSの位置情報を共有する方法について、アプリの設定や機種別の手順を解説します。',
  },
};

const faqData = [
  { q: '祖父母のスマートフォンが古い機種でも使えますか？', a: 'ほとんどのGPS見守りアプリは、iOS 14以降、Android 8以降に対応しています。2019年以降に購入したスマートフォンであれば、問題なく使える場合が多くあります。対応していない場合でも、アプリを使わずにWeb版で確認できるサービスもあります。' },
  { q: '祖父母にはどの情報まで共有すべきですか？', a: 'リアルタイムの位置情報と、到着・出発通知を共有することが一般的です。移動履歴まで共有するかどうかは、ご家族で相談して決めることをおすすめします。祖父母の生活スタイルに合わせ、通知が多すぎて負担にならないよう設定することが大切です。' },
  { q: '共有アカウントの数に制限はありますか？', a: '機種によって異なります。みてねみまもりGPSは最大10人、あんしんウォッチャーは最大9人まで共有できます。祖父母2人を追加しても、ほとんどの機種で問題ありません。' },
  { q: '祖父母が通知を見逃さないようにする方法は？', a: 'スマートフォンの通知設定で、GPS見守りアプリの通知を「常に表示」に設定してください。また、通知音を他のアプリと区別できるよう変更することも効果的です。LINEで通知を受け取れるサービスもあります。' },
  { q: '離れて暮らす祖父母でも共有できますか？', a: 'はい。インターネットに接続できるスマートフォンがあれば、距離に関係なくリアルタイムで位置情報を確認できます。帰省時にお子さまの見守りを祖父母にお願いする場合にも便利です。' },
  { q: '祖父母がアプリの操作に不慣れな場合は？', a: '初期設定は一緒に行い、よく使う操作（位置確認ボタン）をホーム画面に配置することをおすすめします。操作手順を大きな文字で印刷して渡すことも効果的です。LINEで通知を受け取る設定にすれば、LINEを開くだけで確認できます。' },
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

const shareSteps = [
  { icon: '📱', title: 'アプリのインストール', desc: '祖父母のスマートフォンに対応アプリをインストールします。App StoreまたはGoogle Playからダウンロードしてください。' },
  { icon: '👤', title: 'アカウント作成・招待', desc: '保護者のアカウントから「家族を招待」機能で祖父母を追加します。メールまたはQRコードで招待できます。' },
  { icon: '🔔', title: '通知設定の調整', desc: '祖父母に必要な通知のみを有効にします。到着通知だけをオンにし、頻繁な更新通知はオフにすることをおすすめします。' },
  { icon: '✅', title: '動作の確認', desc: '実際にお子さまが移動して、通知が届くかどうかを確認します。あわせて、操作方法を一緒に練習します。' },
];

const deviceCompare = [
  { device: 'みてねみまもりGPS', share: '最大10人', method: 'アプリから招待コード送信', note: 'LINEでの通知にも対応しており、祖父母にも使いやすい設計です。' },
  { device: 'あんしんウォッチャー', share: '最大9人', method: 'メールアドレスで招待', note: 'au以外のキャリアでも利用でき、Web版もあります。' },
  { device: 'BoTトーク', share: '最大5人', method: 'アプリ内で家族追加', note: 'トーク機能で、祖父母とお子さまが直接やり取りできます。' },
  { device: 'soranome（ソラノメ・販売終了）', share: '最大4人', method: 'アプリから追加', note: 'シンプルな画面で、高齢の方にも見やすい設計です。' },
];

const tips = [
  { title: '通知の頻度を適切に設定する', desc: '祖父母のスマートフォンに通知が多すぎると負担になります。到着・出発通知のみに絞ることが基本です。' },
  { title: '確認の役割分担を決める', desc: '「普段は保護者が確認し、祖父母宅にいるときは祖父母が確認する」など、役割を明確にしておくことをおすすめします。' },
  { title: '操作マニュアルを用意する', desc: '「位置確認の手順」を大きな文字で紙に書いて渡しておくと、操作に慣れるまでの助けになります。' },
  { title: 'LINEと連携する', desc: 'LINEで通知を受け取る設定にすれば、普段使い慣れたアプリだけで見守りが完結します。' },
];

export default function GrandparentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "おじいちゃん・おばあちゃんとGPS位置情報を共有する方法", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '祖父母との共有' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">祖父母</span>
            <span className="tag-pill bg-orange text-white">GPS共有</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            おじいちゃん・おばあちゃんとGPS位置情報を共有する方法
          </h1>
          <p className="text-g600 text-lg">祖父母も参加する、家族全体での見守り体制づくり</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">祖父母とGPSを共有するメリット</h2>
          <p className="text-g600 mb-6">
            共働きのご家庭では、下校時間に保護者が家にいないことも少なくありません。
            祖父母とGPSの位置情報を共有することで、見守りの体制を強化できます。
            特に、お子さまが祖父母宅に帰る場合や、長期休暇中に祖父母に預ける場合に、リアルタイムでの位置情報の共有が安心につながります。
          </p>

          <h2 className="section-title">共有設定の手順</h2>
          <div className="space-y-4 mb-8">
            {shareSteps.map((item, i) => (
              <div key={item.title} className="flex gap-4 items-start card-hover p-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-g800 text-sm">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">機種別の共有人数と方法</h2>
          <div className="bg-blue-light rounded-xl p-6 mb-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-g800">
                  <th className="pb-3 font-bold">GPS端末</th>
                  <th className="pb-3 font-bold">共有人数</th>
                  <th className="pb-3 font-bold">招待方法</th>
                  <th className="pb-3 font-bold">備考</th>
                </tr>
              </thead>
              <tbody className="text-g600">
                {deviceCompare.map((d) => (
                  <tr key={d.device} className="border-t border-g200">
                    <td className="py-2 font-medium text-g800">{d.device}</td>
                    <td className="py-2">{d.share}</td>
                    <td className="py-2">{d.method}</td>
                    <td className="py-2">{d.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">共有時のポイント</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {tips.map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">離れて暮らす祖父母との活用例</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: '🏠', title: '帰省中の見守り', desc: '祖父母宅の周辺にエリア通知（ジオフェンス）を設定しておけば、お子さまが遊びに出かけても帰宅を確認できます。' },
              { icon: '📞', title: '日常の安心材料', desc: '離れていても、アプリでお孫さんの位置を確認できます。電話をする際の話題にもなります。' },
              { icon: '🚌', title: '祖父母宅への移動確認', desc: 'お子さまが一人でバスや電車に乗って祖父母宅に向かう際、到着まで見守ることができます。' },
              { icon: '👨‍👩‍👧', title: '三世代での見守りの共有', desc: '保護者と祖父母の全員が同じアプリで見守ることで、家族全体の安心感が高まります。' },
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

          <p className="text-xs text-g400 mt-4 text-right">最終更新: 2026年5月</p>

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">祖父母と一緒に築く見守り体制</h2>
            <p className="text-g600 mb-6 text-sm">ご家族全員で位置情報を共有し、見守りの体制を整えることをおすすめします。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/setup/" className="btn-primary">初期設定ガイド</Link>
              <Link href="/knowledge/line-connect/" className="btn-accent">LINE連携の使い方</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
