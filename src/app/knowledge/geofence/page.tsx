import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS エリア通知（出発・到着通知）の使い方 | ジオフェンスガイド',
  description:
    '子供GPSのエリア通知（ジオフェンス）の仕組みと設定方法を解説します。自宅・学校・塾など登録できるエリアの例、通知タイミングの設定のポイント、よくある質問を掲載しています。',
};

const faqData = [
  { q: 'エリア通知とは何ですか？', a: '地図上にあらかじめ指定したエリア（自宅・学校・塾など）にお子さまが入ったり出たりしたときに、保護者のスマートフォンに自動で通知が届く機能です。ジオフェンス（geofence）とも呼ばれます。' },
  { q: '何カ所まで登録できますか？', a: '登録できるエリア数は、機種によって異なります。主要機種には5〜10カ所以上を登録できるものが多く、学校・塾・習い事などをまとめて設定できます。' },
  { q: '通知が届かない場合、どのような原因が考えられますか？', a: 'スマートフォン側の通知許可がオフになっている、エリアの範囲が狭すぎて検出されない、エリアの中心座標がずれている、などが考えられます。設定したエリアの範囲を少し広めにすることも有効です。' },
  { q: '出発と到着のどちらの通知を設定できますか？', a: '多くの機種で、「到着のみ」「出発のみ」「両方」から選択できます。習い事に着いたときに通知する、塾を出たときに通知するなど、用途に応じた使い分けをおすすめします。' },
  { q: 'エリア通知は遅れることがありますか？', a: 'GPSの更新頻度や通信環境によって、数分〜10分程度の遅延が発生することがあります。特に、屋内に入った直後は検出が遅れやすい傾向があります。' },
  { q: '時間帯による通知の自動オン・オフは可能ですか？', a: '機種によっては、「平日の朝のみ通知」など時間を指定できるものもあります。夜間の不要な通知を減らすために、活用をおすすめします。' },
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

export default function GeofencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPS エリア通知（出発・到着通知）の使い方", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'エリア通知' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">ジオフェンス</span>
            <span className="tag-pill bg-blue text-white">出発・到着通知</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS エリア通知（ジオフェンス）の使い方
          </h1>
          <p className="text-g600 text-lg">自宅・学校・塾の到着・出発通知を家族で活用する方法を解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">エリア通知（ジオフェンス）の仕組み</h2>
          <p className="text-g600 mb-6">
            ジオフェンスは、GPS上に仮想的な境界線（フェンス）を設定し、その内側・外側への出入りを検知する技術です。
            子供GPSでは、この仕組みにより「学校に着いた」「塾を出た」などを自動で通知できます。
            「リアルタイム地図」に加えてエリア通知を活用すると、毎回地図を開かなくてもお子さまの動きを把握できます。
          </p>

          <h2 className="section-title">登録に適したエリアの例</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: '', title: '自宅', desc: '帰宅通知を設定すれば、家に着いたタイミングが自動で届きます。' },
              { icon: '', title: '学校', desc: '朝の登校時・下校時の通知に活用できます。安全な動線を毎日確認できます。' },
              { icon: '', title: '塾・習い事', desc: '到着・出発の通知により、塾へのお迎えの時間を把握できます。' },
              { icon: '', title: 'スポーツクラブ', desc: '練習終わりの通知で迎えの準備がしやすくなります。' },
              { icon: '', title: '祖父母の家', desc: '学童の代わりに利用するご家庭では、到着通知により安心して見守れます。' },
              { icon: '', title: '公園', desc: '遊びに行くエリアを設定すると、行動範囲を管理しやすくなります。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <div>
                  <h3 className="font-bold text-g800">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">エリア通知の設定手順（共通の流れ）</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: 'アプリの「エリア」メニューを開く', desc: '多くの機種では地図画面の中にエリア設定メニューがあります。' },
              { step: 2, title: '地図上でエリアの中心を選ぶ', desc: 'ピンを立てる形で中心座標を指定し、自宅や学校を選びます。' },
              { step: 3, title: '範囲を調整する', desc: '半径50〜200m程度に設定します。狭すぎると検知されないことがあるため、少し広めの設定をおすすめします。' },
              { step: 4, title: 'エリア名と通知条件を設定', desc: '「学校」「塾」などの名前を付け、到着・出発のどちらを通知するかを選択します。' },
              { step: 5, title: '保存して動作確認', desc: '実際にお子さまがエリアを通過した際に、通知が届くかを確認します。' },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start card-hover p-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center font-bold text-sm">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-bold text-g800 text-sm">{s.title}</h3>
                  <p className="text-sm text-g600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">通知タイミングの設定のポイント</h2>
          <div className="bg-blue-light rounded-xl p-6 mb-8">
            <ul className="space-y-2 text-sm text-g700">
              <li>・範囲を半径100m前後に設定すると検知漏れが少なくなります。</li>
              <li>・重要なエリア（学校・自宅）は、「到着・出発の両方」を通知に設定することをおすすめします。</li>
              <li>・寄り道が多い場所は「到着のみ」に絞ると、通知が多くなりすぎることを防げます。</li>
              <li>・夜間は通知をオフにするなど、時間帯を指定できる機種では積極的な活用をおすすめします。</li>
            </ul>
          </div>

          <h2 className="section-title">通知が届かない場合のチェックリスト</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'スマートフォンの通知許可', desc: 'アプリに通知権限が付与されているかを確認します。' },
              { title: 'エリアの範囲', desc: '狭すぎると検出されないため、50〜200mに調整します。' },
              { title: '中心座標のずれ', desc: '地図上で、実際の住所とずれていないかを確認します。' },
              { title: 'バッテリー最適化', desc: 'Android端末では、アプリをバッテリー最適化の対象から除外します。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">エリア通知を活用した見守り</h2>
            <p className="text-g600 mb-6 text-sm">エリア通知を活用することで、毎回地図を開く手間を大きく減らすことができます。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/setup/" className="btn-primary">初期設定ガイド</Link>
              <Link href="/knowledge/troubleshoot/" className="btn-accent">トラブル対処法</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
