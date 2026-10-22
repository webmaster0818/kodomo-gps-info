import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供用GPSの中古購入・買い替えガイド',
  description:
    '子供用GPS端末の中古購入の可否について、SIM契約の問題、買い替えの時期（バッテリー劣化・卒業）、データ移行方法、古い端末の処分方法まで詳しく解説します。中古のリスクと新品購入の利点も比較します。',
  keywords: ['子供GPS', '中古', '買い替え', 'バッテリー劣化', 'データ移行', '処分'],
  openGraph: {
    images: ['/og.png'],
    title: '子供用GPSの中古購入・買い替えガイド',
    description: '子供用GPS端末の中古購入の可否、買い替えの時期、データ移行方法を詳しく解説します。',
  },
};

const faqData = [
  { q: '子供用GPSを中古で購入できますか？', a: 'フリマアプリやオークションに中古端末が出品されていることはありますが、当サイトではおすすめしていません。理由は、(1)SIMカードが前の持ち主に紐づいている場合がある、(2)メーカー補償が受けられない、(3)バッテリーが劣化している可能性がある、(4)アカウントの引き継ぎができないケースがある、の4点です。' },
  { q: 'GPS端末の買い替え時期の目安を教えてください。', a: 'バッテリーの持ちが購入時の半分以下になったときが、買い替えの目安です。一般的には2〜3年でバッテリーが劣化します。また、小学校卒業時に解約するご家庭も多くあります。端末の動作が不安定になった場合も、買い替えをご検討ください。' },
  { q: '兄弟で端末を使い回せますか？', a: 'メーカーによっては可能です。端末を初期化し、新しいアカウント（下の子の名前）で再設定すれば使い回せる機種もあります。ただし、バッテリーの劣化が進んでいる場合は、新品を購入するほうが安心です。月額契約は、新規契約が必要な場合がほとんどです。' },
  { q: 'データ移行は必要ですか？', a: 'GPS端末自体にはデータは保存されておらず、行動履歴等はサーバー（クラウド）に保存されています。新しい端末に買い替える場合は、アプリ上で旧端末を削除し、新端末を登録するだけで完了します。過去の行動履歴は通常引き継げないため、必要な場合はスクリーンショットで保存しておくことをおすすめします。' },
  { q: '古いGPS端末はどのように処分すればよいですか？', a: 'まずメーカーのアプリから端末を登録解除し、月額契約を解約してください。その後、端末を初期化（リセット）します。処分方法は、(1)メーカーの回収サービスを利用、(2)自治体の小型家電回収ボックスに入れる、(3)家電量販店の回収サービスを利用、のいずれかをおすすめします。' },
  { q: '買い替え時に月額契約はどうなりますか？', a: '同じメーカーの新端末に買い替える場合、月額契約はそのまま引き継げる場合が多くあります。別メーカーに乗り換える場合は、旧メーカーの解約と新メーカーの新規契約が必要です。解約月と新規契約月が重なると二重課金となるため、手続きの時期にご注意ください。' },
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

const secondHandRisks = [
  { risk: 'SIM契約の問題', detail: '多くの子供用GPS端末はSIMカードが内蔵されており、前の持ち主のアカウントに紐づいています。前の持ち主が解約していない場合、新しいSIM契約ができず使用できません。また、解約済みであっても再契約できない機種があります。', severity: '高' },
  { risk: 'バッテリー劣化', detail: '充電式バッテリーは使用回数に応じて劣化します。中古端末は数百回充電されている可能性があり、バッテリーの持ちが新品の50〜70%程度に低下していることが一般的です。バッテリー交換はできない機種がほとんどです。', severity: '高' },
  { risk: 'メーカー補償なし', detail: '中古購入の場合、メーカーの保証・補償は引き継げません。故障した場合は有償修理となり、修理自体を受け付けてもらえない場合もあります。', severity: '中' },
  { risk: 'アカウント引き継ぎ不可', detail: '前の持ち主がアカウントを削除していない場合、新しいアカウントで端末を登録できないことがあります。購入前に「端末の初期化・アカウント解除済み」であることをご確認ください。', severity: '中' },
  { risk: '通信規格の古さ', detail: '2〜3年前のモデルは3G通信対応の場合があります。3Gは順次停波されているため、将来使えなくなるリスクがあります。必ず4G/LTE対応であることをご確認ください。', severity: '中' },
];

const replaceTiming = [
  { timing: 'バッテリーの持ちが半分以下になったとき', period: '購入から2〜3年', detail: 'リチウムイオン電池は、約500回の充電サイクルで容量が80%以下になります。週1回の充電であれば約10年ですが、毎日充電する場合は約1.5年で劣化が顕著になります。充電頻度が購入当初の2倍になったら、買い替えの時期です。' },
  { timing: '小学校卒業時', period: '小6の3月', detail: '中学校ではGPS端末からスマートフォンに移行するご家庭が多い傾向にあります。中学生は、スマートフォンの位置共有アプリ（Googleファミリーリンク等）で見守るほうが自然です。' },
  { timing: '端末の動作が不安定になったとき', period: '随時', detail: '位置情報の更新が遅い、アプリとの通信が途切れる、充電が不安定など、動作に問題が生じた場合は買い替えをご検討ください。' },
  { timing: 'より良い機種が登場したとき', period: '随時', detail: '新モデルはバッテリー持ち・精度・機能が向上しています。現行モデルに不満がある場合は、最新モデルへの買い替えで満足度が上がることがあります。' },
  { timing: '下の子に引き継ぐとき', period: '兄弟の入学時', detail: '上の子の端末を下の子に引き継ぐ時期に合わせて、上の子用に新端末を購入する場合もあります。' },
];

const dataMigration = [
  { step: 1, title: '旧端末のアプリ登録の解除', desc: 'アプリの設定画面から、旧端末の登録を解除（ペアリング解除）します。これにより、旧端末との紐付けがなくなります。' },
  { step: 2, title: '旧端末の月額契約の確認', desc: '同じメーカーの端末に買い替える場合、月額契約はそのまま引き継げることが多くあります。別メーカーに乗り換える場合は、旧メーカーの解約手続きを行います。' },
  { step: 3, title: '新端末のアプリへの登録', desc: '新端末のQRコードを読み取るか、端末IDを入力してアプリに登録します。エリア通知（ジオフェンス）や通知設定は、再設定が必要です。' },
  { step: 4, title: '旧端末の初期化・処分', desc: '旧端末のリセットボタンを長押しするか、アプリから遠隔リセットを行います。初期化後は自治体の回収ボックスやメーカーの回収サービスで処分します。' },
];

const disposalMethods = [
  { method: 'メーカー回収サービス', cost: '無料（一部メーカー）', detail: '公式サイトから申し込み、端末を郵送します。環境に配慮した処分が行われます。回収キャンペーンを実施しているメーカーもあります。' },
  { method: '自治体の小型家電回収ボックス', cost: '無料', detail: '市区町村の公共施設や家電量販店に設置されている回収ボックスに入れるだけで処分できます。最も手軽な方法です。' },
  { method: '家電量販店の回収サービス', cost: '無料〜数百円', detail: 'ヨドバシカメラ、ビックカメラ等で小型家電の回収を行っています。新しい端末を購入する際に、一緒に持ち込むと便利です。' },
  { method: 'フリマアプリで売却', cost: '手数料10%程度', detail: '初期化済み・アカウント解除済みであれば出品できます。ただし、中古GPSは買い手がつきにくい傾向があります。相場は新品の30〜50%程度です。' },
];

export default function SecondHandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供用GPSの中古購入・買い替えガイド", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '中古購入・買い替え' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">中古・買い替え</span>
            <span className="tag-pill bg-blue text-white">ガイド</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供用GPSの中古購入・買い替えガイド
          </h1>
          <p className="text-g600 text-lg">中古のリスク・買い替えの時期・データ移行・処分方法を解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-g600 mb-8">
            子供用GPSをできるだけ安く購入したい方、買い替えの時期を検討している方に向けて、中古購入のリスク、買い替えに適した時期、データ移行の方法、古い端末の処分方法を詳しく解説します。要点として、子供用GPSの中古購入はリスクが高いため、当サイトでは新品の購入をおすすめしています。
          </p>

          <h2 className="section-title">中古購入のリスク</h2>
          <div className="space-y-4 mb-8">
            {secondHandRisks.map((r) => (
              <div key={r.risk} className="card-hover p-5">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-g800">{r.risk}</h3>
                  <span className={`tag-pill text-white text-xs ${r.severity === '高' ? 'bg-orange' : 'bg-blue'}`}>リスク: {r.severity}</span>
                </div>
                <p className="text-sm text-g600">{r.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-orange-light rounded-xl p-5 mb-8">
            <h3 className="font-bold text-g800 mb-2">中古と新品の費用比較</h3>
            <p className="text-sm text-g600 mb-3">
              中古端末は新品の50〜70%の価格で購入できますが、バッテリー劣化により早期に買い替えるリスクを考慮すると、総費用は新品と大差ないか、かえって高くなる場合があります。
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3">
                <p className="text-xs text-g500">中古（2年落ち）</p>
                <p className="font-bold text-g800">約3,000円 + 月額528円</p>
                <p className="text-xs text-g500">バッテリー寿命: 残り約1年</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-xs text-g500">新品</p>
                <p className="font-bold text-g800">約5,280円 + 月額528円</p>
                <p className="text-xs text-g500">バッテリー寿命: 約2〜3年</p>
              </div>
            </div>
          </div>

          <h2 className="section-title">買い替えに適した時期</h2>
          <div className="space-y-4 mb-8">
            {replaceTiming.map((t) => (
              <div key={t.timing} className="card-hover p-5">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-g800">{t.timing}</h3>
                  <span className="tag-pill bg-blue-light text-g700 text-xs">{t.period}</span>
                </div>
                <p className="text-sm text-g600">{t.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">データ移行方法</h2>
          <div className="space-y-4 mb-8">
            {dataMigration.map((s) => (
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

          <h2 className="section-title">古い端末の処分方法</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">処分方法</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">費用</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">詳細</th>
                </tr>
              </thead>
              <tbody>
                {disposalMethods.map((d) => (
                  <tr key={d.method} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{d.method}</td>
                    <td className="py-3 px-3 text-right text-g600">{d.cost}</td>
                    <td className="py-3 px-3 text-g600">{d.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">新品購入によるGPS見守りの開始</h2>
            <p className="text-g600 mb-6 text-sm">長期的な費用対効果と安心感を考慮し、当サイトでは新品の購入をおすすめしています。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/cost-annual/" className="btn-primary">年間コスト比較</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">GPS端末の選び方ガイド</Link>
            </div>
          </div>

          <p className="text-xs text-g400 mt-6 text-center">最終更新: 2026年5月</p>
        </div>
      </section>
    </>
  );
}
