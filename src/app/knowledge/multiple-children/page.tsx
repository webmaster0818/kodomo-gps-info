import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '兄弟・複数台のGPS管理方法｜アプリで一括管理',
  description:
    '兄弟で子供用GPSを複数台使う場合の管理方法を解説します。複数台管理に対応したアプリの一覧、2台目割引がある機種、同じ機種にすべきかの判断材料、管理のポイント（名前設定・通知の分け方）を紹介します。',
  keywords: ['兄弟', '複数台', 'GPS', '管理', 'アプリ', '一括管理', '2台目'],
  openGraph: {
    images: ['/og.png'],
    title: '兄弟・複数台のGPS管理方法｜アプリで一括管理',
    description: '兄弟で子供用GPSを複数台使う場合の管理方法について、対応アプリ、割引、管理のポイントを解説します。',
  },
};

const faqData = [
  { q: '1つのアプリで複数の端末を管理できますか？', a: 'はい、主要な子供用GPSアプリはすべて複数台管理に対応しています。みてねみまもりGPS、あんしんウォッチャー、BoTトーク、まもサーチなど、1つのアプリで最大5〜10台程度の端末を同時に管理できます。それぞれの端末に名前やアイコンを設定し、ひと目で識別できる仕様になっています。' },
  { q: '2台目以降の割引はありますか？', a: '2台目以降の月額料金が割引になる機種は限られています。あんしんウォッチャーは、1つのau IDにつき2台まで登録でき、2台目を追加しても月額は539円のままです（au公式・2026年10月17日確認）。その他のメーカーでは、基本的に台数分の月額料金がかかります。' },
  { q: '兄弟で同じ機種を使うべきですか？', a: '同じ機種にするメリットは、(1)1つのアプリで管理できる、(2)充電器を共用できる、(3)操作方法を統一できる、の3点です。ただし、兄弟の年齢差が大きい場合は、年齢に合った機種を選ぶ方が適切な場合もあります。たとえば、低学年にはシンプルなGPS端末、高学年にはトーク機能付きの機種を選ぶといった方法です。' },
  { q: '保護者のスマートフォンが2台ある場合、両方で管理できますか？', a: 'はい、ほとんどのGPSアプリでは、1つの端末を複数の保護者のスマートフォンから見守ることができます。両親や祖父母のスマートフォンにもアプリをインストールし、同じアカウントまたは招待機能で共有できます。通知設定は端末ごとに個別に調整できます。' },
  { q: '兄弟の行動履歴を別々に確認できますか？', a: 'はい、アプリ上で端末ごとに行動履歴が記録されるため、兄弟それぞれの移動ルートや到着時刻を個別に確認できます。マップ上で複数の端末を同時に表示する機能もあり、兄弟がそれぞれどこにいるかをひと目で確認できます。' },
  { q: '3台以上を管理する場合の注意点はありますか？', a: '3台以上になると通知の数が多くなり、重要な通知を見逃すおそれがあります。対策として、(1)端末ごとに通知音を変える、(2)不要な通知をオフにする、(3)エリア通知（ジオフェンス）の設定を絞る、(4)特に見守りが必要なお子さまの通知を優先設定にする、といった工夫が有効です。' },
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

const appData = [
  { name: 'みてねみまもりGPS', maxDevices: '最大5台', multiView: '対応', familyShare: '最大9人', notification: '端末別設定可', monthlyPerUnit: '528円/台' },
  { name: 'あんしんウォッチャー', maxDevices: '最大2台（1つのau IDにつき）', multiView: '対応', familyShare: '最大5人', notification: '端末別設定可', monthlyPerUnit: '539円（2台目は追加0円）' },
  { name: 'BoTトーク', maxDevices: '最大5台', multiView: '対応', familyShare: '最大10人', notification: '端末別設定可', monthlyPerUnit: '748円/台' },
  { name: 'まもサーチ', maxDevices: '最大5台', multiView: '対応', familyShare: '最大5人', notification: '端末別設定可', monthlyPerUnit: '528円/台' },
  { name: 'myFirst Fone R2', maxDevices: '最大3台', multiView: '対応', familyShare: '最大5人', notification: '端末別設定可', monthlyPerUnit: '998円/台' },
];

const costSimulation = [
  { devices: '2台', mitene: '月額1,056円（年12,672円）', anshin: '月額759円（年9,108円）', bot: '月額1,496円（年17,952円）' },
  { devices: '3台', mitene: '月額1,584円（年19,008円）', anshin: '月額979円（年11,748円）', bot: '月額2,244円（年26,928円）' },
  { devices: '4台', mitene: '月額2,112円（年25,344円）', anshin: '月額1,199円（年14,388円）', bot: '月額2,992円（年35,904円）' },
];

const managementTips = [
  { icon: '🏷️', title: '端末に名前を設定する', desc: 'アプリ上で、各端末にお子さまの名前やニックネームを設定します。「たろう」「はなこ」のように、ひと目で誰の端末かが分かるようにしておくことをおすすめします。アイコンや色を設定できるアプリもあります。' },
  { icon: '🔔', title: '通知音を端末ごとに変える', desc: '兄弟それぞれの端末からの通知音を変えると、スマートフォンの画面を見なくても誰の通知かが分かります。特に、登下校の時間が異なる兄弟の場合に便利です。' },
  { icon: '📍', title: 'エリア通知を個別に設定する', desc: '兄弟で通う学校や習い事が異なる場合は、それぞれの端末にエリア通知を個別に設定します。不要な通知を減らし、必要な通知だけを受け取れるようになります。' },
  { icon: '🔋', title: '充電日を決めておく', desc: '複数台の端末を管理していると、充電を忘れやすくなります。「毎週日曜日に全員分を充電する」など、充電日を決めて習慣化することをおすすめします。曜日ごとに色違いの充電ケーブルを使うことも有効です。' },
  { icon: '👨‍👩‍👧‍👦', title: '家族全員でアプリを共有する', desc: '両親だけでなく、祖父母やベビーシッターにもアプリを共有しておくと、誰が見守る場合でも対応できます。「お迎えの日は祖母が確認する」など、役割を分担することも可能です。' },
  { icon: '📊', title: '定期的に設定を見直す', desc: '学期ごとに、通知設定やエリア通知の内容を見直します。習い事や通学路に変更があった場合は、速やかに設定を更新してください。' },
];

const sameVsDiff = [
  { point: '管理のしやすさ', same: '1つのアプリで管理でき、操作方法も統一されます。', diff: '複数のアプリを管理する必要がある場合があります。' },
  { point: '充電器', same: '同じ充電器を共用できます。', diff: '端末ごとに異なる充電器が必要な場合があります。' },
  { point: 'コスト', same: '2台目割引がある機種であれば有利です。', diff: '割引は適用されません。' },
  { point: '年齢適合', same: '年齢差が小さければ問題ありません。', diff: '年齢に合った機能を選べます（例: 低学年はGPSのみ、高学年はトーク機能付き）。' },
  { point: '買い替え', same: '同じ時期に買い替えとなりやすい傾向があります。', diff: '個別のタイミングで買い替えられます。' },
];

export default function MultipleChildrenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "兄弟・複数台のGPS管理方法｜アプリで一括管理", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '複数台のGPS管理' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">兄弟・複数台</span>
            <span className="tag-pill bg-blue text-white">一括管理</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            兄弟・複数台のGPS管理方法
          </h1>
          <p className="text-g600 text-lg">アプリでの一括管理、2台目割引、管理のポイントを解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-g600 mb-8">
            兄弟がいるご家庭では、複数のGPS端末を管理する必要があります。本ページでは、「1つのアプリで全員分を管理できるか」「2台目以降は安くなるか」「同じ機種にすべきか」といった疑問にお答えします。複数台管理に対応したアプリの一覧、2台目割引のある機種、管理のポイントについて解説します。
          </p>

          <h2 className="section-title">複数台管理対応アプリ一覧</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-2 text-left font-bold text-g800">機種名</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">最大台数</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">同時表示</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">家族共有</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">通知設定</th>
                  <th className="py-3 px-2 text-right font-bold text-g800">月額/台</th>
                </tr>
              </thead>
              <tbody>
                {appData.map((a) => (
                  <tr key={a.name} className="border-b border-g100">
                    <td className="py-3 px-2 font-semibold text-g700">{a.name}</td>
                    <td className="py-3 px-2 text-center text-g600">{a.maxDevices}</td>
                    <td className="py-3 px-2 text-center text-g600">{a.multiView}</td>
                    <td className="py-3 px-2 text-center text-g600">{a.familyShare}</td>
                    <td className="py-3 px-2 text-center text-g600">{a.notification}</td>
                    <td className="py-3 px-2 text-right text-g600">{a.monthlyPerUnit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">複数台のコストシミュレーション（月額のみ）</h2>
          <p className="text-sm text-g500 mb-3">※ 月額料金のみの比較です。初期費用（端末代）は別途必要です。</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">台数</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">みてね</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">あんしんウォッチャー</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">BoTトーク</th>
                </tr>
              </thead>
              <tbody>
                {costSimulation.map((c) => (
                  <tr key={c.devices} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{c.devices}</td>
                    <td className="py-3 px-3 text-right text-g600">{c.mitene}</td>
                    <td className="py-3 px-3 text-right text-g600">{c.anshin}</td>
                    <td className="py-3 px-3 text-right text-g600">{c.bot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-light rounded-xl p-5 mb-8">
            <h3 className="font-bold text-g800 mb-2">2台以上の場合はあんしんウォッチャーが割安</h3>
            <p className="text-sm text-g600">
              2台目以降の月額料金が割引になるあんしんウォッチャーは、兄弟での利用において最も費用対効果の高い選択肢です。3台で月額979円となり、みてねの3台（1,584円）と比べて年間約7,000円安くなります。
            </p>
          </div>

          <h2 className="section-title">同じ機種と異なる機種の比較</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">比較項目</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">同じ機種</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">異なる機種</th>
                </tr>
              </thead>
              <tbody>
                {sameVsDiff.map((s) => (
                  <tr key={s.point} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{s.point}</td>
                    <td className="py-3 px-3 text-g600">{s.same}</td>
                    <td className="py-3 px-3 text-g600">{s.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">管理のポイント</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {managementTips.map((tip) => (
              <div key={tip.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-2xl">{tip.icon}</p>
                <div>
                  <h3 className="font-bold text-g800">{tip.title}</h3>
                  <p className="text-sm text-g600">{tip.desc}</p>
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

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">兄弟全員の見守りに適したGPS端末</h2>
            <p className="text-g600 mb-6 text-sm">複数台の管理に適した機種を選ぶことで、効率的な見守りが可能になります。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/price/" className="btn-primary">月額料金比較</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">GPS選び方ガイド</Link>
            </div>
          </div>

          <p className="text-xs text-g400 mt-6 text-center">最終更新: 2026年5月</p>
        </div>
      </section>
    </>
  );
}
