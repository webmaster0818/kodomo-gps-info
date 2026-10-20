import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPSの精度比較【2026年】屋外は横並び・差が出るのは地下/屋内',
  description:
    '子供GPS端末の精度を機種別に比較します。GPS・GLONASS・みちびき・Wi-Fi・基地局による測位の仕組みから、更新間隔・屋内精度まで解説します。',
};

const faqData = [
  { q: 'GPSの精度はどのくらいですか？', a: '屋外でGPS・みちびき・Wi-Fiの複合測位を使う場合、誤差は10m〜30m程度です。都市部のビル街では誤差が100m以上になることもあります。' },
  { q: 'みちびきに対応していると、精度は上がりますか？', a: 'はい。みちびきは日本上空に特化した準天頂衛星のため、ビル街や山間部でもGPS単体より精度が向上します。対応機種を選ぶことをおすすめします。' },
  { q: 'Wi-Fi測位とは何ですか？', a: '周囲のWi-Fiアクセスポイントの位置情報を利用して現在地を推定する仕組みです。屋内やビル街など衛星電波が届きにくい場所での精度向上に役立ちます。' },
  { q: '更新間隔は、どのくらいに設定するのがよいですか？', a: '通学時の見守りなら1.5分〜3分間隔が一般的です。更新間隔を短くすると精度は上がりますが、バッテリー消費が増えます。' },
  { q: '屋内での精度はどうなりますか？', a: '屋内ではGPS衛星の電波が届きにくく、精度が大きく低下します。Wi-Fi測位に対応した機種であれば、屋内でもある程度の精度を維持できます。' },
  { q: '精度が最も高い機種はどれですか？', a: '複数の測位衛星（GNSS）に Wi-Fi・携帯基地局を組み合わせる機種（みてねみまもりGPS、BoTトーク等）は、屋内や建物の多い場所でも位置を補いやすい構成です。対応する衛星は機種ごとに異なります（下表・各社公式・2026年10月20日確認）。実際の精度は環境によって変わるため、目安としてお考えください。' },
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

const positioningSystems = [
  { icon: '🛰️', name: 'GPS（米国）', desc: '世界で最も普及している衛星測位システムです。約30基の衛星を使用し、精度は屋外で約10mです。' },
  { icon: '🛰️', name: 'GLONASS（ロシア）', desc: 'ロシアの衛星測位システムです。GPSと併用することで、測位の精度と速度が向上します。' },
  { icon: '🇯🇵', name: 'みちびき（日本）', desc: '日本の準天頂衛星です。日本上空にほぼ常に1基以上が位置し、都市部・山間部での精度向上に寄与します。' },
  { icon: '📶', name: 'Wi-Fi測位', desc: '周囲のWi-Fiスポットを利用した測位です。屋内やビル街での精度の補完に有効です。' },
  { icon: '📡', name: '基地局測位', desc: '携帯電話の基地局を利用した測位です。精度は低い（100m〜1km）ものの、他の測位が使えない場合の補完として機能します。' },
];

const accuracyData = [
  { name: 'みてねみまもりGPS', systems: 'GPS+みちびき+BeiDou+Galileo+GLONASS+Wi-Fi+基地局', interval: '1.5分〜', indoor: '良好' },
  { name: 'BoTトーク', systems: 'GPS+みちびき+BeiDou+Galileo+SBAS+Wi-Fi+基地局', interval: '1.5分〜', indoor: '良好' },
  { name: 'あんしんウォッチャー', systems: 'GPS+Wi-Fi+基地局', interval: '1.5分〜', indoor: '普通' },
  { name: 'ソラノメ（販売終了）', systems: 'GPS+GLONASS+みちびき+Wi-Fi', interval: '1.5分〜', indoor: '良好' },
  { name: 'みもり', systems: 'GPS+GLONASS+Wi-Fi', interval: '2分〜', indoor: '良好' },
  { name: 'まもサーチ', systems: 'GPS+Wi-Fi+基地局', interval: '2分〜', indoor: '普通' },
  { name: 'コネコ', systems: 'GPS+GLONASS+みちびき+Wi-Fi', interval: '3分〜', indoor: '良好' },
  { name: 'ハミック', systems: 'GPS+Wi-Fi', interval: '3分〜', indoor: '普通' },
  { name: 'myFirst Fone', systems: 'GPS+GLONASS+Wi-Fi', interval: '1分〜', indoor: '良好' },
  { name: 'ハロここ', systems: 'GPS+Wi-Fi+基地局', interval: '3分〜', indoor: '普通' },
  { name: 'さゆう', systems: 'GPS+GLONASS+Wi-Fi', interval: '2分〜', indoor: '普通' },
];

export default function AccuracyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPSの精度比較", "datePublished": "2026-03-15", "dateModified": "2026-06-14", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '比較', href: '/compare/' }, { name: '精度比較' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">精度比較</span>
            <span className="tag-pill bg-orange text-white">測位技術解説</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPSの精度比較
          </h1>
          <p className="text-g600 text-lg">測位技術の仕組みと、機種別の精度を比較します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">GPS精度の仕組み</h2>
          <p className="text-g600 mb-6">
            子供GPS端末は複数の測位技術を組み合わせて現在地を特定します。対応する測位方式が多いほど、精度が高くなる傾向にあります。
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {positioningSystems.map((s) => (
              <div key={s.name} className="card-hover p-4">
                <p className="text-2xl mb-2">{s.icon}</p>
                <h3 className="font-bold text-g800 text-sm mb-1">{s.name}</h3>
                <p className="text-sm text-g600">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">機種別精度比較</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">機種名</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">測位方式</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">更新間隔</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">屋内精度</th>
                </tr>
              </thead>
              <tbody>
                {accuracyData.map((d) => (
                  <tr key={d.name} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{d.name}</td>
                    <td className="py-3 px-3 text-g600">{d.systems}</td>
                    <td className="py-3 px-3 text-g600">{d.interval}</td>
                    <td className="py-3 px-3 text-g600">{d.indoor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">精度の差が出るのは「地下・屋内」</h2>
          <div className="card-hover p-5 mb-8">
            <p className="text-sm text-g700 leading-relaxed mb-3">
              実機検証を行う複数の比較メディアの共通見解として、<strong>屋外(徒歩・乗り物移動)ではどの主要機種も道沿いに精度よく測位でき、メーカー間の差はほとんど出ません</strong>。現在の主流機は衛星5種前後(GPS・みちびき・GLONASS・Galileo・BeiDou)を受信するためです。
            </p>
            <p className="text-sm text-g700 leading-relaxed mb-3">
              差が出るのは<strong>地下・屋内・コンクリート建物内</strong>です。衛星電波が届かずWi-Fi測位や基地局測位に切り替わるため、誤差が大きくなったり表示が途切れたりします。地下での測位性能が実用上の差となり、検証では、au回線の基地局密度を活かすあんしんウォッチャーが地下でも実際のルートをほぼ捕捉したと報告されています。
            </p>
            <p className="text-sm text-g700 leading-relaxed">
              <strong>対策: 自宅・学校・塾などのWi-Fiを端末に登録しておく</strong>と、屋内・地下での位置補正が働き、精度が安定します。位置のずれを感じた場合は、まずWi-Fiの登録状況をご確認ください。
            </p>
            <p className="text-xs text-g400 mt-3">出典: こどもみまもりコンシェルジュ等の実機精度検証(2026年6月14日確認)。各社は精度の数値(○m)を公式には公表していないため、「屋外では差が小さく、地下で差が出る」という傾向としてご覧ください。</p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">精度と料金をあわせた比較</h2>
            <p className="text-g600 mb-6 text-sm">精度だけでなく、月額料金やバッテリーも考慮してお選びいただくことをおすすめします。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">総合ランキング</Link>
              <Link href="/compare/price/" className="btn-accent">月額料金比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
