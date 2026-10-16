import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'GPSの学校持ち込み許可の取り方【2026年】申請理由の例文テンプレと自治体の補助制度一覧',
  description:
    '子供用GPSの学校持ち込み許可を得るための手順を解説します。文部科学省通知の整理、申請書に記載する理由のそのまま使える例文4パターン、許可が得られなかった場合の対処法、GPS端末の購入補助・配布を行う8自治体の制度一覧（公式出典を記載・2026年6月調査）を掲載しています。',
};

const reasonTemplates = [
  {
    title: '例文① 通学距離が長い場合',
    text: '自宅から学校までの通学距離が約1.5kmと長く、低学年の子供が一人で歩く区間があるため、登下校時の安全確認を目的として、通話機能のないGPS端末（位置情報確認専用）をランドセルに入れて持たせることを許可いただきたく申請いたします。校内では一切操作せず、音も鳴らない設定にしております。',
  },
  {
    title: '例文② 交通量・通学路に不安がある場合',
    text: '通学路に交通量の多い県道の横断があり、過去に危険を感じる場面がありました。登下校の見守りのため、通話・メール機能のないGPS端末をランドセルの内ポケットに入れて持たせたく、許可をお願いいたします。端末は授業中を含め音や光を発しない設定で、子供自身が操作することはありません。',
  },
  {
    title: '例文③ 放課後に学童・習い事へ移動する場合',
    text: '放課後は週3回、学童保育から習い事へ子供が一人で移動するため、保護者が到着を確認できるよう、位置情報確認専用のGPS端末の携行を許可いただきたく申請いたします。通話機能はなく、学校生活に影響を与えるものではありません。管理は家庭の責任で行います。',
  },
  {
    title: '例文④ 共働きで帰宅時間の確認が必要な場合',
    text: '保護者が共働きのため、下校後に子供が一人で帰宅し留守番をする時間があります。帰宅の確認と防犯のため、通話機能のないGPS端末をランドセルに入れて持たせることを許可いただけますようお願いいたします。紛失・破損時は家庭の責任で対応いたします。',
  },
];

const subsidies = [
  { city: '東京都港区', name: 'GPS機能付き見守り端末貸与事業', detail: 'GPS端末を貸与（端末費・通信費は原則無償）', target: '区立小学校の児童（申込制）' },
  { city: '東京都立川市', name: '低学年児童向けGPS端末の購入助成', detail: '購入費を上限10,000円/台補助（月額料は対象外）', target: '小1〜小3' },
  { city: '千葉県松戸市', name: '児童の安全対策GPS端末購入支援事業', detail: '購入費を上限10,000円/台補助（月額料は対象外）', target: '小1〜小6' },
  { city: '岐阜県岐阜市', name: 'GPSを活用した登下校見守り支援事業補助金', detail: '初期費用を上限5,000円減額（登録事業者のサービス加入が条件）', target: '新小1' },
  { city: '静岡県藤枝市', name: '児童生徒見守り推進事業', detail: 'GPS見守りサービスの初期費用を最大5,000円補助', target: '年長（入学前2カ月）〜小中学生' },
  { city: '大阪府箕面市', name: '見守りシステム「otta」', detail: '市立小中学校の全児童生徒に見守り端末を無償配付（位置確認アプリは月額330円）', target: '市立小中学校の全学年' },
  { city: '兵庫県高砂市', name: '子どもGPS見守り支援事業', detail: '初期費用を9,000円まで補助（利用料は自己負担）', target: '小1' },
  { city: '兵庫県加古川市', name: '見守りサービス（BLEタグ×見守りカメラ）', detail: '通学路の見守りカメラと連動して位置履歴を通知（新小1は1年間無料キャンペーンあり）', target: '子供全般' },
];

const faqData = [
  { q: 'GPS端末の学校持ち込みは文部科学省で禁止されていますか？', a: '文部科学省の通知（令和2年7月31日）で原則持ち込み禁止とされているのは「携帯電話」です。通話機能のないGPS専用端末について直接定めた記述は通知内で確認されておらず、扱いは各学校の判断となります。多くの学校では、事前の確認や申請書の提出により持ち込みが認められています。' },
  { q: '許可申請の理由には何を書けばいいですか？', a: '「通学距離」「通学路の交通事情」「放課後の一人での移動」「共働きで帰宅確認が必要」など、具体的かつ客観的な事情を記載することが基本です。あわせて「通話機能がない」「校内では操作しない・音が鳴らない」「管理は家庭の責任」の3点を明記すると、許可を得やすくなります。本ページのそのまま使える例文をご活用ください。' },
  { q: '学校に断られた場合はどうすればいいですか？', a: 'まず、許可されなかった理由（音・トーク機能・紛失時の責任など）をご確認ください。トーク機能付き端末が認められない場合は通話機能のない位置確認専用端末に変更する、音への懸念には無音設定を説明する、紛失時の責任は家庭で負うと明記する、といった対応により再度相談できる場合があります。それでも難しい場合は、校門までの携行やGPS内蔵の防犯ブザーへの変更も選択肢となります。' },
  { q: 'GPS端末の購入に補助金が出る自治体はありますか？', a: 'あります。2026年6月時点の当サイト調査では、立川市・松戸市（上限1万円補助）、高砂市（9,000円）、岐阜市・藤枝市（5,000円）などが購入・初期費用を補助しており、港区は端末を無償貸与、箕面市は全市立小中学生に見守り端末を無償配付しています。お住まいの自治体名と「GPS 補助」で検索し、公式サイトをご確認ください。' },
  { q: '申請書はいつ提出すればいいですか？', a: '入学説明会から入学直後の時期に提出するのが最も一般的です。年度の途中でも、連絡帳や個人面談で担任の先生に相談すれば、手続きを案内してもらえます。学校所定の「携帯電話等持参許可申請書」がある場合はそれに記入し、ない場合は連絡帳での相談から始めることをおすすめします。' },
  { q: 'キッズケータイとGPS端末はどちらが許可されやすいですか？', a: '一般的にGPS端末の方が許可されやすい傾向があります。文科省通知の原則禁止対象が「携帯電話」であるのに対し、通話・メール機能のないGPS端末は授業妨害やトラブルの懸念が小さいためです。学校でキッズケータイが禁止されている場合も、GPS端末は有力な代替手段となります。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "GPSの学校持ち込み許可の取り方｜申請理由の例文と自治体の補助制度一覧", "datePublished": "2026-06-12", "dateModified": "2026-06-12", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '学校許可の取り方' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">申請例文を掲載</span>
            <span className="tag-pill bg-green text-white">自治体補助一覧</span>
            <span className="tag-pill bg-orange text-white">2026年6月調査</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            GPSの学校持ち込み許可の取り方
          </h1>
          <p className="text-g600 text-lg">申請理由のそのまま使える例文4パターンと、GPS端末の補助を行う8自治体の制度一覧を掲載しています。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">要点：GPS端末は「原則禁止」の対象ではありません</h2>
          <div className="card-hover p-5 mb-8">
            <p className="text-sm text-g600 mb-3">
              文部科学省の通知（令和2年7月31日「学校における携帯電話の取扱い等について」）で小学校への持ち込みが原則禁止とされているのは<strong>「携帯電話」</strong>です。
              通知の中で例示されているのは子供向け携帯電話やフィルタリング付き携帯電話であり、<strong>通話機能のないGPS専用端末の扱いを直接定めた記述は確認されていません</strong>。
            </p>
            <p className="text-sm text-g600 mb-3">
              したがって、「GPSは文科省が禁止している」「文科省が許可している」のいずれも正確ではなく、<strong>最終的な判断は各学校が行います</strong>。
              実際には、無音で授業に影響せず、通話・メールによるトラブルの懸念もないため、事前の確認や申請書の提出により認められるケースが大半です。
              なお、やむを得ない事情がある場合に保護者から学校長へ申請して例外的に認める、という枠組み自体は平成21年の通知から続いています。
            </p>
            <p className="text-xs text-g400">出典: 文部科学省 平成21年1月30日通知（20文科初第1156号・文科省公式サイト掲載）、令和2年7月31日初等中等教育局長通知（鳥取県教育委員会公表資料より原文確認）。2026年6月12日確認</p>
          </div>

          <h2 className="section-title">許可を得るまでの4つの手順</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { step: '1', title: '連絡帳や面談で先生に確認', desc: 'まず担任の先生に「通話機能のないGPS端末を持たせたい」と相談します。口頭での確認のみで認められる学校も多くあります。' },
              { step: '2', title: '必要なら申請書を提出', desc: '学校所定の「携帯電話等持参許可申請書」がある場合は、記入して提出します。理由欄には下記の例文をご活用ください。' },
              { step: '3', title: '学校のルールに合わせて設定', desc: '無音に設定する、ランドセルの内ポケットに入れたままにする、校内では操作しない、の3点が基本となります。' },
              { step: '4', title: '紛失・破損は家庭の責任と明確化', desc: '学校側が最も懸念するのは、紛失時の管理責任です。「家庭の責任で管理します」と一筆添えると、手続きが円滑に進みます。' },
            ].map((s) => (
              <div key={s.step} className="card-hover p-5">
                <p className="text-2xl font-extrabold text-blue mb-2">STEP {s.step}</p>
                <h3 className="font-bold text-g800 text-sm mb-1">{s.title}</h3>
                <p className="text-sm text-g600">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">申請理由の書き方とそのまま使える例文4パターン</h2>
          <p className="text-g600 mb-4 text-sm">
            理由欄には、「具体的・客観的な事情」「通話機能がない」「校内で音が鳴らない・操作しない」「管理は家庭の責任」の4点を記載することが重要です。状況に合わせて書き換えてお使いください。
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

          <h2 className="section-title">学校から許可が得られなかった場合の対処法</h2>
          <div className="card-hover p-5 mb-8">
            <ul className="space-y-3 text-sm text-g700">
              <li><strong>音への懸念</strong> → GPS専用端末は基本的に音が鳴らないこと、通知音をオフに設定していることを説明します</li>
              <li><strong>トーク機能付き端末への懸念</strong> → 通話・ボイスメッセージ機能のない位置確認専用端末（あんしんウォッチャー等）に変更し、再度相談します</li>
              <li><strong>紛失時の責任問題</strong> → 「紛失・破損は家庭の責任で対応する」と申請書に明記します</li>
              <li><strong>それでも認められない場合</strong> → 校門までの携行に限定する、GPS内蔵の防犯ブザーに変更する、登下校時のみランドセルの外ポケットで運用するなどの代替案を提示します</li>
            </ul>
          </div>

          <h2 className="section-title">GPS端末の配布・購入補助を行う自治体一覧【2026年6月調査】</h2>
          <p className="text-g600 mb-4 text-sm">
            「学校にGPS端末を持たせてよいのか」という不安に対する有力な根拠は、<strong>行政自身がGPS端末の携行を前提とした制度を設けている</strong>という事実です。当サイトが各自治体の公式サイトで確認できた制度を、以下にまとめています（2026年6月12日時点）。
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
            出典: 各自治体公式サイト（港区・立川市・松戸市・岐阜市・藤枝市・箕面市・高砂市・加古川市）を2026年6月12日に確認しています。条件・金額は年度により変わるため、申請前に必ず各自治体の最新情報をご確認ください。
          </p>
          <p className="text-sm text-g600 mb-8">
            このほかにも、同様の制度を設ける自治体は増えています。お住まいの自治体名と「GPS 補助」「見守り 端末」で検索し、公式サイトをご確認ください。港区のように教育委員会がGPS端末を貸与している例は、学校へのGPS端末の携行が公的に認められていることを示す分かりやすい根拠となります。
          </p>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-green-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">許可を得た後の端末選び</h2>
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
