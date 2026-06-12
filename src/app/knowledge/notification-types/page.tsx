import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供用GPSの通知機能一覧｜設定方法と活用テクニック',
  description:
    '子供用GPS端末の通知機能を徹底解説。位置更新・ジオフェンス・SOS・バッテリー低下など8種類の通知の違い、10機種の対応表、シーン別おすすめ設定、通知が来ない時のトラブルシューティングまで紹介。',
  keywords: ['子供GPS', '通知', '種類', '設定方法', 'ジオフェンス', 'SOS', 'アラート'],
  openGraph: {
    title: '子供用GPSの通知機能一覧｜設定方法と活用テクニック',
    description: '子供用GPS端末の通知機能を徹底解説。8種類の通知の違い、10機種の対応表、シーン別おすすめ設定を紹介。',
  },
};

const faqData = [
  { q: '通知が多すぎて見なくなってしまいます。どうすれば？', a: '「通知疲れ」は非常に多い悩みです。まずジオフェンス通知を「学校」「自宅」の2箇所に絞り、位置更新の通知はオフにしましょう。本当に重要なSOS通知とバッテリー低下通知だけをオンにすれば、大切な通知を見逃しにくくなります。' },
  { q: 'SOS通知はどの機種でも使えますか？', a: 'すべての機種でSOS通知（端末ボタン長押し）に対応しています。ただし機種によってボタンの押し方（長押し秒数）や通知先の設定方法が異なります。お子さんにも使い方を事前に教えておくことが重要です。' },
  { q: 'ジオフェンスは何箇所まで設定できますか？', a: '機種によって異なりますが、一般的に5〜10箇所まで設定できます。みてねみまもりGPSは最大10箇所、あんしんウォッチャーは最大10箇所、BoTトークは自動学習で無制限に対応します。' },
  { q: '通知が来ない・遅れる場合の原因は？', a: '主な原因は、スマホ側の通知設定がオフになっている、アプリがバックグラウンドで強制終了されている、端末のバッテリー切れ、端末がLTE圏外にある、の4つです。まずスマホの設定アプリから通知許可を確認しましょう。' },
  { q: '父親と母親の両方に通知を送れますか？', a: 'はい、ほとんどの機種で複数の保護者に通知を送ることができます。保護者用アプリに家族を招待する機能があり、祖父母まで含めて3〜5人程度に通知を共有できるのが一般的です。' },
  { q: '通知音やバイブレーションのカスタマイズはできますか？', a: '通知音のカスタマイズはスマホ側の設定で行います。iPhoneの場合は「設定」→「通知」→該当アプリから、Androidの場合は「設定」→「アプリ」→該当アプリ→「通知」から個別に設定できます。重要な通知だけ音を鳴らす設定がおすすめです。' },
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

const notificationTypes = [
  { id: 1, name: '位置更新通知', desc: '設定した間隔で端末の現在位置がアプリに反映される。プッシュ通知として受け取ることも可能。', useCase: '通学中のリアルタイム追跡。今どこにいるか随時確認したい場合。' },
  { id: 2, name: 'ジオフェンス入出通知', desc: '設定したエリア（学校・自宅・塾など）に入った時と出た時にプッシュ通知が届く。', useCase: '学校への到着・出発を自動で知りたい場合。最も活用度の高い通知。' },
  { id: 3, name: 'SOS通知', desc: '子供が端末のボタンを長押しすると、緊急通知が保護者に送信される。', useCase: '不審者に遭遇した時、道に迷った時、体調不良時などの緊急連絡。' },
  { id: 4, name: 'バッテリー低下通知', desc: 'バッテリー残量が一定以下（通常20%以下）になると保護者に通知。', useCase: '充電忘れの防止。特にバッテリー持ちが短い機種では重要。' },
  { id: 5, name: '速度異常通知', desc: '端末が通常の移動速度を超えた場合（車・電車に乗った場合など）に通知。', useCase: '子供が予期せず車に乗せられた等の異常検知。防犯目的。' },
  { id: 6, name: '定時通知', desc: '設定した時刻に端末の位置情報を自動取得して通知。', useCase: '「下校時刻の15時に自動で位置確認」など、決まった時間に確認したい場合。' },
  { id: 7, name: '長時間停止通知', desc: '端末が一定時間以上同じ場所にとどまっている場合に通知。', useCase: '子供が長時間移動していない異常を検知。置き忘れの発見にも。' },
  { id: 8, name: '端末オフ通知', desc: '端末の電源がオフになった、またはLTE接続が切れた場合に通知。', useCase: '端末の故障・バッテリー完全消耗・電波遮断の検知。' },
];

const deviceNotificationMatrix = [
  { name: 'みてねみまもりGPS', n1: '○', n2: '○', n3: '○', n4: '○', n5: '○', n6: '○', n7: '×', n8: '○' },
  { name: 'BoTトーク', n1: '○', n2: '○', n3: '○', n4: '○', n5: '○', n6: '○', n7: '○', n8: '○' },
  { name: 'あんしんウォッチャー', n1: '○', n2: '○', n3: '○', n4: '○', n5: '×', n6: '○', n7: '×', n8: '○' },
  { name: 'まもサーチ', n1: '○', n2: '○', n3: '○', n4: '○', n5: '×', n6: '○', n7: '○', n8: '○' },
  { name: 'soranome', n1: '○', n2: '○', n3: '○', n4: '○', n5: '×', n6: '○', n7: '×', n8: '○' },
  { name: 'myFirst Fone R2', n1: '○', n2: '○', n3: '○', n4: '○', n5: '×', n6: '○', n7: '×', n8: '○' },
  { name: 'coneco', n1: '○', n2: '○', n3: '○', n4: '○', n5: '×', n6: '○', n7: '×', n8: '○' },
  { name: 'Hamic POCKET', n1: '○', n2: '○', n3: '○', n4: '○', n5: '×', n6: '×', n7: '×', n8: '○' },
  { name: 'キッズフォン3', n1: '○', n2: '○', n3: '○', n4: '○', n5: '×', n6: '○', n7: '×', n8: '○' },
];

const scenarioSettings = [
  {
    scene: '通学用（平日）',
    icon: '🏫',
    recommended: [
      'ジオフェンス入出: 学校・自宅の2箇所をON',
      'SOS通知: 常にON',
      'バッテリー低下: ON（20%で通知）',
      '位置更新: 3分間隔（プッシュ通知はOFF）',
      '定時通知: 下校時刻にON',
    ],
    tip: '位置更新のプッシュ通知はオフにし、必要な時だけアプリを開いて確認するスタイルが通知疲れを防げます。',
  },
  {
    scene: '習い事用（放課後）',
    icon: '🎹',
    recommended: [
      'ジオフェンス入出: 塾・教室を追加',
      'SOS通知: 常にON',
      '速度異常: ON（徒歩想定の経路で車速度を検知）',
      '定時通知: 習い事終了時刻にON',
    ],
    tip: '習い事先が複数ある場合は、曜日ごとにジオフェンスを使い分けると便利です。',
  },
  {
    scene: '休日のお出かけ用',
    icon: '🏞️',
    recommended: [
      '位置更新: 5分間隔（バッテリー節約）',
      'SOS通知: 常にON',
      'バッテリー低下: ON',
      'ジオフェンス: 普段のエリアはOFF（通知が多くなるため）',
    ],
    tip: '休日は行動範囲が広がるため、ジオフェンスを一時的にオフにして位置更新で追跡するのが効率的です。',
  },
];

const troubleshootSteps = [
  { step: 1, title: 'スマホの通知設定を確認', desc: '「設定」→「通知」→GPS用アプリの通知が「許可」になっているか確認。特にAndroidは「バッテリー最適化」でアプリが制限されていることが多いです。' },
  { step: 2, title: 'アプリのバックグラウンド動作を許可', desc: 'iPhoneは「設定」→「一般」→「Appのバックグラウンド更新」をオン。Androidは「設定」→「アプリ」→「バッテリー」→「制限なし」に設定。' },
  { step: 3, title: 'GPS端末のバッテリーを確認', desc: '端末の充電が切れていると通知は届きません。アプリでバッテリー残量を確認し、必要なら充電してください。' },
  { step: 4, title: '端末のLTE接続状況を確認', desc: 'アプリ上で端末の最終更新時刻を確認。長時間更新されていなければ端末がLTE圏外の可能性があります。' },
  { step: 5, title: 'アプリの再インストール', desc: '上記をすべて試しても改善しない場合、アプリを一度削除して再インストールしてみましょう。再ログイン後に通知設定を再確認してください。' },
  { step: 6, title: 'サポートに問い合わせ', desc: '端末側の不具合の可能性もあります。各メーカーのサポート窓口に問い合わせましょう。保証期間内なら無償交換の対象になることもあります。' },
];

export default function NotificationTypesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供用GPSの通知機能一覧｜設定方法と活用テクニック", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "お役立ち", "item": "https://gps-kodomo.com/knowledge/"}, {"@type": "ListItem", "position": 3, "name": "通知機能一覧", "item": "https://gps-kodomo.com/knowledge/notification-types/"}]}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '通知機能一覧' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">通知機能</span>
            <span className="tag-pill bg-orange text-white">設定方法</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供用GPSの通知機能一覧
          </h1>
          <p className="text-g600 text-lg">設定方法と活用テクニック｜8種類の通知を使いこなす</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">

          <h2 className="section-title">通知の種類8つと特徴</h2>
          <p className="text-g600 mb-6">
            子供用GPS端末には最大8種類の通知機能があります。すべてをオンにすると「通知疲れ」で大切な通知を見逃す原因になるため、
            生活スタイルに合わせた取捨選択が重要です。以下で各通知の特徴と活用シーンを解説します。
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {notificationTypes.map((n) => (
              <div key={n.id} className="card-hover p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue text-white flex items-center justify-center font-bold text-xs">
                    {n.id}
                  </span>
                  <h3 className="font-bold text-g800">{n.name}</h3>
                </div>
                <p className="text-sm text-g600 mb-2">{n.desc}</p>
                <p className="text-xs text-g500"><strong>活用シーン:</strong> {n.useCase}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">機種別通知対応表（10機種 x 8通知）</h2>
          <p className="text-sm text-g500 mb-3">○ = 対応 / × = 非対応（2026年5月時点）</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-2 px-2 text-left font-bold text-g800 whitespace-nowrap">機種名</th>
                  <th className="py-2 px-2 text-center font-bold text-g800">位置更新</th>
                  <th className="py-2 px-2 text-center font-bold text-g800">ジオ<br/>フェンス</th>
                  <th className="py-2 px-2 text-center font-bold text-g800">SOS</th>
                  <th className="py-2 px-2 text-center font-bold text-g800">バッテリー<br/>低下</th>
                  <th className="py-2 px-2 text-center font-bold text-g800">速度<br/>異常</th>
                  <th className="py-2 px-2 text-center font-bold text-g800">定時<br/>通知</th>
                  <th className="py-2 px-2 text-center font-bold text-g800">長時間<br/>停止</th>
                  <th className="py-2 px-2 text-center font-bold text-g800">端末<br/>オフ</th>
                </tr>
              </thead>
              <tbody>
                {deviceNotificationMatrix.map((d) => (
                  <tr key={d.name} className="border-b border-g100">
                    <td className="py-2 px-2 font-semibold text-g700 whitespace-nowrap">{d.name}</td>
                    <td className="py-2 px-2 text-center text-g600">{d.n1}</td>
                    <td className="py-2 px-2 text-center text-g600">{d.n2}</td>
                    <td className="py-2 px-2 text-center text-g600">{d.n3}</td>
                    <td className="py-2 px-2 text-center text-g600">{d.n4}</td>
                    <td className="py-2 px-2 text-center text-g600">{d.n5}</td>
                    <td className="py-2 px-2 text-center text-g600">{d.n6}</td>
                    <td className="py-2 px-2 text-center text-g600">{d.n7}</td>
                    <td className="py-2 px-2 text-center text-g600">{d.n8}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">通知設定のベストプラクティス</h2>
          <div className="card-hover p-6 mb-8 border-l-4 border-orange">
            <h3 className="font-bold text-g800 mb-3">「通知疲れ」を防ぐ3つの原則</h3>
            <div className="space-y-3">
              {[
                { num: 1, title: '必須通知は3つだけ', desc: 'SOS通知・ジオフェンス入出・バッテリー低下の3つは常にオン。それ以外は必要に応じて。' },
                { num: 2, title: '位置更新はプッシュ通知オフ', desc: '位置情報はアプリを開いた時に確認するスタイルに。プッシュ通知にすると1日数十件になり、見なくなります。' },
                { num: 3, title: '週末は設定を切り替え', desc: '平日と休日で通知設定を変えると、不要な通知を減らせます。ジオフェンスは平日のみオンにするのがおすすめ。' },
              ].map((item) => (
                <div key={item.num} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange text-white flex items-center justify-center font-bold text-xs">
                    {item.num}
                  </span>
                  <div>
                    <p className="font-semibold text-g800 text-sm">{item.title}</p>
                    <p className="text-sm text-g600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="section-title">シーン別おすすめ設定</h2>
          <div className="space-y-6 mb-8">
            {scenarioSettings.map((s) => (
              <div key={s.scene} className="card-hover p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{s.icon}</span>
                  <h3 className="font-bold text-g800 text-lg">{s.scene}</h3>
                </div>
                <ul className="space-y-1 mb-3">
                  {s.recommended.map((r, i) => (
                    <li key={i} className="text-sm text-g600 flex items-start gap-2">
                      <span className="text-blue mt-0.5">&#10003;</span>
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-g500 bg-blue-light rounded-lg p-3"><strong>ポイント:</strong> {s.tip}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">通知が来ない時のトラブルシューティング</h2>
          <div className="space-y-4 mb-8">
            {troubleshootSteps.map((s) => (
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

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 flex flex-wrap gap-3 text-sm">
            <Link href="/knowledge/geofence/" className="text-blue hover:underline">ジオフェンス詳細ガイド</Link>
            <Link href="/knowledge/troubleshoot/" className="text-blue hover:underline">トラブルシューティング</Link>
            <Link href="/knowledge/setup/" className="text-blue hover:underline">初期設定ガイド</Link>
            <Link href="/knowledge/how-to-choose/" className="text-blue hover:underline">GPS選び方ガイド</Link>
          </div>

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">通知機能を使いこなして安心の見守りを</h2>
            <p className="text-g600 mb-6 text-sm">必要な通知だけを厳選すれば、大切なアラートを見逃さず、快適に使い続けられます。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/apps/" className="btn-primary">アプリ比較</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">GPS選び方ガイド</Link>
            </div>
          </div>

          <p className="text-xs text-g400 mt-8 text-center">最終更新: 2026年5月</p>
        </div>
      </section>
    </>
  );
}
