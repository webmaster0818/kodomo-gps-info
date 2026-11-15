import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'あんしんウォッチャーの使い方｜登録4ステップと通知・ボタンの設定方法（au HOMEアプリ）【2026年11月】',
  description:
    'au（KDDI）の見守りGPS「あんしんウォッチャー」「あんしんウォッチャー LE」の使い方を、KDDI公式の使い方ガイドにもとづいて整理しています。利用開始までの4ステップ、現在地と移動履歴の見方、エリア通知・のりもの通知・本体ボタンの設定方法をまとめています。',
  keywords: ['あんしんウォッチャー', '使い方', '初期設定', 'au HOME', 'エリア通知', '本体ボタン'],
};

const GUIDE = 'https://homeiot.kddi.com/anshinwatcher/kids/column/011.html';

const steps = [
  {
    step: 'ステップ1：本体の充電',
    body: 'USBケーブルは同梱されていないため、お手持ちのUSB Type-Cケーブル（定格入力5V／1.5A）で充電します。充電中はLEDが赤色に点灯し、完了すると緑色に点灯します。設定途中の電池切れを防ぐため、最初に十分に充電しておきます。',
  },
  {
    step: 'ステップ2：利用開始の手続き',
    body: '個装箱の裏面にある「ご利用開始の手順」のQRコードを読み込みます。公式ページでプランを契約済みの場合はアプリをインストールして契約時のau IDでログインします。家電量販店などの店頭やECサイトで購入した場合は、新規契約の手続きをしてからアプリにログインします。',
  },
  {
    step: 'ステップ3：au HOMEアプリへの端末登録',
    body: 'au HOMEアプリの「デバイス」タブ →画面右上の「設定」→「登録」に進み、「あんしんウォッチャー／あんしんウォッチャー LE」を選びます。利用規約に同意し、本体裏面のQRコードを読み取り、本体側面のシリアル番号（S/N）の下4桁を入力します。本体の電源を入れて接続します（電源が入っている場合はボタンを約10秒長押しして再起動します）。',
  },
  {
    step: 'ステップ4：名前の設定と動作確認',
    body: '接続が完了したら、端末に名前とアイコンを設定します。アプリの地図に現在地が表示されれば初期設定は完了です。',
  },
];

const features = [
  { name: '現在地の確認', how: 'アプリを開くと地図上に現在地が表示されます。最新の位置は画面を下にスワイプして更新します。「ここまでの経路を表示」で、保護者の現在地から端末までの経路をGoogleマップで表示できます。' },
  { name: '位置の更新間隔', how: '90秒・3分・5分などから選べます。KDDIのガイドでは、徒歩の通学路では90秒、乗り物の移動が多い場合は3分、確認の頻度を下げて電池を長持ちさせたい場合は5分の使い分けが紹介されています。' },
  { name: '移動履歴', how: '過去の移動ルートを時系列で地図に表示します。表示する期間を選べます。' },
  { name: 'エリア通知', how: '学校・塾・自宅などを住所入力または地図上で指定し、半径100m〜500mの範囲で登録します。出入りしたときに保護者のアプリへ通知が届きます。集合住宅などでは、自宅の無線LANのSSIDを登録し、接続時に通知を受け取る方法もあります。' },
  { name: 'のりもの通知', how: '事前の設定が必要です。2点間の移動速度が時速15km以上になると、乗り物で移動していると判断して通知します。' },
  { name: '本体ボタン', how: '本体中央のボタンを約3秒長押しすると、保護者のアプリに通知が届き、現在地が表示されます。長押し後に測位を続ける時間を5分・10分・20分から設定でき、その間は最短30秒ごとに位置を更新します。' },
  { name: 'バッテリー残量通知', how: '本体の電池残量が少なくなると、アプリに通知が届きます。' },
];

const faqData = [
  {
    q: 'あんしんウォッチャー LEも使い方は同じですか？',
    a: 'KDDIの公式ガイドでは、「あんしんウォッチャー LE」の初期設定と基本的な使い方は「あんしんウォッチャー」と同様と案内されています。',
  },
  {
    q: '端末の登録はいつでもできますか？',
    a: 'KDDIの公式ガイドでは、端末の登録受付時間は9:00〜21:30と案内されています。また、あんしんウォッチャーはauのLTE-M通信を使うため、登録作業は通信エリア内で行う必要があります。',
  },
  {
    q: '子どもには何を教えておけばよいですか？',
    a: '本体ボタンを約3秒長押しすると保護者に通知と現在地が届くことと、どのような場面で押すのかを、事前に伝えておくことがKDDIのガイドでも勧められています。登下校の前に一度、一緒に押して通知が届くかを確かめておくと安心です。',
  },
  {
    q: '海外や地下でも使えますか？',
    a: '海外では利用できません。また、地下街・建物内・乗り物内・ビルの陰などでは、電波やGPS衛星の環境によって位置の精度が下がる場合があり、圏外では位置検索ができません。',
  },
  {
    q: '家族で見守るには？2台目を追加するには？',
    a: '家族招待（契約者を含め最大10人）と2台目の追加方法・料金は、「あんしんウォッチャーの詳細」ページにまとめています。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function AnshinWatcherHowtoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'あんしんウォッチャーの使い方｜登録4ステップと通知・ボタンの設定方法', datePublished: '2026-11-15', dateModified: '2026-11-15', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'あんしんウォッチャーの使い方' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">使い方</span>
            <span className="tag-pill bg-blue text-white">あんしんウォッチャー</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">あんしんウォッチャーの使い方｜登録4ステップと通知・ボタンの設定方法</h1>
          <p className="text-g600 text-lg">KDDI公式の使い方ガイドにもとづき、利用開始から日々の見守りまでの操作を整理しています。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：充電→利用開始手続き→au HOMEアプリへ登録→動作確認の4ステップで使い始められます</h2>
            <p className="text-g600">
              操作はすべて<strong>au HOMEアプリ</strong>で行います。登録後は、<strong>エリア通知（学校・自宅など）</strong>と<strong>本体ボタンの測位継続時間</strong>を最初に設定しておくと、登下校の見守りに使いやすくなります。USBケーブルは同梱されていないため、USB Type-Cケーブルを用意してから始めてください。
            </p>
          </div>

          <h2 className="section-title">利用開始までの4ステップ</h2>
          <div className="space-y-3 mb-3">
            {steps.map((s) => (
              <div key={s.step} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{s.step}</h3>
                <p className="text-sm text-g600">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={GUIDE} target="_blank" rel="noopener noreferrer" className="text-blue underline">KDDI公式「あんしんウォッチャー使い方ガイド｜登録からシーン別活用」</a>（2025年9月30日公開・2026年11月15日確認）。登録の受付時間は9:00〜21:30、作業はauのLTE-M通信エリア内で行います。手順はアプリのバージョンで変わる場合があるため、付属の取扱説明書もあわせてご確認ください。
          </p>

          <h2 className="section-title">主な機能の使い方・設定方法</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">機能</th>
                  <th className="p-3 text-left border-b-2 border-blue">使い方・設定</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f) => (
                  <tr key={f.name} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800 whitespace-nowrap">{f.name}</td>
                    <td className="p-3 text-g700">{f.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={GUIDE} target="_blank" rel="noopener noreferrer" className="text-blue underline">KDDI公式 使い方ガイド</a>／<a href="https://www.au.com/life/auhome/device/uha01a/" target="_blank" rel="noopener noreferrer" className="text-blue underline">au公式「あんしんウォッチャー LE／あんしんウォッチャー」</a>（2026年11月15日確認）
          </p>

          <h2 className="section-title">登下校の見守りで最初に設定しておく項目</h2>
          <ul className="space-y-2 text-sm text-g700 mb-8">
            <li>・<strong>エリア通知</strong>：自宅と学校を登録すると、出発・到着がアプリに通知されます。学童や塾も同じ手順で追加できます。</li>
            <li>・<strong>更新間隔</strong>：徒歩通学の時間帯は短い間隔、慣れてきたら長い間隔にして電池の持ちを優先する、という使い分けができます。</li>
            <li>・<strong>本体ボタンの測位継続時間</strong>：5分・10分・20分から選びます。ボタンを押したあとに移動しても、設定時間内は位置を追い続けます。</li>
            <li>・<strong>バッテリー残量通知</strong>：通知が届いたらその日のうちに充電する、という家庭内のルールを決めておくと電池切れを防げます。</li>
          </ul>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              <strong>ご注意</strong>：本ページはKDDI・auの公式情報を整理したもので、当サイトが端末で操作を検証した結果ではありません。料金・2台目・家族招待・電池寿命は「<Link href="/review/anshin-watcher/" className="text-blue underline">あんしんウォッチャーの詳細</Link>」、他の機種にも共通する初期設定の流れは「<Link href="/knowledge/setup/" className="text-blue underline">子供GPS 初期設定・使い方ガイド</Link>」をご覧ください。
            </p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/anshin-watcher/" className="btn-primary">あんしんウォッチャーの詳細</Link>
              <Link href="/knowledge/geofence/" className="btn-accent">エリア通知の使い方</Link>
              <Link href="/knowledge/setup/" className="btn-primary">子供GPS 初期設定ガイド</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
