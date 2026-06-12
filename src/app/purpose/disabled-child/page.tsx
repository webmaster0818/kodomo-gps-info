import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '障害のあるお子さまのGPS見守り｜特性に合わせた選び方',
  description:
    '知的障害・発達障害・身体障害のあるお子さま向けGPS見守り端末の選び方を詳しく解説。SOSボタン・防水・耐衝撃の重要性、自治体の補助金制度、GPS以外の見守り手段との併用方法、実際の活用事例まで網羅。',
  keywords: ['障害児', '見守り', 'GPS', '知的障害', '発達障害', '身体障害', '補助金'],
  openGraph: {
    title: '障害のあるお子さまのGPS見守り｜特性に合わせた選び方',
    description: '障害のあるお子さま向けGPS見守り端末の選び方を、知的障害・発達障害・身体障害別に詳しく解説。',
  },
};

const faqData = [
  { q: '障害のある子どもにGPSは必要ですか？', a: '障害の特性によっては、一般的なお子さまよりも迷子や事故のリスクが高くなります。特に知的障害や自閉スペクトラム症のあるお子さまは、興味のあるものに引き寄せられて突然走り出す「飛び出し行動」があるため、GPS見守りは非常に有効な安全対策です。保護者の精神的な安心にもつながります。' },
  { q: 'SOSボタン付きのGPSは必要ですか？', a: 'お子さまがSOSボタンの意味と使い方を理解できる場合は、SOSボタン付きをおすすめします。ただし、知的障害の程度によっては誤操作が頻発する可能性があるため、お子さまの理解度に合わせて判断してください。誤操作が心配な場合は、SOSボタンなしのシンプルな機種が適しています。' },
  { q: '自治体の補助金は誰でも申請できますか？', a: '補助金制度は自治体によって対象者や条件が異なります。一般的には「療育手帳」「身体障害者手帳」「精神障害者保健福祉手帳」を所持していることが条件となります。お住まいの市区町村の障害福祉課に問い合わせると、利用可能な制度を案内してもらえます。' },
  { q: 'GPSを嫌がって外してしまう場合はどうすればいいですか？', a: '感覚過敏のあるお子さまは、端末の重さや触感が気になることがあります。対策としては、(1)最も軽量な機種を選ぶ、(2)衣類の内ポケットや靴に入れる、(3)お気に入りのカバンの内側に固定する、(4)少しずつ慣れさせる（最初は短時間から）などの方法があります。' },
  { q: '特別支援学校にGPSを持ち込めますか？', a: '多くの特別支援学校では、安全上の理由からGPS端末の持ち込みに理解があります。ただし、学校ごとにルールが異なるため、事前に担任の先生やコーディネーターに相談してください。個別の教育支援計画（IEP）にGPS使用を記載してもらうと、スムーズに進む場合があります。' },
  { q: 'GPS以外にも使える見守りツールはありますか？', a: 'GPS以外にも、(1)AirTag等のBluetooth追跡タグ（近距離用）、(2)みまもりカメラ（自宅用）、(3)キッズケータイ（通話機能付き）、(4)スマートウォッチ（心拍数モニタリング付き）、(5)見守りセンサー（ドアの開閉検知）などがあります。お子さまの特性に合わせて複数を併用するのが効果的です。' },
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

const disabilityTypes = [
  {
    type: '知的障害',
    icon: '🧠',
    risks: ['道に迷いやすい', '危険の判断が難しい', '助けを求められない'],
    gpsPoints: ['シンプルな操作（またはボタンなし）', 'ジオフェンス通知が重要', '防水・耐衝撃は必須', 'バッテリー長持ちモデル推奨'],
    recommended: 'みてねみまもりGPS（操作不要・軽量）',
  },
  {
    type: '発達障害（ASD・ADHD等）',
    icon: '🌈',
    risks: ['飛び出し行動', '感覚過敏で端末を嫌がる可能性', '興味に集中して周囲の状況を忘れる'],
    gpsPoints: ['最軽量モデルを選ぶ（感覚過敏対策）', '移動速度アラートが有効', 'ジオフェンスの複数設定', '音・振動が出ない機種'],
    recommended: 'まもサーチ（軽量36g・シンプル設計）',
  },
  {
    type: '身体障害（肢体不自由等）',
    icon: '♿',
    risks: ['車椅子からの転落時', '介助者との連携', '緊急時の自力避難が困難'],
    gpsPoints: ['SOSボタン付き推奨', '車椅子への固定方法を確認', '通話機能付きも検討', '介助者とのアプリ共有'],
    recommended: 'BoTトーク（SOSボタン+トーク機能付き）',
  },
];

const subsidyData = [
  { municipality: '東京都（区により異なる）', target: '療育手帳・身体障害者手帳所持者', amount: '購入費の9割（上限あり）', category: '日常生活用具給付' },
  { municipality: '大阪市', target: '療育手帳A判定', amount: '購入費の一部（上限37,900円）', category: '日常生活用具給付' },
  { municipality: '横浜市', target: '身体障害者手帳1〜3級', amount: '基準額の9割', category: '日常生活用具給付' },
  { municipality: '名古屋市', target: '療育手帳・身体障害者手帳所持者', amount: '購入費の一部', category: '地域生活支援事業' },
  { municipality: 'その他自治体', target: '各自治体の基準による', amount: '各自治体の基準による', category: '障害福祉サービス等' },
];

const combinedTools = [
  { tool: 'GPS見守り端末', purpose: '屋外の位置確認', merit: 'リアルタイム追跡・ジオフェンス', limitation: '屋内の精度が低い場合がある' },
  { tool: 'AirTag等Bluetoothタグ', purpose: '近距離の紛失防止', merit: '安価・バッテリー1年以上', limitation: 'リアルタイム追跡は不可' },
  { tool: 'みまもりカメラ', purpose: '自宅内の見守り', merit: '映像で様子を確認', limitation: '外出時には使えない' },
  { tool: 'キッズケータイ', purpose: '通話・メッセージ', merit: '双方向コミュニケーション', limitation: '操作の理解が必要' },
  { tool: '見守りセンサー', purpose: 'ドア開閉・動体検知', merit: '外出の検知に有効', limitation: '位置情報は取得不可' },
];

const useCases = [
  { title: 'ケース1: 自閉スペクトラム症のAくん（8歳）', desc: '特別支援学級に在籍するAくんは、興味のある電車の音を聞くと、突然走り出してしまう傾向があります。GPS端末をランドセルに入れ、通学路に沿ったジオフェンスを設定。通常ルートから外れた際に即座に通知が届くようにしています。月に1〜2回、ジオフェンスの通知が鳴ることがあり、すぐに対応できています。' },
  { title: 'ケース2: ダウン症のBちゃん（6歳）', desc: '保育園に通うBちゃんは、園外活動中に他の子どもと離れてしまうことがありました。GPS端末をリュック内側に固定し、園の敷地外に出た場合に通知が届く設定に。先生にも位置確認アプリを共有し、園と家庭の双方で見守り体制を構築しています。' },
  { title: 'ケース3: 肢体不自由のCくん（10歳）', desc: '電動車椅子で通学するCくんは、SOSボタン付きのGPS端末を車椅子のアームレストに固定。困った時にボタンを押すと保護者のスマホに通知が届き、現在位置と合わせて状況を把握できるようにしています。月額は少し高いですが、通話機能も活用しています。' },
];

export default function DisabledChildPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "障害のあるお子さまのGPS見守り｜特性に合わせた選び方", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "GPS見守りナビ編集部"}, "publisher": {"@type": "Organization", "name": "GPS子供見守り最新情報"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://gps-kodomo.com/"}, {"@type": "ListItem", "position": 2, "name": "目的別", "item": "https://gps-kodomo.com/purpose/"}, {"@type": "ListItem", "position": 3, "name": "障害のあるお子さまのGPS見守り", "item": "https://gps-kodomo.com/purpose/disabled-child/"}]}) }} />
      <Breadcrumb items={[{ name: '目的別おすすめ', href: '/' }, { name: '障害のあるお子さまのGPS見守り' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">障害児見守り</span>
            <span className="tag-pill bg-blue text-white">特性別ガイド</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            障害のあるお子さまのGPS見守り
          </h1>
          <p className="text-g600 text-lg">特性に合わせた選び方｜補助金制度・活用事例も解説</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-g600 mb-8">
            障害のあるお子さまの安全を守るために、GPS見守り端末は非常に有効なツールです。しかし、お子さまの障害の種類や程度によって、最適な機種や使い方は大きく異なります。このページでは、知的障害・発達障害・身体障害それぞれの特性に合わせたGPSの選び方、自治体の補助金制度、GPS以外の見守り手段との併用方法、実際の活用事例まで詳しく解説します。
          </p>

          <h2 className="section-title">障害の種類別 GPS選びのポイント</h2>
          <div className="space-y-6 mb-8">
            {disabilityTypes.map((d) => (
              <div key={d.type} className="card-hover p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{d.icon}</span>
                  <h3 className="font-bold text-g800 text-lg">{d.type}</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-sm font-semibold text-g700 mb-2">想定されるリスク</p>
                    <ul className="space-y-1">
                      {d.risks.map((r) => (
                        <li key={r} className="text-sm text-g600 flex items-center gap-2">
                          <span className="text-orange">▲</span>{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-g700 mb-2">GPS選びのポイント</p>
                    <ul className="space-y-1">
                      {d.gpsPoints.map((p) => (
                        <li key={p} className="text-sm text-g600 flex items-center gap-2">
                          <span className="text-blue">●</span>{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-light rounded-lg p-3">
                  <p className="text-sm"><span className="font-semibold text-g700">おすすめ機種: </span><span className="text-g600">{d.recommended}</span></p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">SOSボタン・防水・耐衝撃の重要性</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '🆘', title: 'SOSボタン', desc: '緊急時にボタンを押すだけで保護者に通知。お子さまが「困ったらこのボタンを押す」と理解できる場合に有効です。知的障害の程度によっては誤操作のリスクがあるため、オン/オフ設定ができる機種が安心。' },
              { icon: '💧', title: '防水性能', desc: '障害のあるお子さまは、水遊びや飲み物のこぼしが多い場合があります。IPX5以上の防水性能があれば、雨天時や水回りでも安心。特に感覚遊びで水を使うお子さまには必須の機能です。' },
              { icon: '💪', title: '耐衝撃性', desc: '投げたり落としたりする頻度が高いお子さまには、耐衝撃設計の端末が必要です。シリコンカバーの装着や、リュック内部への固定など、物理的な保護策も組み合わせましょう。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <p className="text-2xl mb-2">{item.icon}</p>
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">自治体の補助金・助成制度</h2>
          <p className="text-g600 mb-4">
            GPS見守り端末は「日常生活用具給付」の対象となる場合があります。自治体によって制度の有無や条件が異なるため、お住まいの市区町村の障害福祉課に確認しましょう。以下は主要自治体の参考情報です。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">自治体</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">対象</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">助成額</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">区分</th>
                </tr>
              </thead>
              <tbody>
                {subsidyData.map((s) => (
                  <tr key={s.municipality} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{s.municipality}</td>
                    <td className="py-3 px-3 text-g600">{s.target}</td>
                    <td className="py-3 px-3 text-g600">{s.amount}</td>
                    <td className="py-3 px-3 text-g600">{s.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">※ 制度内容は変更される場合があります。最新情報は各自治体にお問い合わせください。</p>

          <h2 className="section-title">GPS以外の見守り手段との併用</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">ツール</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">用途</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">メリット</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">制約</th>
                </tr>
              </thead>
              <tbody>
                {combinedTools.map((t) => (
                  <tr key={t.tool} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{t.tool}</td>
                    <td className="py-3 px-3 text-g600">{t.purpose}</td>
                    <td className="py-3 px-3 text-g600">{t.merit}</td>
                    <td className="py-3 px-3 text-g600">{t.limitation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">実際の活用事例</h2>
          <div className="space-y-4 mb-8">
            {useCases.map((c) => (
              <div key={c.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-2">{c.title}</h3>
                <p className="text-sm text-g600">{c.desc}</p>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">お子さまの特性に合ったGPSを選びましょう</h2>
            <p className="text-g600 mb-6 text-sm">障害の種類や程度に合わせた最適な見守り方法を見つけてください。</p>
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
