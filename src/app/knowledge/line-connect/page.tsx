import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS LINE連携・みまもり通知の使い方 | 家族で共有するコツ',
  description:
    '子供GPSをLINEと組み合わせて使う方法を解説します。LINE通知への対応可否、LINEグループでの共有方法、メリット・デメリットをまとめています。',
};

const faqData = [
  { q: 'すべての子供GPSはLINEと連携できますか？', a: 'いいえ。LINE通知に公式に対応している機種は限られており、専用アプリでの通知のみに対応する機種も多くあります。LINE連携の可否は、各機種の公式サイトにて事前にご確認ください。' },
  { q: 'LINEで位置情報を共有するにはどうすればよいですか？', a: 'LINEの「位置情報送信」機能を使えば、GPS端末を使わずに親子で位置をやり取りすることも可能です。ただし、子供自身がLINEを開く必要があるため、常に位置を把握したい場合は専用のGPS端末の方が確実です。' },
  { q: 'LINEグループで家族全員に通知を送れますか？', a: '機種によっては、LINEグループへBot通知を送る機能を備えたものがあります。具体的な仕様は機種ごとに異なるため、公式サイトの「LINE通知」の項目をご確認ください。' },
  { q: 'LINE連携のデメリットは何ですか？', a: '通知がLINEのトーク通知と区別しにくくなり、重要なGPS通知を見落とす可能性があります。また、LINEのサーバー側の遅延により、通知が遅れるおそれもあります。' },
  { q: 'LINE LINKING機能は無料ですか？', a: 'LINE自体は無料ですが、連携機能の利用可否や追加料金の有無は機種によって異なります。公式サイトにて、料金プランを必ずご確認ください。' },
  { q: 'LINEを使わない家庭でも子供GPSは便利に使えますか？', a: 'はい。多くの子供GPSは、専用アプリのみで必要十分な機能を備えています。LINE連携はあくまで補助的な機能と位置付け、専用アプリでの見守りを基本とすることをおすすめします。' },
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

export default function LineConnectPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPS LINE連携・みまもり通知の使い方", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'LINE連携' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-green text-white">LINE連携</span>
            <span className="tag-pill bg-blue text-white">家族で共有</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS LINE連携・みまもり通知の使い方
          </h1>
          <p className="text-g600 text-lg">LINEと専用アプリを組み合わせた、家族での見守り方法を解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">LINE連携でできること</h2>
          <p className="text-g600 mb-6">
            子供GPSの専用アプリに加えて、LINEで通知を受け取ったり位置情報を共有したりできると、家族間の情報共有が容易になります。
            ただし、LINE連携への対応可否は機種によって異なるため、購入前に公式サイトにて機能の有無をご確認ください。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">💬</p>
              <h3 className="font-bold text-g800 mb-1">通知をLINEでも受け取る</h3>
              <p className="text-sm text-g600">到着・出発通知や低電力通知をLINEに転送できる機種があります。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">📍</p>
              <h3 className="font-bold text-g800 mb-1">LINEの位置情報機能と併用</h3>
              <p className="text-sm text-g600">塾や習い事から帰る際に、LINEで位置情報を送ってもらう運用も可能です。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">👨‍👩‍👧</p>
              <h3 className="font-bold text-g800 mb-1">家族グループで共有</h3>
              <p className="text-sm text-g600">LINEグループへ通知を送れば、祖父母や親戚にもリアルタイムで共有できます。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">🔕</p>
              <h3 className="font-bold text-g800 mb-1">通知のオン・オフの個別調整</h3>
              <p className="text-sm text-g600">LINE側で家族ごとに通知のオン・オフを切り替えれば、必要な人にだけ通知が届きます。</p>
            </div>
          </div>

          <h2 className="section-title">LINEで位置情報を共有する方法（LINE単体）</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: 'LINEのトーク画面を開く', desc: '子供と保護者のトーク画面を開きます。' },
              { step: 2, title: '「+」をタップ', desc: 'トーク入力欄の横にある「+」アイコンをタップします。' },
              { step: 3, title: '「位置情報」を選択', desc: 'メニューから「位置情報」を選び、現在地を送信します。' },
              { step: 4, title: '相手が地図で確認', desc: '受け取った側はマップアプリで位置を確認できます。' },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start card-hover p-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green text-white flex items-center justify-center font-bold text-sm">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-bold text-g800 text-sm">{s.title}</h3>
                  <p className="text-sm text-g600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-g500 mb-8">※LINE単体での位置情報の送信は、子供自身がスマートフォンを操作する必要があります。小学校低学年の場合や常時の見守りが必要な場合は、専用のGPS端末との併用をおすすめします。</p>

          <h2 className="section-title">メリット・デメリット</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・普段使っているLINEで通知を受け取れる</li>
                <li>・家族全員が同じチャットで情報共有できる</li>
                <li>・LINEグループで祖父母にも伝えやすい</li>
                <li>・専用アプリを開かずに位置状況を把握可能</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・全機種が対応しているわけではない</li>
                <li>・通知がLINEのトークに埋もれる可能性がある</li>
                <li>・LINEのサーバー遅延により通知が遅れるおそれがある</li>
                <li>・専用アプリほど詳細な履歴を確認できない場合がある</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">LINE連携の有無を確認する際のポイント</h2>
          <div className="card-hover p-5 mb-8">
            <ul className="space-y-2 text-sm text-g700">
              <li>・公式サイトの機能一覧で「LINE通知」「LINE連携」の項目を探す</li>
              <li>・アプリストアのレビューを「LINE通知」「便利」などのキーワードで検索する</li>
              <li>・公式FAQで設定方法や制限事項を確認する</li>
              <li>・不明点は各社のサポート窓口にお問い合わせいただく</li>
            </ul>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">家族で共有する見守りの活用方法</h2>
            <p className="text-g600 mb-6 text-sm">LINEと専用アプリを適切に組み合わせることで、家族全員で見守りの情報を共有できます。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/geofence/" className="btn-primary">エリア通知の設定</Link>
              <Link href="/purpose/family/" className="btn-accent">家族プラン比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
