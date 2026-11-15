import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'あんしんウォッチャーLEのキャンペーン・特典｜本体0円の条件・初月無料・紹介コードの扱い【2026年11月】',
  description:
    'あんしんウォッチャーLEの特典を、KDDI公式ページとよくあるご質問の記載にもとづいて整理しています。かるがも貯金プログラムで本体代金が無料になる条件、初月無料の数え方、紹介コードによる無料期間の延長と併用できない点、解約時の注意をまとめています。',
  keywords: ['あんしんウォッチャーLE', 'キャンペーン', 'クーポン', '本体無料', 'かるがも貯金プログラム', '紹介コード'],
};

const LE = 'https://homeiot.kddi.com/anshinwatcher/kids/';
const FAQ = 'https://homeiot.kddi.com/anshinwatcher/kids/faq/';
const CHECKED = '2026年11月15日確認';

const faqData = [
  {
    q: 'あんしんウォッチャーLEの本体無料はいつまでですか？',
    a: `KDDIの公式ページには、本体無料特典の終了日は記載されていません（${CHECKED}）。特典の内容は変更される場合があるため、お申し込みの前に公式ページでご確認ください。`,
  },
  {
    q: 'クーポンコードはありますか？',
    a: '公式ページで案内されているのは、かるがも貯金プログラムの会員特典（本体代金無料）と、既に利用している方からの紹介コード（月額無料期間の1か月延長）です。当サイトでは紹介コードの掲載・配布は行っていません。',
  },
  {
    q: '紹介コードとかるがも貯金プログラムの本体無料は併用できますか？',
    a: 'できません。公式ページのご注意事項に、かるがも貯金プログラム会員特典プランは「紹介コード入力による月額無料期間1か月延長の対象外」と記載されています。',
  },
  {
    q: '紹介コードは申し込みの後から入力できますか？',
    a: 'できません。公式のよくあるご質問で、必ずお申し込み時に入力するよう案内されています。',
  },
  {
    q: 'auのスマホでなくても特典は受けられますか？',
    a: 'あんしんウォッチャーLEは、au以外の携帯電話会社のスマートフォンでもお申し込みいただけると公式ページに記載されています。かるがも貯金プログラムの特典にはau IDが必要です。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function AnshinWatcherLeCampaignPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'あんしんウォッチャーLEのキャンペーン・特典', datePublished: '2026-11-15', dateModified: '2026-11-15', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'あんしんウォッチャーLEのキャンペーン・特典' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">特典</span>
            <span className="tag-pill bg-blue text-white">あんしんウォッチャーLE</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">あんしんウォッチャーLEのキャンペーン・特典まとめ</h1>
          <p className="text-g600 text-lg">KDDI公式ページとよくあるご質問の記載にもとづき、本体0円の条件と初月無料・紹介コードの扱いを整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：かるがも貯金プログラムに登録すると本体代金5,680円が無料になり、月額539円は初月無料です</h2>
            <p className="text-g600">
              あんしんウォッチャーLEの本体代金は通常プランで<strong>5,680円（税込）</strong>ですが、<strong>かるがも貯金プログラム</strong>（会員登録無料）に登録してから対象プランを新規に申し込むと<strong>無料</strong>になります。月額料金（au HOME基本利用料539円・税込）は、<strong>課金開始日が属する月（初月）が無料</strong>です。紹介コードによる無料期間の1か月延長もありますが、<strong>かるがも貯金プログラムの特典プランとは併用できません</strong>。
            </p>
          </div>

          <h2 className="section-title">特典の一覧</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">特典</th>
                  <th className="p-3 text-left border-b-2 border-blue">内容</th>
                  <th className="p-3 text-left border-b-2 border-blue">主な条件</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">かるがも貯金プログラム会員特典</td>
                  <td className="p-3 text-g700">本体代金 5,680円（税込）→ 無料</td>
                  <td className="p-3 text-g700">会員登録後、マイページの「あんしんウォッチャー LE特典」から新規申込み。特典申込み時点でau HOMEの契約がないこと</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">初月無料</td>
                  <td className="p-3 text-g700">課金開始日が属する月の月額539円（税込）が無料</td>
                  <td className="p-3 text-g700">初月に解約した場合は539円がかかります</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">紹介コード</td>
                  <td className="p-3 text-g700">月額無料期間を1か月延長</td>
                  <td className="p-3 text-g700">既に利用している方から紹介を受け、申込時に入力。かるがも貯金プログラム会員特典プランは対象外</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={LE} target="_blank" rel="noopener noreferrer" className="text-blue underline">あんしんウォッチャー LE 公式ページ（料金プラン・ご注意事項）</a>、よくあるご質問「<a href={`${FAQ}040.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">紹介による無料期間延長は、誰でも受けられますか？</a>」（{CHECKED}）
          </p>

          <h2 className="section-title">かるがも貯金プログラムで本体0円にする条件</h2>
          <p className="text-sm text-g600 mb-3">公式ページでは、かるがも貯金プログラムへの加入に次の条件をすべて満たすことが求められています。</p>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・小学生以下（学齢12歳まで）のお子さまの親権者または扶養者であること（法定代理人であること・au IDが必要）</li>
            <li>・お子さまの情報を登録すること（最大3人まで）</li>
            <li>・店頭、またはスマートフォンからサービスページ（lp-karugamo.au.com）にアクセスして会員登録を行うこと</li>
          </ul>
          <p className="text-sm text-g600 mb-3">あわせて、次の点も記載されています。</p>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・かるがも貯金プログラムに加入しているau IDと同じau IDで申し込み・利用すること</li>
            <li>・特典申込み時点でau HOMEの契約がある方は、特典を申し込めないこと</li>
            <li>・au IDの状態によっては、特典を受けられない場合があること</li>
            <li>・申込み後10日前後で、登録した住所に本体とau HOME接続ガイドが届くこと</li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={LE} target="_blank" rel="noopener noreferrer" className="text-blue underline">あんしんウォッチャー LE 公式ページ</a>（※2・※3・お申し込み方法、{CHECKED}）
          </p>

          <h2 className="section-title">初月無料の数え方と解約時の料金</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>課金開始日</strong>は、KDDIが機器を発送した日から9日後です（9日後までに受け取っていない場合は、受け取った日の翌日）。</li>
            <li>・課金開始日が属する月が<strong>初月（無料）</strong>で、2カ月目以降は月額539円（税込）がかかります。</li>
            <li>・<strong>初月に解約した場合は539円</strong>がかかります。日割りはありません。</li>
            <li>・最低利用期間と解約違約金はありません。解約月も日割りはなく、539円がかかります。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={LE} target="_blank" rel="noopener noreferrer" className="text-blue underline">あんしんウォッチャー LE 公式ページ</a>（※4）、よくあるご質問「<a href={`${FAQ}008.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">最低利用期間など決まりはありますか？</a>」（{CHECKED}）
          </p>

          <h2 className="section-title">紹介コードの使い方</h2>
          <ol className="space-y-2 text-sm text-g700 mb-3 list-decimal pl-5">
            <li>紹介する側：au HOMEアプリの左上のボタンから「お友達紹介コード」を開き、「コピー」してアプリで共有します。</li>
            <li>紹介される側：あんしんウォッチャーLEの新規お申し込みページで、お友達紹介コードを入力して申し込みます。</li>
            <li>申し込みの後から紹介コードを入力することはできません。</li>
          </ol>
          <p className="text-xs text-g400 mb-8">
            出典：よくあるご質問「<a href={`${FAQ}041.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">紹介コードの確認方法について教えてください。</a>」「<a href={`${FAQ}042.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">紹介コードの入力方法について教えてください。</a>」「<a href={`${FAQ}043.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">申し込み後に紹介コードを入力することはできますか？</a>」（{CHECKED}）
          </p>

          <h2 className="section-title">どちらを選ぶかの目安</h2>
          <p className="text-sm text-g700 mb-3">
            当サイトで公式の記載をもとに比べると、かるがも貯金プログラムの特典は<strong>本体代金5,680円</strong>が無料になり、紹介コードの特典は<strong>月額539円の1か月分</strong>が無料になります。かるがも貯金プログラムの加入条件（小学生以下のお子さまの親権者・扶養者など）を満たす場合は、金額の上ではかるがも貯金プログラムの特典が大きくなります。条件を満たさない場合や、高齢のご家族の見守りに使う場合は、通常価格での申込みに紹介コードを使う形になります。
          </p>
          <p className="text-xs text-g400 mb-8">金額はいずれも税込・{CHECKED}時点の公式表示です。特典の内容は変更される場合があります。</p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              1つのau IDで利用登録できるのは、あんしんウォッチャー・あんしんウォッチャーLE・かんたん見守りプラグをあわせて最大2台です。公式ページでは、あんしんウォッチャーLEとあんしんウォッチャーの仕様・機能に違いはないと案内されています。機能や使い方は「<Link href="/review/anshin-watcher/" className="text-blue underline">あんしんウォッチャーのレビュー</Link>」「<Link href="/knowledge/anshin-watcher-howto/" className="text-blue underline">あんしんウォッチャーの使い方</Link>」をご覧ください。
            </p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
          <p className="text-xs text-g400 mt-3">
            出典：<a href={LE} target="_blank" rel="noopener noreferrer" className="text-blue underline">あんしんウォッチャー LE 公式ページ</a>、<a href={FAQ} target="_blank" rel="noopener noreferrer" className="text-blue underline">よくあるご質問</a>（{CHECKED}）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/campaign/" className="btn-primary">子供GPSのキャンペーン比較</Link>
              <Link href="/review/anshin-watcher/" className="btn-accent">あんしんウォッチャーの詳細</Link>
              <Link href="/compare/cost/" className="btn-primary">費用の比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
