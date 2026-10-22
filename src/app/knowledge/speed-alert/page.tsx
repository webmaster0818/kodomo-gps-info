import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供用GPSの速度通知機能｜車での移動を検知する仕組み',
  description:
    '子供用GPSの速度通知機能を解説します。車や電車での移動を自動で検知する仕組み、対応機種の比較、設定方法、誤検知への対処法、不審者対策としての活用場面を紹介します。',
  keywords: ['子供GPS', '速度通知', '車', '移動', '検知', '不審者対策', '見守り'],
  openGraph: {
    images: ['/og.png'],
    title: '子供用GPSの速度通知機能｜車での移動を検知する仕組み',
    description: '子供用GPSの速度通知による車移動の検知について、仕組み・対応機種・設定方法を解説します。',
  },
};

const faqData = [
  { q: '速度通知はどのくらいの速さで反応しますか？', a: '多くの機種では、時速30〜40km以上で「車移動」と判定して通知を送信します。判定の基準値は機種によって異なり、一部の端末では利用者が設定を調整できます。' },
  { q: '電車での移動でも通知が来ますか？', a: 'はい、電車の速度も検知します。通学で電車を利用する場合は、通学時間帯の速度通知をオフにするか、特定のルート上では通知しない設定が必要です。' },
  { q: '自転車での移動は検知されますか？', a: '一般的な自転車の速度（時速15〜25km）では、速度通知は反応しません。ただし、下り坂などで時速30kmを超えると検知される場合があります。' },
  { q: '誤検知が多い場合はどうすればいいですか？', a: 'GPS信号の乱れによって誤検知が起こることがあります。建物の中での急な位置のずれが原因であることが多いため、更新間隔を長めにする、または屋内での速度判定を無効にする設定をお試しください。' },
  { q: '速度通知に対応している機種はどれですか？', a: 'みてねみまもりGPS、あんしんウォッチャーなどが速度検知機能を搭載しています。BoTトークは、移動手段の自動判定（徒歩/車/電車）に対応しています。' },
  { q: '不審者に車で連れ去られた場合、すぐに気づけますか？', a: '速度通知を設定しておけば、通常は徒歩であるはずの時間帯に車での移動が検知された場合、即座にスマートフォンに通知が届きます。ただし、GPSの更新間隔によっては数分の遅れが生じるため、更新間隔を短く設定しておくことが重要です。' },
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
  { icon: '', title: 'GPS位置の連続取得', desc: '一定間隔で取得した位置情報の差分から、移動速度を自動で計算します。' },
  { icon: '', title: '速度の基準値による判定', desc: '時速30〜40km以上の移動を検知すると「車両移動」と判定します。基準値は機種によって異なります。' },
  { icon: '', title: '即時通知の送信', desc: '車両移動と判定された時点で、保護者のスマートフォンへプッシュ通知を送信します。' },
  { icon: '', title: '移動軌跡の記録', desc: '速度通知後の移動ルートを記録します。万一の際に、移動方向の特定に役立ちます。' },
];

const devices = [
  { name: 'みてねみまもりGPS', feature: '移動速度の異常検知に対応しています。車での移動時に自動で通知します。更新間隔は1.5分からです。', rating: '◎' },
  { name: 'あんしんウォッチャー', feature: '速度検知機能を搭載しています。時速約40km以上で通知し、設定の変更も可能です。', rating: '◎' },
  { name: 'BoTトーク', feature: '移動手段（徒歩/車/電車）を自動で判定します。AI学習により精度が向上します。', rating: '◎' },
  { name: 'soranome（ソラノメ・販売終了）', feature: '速度通知に対応しています。2026年4月1日付の公式告知で現行端末の販売が終了しています（2026年10月17日 公式確認）。', rating: '－' },
];

const useCases = [
  { title: '下校時間帯の不審者対策', desc: '通常は徒歩で下校する時間帯に車での移動が検知された場合、すぐに警戒できます。位置情報から現在地と移動方向を特定できます。' },
  { title: '習い事の送迎確認', desc: '送迎バスに乗った・降りたタイミングを、速度の変化から把握できます。予定どおりの移動かどうかを確認できます。' },
  { title: '電車通学の乗り過ごし検知', desc: '下車予定の駅を通過しても速度が落ちない場合、乗り過ごしに気づくことができます。' },
  { title: '自転車の安全確認', desc: '通常より速い移動（下り坂での速度の出しすぎなど）を検知し、安全を確認するきっかけになります。' },
];

export default function SpeedAlertPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供用GPSの速度通知機能｜車での移動を検知する仕組み", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '速度通知機能' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">速度通知</span>
            <span className="tag-pill bg-orange text-white">安全機能</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供用GPSの速度通知機能｜車での移動を検知する仕組み
          </h1>
          <p className="text-g600 text-lg">車両移動の自動検知による不審者対策の強化</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">速度通知機能とは？</h2>
          <p className="text-g600 mb-6">
            速度通知機能は、GPS端末が通常の歩行速度を超える移動を検知した場合に、保護者へ通知する機能です。
            お子さまが車に乗せられた場合や、予定外の車両移動があった場合に、すぐに気づくことができます。
            特に、不審者による連れ去りの早期発見に有効な機能として注目されています。
          </p>

          <h2 className="section-title">速度検知の仕組み</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {mechanism.map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <div>
                  <h3 className="font-bold text-g800">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">対応機種の比較</h2>
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
              { step: 1, title: '速度通知をオンにする', desc: 'アプリの設定画面から、速度通知（移動検知）を有効にします。初期状態ではオフになっている場合もあります。' },
              { step: 2, title: '更新間隔を短めに設定する', desc: '速度通知の精度を上げるため、更新間隔を1〜3分に設定します。バッテリーの消費は増えますが、検知が早くなります。' },
              { step: 3, title: '除外条件を設定する（必要に応じて）', desc: '電車通学の時間帯や送迎バスの時間帯は、速度通知を除外する設定を行います。' },
              { step: 4, title: '動作を確認する', desc: '実際に車に乗って、通知が届くかどうかを確認します。通知の遅延時間も把握しておくことをおすすめします。' },
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

          <h2 className="section-title">活用場面</h2>
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
            <p className="text-sm text-g700 mb-4">速度通知の誤検知が発生するケースと、その対処法は以下のとおりです。</p>
            <div className="space-y-3">
              {[
                { cause: 'GPS信号の乱れ（建物内）', fix: '屋内での位置のずれが原因です。更新間隔を長めにして安定させてください。' },
                { cause: '高速エレベーターでの移動', fix: '高層ビル内での垂直移動を水平移動と誤認する場合があります。特定の時間帯を除外設定してください。' },
                { cause: '電車・バスでの通常移動', fix: '通学時間帯の速度通知をオフにするか、除外ルートを設定してください。' },
                { cause: '保護者の車での送迎時', fix: '送迎の時間帯を事前に除外設定するか、通知を受けた後に状況を確認してください。' },
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

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">速度通知による異常な移動の早期把握</h2>
            <p className="text-g600 mb-6 text-sm">不審者対策の強化と、お子さまの安全確保にお役立てください。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/stranger-danger/" className="btn-primary">不審者対策ガイド</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">GPSの選び方ガイド</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
