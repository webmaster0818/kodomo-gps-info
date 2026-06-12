import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供用GPSの保険・補償制度｜紛失・故障時の対応',
  description:
    '子供用GPS端末の保険・補償制度を徹底解説。各メーカーの補償制度比較表、紛失時の対処法（位置追跡・遠隔ロック）、故障時の修理・交換対応、保険加入のメリット・デメリットまで網羅。',
  keywords: ['子供GPS', '保険', '補償', '紛失', '故障', '修理', '交換'],
  openGraph: {
    title: '子供用GPSの保険・補償制度｜紛失・故障時の対応',
    description: '子供用GPS端末の保険・補償制度を比較。紛失・故障時の対処法を詳しく解説。',
  },
};

const faqData = [
  { q: '子供がGPS端末をなくした場合、位置を追跡できますか？', a: 'はい、GPS端末の電源が入っていてバッテリーが残っていれば、アプリから最後の位置を確認できます。ただし、電池が切れている場合は最後に通信した地点のみ表示されます。紛失に気づいたらすぐにアプリで位置を確認し、行動履歴から落とした場所を推測しましょう。' },
  { q: '補償制度に加入していなくても修理できますか？', a: '補償制度未加入の場合、有償修理となります。修理費用は故障内容によりますが、3,000〜8,000円程度が一般的です。ただし、水没や重度の破損は修理不可で新品購入が必要になるケースもあります。補償加入済みなら無料または少額で交換できることが多いです。' },
  { q: '補償制度はいつ加入できますか？', a: '多くのメーカーは端末購入時のみ加入可能です。後から加入できるメーカーは限られています。端末購入時に補償オプションがある場合は、その場で加入を検討することをおすすめします。' },
  { q: '補償の対象外になるケースは？', a: '一般的に「故意の破損」「改造」「自然災害」「盗難（警察届出なし）」「紛失（補償対象外のメーカーあり）」は補償対象外です。水没については、防水仕様内の水濡れは対象、水没（水中に沈めた場合）は対象外とするメーカーが多いです。詳細は各メーカーの補償規約を確認してください。' },
  { q: '中古で購入した端末に補償はつきますか？', a: '中古購入の場合、メーカー補償は引き継げないのが一般的です。フリマアプリやオークションで購入した端末は補償対象外となるため、故障時は有償修理または買い替えが必要です。補償の安心が欲しい場合は新品購入をおすすめします。' },
  { q: '端末の保険（モバイル保険等）は子供用GPSに使えますか？', a: '一部のモバイル保険は子供用GPS端末も対象としています。月額数百円でスマホやタブレットと合わせて3台まで補償する保険もあります。ただし「通信契約のある端末のみ対象」等の条件がある場合があるため、加入前に保険会社に確認しましょう。' },
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

const warrantyData = [
  { name: 'みてねみまもりGPS', warranty: '購入後1年', extOption: 'なし', lossCover: '対象外', breakCover: '初期不良のみ無償交換', cost: '無料（標準保証のみ）' },
  { name: 'あんしんウォッチャー', warranty: '購入後1年', extOption: 'あんしん補償（月額165円）', lossCover: '3,300円で交換', breakCover: '3,300円で交換', cost: '月額165円' },
  { name: 'BoTトーク', warranty: '購入後1年', extOption: 'あんしん補償パック', lossCover: '半額で再購入', breakCover: '無償交換（年1回）', cost: '月額220円' },
  { name: 'まもサーチ', warranty: '購入後1年', extOption: 'なし', lossCover: '対象外', breakCover: '有償修理', cost: '無料（標準保証のみ）' },
  { name: 'myFirst Fone R2', warranty: '購入後1年', extOption: 'myFirst Care', lossCover: '50%OFFで再購入', breakCover: '無償修理（年2回）', cost: '月額330円' },
];

const lossSteps = [
  { step: 1, title: 'アプリで最後の位置を確認', desc: 'まずアプリを開いて、GPS端末の最新の位置情報を確認します。バッテリーが残っていればリアルタイムの位置が表示されます。行動履歴から移動ルートをたどり、落とした可能性のある場所を特定しましょう。' },
  { step: 2, title: '音を鳴らす（対応機種のみ）', desc: '一部の機種にはアプリから端末の音を鳴らす機能があります。近くにある場合は音を頼りに見つけられます。' },
  { step: 3, title: '学校・施設に問い合わせ', desc: '通学路や学校、習い事の施設に落とし物として届いていないか確認しましょう。お子さまに最後にGPSを確認した場所を聞くことも重要です。' },
  { step: 4, title: '警察に届出', desc: '見つからない場合は最寄りの交番に遺失届を出しましょう。補償制度を利用する場合、警察への届出が必要なメーカーもあります。' },
  { step: 5, title: '補償制度を確認・利用', desc: '補償に加入している場合は、メーカーに連絡して交換手続きを行います。届出番号が必要な場合があるため、警察への届出を先に済ませておきましょう。' },
];

const breakSteps = [
  { step: 1, title: '症状を確認', desc: '電源が入らない、充電できない、位置情報が更新されないなど、具体的な症状を確認します。再起動（電源の入れ直し）で解決する場合もあります。' },
  { step: 2, title: 'メーカーサポートに連絡', desc: '公式サイトのサポート窓口に連絡し、症状を伝えます。遠隔診断で解決する場合もあります。保証期間内であれば無償修理・交換の対象になることが多いです。' },
  { step: 3, title: '修理・交換の手続き', desc: '端末を郵送して修理または交換します。代替機の貸出はないメーカーがほとんどのため、修理期間中（1〜2週間）は見守りができなくなる点に注意が必要です。' },
];

const insurancePros = [
  { type: 'メリット', items: ['紛失・故障時の費用負担が大幅に軽減される', '精神的な安心感（子供が壊しても大丈夫）', '補償加入者限定の優先サポートがある場合も', '年間の補償コストは端末買い替え費用より安い'] },
  { type: 'デメリット', items: ['月額費用が加算される（年間2,000〜4,000円）', '使わなければ掛け捨てになる', '補償回数に制限がある（年1〜2回が一般的）', '紛失は対象外のメーカーもある'] },
];

export default function InsurancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供用GPSの保険・補償制度｜紛失・故障時の対応", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "お役立ち", "item": "https://gps-kodomo.com/knowledge/"}, {"@type": "ListItem", "position": 3, "name": "保険・補償制度", "item": "https://gps-kodomo.com/knowledge/insurance/"}]}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '保険・補償制度' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">保険・補償</span>
            <span className="tag-pill bg-blue text-white">紛失・故障対応</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供用GPSの保険・補償制度
          </h1>
          <p className="text-g600 text-lg">紛失・故障時の対応｜各メーカーの補償比較</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-g600 mb-8">
            子供にGPS端末を持たせていると、「なくした」「壊した」というトラブルは避けて通れません。特に小学校低学年は端末の扱いに慣れておらず、紛失や落下による故障のリスクが高い年齢です。このページでは、各メーカーの補償制度、紛失時・故障時の具体的な対処法、保険加入のメリット・デメリットを詳しく解説します。事前に知っておくことで、万が一の時にも慌てずに対応できます。
          </p>

          <h2 className="section-title">各メーカーの補償制度比較表</h2>
          <p className="text-sm text-g500 mb-3">※ 2026年5月時点の情報。最新の補償内容は各メーカー公式サイトでご確認ください。</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-2 text-left font-bold text-g800">機種名</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">標準保証</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">延長補償</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">紛失時</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">故障時</th>
                  <th className="py-3 px-2 text-right font-bold text-g800">補償費用</th>
                </tr>
              </thead>
              <tbody>
                {warrantyData.map((w) => (
                  <tr key={w.name} className="border-b border-g100">
                    <td className="py-3 px-2 font-semibold text-g700">{w.name}</td>
                    <td className="py-3 px-2 text-center text-g600">{w.warranty}</td>
                    <td className="py-3 px-2 text-center text-g600">{w.extOption}</td>
                    <td className="py-3 px-2 text-center text-g600">{w.lossCover}</td>
                    <td className="py-3 px-2 text-center text-g600">{w.breakCover}</td>
                    <td className="py-3 px-2 text-right text-g600">{w.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">紛失時の対処法</h2>
          <div className="space-y-4 mb-8">
            {lossSteps.map((s) => (
              <div key={s.step} className="flex gap-4 items-start card-hover p-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center font-bold text-sm">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-bold text-g800 text-sm">{s.title}</h3>
                  <p className="text-sm text-g600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">故障時の修理・交換対応</h2>
          <div className="space-y-4 mb-8">
            {breakSteps.map((s) => (
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

          <h2 className="section-title">保険加入のメリット・デメリット</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {insurancePros.map((p) => (
              <div key={p.type} className={`card-hover p-5 ${p.type === 'メリット' ? 'border-l-4 border-blue' : 'border-l-4 border-orange'}`}>
                <h3 className="font-bold text-g800 mb-3">{p.type}</h3>
                <ul className="space-y-2">
                  {p.items.map((item) => (
                    <li key={item} className="text-sm text-g600 flex items-start gap-2">
                      <span className={p.type === 'メリット' ? 'text-blue' : 'text-orange'}>●</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-blue-light rounded-xl p-5 mb-8">
            <h3 className="font-bold text-g800 mb-2">結論: 補償加入すべき？</h3>
            <p className="text-sm text-g600">
              お子さまが低学年（小1〜小3）の場合は、紛失・故障リスクが高いため補償加入をおすすめします。月額165〜330円の追加で、万が一の際に数千円の出費を避けられます。高学年で端末の扱いに慣れている場合は、標準保証のみでも十分です。
            </p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">万が一に備えた安心のGPS選びを</h2>
            <p className="text-g600 mb-6 text-sm">補償制度も含めたトータルコストで、最適な端末を選びましょう。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/cost-annual/" className="btn-primary">年間コスト比較</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">GPS選び方ガイド</Link>
            </div>
          </div>

          <p className="text-xs text-g400 mt-6 text-center">最終更新: 2026年5月</p>
        </div>
      </section>
    </>
  );
}
