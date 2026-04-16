import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'GPS精度の仕組み | 誤差が出る原因と精度を上げるコツ',
  description:
    'GPS測位の仕組みをわかりやすく解説。誤差が出る原因5つ（ビル・天候・屋内・トンネル・電池）と精度を上げるコツを紹介。子供GPSの精度について理解が深まります。',
};

const faqData = [
  { q: 'GPSの誤差はどれくらいありますか？', a: '屋外の開けた場所では10m〜30m程度、ビル街では50m〜100m、屋内やトンネルでは数百m以上の誤差が出ることがあります。' },
  { q: 'みちびき対応だと精度は改善する？', a: 'はい、特に日本国内では効果的です。みちびきは日本上空に特化した衛星で、ビル街や山間部でGPSだけでは受信困難な場所でも精度を補完します。' },
  { q: 'Wi-Fi測位と衛星測位はどう違う？', a: '衛星測位はGPS等の人工衛星から電波を受信、Wi-Fi測位は周囲のWi-Fiスポットを利用します。Wi-Fi測位は屋内で有効ですが、Wi-Fiスポットが少ない場所では精度が落ちます。' },
  { q: '天気が悪いと精度は落ちますか？', a: '通常の雨や曇りでは大きな影響はありません。ただし、豪雨や大雪の場合は電波の減衰が起きて精度がやや低下することがあります。' },
  { q: 'バッテリー残量が少ないと精度が落ちる？', a: '極端にバッテリーが少ない場合、省電力モードに切り替わり更新間隔が長くなることがあります。バッテリーは20%以上を維持するのがおすすめです。' },
  { q: '精度を最大化するにはどうすれば？', a: 'GPS+GLONASS+みちびき+Wi-Fi対応機種を選び、更新間隔を1.5〜3分に設定し、ファームウェアを最新に保つことで精度を最大化できます。' },
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

export default function AccuracyKnowledgePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: 'GPS精度の仕組み' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">GPS精度</span>
            <span className="tag-pill bg-orange text-white">仕組み解説</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            GPS精度の仕組みと誤差の原因
          </h1>
          <p className="text-g600 text-lg">測位の仕組みと精度を上げるコツをわかりやすく解説</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">GPS測位の仕組み</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">
              GPS（Global Positioning System）は、地球上空約20,000kmを周回する約30基の人工衛星から発信される電波を受信し、
              受信時刻の差から現在位置を計算する仕組みです。最低4基の衛星から電波を受信できれば位置を特定できます。
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-blue-light rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-blue">4基以上</p>
                <p className="text-sm text-g600">必要な衛星数</p>
              </div>
              <div className="bg-orange-light rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-orange">約20,000km</p>
                <p className="text-sm text-g600">衛星の高度</p>
              </div>
              <div className="bg-green-light rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-green-dark">10〜30m</p>
                <p className="text-sm text-g600">標準的な精度</p>
              </div>
            </div>
          </div>

          <h2 className="section-title">誤差が出る原因5つ</h2>
          <div className="space-y-4 mb-8">
            {[
              { icon: '🏢', title: 'ビル・建物の影響（マルチパス）', desc: 'ビル街では衛星電波が建物に反射して、端末に到達する経路が複数になります（マルチパス）。これにより誤差が50m〜100m以上になることがあります。' },
              { icon: '🌧️', title: '天候の影響', desc: '豪雨や大雪では電波が減衰し、精度が低下します。通常の雨や曇りではほぼ影響ありません。' },
              { icon: '🏠', title: '屋内での精度低下', desc: '建物の壁や屋根がGPS電波を遮断するため、屋内では衛星測位が困難になります。Wi-Fi測位で補完する機種を選ぶと改善できます。' },
              { icon: '🚇', title: 'トンネル・地下', desc: 'トンネルや地下では衛星電波が完全に遮断されます。最後に測位できた位置が表示されるか、基地局測位で大まかな位置のみ表示されます。' },
              { icon: '🔋', title: 'バッテリー残量', desc: 'バッテリーが極端に少なくなると省電力モードに移行し、更新間隔が自動で長くなる機種があります。リアルタイム性が低下する原因になります。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.icon} {item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">精度を上げるコツ</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">機種選びのコツ</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・GPS+GLONASS+みちびき+Wi-Fi対応機種を選ぶ</li>
                <li>・更新間隔が1.5分〜に対応した機種を選ぶ</li>
                <li>・Wi-Fi測位対応で屋内精度をカバー</li>
              </ul>
            </div>
            <div className="bg-blue-light rounded-xl p-6">
              <h3 className="font-bold text-blue mb-3">使い方のコツ</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・更新間隔は1.5〜3分に設定</li>
                <li>・ファームウェアは常に最新に更新</li>
                <li>・バッテリーは20%以上を維持</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">高精度なGPS端末を見つけよう</h2>
            <p className="text-g600 mb-6 text-sm">精度の高い機種を選んで、正確な見守りを実現しましょう。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/accuracy/" className="btn-primary">精度比較ページ</Link>
              <Link href="/" className="btn-accent">おすすめランキング</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
