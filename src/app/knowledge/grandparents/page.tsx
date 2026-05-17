import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'おじいちゃん・おばあちゃんとGPS位置情報を共有する方法',
  description:
    '祖父母とGPS位置情報を共有する方法を解説。アプリの共有設定、機種別の手順、共有時の注意点、祖父母が使いやすいGPS端末、離れて暮らす場合の活用法を紹介します。',
  keywords: ['おじいちゃん', 'おばあちゃん', 'GPS', '共有', '祖父母', '位置情報', '見守り'],
  openGraph: {
    title: 'おじいちゃん・おばあちゃんとGPS位置情報を共有する方法',
    description: '祖父母とGPSの位置情報を共有する方法。アプリ設定や機種別手順を解説。',
  },
};

const faqData = [
  { q: '祖父母のスマホが古い機種でも使えますか？', a: 'ほとんどのGPS見守りアプリはiOS 14以降、Android 8以降に対応しています。2019年以降に購入したスマホであれば問題なく使えるケースが多いです。対応していない場合は、アプリなしでWeb版で確認できるサービスもあります。' },
  { q: '祖父母にはどの情報まで共有すべきですか？', a: 'リアルタイム位置情報と到着・出発通知の共有が一般的です。移動履歴まで共有するかは家族で相談しましょう。祖父母の生活スタイルに合わせ、通知が多すぎて負担にならない設定がおすすめです。' },
  { q: '共有アカウントの数に制限はありますか？', a: '機種によって異なります。みてねみまもりGPSは最大10人、あんしんウォッチャーは最大9人まで共有可能です。祖父母2人を追加しても、ほとんどの機種で問題ありません。' },
  { q: '祖父母が通知を見逃さないようにする方法は？', a: 'スマホの通知設定で、GPS見守りアプリの通知を「常に表示」に設定しましょう。また、通知音を他のアプリと区別できるように変更するのも効果的です。LINEで通知を受け取れるサービスもあります。' },
  { q: '離れて暮らす祖父母でも共有できますか？', a: 'はい。インターネットに接続できるスマホがあれば、距離に関係なくリアルタイムで位置情報を確認できます。帰省時に子供の見守りを祖父母に任せる場合にも便利です。' },
  { q: '祖父母がアプリの操作に不慣れな場合は？', a: '初期設定は一緒に行い、よく使う操作（位置確認ボタン）をホーム画面に配置しましょう。操作手順を大きな文字で印刷して渡すのも効果的です。LINEで通知を受け取る設定にすれば、LINEを開くだけで確認できます。' },
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
  { icon: '📱', title: 'アプリをインストール', desc: '祖父母のスマホに対応アプリをインストール。App StoreまたはGoogle Playからダウンロードします。' },
  { icon: '👤', title: 'アカウント作成・招待', desc: '親のアカウントから「家族を招待」機能で祖父母を追加。メールまたはQRコードで招待できます。' },
  { icon: '🔔', title: '通知設定を最適化', desc: '祖父母に必要な通知のみ有効に。到着通知だけONにし、頻繁な更新通知はOFFにするのがおすすめ。' },
  { icon: '✅', title: '動作確認を一緒に', desc: '実際にお子さまが移動して通知が届くか確認。操作方法を一緒に練習します。' },
];

const deviceCompare = [
  { device: 'みてねみまもりGPS', share: '最大10人', method: 'アプリから招待コード送信', note: 'LINEでの通知にも対応。祖父母にも使いやすい。' },
  { device: 'あんしんウォッチャー', share: '最大9人', method: 'メールアドレスで招待', note: 'au以外のキャリアでも利用可。Web版あり。' },
  { device: 'BoTトーク', share: '最大5人', method: 'アプリ内で家族追加', note: 'トーク機能で祖父母とお子さまが直接やり取り可能。' },
  { device: 'soranome（ソラノメ）', share: '最大4人', method: 'アプリから追加', note: 'シンプルな画面で高齢者にも見やすい。' },
];

const tips = [
  { title: '通知の頻度を適切に', desc: '祖父母のスマホに通知が多すぎると負担に。到着・出発通知のみに絞るのが基本です。' },
  { title: '確認の役割分担を決める', desc: '「普段は親が確認、祖父母宅にいる時は祖父母が確認」など役割を明確に。' },
  { title: '操作マニュアルを用意', desc: '大きな文字で「位置確認の手順」を紙に書いて渡すと、操作に慣れるまで安心。' },
  { title: 'LINEと連携する', desc: 'LINEで通知を受け取る設定にすれば、普段使いのアプリだけで見守りが完結します。' },
];

export default function GrandparentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '祖父母との共有' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">祖父母</span>
            <span className="tag-pill bg-orange text-white">GPS共有</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            おじいちゃん・おばあちゃんとGPS位置情報を共有する方法
          </h1>
          <p className="text-g600 text-lg">祖父母も一緒に見守りに参加して、家族みんなで安心を共有</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">祖父母とGPSを共有するメリット</h2>
          <p className="text-g600 mb-6">
            共働きの場合、下校時間に保護者が家にいないことも多くあります。
            祖父母とGPS位置情報を共有することで、見守りの体制を強化できます。
            特に祖父母宅に帰る場合や、長期休暇中に祖父母に預ける場合に、リアルタイムの位置情報共有が安心につながります。
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
              { icon: '🏠', title: '帰省中の見守り', desc: '祖父母宅周辺にジオフェンスを設定。子供が遊びに出かけても帰宅を確認できます。' },
              { icon: '📞', title: '日常の安心材料', desc: '離れていてもアプリで孫の位置を確認。電話する際の話題にもなります。' },
              { icon: '🚌', title: '祖父母宅への移動確認', desc: '一人でバスや電車で祖父母宅に向かう際、到着まで見守れます。' },
              { icon: '👨‍👩‍👧', title: '三世代の安心共有', desc: '親・祖父母全員が同じアプリで見守ることで、家族全体の安心感が高まります。' },
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">祖父母も一緒に見守り体制をつくろう</h2>
            <p className="text-g600 mb-6 text-sm">家族全員で位置情報を共有し、安心の輪を広げましょう。</p>
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
