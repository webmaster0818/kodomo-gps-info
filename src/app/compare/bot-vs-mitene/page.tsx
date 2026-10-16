import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'BoTトーク vs みてねみまもりGPS 詳細比較 | 10項目で比較',
  description:
    'BoTトークとみてねみまもりGPSを10項目以上で比較します。本体サイズ・重量・アプリUI・通知機能・家族共有・セキュリティについて解説します。',
};

const faqData = [
  { q: 'どちらがおすすめですか？', a: 'トーク機能を重視する場合はBoTトーク、シンプルさとバッテリーの持ちを重視する場合はみてねみまもりGPSをおすすめします。ご家庭のニーズに合わせてお選びください。' },
  { q: '端末の初期費用はどれくらい違いますか？', a: '本体価格はBoTトークが5,280円、みてねが2,904円と差があります。月額料金はいずれも528円からです（BoTトークには、トーク機能を利用する748円のプランがあります）。' },
  { q: '家族何人まで位置情報を共有できますか？', a: 'BoTトークは見守り人数が無制限で、みてねも無制限（アカウント数の制限なし）です。いずれも、ご家族全員で共有しやすい設計です。' },
  { q: 'アプリの使いやすさはどう違いますか？', a: 'いずれもシンプルなUIですが、BoTトークはトーク機能を中心とした画面構成、みてねは位置情報を中心とした画面構成です。好みが分かれるため、両者のアプリ画面を公式サイトで事前にご確認いただくことをおすすめします。' },
  { q: '両方とも学校に持ち込めますか？', a: '学校への持ち込みの可否は、各校の規則によって異なります。いずれもスピーカーから音が出にくいサイレント設計で、ランドセルに入れても邪魔にならないサイズです。詳細は学校にご確認ください。' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
};

const comparisonItems = [
  { item: '提供会社', bot: 'ビーサイズ株式会社', mitene: '株式会社MIXI' },
  { item: '端末価格', bot: '5,280円', mitene: '2,904円' },
  { item: '月額料金', bot: '528円〜748円', mitene: '528円' },
  { item: 'トーク機能', bot: '◎ 音声メッセージ対応', mitene: '◎ トークPlusで対応' },
  { item: 'バッテリー持ち', bot: '通常1カ月、トーク時2週間', mitene: '最大2カ月' },
  { item: '見守り人数', bot: '無制限', mitene: '無制限' },
  { item: '測位方式', bot: 'GPS+Wi-Fi+基地局', mitene: 'GPS+Wi-Fi+基地局' },
  { item: '本体サイズ（目安）', bot: 'コンパクト設計', mitene: 'コンパクト設計' },
  { item: 'AI・特徴機能', bot: '見守りウォレット、AI学習', mitene: 'トークPlusプラン' },
  { item: '契約縛り', bot: 'なし', mitene: 'なし' },
  { item: '解約金', bot: 'なし', mitene: 'なし' },
  { item: '対応OS', bot: 'iOS / Android', mitene: 'iOS / Android' },
];

export default function BotVsMitenePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "BoTトーク vs みてねみまもりGPS 詳細比較", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '比較', href: '/compare/' }, { name: 'BoTトーク vs みてね 詳細比較' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">詳細比較</span>
            <span className="tag-pill bg-orange text-white">12項目</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            BoTトーク vs みてねみまもりGPS 詳細比較
          </h1>
          <p className="text-g600 text-lg">12項目で比較し、本体スペック・アプリUI・機能の違いを解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">12項目 詳細比較表</h2>
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
          <p className="text-xs text-g500 mb-8">※仕様は変更される場合があります。最新情報は各公式サイトでご確認ください。</p>

          <h2 className="section-title">BoTトークが適しているご家庭</h2>
          <div className="card-hover p-5 mb-6">
            <ul className="space-y-2 text-g600">
              <li>✓ 音声メッセージによるコミュニケーションを重視したい</li>
              <li>✓ 見守りウォレット（交通系IC連携）機能を使いたい</li>
              <li>✓ AI学習で移動パターンを把握したい</li>
              <li>✓ 小学生のうちからトーク機能で積極的に会話したい</li>
            </ul>
          </div>

          <h2 className="section-title">みてねみまもりGPSが適しているご家庭</h2>
          <div className="card-hover p-5 mb-8">
            <ul className="space-y-2 text-g600">
              <li>✓ 初期費用を抑えて始めたい（端末2,904円）</li>
              <li>✓ バッテリーの持ちを最優先したい（最大2カ月）</li>
              <li>✓ 位置情報の確認を中心にシンプルに使いたい</li>
              <li>✓ トーク機能が必要なときだけプランを切り替えたい</li>
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
