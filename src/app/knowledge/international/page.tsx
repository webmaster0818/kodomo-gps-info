import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供用GPSは海外で使える？対応機種と注意点',
  description:
    '子供用GPS端末は海外で使えるのか徹底解説。海外対応機種一覧、海外で使えない理由（通信方式・ローミング）、海外旅行時の代替手段（スマホアプリ・レンタルGPS）、国別の注意点まで網羅。',
  keywords: ['子供GPS', '海外', '使える', '海外旅行', 'ローミング', '対応機種'],
  openGraph: {
    title: '子供用GPSは海外で使える？対応機種と注意点',
    description: '子供用GPS端末は海外で使えるのか。対応機種と海外旅行時の代替手段を詳しく解説。',
  },
};

const faqData = [
  { q: '子供用GPSを海外に持っていけますか？', a: '物理的に持っていくことは可能ですが、ほとんどの子供用GPS端末は日本国内の携帯電話回線（LTE）を使用しているため、海外では位置情報の送信ができません。GPS衛星からの受信自体は世界中で可能ですが、その情報をアプリに送信するための通信回線が海外では使えないのが主な理由です。' },
  { q: '海外で使えるGPS端末はありますか？', a: 'myFirst Fone R2はeSIM対応で、別途海外用eSIMプランを契約すれば一部の国で使用可能です。ただし追加費用がかかり、全ての国に対応しているわけではありません。その他の主要な子供用GPS端末（みてねみまもりGPS、あんしんウォッチャー等）は日本国内専用です。' },
  { q: '海外旅行中の子供の見守りにはどんな方法がありますか？', a: 'スマホの位置共有機能（Googleファミリーリンク、iPhoneの「探す」）が最も手軽です。海外用レンタルWi-Fiがあればスマホでリアルタイム位置共有ができます。Apple AirTagも海外のiPhoneユーザーネットワークを利用して位置を確認できます（ただしリアルタイムではありません）。' },
  { q: 'SIMカードを入れ替えれば海外で使えますか？', a: 'ほとんどの子供用GPS端末はSIMカードが内蔵されており、ユーザーが入れ替えることはできません。また、SIMフリーの端末であっても、海外のSIMカードに対応しているとは限りません。海外利用を前提とする場合は、eSIM対応のスマートウォッチ型を検討してください。' },
  { q: '海外赴任で長期滞在する場合はどうすればいいですか？', a: '長期の海外赴任の場合、日本の子供用GPS端末は解約し、現地の見守りサービスを利用するのが現実的です。アメリカならGizmo Watch、ヨーロッパならXplora等、各国に子供向けの見守りGPSサービスがあります。日本帰国時に再契約するのがコスト面でも合理的です。' },
  { q: 'GPSの電波は海外でも受信できますか？', a: 'はい、GPS（Global Positioning System）の衛星電波は世界中どこでも受信可能です。しかし、子供用GPS端末が位置情報を保護者のスマホに送信するには、携帯電話回線（LTE/4G）が必要です。海外では日本の携帯回線が使えないため、GPS受信はできても位置情報の共有ができないのです。' },
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

const deviceData = [
  { name: 'みてねみまもりGPS', overseas: '不可', reason: '日本国内SIM内蔵・交換不可', sim: '内蔵SIM（docomo）' },
  { name: 'あんしんウォッチャー', overseas: '不可', reason: '日本国内SIM内蔵・交換不可', sim: '内蔵SIM（au）' },
  { name: 'BoTトーク', overseas: '不可', reason: '日本国内SIM内蔵・交換不可', sim: '内蔵SIM（docomo）' },
  { name: 'どこかなGPS2', overseas: '不可', reason: '日本国内SIM内蔵・交換不可', sim: '内蔵SIM（SoftBank）' },
  { name: 'まもサーチ', overseas: '不可', reason: '日本国内SIM内蔵・交換不可', sim: '内蔵SIM' },
  { name: 'soranome', overseas: '不可', reason: '日本国内SIM内蔵・交換不可', sim: '内蔵SIM（docomo）' },
  { name: 'myFirst Fone R2', overseas: '条件付きで可', reason: 'eSIM対応・海外プラン別契約要', sim: 'eSIM（別途契約）' },
];

const whyNotWork = [
  { reason: '日本国内専用のSIMカードが内蔵', detail: 'ほとんどの子供用GPS端末は、日本の携帯キャリア（docomo/au/SoftBank）のSIMが内蔵されており、海外のネットワークに接続できません。SIMの取り外しや交換もできない設計です。' },
  { reason: '国際ローミング非対応', detail: 'スマートフォンのように国際ローミング（海外の通信網を借りて通信する仕組み）に対応していないため、日本の電波圏外では通信が一切できません。' },
  { reason: '対応周波数帯の違い', detail: '国や地域によって使用される携帯電話の周波数帯が異なります。日本向けに設計された端末は、海外の周波数帯に対応していない場合があります。' },
  { reason: 'サービス（アプリ）が日本国内前提', detail: 'GPS端末と連携するアプリやサーバーが日本国内からのアクセスを前提に設計されています。海外からの通信を想定していないため、仮に通信できてもサービスが正常に動作しない可能性があります。' },
];

const alternatives = [
  { method: 'スマホの位置共有機能', cost: '無料', setup: '簡単', accuracy: '高い', detail: 'Googleファミリーリンク（Android）やiPhoneの「探す」機能を使えば、海外でもリアルタイムの位置共有が可能。Wi-Fiまたはモバイルデータ通信が必要。' },
  { method: 'Apple AirTag', cost: '4,980円（買い切り）', setup: '簡単', accuracy: '中程度', detail: '世界中のiPhoneユーザーのネットワークを利用して位置を検出。リアルタイムではないが、人口密集地では比較的正確。月額費用なし。' },
  { method: '海外用レンタルGPS', cost: '1,000〜3,000円/日', setup: 'やや手間', accuracy: '高い', detail: '海外旅行向けのGPSトラッカーをレンタル。事前予約が必要だが、現地で確実に使える。短期旅行向き。' },
  { method: '現地の見守りアプリ', cost: '無料〜月額数百円', setup: 'やや手間', accuracy: '高い', detail: 'Life360等の国際対応アプリを使えば、家族全員の位置を共有可能。海外赴任等の長期滞在に適する。' },
  { method: '海外用プリペイドSIM + スマホ', cost: '2,000〜5,000円', setup: '中程度', accuracy: '高い', detail: '子供にプリペイドSIM入りのスマホを持たせる方法。通話もできて安心だが、子供がスマホを持つことへの心理的ハードルがある。' },
];

export default function InternationalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/' }, { name: '海外での利用' }]} />

      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">海外利用</span>
            <span className="tag-pill bg-blue text-white">対応機種</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供用GPSは海外で使える？
          </h1>
          <p className="text-g600 text-lg">対応機種と注意点｜海外旅行時の代替手段</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-g600 mb-8">
            家族で海外旅行に行く際、「普段使っている子供用GPSは海外でも使えるの？」と疑問に思う方は多いでしょう。結論から言うと、ほとんどの子供用GPS端末は海外では使用できません。このページでは、海外対応機種の一覧、海外で使えない理由、海外旅行時の代替手段を詳しく解説します。
          </p>

          <h2 className="section-title">海外対応機種一覧</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">機種名</th>
                  <th className="py-3 px-3 text-center font-bold text-g800">海外利用</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">理由</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">SIM情報</th>
                </tr>
              </thead>
              <tbody>
                {deviceData.map((d) => (
                  <tr key={d.name} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{d.name}</td>
                    <td className={`py-3 px-3 text-center font-bold ${d.overseas === '不可' ? 'text-orange' : 'text-blue'}`}>{d.overseas}</td>
                    <td className="py-3 px-3 text-g600">{d.reason}</td>
                    <td className="py-3 px-3 text-g600">{d.sim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">海外で使えない4つの理由</h2>
          <div className="space-y-4 mb-8">
            {whyNotWork.map((w, i) => (
              <div key={w.reason} className="flex gap-4 items-start card-hover p-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-g800 text-sm">{w.reason}</h3>
                  <p className="text-sm text-g600">{w.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">海外旅行時の代替手段</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-2 text-left font-bold text-g800">方法</th>
                  <th className="py-3 px-2 text-right font-bold text-g800">費用</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">導入の手軽さ</th>
                  <th className="py-3 px-2 text-center font-bold text-g800">精度</th>
                  <th className="py-3 px-2 text-left font-bold text-g800">詳細</th>
                </tr>
              </thead>
              <tbody>
                {alternatives.map((a) => (
                  <tr key={a.method} className="border-b border-g100">
                    <td className="py-3 px-2 font-semibold text-g700">{a.method}</td>
                    <td className="py-3 px-2 text-right text-g600">{a.cost}</td>
                    <td className="py-3 px-2 text-center text-g600">{a.setup}</td>
                    <td className="py-3 px-2 text-center text-g600">{a.accuracy}</td>
                    <td className="py-3 px-2 text-g600">{a.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-light rounded-xl p-5 mb-8">
            <h3 className="font-bold text-g800 mb-2">おすすめの組み合わせ</h3>
            <ul className="space-y-2 text-sm text-g600">
              <li><span className="font-semibold text-g700">短期旅行（1週間以内）:</span> スマホの位置共有 + AirTag（補助）</li>
              <li><span className="font-semibold text-g700">長期滞在・海外赴任:</span> 現地の見守りアプリ + キッズスマホ</li>
              <li><span className="font-semibold text-g700">テーマパーク等の日帰り:</span> スマホの位置共有のみで十分</li>
            </ul>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">国内での見守りに最適なGPSを選ぼう</h2>
            <p className="text-g600 mb-6 text-sm">日本国内の通学・外出にはGPS端末が最適。海外旅行時はスマホアプリで補完しましょう。</p>
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
