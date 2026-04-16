import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS トーク機能付き比較 | 話せるGPS端末おすすめランキング',
  description:
    'トーク・通話機能付きの子供用GPS端末を徹底比較。BoTトーク、みてねみまもりGPS、SayuU、myFirst Foneなどの音声メッセージ・通話機能を比較。話せるGPSのおすすめランキング。',
};

const faqData = [
  { q: '子供用GPSで話せる機種はどれ？', a: '音声メッセージ対応はBoTトーク（月額748円）、みてねみまもりGPS トークPlus（月額748円）、SayuU（月額1,210円）。音声通話対応はmyFirst Fone（SIM別契約）。みもりは保護者→子供への一方向音声メッセージのみ。' },
  { q: '音声メッセージと通話の違いは？', a: '音声メッセージはボイスメールのように録音して送る方式で、リアルタイムの会話はできません。通話はmyFirst Foneのように電話感覚でリアルタイムに会話できます。' },
  { q: 'トーク機能の月額料金は？', a: 'BoTトークのトーク付きプランは月額748円、みてねみまもりGPSのトークPlusプランも月額748円です。SayuUは月額1,210円にトーク機能が含まれています。' },
  { q: 'トーク機能なしの基本プランから変更できる？', a: 'はい、多くの機種はアプリ上でプラン変更が可能です。まずは基本プランで試してみて、必要を感じたらトーク付きプランに切り替えることができます。' },
  { q: '子供からもメッセージを送れる？', a: 'BoTトーク、みてねみまもりGPSのトークPlusプランでは、お子さまがGPS端末のボタンを押して音声メッセージや定型文を送信できます。myFirst Foneでは音声通話が可能です。' },
  { q: '学校にトーク機能付きGPSを持って行ける？', a: '基本的にはGPS端末として持ち込み可能ですが、授業中の通知音が問題になる場合があります。マナーモード設定がある機種を選び、学校の規則も事前に確認しましょう。' },
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

export default function TalkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: '目的別', href: '/' }, { name: 'トーク機能付き' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">話せるGPS</span>
            <span className="tag-pill bg-blue text-white">トーク機能比較</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            トーク機能付き子供GPS おすすめ比較
          </h1>
          <p className="text-g600 text-lg">音声メッセージ vs 通話 | トーク対応GPS端末ランキング</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">トーク機能の種類</h2>
          <p className="text-g600 mb-6">
            子供用GPS端末のトーク機能は大きく3種類に分かれます。
            お子さまとどの程度のコミュニケーションを取りたいかで、最適な機種が変わります。
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-2">音声メッセージ</h3>
              <p className="text-sm text-g600 mb-3">録音した音声を送り合うボイスメール方式。リアルタイムではないが手軽。</p>
              <p className="text-xs text-g500">対応機種: BoTトーク、みてねGPS、みもり（一方向）</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange mb-2">テキストメッセージ</h3>
              <p className="text-sm text-g600 mb-3">定型文やスタンプを送信。文字が読めないお子さまでもスタンプで返信可能。</p>
              <p className="text-xs text-g500">対応機種: みてねGPS、Hamic</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-green-dark mb-2">音声通話</h3>
              <p className="text-sm text-g600 mb-3">電話のようにリアルタイムで会話。緊急時の安心感が高い。</p>
              <p className="text-xs text-g500">対応機種: myFirst Fone、キッズケータイ</p>
            </div>
          </div>

          {/* 比較表 */}
          <h2 className="section-title">トーク対応機種 比較表</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue text-white">
                  <th className="p-3 text-left">機種名</th>
                  <th className="p-3 text-center">音声<br />メッセージ</th>
                  <th className="p-3 text-center">テキスト<br />メッセージ</th>
                  <th className="p-3 text-center">音声通話</th>
                  <th className="p-3 text-center">ビデオ<br />通話</th>
                  <th className="p-3 text-center">月額料金</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['BoTトーク', '○', '○（定型文）', '×', '×', '748円', '/review/bot-talk/'],
                  ['みてねGPS（トークPlus）', '○', '○（定型文）', '×', '×', '748円', '/review/mitene/'],
                  ['SayuU', '○', '×', '×', '×', '1,210円', '/review/sayuu/'],
                  ['みもり', '△（一方向）', '×', '×', '×', '748円', '/review/mimori/'],
                  ['myFirst Fone', '○', '○', '○', '○', '約980円〜', '/review/myfirst-fone/'],
                  ['Hamic', '×', '○（LINE的）', '×', '×', '1,100円', '/review/hamic/'],
                  ['キッズケータイ', '×', '○（SMS）', '○', '×', '539円〜', '/review/kids-phone/'],
                ].map(([name, voice, text, call, video, price, href]) => (
                  <tr key={name} className="border-b border-g100">
                    <td className="p-3"><Link href={href} className="text-blue hover:underline font-semibold">{name}</Link></td>
                    <td className="p-3 text-center text-g600">{voice}</td>
                    <td className="p-3 text-center text-g600">{text}</td>
                    <td className="p-3 text-center text-g600">{call}</td>
                    <td className="p-3 text-center text-g600">{video}</td>
                    <td className="p-3 text-center font-semibold text-g800">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* おすすめランキング */}
          <h2 className="section-title">トーク機能付きGPS おすすめランキング</h2>
          <div className="space-y-4 mb-8">
            {[
              { rank: 1, name: 'BoTトーク', reason: '元祖トーク機能。月額748円で音声メッセージ+定型文。AI行動学習で帰宅予測も。バランスの良い1台。', href: '/review/bot-talk/' },
              { rank: 2, name: 'みてねみまもりGPS トークPlus', reason: '利用者数No.1にトーク機能を追加。月額748円。使い慣れた「みてね」アプリでの操作が魅力。', href: '/review/mitene/' },
              { rank: 3, name: 'myFirst Fone', reason: '唯一の音声通話+ビデオ通話対応。リアルタイムの会話を重視するなら最適解。SOS機能も搭載。', href: '/review/myfirst-fone/' },
              { rank: 4, name: 'Hamic', reason: 'LINE的なメッセージ機能でスタンプ・写真のやりとり。スマホデビュー前の練習にも。', href: '/review/hamic/' },
              { rank: 5, name: 'SayuU', reason: 'トヨタの交通安全サポート付き。音声メッセージに加え独自の安全機能が充実。', href: '/review/sayuu/' },
            ].map((item) => (
              <div key={item.rank} className="flex gap-4 items-start card-hover p-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue text-white flex items-center justify-center font-bold">
                  {item.rank}
                </span>
                <div>
                  <h3 className="font-bold text-g800">
                    <Link href={item.href} className="text-blue hover:underline">{item.name}</Link>
                  </h3>
                  <p className="text-sm text-g600">{item.reason}</p>
                </div>
              </div>
            ))}
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">お子さまと話せるGPSを見つけよう</h2>
            <p className="text-g600 mb-6 text-sm">トーク機能付きGPSで、位置確認＋コミュニケーションの安心感を。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">全機種ランキングを見る</Link>
              <Link href="/purpose/safety/" className="btn-accent">防犯重視で選ぶ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
