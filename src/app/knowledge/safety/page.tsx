import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'GPS 犯罪対策・不審者対策 | 見守りGPSの防犯活用法',
  description:
    'GPS端末が防犯に役立つ5つの場面を解説します。不審者情報と連動するみもり、SOS機能の活用法、通学路の安全設定など、GPS端末を犯罪対策に活かす方法を紹介します。',
};

const faqData = [
  { q: 'GPSで犯罪を防ぐことはできますか？', a: 'GPSは「犯罪を防ぐ」ためというより、「異常をいち早く察知する」ための手段です。エリア通知やSOS機能を活用することで、お子さまの異常に素早く気付き、対応できます。' },
  { q: '不審者情報と連動するGPS端末はある？', a: 'みもり（MIXI）は地域の不審者情報と連動しており、お子さまが不審者の出没エリアに近づくと通知を送ります。防犯を重視する場合は、みもりをおすすめします。' },
  { q: 'SOS機能はどの機種に搭載されている？', a: 'みもり、ソラノメ、myFirst Foneなどに、SOS/緊急ボタンが搭載されています。ボタンを押すと、保護者のスマートフォンにすぐ通知が届きます。' },
  { q: '通学路の安全設定とは？', a: 'エリア通知機能を使い、通学路上の地点（学校、交差点、自宅）を登録すると、お子さまの通過を自動で通知できます。寄り道や普段と異なるルートにも気付くことができます。' },
  { q: 'GPSと防犯ブザーは両方持たせるべき？', a: 'それぞれ異なる役割を果たすため、両方を持たせることをおすすめします。防犯ブザーは周囲に助けを求めるもの、GPSは保護者に位置を知らせるものです。' },
  { q: '万が一子供が連れ去られた場合、GPSは役立つ？', a: 'はい、GPSの移動履歴は警察への情報提供に役立ちます。ただし、GPSだけに頼らず、「知らない人についていかない」などの安全教育もあわせて行うことをおすすめします。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "GPS 犯罪対策・不審者対策", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '犯罪対策' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">犯罪対策</span>
            <span className="tag-pill bg-orange text-white">防犯活用法</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            GPS 犯罪対策・不審者対策
          </h1>
          <p className="text-g600 text-lg">GPS端末を防犯に活かす方法を解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">GPSが防犯に役立つ5つの場面</h2>
          <div className="space-y-4 mb-8">
            {[
              { icon: '🏫', title: '通学路の逸脱検知', desc: 'いつもの通学路から外れた場合に通知が届きます。寄り道や不審な行動パターンにいち早く気付くことができます。エリア通知を細かく設定することがポイントです。' },
              { icon: '🔔', title: '帰宅遅延の早期発見', desc: 'いつもの時間に学校のエリアを出発しない場合に気付くことができます。「まだ学校にいる」のか「別の場所にいる」のかを一目で確認できます。' },
              { icon: '🆘', title: 'SOSボタンで緊急通報', desc: '怖い思いをしたときに、ボタン一つで保護者に通知できます。位置情報も同時に通知されるため、すぐに駆け付けることができます。' },
              { icon: '⚠️', title: '不審者情報との連動', desc: 'みもりは地域の不審者情報と連動しています。お子さまが危険なエリアに近づくと、自動で保護者に通知を送ります。' },
              { icon: '📋', title: '移動履歴の記録', desc: '万が一の事態が起きた場合、移動履歴は警察への重要な情報提供になります。日々の行動記録は、安全を確認するための記録にもなります。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.icon} {item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">不審者情報との連動（みもり）</h2>
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

          <h2 className="section-title">SOS機能の活用法</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-g800 mb-2">SOS機能の使い方</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・端末のボタンを長押し（3秒）でSOS発信</li>
                <li>・保護者のスマートフォンに即時通知</li>
                <li>・位置情報も同時に送信</li>
                <li>・複数の見守り人に同時通知</li>
              </ul>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-g800 mb-2">お子さまへの教え方</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・「怖いことがあったら押す」ことを伝えます</li>
                <li>・実際にボタンを押す練習をします</li>
                <li>・いたずらで押さないことを約束します</li>
                <li>・定期的に使い方を確認します</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">通学路の安全設定</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">エリア通知を活用し、通学路の安全に関する設定を行うことをおすすめします。</p>
            <div className="space-y-3">
              {[
                { point: '自宅', desc: '自宅周辺にエリアを設定し、出発・帰宅を自動で通知します。' },
                { point: '学校', desc: '学校の敷地にエリアを設定し、到着・出発を確認します。' },
                { point: '危険な交差点', desc: '見通しの悪い交差点や交通量の多い道路を地点として登録します。' },
                { point: '習い事の教室', desc: '塾やスイミング教室など、放課後の行き先も登録します。' },
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">お子さまの安全を守るGPS端末の選び方</h2>
            <p className="text-g600 mb-6 text-sm">SOS機能や不審者情報との連動など、防犯面に優れた機種の比較をご覧ください。</p>
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
