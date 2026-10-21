import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '遠足・修学旅行に子供GPSは持たせていい？おすすめ比較【2026年】',
  description:
    '遠足・修学旅行・校外学習に子供GPSを持たせる際の比較ガイドです。学校行事には音が鳴らない位置情報専用のタイプが適しており、事前に担任の先生へ確認することが前提です。みてねみまもりGPS・あんしんウォッチャー・ソラノメ（販売終了）を料金・電池持ち・静音性で比較し、行事ごとの注意点とよくある質問をまとめています。',
  keywords: ['子供GPS', '遠足', '修学旅行', '校外学習', '宿泊行事', '比較', '静音', '持ち込み'],
};

// 比較表データ：既存レビュー・既存比較ページ（school-silent / battery-life）の確認済みデータを転記。
// 料金・電池持ち・静音性は各社公式を2026年6月時点で確認。創作なし。
const tripData = [
  {
    name: 'みてねみまもりGPS',
    slug: '/review/mitene/',
    body: '5,280円',
    monthly: '528円（位置情報プラン）',
    battery: '最大約2カ月',
    silent: '◎ 通話・トークなしの位置情報プランは音が鳴らない',
    note: '位置情報プランは音が鳴らないため、行事に適しています。トークPlusプラン（月額748円）は音が鳴るため、行事での利用は控えることをおすすめします。',
  },
  {
    name: 'あんしんウォッチャー',
    slug: '/review/anshin-watcher/',
    body: '11,000円',
    monthly: '539円（2台目は0円）',
    battery: '最大約2カ月',
    silent: '◎ 通話・トークなし。通知音もオフ設定可',
    note: '電池持ちが長く、宿泊行事でも充電切れになりにくい機種です。兄弟で持たせる場合は、2台目の月額が0円になるため割安です。',
  },
  {
    name: 'ソラノメ（販売終了）',
    slug: '/review/soranome/',
    body: '14,520円',
    monthly: '539円',
    battery: '最大約1週間',
    silent: '位置情報専用で音が鳴らない',
    note: '2026年4月1日付の公式告知で現行端末の販売が終了しています（2026年10月17日 公式確認）。新規の購入はできません。既にお持ちの場合、電池持ちは上記2機種より短いため、宿泊行事では充電器を用意してください。',
  },
];

const eventData = [
  {
    scene: '日帰り遠足・校外学習',
    point: '引率が付くため不要とされる場合もあり、学校により可否が分かれます（要確認）。持たせる場合は、朝に満充電にしておけば1日の利用に問題はありません。ランドセルやリュックの内ポケットに入れ、音はオフに設定してください。',
  },
  {
    scene: '宿泊行事（林間学校・修学旅行）',
    point: '持ち物を一括管理する学校・持ち込み不可の学校も少なくありません（要確認）。許可される場合でも複数日にわたるため、電池持ちの長い機種を選ぶか、充電ケーブルの持参をご検討ください。校則・先生の指示を最優先してください。',
  },
];

const faqData = [
  {
    q: '遠足にGPSを持たせることはできませんか？',
    a: '一律に禁止されているわけではなく、可否は学校の判断によります。引率の先生が付く校外学習では「不要」とされたり、持ち物のルールで持ち込みを制限したりする学校もあります。持たせたい場合は、通話・トークのない音が鳴らない位置情報専用のGPSを選び、事前に担任の先生へご確認いただくことをおすすめします。',
  },
  {
    q: '修学旅行に子供GPSを持たせてもよいですか？',
    a: '宿泊行事（修学旅行・林間学校）は、持ち物を一括管理したり持ち込みを不可としたりする学校も少なくありません。判断が分かれる場面のため、必ず事前に担任の先生・学校へご確認ください。許可される場合は複数日にわたるため、電池持ちの長い機種を選ぶか、充電の用意をおすすめします。',
  },
  {
    q: '遠足や修学旅行で、GPSを持っていることは先生に気づかれますか？',
    a: '当サイトでは、隠して持たせることは想定していません。音が鳴らない位置情報専用のGPSはランドセルやリュックに入れたままでも授業・行事の妨げになりませんが、トラブルを避けるためにも、持たせる際は事前に担任の先生へ伝え、学校のルールに沿って利用することをおすすめします。',
  },
  {
    q: '行事に持たせる場合、どのようなGPSが適していますか？',
    a: '学校行事では「通話・トークがなく音が鳴らない位置情報専用」のタイプが適しています。日帰りの遠足であれば、当日の朝に満充電にすれば電池持ちはあまり問題になりません。宿泊行事では複数日にわたるため、1回の充電で最大約2カ月持つみてねみまもりGPS（位置情報プラン）やあんしんウォッチャーをおすすめします。最終的な可否は学校の判断によるため、事前にご確認ください。',
  },
  {
    q: '遠足の日だけGPSをレンタルや短期利用できますか？',
    a: '主要な子供GPSは月額制で、契約期間の縛りがない機種が多いため、必要な期間だけ契約して使うことは可能です。ただし「行事の日だけ」のための単発レンタルサービスは一般的ではありません。短期間のみ利用したい場合の考え方は、夏休みなど短期利用の記事もご参照ください。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function SchoolTripComparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: '遠足・修学旅行に持たせる子供GPS比較', datePublished: '2026-06-27', dateModified: '2026-06-27', author: { '@type': 'Person', name: '子供見守りGPS最新情報 編集部' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: '比較', href: '/compare/' }, { name: '遠足・修学旅行向けGPS比較' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">学校行事向け</span>
            <span className="tag-pill bg-orange text-white">遠足・修学旅行</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">遠足・修学旅行に子供GPSを持たせてもよい？おすすめ機種の比較</h1>
          <p className="text-g600 text-lg">校外学習・宿泊行事で一時的にGPS端末を持たせたいご家庭に向けて、可否の考え方と行事に適した機種を比較します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          {/* 要点ブロック */}
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">行事には「音が鳴らない位置情報専用」の機種を選び、事前に担任の先生へ確認することをおすすめします</h2>
            <p className="text-g600 mb-3">
              遠足・修学旅行などの学校行事に子供GPSを持たせたい場合、<strong>通話・トーク機能がなく音が鳴らない位置情報専用のタイプ</strong>が適しています。授業や行事の妨げになりにくく、ランドセルやリュックに入れたままで使えます。ただし、<strong>行事での持ち込み可否は学校の判断によります</strong>。引率が付く校外学習では「不要」とされる場合があり、宿泊行事では持ち物を一括管理して持ち込み不可とする学校も少なくありません。
            </p>
            <p className="text-g600 text-sm">
              判断が分かれる場面のため、<strong>持たせる前に必ず担任の先生・学校へ確認</strong>してください。シーン別の可否の目安や先生への確認に使える質問例は、<Link href="/knowledge/school-rules/" className="text-blue underline">GPSの学校持ち込みルール</Link>でまとめています。
            </p>
          </div>

          {/* 行事向けおすすめ比較表 */}
          <h2 className="section-title">行事向けおすすめ子供GPS比較表</h2>
          <p className="text-g600 mb-4 text-sm">学校行事に持たせやすい「音が鳴らない位置情報専用」を中心に、料金・電池持ち・静音性で比較しました。料金・仕様は、各社公式サイトで2026年6月時点に確認した値です。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">機種</th>
                  <th className="p-3 text-left border-b-2 border-blue">本体価格</th>
                  <th className="p-3 text-left border-b-2 border-blue">月額</th>
                  <th className="p-3 text-left border-b-2 border-blue">電池持ち</th>
                  <th className="p-3 text-left border-b-2 border-blue">静音性（行事向き）</th>
                </tr>
              </thead>
              <tbody>
                {tripData.map((m) => (
                  <tr key={m.name} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800 whitespace-nowrap"><Link href={m.slug} className="text-blue underline">{m.name}</Link></td>
                    <td className="p-3 text-g700 whitespace-nowrap">{m.body}</td>
                    <td className="p-3 text-g700 whitespace-nowrap">{m.monthly}</td>
                    <td className="p-3 text-g700 whitespace-nowrap">{m.battery}</td>
                    <td className="p-3 text-g600 text-xs">{m.silent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">※料金は本体価格・月額ともに（税込）です。電池持ちは各社公式の公表値にもとづく目安で、位置情報の更新頻度や利用状況により変動します。みてねみまもりGPSのトークPlusプラン（月額748円）は音が鳴るため、上表では位置情報プランの値を記載しています。最新の料金・仕様は各公式サイトでご確認ください（2026年6月確認）。</p>

          <h2 className="section-title">各機種の「行事向け」ポイント</h2>
          <div className="space-y-3 mb-8">
            {tripData.map((m) => (
              <div key={m.name} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1"><Link href={m.slug} className="text-blue underline">{m.name}</Link>（電池持ち：{m.battery}）</h3>
                <p className="text-sm text-g600">{m.note}</p>
              </div>
            ))}
          </div>

          {/* 行事別の注意 */}
          <h2 className="section-title">行事別の注意点（日帰り遠足／宿泊・修学旅行）</h2>
          <div className="space-y-3 mb-4">
            {eventData.map((e) => (
              <div key={e.scene} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{e.scene}</h3>
                <p className="text-sm text-g600">{e.point}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-g500 mb-8">※行事での持ち込み可否は各学校の校則・判断によります。特に宿泊行事は判断が分かれるため、必ず事前に担任の先生・学校へご確認ください。</p>

          {/* FAQ */}
          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          {/* school-rules への導線 */}
          <div className="mt-8 card-hover p-5 bg-blue-light rounded-2xl">
            <h3 className="font-bold text-g800 mb-2">学校の持ち込みルールの確認</h3>
            <p className="text-sm text-g600 mb-3">登下校・遠足・宿泊行事などシーン別の可否早見表、先生への確認に使える質問例、申請理由の例文をまとめています。</p>
            <Link href="/knowledge/school-rules/" className="btn-primary inline-block">GPSの学校持ち込みルールを見る</Link>
          </div>

          {/* 相互リンク */}
          <div className="mt-10">
            <h3 className="font-bold text-g800 mb-4">用途別の比較・関連記事</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/compare/cost/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">コスパ・料金比較</p>
                <p className="text-xs text-g600">3年総額で最も安い機種の比較</p>
              </Link>
              <Link href="/compare/after-school/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">学童・習い事の行き帰り比較</p>
                <p className="text-xs text-g600">一人で通う際の見守りに適した機種</p>
              </Link>
              <Link href="/compare/school-silent/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">学校向け静音GPS比較</p>
                <p className="text-xs text-g600">音が鳴らない機種を3年総額で比較</p>
              </Link>
              <Link href="/compare/battery-life/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">電池持ち比較</p>
                <p className="text-xs text-g600">充電頻度が少ない機種ランキング</p>
              </Link>
              <Link href="/knowledge/school-rules/" className="card-hover p-4 block">
                <p className="font-bold text-g800 text-sm mb-1">学校持ち込みルール</p>
                <p className="text-xs text-g600">シーン別可否表・確認用の質問例</p>
              </Link>
            </div>
          </div>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">機種ごとの詳細</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/mitene/" className="btn-primary">みてねみまもりGPS</Link>
              <Link href="/review/anshin-watcher/" className="btn-accent">あんしんウォッチャー</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
