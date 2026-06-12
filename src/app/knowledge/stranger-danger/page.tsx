import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供の不審者対策にGPSは有効？【見守り機能の活用法】',
  description:
    '子供の不審者対策にGPS端末がどう役立つかを徹底解説。SOS通知・速度異常検知・ジオフェンスなど各機種の防犯機能を比較し、GPS以外の対策との併用方法も紹介します。',
};

const faqData = [
  { q: '子供が不審者に遭遇する確率はどのくらい？', a: '警察庁の統計によると、13歳未満の子供が被害者となる声かけ・つきまとい等の認知件数は年間約1万件以上です。特に下校時間帯（14時〜17時）に集中しており、通学路での対策が重要です。' },
  { q: 'GPS端末で不審者から子供を守れますか？', a: 'GPS端末は「犯罪を直接防ぐ」ものではなく、「異常を素早く察知し対応する」ためのツールです。ジオフェンスの逸脱通知やSOS機能により、危険な状況をいち早く把握できます。' },
  { q: 'SOS機能はどの機種に搭載されていますか？', a: 'みもり、ソラノメ、myFirst Fone、BoTトーク、ハミックポケットなどにSOS/緊急ボタンが搭載されています。ボタンを押すと保護者のスマホに即座に通知と位置情報が届きます。' },
  { q: '不審者情報と連動するGPS端末はありますか？', a: 'みもり（MIXI）は地域の不審者情報と連動する唯一のGPS端末です。お子さまが不審者出没エリアに近づくと保護者に通知を送り、端末本体から警告音を鳴らすことも可能です。' },
  { q: 'ジオフェンスは防犯にどう役立つ？', a: '自宅・学校・通学路にジオフェンスを設定すると、お子さまがエリアを逸脱した際に即座に通知が届きます。通常と異なる行動パターンをいち早く検知でき、不審者による連れ去り等の異常に気づけます。' },
  { q: 'GPS以外に子供の不審者対策で有効なものは？', a: '防犯ブザー、子供110番の家の確認、防犯教室への参加、「いかのおすし」の教育が効果的です。GPSと防犯ブザーの併用が理想的で、周囲への助けを求める手段と保護者への通知手段の両方を確保できます。' },
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

export default function StrangerDangerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供の不審者対策にGPSは有効？【見守り機能の活用法】", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "お役立ち", "item": "https://gps-kodomo.com/knowledge/"}, {"@type": "ListItem", "position": 3, "name": "不審者対策とGPS", "item": "https://gps-kodomo.com/knowledge/stranger-danger/"}]}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '不審者対策とGPS' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">不審者対策</span>
            <span className="tag-pill bg-orange text-white">防犯GPS活用</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供の不審者対策にGPSは有効？【見守り機能の活用法】
          </h1>
          <p className="text-g600 text-lg">GPS端末の防犯機能を活かした不審者対策を徹底解説</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">不審者遭遇の現状と統計</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">
              警察庁の犯罪情勢統計によると、13歳未満の子供が被害者となる声かけ・つきまとい等の件数は年間1万件を超えています。
              特に小学校低学年（6〜8歳）が最も被害に遭いやすく、下校時間帯の14時〜17時に集中しています。
              通学路や公園、自宅周辺が発生場所の上位を占めており、日常的な見守り対策が不可欠です。
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-blue-light rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-blue">年間1万件超</p>
                <p className="text-sm text-g600">13歳未満の声かけ被害</p>
              </div>
              <div className="bg-orange-light rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-orange">14時〜17時</p>
                <p className="text-sm text-g600">被害が集中する時間帯</p>
              </div>
              <div className="bg-green-light rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-green-dark">6〜8歳</p>
                <p className="text-sm text-g600">最も被害が多い年齢</p>
              </div>
            </div>
          </div>

          <h2 className="section-title">GPS見守りが不審者対策に有効な理由</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: 'リアルタイム位置把握', desc: '子供の現在地をスマホからいつでも確認可能。下校中や習い事の移動中にいつもと違う場所にいれば、すぐに異変に気づけます。' },
              { title: 'ジオフェンスによる逸脱検知', desc: '通学路・自宅・学校にエリアを設定し、エリア外に出た時点で自動通知。連れ去りや誘い出しによる異常移動をいち早く検知できます。' },
              { title: 'SOSボタンによる緊急通報', desc: '子供自身が危険を感じた際にボタンひとつで保護者に通知。位置情報が同時送信されるため、駆けつけや通報がスムーズです。' },
              { title: '移動履歴の記録', desc: '過去の移動ルートを確認できるため、万が一の事件発生時に警察への情報提供として活用できます。毎日の行動パターンの把握にも役立ちます。' },
              { title: '抑止効果', desc: 'GPS端末を持っていること自体が「見守られている」という意識を子供に持たせ、知らない人について行かない意識づけにつながります。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">各機種の防犯機能比較</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left font-bold text-g800">機能</th>
                  <th className="p-3 text-center font-bold text-g800">みもり</th>
                  <th className="p-3 text-center font-bold text-g800">ソラノメ</th>
                  <th className="p-3 text-center font-bold text-g800">BoTトーク</th>
                  <th className="p-3 text-center font-bold text-g800">myFirst Fone</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'SOS通知', mimori: 'あり', soranome: 'あり', bot: 'なし', myfirst: 'あり' },
                  { feature: 'ジオフェンス', mimori: 'あり', soranome: 'あり', bot: 'あり', myfirst: 'あり' },
                  { feature: '不審者情報連動', mimori: 'あり', soranome: 'なし', bot: 'なし', myfirst: 'なし' },
                  { feature: '速度異常検知', mimori: 'あり', soranome: 'なし', bot: 'あり（AI学習）', myfirst: 'なし' },
                  { feature: '警告音', mimori: 'あり', soranome: 'なし', bot: 'なし', myfirst: 'あり' },
                  { feature: '移動履歴', mimori: '1週間', soranome: '30日間', bot: '1週間', myfirst: '3日間' },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-gray-200">
                    <td className="p-3 font-bold text-g700">{row.feature}</td>
                    <td className="p-3 text-center text-g600">{row.mimori}</td>
                    <td className="p-3 text-center text-g600">{row.soranome}</td>
                    <td className="p-3 text-center text-g600">{row.bot}</td>
                    <td className="p-3 text-center text-g600">{row.myfirst}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">GPS以外の防犯対策との併用</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">子供に教える「いかのおすし」</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・「いか」ない（知らない人についていかない）</li>
                <li>・「の」らない（知らない人の車にのらない）</li>
                <li>・「お」おごえを出す（危険を感じたら大声を出す）</li>
                <li>・「す」ぐにげる（危険を感じたらすぐ逃げる）</li>
                <li>・「し」らせる（大人にすぐ知らせる）</li>
              </ul>
            </div>
            <div className="bg-blue-light rounded-xl p-6">
              <h3 className="font-bold text-blue mb-3">併用すべき防犯グッズ</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・防犯ブザー（周囲への助けを求める）</li>
                <li>・反射材つきランドセルカバー（視認性向上）</li>
                <li>・子供110番の家マップ（緊急避難先の確認）</li>
                <li>・防犯笛（ブザーの電池切れ対策に）</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">親ができる事前対策</h2>
          <div className="card-hover p-6 mb-8">
            <div className="space-y-3">
              {[
                { step: '1', title: '通学路を一緒に歩く', desc: '入学前や新学期に通学路を一緒に歩き、危険な場所（見通しの悪い場所、人通りの少ない場所）を確認しましょう。' },
                { step: '2', title: '逃げ込める場所を教える', desc: 'コンビニ、子供110番の家、交番など、危険を感じた時に駆け込める場所を具体的に教えましょう。' },
                { step: '3', title: '定期的にロールプレイ', desc: '「知らない人に声をかけられたらどうする？」を定期的に練習。SOSボタンの押し方も繰り返し確認しましょう。' },
                { step: '4', title: '地域の防犯情報を確認', desc: '自治体や警察の不審者情報メール配信に登録し、地域の治安状況を把握しましょう。みもりなら端末が自動で連動します。' },
                { step: '5', title: 'GPS端末のジオフェンスを設定', desc: '自宅・学校・通学路・習い事先にジオフェンスを設定。エリア逸脱時の通知を有効にしておきましょう。' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3 bg-blue-light rounded-lg p-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue text-white rounded-full flex items-center justify-center font-bold text-sm">{item.step}</span>
                  <div>
                    <p className="font-bold text-g800 text-sm">{item.title}</p>
                    <p className="text-sm text-g600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">防犯に強いGPS端末を選ぼう</h2>
            <p className="text-g600 mb-6 text-sm">SOS機能や不審者連動など、お子さまの安全を守る機種を比較できます。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/mimori/" className="btn-primary">みもりのレビュー</Link>
              <Link href="/knowledge/safety/" className="btn-accent">犯罪対策ページ</Link>
              <Link href="/" className="btn-accent">おすすめランキング</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
