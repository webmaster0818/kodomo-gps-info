import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供用GPSの速度通知機能｜車での移動を検知する仕組み',
  description:
    '子供用GPSの速度通知機能を解説。車や電車での移動を自動検知する仕組み、対応機種の比較、設定方法、誤検知への対処法、不審者対策としての活用シーンを紹介します。',
  keywords: ['子供GPS', '速度通知', '車', '移動', '検知', '不審者対策', '見守り'],
  openGraph: {
    title: '子供用GPSの速度通知機能｜車での移動を検知する仕組み',
    description: '子供用GPSの速度通知で車移動を検知。仕組みや対応機種、設定方法を解説。',
  },
};

const faqData = [
  { q: '速度通知はどのくらいの速さで反応しますか？', a: '多くの機種では時速30〜40km以上で「車移動」と判定し通知を送信します。閾値は機種により異なり、一部の端末ではユーザーが設定を調整できます。' },
  { q: '電車での移動でも通知が来ますか？', a: 'はい、電車の速度も検知します。通学で電車を使う場合は、通学時間帯の速度通知をOFFにするか、特定のルート上では通知しない設定が必要です。' },
  { q: '自転車での移動は検知されますか？', a: '一般的な自転車の速度（時速15〜25km）では速度通知は反応しません。ただし、下り坂などで時速30kmを超えると検知される場合があります。' },
  { q: '誤検知が多い場合はどうすればいいですか？', a: 'GPS信号の乱れで誤検知が起こることがあります。建物の中での急な位置ジャンプが原因のことが多いため、更新間隔を長めにする、または屋内での速度判定を無効にする設定を試しましょう。' },
  { q: '速度通知に対応している機種はどれですか？', a: 'みてねみまもりGPS、あんしんウォッチャー、soranomeなどが速度検知機能を搭載しています。BoTトークは移動手段の自動判定（徒歩/車/電車）に対応しています。' },
  { q: '不審者に車で連れ去られた場合、すぐに気づけますか？', a: '速度通知を設定しておけば、通常徒歩のはずの時間帯に車移動が検知された場合、即座にスマホに通知が届きます。ただし、GPS更新間隔によっては数分のタイムラグがあるため、更新間隔を短く設定しておくことが重要です。' },
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

const mechanism = [
  { icon: '📍', title: 'GPS位置の連続取得', desc: '一定間隔で取得した位置情報の差分から移動速度を自動計算します。' },
  { icon: '⚡', title: '速度閾値の判定', desc: '時速30〜40km以上の移動を検知すると「車両移動」と判定。閾値は機種により異なります。' },
  { icon: '🔔', title: '即時通知の送信', desc: '車両移動と判定された瞬間に保護者のスマホへプッシュ通知を送信します。' },
  { icon: '🗺️', title: '移動軌跡の記録', desc: '速度通知後の移動ルートを記録。万が一の際に移動方向の特定に役立ちます。' },
];

const devices = [
  { name: 'みてねみまもりGPS', feature: '移動速度の異常検知あり。車移動時に自動通知。更新間隔1.5分〜。', rating: '◎' },
  { name: 'あんしんウォッチャー', feature: '速度検知機能搭載。時速約40km以上で通知。設定変更可能。', rating: '◎' },
  { name: 'BoTトーク', feature: '移動手段の自動判定（徒歩/車/電車）。AI学習で精度向上。', rating: '◎' },
  { name: 'soranome（ソラノメ）', feature: '速度通知対応。SOS通知と連動で緊急時の対応力が高い。', rating: '○' },
];

const useCases = [
  { title: '下校時間帯の不審者対策', desc: '通常徒歩の下校時間に車移動が検知された場合、即座に警戒。位置情報で現在地と移動方向を特定。' },
  { title: '習い事の送迎確認', desc: '送迎バスに乗った/降りたタイミングを速度変化で把握。予定通りの移動か確認できます。' },
  { title: '電車通学の乗り過ごし検知', desc: '下車予定の駅を通過しても速度が落ちない場合、乗り過ごしに気づけます。' },
  { title: '自転車の安全確認', desc: '通常より高速での移動（下り坂の暴走など）を検知し、安全確認のきっかけに。' },
];

export default function SpeedAlertPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供用GPSの速度通知機能｜車での移動を検知する仕組み", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "お役立ち", "item": "https://gps-kodomo.com/knowledge/"}, {"@type": "ListItem", "position": 3, "name": "速度通知機能", "item": "https://gps-kodomo.com/knowledge/speed-alert/"}]}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '速度通知機能' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">速度通知</span>
            <span className="tag-pill bg-orange text-white">安全機能</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供用GPSの速度通知機能｜車での移動を検知する仕組み
          </h1>
          <p className="text-g600 text-lg">車両移動の自動検知で不審者対策を強化する</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">速度通知機能とは？</h2>
          <p className="text-g600 mb-6">
            速度通知機能は、GPS端末が通常の歩行速度を超える移動を検知した場合に保護者へ通知する機能です。
            子供が車に乗せられた場合や、予定外の車両移動があった場合に即座に気づくことができます。
            特に不審者による連れ去りの早期発見に有効な機能として注目されています。
          </p>

          <h2 className="section-title">速度検知の仕組み</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {mechanism.map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-2xl">{item.icon}</p>
                <div>
                  <h3 className="font-bold text-g800">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">対応機種比較</h2>
          <div className="bg-blue-light rounded-xl p-6 mb-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-g800">
                  <th className="pb-3 font-bold">GPS端末</th>
                  <th className="pb-3 font-bold">速度通知機能</th>
                  <th className="pb-3 font-bold">評価</th>
                </tr>
              </thead>
              <tbody className="text-g600">
                {devices.map((d) => (
                  <tr key={d.name} className="border-t border-g200">
                    <td className="py-2 font-medium text-g800">{d.name}</td>
                    <td className="py-2">{d.feature}</td>
                    <td className="py-2 font-bold">{d.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">設定方法</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: '速度通知をONにする', desc: 'アプリの設定画面から速度通知（移動検知）を有効にします。初期状態ではOFFの場合もあります。' },
              { step: 2, title: '更新間隔を短めに設定', desc: '速度通知の精度を上げるため、更新間隔を1〜3分に設定。バッテリー消費は増えますが検知が早くなります。' },
              { step: 3, title: '除外条件を設定（必要に応じて）', desc: '電車通学の時間帯や、送迎バスの時間帯は速度通知を除外する設定を行います。' },
              { step: 4, title: 'テスト確認', desc: '実際に車に乗って通知が届くか確認。通知の遅延時間も把握しておくと安心です。' },
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

          <h2 className="section-title">活用シーン</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {useCases.map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">誤検知への対処法</h2>
          <div className="bg-blue-light rounded-xl p-6 mb-8">
            <p className="text-sm text-g700 mb-4">速度通知の誤検知が発生するケースと対処法です。</p>
            <div className="space-y-3">
              {[
                { cause: 'GPS信号の乱れ（建物内）', fix: '屋内での位置ジャンプが原因。更新間隔を長めにして安定させる。' },
                { cause: '高速エレベーターでの移動', fix: '高層ビル内での垂直移動を水平移動と誤認。特定の時間帯を除外設定。' },
                { cause: '電車・バスでの通常移動', fix: '通学時間帯の速度通知をOFFにするか、除外ルートを設定。' },
                { cause: '親の車での送迎時', fix: '送迎の時間帯を事前に除外設定するか、通知後に確認して無視。' },
              ].map((item) => (
                <div key={item.cause} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
                  <span className="font-bold text-g800 sm:w-52">{item.cause}</span>
                  <span className="text-g600">{item.fix}</span>
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

          <p className="text-xs text-g400 mt-4 text-right">最終更新: 2026年5月</p>

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">速度通知で異常な移動を即座にキャッチ</h2>
            <p className="text-g600 mb-6 text-sm">不審者対策を強化し、お子さまの安全を守りましょう。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/stranger-danger/" className="btn-primary">不審者対策ガイド</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">GPS選び方ガイド</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
