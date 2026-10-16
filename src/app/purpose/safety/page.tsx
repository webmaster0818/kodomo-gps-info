import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS 防犯・安全重視で選ぶ | SOS・不審者情報・危険エリア通知比較',
  description:
    '防犯・安全機能に優れた子供用GPS端末を比較します。SOS機能、不審者情報との連動（みもり）、交通安全サポート（SayuU）、危険エリア通知、防犯ブザーの有無を比較しています。',
};

const faqData = [
  { q: 'SOS機能がある子供用GPSはどれですか？', a: 'myFirst FoneにはSOSボタンが搭載されており、長押しすると緊急連絡先に位置情報付きの通知が自動で送信されます。キッズケータイにも、防犯ブザーと自動発信の機能があります。' },
  { q: '不審者情報と連動するGPSはありますか？', a: 'みもり（ドリームエリア）は日本不審者情報センターのデータと連動しており、お子さまが不審者の出没エリアに近づくと自動で通知します。この機能は業界で唯一の機能です。' },
  { q: '交通安全機能があるGPSはありますか？', a: 'SayuU（トヨタ）は交通安全サポート機能を搭載しており、交通事故の多発地点への接近を通知します。トヨタの交通安全データを活用した独自の機能です。' },
  { q: '危険エリア通知機能とはどのような機能ですか？', a: 'お子さまが登録された危険エリア（交差点、水辺、工事現場など）に近づくと、GPS端末から警告音が鳴り、同時に保護者にも通知される機能です。代表的な機種はみもりです。' },
  { q: '防犯ブザー付きのGPS端末はありますか？', a: 'GPS端末単体では防犯ブザーを搭載したモデルは少ないものの、キッズケータイには標準で搭載されています。GPS端末とは別に、防犯ブザーを持たせるご家庭もあります。' },
  { q: '最も防犯機能が充実したGPSはどれですか？', a: '総合的な防犯機能では、みもり（不審者情報との連動・危険エリア通知・音声メッセージ）が最も充実しています。通話によるSOS対応を重視する場合は、myFirst Foneをおすすめします。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPS 防犯・安全重視で選ぶ", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '目的別', href: '/purpose/' }, { name: '防犯・安全重視' }]} />

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
          <p className="text-g600 text-lg">SOS機能・不審者情報との連動・交通安全・危険エリア通知の比較</p>
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
              { icon: '🚨', title: 'SOS緊急通知', desc: 'ボタン一つで、緊急連絡先に位置情報付きの通知を送信します。', models: 'myFirst Fone' },
              { icon: '👤', title: '不審者情報連動', desc: '不審者の出没エリアへの接近を自動で検知し、通知します。', models: 'みもり' },
              { icon: '🚗', title: '交通安全サポート', desc: '事故の多発地点への接近を通知します。', models: 'SayuU' },
              { icon: '⚠️', title: '危険エリア通知', desc: '指定した危険エリアで、端末から警告音が鳴ります。', models: 'みもり' },
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
          <h2 className="section-title">防犯・安全機能の比較表</h2>
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
          <h2 className="section-title">防犯を重視する場合のおすすめ機種TOP3</h2>
          <div className="space-y-4 mb-8">
            {[
              { rank: 1, name: 'みもり', tag: '防犯機能が最も充実', reason: '不審者情報との連動と危険エリア通知を備えた、業界で唯一の防犯GPSです。音声メッセージでお子さまに注意を促すこともできます。防犯を最も重視する場合に適した機種です。', href: '/review/mimori/' },
              { rank: 2, name: 'myFirst Fone', tag: 'SOS搭載', reason: 'SOSボタンを搭載しており、緊急時に位置情報付きの通知を自動で送信します。音声通話で直接連絡を取ることもできます。', href: '/review/myfirst-fone/' },
              { rank: 3, name: 'SayuU', tag: '交通安全', reason: 'トヨタの交通安全データを活用し、事故の多発地点への接近を通知します。通学路での交通事故が心配な方に適しています。', href: '/review/sayuu/' },
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">お子さまの安全を守るGPSの選び方</h2>
            <p className="text-g600 mb-6 text-sm">防犯機能が充実したGPS端末により、通学路でも放課後でも見守りが可能です。</p>
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
