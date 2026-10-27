import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '修学旅行にGPSを持たせるべき？持ち込みルールと活用法',
  description:
    '修学旅行にGPSを持たせる場合の結論と準備を解説します。画面のないGPS端末は許可される例がありますが、可否は学校の判断です。2泊3日で電池が持つ機種（公式の公表値）、持ち込みの確認手順、旅行中の設定、海外での注意点をまとめています。',
  keywords: ['修学旅行', 'GPS', '持たせる', '持ち込み', '見守り', '小学生', '中学生'],
  openGraph: {
    images: ['/og.png'],
    title: '修学旅行にGPSを持たせるべき？持ち込みルールと活用法',
    description: '修学旅行へのGPS端末の持ち込みルールと活用法を、出発前の準備とあわせて解説します。',
  },
};

const faqData = [
  { q: '修学旅行にGPS端末を持ち込みできますか？', a: '学校によって方針が異なります。スマートフォンは禁止されていても、画面のないGPS端末（みてねみまもりGPS、BoTトークなど）は許可される場合が多く見られます。事前に担任の先生に確認し、許可書が必要な場合は早めに提出してください。' },
  { q: 'GPS端末とスマートフォンの見守りアプリでは、どちらが適していますか？', a: '修学旅行には、GPS端末をおすすめします。スマートフォンは持ち込みを禁止している学校が多く、また通話やゲームが友達との交流の妨げになるおそれがあるためです。画面のないGPS端末であれば活動の妨げにならず、位置情報のみを保護者に送信できます。' },
  { q: '修学旅行先でGPSの電波は入りますか？', a: '国内であれば、主要な観光地や宿泊施設では、ほぼ問題なく電波が入ります。ただし、山間部や離島には電波が弱い場所もあります。事前に旅行先の電波状況を確認しておくことをおすすめします。' },
  { q: '旅行中の通知設定はどうすべきですか？', a: '修学旅行中は通常の通学時と異なり行動範囲が広いため、エリア通知（ジオフェンス）の設定は困難です。更新間隔を30分〜1時間に設定し、必要なときにアプリで位置を確認する運用をおすすめします。' },
  { q: '海外修学旅行でもGPSは使えますか？', a: '機種によって異なります。みてねみまもりGPSなど国内専用の端末は、海外では使用できません。海外での利用が必要な場合は、対応機種を選ぶか、渡航先のSIMに対応した端末をご検討ください。' },
  { q: '修学旅行中、バッテリーは持ちますか？', a: '機種のタイプで異なります。位置情報専用の機種は公式の公表値が最大約2カ月（あんしんウォッチャー、みてねみまもりGPS MG05の省エネモード、まもサーチ3の電池長持ちモード）で、2泊3日の修学旅行であれば途中で充電しなくても持つ目安です。一方、通話・ビデオ通話ができるスマートフォン型・ウォッチ型（Hamic POCKET Lは公式で約1.5日、myFirst Foneは約1〜2日）は、2泊3日では途中で充電が必要になる可能性があります。いずれも出発前にフル充電してください。' },
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
  { icon: '', title: '学校のルール確認', desc: '持ち込み許可の有無を担任の先生に確認します。許可書の提出が必要な場合は、提出期限もご確認ください。' },
  { icon: '', title: 'バッテリー準備', desc: '出発前にフル充電します。更新間隔を長めに設定し、必要に応じてモバイルバッテリーも用意してください。' },
  { icon: '', title: '収納場所の確認', desc: 'リュックのポケットなど、落としにくく邪魔にならない場所を子供と一緒に決めておきます。' },
  { icon: '', title: '電波状況の確認', desc: '旅行先の電波エリアを事前に確認します。山間部では位置情報を取得できない場合があることも想定しておきます。' },
  { icon: '', title: '通知設定の変更', desc: '旅行用に更新間隔を長めに変更します。エリア通知は無効にするか、宿泊先のみに設定します。' },
  { icon: '', title: '子供への説明', desc: '「迷子になったときのお守り」として説明します。友達に見せびらかさないよう、あわせて伝えておくことをおすすめします。' },
];

const comparison = [
  { item: '持ち込み許可', gps: '許可されやすい（画面なし）', app: '禁止している学校が多い' },
  { item: '子供への影響', gps: '操作不要で活動の妨げにならない', app: 'ゲームや通話が友達との時間の妨げになるおそれ' },
  { item: '位置精度', gps: '十分な精度（誤差10〜50m）', app: '高精度（GPS+Wi-Fi）' },
  { item: 'バッテリー', gps: '2〜7日持続', app: '1日程度（他の機能に消費）' },
  { item: 'コスト', gps: '月額500〜800円程度', app: '0円（スマートフォンの通信費内）' },
];

export default function SchoolTripPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "修学旅行にGPSを持たせるべき？持ち込みルールと活用法", "datePublished": "2026-03-15", "dateModified": "2026-10-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '修学旅行とGPS' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">修学旅行</span>
            <span className="tag-pill bg-orange text-white">GPS活用</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            修学旅行にGPSを持たせるべき？持ち込みルールと活用法
          </h1>
          <p className="text-g600 text-lg">出発前の準備と設定方法について解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border-l-4 border-blue bg-blue-light p-6 mb-10">
            <p className="font-bold text-g800 mb-2">【結論】修学旅行のGPSは「学校の許可」と「2泊3日で電池が持つか」で決まります</p>
            <ul className="text-sm text-g700 leading-relaxed space-y-1">
              <li>・<strong>持ち込みの可否は学校の判断です。</strong>スマートフォンが禁止でも、通話やゲームができない画面のないGPS端末は認められる例がありますが、必ず事前に担任の先生へご確認ください（手順は下記）。</li>
              <li>・<strong>電池は位置情報専用の機種が安心です。</strong>公式の公表値は最大約2カ月（あんしんウォッチャー、みてねみまもりGPS MG05の省エネモード時など）で、2泊3日なら途中で充電しなくても持つ目安です。通話できるスマートフォン型・ウォッチ型は約1〜2日のため、途中での充電が必要になる可能性があります。</li>
              <li>・<strong>海外への修学旅行</strong>では、国内専用の機種は使えません。海外で使える機種は<Link href="/knowledge/international/" className="text-blue-600 font-bold underline">海外で使える子供用GPS</Link>で解説しています。</li>
              <li>・機種ごとの料金・静音性まで含めた比較は<Link href="/compare/school-trip/" className="text-blue-600 font-bold underline">遠足・修学旅行向けGPS比較</Link>にまとめています。このページでは、持ち込みの確認手順と出発前の準備を中心に解説します。</li>
            </ul>
          </div>

          <h2 className="section-title">2泊3日の修学旅行で電池が持つか（公式の公表値）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">機種</th>
                  <th className="p-3 text-left border-b-2 border-blue">電池持ち（公式の公表値）</th>
                  <th className="p-3 text-left border-b-2 border-blue">2泊3日の目安</th>
                </tr>
              </thead>
              <tbody className="text-g700">
                {[
                  { name: 'あんしんウォッチャー', href: '/review/anshin-watcher/', battery: '最大約2カ月', ok: '途中の充電は不要な目安' },
                  { name: 'みてねみまもりGPS（MG05）', href: '/review/mitene/', battery: '最大約2カ月（省エネモード時）', ok: '途中の充電は不要な目安' },
                  { name: 'まもサーチ3', href: '/review/mamosearch/', battery: '最大2か月（電池長持ちモード）／最大6週間（頻度優先モード）', ok: '途中の充電は不要な目安' },
                  { name: 'BoTトーク', href: '/review/bot-talk/', battery: 'GPSプラン最長1ヶ月以上／GPS＆トークプラン最長2週以上（いずれも電池優先モード）', ok: '途中の充電は不要な目安' },
                  { name: 'Hamic POCKET L', href: '/review/hamic/', battery: '約1.5日', ok: '途中で充電が必要な可能性' },
                  { name: 'myFirst Fone', href: '/review/myfirst-fone/', battery: '約1〜2日', ok: '途中で充電が必要な可能性' },
                ].map((m) => (
                  <tr key={m.name} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold whitespace-nowrap"><Link href={m.href} className="text-blue underline">{m.name}</Link></td>
                    <td className="p-3">{m.battery}</td>
                    <td className="p-3">{m.ok}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">
            ※各社公式サイトの公表値です（当サイトが2026年10月に公式で確認した値。詳細は<Link href="/compare/battery-life/" className="underline">電池持ち比較</Link>）。公表値は更新間隔などの条件によるもので、寒さ・電波の弱い場所・位置確認の回数によって短くなることがあります。当サイトで実機の連続稼働を計測したものではありません。
          </p>

          <h2 className="section-title">修学旅行にGPSを持たせるメリット</h2>
          <p className="text-g600 mb-6">
            修学旅行は子供にとって大きな成長の機会ですが、保護者にとっては数日間離れることへの不安もあります。
            GPS端末を持たせることで、遠方でもお子さまの位置を確認でき、安心して送り出すことができます。
            特に、班行動中に迷子になった場合や、体調不良時の位置の特定に役立ちます。
          </p>

          <h2 className="section-title">持ち込みルールの確認方法</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: '学校のしおりを確認', desc: '修学旅行のしおりには、持ち物リストや禁止品目が記載されています。GPS端末について明記されていない場合は、個別に確認が必要です。' },
              { step: 2, title: '担任の先生に相談', desc: '連絡帳や面談で「画面のないGPS端末を持たせたい」と相談します。スマートフォンと異なり、許可されるケースが多く見られます。' },
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

          <h2 className="section-title">GPS端末と見守りアプリ（スマートフォン）の比較</h2>
          <div className="bg-blue-light rounded-xl p-6 mb-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-g800">
                  <th className="pb-3 font-bold">比較項目</th>
                  <th className="pb-3 font-bold">GPS端末</th>
                  <th className="pb-3 font-bold">見守りアプリ（スマートフォン）</th>
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
              { title: '対応機種の確認', desc: '海外通信に対応したGPS端末を選択します。国内専用の端末は、海外では位置情報を取得できません。' },
              { title: 'ローミング設定', desc: '海外対応端末の場合、ローミング設定を事前に有効にしておく必要があります。' },
              { title: '追加費用の確認', desc: '海外での利用時は、追加の通信費が発生する場合があります。事前に料金をご確認ください。' },
              { title: '時差への対応', desc: 'アプリの時刻表示が現地時間か日本時間かを確認します。通知のタイミングがずれる場合があるため、ご注意ください。' },
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

          <p className="text-xs text-g400 mt-4 text-right">最終更新: 2026年10月27日</p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">修学旅行に適したGPS端末</h2>
            <p className="text-g600 mb-6 text-sm">事前に準備を整え、安心して送り出せるよう、修学旅行に適したGPS端末を比較しています。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/school-trip/" className="btn-primary">遠足・修学旅行向けGPSを比較する</Link>
              <Link href="/knowledge/school-rules/" className="btn-accent">学校への持ち込みルール</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
