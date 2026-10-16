import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS トラブル対処ガイド | 位置ずれ・繋がらない・動かない時の対応',
  description:
    '子供GPSで起こりやすい5種類のトラブルと、その対処法を解説します。位置がずれる、更新されない、アプリがつながらない、電源が入らない、通知が届かない場合の確認事項を整理しています。',
};

const faqData = [
  { q: '位置情報がよくずれるのはなぜ？', a: '高層ビル街や地下では電波が届きにくく、測位の精度が低下することがあります。GPS衛星の電波を受信できない室内や、Wi-Fiが多すぎる環境でも誤差が出やすくなります。一度、屋外の開けた場所で再測位させると改善する場合があります。' },
  { q: 'アプリの位置情報が更新されない場合は？', a: '本体の電源、本体の通信状態、スマートフォン側の通信状態を順にご確認ください。更新頻度の設定が長くなっている場合もあるため、アプリ内の設定もあわせてご確認ください。' },
  { q: '本体の電源が入らない時の対処法は？', a: '最も多い原因は充電切れです。30分以上充電してから、再度電源ボタンを長押ししてください。それでも起動しない場合は、メーカーのサポート窓口にご相談ください。' },
  { q: '通知が届かない場合は？', a: 'スマートフォン側のアプリの通知許可、サイレントモード、おやすみモードの設定をご確認ください。iOSでは、通知が「通知の要約」に含まれて気づきにくくなる場合もあります。' },
  { q: 'アプリがすぐに終了する・動作が止まる場合は？', a: 'アプリの再起動、スマートフォンの再起動、アプリのアップデート、再インストールの順にお試しください。それでも解決しない場合は、OSのバージョンとの互換性をご確認ください。' },
  { q: 'トラブルが解決しない時は？', a: '各メーカーの公式サポート窓口（電話・メール・LINE）へのお問い合わせが確実です。本体の故障が疑われる場合は、購入を証明できるものをお手元にご用意ください。' },
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

const troubles = [
  {
    title: '位置情報がずれる',
    symptom: '自宅にいるのに、地図上では別の場所が表示されるなどの症状です。',
    causes: ['屋内・地下での電波の低下', 'Wi-Fi測位による誤差', 'GPS衛星を捕捉できていない状態'],
    actions: [
      '屋外の開けた場所で電源を入れ直し、再測位します',
      'アプリ側で位置更新ボタンを手動で押します',
      'Wi-Fiが多い場所では、時間を置いて再確認します',
    ],
  },
  {
    title: '位置が更新されない',
    symptom: '最終更新時刻が、長時間前のまま止まっている症状です。',
    causes: ['本体のバッテリー切れ', '通信圏外', '長すぎる更新頻度の設定'],
    actions: [
      '本体の電源・バッテリー残量を確認します',
      'お子さまが移動中の場合は、圏外が解消されるまで待ちます',
      'アプリの更新頻度の設定を見直します',
    ],
  },
  {
    title: 'アプリとつながらない',
    symptom: '地図が表示されない、エラーメッセージが表示されるなどの症状です。',
    causes: ['スマートフォン側の通信エラー', 'アプリからのログアウト', 'サーバー障害'],
    actions: [
      'スマートフォンのWi-Fi/モバイル通信を切り替えて試します',
      'アプリを一度終了して再起動します',
      '公式サイトやSNSで障害情報を確認します',
    ],
  },
  {
    title: '電源が入らない',
    symptom: '電源ボタンを押しても反応しない症状です。',
    causes: ['バッテリー切れ', '充電ケーブルの不良', '本体の故障'],
    actions: [
      '30分以上充電してから再起動します',
      '別のUSBケーブル・充電器で試します',
      '改善しない場合は、メーカーのサポートに相談します',
    ],
  },
  {
    title: '通知が届かない',
    symptom: 'エリアへの到着・出発の通知が届かない症状です。',
    causes: ['スマートフォンの通知許可がオフ', 'サイレント・おやすみモード', 'アプリ側の通知設定がオフ'],
    actions: [
      'スマートフォンの設定から、アプリの通知許可を確認します',
      'アプリ内の通知のオン/オフ設定を確認します',
      'エリア設定の座標・範囲が適切かを確認します',
    ],
  },
];

export default function TroubleshootPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPS トラブル対処ガイド", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'トラブル対処' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">トラブル対処</span>
            <span className="tag-pill bg-blue text-white">5種類を掲載</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS トラブル対処ガイド
          </h1>
          <p className="text-g600 text-lg">位置ずれ・つながらない・動かない場合の確認事項</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">よくあるトラブル5種類</h2>
          <p className="text-g600 mb-6">
            子供GPSの運用で起こりやすい5つのトラブルを整理しました。
            まずは簡単にできる確認から試し、それでも解決しない場合は、メーカーのサポートへご連絡ください。
          </p>

          <div className="space-y-6 mb-8">
            {troubles.map((t, idx) => (
              <div key={t.title} className="card-hover p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center font-bold text-sm">{idx + 1}</span>
                  <div>
                    <h3 className="font-bold text-g800 text-lg">{t.title}</h3>
                    <p className="text-sm text-g600">症状例：{t.symptom}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-orange-light rounded-lg p-4">
                    <p className="font-semibold text-orange-dark text-sm mb-2">考えられる原因</p>
                    <ul className="space-y-1 text-sm text-g700">
                      {t.causes.map((c) => <li key={c}>・{c}</li>)}
                    </ul>
                  </div>
                  <div className="bg-blue-light rounded-lg p-4">
                    <p className="font-semibold text-blue text-sm mb-2">対処法</p>
                    <ul className="space-y-1 text-sm text-g700">
                      {t.actions.map((a) => <li key={a}>・{a}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">解決しない場合の連絡先</h2>
          <div className="bg-green-light rounded-xl p-6 mb-8">
            <p className="text-sm text-g700 mb-3">
              基本的な対処で解決しない場合は、各メーカーの公式サポートへご連絡ください。保証期間内であれば、無償で対応される場合が多くあります。
            </p>
            <ul className="space-y-2 text-sm text-g700">
              <li>・購入時の注文番号や購入日の情報をご用意ください</li>
              <li>・エラー内容のスクリーンショットがあると、対応が早くなります</li>
              <li>・本体背面のシリアル番号を控えておくと、問い合わせが円滑になります</li>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">トラブル発生時の落ち着いた対処</h2>
            <p className="text-g600 mb-6 text-sm">症状と原因を整理したうえで、順を追って対処することをおすすめします。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/setup/" className="btn-primary">初期設定ガイド</Link>
              <Link href="/knowledge/loss/" className="btn-accent">紛失対策ページ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
