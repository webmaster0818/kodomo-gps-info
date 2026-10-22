import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '小学生GPS おすすめ | 入学準備・学年別の選び方ガイド',
  description:
    '小学生におすすめのGPS端末を、学年別（低学年・高学年）に解説します。入学前の準備チェックリスト、学校への持ち込みルール、ランドセルへの装着方法も紹介し、小学1年生の入学準備に適したGPS端末選びをご案内します。',
};

const faqData = [
  { q: '小学1年生にGPSは必要ですか？', a: '小学1年生は初めて一人で通学するため、GPS端末の需要が最も高い学年です。登下校中の位置確認、寄り道の有無、到着確認などに活用できます。入学前の準備として購入するご家庭が増えています。' },
  { q: '学校にGPSを持ち込んでもよいですか？', a: 'ほとんどの小学校では、GPS端末の持ち込みを許可しています。通話機能のないシンプルなGPS端末であれば、問題のない場合が多くあります。ただし、学校ごとにルールが異なるため、事前にご確認ください。' },
  { q: 'ランドセルにはどのように入れればよいですか？', a: 'ランドセルの前ポケット（ファスナー付き小物入れ）に入れるのが一般的です。専用ケースでランドセルの肩ベルトに装着する方法もあります。GPS端末は30〜55gと軽量なため、負担にはなりません。' },
  { q: '低学年と高学年でおすすめは異なりますか？', a: '異なります。低学年（1〜3年）には、操作不要で位置確認のみのシンプルなGPS端末をおすすめします。高学年（4〜6年）は行動範囲が広がるため、トーク機能付きや通話対応のモデルも選択肢に入ります。' },
  { q: '何年生まで使えますか？', a: 'GPS端末は小学校の6年間を通して使えます。ただし、高学年になると「子供っぽい」と嫌がるお子さまもいます。その場合は、myFirst Fone（腕時計型）やHamic（スマートフォン型）への切り替えもご検討ください。' },
  { q: '入学前に準備しておくべきことを教えてください。', a: '入学の1〜2カ月前に購入し、通学路で実際に使ってみることをおすすめします。エリア通知の設定、バッテリーの持ち具合、アプリの操作感を事前に確認しておくと安心です。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "小学生GPS おすすめ", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '目的別', href: '/purpose/' }, { name: '小学生・入学準備' }]} />

      {/* Hero */}
      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">入学準備</span>
            <span className="tag-pill bg-blue text-white">学年別おすすめ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            小学生におすすめのGPS端末と入学準備ガイド
          </h1>
          <p className="text-g600 text-lg">入学準備チェックリスト、学年別のおすすめ、ランドセルへの装着方法を解説します。</p>
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
                { check: '1〜2カ月前', task: 'GPS端末を購入し、アプリを設定します。' },
                { check: '1カ月前', task: '通学路を一緒に歩き、GPSの精度を確認します。' },
                { check: '2週間前', task: 'エリア通知（ジオフェンス）を設定します（学校・自宅・塾など）。' },
                { check: '1週間前', task: 'ランドセルへの装着方法を決め、お子さまに説明します。' },
                { check: '前日', task: 'バッテリーを満充電にし、アプリの通知設定を最終確認します。' },
                { check: '入学当日', task: 'ランドセルにGPS端末を入れて送り出し、到着通知を確認します。' },
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
          <h2 className="section-title">学年別のおすすめGPS端末</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-light rounded-xl p-6">
              <h3 className="font-bold text-blue mb-3">低学年（小1〜小3）</h3>
              <p className="text-sm text-g600 mb-4">
                操作不要のシンプルなGPS端末が最適です。ランドセルに入れるだけで見守りを始められます。
                バッテリーが長持ちし、小型軽量な機種をおすすめします。
              </p>
              <div className="space-y-2">
                {[
                  { name: 'みてねみまもりGPS', reason: '利用者No.1、バッテリー2カ月、528円', href: '/review/mitene/' },
                  { name: 'あんしんウォッチャー', reason: 'KDDIの通信品質、2台目無料、兄弟での利用向け', href: '/review/anshin-watcher/' },
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
                行動範囲が広がり、習い事や友達との外出も増える時期です。
                トーク機能や通話に対応したモデルで、連絡手段を持たせることも選択肢の一つです。
              </p>
              <div className="space-y-2">
                {[
                  { name: 'BoTトーク', reason: 'トーク機能による帰宅連絡、AI学習搭載', href: '/review/bot-talk/' },
                  { name: 'myFirst Fone', reason: '腕時計型、通話対応、SOS搭載', href: '/review/myfirst-fone/' },
                  { name: 'Hamic', reason: 'スマートフォン型、メッセージ対応、スマートフォンの練習向け', href: '/review/hamic/' },
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
          <h2 className="section-title">学校への持ち込みルール</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 text-sm mb-4">
              GPS端末の学校への持ち込みについて、多くの小学校では以下のようなルールが一般的です。
              ただし、学校ごとに異なるため、入学前の説明会や担任の先生にご確認ください。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-light rounded-lg p-4">
                <h4 className="font-bold text-green-dark text-sm mb-2">持ち込みが認められる条件（一般的な例）</h4>
                <ul className="space-y-1 text-xs text-g700">
                  <li>・通話機能がないGPS端末</li>
                  <li>・音が鳴らない設定にできる端末</li>
                  <li>・授業中はランドセルに入れたままにすること</li>
                  <li>・学校への届出・申請済み</li>
                </ul>
              </div>
              <div className="bg-orange-light rounded-lg p-4">
                <h4 className="font-bold text-orange-dark text-sm mb-2">持ち込みが認められない・注意が必要な例</h4>
                <ul className="space-y-1 text-xs text-g700">
                  <li>・通話機能付き（キッズケータイ等）</li>
                  <li>・画面付き（myFirst Fone、Hamic等）</li>
                  <li>・音が鳴る設定のままの端末</li>
                  <li>・学校への届出をしていない端末</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ランドセル装着方法 */}
          <h2 className="section-title">ランドセルへの装着方法</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { method: '前ポケットに入れる', desc: 'ランドセル前面のファスナー付きポケットにGPS端末を入れる方法です。最も一般的で簡単な方法です。', pros: '簡単、落としにくい', cons: 'ポケットの深さに依存' },
              { method: '肩ベルトに装着', desc: '専用ケースやカラビナで、肩ベルトに取り付ける方法です。GPSの精度が向上する場合もあります。', pros: 'GPS精度の向上、見えやすい', cons: '専用ケースが別売りの場合あり' },
              { method: '内ポケットに入れる', desc: 'ランドセル内側のポケットに入れる方法です。教科書と一緒に入れておくだけで使えます。', pros: '目立たない、保護される', cons: '他の荷物に埋もれやすい' },
            ].map((m) => (
              <div key={m.method} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-2">{m.method}</h3>
                <p className="text-sm text-g600 mb-2">{m.desc}</p>
                <p className="text-xs text-green-dark">利点: {m.pros}</p>
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
          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">入学準備でGPS端末をご検討中の方へ</h2>
            <p className="text-g600 mb-6 text-sm">お子さまの学年や利用場面に合ったGPS端末の比較に、以下のページをご活用ください。</p>
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
