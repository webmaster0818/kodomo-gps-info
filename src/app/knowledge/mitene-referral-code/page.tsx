import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'みてねみまもりGPSの紹介コード｜初月無料の条件・入力するタイミング・発行方法【公式ヘルプで確認】',
  description:
    'みてねみまもりGPSのお友だち紹介コードについて、MIXI公式ヘルプセンターの記載にもとづいて整理しています。特典（クレジットカード決済は30日間無料・キャリア決済は利用開始月無料）、入力できるのは支払い情報の登録時だけである点、1アカウント1回の制限、コードの発行方法をまとめています。',
  keywords: ['みてねみまもりGPS', '紹介コード', 'お友だち紹介', '初月無料', 'キャンペーン'],
};

const HELP = 'https://help.gps.mitene.us/hc/ja/articles/';
const HOWTO = `${HELP}4408353551897`;
const TERMS = `${HELP}53495015972761`;
const COST = `${HELP}900004440926`;
const CHECKED = '2026年11月16日確認';

const faqData = [
  {
    q: '紹介コードを入れると何が無料になりますか？',
    a: '月額通信費が無料になります。公式ヘルプでは、クレジットカード決済の場合は30日間無料、携帯キャリア決済の場合はご利用開始月が無料と案内されています。本体代金は割引の対象ではありません。',
  },
  {
    q: '端末を登録した後から紹介コードを入力できますか？',
    a: 'できません。紹介コードを入力できるのは、端末を開通させる際の決済情報の登録時だけで、開通後は適用できないと公式ヘルプに記載されています。',
  },
  {
    q: '2台目の端末にも紹介コードは使えますか？',
    a: '紹介コードは1アカウントにつき1回のみ利用できます。また、キャンペーン規約では、被紹介者の条件として「アプリの登録が初回であること（既に利用中の端末が存在する場合は対象外）」が挙げられています。すでに1台使っている方が2台目を追加する場合は、対象外になると考えられます。',
  },
  {
    q: '紹介した側にも特典はありますか？',
    a: '2025年12月22日〜2026年6月30日に、紹介者がSNSに感想を投稿すると抽選でAmazonギフト券が当たる「お友だち紹介＆感想ポストキャンペーン」が実施されていました。この期間は終了しています。紹介者向けの特典の有無は、時期ごとに公式ヘルプセンターでご確認ください。',
  },
  {
    q: '紹介コードはどこで手に入りますか？',
    a: '現在みてねみまもりGPSを利用している方が、アプリのメニュー（≡）の「お友だち紹介コード」から発行できます。当サイトでは紹介コードの掲載・配布は行っていません。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function MiteneReferralCodePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'みてねみまもりGPSの紹介コード', datePublished: '2026-11-16', dateModified: '2026-11-16', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'みてねみまもりGPSの紹介コード' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">特典</span>
            <span className="tag-pill bg-blue text-white">みてねみまもりGPS</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">みてねみまもりGPSの紹介コードの使い方と条件</h1>
          <p className="text-g600 text-lg">MIXI公式ヘルプセンターの記載にもとづき、紹介コードの特典・入力のタイミング・使えない場合を整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：支払い情報の登録時に入力すると、月額通信費が初月（カード決済は30日間）無料になります</h2>
            <p className="text-g600">
              紹介コードは、端末をアプリに連携した後の<strong>お支払い情報を入力する画面</strong>で入力します。適用されると、<strong>クレジットカード決済は30日間無料</strong>、<strong>携帯キャリア決済はご利用開始月が無料</strong>です。<strong>開通後は入力できず</strong>、<strong>1アカウントにつき1回</strong>しか使えません。月額通信費はGPSプランで528円、ボイスメッセージ付きGPSプランで748円（いずれも税込）のため、特典の金額はおおむね1か月分の528円または748円です。
            </p>
          </div>

          <h2 className="section-title">紹介コードの特典と条件</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">項目</th>
                  <th className="p-3 text-left border-b-2 border-blue">内容</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">特典（クレジットカード決済）</td>
                  <td className="p-3 text-g700">月額通信費が30日間無料</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">特典（携帯キャリア決済）</td>
                  <td className="p-3 text-g700">ご利用開始月の月額通信費が無料</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">入力できるタイミング</td>
                  <td className="p-3 text-g700">端末を開通させる際の決済情報の登録時のみ（開通後は不可）</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">利用回数</td>
                  <td className="p-3 text-g700">1アカウントにつき1回</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">月額通信費（参考）</td>
                  <td className="p-3 text-g700">GPSプラン528円／ボイスメッセージ付きGPSプラン748円（税込・端末ごと）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：みてねみまもりGPS ヘルプセンター「<a href={HOWTO} target="_blank" rel="noopener noreferrer" className="text-blue underline">お友だち紹介コードの利用方法を教えてください</a>」「<a href={COST} target="_blank" rel="noopener noreferrer" className="text-blue underline">みてねみまもりGPSの利用にかかる費用を教えてください</a>」（{CHECKED}）
          </p>

          <h2 className="section-title">紹介コードを入力する手順（受け取った方）</h2>
          <ol className="space-y-2 text-sm text-g700 mb-3 list-decimal pl-5">
            <li>みてねみまもりGPSの端末を購入します。</li>
            <li>アプリと端末を連携します。</li>
            <li>お支払い情報を入力する画面で「お友だち紹介コード」を入力します。</li>
          </ol>
          <p className="text-sm text-g700 mb-3">支払い情報の登録を済ませて開通した後は、紹介コードを適用できません。コードを受け取っている場合は、端末の連携前に手元に用意しておくことをおすすめします。</p>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={HOWTO} target="_blank" rel="noopener noreferrer" className="text-blue underline">お友だち紹介コードの利用方法を教えてください</a>（{CHECKED}）
          </p>

          <h2 className="section-title">紹介コードを発行する手順（利用中の方）</h2>
          <ol className="space-y-2 text-sm text-g700 mb-3 list-decimal pl-5">
            <li>アプリを起動し、画面左上のメニュー（≡）を開きます。</li>
            <li>「お友だち紹介コード」を選択し、表示されたコードを確認します。</li>
            <li>「コードを共有する」ボタンから、お友だちに紹介コードを送ります（送信時に利用条件と使用方法も確認できます）。</li>
          </ol>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={HOWTO} target="_blank" rel="noopener noreferrer" className="text-blue underline">お友だち紹介コードの利用方法を教えてください</a>（{CHECKED}）
          </p>

          <h2 className="section-title">紹介コードが使えない主なケース</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・すでに端末を開通させた後（支払い情報の登録後）に入力しようとした</li>
            <li>・同じアカウントで、過去に紹介コードを使ったことがある</li>
            <li>・すでに利用中の端末があるアカウントで、追加の端末に使おうとした（キャンペーン規約の被紹介者の条件による）</li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={HOWTO} target="_blank" rel="noopener noreferrer" className="text-blue underline">お友だち紹介コードの利用方法</a>、「<a href={TERMS} target="_blank" rel="noopener noreferrer" className="text-blue underline">お友だち紹介＆感想ポストキャンペーン規約</a>」（キャンペーン適用条件：被紹介者、{CHECKED}）。規約は2026年6月30日までのキャンペーンのものです。現在の条件と異なる場合があるため、最新の条件はコード送信時の案内とヘルプセンターでご確認ください。
          </p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              機種ごとの本体価格・電池・重さは「<Link href="/review/mitene/" className="text-blue underline">みてねみまもりGPSのレビュー</Link>」、解約の手順は「<Link href="/knowledge/mitene-cancel/" className="text-blue underline">みてねみまもりGPSの解約方法</Link>」をご覧ください。
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
            出典：<a href={HOWTO} target="_blank" rel="noopener noreferrer" className="text-blue underline">お友だち紹介コードの利用方法</a>、<a href={TERMS} target="_blank" rel="noopener noreferrer" className="text-blue underline">お友だち紹介＆感想ポストキャンペーン規約</a>（{CHECKED}）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/campaign/" className="btn-primary">子供GPSのキャンペーン比較</Link>
              <Link href="/review/mitene/" className="btn-accent">みてねみまもりGPSの詳細</Link>
              <Link href="/compare/anshin-vs-mitene/" className="btn-primary">あんしんウォッチャーとの比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
