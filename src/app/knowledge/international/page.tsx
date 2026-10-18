import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供用GPSは海外で使える？BoT・みてね等5機種の公式回答と旅行中の代わりの方法【2026年10月】',
  description:
    'BoT・みてねみまもりGPS・あんしんウォッチャー・soranome・まもサーチの5機種の海外利用の可否を公式FAQで確認しました（2026年10月18日）。端末を海外に持ち出すと位置情報は送れませんが、子どもが日本にいて保護者が海外にいる場合はアプリで見守れる機種があります。旅行中の代わりの方法もまとめています。',
  keywords: ['子供GPS', '海外', '使える', '海外旅行', 'ローミング', '対応機種'],
  openGraph: {
    images: ['/og.png'],
    title: '子供用GPSは海外で使える？BoT・みてね等5機種の公式回答【2026年10月】',
    description: 'BoT・みてねみまもりGPSなど5機種の海外利用の可否を公式FAQで確認し、旅行中の代わりの方法をまとめています。',
  },
};

const faqData = [
  { q: '子供用GPSを海外に持っていけますか？', a: '物理的に持っていくことは可能ですが、ほとんどの子供用GPS端末は日本国内の携帯電話回線（LTE）を使用しているため、海外では位置情報を送信できません。GPS衛星からの電波の受信自体は世界中で可能ですが、その情報をアプリに送信するための通信回線が海外では使えないことが主な理由です。' },
  { q: 'みてねみまもりGPSやBoTは海外で使えますか？', a: '端末を海外に持ち出すと使えません。みてねみまもりGPSは日本国内のLTE通信網（LTE Cat.M1）、BoTは日本国内のLTE網を使うためです。ただし、子どもが日本国内にいて保護者が海外にいる場合は、保護者のアプリから位置を確認できると両社の公式ヘルプに記載されています。' },
  { q: '海外で使える子供用GPS端末はありますか？', a: '当サイトで公式FAQを確認した国内の主要5機種（BoT・みてねみまもりGPS・あんしんウォッチャー・soranome・まもサーチ）には、追加料金で海外利用できるオプションは見つかりませんでした（2026年10月18日確認）。海外対応をうたう端末を検討する場合は、対応国・通信料金を各社の公式サイトでご確認ください。' },
  { q: '海外旅行中の子供の見守りにはどんな方法がありますか？', a: 'スマートフォンの位置共有機能（Googleファミリーリンク、iPhoneの「探す」）が最も手軽な方法です。海外用のレンタルWi-Fiがあれば、スマートフォンでリアルタイムに位置を共有できます。Apple AirTagも、海外のiPhoneユーザーのネットワークを利用して位置を確認できます（ただし、リアルタイムではありません）。' },
  { q: 'SIMカードを入れ替えれば海外で使えますか？', a: 'ほとんどの子供用GPS端末はSIMカードが内蔵されており、利用者が入れ替えることはできません。また、SIMフリーの端末であっても、海外のSIMカードに対応しているとは限りません。海外での利用を前提とする場合は、対応国と通信料金が公式に明記された端末かどうかを確認してから選ぶことをおすすめします。' },
  { q: '海外赴任で長期滞在する場合はどうすればいいですか？', a: '長期の海外赴任の場合は、日本の子供用GPS端末を解約し、現地の見守りサービスを利用することが現実的です。契約期間の縛りや解約金の有無は機種ごとに異なるため、解約前に各社の公式サイトでご確認ください。' },
  { q: 'GPSの電波は海外でも受信できますか？', a: 'はい。GPS（Global Positioning System）の衛星電波は、世界中どこでも受信できます。しかし、子供用GPS端末が位置情報を保護者のスマートフォンに送信するには、携帯電話回線（LTE/4G）が必要です。海外では日本の携帯回線が使えないため、GPSの受信はできても、位置情報を共有することはできません。' },
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
  { name: 'BoT（BoTトーク含む）', overseas: '不可', reason: '日本国内のLTE網を利用しているため、端末を海外で利用できない。子どもが国内・保護者が海外の場合はアプリで確認可', src: 'BoT公式ヘルプ（2026-02-17更新）', url: 'https://support.bot.app/hc/ja/articles/13238381889561' },
  { name: 'みてねみまもりGPS', overseas: '不可', reason: '日本国内のLTE通信網（LTE Cat.M1）を使うため、海外に持ち出すと位置情報を送れない。見守る側のアプリは海外でも利用可', src: 'みてねみまもりGPS公式ヘルプ（2025-11-19更新）', url: 'https://help.gps.mitene.us/hc/ja/articles/900005418863' },
  { name: 'あんしんウォッチャー（au）', overseas: '不可', reason: '「本製品は海外ではご利用いただけません」と明記', src: 'au公式 製品ページ', url: 'https://www.au.com/life/auhome/device/uha01a/' },
  { name: 'soranome（販売終了）', overseas: '不可', reason: '「国内でのご利用を前提としています。国外にもちだしての利用はできません」と明記', src: 'soranome公式サイト', url: 'https://soranome.net/' },
  { name: 'まもサーチ', overseas: '公式に明記なし', reason: '公式には「ソフトバンクLTEのエリア内でご利用いただけます」とあり、海外利用の可否を直接示すFAQは確認できず', src: 'まもサーチ公式サイト', url: 'https://mamosearch.jp/' },
];

const whyNotWork = [
  { reason: '日本国内専用のSIMカードを内蔵', detail: '公式で確認した5機種は、いずれも日本国内の携帯回線（LTE網・LTE-M・LTE Cat.M1）で位置情報を送る仕組みです。海外ではこの回線につながらないため、位置情報を保護者のアプリへ送れません。' },
  { reason: '国際ローミングに非対応', detail: 'スマートフォンのような国際ローミング（海外の通信網を借りて通信する仕組み）に対応していないため、日本の電波圏外では一切通信できません。' },
  { reason: '対応周波数帯の違い', detail: '国や地域によって、使用される携帯電話の周波数帯は異なります。日本向けに設計された端末は、海外の周波数帯に対応していない場合があります。' },
  { reason: 'サービス（アプリ）が日本国内での利用を前提としている', detail: 'GPS端末と連携するアプリやサーバーは、日本国内からのアクセスを前提に設計されています。海外からの通信を想定していないため、仮に通信できたとしても、サービスが正常に動作しない可能性があります。' },
];

const alternatives = [
  { method: 'スマートフォンの位置共有機能', cost: '無料', setup: '簡単', accuracy: '高い', detail: 'Googleファミリーリンク（Android）やiPhoneの「探す」機能を使えば、海外でもリアルタイムで位置を共有できます。Wi-Fiまたはモバイルデータ通信が必要です。' },
  { method: 'Apple AirTag', cost: '本体購入のみ（月額なし）', setup: '簡単', accuracy: '中程度', detail: '世界中のiPhoneユーザーのネットワークを利用して位置を検出します。リアルタイムではありませんが、人口密集地では比較的正確です。月額費用はかかりません。' },
  { method: '海外用レンタルGPS', cost: 'レンタル会社により異なる', setup: 'やや手間', accuracy: '高い', detail: '海外旅行向けのGPSトラッカーをレンタルする方法です。事前予約が必要ですが、現地で確実に使えます。短期の旅行に向いています。' },
  { method: '現地の見守りアプリ', cost: 'アプリにより異なる', setup: 'やや手間', accuracy: '高い', detail: '国際対応の家族向け位置共有アプリを使えば、家族全員の位置を共有できます。海外赴任等の長期滞在に適しています。' },
  { method: '海外用プリペイドSIM + スマートフォン', cost: 'SIMの種類により異なる', setup: '中程度', accuracy: '高い', detail: 'お子さまにプリペイドSIM入りのスマートフォンを持たせる方法です。通話もできるため安心ですが、お子さまにスマートフォンを持たせることへの心理的なハードルがあります。' },
];

export default function InternationalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供用GPSは海外で使える？BoT・みてね等5機種の公式回答と旅行中の代わりの方法", "datePublished": "2026-03-15", "dateModified": "2026-10-18", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: '海外での利用' }]} />

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
            家族で海外旅行に行く際、「普段使っている子供用GPSは海外でも使えるのか」と疑問に思われる方は少なくありません。当サイトで公式FAQを確認した主要5機種は、いずれも端末を海外に持ち出すと位置情報を送れません（まもサーチは公式に明記なし）。本ページでは、機種ごとの公式回答、海外で使えない理由、海外旅行時の代わりの方法をまとめています。
          </p>

          <h2 className="section-title">主要5機種の海外利用（公式FAQで確認・2026年10月18日）</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800">機種名</th>
                  <th className="py-3 px-3 text-center font-bold text-g800">海外利用</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">理由</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">出典</th>
                </tr>
              </thead>
              <tbody>
                {deviceData.map((d) => (
                  <tr key={d.name} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700">{d.name}</td>
                    <td className={`py-3 px-3 text-center font-bold ${d.overseas === '不可' ? 'text-orange' : 'text-blue'}`}>{d.overseas}</td>
                    <td className="py-3 px-3 text-g600">{d.reason}</td>
                    <td className="py-3 px-3 text-g600"><a href={d.url} target="_blank" rel="noopener noreferrer" className="underline">{d.src}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 -mt-6 mb-8">追加料金で海外利用できるオプションは、5機種とも公式サイトで確認できませんでした。まもサーチは海外利用を直接示す記載が無いため「公式に明記なし」としています。</p>

          <div className="bg-orange-light rounded-xl p-5 mb-8">
            <h3 className="font-bold text-g800 mb-2">保護者が海外・子どもが日本にいる場合は見守れます</h3>
            <p className="text-sm text-g600">BoTとみてねみまもりGPSは、端末（子ども側）が日本国内にあれば、海外にいる保護者のスマートフォンのアプリで位置を確認できると公式ヘルプに記載されています。出張や単身赴任で保護者だけが海外にいる場合は、契約を続けたまま見守ることができます。</p>
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
              <li><span className="font-semibold text-g700">短期旅行（1週間以内）:</span> スマートフォンの位置共有 + AirTag（補助）</li>
              <li><span className="font-semibold text-g700">長期滞在・海外赴任:</span> 現地の見守りアプリ + キッズスマートフォン</li>
              <li><span className="font-semibold text-g700">テーマパーク等の日帰り:</span> スマートフォンの位置共有のみで十分</li>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">国内での見守りに適したGPSの選び方</h2>
            <p className="text-g600 mb-6 text-sm">日本国内での通学・外出にはGPS端末が適しています。海外旅行の際は、スマートフォンアプリで補完することをおすすめします。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/compare/price/" className="btn-primary">月額料金比較</Link>
              <Link href="/knowledge/how-to-choose/" className="btn-accent">GPSの選び方ガイド</Link>
            </div>
          </div>

          <p className="text-xs text-g400 mt-6 text-center">最終更新: 2026年10月18日（各機種の公式FAQを確認）</p>
        </div>
      </section>
    </>
  );
}
