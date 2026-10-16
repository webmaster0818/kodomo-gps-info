import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '腕時計型GPS 子供用 比較 | スマートウォッチ型見守り端末',
  description:
    '子供用の腕時計型GPS（スマートウォッチ型）を比較します。myFirst Foneを中心に、通常のGPS端末との違い、メリット・デメリット、向いているお子さまの特徴を解説します。通話・SOSに対応した腕時計型GPSもご紹介しています。',
};

const faqData = [
  { q: '子供用の腕時計型GPSにはどのような機種がありますか？', a: '代表的な機種はmyFirst Foneシリーズです。音声通話・ビデオ通話・SOS機能・カメラ・音楽再生などを備えた多機能なキッズスマートウォッチです。そのほかにXiaomiやHuaweiのキッズウォッチもありますが、日本での通信対応やサポートはmyFirst Foneが最も充実しています。' },
  { q: '腕時計型と通常のGPS端末は、どちらがよいですか？', a: 'お子さまの年齢と用途によって異なります。低学年でシンプルに位置を確認したい場合は通常のGPS端末、高学年で通話などのコミュニケーションも必要な場合は腕時計型をおすすめします。腕時計型は置き忘れのリスクがない反面、学校での使用が制限される場合があります。' },
  { q: '腕時計型GPSのバッテリーはどのくらい持ちますか？', a: 'myFirst Foneの場合、約1〜2日程度です。通常のGPS端末（1週間〜2カ月）と比べるとかなり短く、毎日の充電が必要です。通話やカメラなどの機能を使用すると、さらに短くなります。' },
  { q: '学校に腕時計型GPSを持って行けますか？', a: '画面や通話機能を備えているため、通常のGPS端末より持ち込みが制限される学校が多くなっています。時計として着用する場合は許可されるケースもありますが、事前に学校へご確認ください。' },
  { q: '腕時計型GPSの対象年齢は何歳ですか？', a: '主に5歳〜12歳が対象です。特に小学校中〜高学年（8歳〜12歳）に人気があります。低学年のお子さまにはサイズがやや大きい場合があるため、試着をおすすめします。' },
  { q: 'SIMカードは必要ですか？', a: 'myFirst Foneは通話・データ通信のためにSIMカードが必要です（別途契約）。格安SIMも利用でき、月額約980円〜のプランが一般的です。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "腕時計型GPS 子供用 比較", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '目的別', href: '/purpose/' }, { name: '腕時計型' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">腕時計型</span>
            <span className="tag-pill bg-blue text-white">スマートウォッチ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供用 腕時計型GPSの比較
          </h1>
          <p className="text-g600 text-lg">スマートウォッチ型GPS端末 | 通常GPSとの違い | 向いているお子さま</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">腕時計型GPS（キッズスマートウォッチ）とは</h2>
          <p className="text-g600 mb-6">
            腕時計型GPSは、手首に着けるスマートウォッチタイプの子供用GPS端末です。
            通常のGPS端末はランドセルに入れて使うのに対し、腕時計型は常に身に着けていられる点が最大の特徴です。
            代表的な機種「myFirst Fone」は音声通話・ビデオ通話・カメラ・SOS機能を搭載した多機能デバイスです。
          </p>

          {/* 通常GPSとの比較 */}
          <h2 className="section-title">腕時計型と通常GPS端末の比較</h2>
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
                  ['バッテリー', '約1〜2日', '約1週間〜2カ月'],
                  ['月額コスト', '約980円〜（SIM別）', '480円〜748円'],
                  ['本体価格', '約18,000円〜', '約3,800円〜8,580円'],
                  ['学校持ち込み', '制限される場合あり', 'おおむね可'],
                  ['操作', 'タッチ画面（やや複雑）', '操作不要〜ボタンのみ'],
                  ['対象年齢', '5〜12歳（中〜高学年向き）', '6〜12歳（低学年から可）'],
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
                <li>・手首に着けるため、置き忘れの心配がありません</li>
                <li>・音声通話・ビデオ通話で直接会話できます</li>
                <li>・SOSボタンで緊急時に備えられます</li>
                <li>・カメラを搭載し、写真の共有や見守りの確認に使えます</li>
                <li>・時計としても使えるデザインです</li>
                <li>・音楽再生などのエンターテインメント機能があります</li>
                <li>・高学年のお子さまに人気のデザイン</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・本体価格が18,000円〜と高額です</li>
                <li>・SIMの別契約が必要で、月額コストが高くなります</li>
                <li>・バッテリーは約1〜2日で、毎日の充電が必要です</li>
                <li>・学校での使用が制限される場合があります</li>
                <li>・多機能なため、操作がやや複雑です</li>
                <li>・遊びに使ってしまう懸念があります</li>
                <li>・水泳時は外す必要があります</li>
              </ul>
            </div>
          </div>

          {/* おすすめの子供像 */}
          <h2 className="section-title">腕時計型GPSが向いているお子さま</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-2">腕時計型が向いているお子さま</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・小学校中〜高学年（8歳〜12歳）</li>
                <li>・GPS端末を忘れやすい・なくしやすいお子さま</li>
                <li>・保護者と電話で連絡を取りたいお子さま</li>
                <li>・友達同士で遊びに行く機会が多いお子さま</li>
                <li>・スマートフォンを持たせるにはまだ早いお子さま</li>
                <li>・おしゃれに興味がある年頃のお子さま</li>
              </ul>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange mb-2">通常GPS端末が向いているお子さま</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・小学校低学年（6歳〜8歳）</li>
                <li>・登下校中の位置確認が主な目的の方</li>
                <li>・操作が不要でシンプルな端末を希望する方</li>
                <li>・月額コストを抑えたい方</li>
                <li>・学校への持ち込みを確実にしたい方</li>
                <li>・充電の手間を減らしたい方</li>
              </ul>
            </div>
          </div>

          {/* myFirst Fone紹介 */}
          <h2 className="section-title">おすすめの腕時計型GPS：myFirst Fone</h2>
          <div className="card-hover p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="tag-pill bg-orange text-white">腕時計型No.1</span>
            </div>
            <h3 className="font-bold text-g800 text-lg mb-2">
              <Link href="/review/myfirst-fone/" className="text-blue hover:underline">myFirst Fone 詳細レビュー</Link>
            </h3>
            <p className="text-g600 text-sm mb-4">
              腕時計型キッズGPSの代表的な機種です。音声通話・ビデオ通話・カメラ・SOS・音楽再生・IP68防水と
              多くの機能を搭載したキッズスマートウォッチです。日本語および日本のSIMに対応しているため、国内でも安心して使えます。
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">お子さまに合ったGPS端末の選び方</h2>
            <p className="text-g600 mb-6 text-sm">腕時計型・通常のGPS端末を含む全13機種を比較し、お子さまに合った一台を選ぶことをおすすめします。</p>
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
