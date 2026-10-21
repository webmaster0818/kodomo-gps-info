import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS 初期設定・使い方ガイド | アプリDLから開始まで5ステップ',
  description:
    '子供GPSの初期設定の流れを5ステップで解説します。主要機種のアプリ対応OSや、設定時につまずきやすいポイントもまとめ、購入初日から円滑に使い始められるよう説明します。',
};

const faqData = [
  { q: '購入してからどれくらいで使い始められますか？', a: 'アプリのダウンロードとペアリングを含めて、おおむね30分〜1時間で利用を開始できます。初回の充電時間を含める場合は、半日程度を見込んでおくことをおすすめします。' },
  { q: 'アプリは何人までインストールできますか？', a: '機種によって異なりますが、多くの子供GPSは複数の保護者アカウントでログインできます。BoTトークのように見守り人数が無制限の機種や、まもサーチのように最大25人まで追加できる機種もあります。' },
  { q: 'iPhoneとAndroidの両方で使えますか？', a: '主要機種はiOSとAndroidの両方に対応しています。保護者間で端末のOSが異なる場合でも、同じアカウントでログインすれば同じ位置情報を共有できます。' },
  { q: '初期設定でつまずきやすいポイントは何ですか？', a: '「本体が充電されていない」「Bluetoothの設定がOFFになっている」「アプリに位置情報の利用を許可していない」の3つが、特に多い原因です。スマートフォン側の権限設定もあわせてご確認ください。' },
  { q: 'SIMカードの差し替えは必要ですか？', a: '多くの子供GPSは通信費込みのプランで提供されており、SIMは端末に内蔵されています。ご自身でSIMを用意する必要はありません。ただし、キッズ携帯など一部の機種では、キャリアのSIM契約が別途必要です。' },
  { q: '設定がうまくいかない場合はどうすればよいですか？', a: 'まず、アプリと端末の再起動をお試しください。それでも解決しない場合は、各メーカーのサポート窓口にお問い合わせください。当サイトのトラブル対処ページ（/knowledge/troubleshoot/）もあわせてご参照ください。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPS 初期設定・使い方ガイド", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '初期設定・使い方' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">初期設定</span>
            <span className="tag-pill bg-orange text-white">5ステップ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS 初期設定・使い方ガイド
          </h1>
          <p className="text-g600 text-lg">購入から使い始めるまでの流れを5ステップで解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">初期設定の基本5ステップ</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: '開封・付属品の確認', desc: '本体・充電ケーブル・説明書がそろっているかを確認します。あわせて、初期不良がないか外観を確認します。' },
              { step: 2, title: '本体を充電', desc: '初回は満充電にしてから使い始めます。充電中は電源ランプが点灯する機種が多くあります。' },
              { step: 3, title: 'SIM・通信の有効化', desc: '通信費込みの機種では、SIMの作業は不要です。電源を入れ、通信が確立するまで数分待ちます。' },
              { step: 4, title: 'アプリをダウンロード', desc: 'iOS/Androidのストアから指定のアプリをインストールし、アカウント登録を済ませます。' },
              { step: 5, title: 'ペアリング・位置確認', desc: 'QRコードや機器コードで、本体とアカウントを紐付けます。地図上に現在地が表示されれば完了です。' },
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
          <p className="text-xs text-g500 mb-8">※各ストアでの公開名やバージョンは変更される場合があります。最新のアプリ名・対応OSは、公式サイトにてご確認ください。</p>

          <h2 className="section-title">つまずきやすいポイント</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'スマートフォンの位置情報権限', desc: 'iOSでは「Appの使用中のみ許可」ではなく「常に許可」に設定しないと、バックグラウンドでの通知が機能しない場合があります。' },
              { title: 'Bluetooth・Wi-Fi', desc: '初回のペアリングに、BluetoothやWi-Fiの設定が必要な場合があります。事前にONにしておくと、円滑に設定できます。' },
              { title: '通知の許可', desc: 'アプリからのプッシュ通知を許可していない場合、到着・出発の通知が届きません。' },
              { title: '電源ON方法', desc: '電源ボタンを長押しする機種が多く、最初は操作がわかりにくい場合があります。説明書の指示に従って操作してください。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">使用開始後に設定する項目</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: 'エリア通知（ジオフェンス）', desc: '自宅・学校・塾を登録し、出発／到着の通知をONにします。エリア通知のガイドもあわせてご確認ください。', href: '/knowledge/geofence/' },
              { title: '更新頻度', desc: '1〜3分間隔で細かく追跡するか、10〜15分間隔で電池の消費を抑えるかを選択します。', href: null as string | null },
              { title: '見守り人の追加', desc: 'ご家族やベビーシッターのアカウントを招待し、複数の大人で見守ることができます。', href: null as string | null },
              { title: '通知音・音量', desc: 'スマートフォン側で通知音を設定し、重要な通知を見逃さないようにすることをおすすめします。', href: null as string | null },
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

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">見守りを円滑に始めるために</h2>
            <p className="text-g600 mb-6 text-sm">初期設定のポイントを押さえることで、購入初日から見守りを始めることができます。</p>
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
