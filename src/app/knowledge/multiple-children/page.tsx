import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '兄弟・複数台のGPS管理方法｜アプリで一括管理',
  description:
    '兄弟で子供用GPSを複数台使う場合の管理方法を解説。複数台管理対応アプリ一覧、2台目割引がある機種、同じ機種にすべきか、管理のコツ（名前設定・通知分け）まで詳しく紹介。',
  keywords: ['兄弟', '複数台', 'GPS', '管理', 'アプリ', '一括管理', '2台目'],
  openGraph: {
    title: '兄弟・複数台のGPS管理方法｜アプリで一括管理',
    description: '兄弟で子供用GPSを複数台使う場合の管理方法。対応アプリ、割引、管理のコツを解説。',
  },
};

const faqData = [
  { q: '1つのアプリで複数の端末を管理できますか？', a: 'はい、主要な子供用GPSアプリはすべて複数台管理に対応しています。みてねみまもりGPS、あんしんウォッチャー、BoTトーク、まもサーチなど、1つのアプリで最大5〜10台程度の端末を同時に管理できます。それぞれの端末に名前やアイコンを設定して、ひと目で識別できるようになっています。' },
  { q: '2台目以降の割引はありますか？', a: '残念ながら、2台目以降の月額料金が割引になる機種は限られています。あんしんウォッチャーは2台目以降の月額が割引になるプランがあります（2台目は月額220円程度に）。その他のメーカーは基本的に台数分の月額料金がかかります。' },
  { q: '兄弟で同じ機種を使うべきですか？', a: '同じ機種にするメリットは、(1)1つのアプリで管理できる、(2)充電器を共用できる、(3)操作方法を統一できる、の3点です。ただし、兄弟の年齢差が大きい場合は、年齢に合った機種を選ぶ方が適切な場合もあります。例えば、低学年にはシンプルなGPS、高学年にはトーク機能付きを選ぶなど。' },
  { q: '保護者のスマホが2台ある場合、両方で管理できますか？', a: 'はい、ほとんどのGPSアプリは1つの端末を複数の保護者のスマホから見守ることができます。両親のスマホ、祖父母のスマホにもアプリをインストールし、同じアカウントまたは招待機能で共有できます。通知設定は端末ごとに個別に調整できます。' },
  { q: '兄弟の行動履歴を別々に確認できますか？', a: 'はい、アプリ上で端末ごとに行動履歴が記録されるため、兄弟それぞれの移動ルートや到着時刻を個別に確認できます。マップ上で複数の端末を同時に表示する機能もあり、兄弟がそれぞれどこにいるかをひと目で確認できます。' },
  { q: '3台以上管理する場合の注意点は？', a: '3台以上になると通知の数が多くなり、重要な通知を見逃すリスクがあります。対策として、(1)端末ごとに通知音を変える、(2)不要な通知をオフにする、(3)ジオフェンスの設定を絞る、(4)最も心配な子の通知を優先設定にする、といった工夫が有効です。' },
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
  { name: 'あんしんウォッチャー', maxDevices: '最大5台', multiView: '対応', familyShare: '最大5人', notification: '端末別設定可', monthlyPerUnit: '539円/台（2台目220円）' },
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
  { icon: '🏷️', title: '端末に名前を設定する', desc: 'アプリ上で各端末にお子さまの名前やニックネームを設定しましょう。「たろう」「はなこ」のように、ひと目で誰の端末かわかるようにします。アイコンや色の設定ができるアプリもあります。' },
  { icon: '🔔', title: '通知音を端末ごとに変える', desc: '兄弟それぞれの端末から来る通知音を変えると、スマホを見なくても誰の通知かわかります。特に登下校時間が異なる兄弟の場合に便利です。' },
  { icon: '📍', title: 'ジオフェンスを個別設定', desc: '兄弟で通う学校や習い事が異なる場合は、それぞれの端末にジオフェンスを個別設定しましょう。不要な通知を減らし、本当に必要な通知だけを受け取れるようになります。' },
  { icon: '🔋', title: '充電日を決めておく', desc: '複数台の端末を管理していると、充電を忘れがちです。「毎週日曜日に全員分充電する」など、充電日を決めてルーティン化しましょう。曜日ごとに色違いの充電ケーブルを使うのも有効です。' },
  { icon: '👨‍👩‍👧‍👦', title: '家族全員でアプリを共有', desc: '両親だけでなく、祖父母やシッターさんにもアプリを共有しておくと、誰が見守っていても対応できます。「お迎えの日はおばあちゃんが確認する」など、役割分担も可能です。' },
  { icon: '📊', title: '定期的に設定を見直す', desc: '学期ごとに通知設定やジオフェンスを見直しましょう。習い事の変更や通学路の変更があった場合は、速やかに設定を更新します。' },
];

const sameVsDiff = [
  { point: '管理のしやすさ', same: '1つのアプリで完結。操作方法が統一。', diff: '複数アプリの管理が必要な場合も。' },
  { point: '充電器', same: '同じ充電器を共用できる。', diff: '端末ごとに異なる充電器が必要な場合がある。' },
  { point: 'コスト', same: '2台目割引がある機種なら有利。', diff: '割引の恩恵は受けられない。' },
  { point: '年齢適合', same: '年齢差が小さければ問題なし。', diff: '年齢に合った機能を選べる（例: 低学年はGPSのみ、高学年はトーク付き）。' },
  { point: '買い替え', same: '同時期に買い替えになりやすい。', diff: '個別のタイミングで買い替え可能。' },
];

export default function MultipleChildrenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '複数台のGPS管理' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">兄弟・複数台</span>
            <span className="tag-pill bg-blue text-white">一括管理</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            兄弟・複数台のGPS管理方法
          </h1>
          <p className="text-g600 text-lg">アプリで一括管理｜2台目割引・管理のコツ</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-g600 mb-8">
            兄弟がいるご家庭では、複数のGPS端末を管理する必要があります。「1つのアプリで全員分管理できる？」「2台目以降は安くなる？」「同じ機種にすべき？」といった疑問にお答えします。このページでは、複数台管理に対応したアプリ一覧、2台目割引のある機種、管理のコツまで詳しく解説します。
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
          <p className="text-sm text-g500 mb-3">※ 月額料金のみの比較。初期費用（端末代）は別途必要。</p>
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
            <h3 className="font-bold text-g800 mb-2">2台以上ならあんしんウォッチャーがお得</h3>
            <p className="text-sm text-g600">
              2台目以降の月額が割引になるあんしんウォッチャーは、兄弟での利用に最もコスパが良い選択肢です。3台で月額979円は、みてねの3台（1,584円）より年間約7,000円安くなります。
            </p>
          </div>

          <h2 className="section-title">同じ機種にすべき？違う機種でもいい？</h2>
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

          <h2 className="section-title">管理のコツ</h2>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">兄弟全員の安全をまとめて守ろう</h2>
            <p className="text-g600 mb-6 text-sm">複数台管理に強い機種を選んで、効率的に見守りましょう。</p>
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
