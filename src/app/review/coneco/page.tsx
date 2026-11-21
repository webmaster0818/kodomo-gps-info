import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'coneco（コネコ）の評判・口コミは？新規販売終了【2026年10月】仕様と代わりの機種',
  description:
    'coneco（カーメイト）は2026年5月25日の告知により在庫限りで販売を終了しました。月額480円・更新間隔1〜10分・約4日程度の電池持ちなどの公式仕様、解約条件、App Storeの評価、代わりの機種をまとめています（2026年11月21日確認）。',
};

const faqData = [
  { q: 'conecoは今も購入できますか？', a: 'カーメイトは2026年5月25日のお知らせで「現在の在庫限りでconeco本体の販売を終了」すると告知し、公式サイトでは「coneco本体の新規販売は終了いたしました」と案内しています。後継モデルの発売予定はなく、専用アプリ・見守り・メッセージ機能などの通信サービスとサポートは継続すると案内されています（2026年11月21日確認）。これから購入する場合は、BoTトーク・みてねみまもりGPS・まもサーチ3など販売中の機種をご検討ください。' },
  { q: 'conecoの位置更新頻度はどのくらいですか？', a: '位置情報の更新間隔は1分・3分・5分・10分から選択でき、1年前までの位置情報履歴を確認できます。GPSで位置を取得できない場合は、通信基地局から大まかな位置を表示します（カーメイト公式・2026年11月21日確認）。' },
  { q: 'conecoの月額料金はいくらですか？', a: '月額480円（税込・coneco端末1台あたり）です。利用開始月の利用料金は発生しません。登録手数料は不要で、メッセージ送受信や位置確認による追加料金もありません。支払いはクレジットカードのみで、最低利用期間はありません（coneco利用規約の料金表・公式Q&A・2026年11月21日確認）。' },
  { q: '解約（利用停止）の条件はどうなっていますか？', a: '利用終了月は日割り計算がなく、1か月分の利用料金が発生します。通信回線の停止日は当月末で、26日以降に手続きした場合は翌月末となります。利用停止を行った端末は再契約できません（coneco利用規約・Webマニュアル・2026年11月21日確認）。' },
  { q: 'カーメイトはどのような会社ですか？', a: '株式会社カーメイトは1966年設立のカー用品メーカーで、東京証券取引所スタンダード市場に上場しています（カーメイト会社案内・2026年11月21日確認）。' },
  { q: 'バッテリーはどのくらい持ちますか？', a: '公式Q&Aでは、1日4時間の移動でメッセージを4回送受信した場合に「約4日程度」と案内されています（おやすみモードを23時から翌7時まで設定した場合の目安。バッテリー容量620mAh）。静止中は自動的にスリープ状態に移行します（カーメイト公式・2026年11月21日確認）。' },
  { q: '防水性能はありますか？', a: '公式仕様は「IPX3相当（生活防水）」です。水没させる使い方は想定されていません（カーメイト公式・2026年11月21日確認）。' },
  { q: 'エリア通知機能はありますか？', a: 'はい。登録したエリアへの到着・出発を通知します。エリアは5か所まで設定でき、アプリを起動していなくても通知を受信できます（カーメイト公式・2026年11月21日確認）。' },
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

export default function ConecoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "coneco のレビュー", "datePublished": "2026-03-15", "dateModified": "2026-11-21", "author": {"@type": "Organization", "name": "子供見守りGPS最新情報 編集部", "url": "https://gps-kodomo.com/"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'coneco' }]} />

      {/* Hero */}
      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">1分間隔追跡</span>
            <span className="tag-pill bg-blue text-white">メッセージ機能</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            conecoのレビュー
          </h1>
          <p className="text-g600 text-lg">カーメイト提供 | 更新間隔1〜10分 | 電子ペーパー画面でメッセージ送受信</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border-l-4 border-orange bg-orange-light/40 p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">conecoは本体の新規販売を終了しています</h2>
            <p className="text-sm text-g700">カーメイトは2026年5月25日のお知らせで、在庫限りでconeco本体の販売を終了すると告知しました。公式サイトでは「coneco本体の新規販売は終了いたしました」と案内されています。後継モデルの発売予定はなく、専用アプリ・通信サービス・サポートは継続されます。これから購入する場合は、<Link href="/review/bot-talk/" className="text-blue underline">BoTトーク</Link>・<Link href="/review/mitene/" className="text-blue underline">みてねみまもりGPS</Link>・<Link href="/review/mamosearch/" className="text-blue underline">まもサーチ3</Link>などの販売中の機種をご検討ください。</p>
            <p className="text-xs text-g500 mt-2">出典：<a href="https://www.carmate.jp/coneco/" target="_blank" rel="noopener noreferrer" className="text-blue underline">coneco公式（カーメイト）</a>・<a href="https://consumer-guide.coneco.carmate.jp/news.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">conecoお知らせ（2026年5月25日 販売終了のお知らせ）</a>・<a href="https://consumer-guide.coneco.carmate.jp/terms.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">coneco利用規約（料金表）</a>（2026年11月21日確認）</p>
          </div>

          <h2 className="section-title">conecoとは</h2>
          <p className="text-g600 mb-6">
            conecoは、カー用品メーカーのカーメイトが提供する子供向けの見守り端末です。
            2.9インチの電子ペーパー画面を備え、保護者のスマートフォンからのメッセージを表示できるほか、お子さまは事前に設定した定型文（20個まで）から選んで返信できます。
            位置情報の更新間隔は1分・3分・5分・10分から選択でき、エリア通知・のりもの通知にも対応しています（カーメイト公式・2026年11月21日確認）。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'カーメイト'],
                    ['月額料金', '480円（税込）'],
                    ['本体価格', '新規販売終了（2026年5月25日告知・在庫限り）'],
                    ['初期費用', '登録手数料なし（公式Q&A）'],
                    ['最低利用期間', 'なし（利用終了月は日割りなし）'],
                    ['測位方式', 'GPS・GLONASS・Galileo（取得できない場合は基地局で大まかな位置を表示）'],
                    ['更新間隔', '1分・3分・5分・10分から選択（履歴は1年前まで）'],
                    ['バッテリー', '約4日程度（620mAh・1日4時間移動／メッセージ4回の想定）'],
                    ['通信回線', 'LTE-M（日本国内・NTTドコモのLTEエリア）'],
                    ['画面', '電子ペーパー 2.9インチ'],
                    ['充電端子', 'USB Type-C'],
                    ['見守り人数', 'オーナー＋ゲストユーザー最大4名'],
                    ['防水', 'IPX3相当（生活防水）'],
                    ['大きさ・重量', '43×106×16mm・約64g'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-g100">
                      <td className="py-2 font-semibold text-g700 w-1/3">{k}</td>
                      <td className="py-2 text-g600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">メッセージ機能</h3>
              <div className="space-y-3">
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">保護者 → coneco</p>
                  <p className="text-sm text-g600 mt-1">アプリから送ったメッセージがconecoの画面に表示されます。ゲストユーザーも送受信できます。</p>
                </div>
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">coneco → 保護者</p>
                  <p className="text-sm text-g600 mt-1">事前に設定した定型文（20個まで）から選んで送信します。決定ボタンの長押しで「呼び出し通知」も送れます。</p>
                </div>
              </div>
              <p className="text-xs text-g500 mt-3">出典：<a href="https://www.carmate.jp/coneco/" target="_blank" rel="noopener noreferrer" className="text-blue underline">coneco公式（カーメイト）</a>（2026年11月21日確認）</p>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '', title: 'メッセージ送受信', desc: '電子ペーパー画面にメッセージを表示し、お子さまは定型文で返信できます。' },
              { icon: '', title: 'のりもの通知', desc: '電車や車などで移動を始めると、速度から自動で判別して通知します（地下鉄など電波の届かない場所では使えません）。' },
              { icon: '', title: '移動履歴', desc: '1年前までの位置情報履歴を確認できます。' },
              { icon: '', title: 'エリア通知', desc: '登録したエリア（5か所まで）への到着・出発を通知します。' },
              { icon: '', title: '更新間隔の選択', desc: '1分・3分・5分・10分から選択できます。' },
              { icon: '', title: '縦長の形状', desc: '43×106×16mm・約64gの縦長の本体です（公式仕様）。' },
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
                <li>・更新間隔を最短1分に設定できます</li>
                <li>・画面付きで、定型文によるメッセージのやり取りができます</li>
                <li>・月額480円（税込・利用規約の料金表）、登録手数料なし</li>
                <li>・オーナーのほかにゲストユーザー最大4名で見守れます</li>
                <li>・提供元のカーメイトは東証スタンダード市場の上場企業です</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・電池持ちは公式の目安で約4日程度と短めです</li>
                <li>・SOS専用ボタンはなく、決定ボタン長押しの「呼び出し通知」で知らせる方式です</li>
                <li>・防水性能はIPX3相当（生活防水）です</li>
                <li>・本体の新規販売は終了しており、後継モデルの予定はありません</li>
                <li>・利用停止した端末は再契約できません</li>
              </ul>
            </div>
          </div>

          {/* App Store */}
          <h2 className="section-title">アプリストアでの評価（掲載状況）</h2>
          <p className="text-g600 mb-3 text-sm">当サイトでは、個別の口コミの要約ではなく、App Storeに表示されている評価の平均と件数を掲載しています。評価は件数が少なく、利用者の一部の意見である点にご留意ください。</p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-g200"><th className="py-2 text-left">アプリ</th><th className="py-2 text-left">平均評価</th><th className="py-2 text-left">評価件数</th></tr></thead>
              <tbody>
                <tr className="border-b border-g100"><td className="py-2">coneco（保護者用）</td><td className="py-2">3.3</td><td className="py-2">39件</td></tr>
                <tr className="border-b border-g100"><td className="py-2">conecoゲスト</td><td className="py-2">3.8</td><td className="py-2">10件</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">出典：Apple iTunes Search API（日本のApp Store、2026年11月21日取得）。評価は日々変動します。</p>

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
            <h2 className="text-xl font-extrabold text-g800 mb-3">conecoの代わりの機種を探す方へ</h2>
            <p className="text-g600 mb-6 text-sm">conecoは新規販売を終了しています。これから購入する場合は、販売中の機種を比較してお選びください。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/myfirst-fone/" className="btn-accent">次のレビュー: myFirst Fone</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
