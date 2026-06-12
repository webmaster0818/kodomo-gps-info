import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'GPSの学校持ち込み許可の取り方【2026年】申請理由の例文テンプレと自治体の補助制度一覧',
  description:
    '子供用GPSの学校持ち込み許可の取り方を解説。文部科学省通知の正確な整理、申請書に書く理由のコピペOK例文4パターン、断られたときの対処法、GPS購入補助・配布を行う8自治体の制度一覧（公式出典付き・2026年6月調査）まで網羅します。',
};

const reasonTemplates = [
  {
    title: '例文① 通学距離が長い場合',
    text: '自宅から学校までの通学距離が約1.5kmと長く、低学年の子どもが一人で歩く区間があるため、登下校時の安全確認を目的として、通話機能のないGPS端末（位置情報確認専用）をランドセルに入れて持たせることを許可いただきたく申請いたします。校内では一切操作せず、音も鳴らない設定にしております。',
  },
  {
    title: '例文② 交通量・通学路に不安がある場合',
    text: '通学路に交通量の多い県道の横断があり、過去にヒヤリとする場面がありました。登下校の見守りのため、通話・メール機能のないGPS端末をランドセルの内ポケットに入れて持たせたく、許可をお願いいたします。端末は授業中を含め音や光を発しない設定で、子ども自身が操作することはありません。',
  },
  {
    title: '例文③ 放課後に学童・習い事へ移動する場合',
    text: '放課後は週3回、学童保育から習い事へ子どもが一人で移動するため、保護者が到着を確認できるよう、位置情報確認専用のGPS端末の携行を許可いただきたく申請いたします。通話機能はなく、学校生活に影響を与えるものではありません。管理は家庭の責任で行います。',
  },
  {
    title: '例文④ 共働きで帰宅時間の確認が必要な場合',
    text: '保護者が共働きのため、下校後に子どもが一人で帰宅し留守番をする時間があります。帰宅の確認と防犯のため、通話機能のないGPS端末をランドセルに入れて持たせることを許可いただけますようお願いいたします。紛失・破損時は家庭の責任で対応いたします。',
  },
];

const subsidies = [
  { city: '東京都港区', name: 'GPS機能付き見守り端末貸与事業', detail: 'GPS端末を貸与。端末費・通信費は原則無償', target: '区立小学校の児童（申込制）' },
  { city: '東京都立川市', name: '低学年児童向けGPS端末の購入助成', detail: '購入費を上限10,000円/台補助（月額料は対象外）', target: '小1〜小3' },
  { city: '千葉県松戸市', name: '児童の安全対策GPS端末購入支援事業', detail: '購入費を上限10,000円/台補助（月額料は対象外）', target: '小1〜小6' },
  { city: '岐阜県岐阜市', name: 'GPSを活用した登下校見守り支援事業補助金', detail: '初期費用を上限5,000円減額（登録事業者のサービス加入が条件）', target: '新小1' },
  { city: '静岡県藤枝市', name: '児童生徒見守り推進事業', detail: 'GPS見守りサービスの初期費用を最大5,000円補助', target: '年長（入学前2ヶ月）〜小中学生' },
  { city: '大阪府箕面市', name: '見守りシステム「otta」', detail: '市立小中学校の全児童生徒に見守り端末を無償配付（位置確認アプリは月額330円）', target: '市立小中学校の全学年' },
  { city: '兵庫県高砂市', name: '子どもGPS見守り支援事業', detail: '初期費用を9,000円まで補助（利用料は自己負担）', target: '小1' },
  { city: '兵庫県加古川市', name: '見守りサービス（BLEタグ×見守りカメラ）', detail: '通学路の見守りカメラと連動し位置履歴を通知。新小1は1年間無料キャンペーンあり', target: '子ども全般' },
];

const faqData = [
  { q: 'GPS端末の学校持ち込みは文部科学省で禁止されていますか？', a: '文部科学省の通知（令和2年7月31日）で原則持ち込み禁止とされているのは「携帯電話」です。通話機能のないGPS専用端末について直接定めた記述は通知内で確認されておらず、扱いは各学校の判断になります。多くの学校では事前確認や申請書の提出で持ち込みが認められています。' },
  { q: '許可申請の理由には何を書けばいいですか？', a: '「通学距離」「通学路の交通事情」「放課後の一人での移動」「共働きで帰宅確認が必要」など、具体的で客観的な事情を書くのが基本です。あわせて「通話機能がない」「校内では操作しない・音が鳴らない」「管理は家庭の責任」の3点を明記すると許可されやすくなります。本ページのコピペOK例文をご活用ください。' },
  { q: '学校に断られた場合はどうすればいいですか？', a: 'まず断られた理由（音・トーク機能・紛失時の責任など）を確認しましょう。トーク機能付き端末がNGなら通話機能のない位置確認専用端末に変える、音の懸念には無音設定を説明する、紛失責任は家庭で負うと明記する、といった対処で再相談する余地があります。それでも難しい場合は、校門までの携行やGPS内蔵防犯ブザーへの変更も選択肢です。' },
  { q: 'GPS端末の購入に補助金が出る自治体はありますか？', a: 'あります。2026年6月時点の当サイト調査では、立川市・松戸市（上限1万円補助）、高砂市（9,000円）、岐阜市・藤枝市（5,000円）などが購入・初期費用を補助しており、港区は端末を無償貸与、箕面市は全市立小中学生に見守り端末を無償配付しています。お住まいの自治体名+「GPS 補助」で公式サイトを確認してみてください。' },
  { q: '申請書はいつ提出すればいいですか？', a: '入学説明会〜入学直後のタイミングが最も一般的です。年度途中でも、連絡帳や個人面談で担任の先生に相談すれば案内してもらえます。学校所定の「携帯電話等持参許可申請書」がある場合はそれに記入し、ない場合は連絡帳での相談から始めましょう。' },
  { q: 'キッズケータイとGPS端末はどちらが許可されやすいですか？', a: '一般的にGPS端末の方が許可されやすい傾向があります。文科省通知の原則禁止対象が「携帯電話」であるのに対し、通話・メール機能のないGPS端末は授業妨害やトラブルの懸念が小さいためです。学校がキッズケータイ禁止の場合の代替手段としてもGPS端末は有力です。' },
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

export default function SchoolPermissionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "GPSの学校持ち込み許可の取り方｜申請理由の例文テンプレと自治体の補助制度一覧", "datePublished": "2026-06-12", "dateModified": "2026-06-12", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "お役立ち", "item": "https://gps-kodomo.com/knowledge/"}, {"@type": "ListItem", "position": 3, "name": "学校許可の取り方", "item": "https://gps-kodomo.com/knowledge/school-permission/"}]}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '学校許可の取り方' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">申請テンプレ付き</span>
            <span className="tag-pill bg-green text-white">自治体補助一覧</span>
            <span className="tag-pill bg-orange text-white">2026年6月調査</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            GPSの学校持ち込み許可の取り方
          </h1>
          <p className="text-g600 text-lg">申請理由のコピペOK例文4パターン＋GPS補助を行う8自治体の制度一覧</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">まず結論：GPS端末は「原則禁止」の対象ではない</h2>
          <div className="card-hover p-5 mb-8">
            <p className="text-sm text-g600 mb-3">
              文部科学省の通知（令和2年7月31日「学校における携帯電話の取扱い等について」）で小学校への持ち込みが原則禁止とされているのは<strong>「携帯電話」</strong>です。
              通知の中で例示されているのは子ども向け携帯電話やフィルタリング付き携帯電話であり、<strong>通話機能のないGPS専用端末の扱いを直接定めた記述は確認されていません</strong>。
            </p>
            <p className="text-sm text-g600 mb-3">
              つまり「GPSは文科省が禁止している」も「文科省が許可している」も不正確で、<strong>最終判断は各学校</strong>です。
              実際には、無音で授業に影響せず、通話・メールによるトラブルの心配もないため、事前の確認や申請書の提出で認められるケースが大半です。
              なお、やむを得ない事情がある場合に保護者から学校長へ申請して例外的に認める、という枠組み自体は平成21年の通知から続いています。
            </p>
            <p className="text-xs text-g400">出典: 文部科学省 平成21年1月30日通知（20文科初第1156号・文科省公式サイト掲載）、令和2年7月31日初等中等教育局長通知（鳥取県教育委員会公表資料より原文確認）。2026年6月12日確認</p>
          </div>

          <h2 className="section-title">許可をもらうまでの4ステップ</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { step: '1', title: '連絡帳や面談で先生に確認', desc: 'まず担任の先生に「通話機能のないGPS端末を持たせたい」と相談。口頭確認だけでOKの学校も多くあります。' },
              { step: '2', title: '必要なら申請書を提出', desc: '学校所定の「携帯電話等持参許可申請書」がある場合は記入して提出。理由欄は下の例文テンプレを活用してください。' },
              { step: '3', title: '学校のルールに合わせて設定', desc: '無音設定・ランドセルの内ポケットに入れたまま・校内では操作しない、が基本3原則です。' },
              { step: '4', title: '紛失・破損は家庭の責任と明確化', desc: '学校側が最も懸念するのは紛失時の管理責任。「家庭の責任で管理します」と一筆添えるとスムーズです。' },
            ].map((s) => (
              <div key={s.step} className="card-hover p-5">
                <p className="text-2xl font-extrabold text-blue mb-2">STEP {s.step}</p>
                <h3 className="font-bold text-g800 text-sm mb-1">{s.title}</h3>
                <p className="text-sm text-g600">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">申請理由の書き方＋コピペOK例文4パターン</h2>
          <p className="text-g600 mb-4 text-sm">
            理由欄のポイントは「具体的・客観的な事情」+「通話機能がない」+「校内で音が鳴らない・操作しない」+「管理は家庭の責任」の4点を入れることです。状況に合わせて書き換えてお使いください。
          </p>
          <div className="space-y-4 mb-8">
            {reasonTemplates.map((t) => (
              <div key={t.title} className="card-hover p-5">
                <h3 className="font-bold text-blue text-sm mb-2">{t.title}</h3>
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="text-sm text-g700 leading-relaxed">{t.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">学校にNGと言われたときの対処法</h2>
          <div className="card-hover p-5 mb-8">
            <ul className="space-y-3 text-sm text-g700">
              <li><strong>音への懸念</strong> → GPS専用端末は基本的に音が鳴らないこと、通知音オフ設定にしていることを説明する</li>
              <li><strong>トーク機能付き端末への懸念</strong> → 通話・ボイスメッセージ機能のない位置確認専用端末（あんしんウォッチャー等）に変更して再相談する</li>
              <li><strong>紛失時の責任問題</strong> → 「紛失・破損は家庭の責任で対応する」と申請書に明記する</li>
              <li><strong>それでも不可の場合</strong> → 校門までの携行に限定する、GPS内蔵の防犯ブザーに変更する、登下校時のみランドセル外ポケットで運用するなどの妥協案を提示する</li>
            </ul>
          </div>

          <h2 className="section-title">GPS端末の配布・購入補助を行う自治体一覧【2026年6月調査】</h2>
          <p className="text-g600 mb-4 text-sm">
            「学校にGPSを持たせていいのか」という不安への一番の答えは、<strong>行政自身がGPS携行を前提とした制度を持っている</strong>という事実です。当サイトが各自治体の公式サイトで確認できた制度をまとめました（2026年6月12日時点）。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-g200 bg-blue-light">
                  <th className="py-2 px-2 text-left text-g700">自治体</th>
                  <th className="py-2 px-2 text-left text-g700">制度</th>
                  <th className="py-2 px-2 text-left text-g700">内容</th>
                  <th className="py-2 px-2 text-left text-g700">対象</th>
                </tr>
              </thead>
              <tbody>
                {subsidies.map((s) => (
                  <tr key={s.city} className="border-b border-g100">
                    <td className="py-2 px-2 font-semibold text-g700 whitespace-nowrap">{s.city}</td>
                    <td className="py-2 px-2 text-g600">{s.name}</td>
                    <td className="py-2 px-2 text-g600">{s.detail}</td>
                    <td className="py-2 px-2 text-g600 whitespace-nowrap">{s.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-2">
            出典: 各自治体公式サイト（港区・立川市・松戸市・岐阜市・藤枝市・箕面市・高砂市・加古川市）を2026年6月12日に確認。条件・金額は年度により変わるため、申請前に必ず各自治体の最新情報をご確認ください。
          </p>
          <p className="text-sm text-g600 mb-8">
            このほかにも同様の制度を設ける自治体は増えています。お住まいの自治体名+「GPS 補助」「見守り 端末」で検索し、公式サイトを確認してみてください。港区のように教育委員会がGPS端末を貸与している例は、学校へのGPS携行が公的に認められている分かりやすい根拠になります。
          </p>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-green-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">許可が取れたら、次は端末選び</h2>
            <p className="text-g600 mb-6 text-sm">学校に持たせやすいのは、通話機能のない無音の位置確認専用GPSです。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">おすすめGPSランキングを見る</Link>
              <Link href="/review/anshin-watcher/" className="btn-accent">あんしんウォッチャーのレビュー</Link>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-bold text-g800 mb-4">関連記事</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/knowledge/school-rules/" className="card-hover p-4 block">
                <p className="font-bold text-sm text-g800">GPS 学校持ち込みルール</p>
                <p className="text-xs text-g500">許可される条件と校内での扱い</p>
              </Link>
              <Link href="/knowledge/school-trip/" className="card-hover p-4 block">
                <p className="font-bold text-sm text-g800">遠足・校外学習でのGPS</p>
                <p className="text-xs text-g500">行事の日の持たせ方</p>
              </Link>
              <Link href="/knowledge/when-to-start/" className="card-hover p-4 block">
                <p className="font-bold text-sm text-g800">GPSは何歳から必要？</p>
                <p className="text-xs text-g500">学年別の判断基準</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
