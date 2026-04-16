import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '腕時計型GPS 子供用 比較 | スマートウォッチ型見守り端末',
  description:
    '子供用腕時計型GPS（スマートウォッチ型）を徹底比較。myFirst Foneを中心に、通常GPS端末との違い、メリット・デメリット、おすすめの子供像を解説。通話・SOS対応の腕時計型GPSも。',
};

const faqData = [
  { q: '子供用の腕時計型GPSにはどんな機種がある？', a: '代表的な機種はmyFirst Foneシリーズです。音声通話・ビデオ通話・SOS機能・カメラ・音楽再生など多機能なキッズスマートウォッチです。その他にもXiaomiやHuaweiのキッズウォッチがありますが、日本での通信対応やサポートではmyFirst Foneが最も充実しています。' },
  { q: '腕時計型と通常のGPS端末、どっちがいい？', a: 'お子さまの年齢と用途によります。低学年でシンプルに位置確認したいなら通常GPS端末、高学年で通話やコミュニケーションも必要なら腕時計型がおすすめです。腕時計型は置き忘れリスクがない反面、学校での使用制限がある場合があります。' },
  { q: '腕時計型GPSのバッテリーはどのくらい持つ？', a: 'myFirst Foneの場合、約1〜2日程度です。通常のGPS端末（1週間〜2ヶ月）と比べるとかなり短く、毎日の充電が必要です。通話やカメラなどの機能使用でさらに短くなります。' },
  { q: '学校に腕時計型GPSを持って行ける？', a: '画面付き・通話機能付きのため、通常のGPS端末より持ち込みが制限される学校が多いです。時計として着用する場合は許可されるケースもありますが、事前に学校に確認が必要です。' },
  { q: '腕時計型GPSの対象年齢は？', a: '主に5歳〜12歳が対象です。特に小学校中〜高学年（8歳〜12歳）に人気があります。低学年のお子さまにはサイズがやや大きい場合があるため、試着をおすすめします。' },
  { q: 'SIMカードは必要ですか？', a: 'myFirst Foneは通話・データ通信のためにSIMカードが必要です（別途契約）。格安SIMも利用可能で、月額約980円〜のプランが一般的です。' },
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

export default function WatchTypePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: '目的別', href: '/' }, { name: '腕時計型' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">腕時計型</span>
            <span className="tag-pill bg-blue text-white">スマートウォッチ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            腕時計型GPS 子供用 徹底比較
          </h1>
          <p className="text-g600 text-lg">スマートウォッチ型見守り端末 | 通常GPSとの違い | おすすめの子供像</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">腕時計型GPS（キッズスマートウォッチ）とは</h2>
          <p className="text-g600 mb-6">
            腕時計型GPSは、手首に着けるスマートウォッチタイプの子供用見守りデバイスです。
            通常のGPS端末がランドセルに入れて使うのに対し、腕時計型は常に身に着けていられるのが最大の特徴。
            代表的な機種「myFirst Fone」は音声通話・ビデオ通話・カメラ・SOS機能を搭載した多機能デバイスです。
          </p>

          {/* 通常GPSとの比較 */}
          <h2 className="section-title">腕時計型 vs 通常GPS端末 比較</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue text-white">
                  <th className="p-3 text-left">比較項目</th>
                  <th className="p-3 text-center">腕時計型GPS<br />（myFirst Fone等）</th>
                  <th className="p-3 text-center">通常GPS端末<br />（みてね/BoT等）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['装着方法', '手首に着ける', 'ランドセル・ポケットに入れる'],
                  ['置き忘れリスク', 'なし（身に着ける）', 'あり（バッグから出し忘れ等）'],
                  ['通話機能', '音声通話・ビデオ通話', 'なし（一部トーク対応）'],
                  ['SOS機能', '搭載', 'なし（一部機種のみ）'],
                  ['カメラ', '搭載', 'なし'],
                  ['バッテリー', '約1〜2日', '約1週間〜2ヶ月'],
                  ['月額コスト', '約980円〜（SIM別）', '480円〜748円'],
                  ['本体価格', '約18,000円〜', '約3,800円〜8,580円'],
                  ['学校持ち込み', '制限される場合あり', 'ほぼOK'],
                  ['操作', 'タッチ画面（やや複雑）', '操作不要〜ボタンのみ'],
                  ['対象年齢', '5〜12歳（中〜高学年向き）', '6〜12歳（低学年〜OK）'],
                ].map(([item, watch, normal]) => (
                  <tr key={item} className="border-b border-g100">
                    <td className="p-3 font-semibold text-g700">{item}</td>
                    <td className="p-3 text-center text-g600">{watch}</td>
                    <td className="p-3 text-center text-g600">{normal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* メリデメ */}
          <h2 className="section-title">腕時計型GPSのメリット・デメリット</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・手首に着けるから置き忘れゼロ</li>
                <li>・音声通話・ビデオ通話で直接会話できる</li>
                <li>・SOSボタンで緊急時の安心感</li>
                <li>・カメラ付きで写真共有や見守り確認</li>
                <li>・時計としても使えるデザイン性</li>
                <li>・音楽再生などエンタメ機能あり</li>
                <li>・高学年のお子さまに人気のデザイン</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・本体価格18,000円〜と高額</li>
                <li>・SIM別契約で月額コストが高い</li>
                <li>・バッテリー約1〜2日で毎日充電が必要</li>
                <li>・学校での使用が制限される場合あり</li>
                <li>・多機能ゆえに操作がやや複雑</li>
                <li>・遊びに使ってしまう懸念</li>
                <li>・水泳時は外す必要あり</li>
              </ul>
            </div>
          </div>

          {/* おすすめの子供像 */}
          <h2 className="section-title">腕時計型GPSはこんなお子さまにおすすめ</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-2">腕時計型が向いているお子さま</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・小学校中〜高学年（8歳〜12歳）</li>
                <li>・GPS端末を忘れがち・なくしがち</li>
                <li>・保護者と電話で連絡を取りたい</li>
                <li>・友達同士で遊びに行く機会が多い</li>
                <li>・スマホを持たせるのはまだ早い</li>
                <li>・おしゃれに興味がある年頃</li>
              </ul>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange mb-2">通常GPS端末が向いているお子さま</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・小学校低学年（6歳〜8歳）</li>
                <li>・登下校中の位置確認が主目的</li>
                <li>・操作は不要でシンプルが良い</li>
                <li>・月額コストを抑えたい</li>
                <li>・学校持ち込みを確実にしたい</li>
                <li>・充電の手間を減らしたい</li>
              </ul>
            </div>
          </div>

          {/* myFirst Fone紹介 */}
          <h2 className="section-title">おすすめ腕時計型GPS: myFirst Fone</h2>
          <div className="card-hover p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="tag-pill bg-orange text-white">腕時計型No.1</span>
            </div>
            <h3 className="font-bold text-g800 text-lg mb-2">
              <Link href="/review/myfirst-fone/" className="text-blue hover:underline">myFirst Fone 詳細レビュー</Link>
            </h3>
            <p className="text-g600 text-sm mb-4">
              腕時計型キッズGPSの代表格。音声通話・ビデオ通話・カメラ・SOS・音楽再生・IP68防水と
              多機能を搭載した本格キッズスマートウォッチ。日本語対応・日本のSIM対応で安心して使えます。
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="bg-blue-light rounded-lg p-3 text-center">
                <p className="text-xs text-g500">本体価格</p>
                <p className="font-bold text-g800">18,000円〜</p>
              </div>
              <div className="bg-blue-light rounded-lg p-3 text-center">
                <p className="text-xs text-g500">月額（SIM）</p>
                <p className="font-bold text-g800">約980円〜</p>
              </div>
              <div className="bg-blue-light rounded-lg p-3 text-center">
                <p className="text-xs text-g500">主な機能</p>
                <p className="font-bold text-g800">通話・SOS・カメラ</p>
              </div>
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
          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">お子さまにぴったりのGPSを見つけよう</h2>
            <p className="text-g600 mb-6 text-sm">腕時計型も通常GPS端末も、全13機種を比較してベストな一台を。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">全機種ランキングを見る</Link>
              <Link href="/review/myfirst-fone/" className="btn-accent">myFirst Fone 詳細レビュー</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
