import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPSを紛失したら？対処法と落とさない工夫・再発行ガイド',
  description:
    '子供GPSを紛失したときの対処手順と、落とさないための装着工夫をまとめました。再発行費用や保証の確認方法も解説します。',
};

const faqData = [
  { q: 'GPSを紛失したらどうすれば？', a: 'まずアプリで最後の位置情報を確認し、その周辺を探してください。見つからない場合は各社のサポート窓口に紛失連絡を入れ、端末の停止・再発行手続きを案内してもらいましょう。' },
  { q: '再発行の費用はいくらですか？', a: '機種ごとに異なるため、各社の公式サイトで要確認です。保証プランに加入している場合は安価または無料で再発行できるケースもあります。' },
  { q: '紛失保険はありますか？', a: '機種によってはオプションで紛失補償プランを提供しています。契約時に「紛失保証」「盗難補償」などのオプション有無を確認しましょう。' },
  { q: '落とさないための工夫は？', a: 'ランドセルの内側ポケット・ショルダーベルトへのストラップ固定・専用ケースの使用が一般的です。ポケットにそのまま入れておくのは落下リスクが高いため避けましょう。' },
  { q: '学校で紛失した場合は？', a: 'まず学校に連絡して落とし物の確認を依頼。アプリの最終位置情報も学校に共有すると見つかりやすくなります。' },
  { q: '紛失を機に他機種に乗り換えたい場合は？', a: '契約期間の縛りがなく解約金もかからない機種が多いため、乗り換えの障壁は低めです。乗り換え時の端末購入費用は別途発生します。' },
];

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function LossPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '紛失対策' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">子供GPSを紛失したら？対処法ガイド</h1>
          <p className="text-g600 text-lg">紛失時の4ステップ対応と、落とさないための装着工夫をまとめて解説</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">紛失時の対処 4ステップ</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: 'アプリで最終位置を確認', desc: '紛失に気付いたら、まずアプリで最新・最終の位置情報を確認します。学校帰り、公園、塾など行動履歴も役立ちます。' },
              { step: 2, title: '周辺を実際に探す', desc: '最終位置が分かったら、そのエリアを実際に探します。通学路・よく行く場所を中心に。' },
              { step: 3, title: '見つからない場合はサポートへ連絡', desc: '各社の問い合わせ窓口に紛失を伝え、端末の停止・再発行手続きを案内してもらいます。' },
              { step: 4, title: '学校・警察への届出', desc: '学校で紛失の可能性がある場合は学校に、路上などで落とした可能性がある場合は警察に遺失物届を提出します。' },
            ].map((item) => (
              <div key={item.step} className="card-hover p-5">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-blue text-white flex items-center justify-center font-bold flex-shrink-0">{item.step}</span>
                  <div>
                    <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                    <p className="text-sm text-g600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">落とさないための装着工夫</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">🎒</p>
              <h3 className="font-bold text-g800 mb-1">ランドセルの内側ポケット</h3>
              <p className="text-sm text-g600">チャック付きのポケットに入れれば落下リスクを大きく減らせます。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">🔗</p>
              <h3 className="font-bold text-g800 mb-1">ストラップ固定</h3>
              <p className="text-sm text-g600">ショルダーベルトのD環やカバンの内側にストラップで繋いでおくと安心。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">📦</p>
              <h3 className="font-bold text-g800 mb-1">専用ケース・カバー</h3>
              <p className="text-sm text-g600">各社が販売する専用カバーはストラップホール付きで落下防止に。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">✏️</p>
              <h3 className="font-bold text-g800 mb-1">名前・連絡先の記入</h3>
              <p className="text-sm text-g600">拾ってくれた方が連絡できるよう、名前と電話番号を記載しておく。</p>
            </div>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (<details key={i} className="faq-item"><summary>{faq.q}</summary><div className="faq-answer">{faq.a}</div></details>))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">紛失対策しやすい機種を探す</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">全機種ランキング</Link>
              <Link href="/knowledge/battery/" className="btn-accent">バッテリー詳細</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
