import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS 精度比較 | 機種別の測位精度・更新間隔を徹底比較',
  description:
    '子供GPS端末の精度を機種別に徹底比較。GPS・GLONASS・みちびき・Wi-Fi・基地局の仕組み解説から、更新間隔・屋内精度まで詳しく解説します。',
};

const faqData = [
  { q: 'GPSの精度はどれくらい？', a: '屋外でGPS+みちびき+Wi-Fiの複合測位を使えば、誤差10m〜30m程度です。都市部のビル街では誤差が100m以上になることもあります。' },
  { q: 'みちびき対応だと精度が上がる？', a: 'はい。みちびきは日本上空に特化した準天頂衛星なので、ビル街や山間部でもGPS単体より精度が向上します。対応機種を選ぶのがおすすめです。' },
  { q: 'Wi-Fi測位とは？', a: '周囲のWi-Fiアクセスポイントの位置情報を利用して現在地を推定する仕組みです。屋内やビル街など衛星電波が届きにくい場所での精度向上に役立ちます。' },
  { q: '更新間隔はどれくらいがいい？', a: '通学時の見守りなら1.5分〜3分間隔が一般的です。更新間隔を短くすると精度は上がりますが、バッテリー消費が増えます。' },
  { q: '屋内での精度はどうなりますか？', a: '屋内ではGPS衛星の電波が届きにくく、精度が大きく低下します。Wi-Fi測位に対応した機種なら、屋内でもある程度の精度を維持できます。' },
  { q: '精度が最も高い機種はどれ？', a: 'GPS+GLONASS+みちびき+Wi-Fiの4つに対応した機種（みてねみまもりGPS、BoTトーク等）が最も精度が高い傾向にあります。' },
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
  { icon: '🛰️', name: 'GPS（米国）', desc: '世界で最も普及した衛星測位システム。約30基の衛星を使用。精度は屋外で約10m。' },
  { icon: '🛰️', name: 'GLONASS（ロシア）', desc: 'ロシアの衛星測位システム。GPSと併用することで測位精度と速度が向上。' },
  { icon: '🇯🇵', name: 'みちびき（日本）', desc: '日本の準天頂衛星。日本上空にほぼ常に1基以上が位置し、都市部・山間部で精度向上。' },
  { icon: '📶', name: 'Wi-Fi測位', desc: '周囲のWi-Fiスポットを利用した測位。屋内やビル街での精度補完に有効。' },
  { icon: '📡', name: '基地局測位', desc: '携帯電話の基地局を利用。精度は低い（100m〜1km）が、他の測位が使えない場合の補完。' },
];

const accuracyData = [
  { name: 'みてねみまもりGPS', systems: 'GPS+GLONASS+みちびき+Wi-Fi', interval: '1.5分〜', indoor: '良好' },
  { name: 'BoTトーク', systems: 'GPS+GLONASS+みちびき+Wi-Fi', interval: '1.5分〜', indoor: '良好' },
  { name: 'あんしんウォッチャー', systems: 'GPS+Wi-Fi+基地局', interval: '1.5分〜', indoor: '普通' },
  { name: 'ソラノメ', systems: 'GPS+GLONASS+みちびき+Wi-Fi', interval: '1.5分〜', indoor: '良好' },
  { name: 'どこかなGPS2', systems: 'GPS+GLONASS+みちびき+Wi-Fi', interval: '3分〜', indoor: '良好' },
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
      <Breadcrumb items={[{ name: '比較', href: '/' }, { name: '精度比較' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">精度比較</span>
            <span className="tag-pill bg-orange text-white">測位技術解説</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS 精度比較
          </h1>
          <p className="text-g600 text-lg">測位技術の仕組みと機種別精度を徹底比較</p>
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

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">精度も料金も比較して選ぼう</h2>
            <p className="text-g600 mb-6 text-sm">精度だけでなく、月額料金やバッテリーも考慮して最適な1台を。</p>
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
