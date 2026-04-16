import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '小学生GPS おすすめ | 入学準備・学年別の選び方ガイド',
  description:
    '小学生におすすめのGPS端末を学年別（低学年・高学年）に解説。入学前の準備チェックリスト、学校持ち込みルール、ランドセル装着方法も紹介。小1入学準備に最適なGPSが見つかる。',
};

const faqData = [
  { q: '小学1年生にGPSは必要？', a: '小学1年生は初めて一人で通学するため、GPS端末の需要が最も高い学年です。登下校中の位置確認、寄り道の有無、到着確認などに活用できます。入学前の準備として購入するご家庭が増えています。' },
  { q: '学校にGPSを持ち込んでいい？', a: 'ほとんどの小学校ではGPS端末の持ち込みを許可しています。通話機能がないシンプルなGPS端末であれば問題ないケースが多いです。ただし学校ごとにルールが異なるため、事前に確認しましょう。' },
  { q: 'ランドセルにどうやって入れるの？', a: 'ランドセルの前ポケット（ファスナー付き小物入れ）に入れるのが一般的です。専用ケースでランドセルの肩ベルトに装着する方法もあります。GPS端末は30〜55gと軽量なので負担になりません。' },
  { q: '低学年と高学年でおすすめは違う？', a: 'はい。低学年（1〜3年）はシンプルなGPS端末がおすすめ（操作不要、位置確認のみ）。高学年（4〜6年）は行動範囲が広がるため、トーク機能付きや通話対応のモデルも選択肢に入ります。' },
  { q: '何年生まで使えますか？', a: 'GPS端末は小学校6年間使えます。ただし高学年になると「子供っぽい」と嫌がるお子さまも。その場合はmyFirst Fone（腕時計型）やHamic（スマホ型）への切り替えも検討しましょう。' },
  { q: '入学前に準備しておくべきことは？', a: '入学の1〜2ヶ月前に購入し、通学路で実際に使ってみることをおすすめします。エリア通知の設定、バッテリーの持ち具合、アプリの操作感を事前に確認しておくと安心です。' },
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

export default function ElementaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: '目的別', href: '/' }, { name: '小学生・入学準備' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">入学準備</span>
            <span className="tag-pill bg-blue text-white">学年別おすすめ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            小学生GPS おすすめ・入学準備ガイド
          </h1>
          <p className="text-g600 text-lg">入学準備チェックリスト | 学年別おすすめ | ランドセル装着方法</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">

          {/* チェックリスト */}
          <h2 className="section-title">入学前の準備チェックリスト</h2>
          <div className="card-hover p-6 mb-8">
            <div className="space-y-3">
              {[
                { check: '1〜2ヶ月前', task: 'GPS端末を購入し、アプリをセットアップ' },
                { check: '1ヶ月前', task: '通学路を一緒に歩き、GPS精度を確認' },
                { check: '2週間前', task: 'エリア通知を設定（学校・自宅・塾など）' },
                { check: '1週間前', task: 'ランドセルへの装着方法を決め、お子さまに説明' },
                { check: '前日', task: 'バッテリーをフル充電。アプリの通知設定を最終確認' },
                { check: '入学当日', task: 'ランドセルにGPSを入れて送り出す。到着通知を確認' },
              ].map((item) => (
                <div key={item.check} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-20 text-xs font-bold text-white bg-blue rounded-full px-2 py-1 text-center">
                    {item.check}
                  </span>
                  <p className="text-sm text-g700">{item.task}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 学年別おすすめ */}
          <h2 className="section-title">学年別おすすめGPS</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-light rounded-xl p-6">
              <h3 className="font-bold text-blue mb-3">低学年（小1〜小3）</h3>
              <p className="text-sm text-g600 mb-4">
                操作不要のシンプルなGPS端末がベスト。ランドセルに入れるだけで見守りスタート。
                バッテリーが長持ちし、小型軽量な機種がおすすめです。
              </p>
              <div className="space-y-2">
                {[
                  { name: 'みてねみまもりGPS', reason: '利用者No.1、バッテリー2ヶ月、528円', href: '/review/mitene/' },
                  { name: 'あんしんウォッチャー', reason: 'KDDI品質、2台目無料、兄弟向き', href: '/review/anshin-watcher/' },
                  { name: 'coneco', reason: '1分間隔追跡、480円で最安', href: '/review/coneco/' },
                ].map((item) => (
                  <div key={item.name} className="bg-white rounded-lg p-3">
                    <Link href={item.href} className="font-semibold text-blue text-sm hover:underline">{item.name}</Link>
                    <p className="text-xs text-g500">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange mb-3">高学年（小4〜小6）</h3>
              <p className="text-sm text-g600 mb-4">
                行動範囲が広がり、習い事や友達との外出も増える時期。
                トーク機能や通話対応のモデルでコミュニケーション手段を持たせるのも選択肢。
              </p>
              <div className="space-y-2">
                {[
                  { name: 'BoTトーク', reason: 'トーク機能で帰宅連絡、AI学習搭載', href: '/review/bot-talk/' },
                  { name: 'myFirst Fone', reason: '腕時計型、通話対応、SOS搭載', href: '/review/myfirst-fone/' },
                  { name: 'Hamic', reason: 'スマホ型、メッセージ、スマホ練習に', href: '/review/hamic/' },
                ].map((item) => (
                  <div key={item.name} className="bg-white rounded-lg p-3">
                    <Link href={item.href} className="font-semibold text-blue text-sm hover:underline">{item.name}</Link>
                    <p className="text-xs text-g500">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 学校持ち込みルール */}
          <h2 className="section-title">学校持ち込みルール</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 text-sm mb-4">
              GPS端末の学校持ち込みについて、多くの小学校では以下のようなルールが一般的です。
              ただし学校ごとに異なるため、入学前の説明会や担任の先生に確認しましょう。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-light rounded-lg p-4">
                <h4 className="font-bold text-green-dark text-sm mb-2">持ち込みOKの条件（一般的）</h4>
                <ul className="space-y-1 text-xs text-g700">
                  <li>・通話機能がないGPS端末</li>
                  <li>・音が鳴らない設定にできる</li>
                  <li>・ランドセルに入れたまま授業を受ける</li>
                  <li>・学校への届出・申請済み</li>
                </ul>
              </div>
              <div className="bg-orange-light rounded-lg p-4">
                <h4 className="font-bold text-orange-dark text-sm mb-2">持ち込みNG・要注意</h4>
                <ul className="space-y-1 text-xs text-g700">
                  <li>・通話機能付き（キッズケータイ等）</li>
                  <li>・画面付き（myFirst Fone、Hamic等）</li>
                  <li>・音が鳴る設定のまま</li>
                  <li>・学校への届出をしていない</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ランドセル装着方法 */}
          <h2 className="section-title">ランドセルへの装着方法</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { method: '前ポケットに入れる', desc: 'ランドセル前面のファスナー付きポケットにGPSを入れる方法。最もポピュラーで簡単。', pros: '簡単、落とさない', cons: 'ポケットの深さに依存' },
              { method: '肩ベルトに装着', desc: '専用ケースやカラビナで肩ベルトに取り付ける方法。GPS精度が向上する場合も。', pros: 'GPS精度向上、見えやすい', cons: '専用ケース別売りの場合あり' },
              { method: '内ポケットに入れる', desc: 'ランドセル内側のポケットに入れる方法。教科書と一緒に入れておくだけ。', pros: '目立たない、保護される', cons: '他の荷物に埋もれやすい' },
            ].map((m) => (
              <div key={m.method} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-2">{m.method}</h3>
                <p className="text-sm text-g600 mb-2">{m.desc}</p>
                <p className="text-xs text-green-dark">メリット: {m.pros}</p>
                <p className="text-xs text-orange-dark">注意点: {m.cons}</p>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">入学準備にGPSを検討中の方へ</h2>
            <p className="text-g600 mb-6 text-sm">お子さまの学年や利用シーンに合った最適なGPSを見つけましょう。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">全機種ランキングを見る</Link>
              <Link href="/purpose/cheap/" className="btn-accent">安い順で比較する</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
