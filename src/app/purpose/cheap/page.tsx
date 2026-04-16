import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS 安い順ランキング | 月額料金比較＆コスパ最強TOP5',
  description:
    '子供用GPS端末13機種を月額料金の安い順に比較。本体価格込みの総コスト計算、2台目割引情報、コスパランキングTOP5を紹介。最安月額480円から使える見守りGPS。',
};

const faqData = [
  { q: '子供用GPS端末で一番安いのはどれ？', a: '月額料金が最も安いのはconecoの月額480円（税込）です。次いでみてねみまもりGPS、BoTトーク、どこかなGPS、はろここが月額528円で並びます。' },
  { q: '本体価格も含めると一番お得なのは？', a: '本体価格+月額料金の年間総コストで比較すると、本体3,800円+月額480円のconecoが初年度最安です。ただし2台目を考慮するとあんしんウォッチャー（2台目無料）がお得です。' },
  { q: '2台目割引がある機種はありますか？', a: 'あんしんウォッチャー（KDDI）は2台目の月額料金が無料です。兄弟で使う場合は圧倒的にお得です。' },
  { q: '安い機種は機能が少ないですか？', a: '月額480円〜528円の機種でも位置確認・移動履歴・エリア通知など基本機能は充実しています。トーク機能やSOS機能が必要な場合は追加料金のプランを検討しましょう。' },
  { q: '途中で解約できますか？', a: 'ほとんどのGPS端末は契約期間の縛りや解約金がありません。不要になったらいつでも解約可能です。ただし端末によっては最低利用期間がある場合があるので事前に確認しましょう。' },
  { q: '初期費用はいくらかかりますか？', a: '初期費用は主に本体価格のみです。最安のconecoで3,800円、一般的な機種で5,000円〜8,000円程度。事務手数料や初期登録料は基本的に無料の機種が多いです。' },
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

export default function CheapPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: '目的別', href: '/' }, { name: '安い・コスパ重視' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">コスパ重視</span>
            <span className="tag-pill bg-blue text-white">月額480円〜</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS 安い順ランキング・コスパ比較
          </h1>
          <p className="text-g600 text-lg">全13機種の月額料金比較 | 本体込み総コスト | コスパTOP5</p>
        </div>
      </section>

      {/* 料金比較表 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">全13機種 月額料金比較（安い順）</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue text-white">
                  <th className="p-3 text-left">順位</th>
                  <th className="p-3 text-left">機種名</th>
                  <th className="p-3 text-center">月額料金</th>
                  <th className="p-3 text-center">本体価格</th>
                  <th className="p-3 text-center">年間総コスト</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', 'coneco', '480円', '6,600円', '12,360円', '/review/coneco/'],
                  ['2', 'みてねみまもりGPS', '528円', '5,280円', '11,616円', '/review/mitene/'],
                  ['3', 'BoTトーク', '528円', '5,280円', '11,616円', '/review/bot-talk/'],
                  ['4', 'どこかなGPS', '528円', '7,480円', '13,816円', '/review/dokokana/'],
                  ['5', 'はろここ', '528円', '5,280円', '11,616円', '/review/halococo/'],
                  ['6', 'あんしんウォッチャー', '539円', '5,680円', '12,148円', '/review/anshin-watcher/'],
                  ['7', 'soranome', '539円', '9,020円', '15,488円', '/review/soranome/'],
                  ['8', 'まもサーチ', '539円', '5,280円', '11,748円', '/review/mamosearch/'],
                  ['9', 'みもり', '748円', '8,580円', '17,556円', '/review/mimori/'],
                  ['10', 'BoTトーク（トーク付）', '748円', '5,280円', '14,256円', '/review/bot-talk/'],
                  ['11', 'Hamic', '1,100円', '12,100円', '25,300円', '/review/hamic/'],
                  ['12', 'SayuU', '1,210円', '13,200円', '27,720円', '/review/sayuu/'],
                  ['13', 'myFirst Fone', '約980円〜', '約18,000円〜', '約29,760円〜', '/review/myfirst-fone/'],
                ].map(([rank, name, monthly, device, annual, href]) => (
                  <tr key={rank + name} className="border-b border-g100">
                    <td className="p-3 font-bold text-orange">{rank}</td>
                    <td className="p-3"><Link href={href} className="text-blue hover:underline font-semibold">{name}</Link></td>
                    <td className="p-3 text-center text-g600">{monthly}</td>
                    <td className="p-3 text-center text-g600">{device}</td>
                    <td className="p-3 text-center font-semibold text-g800">{annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">※年間総コスト＝本体価格＋月額料金×12ヶ月（税込・初年度）。myFirst FoneはSIM別契約のため概算。</p>

          {/* 2台目割引 */}
          <h2 className="section-title">2台目割引・兄弟利用に最適な機種</h2>
          <div className="card-hover p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="tag-pill bg-green text-white">兄弟利用に最強</span>
            </div>
            <h3 className="font-bold text-g800 text-lg mb-2">
              <Link href="/review/anshin-watcher/" className="text-blue hover:underline">あんしんウォッチャー</Link> — 2台目月額無料
            </h3>
            <p className="text-g600 text-sm mb-3">
              KDDIのあんしんウォッチャーは2台目の月額料金が無料。兄弟2人で使っても月額539円のみです。
              年間総コストは2台で18,508円（1台あたり9,254円）と圧倒的なコスパを誇ります。
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-blue-light rounded-lg p-3">
                <p className="text-sm font-semibold text-blue">1台利用の場合</p>
                <p className="text-sm text-g600">本体5,680円+月額539円×12=年間12,148円</p>
              </div>
              <div className="bg-green-light rounded-lg p-3">
                <p className="text-sm font-semibold text-green-dark">2台利用の場合</p>
                <p className="text-sm text-g600">本体5,680円×2+月額539円×12=年間18,508円（1台9,254円）</p>
              </div>
            </div>
          </div>

          {/* コスパTOP5 */}
          <h2 className="section-title">コスパランキングTOP5</h2>
          <div className="space-y-4 mb-8">
            {[
              { rank: 1, name: 'みてねみまもりGPS', reason: '月額528円×充実機能×利用者数No.1。バッテリー2ヶ月持ちで充電の手間も少ない。', href: '/review/mitene/' },
              { rank: 2, name: 'あんしんウォッチャー', reason: '2台目無料は兄弟利用で圧倒的。KDDI品質の安定通信。au以外でもOK。', href: '/review/anshin-watcher/' },
              { rank: 3, name: 'coneco', reason: '月額480円で業界最安。1分間隔追跡の高機能で価格以上の価値。', href: '/review/coneco/' },
              { rank: 4, name: 'まもサーチ', reason: '月額539円で最大25人見守り。大家族やシッターさんとの共有に最適。', href: '/review/mamosearch/' },
              { rank: 5, name: 'BoTトーク', reason: '月額528円の基本プランでも高精度AI学習搭載。トーク付きでも748円。', href: '/review/bot-talk/' },
            ].map((item) => (
              <div key={item.rank} className="flex gap-4 items-start card-hover p-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center font-bold">
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">コスパ最強のGPSを見つけよう</h2>
            <p className="text-g600 mb-6 text-sm">月額480円〜、お子さまの安全を手頃な価格で守れます。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">全機種ランキングを見る</Link>
              <Link href="/purpose/talk/" className="btn-accent">トーク機能付きを探す</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
