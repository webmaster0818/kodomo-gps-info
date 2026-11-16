import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'あんしんウォッチャーとみてねみまもりGPSの比較｜料金・3年総額・2台目・電池・重さ【2026年11月・公式で確認】',
  description:
    'あんしんウォッチャー（KDDI）とみてねみまもりGPS（MIXI）を、両社の公式ページとよくある質問の記載で比較しています。本体価格と月額、当サイトで計算した3年総額、2台目の料金の違い（au HOMEは1契約2台まで・みてねは端末ごとに月額）、電池・重さ・防水・見守れる人数をまとめています。',
  keywords: ['あんしんウォッチャー', 'みてねみまもりGPS', '比較', 'どっち', '料金'],
};

const KDDI_FAQ = 'https://homeiot.kddi.com/anshinwatcher/kids/faq/';
const KDDI_LE = 'https://homeiot.kddi.com/anshinwatcher/kids/';
const AU_CHARGE = 'https://www.au.com/life/auhome/charge/';
const MITENE = 'https://mitene.us/gps';
const MITENE_SPEC = 'https://mitene.us/gps/spec';
const MITENE_HELP = 'https://help.gps.mitene.us/hc/ja/articles/';
const CHECKED = '2026年11月16日確認';

const rows: [string, string, string][] = [
  ['提供会社', 'KDDI（au HOMEのサービス）', '株式会社MIXI'],
  ['本体価格（税込）', 'LE：5,680円／通常版：11,000円', 'MG05：5,280円／トーク MT05：5,680円／トークPlus MB06：7,480円'],
  ['月額（税込）', '539円（au HOME利用料）。LEは初月無料、通常版は最大12カ月無料', 'GPSプラン528円／ボイスメッセージ付き748円'],
  ['2台目の月額', '0円（1つのau IDで2台まで。月額はau HOME契約単位）', '端末ごとに月額が必要'],
  ['見守れる人数', 'au HOMEアプリに最大9人の家族を招待できる', '見守る人の数に制限なし'],
  ['電池（公式の目安）', '最大2カ月（標準約3分間隔などの条件）', 'MG05：省エネモードで最大2ヶ月／トーク機種：最大3週間'],
  ['サイズ・重さ', '約50×50×18.8mm・約53g', 'MG05：50×50×22mm・61g／MT05：63g／MB06：89g'],
  ['防水・防塵', 'IP55', 'IP55（MB06はIP54）'],
  ['移動履歴', '直近3カ月', '3ヶ月'],
  ['子どもとの会話', 'なし（ボタンで保護者へ通知）', 'MT05・MB06はボイスメッセージ対応'],
  ['防犯ブザー', 'なし', 'MB06のみ搭載'],
  ['対応スマホ', 'au HOMEアプリ（Android 13.0以上・iOS 16.0以上）。au以外でも可', 'みてねみまもりGPSアプリ。キャリアを問わない'],
];

const totals = [
  { name: 'あんしんウォッチャー LE', calc: '5,680円＋539円×35カ月', total: '24,545円' },
  { name: 'あんしんウォッチャー（通常版）', calc: '11,000円＋539円×24カ月', total: '23,936円' },
  { name: 'みてねみまもりGPS MG05', calc: '5,280円＋528円×36カ月', total: '24,288円' },
  { name: 'みてねみまもりGPSトーク MT05', calc: '5,680円＋748円×36カ月', total: '32,608円' },
];

const faqData = [
  {
    q: 'あんしんウォッチャーとみてねみまもりGPS、安いのはどちらですか？',
    a: '1台を3年使う場合、当サイトの計算では、あんしんウォッチャー通常版23,936円、みてねMG05 24,288円、あんしんウォッチャーLE 24,545円で、差は約600円にとどまります。2台使う場合は、あんしんウォッチャーは2台目の月額がかからないため差が大きくなります（いずれも2026年11月16日時点の公式価格・税込）。',
  },
  {
    q: '兄弟2人で使うならどちらがよいですか？',
    a: 'あんしんウォッチャーは、1つのau IDで2台まで登録でき、月額539円は契約単位のため2台目の月額はかかりません。みてねみまもりGPSは端末ごとに月額通信費が必要です。料金を重視する場合は、あんしんウォッチャーが有利です。',
  },
  {
    q: '子どもと話したい場合はどちらですか？',
    a: 'あんしんウォッチャーには通話・メッセージの機能がありません。子どもとボイスメッセージを送り合いたい場合は、みてねみまもりGPSトーク（MT05）またはトークPlus（MB06）が対象になります。',
  },
  {
    q: 'auのスマホでないとあんしんウォッチャーは使えませんか？',
    a: 'au以外のスマートフォンでも使えます。au HOMEアプリ（Android 13.0以上・iOS 16.0以上）とau IDが必要です。',
  },
  {
    q: '解約した端末をもう一度使えますか？',
    a: 'あんしんウォッチャーは、au HOME解約後は原則再利用できません（解約月の翌月末までに同じau IDで再申込みした場合を除く）。みてねみまもりGPSも、解約するとSIMが無効になり再利用できないと公式に案内されています。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function AnshinVsMitenePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'あんしんウォッチャーとみてねみまもりGPSの比較', datePublished: '2026-11-16', dateModified: '2026-11-16', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: '比較', href: '/compare/' }, { name: 'あんしんウォッチャー vs みてねみまもりGPS' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">2機種比較</span>
            <span className="tag-pill bg-blue text-white">公式情報で確認</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">あんしんウォッチャーとみてねみまもりGPSの比較</h1>
          <p className="text-g600 text-lg">KDDIとMIXIの公式ページ・よくある質問の記載をもとに、料金・2台目の扱い・電池・重さなど12項目を比較しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：1台なら3年総額はほぼ同じ。兄弟2台ならあんしんウォッチャー、会話したいならみてねトークが目安です</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>1台・位置確認だけ</strong>：3年総額は当サイトの計算で約2.4万円前後と差が小さく、重さ（約53g／61g）やアプリの使い慣れで選んで問題ありません。</li>
              <li>・<strong>兄弟で2台</strong>：あんしんウォッチャーは2台目の月額が0円です。みてねは端末ごとに月額がかかります。</li>
              <li>・<strong>子どもと会話したい</strong>：あんしんウォッチャーは会話機能がないため、みてねみまもりGPSトーク（MT05）・トークPlus（MB06）が対象です。</li>
            </ul>
          </div>

          <h2 className="section-title">12項目の比較表</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">項目</th>
                  <th className="p-3 text-left border-b-2 border-blue">あんしんウォッチャー</th>
                  <th className="p-3 text-left border-b-2 border-blue">みてねみまもりGPS</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([k, a, m]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800 whitespace-nowrap">{k}</td>
                    <td className="p-3 text-g700">{a}</td>
                    <td className="p-3 text-g700">{m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：あんしんウォッチャー＝<a href={AU_CHARGE} target="_blank" rel="noopener noreferrer" className="text-blue underline">au HOME 料金ページ</a>・<a href={KDDI_LE} target="_blank" rel="noopener noreferrer" className="text-blue underline">あんしんウォッチャー LE 公式ページ</a>・よくあるご質問（<a href={`${KDDI_FAQ}013.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">電池</a>／<a href={`${KDDI_FAQ}017.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">大きさ・重さ</a>／<a href={`${KDDI_FAQ}015.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">防水</a>／<a href={`${KDDI_FAQ}038.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">機能</a>／<a href={`${KDDI_FAQ}007.html`} target="_blank" rel="noopener noreferrer" className="text-blue underline">対応スマホ</a>）。みてねみまもりGPS＝<a href={MITENE} target="_blank" rel="noopener noreferrer" className="text-blue underline">公式サイト</a>・<a href={MITENE_SPEC} target="_blank" rel="noopener noreferrer" className="text-blue underline">製品仕様</a>・ヘルプ「<a href={`${MITENE_HELP}900004440926`} target="_blank" rel="noopener noreferrer" className="text-blue underline">利用にかかる費用</a>」「<a href={`${MITENE_HELP}900004440406`} target="_blank" rel="noopener noreferrer" className="text-blue underline">複数のGPS端末をみまもることは可能ですか？</a>」（いずれも{CHECKED}）。電池の目安は各社が示す条件での値で、使い方により変わります。
          </p>

          <h2 className="section-title">1台を3年使った場合の総額（当サイト計算）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">機種</th>
                  <th className="p-3 text-left border-b-2 border-blue">計算</th>
                  <th className="p-3 text-left border-b-2 border-blue">3年総額（税込）</th>
                </tr>
              </thead>
              <tbody>
                {totals.map((t) => (
                  <tr key={t.name} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">{t.name}</td>
                    <td className="p-3 text-g700">{t.calc}</td>
                    <td className="p-3 text-g700">{t.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            計算方法：本体価格＋月額×有料月数。あんしんウォッチャーLEは初月無料（36カ月中35カ月が有料）、通常版は最大12カ月無料（24カ月が有料）として計算しています。みてねは月額が管理者登録日から毎月かかるものとして36カ月で計算しています。キャンペーン・紹介特典・送料・ケース代は含みません。価格は{CHECKED}時点の公式表示です。
          </p>

          <h2 className="section-title">2台目の料金の違い</h2>
          <p className="text-sm text-g700 mb-3">
            兄弟で使う場合に差が出るのが2台目の扱いです。あんしんウォッチャーは、1つのau IDで<strong>あんしんウォッチャー・LE・かんたん見守りプラグをあわせて2台まで</strong>登録でき、月額539円はau HOMEの契約単位です。みてねみまもりGPSは、端末の登録台数に制限はありませんが、<strong>月額通信費は端末ごと</strong>にかかります。
          </p>
          <p className="text-sm text-g700 mb-3">
            当サイトで2台・3年の月額部分だけを比べると、あんしんウォッチャー（月額539円×1契約）は通常版で12,936円（24カ月分）、みてねMG05を2台（528円×2台×36カ月）は38,016円です。本体代は別にかかります。3台以上の場合、あんしんウォッチャーはau IDを分けて契約する必要があります。
          </p>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={AU_CHARGE} target="_blank" rel="noopener noreferrer" className="text-blue underline">au HOME 料金ページ（お申し込みにあたってのご注意事項）</a>、みてねヘルプ「<a href={`${MITENE_HELP}900004440406`} target="_blank" rel="noopener noreferrer" className="text-blue underline">複数のGPS端末をみまもることは可能ですか？</a>」（{CHECKED}）
          </p>

          <h2 className="section-title">選び方の目安</h2>
          <ul className="space-y-2 text-sm text-g700 mb-8">
            <li>・<strong>あんしんウォッチャーが合うご家庭</strong>：兄弟2人で使う、軽さ（約53g）を重視する、乗り物に乗ったことの通知や自宅Wi-Fiを使ったピンポイント設定を使いたい場合。</li>
            <li>・<strong>みてねみまもりGPSが合うご家庭</strong>：子どもとボイスメッセージを送り合いたい（MT05・MB06）、防犯ブザーも1台にまとめたい（MB06）、祖父母や親戚を含めて見守る人数に上限を設けたくない場合。</li>
          </ul>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              それぞれの詳細は「<Link href="/review/anshin-watcher/" className="text-blue underline">あんしんウォッチャーのレビュー</Link>」「<Link href="/review/mitene/" className="text-blue underline">みてねみまもりGPSのレビュー</Link>」をご覧ください。ほかの機種との料金比較は「<Link href="/compare/price/" className="text-blue underline">月額料金比較一覧</Link>」にまとめています。
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
            出典：<a href={KDDI_FAQ} target="_blank" rel="noopener noreferrer" className="text-blue underline">あんしんウォッチャー よくあるご質問</a>（009ほか）、<a href={MITENE} target="_blank" rel="noopener noreferrer" className="text-blue underline">みてねみまもりGPS 公式サイト</a>、みてねヘルプ「<a href={`${MITENE_HELP}900005419603`} target="_blank" rel="noopener noreferrer" className="text-blue underline">一度解約したGPS端末を、再度利用できますか？</a>」（{CHECKED}）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/anshin-vs-soranome/" className="btn-primary">あんしんウォッチャー vs ソラノメ</Link>
              <Link href="/compare/mitene-vs-bot/" className="btn-accent">みてね vs BoTトーク</Link>
              <Link href="/purpose/family/" className="btn-primary">兄弟・2台目におすすめ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
