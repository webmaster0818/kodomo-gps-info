import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'GPSは室内でも使える？建物内での精度と対策【解説】',
  description:
    'GPS端末の精度が室内で低下する理由を解説します。Wi-Fiや携帯基地局測位による補助、機種別の室内精度の比較、学校・ショッピングモール内での実用性をご紹介します。',
};

const faqData = [
  { q: 'GPS端末は室内ではまったく使えないのですか？', a: 'GPS衛星の電波は建物内で大幅に弱まりますが、Wi-Fi測位や携帯基地局測位を併用する機種であれば、室内でもおおよその位置を把握できます。精度は屋外より低下しますが、「建物の中にいる」ことは確認できます。' },
  { q: '学校の中でも子供の位置はわかりますか？', a: '校舎内では衛星による測位が困難ですが、多くの機種では携帯基地局測位により、「学校の敷地内にいる」程度の位置を確認できます。ただし、教室単位での特定は現状では困難です。' },
  { q: 'ショッピングモールの中では位置がわかりますか？', a: 'ショッピングモールにはWi-Fiスポットが多いため、Wi-Fi測位に対応した機種であれば、比較的精度が保たれます。フロア（階数）の特定は困難ですが、施設内にいることは確認できます。' },
  { q: 'Wi-Fi測位に対応した機種はどれですか？', a: 'みもりGPSトーク、あんしんウォッチャーなどがWi-Fi測位に対応しています。Wi-Fi対応機種を選ぶことで、室内での精度の低下を軽減できます。' },
  { q: '地下鉄や地下街ではGPSは使えますか？', a: '地下ではGPS衛星の電波が完全に遮断されます。携帯基地局の電波が届く範囲であれば、おおよその位置を取得できますが、精度は数百メートル単位になることがあります。' },
  { q: '室内での精度を改善する方法はありますか？', a: 'Wi-Fi測位に対応した機種を選ぶことが最も効果的です。また、更新間隔を短く設定しておくと、室内から屋外に出た際にすぐ正確な位置を取得できるため実用的です。' },
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

export default function IndoorAccuracyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "GPSは室内でも使える？建物内での精度と対策【解説】", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '室内でのGPS精度' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">室内精度</span>
            <span className="tag-pill bg-orange text-white">解説</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            GPSは室内でも使える？建物内での精度と対策
          </h1>
          <p className="text-g600 text-lg">室内でGPSの精度が低下する理由と、その対策を解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">GPSの仕組みと衛星信号</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">
              GPSは、地球上空約20,000kmを周回する人工衛星から発信される電波を受信して位置を計算します。
              電波は光速で届きますが、コンクリートや鉄筋といった建築素材は電波を大幅に減衰させます。
              そのため、屋外では高精度な測位が可能であっても、建物内に入ると衛星からの信号を十分に受信できなくなります。
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-blue-light rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-blue">10〜30m</p>
                <p className="text-sm text-g600">屋外の精度</p>
              </div>
              <div className="bg-orange-light rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-orange">50〜200m</p>
                <p className="text-sm text-g600">室内の精度（Wi-Fi併用時）</p>
              </div>
              <div className="bg-green-light rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-green-dark">数百m以上</p>
                <p className="text-sm text-g600">地下・トンネル</p>
              </div>
            </div>
          </div>

          <h2 className="section-title">室内で精度が低下する理由</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: '衛星電波の遮断', desc: 'コンクリートの壁、鉄筋、屋根がGPSの電波を遮断します。特に鉄筋コンクリート造（RC造）の建物では、衛星からの電波がほとんど届きません。木造建築では電波が多少透過しますが、精度は大幅に低下します。' },
              { title: 'マルチパス（反射波）の影響', desc: '建物内にわずかに入り込んだ衛星の電波が壁や天井で反射し、複数の経路で端末に到達します。この反射波が測位計算に誤差を生じさせ、実際とは異なる位置が表示される原因となります。' },
              { title: '受信衛星数の不足', desc: '正確な測位には最低4基の衛星を同時に受信する必要がありますが、室内では受信できる衛星数が1〜2基以下に減少します。衛星数が不足すると、測位そのものができなくなります。' },
              { title: '信号強度の低下', desc: '壁を透過した電波は信号強度が大幅に低下し、ノイズに埋もれやすくなります。端末が受信できた場合でも、精度が著しく低い位置情報しか得られないことがあります。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">Wi-Fi・携帯基地局測位の補助</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-light rounded-xl p-6">
              <h3 className="font-bold text-blue mb-3">Wi-Fi測位の仕組み</h3>
              <p className="text-sm text-g600 mb-3">周囲のWi-Fiアクセスポイントの電波強度と位置データベースを照合し、位置を推定します。</p>
              <ul className="space-y-2 text-sm text-g700">
                <li>・精度: 15〜50m程度</li>
                <li>・ショッピングモールや駅で有効</li>
                <li>・Wi-Fiスポットが密集するほど高精度</li>
                <li>・接続不要（電波のスキャンのみ）</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">携帯基地局測位の仕組み</h3>
              <p className="text-sm text-g600 mb-3">接続している携帯電話基地局の位置から、おおよその現在地を推定します。</p>
              <ul className="space-y-2 text-sm text-g700">
                <li>・精度: 100〜1,000m程度</li>
                <li>・ほぼ全ての場所で利用可能</li>
                <li>・GPS・Wi-Fiが使えない場合の補完手段</li>
                <li>・「エリア内にいる」程度の確認に有効</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">機種別の室内精度比較</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left font-bold text-g800">機種</th>
                  <th className="p-3 text-center font-bold text-g800">Wi-Fi測位</th>
                  <th className="p-3 text-center font-bold text-g800">基地局測位</th>
                  <th className="p-3 text-center font-bold text-g800">室内精度目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'みもりGPSトーク', wifi: 'あり', cell: 'あり', accuracy: '公式に記載なし' },
                  { name: 'ソラノメ（販売終了）', wifi: 'あり', cell: 'あり', accuracy: '50〜100m' },
                  { name: 'あんしんウォッチャー', wifi: 'あり', cell: 'あり', accuracy: '50〜100m' },
                  { name: 'BoTトーク', wifi: 'あり', cell: 'あり', accuracy: '50〜150m' },
                  { name: 'myFirst Fone', wifi: 'あり', cell: 'あり', accuracy: '30〜80m' },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-gray-200">
                    <td className="p-3 font-bold text-g700">{row.name}</td>
                    <td className="p-3 text-center text-g600">{row.wifi}</td>
                    <td className="p-3 text-center text-g600">{row.cell}</td>
                    <td className="p-3 text-center text-g600">{row.accuracy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">場所別の実用性</h2>
          <div className="space-y-4 mb-8">
            {[
              { place: '学校（校舎内）', desc: '校舎はRC造が多く、GPS衛星の電波の受信は困難です。携帯基地局測位により、「学校の敷地内にいる」ことは確認できます。学校にエリア通知（ジオフェンス）を設定すれば、到着・出発の通知は正常に機能します。', level: '基本的な位置把握は可能' },
              { place: 'ショッピングモール', desc: 'Wi-Fiスポットが密集しているため、Wi-Fi測位に対応した機種であれば、比較的正確に位置を把握できます。ただし、フロア（階数）の特定は困難です。入退館の通知はエリア通知で対応できます。', level: '比較的良好（Wi-Fi対応機種）' },
              { place: '自宅（木造）', desc: '木造住宅はコンクリートより電波を通しやすく、窓際であればGPS衛星の電波を受信できる場合もあります。また、Wi-Fi測位が自宅のルーターを利用して位置精度を補完します。', level: '窓際なら良好' },
              { place: '地下鉄・地下街', desc: '地下ではGPS衛星の電波が完全に遮断されます。携帯基地局の電波が届けばおおよそのエリアは把握できますが、精度は数百メートル単位となります。', level: 'おおよそのエリアのみ' },
            ].map((item) => (
              <div key={item.place} className="card-hover p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-g800">{item.place}</h3>
                  <span className="tag-pill bg-blue text-white text-xs">{item.level}</span>
                </div>
                <p className="text-sm text-g600">{item.desc}</p>
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

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">室内精度に優れたGPS端末の選び方</h2>
            <p className="text-g600 mb-6 text-sm">室内での見守りを重視する場合は、Wi-Fi測位に対応した機種をおすすめします。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/accuracy/" className="btn-primary">GPS精度の仕組み</Link>
              <Link href="/compare/accuracy/" className="btn-accent">精度比較ページ</Link>
              <Link href="/" className="btn-accent">おすすめランキング</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
