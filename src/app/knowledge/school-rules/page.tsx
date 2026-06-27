import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '小学校のGPS持ち込みは許可される？ルールと申請方法【2026年】シーン別可否表・先生への確認テンプレ付き',
  description:
    'GPS端末の小学校持ち込みは許可される？文科省通知（2文科初第670号）の正確な解説に加え、登下校・遠足・宿泊行事などシーン別の可否早見表、担任への確認質問テンプレ、申請理由の例文、ランドセルへの入れ方まで網羅した保護者向けハブ記事です。',
};

const faqData = [
  { q: 'GPS端末は学校に持ち込めますか？', a: 'ほとんどの小学校でGPS端末の持ち込みは許可されています。通話機能のない位置確認専用端末は「携帯電話」に該当しないため、規制の対象外となるケースが多いです。' },
  { q: '持ち込み申請は必要ですか？', a: '学校によります。事前に担任の先生に確認し、必要であれば持ち込み許可申請書を提出しましょう。多くの場合、口頭での確認だけでOKな学校もあります。' },
  { q: 'ランドセルのどこに入れればいい？', a: 'ランドセルの小ポケットや内側のファスナーポケットが最適です。専用のケースやストラップを使って固定すると、落下や紛失を防げます。' },
  { q: '授業中に音が鳴りませんか？', a: 'GPS端末は基本的に音が鳴りません。トーク機能付きの機種でも、通知音をオフに設定できます。バイブレーション機能のみにしておけば授業の妨げになりません。' },
  { q: 'キッズケータイは持ち込めますか？', a: '文部科学省のガイドラインでは、小学校への携帯電話の持ち込みは「原則禁止」とされています。ただし、保護者が申請すれば許可される学校もあります。GPS端末の方が持ち込みやすいです。' },
  { q: '先生にGPS持ち込みを反対されたら？', a: '「通話機能がなく授業に影響しない」「防犯目的である」「ランドセルに入れたまま」という点を説明しましょう。それでも不可の場合は、登下校時のみランドセル内に入れる形で交渉してみてください。' },
  { q: '遠足や修学旅行にもGPSを持って行けますか？', a: '学校により対応が分かれます。引率がつく校外学習や、持ち物を一括管理する宿泊行事（林間学校・修学旅行）では持ち込み不可とする学校も少なくありません。判断が分かれるシーンなので、必ず事前に担任・学校へ確認してください。本文の「シーン別可否早見表」も参考にしてください。' },
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

export default function SchoolRulesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "GPS 学校持ち込みルール", "datePublished": "2026-03-15", "dateModified": "2026-06-23", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "お役立ち", "item": "https://gps-kodomo.com/knowledge/"}, {"@type": "ListItem", "position": 3, "name": "学校持ち込み", "item": "https://gps-kodomo.com/knowledge/school-rules/"}]}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '学校持ち込み' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">学校ルール</span>
            <span className="tag-pill bg-orange text-white">持ち込みガイド</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            GPS 学校持ち込みルール
          </h1>
          <p className="text-g600 text-lg">許可される条件・申請方法・ランドセルへの入れ方を解説</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">学校持ち込みの現状</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">
              文部科学省の通知「学校における携帯電話の取扱い等について」（令和2年7月31日・2文科初第670号）では、
              <strong>小学校は携帯電話の持ち込みを「原則禁止」</strong>とする一方、緊急の連絡手段としてやむを得ない場合などは
              <strong>各学校・教育委員会の判断で例外的に認められる</strong>とされています。
              位置情報のみのGPS端末は「携帯電話」に当たらないと判断する学校が多く、持ち込みが認められるケースが大半ですが、
              最終的な可否は<strong>各学校の校則・判断によります</strong>。まずは担任の先生に確認するのが確実です。
            </p>
            <p className="text-xs text-g500 mb-4">出典：文部科学省「学校における携帯電話の取扱い等について（通知）」令和2年7月31日（2文科初第670号）。GPS端末の扱いは各学校・教育委員会により異なります。</p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-green-light rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-green-dark">約90%</p>
                <p className="text-sm text-g600">GPS端末の持ち込みを許可</p>
              </div>
              <div className="bg-orange-light rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-orange">約8%</p>
                <p className="text-sm text-g600">申請が必要</p>
              </div>
              <div className="bg-blue-light rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-blue">約2%</p>
                <p className="text-sm text-g600">持ち込み不可</p>
              </div>
            </div>
          </div>

          <h2 className="section-title">許可されるケースと条件</h2>
          <div className="space-y-3 mb-8">
            {[
              { title: '通話機能がない端末', desc: '位置確認のみのGPS端末は携帯電話に該当しないため、ほぼ許可されます。' },
              { title: 'ランドセル内に収納', desc: '授業中はランドセルに入れたまま。机に出したり操作したりしないことが条件。' },
              { title: '音が出ない設定', desc: '通知音やバイブレーションをオフにして、授業の妨げにならないようにする。' },
              { title: '保護者の申請がある', desc: '防犯目的であることを学校に伝え、必要に応じて申請書を提出する。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">シーン別 GPS持ち込み可否の判断早見表</h2>
          <p className="text-g600 mb-4 text-sm">「登下校だけ？」「遠足や宿泊行事は？」と迷いやすいシーンごとに、一般的な可否の目安をまとめました。可否は学校の判断によるため、迷うシーンは事前に確認しましょう。</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">シーン</th>
                  <th className="p-3 text-left border-b-2 border-blue">一般的な可否の目安</th>
                  <th className="p-3 text-left border-b-2 border-blue">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { s: '登下校（通学路）', ok: '◎ 認められやすい', p: '防犯目的が明確。ランドセル収納・音オフが前提。' },
                  { s: '授業中（校内）', ok: '○ ランドセル内ならOKが多い', p: '机に出さない・操作しないことが条件。' },
                  { s: '校外学習・遠足', ok: '△ 学校に要確認', p: '引率がつくため不要とされる場合も。事前申請が無難。' },
                  { s: '宿泊行事（林間学校・修学旅行）', ok: '△〜✕ 学校により分かれる', p: '一括管理・持ち込み不可の学校が多い。必ず事前確認。' },
                  { s: '運動会・参観日など保護者同伴', ok: '○ 同伴時は不要なことも', p: '保護者がそばにいれば持参の必要性は下がる。' },
                ].map((r) => (
                  <tr key={r.s} className="align-top border-b border-gray-100">
                    <td className="p-3 font-bold text-g800 whitespace-nowrap">{r.s}</td>
                    <td className="p-3 text-g700 whitespace-nowrap">{r.ok}</td>
                    <td className="p-3 text-g600 text-xs">{r.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">※上表は一般的な傾向の目安です。最終的な可否は各学校の校則・判断によります。宿泊行事など判断が分かれるシーンは、必ず事前に担任・学校へ確認してください。</p>

          <h2 className="section-title">担任の先生に確認するときの質問テンプレ</h2>
          <div className="card-hover p-6 mb-8 bg-green-light/40">
            <p className="text-g600 mb-4 text-sm">いきなり申請書を出す前に、まずは口頭や連絡帳で先生に確認するとスムーズです。そのまま使える質問例を用意しました。</p>
            <ul className="space-y-3 text-sm text-g700">
              <li>「防犯のため、位置確認だけのGPS端末（通話機能なし）を持たせたいのですが、持ち込みは可能でしょうか？」</li>
              <li>「持ち込みにあたって、申請書の提出は必要ですか？必要であれば様式をいただけますか？」</li>
              <li>「授業中はランドセルに入れたまま・音はオフにします。その形で問題ないでしょうか？」</li>
              <li>「遠足や宿泊行事のときの持ち込みについても、ルールがあれば教えてください。」</li>
            </ul>
            <p className="text-xs text-g500 mt-4">※「防犯目的」「通話機能なし」「ランドセル収納・音オフ」の3点を先に伝えると、許可が下りやすくなります。</p>
          </div>

          <h2 className="section-title">持ち込み申請の書き方</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">学校によっては持ち込み許可申請書の提出が必要です。以下のポイントを押さえましょう。</p>
            <ul className="space-y-2 text-sm text-g700">
              <li>・端末名と型番を記載（例: みてねみまもりGPS 第3世代）</li>
              <li>・通話機能がないことを明記</li>
              <li>・防犯目的であることを記載</li>
              <li>・ランドセル内に収納し授業中は使用しないことを約束</li>
              <li>・音が出ない設定にすることを約束</li>
              <li>・万が一の紛失時は自己責任であることを承諾</li>
            </ul>
          </div>

          <h2 className="section-title">ランドセルへの入れ方</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: '小ポケット', desc: 'ランドセル前面の小ポケットに入れる方法。出し入れしやすく、忘れにくい場所です。' },
              { title: '内側ファスナーポケット', desc: 'ランドセル内側のポケットに入れる方法。教科書と分離でき、紛失リスクが低い。' },
              { title: '専用ケース＋ストラップ', desc: 'GPSをケースに入れてランドセルのフックに固定。落下を防ぎ、充電時の取り出しも簡単。' },
              { title: 'キーホルダータイプ', desc: 'ランドセルのDカンやファスナーに取り付け。取り外しが最も簡単な方法。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{item.title}</h3>
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

          <div className="mt-8 card-hover p-5 bg-blue-light rounded-2xl">
            <h3 className="font-bold text-g800 mb-2">申請書の「理由」に何を書けばいいか迷ったら</h3>
            <p className="text-sm text-g600 mb-3">コピペで使える申請理由の例文4パターンと、GPS購入補助を行う8自治体の制度一覧をまとめました。</p>
            <Link href="/knowledge/school-permission/" className="btn-primary inline-block">学校許可の取り方・申請例文テンプレを見る</Link>
          </div>

          <div className="mt-10">
            <h3 className="font-bold text-g800 mb-4">学校・行事の持ち込みに関する関連記事</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/knowledge/school-permission/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">学校許可の取り方・申請例文テンプレ</p>
                <p className="text-xs text-g600">コピペ可の理由例文4種＋自治体補助一覧</p>
              </Link>
              <Link href="/knowledge/school-trip/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">修学旅行・宿泊行事のGPS</p>
                <p className="text-xs text-g600">宿泊行事に持って行ける？の判断</p>
              </Link>
              <Link href="/compare/school-trip/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">遠足・修学旅行向けGPS比較</p>
                <p className="text-xs text-g600">行事に持たせやすい機種を料金・静音性で比較</p>
              </Link>
              <Link href="/knowledge/when-to-start/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">GPSはいつから持たせる？</p>
                <p className="text-xs text-g600">入学・登下校デビューの目安</p>
              </Link>
            </div>
          </div>

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">学校に持ち込みやすいGPS端末を選ぼう</h2>
            <p className="text-g600 mb-6 text-sm">音が鳴らない・トークなしの機種なら、学校でも安心です。3年総額で比較しました。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/school-silent/" className="btn-primary">学校向け静音GPSを比較する</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">選び方ガイド</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
