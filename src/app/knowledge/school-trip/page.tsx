import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '修学旅行にGPSを持たせるべき？持ち込みルールと活用法',
  description:
    '修学旅行にGPS端末を持たせるべきかを解説。学校の持ち込みルール確認方法、GPS端末と見守りアプリの比較、旅行中の通知設定、海外修学旅行での注意点を紹介します。',
  keywords: ['修学旅行', 'GPS', '持たせる', '持ち込み', '見守り', '小学生', '中学生'],
  openGraph: {
    title: '修学旅行にGPSを持たせるべき？持ち込みルールと活用法',
    description: '修学旅行へのGPS持ち込みルールと活用法を解説。安心して送り出すための準備ガイド。',
  },
};

const faqData = [
  { q: '修学旅行にGPS端末を持ち込みできますか？', a: '学校によって方針が異なります。スマートフォンは禁止でも、画面のないGPS端末（みてねみまもりGPS、BoTなど）は許可される場合が多いです。事前に担任の先生に確認し、許可書が必要な場合は早めに提出しましょう。' },
  { q: 'GPS端末とスマホの見守りアプリ、どちらがいい？', a: '修学旅行にはGPS端末がおすすめです。スマホは持ち込み禁止の学校が多く、また通話やゲームで友達との交流の妨げになる恐れがあります。画面のないGPS端末なら邪魔にならず、位置情報だけを保護者に送信できます。' },
  { q: '修学旅行先でGPSの電波は入りますか？', a: '国内であれば、主要な観光地や宿泊施設ではほぼ問題なく電波が入ります。ただし、山間部や離島では電波が弱い場所もあります。事前に旅行先の電波状況を確認しておくと安心です。' },
  { q: '旅行中の通知設定はどうすべきですか？', a: '修学旅行中は通常の通学時と異なり、行動範囲が広いためジオフェンスの設定は困難です。更新間隔を30分〜1時間に設定し、気になった時にアプリで位置確認する程度がおすすめです。' },
  { q: '海外修学旅行でもGPSは使えますか？', a: '機種によります。みてねみまもりGPSなど国内専用の端末は海外では使えません。海外対応が必要な場合は、対応機種を選ぶか、渡航先のSIMに対応した端末を検討しましょう。' },
  { q: 'バッテリーは修学旅行中持ちますか？', a: 'ほとんどのGPS端末は更新間隔を長め（30分〜1時間）に設定すれば、2泊3日程度の修学旅行であればバッテリーが持ちます。念のため、出発前にフル充電し、モバイルバッテリーも持たせると安心です。' },
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

const checkPoints = [
  { icon: '📋', title: '学校のルール確認', desc: '持ち込み許可の有無を担任に確認。許可書の提出が必要な場合は期限を確認しましょう。' },
  { icon: '🔋', title: 'バッテリー準備', desc: '出発前にフル充電。更新間隔を長めに設定し、必要に応じてモバイルバッテリーも用意。' },
  { icon: '🎒', title: '収納場所の確認', desc: 'リュックのポケットなど、落としにくく邪魔にならない場所を子供と一緒に決めておきます。' },
  { icon: '📡', title: '電波状況の確認', desc: '旅行先の電波エリアを事前にチェック。山間部では位置情報が取得できない場合も想定しておきます。' },
  { icon: '⚙️', title: '通知設定の変更', desc: '旅行用に更新間隔を長めに変更。ジオフェンスは無効にするか、宿泊先のみに設定。' },
  { icon: '👦', title: '子供への説明', desc: '「迷子になった時のお守り」として説明。友達に見せびらかさないよう伝えておきましょう。' },
];

const comparison = [
  { item: '持ち込み許可', gps: '許可されやすい（画面なし）', app: '禁止の学校が多い' },
  { item: '子供への影響', gps: '操作不要で活動の妨げにならない', app: 'ゲームや通話で友達との時間を阻害する恐れ' },
  { item: '位置精度', gps: '十分な精度（誤差10〜50m）', app: '高精度（GPS+Wi-Fi）' },
  { item: 'バッテリー', gps: '2〜7日持続', app: '1日程度（他の機能に消費）' },
  { item: 'コスト', gps: '月額500〜800円程度', app: '0円（スマホの通信費内）' },
];

export default function SchoolTripPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "修学旅行にGPSを持たせるべき？持ち込みルールと活用法", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "お役立ち", "item": "https://gps-kodomo.com/knowledge/"}, {"@type": "ListItem", "position": 3, "name": "修学旅行とGPS", "item": "https://gps-kodomo.com/knowledge/school-trip/"}]}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '修学旅行とGPS' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">修学旅行</span>
            <span className="tag-pill bg-orange text-white">GPS活用</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            修学旅行にGPSを持たせるべき？持ち込みルールと活用法
          </h1>
          <p className="text-g600 text-lg">安心して送り出すための準備と設定ガイド</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">修学旅行にGPSを持たせるメリット</h2>
          <p className="text-g600 mb-6">
            修学旅行は子供にとって大きな成長の機会ですが、保護者にとっては数日間離れることへの不安もあります。
            GPS端末を持たせることで、遠方でもお子さまの位置を確認でき、安心して送り出すことができます。
            特に班行動で迷子になるリスクや、体調不良時の位置特定に役立ちます。
          </p>

          <h2 className="section-title">持ち込みルールの確認方法</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: '学校のしおりを確認', desc: '修学旅行のしおりに持ち物リストや禁止品目が記載されています。GPS端末について明記されていない場合は個別に確認が必要です。' },
              { step: 2, title: '担任の先生に相談', desc: '連絡帳や面談で「画面のないGPS端末を持たせたい」と相談。スマホと異なり許可されるケースが多いです。' },
              { step: 3, title: '必要に応じて許可書を提出', desc: '学校によっては持ち込み許可書の提出が求められます。端末の型番や目的を記入します。' },
              { step: 4, title: '先生に端末を見せる', desc: '実物を見せることで「通話やゲームができない端末」と理解してもらいやすくなります。' },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start card-hover p-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center font-bold text-sm">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-bold text-g800 text-sm">{s.title}</h3>
                  <p className="text-sm text-g600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">GPS端末 vs 見守りアプリ（スマホ）</h2>
          <div className="bg-blue-light rounded-xl p-6 mb-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-g800">
                  <th className="pb-3 font-bold">比較項目</th>
                  <th className="pb-3 font-bold">GPS端末</th>
                  <th className="pb-3 font-bold">見守りアプリ（スマホ）</th>
                </tr>
              </thead>
              <tbody className="text-g600">
                {comparison.map((c) => (
                  <tr key={c.item} className="border-t border-g200">
                    <td className="py-2 font-medium text-g800">{c.item}</td>
                    <td className="py-2">{c.gps}</td>
                    <td className="py-2">{c.app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">修学旅行前の準備チェックリスト</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {checkPoints.map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-2xl">{item.icon}</p>
                <div>
                  <h3 className="font-bold text-g800">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">海外修学旅行の場合</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: '対応機種の確認', desc: '海外通信に対応したGPS端末を選択。国内専用端末は海外では位置情報を取得できません。' },
              { title: 'ローミング設定', desc: '海外対応端末の場合、ローミング設定を事前に有効にしておく必要があります。' },
              { title: '追加費用の確認', desc: '海外利用時は追加の通信費が発生する場合があります。事前に料金を確認しましょう。' },
              { title: '時差への対応', desc: 'アプリの時刻表示が現地時間か日本時間かを確認。通知タイミングのズレに注意。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">修学旅行も安心のGPS見守り</h2>
            <p className="text-g600 mb-6 text-sm">準備万端で安心して送り出しましょう。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/school-rules/" className="btn-primary">学校への持ち込みルール</Link>
              <Link href="/knowledge/battery/" className="btn-accent">バッテリー持ち比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
