import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '習い事・塾の送迎管理にGPSを活用する方法',
  description:
    '子供の習い事や塾の行き帰りの見守りに、GPS端末を活用する方法を解説します。到着・出発通知の設定、複数の習い事ルートの管理、塾の帰りが遅いときの対処法、具体的な設定例をご紹介します。',
  keywords: ['子供', '習い事', '塾', 'GPS', '管理', '送迎', '見守り'],
  openGraph: {
    images: ['/og.png'],
    title: '習い事・塾の送迎管理にGPSを活用する方法',
    description: '子供の習い事や塾の行き帰りの見守りに、GPS端末を活用する方法を解説します。到着・出発通知の設定や具体的な設定例をご紹介します。',
  },
};

const faqData = [
  { q: '習い事が週に複数回ありますが、すべて登録できますか？', a: '主要なGPS端末では、5〜10カ所以上のエリアをエリア通知（ジオフェンス）に登録できます。ピアノ・水泳・塾など複数の習い事先を個別に登録し、それぞれに到着・出発通知を設定できます。' },
  { q: '塾の帰りが21時過ぎになるのですが、夜間でもGPSは使えますか？', a: 'はい。GPS端末は時間帯に関係なく24時間位置情報を取得できます。夜間はむしろ見守りの必要性が高いため、更新間隔を短めに設定しておくことをおすすめします。' },
  { q: '送迎バスを利用している場合は、どのように設定すればよいですか？', a: '送迎バスのルートでもGPSは正常に動作します。バスの乗降場所にエリア通知を設定すれば、バス停に到着した通知が届きます。バスが遅延している場合もリアルタイムで位置確認ができます。' },
  { q: '子供が自転車で通っている場合も使えますか？', a: 'GPS端末をカバンやポケットに入れておけば、自転車移動でも問題なく位置を追跡できます。移動速度から自転車で通っていることも確認でき、想定ルートと異なる場合にも気づけます。' },
  { q: '複数の子供をそれぞれ別の習い事に通わせていますが、1つのアプリで管理できますか？', a: 'はい。ほとんどのGPSサービスは1つの保護者アプリで複数台の端末を管理できます。子供ごとにアイコンや名前を設定でき、それぞれの習い事先への到着を個別に確認できます。' },
  { q: '習い事先にWi-Fiがない場合、精度は落ちますか？', a: 'Wi-Fiがなくても、GPS衛星と携帯基地局による測位が可能です。屋外の習い事（サッカー場など）であればGPS測位の精度は十分です。屋内の場合は多少精度が下がることがありますが、建物の到着判定には問題ありません。' },
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

const useCases = [
  { icon: '', title: 'ピアノ教室', desc: '週1回の決まった時間帯の習い事です。到着通知で到着を確認し、出発通知を受けて迎えの準備を始められます。' },
  { icon: '', title: 'スイミングスクール', desc: '送迎バスの乗降場所をエリア通知に登録します。バスが遅れている場合も、リアルタイムで位置を確認できます。' },
  { icon: '', title: '学習塾', desc: '夜間の帰宅が心配な塾通いでは、出発通知で帰宅の開始を把握し、到着が遅い場合はすぐに確認できます。' },
  { icon: '', title: 'サッカー・野球', desc: '屋外グラウンドへの移動を見守れます。練習終了後の帰宅も、エリア通知で自動的に通知されます。' },
  { icon: '', title: '書道・絵画教室', desc: '一人で通える距離でも、初めのうちはGPSで見守ることをおすすめします。慣れてきたら通知頻度を減らし、自立を促せます。' },
  { icon: '', title: 'プログラミング教室', desc: '駅前や商業施設内にある教室への移動ルートを確認できます。人通りの多いエリアでも位置を特定できます。' },
];

const settingExamples = [
  { day: '月曜', schedule: 'ピアノ 16:00-17:00', geofence: 'ピアノ教室（半径100m）に到着通知+出発通知' },
  { day: '火曜', schedule: 'スイミング 17:00-18:30', geofence: 'スイミングスクール（半径150m）に到着通知+出発通知' },
  { day: '水曜', schedule: '塾 17:30-20:00', geofence: '塾（半径100m）に到着通知+出発通知、帰宅時は更新間隔を短縮' },
  { day: '木曜', schedule: 'サッカー 16:00-18:00', geofence: 'グラウンド（半径200m）に到着通知+出発通知' },
  { day: '金曜', schedule: '習い事なし', geofence: '自宅+学童のエリア通知のみ' },
];

export default function HabitTrackingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "習い事・塾の送迎管理にGPSを活用する方法", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '習い事・塾の送迎管理' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">習い事・塾</span>
            <span className="tag-pill bg-blue text-white">GPS活用</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            習い事・塾の送迎管理にGPSを活用する方法
          </h1>
          <p className="text-g600 text-lg">到着・出発通知を活用し、送迎の負担を軽減する方法を解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">習い事の行き帰りの見守りが必要な理由</h2>
          <p className="text-g600 mb-6">
            習い事や塾に通う子供は、学校の通学路とは異なるルートを一人で移動することになります。
            特に夕方以降の移動は暗くなる時間帯と重なり、保護者の不安は大きくなります。
            GPS端末を活用すれば、各習い事先への到着確認から帰宅までを自動通知で把握でき、
            毎回の電話確認や送迎の負担を軽減できます。
          </p>

          <h2 className="section-title">習い事別のGPS活用例</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {useCases.map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <div>
                  <h3 className="font-bold text-g800">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">到着・出発通知の活用ポイント</h2>
          <div className="bg-blue-light rounded-xl p-6 mb-8">
            <ul className="space-y-2 text-sm text-g700">
              <li>・習い事先ごとにエリア通知を個別に登録し、名前を付けて管理します。</li>
              <li>・到着通知で無事に着いたことを確認し、出発通知を受けて迎えの準備を始めます。</li>
              <li>・通知が届かない場合は、エリアの半径を少し広げてください（100〜200mを推奨します）。</li>
              <li>・夜間の塾帰りは、更新間隔を1.5〜3分に短縮すると、よりリアルタイムに把握できます。</li>
              <li>・到着までの想定時間を把握しておき、超過した場合にアプリで現在地を確認する運用をおすすめします。</li>
            </ul>
          </div>

          <h2 className="section-title">複数の習い事ルートの管理</h2>
          <p className="text-g600 mb-4">
            週に複数の習い事がある場合、曜日ごとにルートが異なります。以下は設定の具体例です。
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">曜日</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">スケジュール</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">エリア通知の設定</th>
                </tr>
              </thead>
              <tbody>
                {settingExamples.map((d) => (
                  <tr key={d.day} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{d.day}</td>
                    <td className="py-3 px-3 text-g600">{d.schedule}</td>
                    <td className="py-3 px-3 text-g600">{d.geofence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">塾の帰りが遅いときの設定</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: '塾のエリア通知に出発通知を設定', desc: '塾を出たタイミングで自動的に通知が届きます。帰宅の目安時間を逆算できます。' },
              { step: 2, title: '帰宅ルートの更新間隔を短縮', desc: '夜間の移動時は1.5〜3分間隔に設定します。リアルタイムに近い位置の把握が可能です。' },
              { step: 3, title: '自宅到着の通知で帰宅を確認', desc: '自宅エリアへの到着通知で、無事帰宅したことがわかります。' },
              { step: 4, title: '想定時間超過時はアプリで確認', desc: '通常20分で帰宅するところ30分以上かかっている場合は、アプリで現在地をご確認ください。' },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start card-hover p-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center font-bold text-sm">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-bold text-g800 text-sm">{s.title}</h3>
                  <p className="text-sm text-g600">{s.desc}</p>
                </div>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">習い事の見守りの負担を軽減する方法</h2>
            <p className="text-g600 mb-6 text-sm">到着・出発通知を活用すれば、毎回の電話確認や送迎の負担が大幅に減ります。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/geofence/" className="btn-primary">エリア通知の使い方</Link>
              <Link href="/knowledge/after-school/" className="btn-accent">学童・放課後の見守り</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
