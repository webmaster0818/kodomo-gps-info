import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS よくある質問 | 30問FAQ',
  description:
    '子供用GPS端末に関するよくある質問30問に、6つのカテゴリ（基本・機種選び・使い方・学校・料金・トラブル）に分けて回答します。',
};

const categories = [
  {
    name: '基本について',
    faqs: [
      { q: '子供用GPSとは何ですか？', a: 'お子さまの現在位置をスマートフォンのアプリで確認できる小型端末です。通学や外遊びの際にランドセルやポケットに入れておくことで、保護者が離れた場所から位置を見守ることができます。' },
      { q: 'GPSの仕組みを教えてください。', a: '人工衛星（GPS・GLONASS・みちびき等）からの電波を受信し、現在位置を計算します。Wi-Fiや携帯基地局の情報も組み合わせることで、より高精度な位置の特定が可能です。' },
      { q: '何歳から使えますか？', a: '年齢制限はありません。最も多いのは小学校入学（6〜7歳）のタイミングですが、幼稚園年長から使い始めるご家庭もあります。' },
      { q: 'GPSと防犯ブザーの違いは何ですか？', a: '防犯ブザーは音を出して周囲に助けを求めるもの、GPSは保護者に位置を知らせるものです。役割が異なるため、両方を持たせることをおすすめします。' },
      { q: 'キッズケータイとの違いは何ですか？', a: 'GPS端末は位置確認に特化しており、月額料金が安く（528円〜）、バッテリーが長持ちします。キッズケータイは通話機能を備えていますが、月額料金が高く（550円〜+通話料）、バッテリーの持ちが短い傾向があります。' },
    ],
  },
  {
    name: '機種選びについて',
    faqs: [
      { q: '最も人気のGPS端末はどれですか？', a: 'みてねみまもりGPS（MIXI）が利用者数No.1です。月額528円〜の手頃な料金、最大2カ月のバッテリー、使いやすいアプリが人気の理由です。' },
      { q: 'トーク機能付きのおすすめ機種はどれですか？', a: 'BoTトーク（ビーサイズ）とみてねみまもりGPS（トークPlusプラン）をおすすめします。どちらも月額748円で、音声・テキストメッセージのやり取りができます。' },
      { q: 'バッテリーが長持ちする機種はどれですか？', a: 'みてねみまもりGPSが最大約2カ月で最長です。次いで、あんしんウォッチャー（約1.5カ月）、BoTトーク・コネコ（約1カ月）が続きます。' },
      { q: '精度が最も高い機種はどれですか？', a: '複数の測位衛星（GNSS）に Wi-Fi・携帯基地局の電波を組み合わせて測位する機種は、建物の多い場所や屋内でも位置を補いやすい構成です。たとえば、みてねみまもりGPSは GPS・みちびき・BeiDou・Galileo・GLONASS、BoTトークは GPS・みちびき・BeiDou・Galileo・SBAS に Wi-Fi・基地局を組み合わせています（各社公式・2026年10月20日確認）。実際の精度は環境によって変わるため、目安としてお考えください。' },
      { q: '兄弟2人に持たせる場合のおすすめ機種はどれですか？', a: 'あんしんウォッチャーをおすすめします。2台目の月額料金が無料になるキャンペーンがあり、兄弟で持たせた場合の年間コストが最も安くなります。' },
    ],
  },
  {
    name: '使い方について',
    faqs: [
      { q: '設定は難しいですか？', a: 'いいえ、ほとんどの機種は5〜10分で設定が完了します。アプリをダウンロードし、QRコードを読み取って端末を登録するだけの簡単な手順です。' },
      { q: 'エリア通知とは何ですか？', a: '学校や自宅など、設定した場所への出入りを自動で通知する機能です。「学校に到着しました」「自宅エリアに入りました」などの通知が、保護者のスマートフォンに届きます。' },
      { q: '何人で見守りできますか？', a: '機種により異なりますが、2〜9人の家族で見守ることが可能です。祖父母など離れて暮らすご家族も参加できます。見守る人の追加は、無料のケースがほとんどです。' },
      { q: '位置情報の更新間隔は変更できますか？', a: 'はい、ほとんどの機種でアプリから変更できます。1.5分〜15分程度の範囲で設定でき、間隔を短くすると精度が上がる一方で、バッテリーの消費が増えます。' },
      { q: 'SOS機能はどのように使いますか？', a: '端末のボタンを3秒間長押しすると、SOS通知が発信されます。保護者のスマートフォンにプッシュ通知が届き、同時に位置情報も送信されます。事前にお子さまと練習しておくことをおすすめします。' },
    ],
  },
  {
    name: '学校について',
    faqs: [
      { q: '学校に持って行けますか？', a: 'ほとんどの小学校で、GPS端末の持ち込みは許可されています。通話機能のない端末は「携帯電話」に該当しないため、規制の対象外となるケースが多く見られます。' },
      { q: '持ち込みに申請は必要ですか？', a: '学校により異なります。念のため担任の先生に事前に確認し、必要であれば持ち込み許可申請書を提出してください。' },
      { q: 'ランドセルのどこに入れればよいですか？', a: '前面の小ポケットや、内側のファスナーポケットが一般的です。専用ケースやストラップで固定すると、落下を防ぐことができます。' },
      { q: '授業中に音が鳴ることはありますか？', a: 'GPS端末は、基本的に音が出ません。トーク機能付きの機種でも通知音をオフにできるため、授業の妨げにはなりません。' },
      { q: '先生に反対された場合はどうすればよいですか？', a: '「通話機能がない」「授業に影響しない」「防犯目的である」の3点を説明することをおすすめします。ランドセルに入れたまま使用することを伝えれば、多くの場合は理解が得られます。' },
    ],
  },
  {
    name: '料金について',
    faqs: [
      { q: '最も安い月額料金はいくらですか？', a: 'みてねみまもりGPSとBoTトークの基本プランが月額528円（税込）で、最安クラスです。位置確認のみの基本的な機能を利用できます。' },
      { q: '初期費用はかかりますか？', a: '多くの機種では本体購入費のみで、初期費用はかかりません。機種によっては事務手数料がかかるため、購入前に公式サイトでご確認ください。' },
      { q: '解約金はかかりますか？', a: 'ほとんどのGPS端末には、契約期間の縛りや解約金がありません。いつでも解約できるため、ご家庭に合わない場合も負担なく利用を終了できます。' },
      { q: '2年間の総コストはどのくらいですか？', a: '最安のみてねみまもりGPS（基本プラン）で約17,952円（本体5,280円＋月額528円×24カ月）です。腕時計型の高機能機種では、5万円以上になることもあります。' },
      { q: 'お得に購入する方法はありますか？', a: 'Amazonや楽天のセール時期に購入すると、本体価格が割引になることがあります。また、あんしんウォッチャーの2台目無料キャンペーンなど、各社のキャンペーンもあわせてご確認ください。' },
    ],
  },
  {
    name: 'トラブルについて',
    faqs: [
      { q: '位置がずれている場合はどうすればよいですか？', a: '屋内やビル街では衛星の電波が届きにくく、誤差が大きくなることがあります。Wi-Fi測位に対応した機種であれば、精度が改善します。あわせて、ファームウェアの更新もお試しください。' },
      { q: '充電がすぐなくなる場合はどうすればよいですか？', a: '更新間隔を長め（5分〜15分）に設定することをおすすめします。トーク機能をオフにする、Wi-Fi測位を活用するなどの対策により、バッテリーの消費を抑えられます。' },
      { q: 'GPS端末を紛失した場合はどうすればよいですか？', a: 'アプリから、最後の位置情報を確認できます。見つからない場合はサービス提供元に連絡して端末を停止し、新しい端末を購入したうえで、同じアカウントで再設定できます。' },
      { q: 'アプリに通知が届かない場合はどうすればよいですか？', a: 'スマートフォンの通知設定で、GPSアプリの通知が許可されているかをご確認ください。また、省電力モードが有効になっていると、通知が遅れることがあります。' },
      { q: '端末が壊れた場合の保証はありますか？', a: '多くの機種には、購入後1年間のメーカー保証が付いています。水没や落下による故障は保証の対象外となる場合が多いため、防水ケースや落下防止ストラップの活用をおすすめします。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPS よくある質問", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'よくある質問' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">FAQ</span>
            <span className="tag-pill bg-orange text-white">30問</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS よくある質問
          </h1>
          <p className="text-g600 text-lg">GPS端末に関する疑問に、6カテゴリ・30問のFAQでお答えします。</p>
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

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">より詳しい情報をお求めの方へ</h2>
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
