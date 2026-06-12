import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'AirTagで子供の見守りはできる？【専用GPSとの違い】',
  description:
    'Apple AirTagで子供の見守りはできるのか、専用GPS端末との違いを徹底比較。AirTagの仕組み、子供に使う際の制約、Appleの利用規約、向くケース・向かないケースを解説します。',
};

const faqData = [
  { q: 'AirTagで子供の居場所をリアルタイムに追跡できる？', a: 'いいえ、AirTagはリアルタイム追跡には対応していません。近くのAppleデバイスが通過した時点で位置が更新される仕組みのため、更新タイミングは環境に依存します。人通りの少ない場所では更新が大幅に遅れることがあります。' },
  { q: 'AirTagにSOS機能はある？', a: 'ありません。AirTagは忘れ物防止タグであり、ボタンを押して保護者に通知を送る機能はありません。子供が危険を感じた時に自ら発信する手段がないため、防犯目的には不向きです。' },
  { q: 'AirTagは月額料金がかからないのが魅力だけど？', a: '確かにAirTagは端末代（4,780円）のみで月額料金は不要です。ただし、リアルタイム性の欠如・SOS機能なし・通知機能なしを考えると、月額500円前後の専用GPS端末の方が見守り用途としてはコストパフォーマンスが高いといえます。' },
  { q: 'Appleは人の追跡にAirTagを使うことを推奨している？', a: 'いいえ、Appleは公式にAirTagを人の追跡に使うことを推奨していません。AirTagには不要な追跡を検知する安全機能があり、持ち主以外のiPhoneが近くにあると「不明なAirTagが検出されました」と通知が表示されます。' },
  { q: 'AirTagの「不明なアイテム検出」通知が子供のiPhoneに表示される？', a: '子供がiPhoneを持っている場合、保護者のAirTagを持ち歩いていると「不明なAirTagが検出されました」と通知されることがあります。家族共有の設定でこの通知を抑制できる場合もありますが、完全には防げません。' },
  { q: 'AirTagが子供の見守りに向くケースはある？', a: '専用GPS端末と併用する場合のバックアップとして、またはランドセルや持ち物の紛失防止として使うのは合理的です。見守りのメイン手段としてではなく、補助的なツールとして位置づけるのがよいでしょう。' },
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

export default function AppleAirtagPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "AirTagで子供の見守りはできる？【専用GPSとの違い】", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "お役立ち", "item": "https://gps-kodomo.com/knowledge/"}, {"@type": "ListItem", "position": 3, "name": "AirTagと子供見守り", "item": "https://gps-kodomo.com/knowledge/apple-airtag/"}]}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'AirTagと子供見守り' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">AirTag</span>
            <span className="tag-pill bg-orange text-white">GPS比較</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            AirTagで子供の見守りはできる？【専用GPSとの違い】
          </h1>
          <p className="text-g600 text-lg">AirTagと専用GPS端末の違いを徹底比較して解説します</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">AirTagの仕組み（Bluetooth + Find My）</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">
              AirTagはGPS衛星を搭載しておらず、Bluetooth Low Energy（BLE）とAppleの「探す（Find My）」ネットワークを利用して位置を特定します。
              AirTagが発するBluetooth信号を、周囲のiPhoneやiPadなどのAppleデバイスが検知し、その位置情報をAppleのサーバーに匿名で中継します。
              つまり、近くにAppleデバイスを持った人が通らなければ、位置情報は更新されません。
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-blue-light rounded-xl p-4 text-center">
                <p className="text-lg font-extrabold text-blue">Bluetooth</p>
                <p className="text-sm text-g600">通信方式</p>
              </div>
              <div className="bg-orange-light rounded-xl p-4 text-center">
                <p className="text-lg font-extrabold text-orange">Find Myネットワーク</p>
                <p className="text-sm text-g600">位置特定の仕組み</p>
              </div>
              <div className="bg-green-light rounded-xl p-4 text-center">
                <p className="text-lg font-extrabold text-green-dark">約1年</p>
                <p className="text-sm text-g600">電池寿命（CR2032）</p>
              </div>
            </div>
          </div>

          <h2 className="section-title">子供の見守りに使う際の制約</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: 'リアルタイム追跡ができない', desc: 'AirTagは定期的にBluetooth信号を発するだけで、自らGPS衛星と通信する機能はありません。位置の更新は、周囲のAppleデバイスが信号を検知した時点に限られます。人通りの少ない場所では数十分〜数時間更新されないことも。' },
              { title: 'SOS機能・通知機能がない', desc: 'AirTagにはボタンを押して保護者に通知を送る機能がありません。子供が危険を感じた時に自ら発信する手段がないため、緊急時の対応には不向きです。' },
              { title: 'ジオフェンスに非対応', desc: '特定のエリアへの出入りを通知するジオフェンス機能はAirTagにはありません。学校の到着・出発通知、通学路の逸脱検知といった見守りの基本機能が使えません。' },
              { title: '不要な追跡を検知する安全機能', desc: 'Appleのストーカー対策として、持ち主から離れたAirTagが近くにあると「不明なAirTagが検出されました」と通知が表示されます。子供がiPhoneを持っている場合、保護者のAirTagに対してこの警告が表示される可能性があります。' },
              { title: '音声通話・メッセージ不可', desc: 'AirTagは忘れ物防止タグであり、音声通話やメッセージの送受信はできません。子供との連絡手段としては使えません。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">AirTag vs 専用GPS端末 比較表</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left font-bold text-g800">比較項目</th>
                  <th className="p-3 text-center font-bold text-g800">AirTag</th>
                  <th className="p-3 text-center font-bold text-g800">専用GPS端末</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: '端末価格', airtag: '4,780円', gps: '5,280〜26,800円' },
                  { item: '月額料金', airtag: '0円', gps: '0〜748円' },
                  { item: 'リアルタイム性', airtag: '低い（環境依存）', gps: '高い（1.5〜3分間隔）' },
                  { item: '位置特定方式', airtag: 'Bluetooth+Find My', gps: 'GPS衛星+Wi-Fi+基地局' },
                  { item: 'SOS通知', airtag: 'なし', gps: 'あり（多くの機種）' },
                  { item: 'ジオフェンス', airtag: 'なし', gps: 'あり' },
                  { item: '音声通話', airtag: 'なし', gps: '一部機種で可能' },
                  { item: 'メッセージ', airtag: 'なし', gps: '一部機種で可能' },
                  { item: 'バッテリー', airtag: '約1年（電池交換式）', gps: '3〜14日（充電式）' },
                  { item: '移動履歴', airtag: '限定的', gps: '詳細な履歴表示' },
                  { item: '対応OS', airtag: 'iOSのみ', gps: 'iOS / Android両対応' },
                ].map((row) => (
                  <tr key={row.item} className="border-b border-gray-200">
                    <td className="p-3 font-bold text-g700">{row.item}</td>
                    <td className="p-3 text-center text-g600">{row.airtag}</td>
                    <td className="p-3 text-center text-g600">{row.gps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">Appleの利用規約と注意点</h2>
          <div className="card-hover p-6 mb-8">
            <div className="bg-orange-light rounded-xl p-4 mb-4">
              <h3 className="font-bold text-orange-dark mb-2">Appleの公式見解</h3>
              <p className="text-sm text-g700">
                Appleは公式に、AirTagを「持ち物の追跡」を目的として設計しており、「人の追跡」には推奨していません。
                ストーカー行為防止のため、持ち主から離れたAirTagが他者の持ち物に紛れ込んでいる場合に通知する機能を搭載しています。
              </p>
            </div>
            <p className="text-g600 text-sm">
              家族内での利用であっても、子供がiPhoneを所有している場合は「不明なAirTag」の警告通知が表示されることがあります。
              iOS 17以降では、家族共有に登録したAirTagについてこの通知を一部抑制できますが、
              AirTagの本来の用途は忘れ物防止であり、見守り専用の設計ではないことを理解しておく必要があります。
            </p>
          </div>

          <h2 className="section-title">AirTagが向くケース / 向かないケース</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">AirTagが向くケース</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・ランドセルや持ち物の紛失防止として</li>
                <li>・専用GPS端末と併用するバックアップとして</li>
                <li>・都市部で周囲にAppleデバイスが多い環境</li>
                <li>・月額費用をゼロにしたい（精度は妥協）</li>
                <li>・電池交換の手間が少ない方がいい（年1回）</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">AirTagが向かないケース</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・リアルタイムで子供の位置を把握したい</li>
                <li>・SOS通知やジオフェンスが必要</li>
                <li>・通学路の見守りをしたい</li>
                <li>・子供と音声やメッセージで連絡したい</li>
                <li>・人通りの少ないエリアに住んでいる</li>
                <li>・家族にAndroidユーザーがいる</li>
              </ul>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">子供の見守りに最適なGPS端末を選ぼう</h2>
            <p className="text-g600 mb-6 text-sm">AirTagでは足りない見守り機能を備えた専用GPS端末を比較できます。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/smartphone-vs-gps/" className="btn-primary">スマホ vs GPS比較</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">GPSの選び方</Link>
              <Link href="/" className="btn-accent">おすすめランキング</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
