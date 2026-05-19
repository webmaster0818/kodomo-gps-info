import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供用GPSのサイズ・重さ比較｜全機種一覧',
  description:
    '子供用GPS端末の全主要機種のサイズ（mm）・重さ（g）を一覧比較。500円玉や名刺との実寸大イメージ、ランドセルのポケットに入るか、重さが気にならない目安（50g以下）まで詳しく解説。',
  keywords: ['子供GPS', 'サイズ', '重さ', '比較', '大きさ', '軽量', 'コンパクト'],
  openGraph: {
    title: '子供用GPSのサイズ・重さ比較｜全機種一覧',
    description: '子供用GPS端末の全主要機種のサイズ・重さを一覧比較。ランドセルに入るか、重さの目安も解説。',
  },
};

const faqData = [
  { q: '子供が気にならないGPSの重さの目安は？', a: '50g以下であれば、ほとんどのお子さまが重さを気にしません。特に30g以下の超軽量モデル（みてねみまもりGPS: 約26g）は、ランドセルに入れていることすら忘れるほどです。逆に100gを超えるとポケットに入れた場合に違和感を覚えるお子さまもいます。' },
  { q: 'ランドセルのどこに入れるのがベスト？', a: 'ランドセルの前ポケット（チャック付きの小ポケット）が最も一般的です。サイズが合えばランドセルのサイドポケットも便利です。ランドセルの底に入れる方法もありますが、GPS信号が遮られる可能性があるため、できるだけ上部に入れることをおすすめします。' },
  { q: '腕時計型GPSのサイズ感はどうですか？', a: 'myFirst Fone R2は画面サイズ1.3インチ、重さ約58gです。大人の腕時計と比べると小さめですが、子供の手首には少し大きく感じるかもしれません。小学校低学年ではバンドの調整が必要です。腕時計型は学校によっては持ち込み禁止の場合があるため事前確認を。' },
  { q: '一番小さいGPS端末はどれですか？', a: '2026年5月時点で最も小型なのは「みてねみまもりGPS 第3世代」（約45×45×15mm、約26g）です。500円玉2枚分程度のサイズで、名札ケースにも入るコンパクトさが特徴です。次いで「まもサーチ」（約47×47×15mm、約36g）も小型モデルです。' },
  { q: 'GPS端末の厚みは気になりますか？', a: 'ほとんどの機種が13〜20mm程度の厚みです。ランドセルのポケットやカバンに入れる場合は気になりませんが、ズボンのポケットに入れる場合は15mm以下の薄型モデルが快適です。' },
  { q: 'サイズが大きい端末のメリットはありますか？', a: 'サイズが大きい端末は、一般的にバッテリー容量が大きく、バッテリー持ちが良い傾向があります。また、ディスプレイ付きモデル（腕時計型）は操作性が高く、トーク機能やSOS機能を直感的に使えるメリットがあります。' },
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

const sizeData = [
  { name: 'みてねみまもりGPS 第3世代', width: 45, height: 45, depth: 15, weight: 26, type: 'ポケット型', battery: '約2週間', sizeImage: '500円玉約2枚分' },
  { name: 'まもサーチ', width: 47, height: 47, depth: 15, weight: 36, type: 'ポケット型', battery: '約1週間', sizeImage: '500円玉約2.5枚分' },
  { name: 'あんしんウォッチャー', width: 50, height: 50, depth: 19, weight: 53, type: 'ポケット型', battery: '約1.5ヶ月', sizeImage: '消しゴム程度' },
  { name: 'BoTトーク', width: 50, height: 50, depth: 21, weight: 46, type: 'ポケット型', battery: '約1週間', sizeImage: '消しゴム程度' },
  { name: 'どこかなGPS2', width: 47, height: 47, depth: 16, weight: 34, type: 'ポケット型', battery: '約1.5週間', sizeImage: '500円玉約2.5枚分' },
  { name: 'soranome', width: 51, height: 51, depth: 15, weight: 39, type: 'ポケット型', battery: '約1週間', sizeImage: '消しゴム程度' },
  { name: 'coneco', width: 51, height: 51, depth: 20, weight: 44, type: 'ポケット型', battery: '約1週間', sizeImage: '消しゴム程度' },
  { name: 'みもり', width: 54, height: 54, depth: 20, weight: 55, type: 'ポケット型', battery: '約1週間', sizeImage: '名刺の半分程度' },
  { name: 'myFirst Fone R2', width: 43, height: 43, depth: 16, weight: 58, type: '腕時計型', battery: '約2日', sizeImage: '子供用腕時計サイズ' },
  { name: 'Hamic POCKET L', width: 58, height: 118, depth: 12, weight: 117, type: 'スマホ型', battery: '約2日', sizeImage: '小型スマホサイズ' },
];

const sizeReferences = [
  { item: '500円玉', size: '直径26.5mm / 約7g', note: 'GPS端末の重さは500円玉3〜8枚分程度' },
  { item: '名刺', size: '91×55mm / 約4g', note: 'ほとんどのポケット型GPSは名刺より小さい' },
  { item: '消しゴム（MONO）', size: '43×17×11mm / 約15g', note: 'ポケット型GPSは消しゴム2個分くらい' },
  { item: '単三電池', size: '直径14.5mm×50.5mm / 約23g', note: '軽量GPSは単三電池1本とほぼ同じ重さ' },
  { item: 'ランドセル前ポケット', size: '約120×80mm（一般的なサイズ）', note: '全てのポケット型GPSが余裕で入るサイズ' },
];

const weightCategories = [
  { category: '超軽量（30g以下）', models: ['みてねみまもりGPS（26g）'], merit: '存在感ゼロ。幼児や低学年に最適。', demerit: 'バッテリー容量が少なめの傾向。' },
  { category: '軽量（30〜50g）', models: ['どこかなGPS2（34g）', 'まもサーチ（36g）', 'soranome（39g）', 'coneco（44g）', 'BoTトーク（46g）'], merit: 'バッテリーと軽さのバランスが良い。最も選択肢が多い。', demerit: '特になし。最もバランスの良いゾーン。' },
  { category: '標準（50〜60g）', models: ['あんしんウォッチャー（53g）', 'みもり（55g）', 'myFirst Fone R2（58g）'], merit: 'バッテリー大容量。多機能モデルが多い。', demerit: 'ポケットに入れると少し重さを感じる場合がある。' },
  { category: '重め（100g以上）', models: ['Hamic POCKET L（117g）'], merit: 'スマホ型で画面付き。多機能。', demerit: 'ランドセル推奨。ポケットには不向き。' },
];

const fitCheck = [
  { location: 'ランドセル前ポケット', fit: '全機種OK', detail: '一般的なランドセルの前ポケット（約120×80mm）なら、全てのポケット型GPS端末が収納できます。' },
  { location: 'ランドセルサイドポケット', fit: 'ほぼ全機種OK', detail: 'ペットボトルが入るサイドポケットなら問題なし。ただし浅いポケットの場合は落下注意。' },
  { location: 'ズボンのポケット', fit: '50g以下推奨', detail: '薄型・軽量モデルならズボンポケットでも快適。50gを超えると走った時に気になる場合あり。' },
  { location: '名札ケース（IDカードホルダー）', fit: '40g以下・薄型のみ', detail: 'みてねみまもりGPS、どこかなGPS2など超薄型モデルなら入る場合あり。ケースのサイズ要確認。' },
  { location: '上着の内ポケット', fit: '全機種OK', detail: '冬場のアウターの内ポケットなら全機種収納可能。ただし上着を脱いだ時に忘れるリスクあり。' },
];

export default function SizeWeightPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: '比較', href: '/' }, { name: 'サイズ・重さ比較' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">サイズ比較</span>
            <span className="tag-pill bg-blue text-white">全機種一覧</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供用GPSのサイズ・重さ比較
          </h1>
          <p className="text-g600 text-lg">全機種一覧｜ランドセルに入る？重さの目安は？</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-g600 mb-8">
            子供用GPS端末を選ぶ際、サイズや重さは重要な判断基準です。特に低学年のお子さまは、少しの重さの違いでも気になることがあります。このページでは、全主要機種のサイズ（mm）・重さ（g）を一覧表で比較し、500円玉や名刺との実寸イメージ、ランドセルのどこに入るか、重さが気にならない目安まで詳しく解説します。
          </p>

          <h2 className="section-title">全機種サイズ・重さ比較表</h2>
          <p className="text-sm text-g500 mb-3">※ 2026年5月時点の公式仕様に基づく。重さの軽い順にソート。</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-2 text-left font-bold text-g800">機種名</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">タイプ</th>
                  <th className="py-3 px-2 text-right font-bold text-g800">幅(mm)</th>
                  <th className="py-3 px-2 text-right font-bold text-g800">高さ(mm)</th>
                  <th className="py-3 px-2 text-right font-bold text-g800">厚み(mm)</th>
                  <th className="py-3 px-2 text-right font-bold text-g800">重さ(g)</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">バッテリー</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">サイズ感</th>
                </tr>
              </thead>
              <tbody>
                {sizeData.map((d) => (
                  <tr key={d.name} className="border-b border-g100">
                    <td className="py-3 px-2 font-semibold text-g700">{d.name}</td>
                    <td className="py-3 px-2 text-center text-g600">{d.type}</td>
                    <td className="py-3 px-2 text-right text-g600">{d.width}</td>
                    <td className="py-3 px-2 text-right text-g600">{d.height}</td>
                    <td className="py-3 px-2 text-right text-g600">{d.depth}</td>
                    <td className="py-3 px-2 text-right font-bold text-g800">{d.weight}g</td>
                    <td className="py-3 px-2 text-center text-g600">{d.battery}</td>
                    <td className="py-3 px-2 text-center text-g600">{d.sizeImage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">実寸大イメージ（身近なものとの比較）</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">比較対象</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">サイズ</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">GPS端末との比較</th>
                </tr>
              </thead>
              <tbody>
                {sizeReferences.map((r) => (
                  <tr key={r.item} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{r.item}</td>
                    <td className="py-3 px-3 text-g600">{r.size}</td>
                    <td className="py-3 px-3 text-g600">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">重さ別カテゴリ</h2>
          <div className="space-y-4 mb-8">
            {weightCategories.map((wc) => (
              <div key={wc.category} className="card-hover p-5">
                <h3 className="font-bold text-g800 text-lg mb-2">{wc.category}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {wc.models.map((m) => (
                    <span key={m} className="tag-pill bg-blue-light text-g700 text-xs">{m}</span>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-blue-light rounded-lg p-3">
                    <p className="text-xs text-g500 mb-1">メリット</p>
                    <p className="text-sm text-g600">{wc.merit}</p>
                  </div>
                  <div className="bg-orange-light rounded-lg p-3">
                    <p className="text-xs text-g500 mb-1">デメリット</p>
                    <p className="text-sm text-g600">{wc.demerit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">ランドセル・ポケットに入るか？収納チェック</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">収納場所</th>
                  <th className="py-3 px-3 text-center font-bold text-g800">対応</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">詳細</th>
                </tr>
              </thead>
              <tbody>
                {fitCheck.map((f) => (
                  <tr key={f.location} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700 whitespace-nowrap">{f.location}</td>
                    <td className="py-3 px-3 text-center text-g600">{f.fit}</td>
                    <td className="py-3 px-3 text-g600">{f.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">サイズ・重さで選ぶポイント</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: '🪶', title: '幼児〜低学年は軽さ最優先', desc: '体が小さい幼児や低学年は、30g以下の超軽量モデルがおすすめ。「持っていることを忘れる」くらいが理想です。' },
              { icon: '🔋', title: '軽さとバッテリーはトレードオフ', desc: '軽い端末ほどバッテリー容量は小さい傾向があります。充電頻度を減らしたいなら50g前後のバランス型を。' },
              { icon: '📏', title: '厚みは15mm以下が目安', desc: 'ポケットに入れる場合は厚み15mm以下がスマート。ランドセルに入れるだけなら20mmでも問題なし。' },
              { icon: '⌚', title: '腕時計型は学校ルールを確認', desc: '腕時計型はサイズ以前に、学校への持ち込みルールを確認しましょう。禁止されている場合はポケット型を選択。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5 flex gap-4 items-start">
                <p className="text-2xl">{item.icon}</p>
                <div>
                  <h3 className="font-bold text-g800">{item.title}</h3>
                  <p className="text-sm text-g600">{item.desc}</p>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">サイズ・重さで最適なGPSを選ぼう</h2>
            <p className="text-g600 mb-6 text-sm">お子さまの年齢や使い方に合ったサイズの端末を見つけましょう。</p>
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
