import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'GPS精度の仕組み | 雨・曇りの影響は？誤差の原因と精度を上げるコツ',
  description:
    '雨や曇りはGPSの精度にほとんど影響しません（影響が出るのは豪雨・大雪の場合のみです）。GPS測位の仕組み、誤差が生じる5つの原因（ビル・天候・屋内・トンネル・電池）と、精度を高めるためのポイントを解説します。',
};

const faqData = [
  { q: 'GPSの誤差はどれくらいありますか？', a: '屋外の開けた場所では10m〜30m程度、ビル街では50m〜100m、屋内やトンネルでは数百m以上の誤差が生じることがあります。' },
  { q: 'みちびきに対応していると精度は改善しますか？', a: 'はい。特に日本国内では効果的です。みちびきは日本上空に特化した衛星で、ビル街や山間部など、GPSのみでは受信が困難な場所でも精度を補完します。' },
  { q: 'Wi-Fi測位と衛星測位はどう違いますか？', a: '衛星測位はGPS等の人工衛星から電波を受信する方式で、Wi-Fi測位は周囲のWi-Fiスポットを利用する方式です。Wi-Fi測位は屋内で有効ですが、Wi-Fiスポットが少ない場所では精度が低下します。' },
  { q: '天気が悪いと精度は落ちますか？', a: '通常の雨や曇りでは、大きな影響はありません。ただし、豪雨や大雪の場合は電波が減衰し、精度がやや低下することがあります。' },
  { q: '雨の日にGPSがずれるのはなぜですか？', a: '雨そのものが原因であることはまれです。GPS衛星の電波は雨や雲をほぼ透過するため、雨の日にずれるように見える場合は、「屋内や車内に入った」「建物や高架で衛星が遮られた」ことが主な原因です。電波の減衰による精度の低下は、豪雨・大雪といった悪天候の場合にのみ生じることがあります。' },
  { q: '曇りの日はGPSに影響がありますか？', a: 'ほとんど影響はありません。GPS衛星の電波は雲を透過するため、曇天が原因で位置がずれることは基本的にありません。誤差の主な原因は天候ではなく、建物内・地下・高層ビル街・高架下などにおける電波の遮蔽・反射です。' },
  { q: 'バッテリー残量が少ないと精度は低下しますか？', a: 'バッテリー残量が極端に少ない場合、省電力モードに切り替わり、更新間隔が長くなることがあります。バッテリーは20%以上を維持することをおすすめします。' },
  { q: '精度を最大限に高めるにはどうすればよいですか？', a: 'GPS+GLONASS+みちびき+Wi-Fiに対応した機種を選び、更新間隔を1.5〜3分に設定したうえで、ファームウェアを最新の状態に保つことで、精度を最大限に高めることができます。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "GPS精度の仕組み", "datePublished": "2026-03-15", "dateModified": "2026-08-02", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'GPS精度の仕組み' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">GPS精度</span>
            <span className="tag-pill bg-orange text-white">仕組み解説</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            GPS精度の仕組みと誤差の原因
          </h1>
          <p className="text-g600 text-lg">測位の仕組みと、精度を高めるためのポイントを解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border-l-4 border-blue bg-blue-light p-6 mb-10">
            <p className="font-bold text-g800 mb-2">【要点】天気（雨・曇り）はGPSの精度にほとんど影響しません</p>
            <p className="text-sm text-g700 leading-relaxed">
              GPS衛星の電波は雲を透過するため、<strong>通常の雨や曇りで位置がずれることは基本的にありません</strong>（影響が出るのは、豪雨・大雪など極端な悪天候の場合のみです）。雨の日にずれるように見える場合、原因の大半は「屋内に入った」「建物で衛星が遮られた」ことです。詳しくは<a href="#weather" className="text-blue-600 font-bold underline">天候の影響の解説</a>をご覧ください。
            </p>
          </div>
          <h2 className="section-title">GPS測位の仕組み</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">
              GPS（Global Positioning System）は、地球上空約20,000kmを周回する約30基の人工衛星から発信される電波を受信し、
              受信時刻の差から現在位置を計算する仕組みです。最低4基の衛星から電波を受信できれば、位置を特定できます。
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

          <h2 className="section-title">誤差が生じる5つの原因</h2>
          <div className="space-y-4 mb-8">
            {[
              { icon: '🏢', title: 'ビル・建物の影響（マルチパス）', desc: 'ビル街では衛星の電波が建物に反射し、端末に到達する経路が複数になります（マルチパス）。これにより、誤差が50m〜100m以上になることがあります。' },
              { icon: '🌧️', title: '天候の影響', desc: '豪雨や大雪では電波が減衰し、精度が低下します。通常の雨や曇りでは、ほとんど影響はありません。' },
              { icon: '🏠', title: '屋内での精度低下', desc: '建物の壁や屋根がGPSの電波を遮断するため、屋内では衛星による測位が困難になります。Wi-Fi測位で補完する機種を選ぶことで改善できます。' },
              { icon: '🚇', title: 'トンネル・地下', desc: 'トンネルや地下では、衛星の電波が完全に遮断されます。最後に測位できた位置が表示されるか、基地局測位によるおおよその位置のみが表示されます。' },
              { icon: '🔋', title: 'バッテリー残量', desc: 'バッテリー残量が極端に少なくなると、省電力モードに移行し、更新間隔が自動で長くなる機種があります。リアルタイム性が低下する原因となります。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.icon} {item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">精度を高めるためのポイント</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">機種選びのポイント</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・GPS+GLONASS+みちびき+Wi-Fi対応の機種を選ぶ</li>
                <li>・1.5分以上の更新間隔に対応した機種を選ぶ</li>
                <li>・Wi-Fi測位対応機種で屋内の精度を補う</li>
              </ul>
            </div>
            <div className="bg-blue-light rounded-xl p-6">
              <h3 className="font-bold text-blue mb-3">使い方のポイント</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・更新間隔を1.5〜3分に設定する</li>
                <li>・ファームウェアを常に最新に更新する</li>
                <li>・バッテリー残量を20%以上に維持する</li>
              </ul>
            </div>
          </div>

          <h2 id="weather" className="section-title scroll-mt-20">曇り・雨の日のGPS精度への影響</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 text-sm leading-relaxed mb-3">
              <strong>通常の曇りや雨がGPSの精度に与える影響は、ほとんどありません</strong>。GPS衛星の電波は雲を透過するため、曇天を理由に位置がずれることは基本的にありません。
            </p>
            <p className="text-g600 text-sm leading-relaxed mb-3">
              例外は<strong>豪雨・大雪など極端な悪天候</strong>の場合で、電波の減衰により精度がやや低下することがあります。ただし、日常の見守り用途では、天候よりも<strong>建物の中・地下・高層ビル街・高架下</strong>における「電波の遮蔽・反射」のほうが、はるかに大きな誤差要因となります。
            </p>
            <p className="text-g600 text-sm leading-relaxed">
              雨の日に位置が大きくずれるように見える場合、その多くは天候そのものではなく、「屋内に入った」「傘や建物で衛星の電波が届きにくい場所を通った」ことが原因です。誤差が気になる場合は、上記の「誤差が生じる5つの原因」と「精度を高めるためのポイント」をご確認ください。
            </p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">高精度なGPS端末の比較</h2>
            <p className="text-g600 mb-6 text-sm">正確な見守りを重視する場合は、精度の高い機種をおすすめします。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/accuracy/" className="btn-primary">精度比較ページ</Link>
              <Link href="/" className="btn-accent">おすすめランキング</Link>
            </div>
            <p className="mt-4 text-sm">
              <Link href="/review/imadoco-search/" className="underline text-g600">イマドコサーチの精度・評判レビュー</Link>
              <span className="mx-2 text-g400">|</span>
              <Link href="/review/anshin-watcher/" className="underline text-g600">あんしんウォッチャーの評判・寿命レビュー</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
