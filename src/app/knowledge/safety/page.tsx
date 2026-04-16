import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'GPS 犯罪対策・不審者対策 | 見守りGPSの防犯活用法',
  description:
    'GPS端末が防犯に役立つ場面5つを解説。不審者情報連動のみもり、SOS機能の活用法、通学路の安全設定まで、GPS端末を犯罪対策に活かす方法を紹介。',
};

const faqData = [
  { q: 'GPSで犯罪を防ぐことはできますか？', a: 'GPSは「犯罪を防ぐ」というより「異常をいち早く察知する」ツールです。エリア通知やSOS機能を活用することで、お子さまの異常に素早く気づき、対応できます。' },
  { q: '不審者情報と連動するGPS端末はある？', a: 'みもり（MIXI）は地域の不審者情報と連動し、お子さまが不審者の出没エリアに近づくと通知を送ります。防犯を重視するならみもりがおすすめです。' },
  { q: 'SOS機能はどの機種に搭載されている？', a: 'みもり、ソラノメ、myFirst Fone等にSOS/緊急ボタンが搭載されています。ボタンを押すと保護者のスマホに即座に通知が届きます。' },
  { q: '通学路の安全設定とは？', a: 'エリア通知機能を使い、通学路上のポイント（学校、交差点、自宅）を登録すると、お子さまの通過を自動で通知できます。寄り道や異常ルートにも気づけます。' },
  { q: 'GPSと防犯ブザーは両方持たせるべき？', a: 'どちらも異なる役割を果たすので、両方持たせるのが理想的です。防犯ブザーは周囲に助けを求め、GPSは保護者に位置を知らせます。' },
  { q: '万が一子供が連れ去られた場合、GPSは役立つ？', a: 'はい、GPSの移動履歴は警察への情報提供に役立ちます。ただしGPSだけに頼らず、「知らない人についていかない」等の安全教育も合わせて行いましょう。' },
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

export default function SafetyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '犯罪対策' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">犯罪対策</span>
            <span className="tag-pill bg-orange text-white">防犯活用法</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            GPS 犯罪対策・不審者対策
          </h1>
          <p className="text-g600 text-lg">GPS端末を防犯に活かす方法を詳しく解説します</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">GPSが防犯に役立つ場面5つ</h2>
          <div className="space-y-4 mb-8">
            {[
              { icon: '🏫', title: '通学路の逸脱検知', desc: 'いつもの通学路から外れた場合に通知。寄り道や不審な行動パターンにいち早く気づけます。エリア通知を細かく設定するのがポイント。' },
              { icon: '🔔', title: '帰宅遅延の早期発見', desc: 'いつもの時間に学校エリアを出発しない場合に気づける。「まだ学校にいる」のか「別の場所にいる」のかが一目でわかります。' },
              { icon: '🆘', title: 'SOSボタンで緊急通報', desc: '怖い思いをした時にボタン一つで保護者に通知。位置情報と同時に通知されるので、すぐに駆けつけることができます。' },
              { icon: '⚠️', title: '不審者情報との連動', desc: 'みもりは地域の不審者情報と連動。お子さまが危険エリアに近づくと自動で保護者に通知を送ります。' },
              { icon: '📋', title: '移動履歴の記録', desc: '万が一の事態が起きた場合、移動履歴は警察への重要な情報提供になります。日々の行動記録が安全の証拠に。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.icon} {item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">不審者情報連動（みもり）</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">
              みもりは、地域で報告された不審者情報と連動した唯一のGPS端末です。
              各自治体やPTAが発信する不審者情報をリアルタイムで取得し、
              お子さまが該当エリアに近づいた場合に保護者へ通知を送ります。
            </p>
            <div className="bg-orange-light rounded-xl p-4">
              <h3 className="font-bold text-orange-dark mb-2">みもりの不審者対策機能</h3>
              <ul className="space-y-1 text-sm text-g700">
                <li>・地域の不審者情報をリアルタイムで受信</li>
                <li>・お子さまが危険エリアに接近すると通知</li>
                <li>・端末本体から警告音を鳴らせる機能</li>
                <li>・保護者同士で情報共有が可能</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">SOS機能活用法</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-g800 mb-2">SOS機能の使い方</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・端末のボタンを長押し（3秒）でSOS発信</li>
                <li>・保護者のスマホに即時通知</li>
                <li>・位置情報が同時に送信される</li>
                <li>・複数の見守り人に同時通知</li>
              </ul>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-g800 mb-2">子供への教え方</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・「怖いことがあったら押してね」と伝える</li>
                <li>・実際にボタンを押す練習をする</li>
                <li>・いたずら押しはしないことを約束</li>
                <li>・定期的に使い方を確認する</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">通学路の安全設定</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">エリア通知を活用して、通学路の安全を設定しましょう。</p>
            <div className="space-y-3">
              {[
                { point: '自宅', desc: '自宅周辺にエリアを設定。出発・帰宅を自動通知。' },
                { point: '学校', desc: '学校の敷地にエリアを設定。到着・出発を確認。' },
                { point: '危険な交差点', desc: '見通しの悪い交差点や交通量の多い道路をポイント登録。' },
                { point: '習い事の教室', desc: '塾やスイミング教室など、放課後の行き先も登録。' },
              ].map((item) => (
                <div key={item.point} className="flex items-start gap-3 bg-blue-light rounded-lg p-3">
                  <span className="font-bold text-blue text-sm whitespace-nowrap">{item.point}</span>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">お子さまの安全を守るGPS端末を選ぼう</h2>
            <p className="text-g600 mb-6 text-sm">SOS機能や不審者連動など、防犯に強い機種を比較しましょう。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/mimori/" className="btn-primary">みもりのレビュー</Link>
              <Link href="/" className="btn-accent">おすすめランキング</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
