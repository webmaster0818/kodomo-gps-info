import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '小学校のGPS持ち込みは許可される？ルールと申請方法【2026年】シーン別可否表・先生への確認テンプレ付き',
  description:
    'GPS端末の小学校への持ち込みが許可されるかについて、文部科学省の通知（2文科初第670号）の内容を解説します。登下校・遠足・宿泊行事などシーン別の可否早見表、担任の先生への確認に使える質問例、申請理由の例文、ランドセルへの入れ方もまとめた保護者向けの記事です。',
};

const faqData = [
  { q: 'GPS端末は学校に持ち込めますか？', a: 'ほとんどの小学校でGPS端末の持ち込みは許可されています。通話機能のない位置確認専用端末は「携帯電話」に該当しないため、規制の対象外となるケースが多く見られます。' },
  { q: '持ち込み申請は必要ですか？', a: '学校により異なります。事前に担任の先生へ確認し、必要な場合は持ち込み許可申請書を提出してください。口頭での確認のみで足りる学校も多くあります。' },
  { q: 'ランドセルのどこに入れればよいですか？', a: 'ランドセルの小ポケットや内側のファスナーポケットが適しています。専用のケースやストラップで固定すると、落下や紛失を防げます。' },
  { q: '授業中に音が鳴ることはありませんか？', a: 'GPS端末は基本的に音が鳴りません。トーク機能付きの機種でも、通知音をオフに設定できます。バイブレーション機能のみにしておけば、授業の妨げにはなりません。' },
  { q: 'キッズケータイは持ち込めますか？', a: '文部科学省のガイドラインでは、小学校への携帯電話の持ち込みは「原則禁止」とされています。ただし、保護者の申請により許可する学校もあります。GPS端末のほうが、持ち込みの許可を得やすい傾向があります。' },
  { q: 'GPSを学校に無断で持たせた場合、気づかれますか？', a: '音や光が出ない位置情報専用のGPS端末は、ランドセルに入れたままであれば、日常的に気づかれることはほとんどありません。ただし、持ち物検査や紛失時にトラブルになる可能性があります。当サイトでは、無断で持たせるのではなく、本ページの例文を使って事前に学校へ確認・申請することをおすすめします。多くの学校で正規に許可されている持ち物です。' },
  { q: '先生にGPSの持ち込みを反対された場合は、どうすればよいですか？', a: '「通話機能がなく授業に影響しない」「防犯目的である」「ランドセルに入れたままにする」という点をご説明ください。それでも認められない場合は、登下校時のみランドセル内に入れる形での相談をおすすめします。' },
  { q: '遠足や修学旅行にもGPSを持って行けますか？', a: '学校により対応が分かれます。引率が付く校外学習や、持ち物を一括管理する宿泊行事（林間学校・修学旅行）では、持ち込み不可とする学校も少なくありません。判断が分かれる場面のため、必ず事前に担任の先生・学校へご確認ください。本文の「シーン別可否早見表」もあわせてご参照ください。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "GPS端末の学校持ち込みルール", "datePublished": "2026-03-15", "dateModified": "2026-08-02", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '学校持ち込み' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">学校ルール</span>
            <span className="tag-pill bg-orange text-white">持ち込みガイド</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            GPS端末の学校持ち込みルール
          </h1>
          <p className="text-g600 text-lg">GPS端末が学校で許可される条件、申請方法、ランドセルへの入れ方を解説します。</p>
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
              通話機能の無い位置情報のみのGPS端末を「携帯電話」と同じに扱うかどうかは、学校・教育委員会によって異なり、
              最終的な可否は<strong>各学校の校則・判断によります</strong>。まずは担任の先生にご確認いただくことをおすすめします。
            </p>
            <p className="text-xs text-g500">出典：文部科学省「学校における携帯電話の取扱い等について（通知）」令和2年7月31日（2文科初第670号）。GPS端末の扱いは各学校・教育委員会により異なります。全国の学校での許可の割合を示す公的な統計は、当サイトでは確認できていません。</p>
          </div>

          <h2 className="section-title">許可されるケースと条件</h2>
          <div className="space-y-3 mb-8">
            {[
              { title: '通話機能がない端末', desc: '位置確認のみのGPS端末は、携帯電話と区別して持ち込みを認める学校があります。' },
              { title: 'ランドセル内に収納', desc: '授業中はランドセルに入れたままにし、机に出したり操作したりしないことが条件です。' },
              { title: '音が出ない設定', desc: '通知音やバイブレーションをオフにし、授業の妨げにならないようにします。' },
              { title: '保護者の申請がある', desc: '防犯目的であることを学校に伝え、必要に応じて申請書を提出します。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">シーン別 GPS持ち込み可否の判断早見表</h2>
          <p className="text-g600 mb-4 text-sm">「登下校のみか」「遠足や宿泊行事はどうか」など判断に迷いやすい場面ごとに、一般的な可否の目安をまとめました。可否は学校の判断によるため、迷う場面は事前にご確認ください。</p>
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
                  { s: '登下校（通学路）', ok: '◎ 認められやすい', p: '防犯目的が明確です。ランドセルへの収納と音のオフが前提です。' },
                  { s: '授業中（校内）', ok: '○ ランドセル内なら認められることが多い', p: '机に出さない・操作しないことが条件です。' },
                  { s: '校外学習・遠足', ok: '△ 学校に要確認', p: '引率が付くため不要とされる場合があります。事前の申請をおすすめします。' },
                  { s: '宿泊行事（林間学校・修学旅行）', ok: '△〜✕ 学校により分かれる', p: '一括管理または持ち込み不可とする学校が多いため、必ず事前にご確認ください。' },
                  { s: '運動会・参観日など保護者同伴', ok: '○ 同伴時は不要な場合あり', p: '保護者がそばにいれば、持参の必要性は下がります。' },
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
          <p className="text-xs text-g500 mb-8">※上表は一般的な傾向の目安です。最終的な可否は各学校の校則・判断によります。宿泊行事など判断が分かれる場面は、必ず事前に担任の先生・学校へご確認ください。</p>

          <h2 className="section-title">担任の先生への確認に使える質問例</h2>
          <div className="card-hover p-6 mb-8 bg-green-light/40">
            <p className="text-g600 mb-4 text-sm">申請書を提出する前に、まず口頭や連絡帳で先生に確認すると円滑に進みます。そのまま使える質問例を掲載しています。</p>
            <ul className="space-y-3 text-sm text-g700">
              <li>「防犯のため、位置確認だけのGPS端末（通話機能なし）を持たせたいのですが、持ち込みは可能でしょうか？」</li>
              <li>「持ち込みにあたって、申請書の提出は必要ですか？必要であれば様式をいただけますか？」</li>
              <li>「授業中はランドセルに入れたまま・音はオフにします。その形で問題ないでしょうか？」</li>
              <li>「遠足や宿泊行事のときの持ち込みについても、ルールがあれば教えてください。」</li>
            </ul>
            <p className="text-xs text-g500 mt-4">※「防犯目的」「通話機能なし」「ランドセル収納・音オフ」の3点を先にお伝えすると、許可を得やすくなります。</p>
          </div>

          <h2 className="section-title">持ち込み申請の書き方</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">学校によっては持ち込み許可申請書の提出が必要です。記載にあたっては、以下の点をご確認ください。</p>
            <ul className="space-y-2 text-sm text-g700">
              <li>・端末名と型番を記載（例: みてねみまもりGPS 第3世代）</li>
              <li>・通話機能がないことを明記</li>
              <li>・防犯目的であることを記載</li>
              <li>・ランドセル内に収納し授業中は使用しないことを約束</li>
              <li>・音が出ない設定にすることを約束</li>
              <li>・万が一の紛失時は自己責任であることを承諾</li>
            </ul>
          </div>

          <h2 className="section-title">申請理由の例文（そのまま使える文例）</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4 text-sm">申請書や連絡帳にそのまま使える文例です。お子さまの状況に合わせて調整してください。</p>
            <div className="space-y-4">
              <div className="rounded-lg p-4" style={{ background: 'rgba(59,130,246,0.06)' }}>
                <p className="font-bold text-g800 text-sm mb-2">例文A（通学距離・低学年）</p>
                <p className="text-sm text-g700 leading-relaxed">「自宅から学校まで徒歩で約20分と距離があり、入学して間もないため、登下校の安全確認を目的としてGPS端末（通話機能なし・音の出ない設定）をランドセルに入れて持たせたく、許可をお願いいたします。校内で取り出したり操作したりすることはありません。」</p>
              </div>
              <div className="rounded-lg p-4" style={{ background: 'rgba(59,130,246,0.06)' }}>
                <p className="font-bold text-g800 text-sm mb-2">例文B（通学路の交通・防犯不安）</p>
                <p className="text-sm text-g700 leading-relaxed">「通学路に交通量の多い交差点があり、また周辺で不審者情報が出ていることから、保護者が位置を確認できるGPS端末の携行を希望します。端末は通話・カメラ機能のない位置情報専用のもので、ランドセルの内ポケットに入れたままにし、学校生活の妨げにはなりません。」</p>
              </div>
              <div className="rounded-lg p-4" style={{ background: 'rgba(59,130,246,0.06)' }}>
                <p className="font-bold text-g800 text-sm mb-2">例文C（放課後の学童・習い事への移動）</p>
                <p className="text-sm text-g700 leading-relaxed">「放課後に学童保育（習い事）へ一人で移動するため、到着確認を目的にGPS端末を持たせたく存じます。音や光が出ない設定にし、管理は家庭の責任で行います。紛失時に学校へご迷惑をおかけしないことを承諾のうえ、許可をお願いいたします。」</p>
              </div>
              <div className="rounded-lg p-4" style={{ background: 'rgba(59,130,246,0.06)' }}>
                <p className="font-bold text-g800 text-sm mb-2">例文D（キッズケータイ・携帯電話の持ち込み申請）</p>
                <p className="text-sm text-g700 leading-relaxed">「共働きのため下校後の連絡手段が必要であり、キッズ携帯の持ち込みを申請いたします。校内では電源を切り（マナーモードに設定し）ランドセルから取り出さないこと、使用は登下校時の連絡・位置確認に限ることを家庭で指導いたします。学校の規則に従い、適切に管理いたしますので、ご許可をお願いいたします。」</p>
              </div>
              <div className="rounded-lg p-4" style={{ background: 'rgba(59,130,246,0.06)' }}>
                <p className="font-bold text-g800 text-sm mb-2">例文E（祖父母宅・ひとりでの留守番が多い家庭）</p>
                <p className="text-sm text-g700 leading-relaxed">「下校後、祖父母宅へ立ち寄る日と自宅で留守番をする日があり、どちらに向かったかを保護者が把握するためにGPS端末の携行を希望いたします。端末は位置情報専用で音は出ず、お子さま自身が操作する必要もないため、学校生活に影響はありません。」</p>
              </div>
              <div className="rounded-lg p-4" style={{ background: 'rgba(59,130,246,0.06)' }}>
                <p className="font-bold text-g800 text-sm mb-2">例文F（災害・引き渡し時の所在確認）</p>
                <p className="text-sm text-g700 leading-relaxed">「地震等の災害時や下校時刻の急な変更時に、子供の所在をすみやかに確認し、確実な引き取りにつなげることを目的として、GPS端末の携行を申請いたします。日常の校内では一切使用せず、ランドセルに入れたままにいたします。」</p>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-blue-200 p-5" style={{ background: 'rgba(59,130,246,0.03)' }}>
              <p className="font-bold text-g800 text-sm mb-2">📝 あわせて添えると許可を得やすい「家庭での約束（誓約文）」の例</p>
              <p className="text-sm text-g700 leading-relaxed mb-2">申請理由に以下のような誓約を添えると、学校側が懸念する点（授業妨害・トラブル・紛失責任）にあらかじめお答えできます。</p>
              <ul className="text-sm text-g700 leading-relaxed space-y-1">
                <li>・校内では取り出さず、音や光が出ない状態で携行させます</li>
                <li>・お子さま自身に操作させず、確認は保護者側のアプリのみで行います</li>
                <li>・紛失・破損時は家庭の責任とし、学校に対応をお願いいたしません</li>
                <li>・学校の指示があった場合は、持ち込み方法を速やかに見直します</li>
              </ul>
            </div>

            <div className="mt-6">
              <p className="font-bold text-g800 text-sm mb-2">🔇 主要機種の「音が出るか」早見表（各公式サイト確認・2026年8月2日時点）</p>
              <p className="text-sm text-g600 mb-3">「音や光が出ない設定にします」と申請するには、実際に無音で運用できる機種かどうかを確認する必要があります。主要6機種の公式情報をまとめました。</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-g200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-blue-light text-left">
                      <th className="px-3 py-2.5">機種</th>
                      <th className="px-3 py-2.5">音が出る機能</th>
                      <th className="px-3 py-2.5">学校向けの静音運用</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-g100"><td className="px-3 py-2.5 font-bold whitespace-nowrap">あんしんウォッチャー</td><td className="px-3 py-2.5">なし（スピーカー非内蔵・バイブなし）</td><td className="px-3 py-2.5">設定不要で常時無音（公式FAQ明記）</td></tr>
                    <tr className="border-t border-g100"><td className="px-3 py-2.5 font-bold whitespace-nowrap">soranome（販売終了）</td><td className="px-3 py-2.5">なし（「音が鳴る機能はございません」・SOS発信も無音）</td><td className="px-3 py-2.5">設定不要で常時無音</td></tr>
                    <tr className="border-t border-g100"><td className="px-3 py-2.5 font-bold whitespace-nowrap">みまもりGPS（旧どこかなGPS）</td><td className="px-3 py-2.5">通常運用ではほぼなし（電源オフ時の音等のみ）</td><td className="px-3 py-2.5">「電源を切るとき以外に音は鳴りません」（公式FAQ）</td></tr>
                    <tr className="border-t border-g100"><td className="px-3 py-2.5 font-bold whitespace-nowrap">BoTトーク</td><td className="px-3 py-2.5">あり（トーク再生・着信音）</td><td className="px-3 py-2.5">サイレントモードが標準（トークも無音で受信）</td></tr>
                    <tr className="border-t border-g100"><td className="px-3 py-2.5 font-bold whitespace-nowrap">みてねみまもりGPS</td><td className="px-3 py-2.5">機種による（MB06/MT05はボイスメッセージあり）</td><td className="px-3 py-2.5">通知音オン/オフ切替可（「学校では音を鳴らさずに使えます」と公式案内）</td></tr>
                    <tr className="border-t border-g100"><td className="px-3 py-2.5 font-bold whitespace-nowrap">イマドコサーチ（キッズケータイ）</td><td className="px-3 py-2.5">あり（検索時のGPS測位音・バイブ）</td><td className="px-3 py-2.5">GPS測位音オフ設定・マナーモードで消音可（公式に機種別手順）</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-g600 mt-2">※各社公式サイト・公式FAQの記載にもとづきます（2026年8月2日確認）。仕様は機種・ファームウェアで変わる場合があるため、申請前に最新の公式情報をご確認ください。</p>
            </div>
            <p className="text-sm text-g600 mt-4">状況別の例文は、<Link href="/knowledge/school-permission/" className="text-blue-600 font-bold underline">学校許可の取り方・申請例文テンプレ（4パターン＋自治体補助一覧）</Link> をご覧ください。</p>
          </div>

          <h2 className="section-title">ランドセルへの入れ方</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: '小ポケット', desc: 'ランドセル前面の小ポケットに入れる方法です。出し入れしやすく、忘れにくい場所です。' },
              { title: '内側ファスナーポケット', desc: 'ランドセル内側のポケットに入れる方法です。教科書と分けて収納でき、紛失のリスクが低い方法です。' },
              { title: '専用ケース＋ストラップ', desc: 'GPS端末をケースに入れ、ランドセルのフックに固定する方法です。落下を防げるうえ、充電時の取り出しも簡単です。' },
              { title: 'キーホルダータイプ', desc: 'ランドセルのDカンやファスナーに取り付ける方法です。取り外しが最も簡単です。' },
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
            <h3 className="font-bold text-g800 mb-2">申請書の「理由」の書き方に迷われた場合</h3>
            <p className="text-sm text-g600 mb-3">そのまま使える申請理由の例文4パターンと、GPS購入補助を行う8自治体の制度一覧をまとめています。</p>
            <Link href="/knowledge/school-permission/" className="btn-primary inline-block">学校許可の取り方・申請例文テンプレを見る</Link>
          </div>

          <div className="mt-10">
            <h3 className="font-bold text-g800 mb-4">学校・行事の持ち込みに関する関連記事</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/knowledge/school-permission/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">学校許可の取り方・申請例文テンプレ</p>
                <p className="text-xs text-g600">そのまま使える理由例文4種と自治体補助一覧</p>
              </Link>
              <Link href="/knowledge/school-trip/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">修学旅行・宿泊行事のGPS</p>
                <p className="text-xs text-g600">宿泊行事への持参可否の判断</p>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">学校に持ち込みやすいGPS端末の選び方</h2>
            <p className="text-g600 mb-6 text-sm">音が鳴らない機種やトーク機能のない機種であれば、学校でも安心してご利用いただけます。3年総額で比較しています。</p>
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
