import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { HamicAffText } from '@/components/AffiliateHamic';

export const metadata: Metadata = {
  title: 'Hamic（ハミック）の口コミ・評判｜App Store 3.3・Google Play 2.8と2028年春のサービス終了予定【2026年11月】',
  description:
    'Hamee提供のキッズスマホ「Hamic」の口コミ・評判を、App Store 3.3（243件）・Google Play 2.8（99件）の評価と公式情報で確認しました。2028年春のサービス終了予定、MIELS nicoの購入とシェアプランの料金、解約条件を整理しています。',
};

const faqData = [
  { q: 'HamicはスマートフォンとGPS端末のどちらに近いですか？', a: 'Hamicはキッズスマートフォン型のデバイスです。GPSによる位置確認に加え、専用アプリでのメッセージ・通話やカメラを搭載しており、スマートフォンに近い使い勝手です。アプリの利用やフィルタリングは、保護者がGoogleファミリーリンクで設定します（Hamic公式 料金ページ・2026年11月28日確認）。' },
  { q: 'Hamicの月額料金はいくらですか？', a: 'Hamic POCKETは月額1,100円（税込）で、データ通信1GB/月と通話・メッセージ・みまもり機能が含まれます。本体は18,700円（税込）です。端末・通信・アプリが一体となったサービスのため、別途SIMを契約する必要はありません（Hamic公式「Hamic POCKETの価格・料金」・2026年11月13日確認）。' },
  { q: 'メッセージ機能はどのように使いますか？', a: '専用アプリ「Hamicアプリ」で、テキスト・スタンプ・写真のやりとりが可能です。LINEに似た操作感のため、お子さまも直感的に使えます。送受信の相手は保護者が管理できます。' },
  { q: 'カメラ機能はありますか？', a: 'はい。カメラを搭載しています。撮影した写真をメッセージで送信したり、保護者のアプリで確認したりできます。' },
  { q: 'GPS見守り機能はありますか？', a: 'はい。リアルタイムの位置確認、移動履歴、エリア通知などのGPS見守り機能を標準で搭載しています。' },
  { q: 'Hamicのサービスはいつまで使えますか？', a: 'Hamic公式FAQでは、2028年春にサービスを終了する予定とされています。正確な終了日は2026年11月時点で未定で、2027年中に案内され、確定した終了日は90日以上前までに知らされます。終了までは従来どおり使え、いつでも違約金なしで解約できます（Hamic公式FAQ・2026年11月28日確認）。' },
  { q: 'Hamicの口コミ・評判はどうですか？', a: '保護者が使うHamicアプリの評価は、App Storeで3.3（243件）、Google Playで2.8（99件）です（2026年11月28日確認）。アプリの評価のため、端末そのものの評価とは異なる点にご注意ください。' },
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

export default function HamicPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Hamic レビュー", "datePublished": "2026-03-15", "dateModified": "2026-11-28", "author": {"@type": "Organization", "name": "子供見守りGPS最新情報 編集部", "url": "https://gps-kodomo.com/"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'Hamic' }]} />

      {/* Hero */}
      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">キッズスマートフォン型</span>
            <span className="tag-pill bg-blue text-white">メッセージ機能</span>
            <span className="tag-pill bg-green text-white">カメラ搭載</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            Hamic レビュー
          </h1>
          <p className="text-g600 text-lg">Hamee提供 | キッズスマートフォン型 | メッセージ機能 | カメラ | GPS見守り</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">Hamicとは</h2>
          <p className="text-g600 mb-6">
            Hamicは、スマートフォンアクセサリー大手のHameeが提供する、キッズスマートフォン型の見守りデバイスです。
            GPSによる位置確認に加え、LINEのようなメッセージ機能やカメラを搭載しており、
            「GPS端末では機能が足りないが、スマートフォンを持たせるにはまだ早い」とお考えのご家庭に適しています。
            保護者が利用範囲を管理できるため、スマートフォンを持たせる前の準備段階として活用できます。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'Hamee（ハミィ）'],
                    ['端末タイプ', 'キッズスマートフォン型'],
                    ['月額料金', '1,100円（税込・データ通信1GB/月込み。追加データは200MB 220円・500MB 440円・1GB 880円。1GBを超えると最大256kbpsに制限）'],
                    ['通話・メッセージ', '専用のHamicアプリで通話・メッセージが可能（追加料金なし）'],
                    ['後継機種', 'Hamic MIELS／MIELS nico（購入：本体29,700円＋月額1,100円／シェアプラン：初期費用3,300円＋月額2,200円・最低契約期間6ヶ月）'],
                    ['本体価格', '18,700円（税込・Hamic POCKET L。2026年10月26日時点で公式ストアは全色売り切れ）'],
                    ['測位方式', 'GPS+Wi-Fi'],
                    ['メッセージ', 'テキスト・スタンプ・写真'],
                    ['カメラ', '搭載'],
                    ['防水', 'IP64（Hamic POCKET L・専用ケース装着時）'],
                    ['バッテリー', '約1.5日が目安（Hamic POCKET L・2,000mAh）'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-g100">
                      <td className="py-2 font-semibold text-g700 w-1/3">{k}</td>
                      <td className="py-2 text-g600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-g500 mt-2">出典：Hamic公式「Hamic POCKETの価格・料金」「MIELS / MIELS nico の料金」（料金・追加データ・速度制限・後継機種は2026年11月28日確認）・Hamic POCKET 製品ページ・公式トップ。防水・バッテリー・在庫は2026年10月26日の公式ストアの製品ページによります（11/13は製品ページが混雑で表示できず未再確認）。</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">コミュニケーション機能</h3>
              <div className="space-y-3">
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">LINE風メッセージ</p>
                  <p className="text-sm text-g600 mt-1">テキスト・スタンプ・写真でやりとりできます。送信相手は保護者が管理します。</p>
                </div>
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">カメラ機能</p>
                  <p className="text-sm text-g600 mt-1">撮影した写真をメッセージで送信でき、お子さまの目線を共有できます。</p>
                </div>
                <div className="bg-green-light rounded-xl p-4">
                  <p className="font-bold text-green-dark">GPS見守り</p>
                  <p className="text-sm text-g600 mt-1">リアルタイムの位置確認・移動履歴・エリア通知を標準で搭載しています。</p>
                </div>
              </div>
            </div>
          </div>

          {/* サービス終了予定（2026-11-28 追加・公式FAQで確認） */}
          <div className="mb-8 rounded-xl border-2 border-orange p-5 bg-orange-light">
            <h2 className="section-title">Hamicは2028年春にサービス終了予定です</h2>
            <ul className="space-y-2 text-sm text-g700">
              <li>・Hamic公式FAQでは「2028年春に終了する予定」とされています。正確な終了日は2026年11月時点で未定で、2027年中に案内され、確定した終了日は<strong>終了日の90日以上前まで</strong>に知らされます</li>
              <li>・終了後は、Hamicアプリ（通話・メッセージ・スタンプ・ブザー通知）やottaのサービスなどが使えなくなります</li>
              <li>・Hamic MIELSは終了後も「Android端末」として使えます。公式は、IIJmioのドコモ網のデータ通信専用eSIMで動作することを確認したとしています（Hamicの回線は他社への引き継ぎ〔MNP〕に対応していません）</li>
              <li>・終了までは従来どおり使え、<strong>いつでも違約金なしで解約</strong>できます。解約は申し込んだ月の末日まで使え、月額料金は日割りになりません。購入した端末は返送不要です</li>
            </ul>
            <p className="text-xs text-g500 mt-3">出典：Hamic公式「FAQ」（2026年11月28日確認）。これから契約する場合は、終了予定までの利用期間を前提に、購入（本体29,700円）とシェアプラン（最低6ヶ月）のどちらが合うかをご検討ください。</p>
          </div>

          <h2 className="section-title">Hamicの口コミ・評判（アプリストアの評価）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-g200"><th className="py-2 text-left">ストア</th><th className="py-2 text-left">評価</th><th className="py-2 text-left">件数</th><th className="py-2 text-left">備考</th></tr></thead>
              <tbody>
                <tr className="border-b border-g100"><td className="py-2">App Store（Hamic）</td><td className="py-2">3.3</td><td className="py-2">243件</td><td className="py-2">最終更新 2026年4月21日（バージョン5.3.4）</td></tr>
                <tr className="border-b border-g100"><td className="py-2">Google Play（Hamic）</td><td className="py-2">2.8</td><td className="py-2">99件</td><td className="py-2">5万回以上ダウンロード</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">出典：App Store（iTunes Search API）・Google Play の Hamic アプリのページ（2026年11月28日に当サイトで取得）。保護者が使うアプリの評価で、端末そのものの評価ではありません。Amazon・楽天の端末の評価は、当サイトでは取得できませんでした。</p>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '', title: 'メッセージ機能', desc: 'LINEのような操作感で、テキスト・スタンプ・写真のやりとりが可能です。' },
              { icon: '', title: 'カメラ', desc: '撮影した写真を保護者に送信し、お子さまの日常を共有できます。' },
              { icon: '', title: 'GPS位置確認', desc: 'リアルタイムでお子さまの現在地を確認できます。' },
              { icon: '', title: 'エリア通知', desc: '登録したエリアへの出入りを自動で通知します。到着・出発をすぐに把握できます。' },
              { icon: '', title: '利用制限管理', desc: '保護者がアプリの利用範囲や連絡先を管理できるため、安心して持たせることができます。' },
              { icon: '', title: 'スマートフォンの練習', desc: 'スマートフォンを持たせる前の練習用端末として適しています。段階的にITリテラシーを育むことができます。' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-g600">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Pros & Cons */}
          <h2 className="section-title">メリット・デメリット</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・LINEのようなメッセージ機能でコミュニケーションが充実</li>
                <li>・カメラを搭載し、写真の共有が可能</li>
                <li>・GPS見守り機能を標準搭載</li>
                <li>・SIM込みで月額1,100円のわかりやすい料金</li>
                <li>・スマートフォンを持たせる前の練習に適している点</li>
                <li>・保護者による利用制限管理が充実</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・月額1,100円とGPS端末より高い料金</li>
                <li>・本体価格18,700円（Hamic POCKET L）の初期費用が必要。公式ストアでは2026年10月26日時点で全色売り切れ</li>
                <li>・バッテリーの持ちは約1.5日が目安と短め（公式の目安）</li>
                <li>・学校への持ち込みの可否は学校ごとの規則によるため、事前の確認が必要な点</li>
                <li>・2028年春（予定）にサービスが終了する点（公式FAQ）</li>
                <li>・契約にはクレジットカードが必要で、月の途中から始めても日割りにならない点（公式 料金ページ）</li>
                <li>・画面があるため、遊びに使用される懸念がある点</li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          {/* CTA */}
          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">Hamicが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">キッズスマートフォン型で、見守りとコミュニケーションの両方に対応しています。スマートフォンを持たせる前の選択肢としてご検討ください。</p>
            <div className="mb-6"><HamicAffText /></div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/kids-phone/" className="btn-accent">キッズケータイとの比較を見る</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
