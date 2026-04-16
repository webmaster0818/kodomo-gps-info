import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS トラブル対処ガイド | 位置ずれ・繋がらない・動かない時の対応',
  description:
    '子供GPSで起こりやすいトラブル5種類と対処法を解説。位置がずれる・更新されない・アプリが繋がらない・電源が入らない・通知が来ない時のチェックポイントを整理しました。',
};

const faqData = [
  { q: '位置情報がよくずれるのはなぜ？', a: '高層ビル街や地下では電波が届きにくく、測位精度が低下することがあります。GPS衛星の電波を受信できない室内や、Wi-Fiが多すぎる環境でも誤差が出やすいです。一度屋外の開けた場所で再測位させると改善することがあります。' },
  { q: 'アプリに位置情報が更新されません。', a: '本体の電源・通信状態・スマホ側の通信状態を順にチェックしてください。更新頻度の設定が長くなっている場合もあるため、アプリ内の設定も確認しましょう。' },
  { q: '本体の電源が入らない時の対処法は？', a: '充電切れが最も多い原因です。30分以上充電してから再度電源ボタンを長押ししてください。それでも起動しない場合はメーカーのサポート窓口に相談を。' },
  { q: '通知が届かない場合は？', a: 'スマホ側のアプリ通知許可・サイレントモード・おやすみモードをチェックしてください。iOSでは「通知の要約」に入って気づきにくくなる場合もあります。' },
  { q: 'アプリがすぐ落ちる・固まる。', a: 'アプリの再起動・スマホの再起動・アプリのアップデート・再インストールの順で試してください。それでも解決しない場合はOSバージョンとの互換性を確認しましょう。' },
  { q: 'トラブルが解決しない時は？', a: '各メーカーの公式サポート窓口（電話・メール・LINE）に問い合わせるのが確実です。本体の故障が疑われる場合は購入証明を手元に用意しておきましょう。' },
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
    symptom: '自宅にいるのに地図上では別の場所になる、など。',
    causes: ['屋内・地下での電波低下', 'Wi-Fi測位による誤差', 'GPS衛星を補足できていない'],
    actions: [
      '屋外の開けた場所で電源を入れ直して再測位',
      'アプリ側で位置更新ボタンを手動で押す',
      'Wi-Fiが多い場所では時間を置いて再確認',
    ],
  },
  {
    title: '位置が更新されない',
    symptom: '最終更新時刻が長時間前のまま止まっている。',
    causes: ['本体のバッテリー切れ', '通信圏外', '更新頻度の設定が長い'],
    actions: [
      '本体の電源・バッテリー残量を確認',
      '移動中のお子さまの場合、圏外が解消されるまで待つ',
      'アプリの更新頻度設定を見直す',
    ],
  },
  {
    title: 'アプリと繋がらない',
    symptom: '地図が表示されない、エラーメッセージが出る。',
    causes: ['スマホ側の通信エラー', 'アプリのログアウト状態', 'サーバー障害'],
    actions: [
      'スマホのWi-Fi/モバイル通信を切り替えて試す',
      'アプリを一度終了して再起動',
      '公式サイトやSNSで障害情報を確認',
    ],
  },
  {
    title: '電源が入らない',
    symptom: '電源ボタンを押しても反応しない。',
    causes: ['バッテリー切れ', '充電ケーブル不良', '本体故障'],
    actions: [
      '30分以上充電してから再起動',
      '別のUSBケーブル・充電器で試す',
      '改善しない場合はメーカーサポートへ',
    ],
  },
  {
    title: '通知が届かない',
    symptom: 'エリア到着・出発通知が来ない。',
    causes: ['スマホの通知許可がOFF', 'サイレント・おやすみモード', 'アプリ側の通知設定OFF'],
    actions: [
      'スマホの設定からアプリの通知許可を確認',
      'アプリ内の通知ON/OFF設定を確認',
      'エリア設定の座標・範囲が適切かチェック',
    ],
  },
];

export default function TroubleshootPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'トラブル対処' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">トラブル対処</span>
            <span className="tag-pill bg-blue text-white">5種類を網羅</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS トラブル対処ガイド
          </h1>
          <p className="text-g600 text-lg">位置ずれ・繋がらない・動かない時のチェックポイント</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">よくあるトラブル5種類</h2>
          <p className="text-g600 mb-6">
            子供GPSの運用で起こりやすい5つのトラブルを整理しました。
            まずは簡単にできるチェックから試し、それでも解決しない場合はメーカーサポートへ連絡しましょう。
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

          <h2 className="section-title">それでも解決しない時の連絡先</h2>
          <div className="bg-green-light rounded-xl p-6 mb-8">
            <p className="text-sm text-g700 mb-3">
              基本的な対処で解決しない場合は、各メーカー公式サポートへ連絡してください。保証期間内であれば無償対応となるケースが多いです。
            </p>
            <ul className="space-y-2 text-sm text-g700">
              <li>・購入時の注文番号や購入日の情報を用意</li>
              <li>・エラー内容のスクリーンショットがあると対応が早い</li>
              <li>・本体背面のシリアル番号を控えておくと便利</li>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">万が一の時も慌てず対処</h2>
            <p className="text-g600 mb-6 text-sm">症状と原因を整理して、冷静にトラブルシュートしていきましょう。</p>
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
