import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'MAMORIOで子供の見守りはできる？公式FAQの記載・しくみ・料金と子ども用GPSとの違い【2026年11月】',
  description:
    '紛失防止タグMAMORIO（マモリオ）を子どもの見守りに使えるかを、MAMORIO公式サイト・FAQ・App Storeの記載で確認しています。GPSを搭載していないしくみ、子どもだけが持つ場合の注意点、本体価格と月額、子ども用GPS端末との違いをまとめています。',
  keywords: ['MAMORIO 子供', 'マモリオ 子供', 'MAMORIO 見守り', '紛失防止タグ 子供'],
};

const CHECKED = '2026年11月24日確認';

type Row = { item: string; mamorio: string; gps: string };

const rows: Row[] = [
  { item: '位置の取得', mamorio: 'GPS非搭載。Bluetoothの電波を発信し、近くのスマートフォンが検知した場所を記録', gps: '端末のGPSなどで位置を測り、通信回線で保護者のアプリに送信' },
  { item: '子どもだけが持った場合', mamorio: '公式FAQ：スマートフォンから離れても通知は入らず、MAMORIOが動いても位置情報は更新されない', gps: '子どもが端末だけを持っていれば、保護者が居場所を確認できる' },
  { item: '月額', mamorio: 'なし（本体・アプリとも月額費用は発生しないと案内）', gps: '月額通信料がかかる（当サイトの比較では528円前後から）' },
  { item: '本体価格（税込）', mamorio: '3,828円（MAMORIO・公式ストア）', gps: '機種により異なる' },
  { item: '大きさ・重さ', mamorio: '縦35.5mm×横19mm×厚さ3.5mm、3g', gps: '機種により異なる（重さは「サイズ・重さ比較」を参照）' },
];

const faqData = [
  {
    q: 'MAMORIOを子どもに持たせれば、居場所を確認できますか？',
    a: 'できません。MAMORIO公式FAQの「人の見守りについて」では、MAMORIOはGPSではないためリアルタイムで位置情報を取得できないこと、お子さまがMAMORIOだけを持ち、登録したスマートフォンを保護者が持っている場合は、スマートフォンからMAMORIOが離れても通知は入らず、MAMORIOが動いても位置情報は更新されないことが案内されています（2026年11月24日確認）。',
  },
  {
    q: '子どもがスマートフォンを持っている場合はどうですか？',
    a: '公式FAQでは、お子さまがスマートフォンを持っている場合は「シェア機能」を使うことで、お子さまのスマートフォンのGPSで取得したMAMORIOの位置を保護者のスマートフォンで確認できると案内されています。ただし、リアルタイムで反映されないこともあると記載されています。',
  },
  {
    q: 'MAMORIOに月額料金はかかりますか？',
    a: '公式FAQでは、MAMORIO本体とアプリは無料で利用でき、月額などの費用は発生しないと案内されています。本体はMAMORIO公式ストアで3,828円（税込）です。',
  },
  {
    q: 'MAMORIOを子どもの靴に付けてもよいですか？',
    a: '公式FAQでは、靴に付けて外を歩くことは耐久性の問題上推奨していないと記載されています。また、別のFAQでは、MAMORIOには耐水性能・防水性能はないと案内されています（一部製品を除く）。',
  },
  {
    q: 'AirTagとMAMORIOのどちらが子どもの見守りに向いていますか？',
    a: 'どちらも子どもの見守り専用の製品ではありません。AirTagについては「AirTagで子供の見守りはできる？」で、Apple公式の記載をもとに整理しています。子どもの居場所を保護者が確認したい場合は、通信回線を内蔵した子ども用GPS端末が目的に合っています。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function MamorioKodomoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'MAMORIOで子供の見守りはできる？', datePublished: '2026-11-24', dateModified: '2026-11-24', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち情報', href: '/knowledge/' }, { name: 'MAMORIOで子供の見守りはできる？' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">見守りの方法</span>
            <span className="tag-pill bg-orange text-white">紛失防止タグ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">MAMORIOで子供の見守りはできる？公式の記載と子ども用GPSとの違い</h1>
          <p className="text-g600 text-lg">紛失防止タグMAMORIO（マモリオ）を子どもに持たせた場合にできること・できないことを、MAMORIO公式サイト・FAQ・App Storeの記載で確認しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：MAMORIOは子どもの居場所を確認する用途には向いていません（公式の案内）</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>公式の記載</strong>：App Storeの説明文に「お子さま・ペット・高齢者のリアルタイム追跡用途には適しません」と記載されています。</li>
              <li>・<strong>理由</strong>：MAMORIOはGPSを搭載しておらず、お子さまがMAMORIOだけを持っている場合、離れても通知は入らず、位置情報も更新されないと公式FAQで案内されています。</li>
              <li>・<strong>向いている使い方</strong>：ランドセルの中の鍵や財布など、持ち物の置き忘れに気づくための紛失防止タグとしての利用です。</li>
            </ul>
          </div>

          <h2 className="section-title">MAMORIOのしくみ</h2>
          <p className="text-sm text-g700 mb-3">
            MAMORIO公式FAQでは、MAMORIOは数秒に1回Bluetoothの電波を発信しており、アプリを入れたスマートフォンが移動したときにMAMORIOを探し、見つからなければ置き忘れを通知すると説明されています。「おすすめ」設定では、MAMORIOから約200m以上離れると通知が届きます。一方で、スマートフォンが移動せずにMAMORIOだけが持ち去られた場合や、タグ自体の移動には対応していないと記載されています。
          </p>
          <p className="text-sm text-g700 mb-3">
            手元から離れたMAMORIOの位置は、アプリの「みんなで探す」機能を設定しておくと、ほかのMAMORIOユーザーのスマートフォンがすれ違ったときに検知された場所が知らされるしくみです。MAMORIOは「GPSは搭載されておりません」と公式FAQで案内されており、アプリに表示される位置はスマートフォンのGPSで取得したものです。
          </p>
          <p className="text-xs text-g400 mb-8">
            出典：<a href="https://support.mamorio.jp/dee9fc5a64d447f5a0e79212a7901b59" target="_blank" rel="noopener noreferrer" className="text-blue underline">MAMORIO FAQ（しくみ）</a>、<a href="https://support.mamorio.jp/f415fae94a8c4f299bdfb6b6990d78d4" target="_blank" rel="noopener noreferrer" className="text-blue underline">MAMORIO FAQ（置き忘れ通知の設定）</a>、<a href="https://support.mamorio.jp/a9daa8bbd670405198793813c5fec04b" target="_blank" rel="noopener noreferrer" className="text-blue underline">MAMORIO FAQ「GPSは搭載されていますか？」</a>、<a href="https://mamorio.jp/cloud_gps" target="_blank" rel="noopener noreferrer" className="text-blue underline">MAMORIO「みんなで探す」</a>（{CHECKED}）
          </p>

          <h2 className="section-title">MAMORIOと子ども用GPS端末の比較</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">項目</th>
                  <th className="p-3 text-left border-b-2 border-blue">MAMORIO</th>
                  <th className="p-3 text-left border-b-2 border-blue">子ども用GPS端末</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.item} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">{r.item}</td>
                    <td className="p-3 text-g700">{r.mamorio}</td>
                    <td className="p-3 text-g700">{r.gps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：<a href="https://support.mamorio.jp/ada307db275f408788c42ca202f0eebd" target="_blank" rel="noopener noreferrer" className="text-blue underline">MAMORIO FAQ「人の見守りについて」</a>、<a href="https://support.mamorio.jp/cd7aef16f3d84f269c50cc3accf3d80f" target="_blank" rel="noopener noreferrer" className="text-blue underline">MAMORIO FAQ（月額料金）</a>、<a href="https://store.mamorio.jp/" target="_blank" rel="noopener noreferrer" className="text-blue underline">MAMORIO 公式ストア</a>、<a href="https://mamorio.jp/mamorio" target="_blank" rel="noopener noreferrer" className="text-blue underline">MAMORIO 製品ページ</a>（{CHECKED}）。子ども用GPS端末の月額は当サイトの「<Link href="/compare/price/" className="text-blue underline">月額料金比較</Link>」をもとにしています。製品ページでは電池の持ちを「約1年」「約1.2年間（約14ヶ月）」と記載しており、表記が統一されていないため表には掲載していません。
          </p>

          <h2 className="section-title">子どもの持ち物に付けるときの注意</h2>
          <ul className="space-y-2 text-sm text-g700 mb-8">
            <li>・<strong>靴には付けない</strong>：公式FAQでは、靴に付けて外を歩くことは耐久性の問題上推奨していないと記載されています。</li>
            <li>・<strong>水濡れに注意</strong>：公式FAQでは、MAMORIOには耐水性能・防水性能はないと案内されています（一部製品を除く）。</li>
            <li>・<strong>見守りの道具は別に用意する</strong>：お子さまの居場所を保護者が確認したい場合は、GPSと通信回線を内蔵した子ども用GPS端末を検討してください。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：<a href="https://support.mamorio.jp/ada307db275f408788c42ca202f0eebd" target="_blank" rel="noopener noreferrer" className="text-blue underline">MAMORIO FAQ「人の見守りについて」</a>、<a href="https://support.mamorio.jp/bb7099d71dcb439695cb8967754181cf" target="_blank" rel="noopener noreferrer" className="text-blue underline">MAMORIO FAQ（衝撃耐性・防水性能）</a>、<a href="https://apps.apple.com/jp/app/mamorio/id952095468" target="_blank" rel="noopener noreferrer" className="text-blue underline">App Store「MAMORIO」</a>（{CHECKED}）
          </p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              同じBluetoothタグのAirTagについては「<Link href="/knowledge/apple-airtag/" className="text-blue underline">AirTagで子供の見守りはできる？</Link>」、子ども用GPS端末の選び方は「<Link href="/knowledge/how-to-choose/" className="text-blue underline">子供GPSの選び方</Link>」、料金の比較は「<Link href="/compare/price/" className="text-blue underline">月額料金比較</Link>」をご覧ください。
            </p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
          <p className="text-xs text-g400 mt-3">出典は上記のMAMORIO公式サイト・FAQ・App Store（{CHECKED}）</p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/apple-airtag/" className="btn-primary">AirTagで見守りはできる？</Link>
              <Link href="/knowledge/maigo-boushi-gps/" className="btn-accent">迷子防止とGPS</Link>
              <Link href="/compare/price/" className="btn-primary">月額料金比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
