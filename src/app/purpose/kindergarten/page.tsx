import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '幼稚園・保育園児にGPS見守りは必要？選び方とおすすめ',
  description:
    '幼稚園・保育園に通うお子さまにGPS見守り端末は必要？送迎バス事故防止・園外活動・習い事開始時の安心対策を解説。幼児向けGPSの選び方、おすすめ3機種、持ち込みルール、取り付け方法まで網羅。',
  keywords: ['幼稚園', '保育園', 'GPS', '見守り', '幼児', '送迎バス', '習い事'],
  openGraph: {
    title: '幼稚園・保育園児にGPS見守りは必要？選び方とおすすめ',
    description: '幼稚園・保育園に通うお子さまにGPS見守り端末は必要？幼児向けGPSの選び方、おすすめ機種、持ち込みルールまで徹底解説。',
  },
};

const faqData = [
  { q: '幼稚園・保育園の年齢でもGPSは必要ですか？', a: '送迎バスの置き去り事故や、園外活動中の迷子リスクを考えると、幼児期からGPSを持たせるメリットは大きいです。特に2022年の送迎バス置き去り事故以降、幼稚園・保育園児にGPSを持たせる保護者が増えています。習い事を始めるタイミングで導入するご家庭も多いです。' },
  { q: '幼児にGPSを持たせて嫌がりませんか？', a: 'ポケット型のGPS端末は操作不要で、リュックに入れておくだけなので、お子さまが意識することはほとんどありません。重さも20〜50g程度と非常に軽いため、幼児でも負担を感じにくい設計です。シールやカバーでお気に入りのデコレーションをすると喜んで持ってくれるケースもあります。' },
  { q: '幼稚園にGPSを持ち込むのは許可されていますか？', a: '多くの幼稚園・保育園では、GPS端末の持ち込みは黙認または許可されています。ただし園によってルールが異なるため、事前に担任の先生や園長に確認することをおすすめします。音が鳴らない・操作不要の端末であれば許可されやすい傾向にあります。' },
  { q: '送迎バスの事故防止にGPSは有効ですか？', a: 'GPSがあれば、お子さまが園に到着したかどうかをリアルタイムで確認できます。万が一バス内に取り残された場合も、位置情報から異常に気づくことが可能です。ジオフェンス機能で園の到着・出発を自動通知する設定にしておくとさらに安心です。' },
  { q: '幼児向けGPSの月額費用はどれくらいですか？', a: '月額528円〜748円程度が一般的です。初期費用（本体代）は5,280円〜11,000円で、年間トータルコストは約12,000円〜20,000円になります。幼児期から小学校卒業まで使い続けることを考えると、長期コストでの比較がおすすめです。' },
  { q: '幼児向けGPSと小学生向けGPSの違いは何ですか？', a: '基本的な機能は同じですが、幼児向けには特に「軽量・コンパクト」「操作不要」「バッテリー持ちが良い」という点が重要です。小学生向けはトーク機能付きの機種も人気ですが、幼児にはシンプルな位置確認のみのモデルで十分です。成長に合わせて買い替えるご家庭も多いです。' },
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

const reasonsData = [
  { icon: '🚌', title: '送迎バスの置き去り事故防止', desc: '2022年に発生した送迎バスの置き去り事故は社会問題となりました。GPSがあれば、お子さまが園に無事到着したかをリアルタイムで確認でき、万が一バス内に取り残された場合も位置情報から異常を検知できます。ジオフェンス機能を設定しておけば、園の到着・出発が自動通知されます。' },
  { icon: '🏞️', title: '園外活動・遠足時の安心', desc: '公園での外遊びや遠足など、園外活動中は先生の目が行き届かないことがあります。特に好奇心旺盛な幼児は、一瞬で視界から消えてしまうことも。GPSがあれば、万が一はぐれてもすぐに位置を特定できます。' },
  { icon: '🎹', title: '習い事の開始タイミング', desc: '幼稚園年中・年長になると、習い事を始めるお子さまが増えます。送迎の間の空白時間や、習い事先への到着確認にGPSが役立ちます。特に祖父母やシッターさんに送迎をお願いする場合、保護者がリアルタイムで位置を確認できると安心です。' },
  { icon: '🏠', title: '一時的な預かり・お泊まり', desc: '祖父母の家やお友達の家へのお泊まり、一時預かりの際にGPSがあると、離れていてもお子さまの居場所を確認できます。幼児は自分で連絡を取ることができないため、位置情報が唯一のコミュニケーション手段になる場面もあります。' },
];

const selectionPoints = [
  { title: '軽さ・コンパクトさ（50g以下推奨）', desc: '幼児が持ち歩くものですから、できるだけ軽量・コンパクトなものを選びましょう。目安は50g以下。リュックのポケットに入るサイズが理想です。重い端末は嫌がる原因になります。' },
  { title: 'バッテリー持ち（3日以上推奨）', desc: '幼児は自分で充電できません。バッテリーが長持ちする機種を選べば、週に1〜2回の充電で済みます。更新間隔を「3分」から「5分」に変更するだけでバッテリー持ちが大幅に改善される機種もあります。' },
  { title: '操作不要であること', desc: '幼児には複雑な操作は不可能です。ボタン操作が不要で、持っているだけで位置情報を送信してくれるタイプが最適です。SOSボタン付きの機種もありますが、幼児が誤操作する可能性があるため、シンプルな機種のほうが安心です。' },
  { title: '防水性能（IPX4以上推奨）', desc: '幼児は水たまりで遊んだり、飲み物をこぼしたりすることが日常茶飯事です。IPX4（生活防水）以上の防水性能があれば、突然の雨やちょっとした水濡れでも安心です。' },
  { title: '耐衝撃性', desc: '幼児はものを落としたり投げたりすることが多いです。耐衝撃設計の端末や、シリコンカバーを装着できる機種を選ぶと長持ちします。' },
];

const recommendedDevices = [
  { name: 'みてねみまもりGPS 第3世代', weight: '約26g', battery: '約2週間', monthly: '528円/月', features: ['業界最軽量クラスの26g', '操作不要のシンプル設計', 'ジオフェンス通知対応', '生活防水（IPX5）'], best: '軽さ重視の幼児に最適' },
  { name: 'あんしんウォッチャー', weight: '約53g', battery: '約1.5ヶ月', monthly: '539円/月（※初月無料）', features: ['au回線の安定通信', '最長1.5ヶ月のバッテリー', 'ジオフェンス・行動履歴対応', '充電頻度を減らしたい方に'], best: 'バッテリー重視の方に最適' },
  { name: 'まもサーチ', weight: '約36g', battery: '約1週間', monthly: '528円/月', features: ['コンパクトな丸型デザイン', 'ストラップ穴付きで取り付け簡単', '迷子防止通知機能', '生活防水（IPX5）'], best: 'コスパ重視の方に最適' },
];

const attachMethods = [
  { location: 'リュック外ポケット', method: 'リュックのサイドポケットやフロントポケットにそのまま入れる。取り出しやすく充電しやすいのがメリット。落としやすいのがデメリット。', recommended: '★★★☆☆' },
  { location: 'リュック内側（キーホルダー取り付け）', method: 'ストラップやキーホルダーでリュック内側のDカンに固定。落下防止と盗難防止を兼ねるため最も安心。', recommended: '★★★★★' },
  { location: '靴のインソール下', method: '超薄型の端末であれば靴のインソール下に入れることも可能。ただし防水性能が必須で、対応サイズの端末は限られる。', recommended: '★★☆☆☆' },
  { location: '専用ケース＋ズボンのベルトループ', method: 'シリコンケースやクリップ付きケースでズボンのウエスト部分に固定。服を着替える際に外し忘れに注意。', recommended: '★★★★☆' },
  { location: '名札ケースに同梱', method: '園で使用する名札ケース（IDカードホルダー）にGPS端末を一緒に入れる方法。園によっては最も自然に持ち込める。', recommended: '★★★★☆' },
];

const schoolRules = [
  { type: '許可型', desc: '事前申請で持ち込みOK。申請書を提出し、先生と情報共有する形式。', percentage: '約30%' },
  { type: '黙認型', desc: '明確なルールはないが、リュックに入れている分には問題視されない。最も多いパターン。', percentage: '約50%' },
  { type: '禁止型', desc: '電子機器の持ち込みを一律禁止。事情を説明すれば例外を認めてくれる園もある。', percentage: '約20%' },
];

export default function KindergartenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: '目的別おすすめ', href: '/' }, { name: '幼稚園・保育園児のGPS見守り' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">幼稚園・保育園</span>
            <span className="tag-pill bg-blue text-white">GPS見守り</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            幼稚園・保育園児にGPS見守りは必要？
          </h1>
          <p className="text-g600 text-lg">選び方とおすすめ機種｜送迎バス事故防止から習い事の見守りまで</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-g600 mb-8">
            「幼稚園・保育園の子どもにGPSは早すぎる？」と思われるかもしれません。しかし、2022年に起きた送迎バスの置き去り事故をきっかけに、幼児期からGPS見守りを導入するご家庭が急増しています。園外活動中の迷子防止や、習い事を始めた際の安心対策としても有効です。このページでは、幼児にGPSが必要な理由、幼児向けの選び方、おすすめ機種、幼稚園への持ち込みルールまで詳しく解説します。
          </p>

          <h2 className="section-title">幼児にGPS見守りが必要な4つの理由</h2>
          <div className="space-y-4 mb-8">
            {reasonsData.map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-3xl flex-shrink-0">{item.icon}</p>
                <div>
                  <h3 className="font-bold text-g800 text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">幼児向けGPSの選び方 5つのポイント</h2>
          <div className="space-y-4 mb-8">
            {selectionPoints.map((s, i) => (
              <div key={s.title} className="flex gap-4 items-start card-hover p-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-g800 text-sm">{s.title}</h3>
                  <p className="text-sm text-g600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">幼児におすすめのGPS端末3選</h2>
          <div className="space-y-6 mb-8">
            {recommendedDevices.map((device) => (
              <div key={device.name} className="card-hover p-6">
                <h3 className="font-bold text-g800 text-lg mb-2">{device.name}</h3>
                <p className="text-sm text-orange font-semibold mb-3">{device.best}</p>
                <div className="grid sm:grid-cols-3 gap-3 mb-3">
                  <div className="bg-blue-light rounded-lg p-3 text-center">
                    <p className="text-xs text-g500">重さ</p>
                    <p className="font-bold text-g800">{device.weight}</p>
                  </div>
                  <div className="bg-blue-light rounded-lg p-3 text-center">
                    <p className="text-xs text-g500">バッテリー</p>
                    <p className="font-bold text-g800">{device.battery}</p>
                  </div>
                  <div className="bg-blue-light rounded-lg p-3 text-center">
                    <p className="text-xs text-g500">月額料金</p>
                    <p className="font-bold text-g800">{device.monthly}</p>
                  </div>
                </div>
                <ul className="space-y-1">
                  {device.features.map((f) => (
                    <li key={f} className="text-sm text-g600 flex items-center gap-2">
                      <span className="text-blue">●</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="section-title">幼稚園・保育園の持ち込みルール</h2>
          <p className="text-g600 mb-4">
            幼稚園・保育園でのGPS端末の持ち込みルールは園によって異なります。以下は一般的な傾向です。持ち込みを検討する際は、必ず事前に園に確認しましょう。
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">ルール種別</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">内容</th>
                  <th className="py-3 px-3 text-right font-bold text-g800">割合（目安）</th>
                </tr>
              </thead>
              <tbody>
                {schoolRules.map((r) => (
                  <tr key={r.type} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{r.type}</td>
                    <td className="py-3 px-3 text-g600">{r.desc}</td>
                    <td className="py-3 px-3 text-right text-g600">{r.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-orange-light rounded-xl p-5 mb-8">
            <h3 className="font-bold text-g800 mb-2">持ち込み許可を得るコツ</h3>
            <ul className="space-y-1 text-sm text-g600">
              <li>● 音が鳴らない・操作不要であることを説明する</li>
              <li>● 園の活動を妨げないことを伝える</li>
              <li>● 送迎バスの安全確認が目的であることを明確にする</li>
              <li>● 他の保護者も利用している事例を紹介する</li>
            </ul>
          </div>

          <h2 className="section-title">GPSの取り付け方法</h2>
          <p className="text-g600 mb-4">
            幼児にGPSを持たせる方法はいくつかあります。お子さまの年齢や園のルールに合わせて最適な方法を選びましょう。
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">取り付け場所</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">方法</th>
                  <th className="py-3 px-3 text-center font-bold text-g800">おすすめ度</th>
                </tr>
              </thead>
              <tbody>
                {attachMethods.map((m) => (
                  <tr key={m.location} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700 whitespace-nowrap">{m.location}</td>
                    <td className="py-3 px-3 text-g600">{m.method}</td>
                    <td className="py-3 px-3 text-center text-g600">{m.recommended}</td>
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

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">幼児の安全を守るGPS選びを始めよう</h2>
            <p className="text-g600 mb-6 text-sm">お子さまの年齢・活動に合った最適なGPS端末を見つけましょう。</p>
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
