import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'GPSは室内でも使える？建物内での精度と対策【徹底解説】',
  description:
    'GPS端末は室内で精度が落ちる理由をわかりやすく解説。Wi-Fiや携帯基地局測位による補助、機種別の室内精度比較、学校・ショッピングモール内での実用性を紹介します。',
};

const faqData = [
  { q: 'GPS端末は室内では全く使えないの？', a: 'GPS衛星の電波は建物内では大幅に弱まりますが、Wi-Fi測位や携帯基地局測位を併用する機種なら室内でもおおよその位置を把握できます。精度は屋外より落ちますが「建物の中にいる」ことはわかります。' },
  { q: '学校の中でも子供の位置はわかる？', a: '校舎内では衛星測位が困難ですが、多くの機種で携帯基地局測位により「学校の敷地内にいる」程度の位置は確認できます。ただし教室単位の特定は難しいのが現状です。' },
  { q: 'ショッピングモールの中では？', a: 'ショッピングモールにはWi-Fiスポットが多いため、Wi-Fi測位対応機種なら比較的精度が保たれます。フロア（階数）の特定は難しいですが、施設内にいることは確認できます。' },
  { q: 'Wi-Fi測位に対応した機種はどれ？', a: 'みもり、ソラノメ、あんしんウォッチャーなどがWi-Fi測位に対応しています。Wi-Fi対応機種を選ぶことで、室内での精度低下を軽減できます。' },
  { q: '地下鉄や地下街ではGPSは使える？', a: '地下ではGPS衛星の電波が完全に遮断されます。携帯基地局の電波が届く範囲であれば大まかな位置は取得できますが、精度は数百メートル単位になることがあります。' },
  { q: '室内精度を改善する方法はある？', a: 'Wi-Fi測位対応の機種を選ぶことが最も効果的です。また、更新間隔を短く設定し、室内から屋外に出た際にすぐ正確な位置を取得できるようにしておくと実用的です。' },
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
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '室内でのGPS精度' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">室内精度</span>
            <span className="tag-pill bg-orange text-white">徹底解説</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            GPSは室内でも使える？建物内での精度と対策
          </h1>
          <p className="text-g600 text-lg">室内でGPS精度が落ちる理由と、その対策を詳しく解説します</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">GPSの仕組みと衛星信号</h2>
          <div className="card-hover p-6 mb-8">
            <p className="text-g600 mb-4">
              GPSは地球上空約20,000kmを周回する人工衛星から発信される電波を受信して位置を計算します。
              電波は光速で届きますが、コンクリートや鉄筋といった建築素材は電波を大幅に減衰させます。
              そのため、屋外では高精度な測位が可能でも、建物内に入ると衛星からの信号を十分に受信できなくなります。
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

          <h2 className="section-title">室内で精度が落ちる理由</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: '衛星電波の遮断', desc: 'コンクリートの壁、鉄筋、屋根がGPS電波を遮断します。特に鉄筋コンクリート造（RC造）の建物では、衛星からの電波がほとんど届きません。木造建築では多少透過しますが、精度は大幅に低下します。' },
              { title: 'マルチパス（反射波）の影響', desc: '建物内に僅かに入り込んだ衛星電波が壁や天井で反射し、端末に複数の経路で到達します。この反射波が測位計算を狂わせ、実際の位置とは異なるポイントが表示される原因になります。' },
              { title: '受信衛星数の不足', desc: '正確な測位には最低4基の衛星を同時受信する必要がありますが、室内では受信できる衛星数が1〜2基以下に減少します。衛星数が不足すると測位そのものができなくなります。' },
              { title: '信号強度の低下', desc: '壁を透過した電波は信号強度が大幅に低下し、ノイズに埋もれやすくなります。端末が受信しても精度が極端に悪い位置情報しか得られないことがあります。' },
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
              <p className="text-sm text-g600 mb-3">周囲のWi-Fiアクセスポイントの電波強度と位置データベースを照合して位置を推定します。</p>
              <ul className="space-y-2 text-sm text-g700">
                <li>・精度: 15〜50m程度</li>
                <li>・ショッピングモールや駅で有効</li>
                <li>・Wi-Fiスポットが密集するほど高精度</li>
                <li>・接続不要（電波のスキャンのみ）</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">携帯基地局測位の仕組み</h3>
              <p className="text-sm text-g600 mb-3">接続している携帯電話基地局の位置から大まかな現在地を推定します。</p>
              <ul className="space-y-2 text-sm text-g700">
                <li>・精度: 100〜1,000m程度</li>
                <li>・ほぼ全ての場所で利用可能</li>
                <li>・GPS・Wi-Fiが使えない時の最終手段</li>
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
                  { name: 'みもり', wifi: 'あり', cell: 'あり', accuracy: '50〜100m' },
                  { name: 'ソラノメ', wifi: 'あり', cell: 'あり', accuracy: '50〜100m' },
                  { name: 'あんしんウォッチャー', wifi: 'あり', cell: 'あり', accuracy: '50〜100m' },
                  { name: 'BoTトーク', wifi: 'あり', cell: 'あり', accuracy: '50〜150m' },
                  { name: 'どこかなGPS', wifi: 'なし', cell: 'あり', accuracy: '100〜500m' },
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
              { place: '学校（校舎内）', desc: '校舎はRC造が多く、GPS衛星の受信は困難です。携帯基地局測位により「学校の敷地内にいる」ことは確認できます。ジオフェンスを学校に設定すれば、到着・出発の通知は正常に機能します。', level: '基本的な位置把握は可能' },
              { place: 'ショッピングモール', desc: 'Wi-Fiスポットが密集しているため、Wi-Fi測位対応機種なら比較的正確に位置がわかります。ただしフロア（階数）の特定は困難です。入退館の通知はジオフェンスで対応できます。', level: '比較的良好（Wi-Fi対応機種）' },
              { place: '自宅（木造）', desc: '木造住宅はコンクリートより電波を通しやすく、窓際であればGPS衛星を受信できることもあります。Wi-Fi測位も自宅のルーターを利用して位置精度を補完します。', level: '窓際なら良好' },
              { place: '地下鉄・地下街', desc: '地下ではGPS衛星電波は完全に遮断されます。携帯基地局の電波が届けば大まかなエリアは把握できますが、精度は数百メートル単位になります。', level: '大まかなエリアのみ' },
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

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">室内精度に強いGPS端末を探そう</h2>
            <p className="text-g600 mb-6 text-sm">Wi-Fi測位対応の機種を選んで、室内でも安心の見守りを実現しましょう。</p>
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
