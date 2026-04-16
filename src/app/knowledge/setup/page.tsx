import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS 初期設定・使い方ガイド | アプリDLから開始まで5ステップ',
  description:
    '子供GPSの初期設定の流れを5ステップで解説。主要機種のアプリ対応OSやつまずきやすいポイントもまとめ、購入初日にスムーズに使い始められるようにサポートします。',
};

const faqData = [
  { q: '購入してからどれくらいで使い始められる？', a: 'アプリのダウンロードとペアリングを含めて、おおむね30分〜1時間で利用開始できます。初回充電の時間を含めると半日程度みておくと確実です。' },
  { q: 'アプリは何人までインストールできますか？', a: '機種によって異なりますが、多くの子供GPSは複数の保護者アカウントでログインできます。BoTトークのように見守り人数無制限のものや、まもサーチのように最大25人まで追加できる機種もあります。' },
  { q: 'iPhoneとAndroidの両方で使える？', a: '主要機種はiOSとAndroidの両方に対応しています。パパとママで端末OSが違っても、同じアカウントでログインすれば同じ位置情報を共有できます。' },
  { q: '初期設定でつまずきやすいポイントは？', a: '「本体が充電されていない」「Bluetooth設定がOFFになっている」「位置情報許可をアプリに与えていない」の3つが特に多い原因です。スマホ側の権限設定もチェックしましょう。' },
  { q: 'SIMカードの差し替えは必要ですか？', a: '多くの子供GPSは通信費込みのプランで提供されるため、SIMは端末に内蔵済みです。自分でSIMを用意する必要はありません。キッズ携帯など一部機種はキャリアSIM契約が別途必要です。' },
  { q: '設定がうまくいかない場合はどうする？', a: 'まずアプリの再起動・端末の再起動を試してください。それでも解決しない場合は各メーカーのサポート窓口に問い合わせを。当サイトのトラブル対処ページ（/knowledge/troubleshoot/）も参考にしてください。' },
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

export default function SetupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '初期設定・使い方' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">初期設定</span>
            <span className="tag-pill bg-orange text-white">5ステップ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS 初期設定・使い方ガイド
          </h1>
          <p className="text-g600 text-lg">購入から使い始めまでの流れを5ステップで解説</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">初期設定の基本5ステップ</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: '開封・付属品の確認', desc: '本体・充電ケーブル・説明書が揃っているか確認。初期不良がないか簡単に外観をチェックします。' },
              { step: 2, title: '本体を充電', desc: '初回は満充電にしてから使い始めます。充電中は電源ランプが点灯する機種が多いです。' },
              { step: 3, title: 'SIM・通信の有効化', desc: '通信費込みの機種はSIM作業不要。電源を入れて通信が確立するまで数分待ちます。' },
              { step: 4, title: 'アプリをダウンロード', desc: 'iOS/Androidストアから指定アプリをインストール。アカウント登録を済ませます。' },
              { step: 5, title: 'ペアリング・位置確認', desc: 'QRコードや機器コードで本体とアカウントを紐付け。地図上に現在地が表示されれば完了です。' },
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

          <h2 className="section-title">主要機種のアプリ対応OS</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue text-white">
                  <th className="p-3 text-left">機種</th>
                  <th className="p-3 text-center">iOS</th>
                  <th className="p-3 text-center">Android</th>
                  <th className="p-3 text-left">アプリ名の例</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'みてねみまもりGPS', ios: '対応', android: '対応', app: 'みてねみまもりGPS', href: '/review/mitene/' },
                  { name: 'BoTトーク', ios: '対応', android: '対応', app: 'BoT Home', href: '/review/bot-talk/' },
                  { name: 'あんしんウォッチャー', ios: '対応', android: '対応', app: 'あんしんウォッチャー', href: '/review/anshin-watcher/' },
                  { name: 'まもサーチ', ios: '対応', android: '対応', app: 'まもサーチ', href: '/review/mamosearch/' },
                  { name: 'どこかなGPS', ios: '対応', android: '対応', app: 'どこかなGPS', href: '/review/dokokana/' },
                  { name: 'SayuU', ios: '対応', android: '対応', app: 'SayuU', href: '/review/sayuu/' },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-g100">
                    <td className="p-3"><Link href={row.href} className="text-blue hover:underline font-semibold">{row.name}</Link></td>
                    <td className="p-3 text-center text-g600">{row.ios}</td>
                    <td className="p-3 text-center text-g600">{row.android}</td>
                    <td className="p-3 text-g600">{row.app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">※各ストアでの公開名やバージョンは変更される場合があります。最新のアプリ名・対応OSは公式サイトで確認してください。</p>

          <h2 className="section-title">つまずきやすいポイント</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'スマホの位置情報権限', desc: 'iOSは「Appの使用中のみ許可」ではなく「常に許可」に設定しないと、背景時の通知が機能しない場合があります。' },
              { title: 'Bluetooth・Wi-Fi', desc: '初期ペアリングにBluetoothやWi-Fi設定が必要なケースがあります。事前にONにしておくとスムーズ。' },
              { title: '通知の許可', desc: 'アプリからのプッシュ通知を許可しておかないと、到着・出発通知が届きません。' },
              { title: '電源ON方法', desc: '電源ボタンを長押しする機種が多く、最初は認識しづらいことがあります。説明書の指示に従いましょう。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">使い始め後に設定したい項目</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: 'エリア通知（ジオフェンス）', desc: '自宅・学校・塾を登録して出発/到着通知をON。エリア通知ガイドも合わせて確認しましょう。', href: '/knowledge/geofence/' },
              { title: '更新頻度', desc: '1〜3分で細かく追跡するか、10〜15分で省エネにするかを選択。', href: null as string | null },
              { title: '見守り人の追加', desc: '家族やシッターさんのアカウントを招待して、複数の大人で見守り。', href: null as string | null },
              { title: '通知音・音量', desc: 'スマホ側で通知音を設定し、重要な通知を見逃さないようにしましょう。', href: null as string | null },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">
                  {item.href ? <Link href={item.href} className="text-blue hover:underline">{item.title}</Link> : item.title}
                </h3>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">スムーズに見守りを始めよう</h2>
            <p className="text-g600 mb-6 text-sm">初期設定のコツを押さえれば、購入初日から安心の見守りがスタートできます。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/troubleshoot/" className="btn-primary">トラブル時の対処法</Link>
              <Link href="/knowledge/geofence/" className="btn-accent">エリア通知の設定</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
