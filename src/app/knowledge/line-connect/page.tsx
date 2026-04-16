import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS LINE連携・みまもり通知の使い方 | 家族で共有するコツ',
  description:
    '子供GPSをLINEで使う方法を解説。LINE通知への対応可否、LINEグループでの共有アイデア、メリット・デメリットをまとめ、家族の見守りをもっと便利にします。',
};

const faqData = [
  { q: 'すべての子供GPSはLINEと連携できますか？', a: 'いいえ。LINE通知に公式対応している機種は限られ、専用アプリの通知のみの機種も多いです。LINE連携の可否は各機種の公式サイトで事前に確認してください。' },
  { q: 'LINEで位置情報を共有するにはどうすれば？', a: 'LINEの「位置情報送信」機能を使えば、親子でGPS端末に頼らずに位置をやり取りすることも可能です。ただし子供側が自分でLINEを開く必要があるため、常時把握したい場合は専用GPSの方が確実です。' },
  { q: 'LINEグループで家族全員に通知を飛ばせますか？', a: '機種によっては、LINEグループへBot通知を送る機能を持つものがあります。具体的な仕様は機種ごとに異なるため、公式サイトで「LINE通知」の項目を確認しましょう。' },
  { q: 'LINE連携のデメリットは？', a: '通知音がLINEのトーク通知と同化してしまい、重要なGPS通知を見落とす可能性があります。また、LINEサーバー側の遅延で通知が遅れるリスクもあります。' },
  { q: 'LINE LINKING機能は無料ですか？', a: 'LINE自体は無料ですが、連携機能の利用可否や追加料金の有無は機種によります。公式サイトで料金プランを必ず確認してください。' },
  { q: 'LINEを使わない家庭でも子供GPSは便利？', a: 'はい。多くの子供GPSは専用アプリのみで必要十分な機能を持ちます。LINE連携はあくまで補助的な機能と位置付け、専用アプリでの見守りを基本にしましょう。' },
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
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'LINE連携' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-green text-white">LINE連携</span>
            <span className="tag-pill bg-blue text-white">家族で共有</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS LINE連携・みまもり通知の使い方
          </h1>
          <p className="text-g600 text-lg">LINEと専用アプリを組み合わせて家族の見守りを便利に</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">LINE連携でできること</h2>
          <p className="text-g600 mb-6">
            子供GPSの専用アプリだけでなく、LINEで通知を受け取ったり位置情報を共有したりできると、家族への情報共有がぐっと楽になります。
            ただしLINE連携は機種によって対応可否が異なるため、購入前に公式サイトで機能の有無を確認しておきましょう。
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
              <p className="text-sm text-g600">塾や習い事から帰る時はLINEで位置情報を送ってもらう運用も。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">👨‍👩‍👧</p>
              <h3 className="font-bold text-g800 mb-1">家族グループで共有</h3>
              <p className="text-sm text-g600">LINEグループへ通知を飛ばせば、祖父母や親戚にもリアルタイムで共有可能。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">🔕</p>
              <h3 className="font-bold text-g800 mb-1">通知OFFの個別調整</h3>
              <p className="text-sm text-g600">LINE側で家族ごとに通知ON/OFFを切り替えれば、必要な人だけに届く。</p>
            </div>
          </div>

          <h2 className="section-title">LINEで位置情報を共有する方法（LINE単体）</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: 'LINEのトーク画面を開く', desc: '子供と保護者のトーク画面に入ります。' },
              { step: 2, title: '「+」をタップ', desc: 'トーク入力欄の横の「+」アイコンをタップ。' },
              { step: 3, title: '「位置情報」を選択', desc: 'メニューから「位置情報」を選び、現在地を送信。' },
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
          <p className="text-sm text-g500 mb-8">※LINE単体の位置情報送信は、子供側が自分でスマホを操作する必要があります。小学生低学年や常時見守りが必要な場合は専用GPSと併用しましょう。</p>

          <h2 className="section-title">メリット・デメリット</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・普段使いのLINEで通知が届く手軽さ</li>
                <li>・家族全員が同じチャットで情報共有できる</li>
                <li>・LINEグループで祖父母にも伝えやすい</li>
                <li>・専用アプリを開かずに位置状況を把握可能</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・全機種が対応しているわけではない</li>
                <li>・通知がLINEトークに埋もれてしまう可能性</li>
                <li>・LINEサーバー遅延で通知が遅れるリスク</li>
                <li>・専用アプリほど詳細な履歴は見られないケースあり</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">LINE連携の有無を確認する際のポイント</h2>
          <div className="card-hover p-5 mb-8">
            <ul className="space-y-2 text-sm text-g700">
              <li>・公式サイトの機能一覧で「LINE通知」「LINE連携」の項目を探す</li>
              <li>・アプリストアのレビューに「LINE通知」「便利」などのキーワードで検索</li>
              <li>・公式FAQで設定方法や制限事項を確認</li>
              <li>・不明点は各社サポート窓口に問い合わせ</li>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">家族の輪で見守りをもっと便利に</h2>
            <p className="text-g600 mb-6 text-sm">LINEと専用アプリをうまく組み合わせて、家族全員で安心を共有しましょう。</p>
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
