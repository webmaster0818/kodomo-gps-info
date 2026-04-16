import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS よくある質問 | 30問FAQ',
  description:
    '子供GPS端末に関するよくある質問30問を6カテゴリ（基本・機種選び・使い方・学校・料金・トラブル）で回答。GPS端末の疑問をすべて解決します。',
};

const categories = [
  {
    name: '基本について',
    faqs: [
      { q: '子供用GPSとは何ですか？', a: 'お子さまの現在位置をスマートフォンのアプリで確認できる小型端末です。通学や外遊びの際にランドセルやポケットに入れておくことで、保護者が遠隔から位置を見守れます。' },
      { q: 'GPSの仕組みを教えてください。', a: '人工衛星（GPS・GLONASS・みちびき等）からの電波を受信して現在位置を計算します。Wi-Fiや携帯基地局の情報も組み合わせることで、より高精度な位置特定が可能です。' },
      { q: '何歳から使えますか？', a: '年齢制限はありません。最も多いのは小学校入学（6〜7歳）のタイミングですが、幼稚園年長から使い始める家庭もあります。' },
      { q: 'GPSと防犯ブザーの違いは？', a: '防犯ブザーは音を出して周囲に助けを求めるもの、GPSは保護者に位置を知らせるものです。役割が異なるため、両方持たせるのが最も安全です。' },
      { q: 'キッズケータイとの違いは？', a: 'GPS端末は位置確認に特化し、月額が安く（528円〜）バッテリーが長持ちです。キッズケータイは通話機能がありますが、月額が高く（550円〜+通話料）バッテリーが短いです。' },
    ],
  },
  {
    name: '機種選びについて',
    faqs: [
      { q: '一番人気のGPS端末はどれ？', a: 'みてねみまもりGPS（MIXI）が利用者数No.1です。月額528円〜の手頃な料金、最大2ヶ月のバッテリー、使いやすいアプリが人気の理由です。' },
      { q: 'トーク機能付きのおすすめは？', a: 'BoTトーク（ビーサイズ）とみてねみまもりGPS（トークPlusプラン）がおすすめです。どちらも月額748円で音声・テキストメッセージのやりとりができます。' },
      { q: 'バッテリーが長持ちする機種は？', a: 'みてねみまもりGPSが最大約2ヶ月で最長です。次いであんしんウォッチャー（約1.5ヶ月）、BoTトーク・コネコ（約1ヶ月）が続きます。' },
      { q: '精度が最も高い機種は？', a: 'GPS+GLONASS+みちびき+Wi-Fiの4つに対応した機種が最も高精度です。みてね・BoTトーク・ソラノメ・コネコ等が該当します。' },
      { q: '兄弟2人に持たせるのにおすすめは？', a: 'あんしんウォッチャーがおすすめです。2台目の月額が無料になるキャンペーンがあり、兄弟で持たせた場合の年間コストが最も安くなります。' },
    ],
  },
  {
    name: '使い方について',
    faqs: [
      { q: '設定は難しいですか？', a: 'いいえ、ほとんどの機種は5〜10分で設定完了です。アプリをダウンロードし、QRコードを読み取って端末を登録するだけの簡単ステップです。' },
      { q: 'エリア通知とは？', a: '学校や自宅など設定した場所への出入りを自動通知する機能です。「学校に到着しました」「自宅エリアに入りました」などの通知が保護者のスマホに届きます。' },
      { q: '何人で見守りできますか？', a: '機種により異なりますが、2〜9人の家族で見守りが可能です。おじいちゃん・おばあちゃんなど離れた家族も参加できます。見守り人の追加は無料のケースがほとんどです。' },
      { q: '位置情報の更新間隔は変更できる？', a: 'はい、ほとんどの機種でアプリから変更可能です。1.5分〜15分程度の間で設定でき、短くすると精度が上がりますがバッテリー消費が増えます。' },
      { q: 'SOS機能の使い方は？', a: '端末のボタンを3秒間長押しするとSOS通知が発信されます。保護者のスマホにプッシュ通知が届き、同時に位置情報も送信されます。事前にお子さまと練習しておくのがおすすめです。' },
    ],
  },
  {
    name: '学校について',
    faqs: [
      { q: '学校に持って行けますか？', a: 'ほとんどの小学校でGPS端末の持ち込みは許可されています。通話機能のない端末は「携帯電話」に該当しないため、規制の対象外となるケースが多いです。' },
      { q: '持ち込みに申請は必要？', a: '学校により異なります。念のため担任の先生に事前確認し、必要であれば持ち込み許可申請書を提出しましょう。' },
      { q: 'ランドセルのどこに入れる？', a: '前面の小ポケットや内側のファスナーポケットが一般的です。専用ケースやストラップで固定すると落下を防げます。' },
      { q: '授業中に音が鳴ることは？', a: 'GPS端末は基本的に音が出ません。トーク機能付きの機種でも通知音をオフにできるので、授業の妨げにはなりません。' },
      { q: '先生に反対されたらどうする？', a: '「通話機能なし」「授業に影響しない」「防犯目的」の3点を説明しましょう。ランドセルに入れたまま使用することを伝えれば、多くの場合理解が得られます。' },
    ],
  },
  {
    name: '料金について',
    faqs: [
      { q: '最も安い月額はいくら？', a: 'みてねみまもりGPSとBoTトークの基本プランが月額528円（税込）で最安クラスです。位置確認のみの基本的な機能が利用できます。' },
      { q: '初期費用はかかる？', a: '多くの機種は本体購入費のみで初期費用はかかりません。ソラノメは初期事務手数料3,300円が別途必要です。' },
      { q: '解約金はかかる？', a: 'ほとんどのGPS端末は契約期間の縛りや解約金がありません。いつでも解約可能なので、合わないと思ったら気軽にやめられます。' },
      { q: '2年間の総コストはどれくらい？', a: '最安のみてねみまもりGPS（基本プラン）で約17,952円（本体5,280円＋月額528円×24ヶ月）。腕時計型の高機能機種では5万円以上になることもあります。' },
      { q: 'お得に購入する方法は？', a: 'Amazonや楽天のセール時期に購入すると本体価格が割引になることがあります。また、あんしんウォッチャーの2台目無料キャンペーンなど、各社のキャンペーンもチェックしましょう。' },
    ],
  },
  {
    name: 'トラブルについて',
    faqs: [
      { q: '位置がずれている場合は？', a: '屋内やビル街では衛星電波が届きにくく、誤差が大きくなることがあります。Wi-Fi測位対応機種なら精度が改善します。ファームウェアの更新も試してみてください。' },
      { q: '充電がすぐなくなる場合は？', a: '更新間隔を長め（5分〜15分）に設定しましょう。トーク機能をオフにする、Wi-Fi測位を活用するなどの対策でバッテリー消費を抑えられます。' },
      { q: 'GPS端末を紛失したら？', a: 'アプリから最後の位置情報を確認できます。見つからない場合はサービスに連絡して端末を停止し、新しい端末を購入して同じアカウントで再設定できます。' },
      { q: 'アプリに通知が来ない場合は？', a: 'スマホの通知設定でGPSアプリの通知が許可されているか確認してください。また、省電力モードが有効になっていると通知が遅れることがあります。' },
      { q: '端末が壊れた場合の保証は？', a: '多くの機種は購入後1年間のメーカー保証がついています。水没や落下による故障は保証対象外の場合が多いので、防水ケースや落下防止ストラップの活用をおすすめします。' },
    ],
  },
];

const allFaqs = categories.flatMap((cat) => cat.faqs);

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'よくある質問' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">FAQ</span>
            <span className="tag-pill bg-orange text-white">30問</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS よくある質問
          </h1>
          <p className="text-g600 text-lg">6カテゴリ・30問のFAQでGPSの疑問をすべて解決</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          {/* カテゴリ目次 */}
          <div className="card-hover p-6 mb-8">
            <h2 className="font-bold text-g800 mb-3">カテゴリ一覧</h2>
            <div className="grid sm:grid-cols-3 gap-2">
              {categories.map((cat, i) => (
                <a key={i} href={`#cat-${i}`} className="text-blue text-sm hover:underline">
                  {cat.name}（{cat.faqs.length}問）
                </a>
              ))}
            </div>
          </div>

          {/* カテゴリ別FAQ */}
          {categories.map((cat, catIndex) => (
            <div key={catIndex} id={`cat-${catIndex}`} className="mb-10">
              <h2 className="section-title">{cat.name}</h2>
              {cat.faqs.map((faq, faqIndex) => (
                <details key={faqIndex} className="faq-item">
                  <summary>{faq.q}</summary>
                  <div className="faq-answer">{faq.a}</div>
                </details>
              ))}
            </div>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">もっと詳しく知りたい方へ</h2>
            <p className="text-g600 mb-6 text-sm">選び方ガイドや各機種のレビューもご覧ください。</p>
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
