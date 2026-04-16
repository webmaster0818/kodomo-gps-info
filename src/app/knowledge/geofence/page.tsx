import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS エリア通知（出発・到着通知）の使い方 | ジオフェンス完全ガイド',
  description:
    '子供GPSのエリア通知（ジオフェンス）の仕組みと設定方法を解説。自宅・学校・塾など登録できるエリア例や通知タイミングの設定のコツ、FAQまで網羅しました。',
};

const faqData = [
  { q: 'エリア通知とは何ですか？', a: '地図上にあらかじめ指定したエリア（自宅・学校・塾など）にお子さまが入ったり出たりしたときに、保護者のスマホに自動で通知が届く機能です。ジオフェンス（geofence）とも呼ばれます。' },
  { q: '何ヶ所まで登録できる？', a: '登録できるエリア数は機種によって異なります。主要機種は5〜10ヶ所以上登録できるものが多く、学校・塾・習い事などを一括で設定できます。' },
  { q: '通知が来ない時の原因は？', a: 'スマホ側の通知許可がOFFになっている、エリア範囲が狭すぎて検出されない、エリアの中心座標がずれている、などが考えられます。設定したエリアの範囲を少し広めにするのも有効です。' },
  { q: '出発と到着、どちらの通知を設定できる？', a: '多くの機種で「到着のみ」「出発のみ」「両方」を選べます。習い事に着いたら通知、塾を出たら通知、のように用途に応じて使い分けましょう。' },
  { q: 'エリア通知は遅れることがありますか？', a: 'GPS更新頻度や通信環境によって、数分〜10分程度の遅延が発生することがあります。特に屋内に入った瞬間は検出が遅れやすいです。' },
  { q: '時間帯による自動ON/OFFは可能？', a: '機種によっては「平日の朝のみ通知」など時間指定ができるものもあります。夜間の無駄な通知を減らすために活用しましょう。' },
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
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'エリア通知' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">ジオフェンス</span>
            <span className="tag-pill bg-blue text-white">出発・到着通知</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS エリア通知（ジオフェンス）の使い方
          </h1>
          <p className="text-g600 text-lg">自宅・学校・塾の到着・出発通知を家族で活用</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">エリア通知（ジオフェンス）の仕組み</h2>
          <p className="text-g600 mb-6">
            ジオフェンスは、GPS上に仮想的な境界線（フェンス）を設定し、その内側・外側への出入りを検知する技術です。
            子供GPSでは、この仕組みで「学校に着いた」「塾を出た」などを自動通知できます。
            「リアルタイム地図」に加えてジオフェンスを使いこなすと、毎回地図を開かなくてもお子さまの動きが把握できます。
          </p>

          <h2 className="section-title">登録するとよいエリア例</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: '🏠', title: '自宅', desc: '帰宅通知を設定すれば、家に着いたタイミングが自動で届きます。' },
              { icon: '🏫', title: '学校', desc: '朝の登校時・下校時の通知に。安全な動線を毎日確認できます。' },
              { icon: '📚', title: '塾・習い事', desc: '着いた/出た通知で「塾から迎えの時間」を把握できます。' },
              { icon: '🏋️', title: 'スポーツクラブ', desc: '練習終わりの通知で迎えの準備がしやすくなります。' },
              { icon: '🧓', title: '祖父母の家', desc: '学童代わりに利用するご家庭では、到着通知で安心。' },
              { icon: '🌳', title: '公園', desc: '遊びに行くエリアを設定すると、行動範囲を管理しやすい。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-2xl">{item.icon}</p>
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
              { step: 2, title: '地図上でエリアの中心を選ぶ', desc: 'ピンを立てる形で中心座標を指定。自宅や学校を選びます。' },
              { step: 3, title: '範囲を調整する', desc: '半径50〜200m程度。狭すぎると検知されないことがあるため、少し広めがおすすめ。' },
              { step: 4, title: 'エリア名と通知条件を設定', desc: '「学校」「塾」など名前を付け、到着/出発のどちらを通知するか選択。' },
              { step: 5, title: '保存して動作確認', desc: '実際にお子さまがエリアを通過した際に通知が届くかを確認。' },
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

          <h2 className="section-title">通知タイミング設定のコツ</h2>
          <div className="bg-blue-light rounded-xl p-6 mb-8">
            <ul className="space-y-2 text-sm text-g700">
              <li>・範囲を半径100m前後に設定すると検知漏れが少なくなります。</li>
              <li>・重要なエリア（学校・自宅）は「到着・出発の両方」を通知に。</li>
              <li>・寄り道が多い場所は「到着のみ」に絞ると通知過多を防げます。</li>
              <li>・夜間は通知OFFなど、時間帯指定ができる機種は積極的に活用。</li>
            </ul>
          </div>

          <h2 className="section-title">通知が届かない時のチェックリスト</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'スマホの通知許可', desc: 'アプリに通知権限が付与されているか確認。' },
              { title: 'エリアの範囲', desc: '狭すぎると検出されないため50〜200mに調整。' },
              { title: '中心座標のずれ', desc: '地図上で実際の住所とずれていないか確認。' },
              { title: 'バッテリー最適化', desc: 'Android端末ではバッテリー最適化対象から除外する。' },
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

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">「今どこ？」をなくす見守りを</h2>
            <p className="text-g600 mb-6 text-sm">エリア通知を上手に使えば、毎回地図を開く手間がぐっと減ります。</p>
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
