import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS 防犯・安全重視で選ぶ | SOS・不審者情報・危険エリア通知比較',
  description:
    '防犯・安全機能に優れた子供用GPS端末を比較。SOS機能、不審者情報連動（みもり）、交通安全サポート（SayuU）、危険エリア通知、防犯ブザー有無を徹底比較。',
};

const faqData = [
  { q: 'SOS機能がある子供用GPSはどれ？', a: 'myFirst FoneにはSOSボタンが搭載されており、長押しで緊急連絡先に位置情報付き通知が自動送信されます。キッズケータイにも防犯ブザー+自動発信機能があります。' },
  { q: '不審者情報と連動するGPSはありますか？', a: 'みもり（ドリームエリア）は日本不審者情報センターのデータと連動し、お子さまが不審者出没エリアに近づくと自動通知します。この機能は業界唯一です。' },
  { q: '交通安全機能があるGPSは？', a: 'SayuU（トヨタ）は交通安全サポート機能を搭載しており、交通事故多発地点への接近を通知します。トヨタの交通安全データを活用した独自機能です。' },
  { q: '危険エリア通知機能とは？', a: 'お子さまが登録した危険エリア（交差点、水辺、工事現場など）に近づくとGPS端末から警告音が鳴り、同時に保護者にも通知される機能です。みもりが代表的です。' },
  { q: '防犯ブザー付きのGPS端末はありますか？', a: 'GPS端末単体では防犯ブザー搭載モデルは少ないですが、キッズケータイには標準搭載されています。GPS端末と別に防犯ブザーを持たせるご家庭もあります。' },
  { q: '一番防犯に強いGPSはどれ？', a: '総合的な防犯力ではみもり（不審者情報連動+危険エリア通知+音声メッセージ）がトップです。通話でのSOS対応を重視するならmyFirst Foneがおすすめです。' },
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

export default function SafetyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: '目的別', href: '/' }, { name: '防犯・安全重視' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">防犯重視</span>
            <span className="tag-pill bg-blue text-white">安全機能比較</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            防犯・安全重視で選ぶ 子供用GPS
          </h1>
          <p className="text-g600 text-lg">SOS機能 | 不審者情報連動 | 交通安全 | 危険エリア通知 比較</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">防犯・安全機能の種類</h2>
          <p className="text-g600 mb-6">
            子供用GPS端末の防犯・安全機能は機種によって大きく異なります。
            単純な位置確認だけでなく、不審者情報連動、交通安全サポート、SOS緊急通知など、
            お子さまを危険から守るための先進的な機能を搭載した機種も登場しています。
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: '🚨', title: 'SOS緊急通知', desc: 'ボタン一つで緊急連絡先に位置情報付き通知を送信。', models: 'myFirst Fone' },
              { icon: '👤', title: '不審者情報連動', desc: '不審者出没エリアへの接近を自動検知・通知。', models: 'みもり' },
              { icon: '🚗', title: '交通安全サポート', desc: '事故多発地点への接近を通知。', models: 'SayuU' },
              { icon: '⚠️', title: '危険エリア通知', desc: '指定した危険エリアで端末から警告音。', models: 'みもり' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
                <p className="text-2xl mb-2">{f.icon}</p>
                <h3 className="font-bold text-g800 text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-g600 mb-2">{f.desc}</p>
                <p className="text-xs text-blue font-semibold">対応: {f.models}</p>
              </div>
            ))}
          </div>

          {/* 防犯機能比較表 */}
          <h2 className="section-title">防犯・安全機能 比較表</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue text-white">
                  <th className="p-3 text-left">機種名</th>
                  <th className="p-3 text-center">SOS<br />ボタン</th>
                  <th className="p-3 text-center">不審者<br />情報連動</th>
                  <th className="p-3 text-center">交通安全<br />サポート</th>
                  <th className="p-3 text-center">危険<br />エリア通知</th>
                  <th className="p-3 text-center">防犯<br />ブザー</th>
                  <th className="p-3 text-center">月額料金</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['みもり', '×', '○', '×', '○', '×', '748円', '/review/mimori/'],
                  ['SayuU', '×', '×', '○', '×', '×', '1,210円', '/review/sayuu/'],
                  ['myFirst Fone', '○', '×', '×', '×', '×', '約980円〜', '/review/myfirst-fone/'],
                  ['BoTトーク', '×', '×', '×', '×', '×', '528円〜', '/review/bot-talk/'],
                  ['みてねGPS', '×', '×', '×', '×', '×', '528円〜', '/review/mitene/'],
                  ['あんしんウォッチャー', '×', '×', '×', '×', '×', '539円', '/review/anshin-watcher/'],
                  ['キッズケータイ', '△', '×', '×', '×', '○', '539円〜', '/review/kids-phone/'],
                ].map(([name, sos, fushin, traffic, danger, buzzer, price, href]) => (
                  <tr key={name} className="border-b border-g100">
                    <td className="p-3"><Link href={href} className="text-blue hover:underline font-semibold">{name}</Link></td>
                    <td className="p-3 text-center text-g600">{sos}</td>
                    <td className="p-3 text-center text-g600">{fushin}</td>
                    <td className="p-3 text-center text-g600">{traffic}</td>
                    <td className="p-3 text-center text-g600">{danger}</td>
                    <td className="p-3 text-center text-g600">{buzzer}</td>
                    <td className="p-3 text-center font-semibold text-g800">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 防犯重視おすすめ */}
          <h2 className="section-title">防犯重視で選ぶ おすすめTOP3</h2>
          <div className="space-y-4 mb-8">
            {[
              { rank: 1, name: 'みもり', tag: '防犯力No.1', reason: '不審者情報連動+危険エリア通知で業界唯一の防犯GPS。音声メッセージでお子さまに注意喚起も可能。防犯を最優先するなら一択。', href: '/review/mimori/' },
              { rank: 2, name: 'myFirst Fone', tag: 'SOS搭載', reason: 'SOSボタン搭載で緊急時に位置情報付き通知を自動送信。音声通話で直接連絡も取れる安心感。', href: '/review/myfirst-fone/' },
              { rank: 3, name: 'SayuU', tag: '交通安全', reason: 'トヨタの交通安全データを活用した事故多発地点通知。通学路の交通事故リスクが心配な方に。', href: '/review/sayuu/' },
            ].map((item) => (
              <div key={item.rank} className="flex gap-4 items-start card-hover p-5">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center font-bold">
                  {item.rank}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-g800">
                      <Link href={item.href} className="text-blue hover:underline">{item.name}</Link>
                    </h3>
                    <span className="tag-pill bg-orange text-white text-xs">{item.tag}</span>
                  </div>
                  <p className="text-sm text-g600">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          {/* CTA */}
          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">お子さまの安全を守るGPSを見つけよう</h2>
            <p className="text-g600 mb-6 text-sm">防犯機能充実のGPS端末で、通学路も放課後も安心の見守りを。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">全機種ランキングを見る</Link>
              <Link href="/purpose/elementary/" className="btn-accent">小学生・入学準備で選ぶ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
