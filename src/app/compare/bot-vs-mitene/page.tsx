import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'BoTトークとみてねみまもりGPSの比較｜見守れる人数（何人まで）・料金・重さ・電池【2026年10月】',
  description:
    'BoTトークとみてねみまもりGPSを公式情報で比較します。見守る人数は、みてねが「制限なし」、BoTトークは上限の記載がなく「何人で見守っても追加料金なし」です。本体価格・月額・重さ（BoT 約58g／みてね MG05 61g）・電池持ち・通信回線も掲載しています（2026年10月20日確認）。',
};

const faqData = [
  { q: 'BoTトークは何人まで見守れますか？', a: 'BoTトークの公式サイト・公式FAQには、見守る保護者の人数上限は記載されていません。公式FAQでは「アプリ利用料：無料（パパママ、祖父母様、何人で見守っても追加料金はかかりません）」と案内されています（2026年10月20日確認）。なお、最初に端末とスマートフォンをつなぐ操作は、月額料金を支払う契約者が行う必要があります。' },
  { q: 'みてねみまもりGPSは何人まで見守れますか？', a: 'みてねみまもりGPSの公式サイトのよくあるご質問では、「みまもっている人の数に制限はありません。何人でも追加できます。」と案内されています（2026年10月20日確認）。' },
  { q: 'どちらがおすすめですか？', a: '交通系ICカードの残高や改札の入出場も確認したい場合はBoTトーク（見守りウォレット機能）、位置確認中心で電池持ちを重視する場合はみてねみまもりGPSのお知らせボタン搭載モデル（MG05・最大2ヶ月）が候補になります。いずれも音声メッセージに対応したプラン・機種があります。ご家庭のニーズに合わせてお選びください。' },
  { q: '端末の初期費用と月額はどれくらい違いますか？', a: 'BoTトークの本体価格は5,280円（税込）で、月額はGPSプラン528円・GPS&トークプラン748円です。みてねみまもりGPSは機種ごとに異なり、お知らせボタン搭載モデル（MG05）が本体5,280円・月額528円、トーク（MT05）が5,680円・748円、トークPlus（MB06）が7,480円・748円です（いずれも税込・2026年10月20日に各公式サイトで確認）。' },
  { q: 'アプリの使いやすさはどう違いますか？', a: '画面構成や操作感には好みがあるため、当サイトでは優劣を付けていません。両者とも公式サイトにアプリ画面の紹介が掲載されていますので、事前にご確認いただくことをおすすめします。' },
  { q: '両方とも学校に持ち込めますか？', a: '学校への持ち込みの可否は、各校の規則によって異なります。BoTトークとみてねみまもりGPS（MG05・MT05）はいずれも縦横約50mmのポケット型です。画面と防犯ブザーを備えたトークPlus（MB06）は縦98.2mmと大きめです。詳細は学校にご確認ください。' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
};

const comparisonItems = [
  { item: '提供会社', bot: 'ビーサイズ株式会社', mitene: '株式会社MIXI' },
  { item: '見守る人数（何人まで）', bot: '上限の記載なし。何人で見守っても追加料金なし（公式FAQ）', mitene: '制限なし。何人でも追加可能（公式FAQ）' },
  { item: '本体価格（税込）', bot: '5,280円', mitene: 'MG05 5,280円／MT05 5,680円／MB06 7,480円' },
  { item: '月額料金（税込）', bot: 'GPSプラン528円／GPS&トークプラン748円', mitene: 'MG05 528円／MT05・MB06 748円' },
  { item: 'トーク機能', bot: 'GPS&トークプランで音声メッセージに対応', mitene: 'MT05・MB06でボイスメッセージに対応（MG05はお知らせボタン）' },
  { item: 'バッテリー持ち', bot: 'GPSプラン最長1ヶ月以上／GPS&トークプラン最長2週以上（電池優先モード）', mitene: 'MG05 最大2ヶ月／MT05・MB06 最大3週間（省エネモード）' },
  { item: 'サイズ・重さ', bot: '50×50×21mm・約58g', mitene: 'MG05 50×50×22mm・61g／MT05 63g／MB06 50×98.2×20mm・89g' },
  { item: '通信回線', bot: 'LTE-M（ドコモLTEエリア）', mitene: 'LTE Cat.M1（ドコモ・KDDI・SoftBankのLTE。圏外時に自動で切り替え）' },
  { item: '測位方式', bot: 'GNSS（GPS・みちびき・BeiDou・Galileo等）+Wi-Fi・携帯基地局', mitene: 'GNSS L1/L5デュアルバンド+Wi-Fi・携帯基地局' },
  { item: '防水', bot: '生活防水（水没不可・IP等級の記載なし）', mitene: 'MG05 IP55／MT05・MB06 IP54' },
  { item: '特徴的な機能', bot: '見守りウォレット（交通系ICの残高・改札入出場の確認）、よく行く場所や行動範囲の学習', mitene: 'MB06は防犯ブザーとディスプレイを搭載' },
  { item: '契約期間の縛り・解約金', bot: '公式サイト・FAQに記載なし（契約前に公式でご確認ください）', mitene: 'なし（公式FAQ）' },
];

export default function BotVsMitenePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "BoTトーク vs みてねみまもりGPS 詳細比較", "datePublished": "2026-03-15", "dateModified": "2026-10-20", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '比較', href: '/compare/' }, { name: 'BoTトーク vs みてね 詳細比較' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">詳細比較</span>
            <span className="tag-pill bg-orange text-white">{comparisonItems.length}項目</span>
            <span className="tag-pill bg-green text-white">2026年10月20日 更新</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            BoTトーク vs みてねみまもりGPS 詳細比較
          </h1>
          <p className="text-g600 text-lg">見守れる人数・料金・重さ・電池持ちなど{comparisonItems.length}項目を、各公式サイトの情報で比較しています。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8 bg-blue-light/50 border-l-4 border-blue rounded-xl">
            <h2 className="font-extrabold text-g800 mb-3">家族の何人まで見守れるか</h2>
            <ul className="space-y-2 text-sm text-g700">
              <li>・<strong>みてねみまもりGPS</strong>：見守る人の数に<strong>制限はありません</strong>。公式のよくあるご質問に「みまもっている人の数に制限はありません。何人でも追加できます。」と記載されています。</li>
              <li>・<strong>BoTトーク</strong>：公式サイト・公式FAQに<strong>人数上限の記載はありません</strong>。公式FAQでは「パパママ、祖父母様、何人で見守っても追加料金はかかりません」と案内されています。最初に端末とスマートフォンをつなぐ操作は、契約者が行う必要があります。</li>
              <li>・いずれも、見守る人を増やしても月額料金は変わりません。</li>
            </ul>
            <p className="text-xs text-g500 mt-3">
              出典（2026年10月20日確認）：<a href="https://family-album.com/gps" target="_blank" rel="noopener noreferrer" className="text-blue underline">みてねみまもりGPS公式</a>／<a href="https://www.bsize.com/bot/talk/faq" target="_blank" rel="noopener noreferrer" className="text-blue underline">BoTトーク公式FAQ</a>
            </p>
          </div>

          <h2 className="section-title">{comparisonItems.length}項目 詳細比較表</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue text-white">
                  <th className="p-3 text-left">比較項目</th>
                  <th className="p-3 text-left">BoTトーク</th>
                  <th className="p-3 text-left">みてねみまもりGPS</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((row) => (
                  <tr key={row.item} className="border-b border-g100">
                    <td className="p-3 font-semibold text-g800">{row.item}</td>
                    <td className="p-3 text-g600">{row.bot}</td>
                    <td className="p-3 text-g600">{row.mitene}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">出典（2026年10月20日確認）：<a href="https://www.bsize.com/bot/talk" target="_blank" rel="noopener noreferrer" className="text-blue underline">BoTトーク公式</a>・<a href="https://www.bsize.com/bot/talk/faq" target="_blank" rel="noopener noreferrer" className="text-blue underline">BoTトーク公式FAQ</a>／<a href="https://family-album.com/gps" target="_blank" rel="noopener noreferrer" className="text-blue underline">みてねみまもりGPS公式</a>・<a href="https://mitene.us/gps/spec" target="_blank" rel="noopener noreferrer" className="text-blue underline">みてねみまもりGPS仕様</a>。電池持ちは各社が定める条件での最大値の目安で、利用状況により短くなります。仕様・料金は変更される場合がありますので、ご利用前に各公式サイトにて最新情報をご確認ください。</p>

          <h2 className="section-title">BoTトークが適しているご家庭</h2>
          <div className="card-hover p-5 mb-6">
            <ul className="space-y-2 text-g600">
              <li>✓ 交通系ICカードの残高や改札の入出場もアプリで確認したい方（見守りウォレット）</li>
              <li>✓ よく行く場所や行動範囲の学習による通知を使いたい方（学習には1ヶ月以上の利用が必要と案内されています）</li>
              <li>✓ 1台の端末で、GPSプランとGPS&トークプランを選びたい方</li>
              <li>✓ 本体を約58gと軽めにしたい方</li>
            </ul>
          </div>

          <h2 className="section-title">みてねみまもりGPSが適しているご家庭</h2>
          <div className="card-hover p-5 mb-8">
            <ul className="space-y-2 text-g600">
              <li>✓ 位置確認を中心に、電池持ちを優先したい方（MG05：省エネモードで最大2ヶ月）</li>
              <li>✓ ドコモ・KDDI・SoftBankのLTEを自動で切り替える通信を重視したい方</li>
              <li>✓ 防水等級（IP55／IP54）が明記された機種を選びたい方</li>
              <li>✓ 防犯ブザーと画面を1台にまとめたい方（MB06）</li>
            </ul>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
          <p className="text-sm text-g600 mt-3">BoTとみてねみまもりGPSを含む主要5機種の海外利用の可否（公式FAQ）は<Link href="/knowledge/international/" className="text-blue underline">子供用GPSは海外で使える？</Link>でまとめています。</p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">その他の機種との比較</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">全機種ランキング</Link>
              <Link href="/compare/mitene-vs-bot/" className="btn-accent">基本比較ページ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
