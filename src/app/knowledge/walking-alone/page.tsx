import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供の一人歩きはいつから？年齢別ガイドとGPS活用法',
  description:
    '子供の一人歩きはいつから始めるべきか、年齢別の目安を解説。小学1年生からの一人歩きデビューに向けた練習方法、地域差、GPS端末で安心を得る方法、安全チェックリストを紹介します。',
  keywords: ['子供', '一人歩き', 'いつから', 'GPS', '見守り', '小学生', '安全'],
  openGraph: {
    title: '子供の一人歩きはいつから？年齢別ガイドとGPS活用法',
    description: '子供の一人歩きはいつから？年齢別の目安とGPS活用法を詳しく解説。安全に一人歩きデビューするためのガイド。',
  },
};

const faqData = [
  { q: '小学1年生で一人歩きは早すぎますか？', a: '地域や通学路の環境によります。交通量が少なく、見守りの目がある地域では小学1年生から一人歩きを始める家庭が多いです。まずは短い距離から始め、GPS端末で見守りながら段階的に距離を伸ばすのがおすすめです。' },
  { q: '一人歩きの練習はどのように始めればいいですか？', a: 'まずは親と一緒にルートを歩き、危険箇所を確認します。次に親が少し離れて見守りながら歩かせます。GPS端末を持たせて位置確認できる状態で、徐々に距離を伸ばしていくのが安全です。' },
  { q: '田舎と都会で一人歩きの開始時期に差はありますか？', a: 'はい。田舎は交通量が少ない反面、人通りが少なく不審者対策が必要です。都会は人の目が多い一方で交通事故リスクが高まります。どちらの場合もGPS端末による見守りが有効です。' },
  { q: 'GPS端末を持たせると子供は安心しますか？', a: '多くのお子さまは「何かあったらお母さん・お父さんが助けに来てくれる」という安心感を持てるようになります。ただし、GPSを「監視」ではなく「見守り」として伝えることが大切です。' },
  { q: '一人歩きデビュー前に確認すべきことは？', a: '通学路の危険箇所の把握、交通ルールの理解度、緊急時の対処法（助けを求められるか）、GPS端末の操作方法の4点を事前に確認しましょう。' },
  { q: '不審者対策として何を教えておくべきですか？', a: '「いかのおすし」（いかない・のらない・おおごえを出す・すぐ逃げる・しらせる）を繰り返し教えましょう。加えて、GPS端末のSOSボタンの使い方、子供110番の家の場所も確認しておくと安心です。' },
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

const ageGuide = [
  { age: '小学1年生（6〜7歳）', icon: '🎒', desc: '通学路など短い距離から開始。親が見える範囲で練習し、GPS端末で位置確認しながら徐々に慣れさせます。' },
  { age: '小学2〜3年生（7〜9歳）', icon: '🚶', desc: '習い事や友達の家への移動が増える時期。ジオフェンスで到着通知を設定し、行動範囲を把握します。' },
  { age: '小学4〜6年生（9〜12歳）', icon: '🏃', desc: '行動範囲が広がり、自転車での移動も。移動履歴の確認や速度通知で安全を見守ります。' },
  { age: '中学生（12歳〜）', icon: '🎓', desc: '部活動や塾で帰宅が遅くなることも。夜間の見守りにGPSが活躍。プライバシーに配慮した使い方が重要です。' },
];

const checklist = [
  { title: '交通ルールの理解', desc: '信号の見方、横断歩道の渡り方、飛び出し禁止を確認。' },
  { title: '危険箇所の把握', desc: '通学路の交差点、見通しの悪い場所、人通りの少ない道を一緒に確認。' },
  { title: '緊急時の対処法', desc: '助けを求める方法、子供110番の家の場所、SOSボタンの使い方を練習。' },
  { title: 'GPS端末の操作確認', desc: '端末の持ち方、充電の確認方法、ボタン操作を子供自身が理解しているか確認。' },
  { title: 'ルートの確認', desc: '行きと帰りのルートを一緒に歩き、目印や注意点を共有。' },
  { title: '時間の約束', desc: '出発時刻・帰宅時刻の約束を決め、遅れる場合の連絡方法を確認。' },
];

export default function WalkingAlonePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供の一人歩きはいつから？年齢別ガイドとGPS活用法", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "お役立ち", "item": "https://gps-kodomo.com/knowledge/"}, {"@type": "ListItem", "position": 3, "name": "子供の一人歩き", "item": "https://gps-kodomo.com/knowledge/walking-alone/"}]}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '子供の一人歩き' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">一人歩き</span>
            <span className="tag-pill bg-orange text-white">GPS見守り</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供の一人歩きはいつから？年齢別ガイドとGPS活用法
          </h1>
          <p className="text-g600 text-lg">年齢別の目安と安全に一人歩きデビューするためのポイント</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">子供の一人歩きはいつから始める？</h2>
          <p className="text-g600 mb-6">
            子供の一人歩きデビューは多くの保護者にとって大きな不安の種です。
            文部科学省の調査によると、小学1年生の約7割が徒歩で通学しており、入学を機に一人歩きを始めるケースが最も多いとされています。
            しかし、地域の環境や子供の成熟度によって適切な時期は異なります。
            GPS端末を活用することで、子供の自立を尊重しながら安全を確保する見守りが可能になります。
          </p>

          <h2 className="section-title">年齢別の一人歩きガイド</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {ageGuide.map((item) => (
              <div key={item.age} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-2xl">{item.icon}</p>
                <div>
                  <h3 className="font-bold text-g800">{item.age}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">地域差を考慮する</h2>
          <div className="bg-blue-light rounded-xl p-6 mb-8">
            <p className="text-sm text-g700 mb-4">お住まいの地域に合わせた一人歩きの判断ポイントです。</p>
            <div className="space-y-3">
              {[
                { area: '都市部（交通量が多い地域）', setting: '交通事故リスクに注意。信号・横断歩道の使い方を重点的に練習。' },
                { area: '住宅街（比較的安全な地域）', setting: '見通しの悪い交差点に注意。地域の見守り活動と連携すると安心。' },
                { area: '郊外・田舎（人通りが少ない地域）', setting: '不審者対策を重視。GPS端末のSOS機能と移動履歴で安全確保。' },
                { area: '通学路が長い地域', setting: 'バッテリー持ちの良いGPS端末を選択。ジオフェンスを複数設定。' },
              ].map((g) => (
                <div key={g.area} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
                  <span className="font-bold text-g800 sm:w-56">{g.area}</span>
                  <span className="text-g600">{g.setting}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="section-title">GPSで安心を得る方法</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: 'ジオフェンスで到着・出発を自動通知', desc: '学校・自宅・習い事先にエリアを設定し、到着や出発のタイミングで自動通知を受け取れます。' },
              { step: 2, title: 'リアルタイム位置確認で安心', desc: '心配な時はアプリを開いてお子さまの現在地を確認。通常と違うルートを通っている場合にも気づけます。' },
              { step: 3, title: '移動履歴で振り返り', desc: '帰宅後に一日の移動ルートを親子で確認。危険な場所を通っていないかチェックできます。' },
              { step: 4, title: 'SOSボタンで緊急時に対応', desc: 'ボタン一つで保護者に緊急通知。子供自身も「何かあったら助けてもらえる」という安心感を持てます。' },
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

          <h2 className="section-title">一人歩きデビュー安全チェックリスト</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {checklist.map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
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

          <p className="text-xs text-g400 mt-4 text-right">最終更新: 2026年5月</p>

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">一人歩きデビューをGPSで安心サポート</h2>
            <p className="text-g600 mb-6 text-sm">お子さまの自立を応援しながら、見守りの安心を手に入れましょう。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/geofence/" className="btn-primary">エリア通知の使い方</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">GPS選び方ガイド</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
