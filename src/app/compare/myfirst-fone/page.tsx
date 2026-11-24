import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'myFirst Fone 比較｜S4・R2・M1の価格・SIM・カメラ・防水・バッテリーを公式ストアの仕様で比較【2026年11月】',
  description:
    'myFirst Fone の現行3機種（S4・R2・M1）を、myFirst Japan 公式ストアの商品ページの仕様で比較しています。本体価格、eSIMかnanoSIMか、使えるSIM、画面・カメラ・防水・バッテリー・重さの違いと、選び方の目安をまとめています。',
  keywords: ['myFirst Fone 比較', 'マイファーストフォン 比較', 'myFirst Fone S4 R2 違い', 'myFirst Fone M1', 'キッズスマートウォッチ 比較'],
};

const CHECKED = '2026年11月25日確認';
const S4 = 'https://jp.myfirst.tech/products/myfirst-fone-s4';
const R2 = 'https://jp.myfirst.tech/products/myfirst-fone-r2';
const M1 = 'https://jp.myfirst.tech/products/myfirst-fone-m1';

type Row = { item: string; s4: string; r2: string; m1: string };

const rows: Row[] = [
  { item: '本体価格（通常価格・税込）', s4: '34,800円', r2: '18,800円', m1: '14,800円' },
  { item: 'SIM', s4: 'eSIM（myFirst Free SIM のみ）', r2: 'eSIM内蔵（myFirst eSIM専用）', m1: 'nanoSIM付属（一部の他社nanoSIMにも対応）' },
  { item: 'ディスプレイ', s4: '1.65インチ AMOLED（348×443）', r2: '1.3インチ AMOLED（360×360）', m1: '1.6インチ AMOLED' },
  { item: 'カメラ', s4: '5MP', r2: '500万画素 広角フロントカメラ', m1: '前面2MP' },
  { item: '位置情報', s4: 'デュアルバンドGPS（L1・L5）', r2: 'GPS、A-GPS、Wi-Fi', m1: 'Wi-Fi／GPS／A-GPS' },
  { item: '防水', s4: '生活防水 IPX8', r2: '生活防水 IPX8', m1: 'IP67' },
  { item: 'バッテリー容量', s4: '605mAh', r2: '605mAh（連続通話 約6時間）', m1: '730mAh（待機時間 最大24時間）' },
  { item: '重さ', s4: '48g', r2: '約48g', m1: '47g' },
];

const faqData = [
  {
    q: 'myFirst Fone は今どの機種が買えますか？',
    a: 'myFirst Japan 公式ストアの見守りウォッチの一覧に掲載されているのは、Fone S4・Fone R2・Fone M1 の3機種です（2026年11月25日確認）。処分特価で販売されていた R1s は、全色が売り切れになっていました。R2 はアサイーとクリームホワイトが売り切れで、ブルーベリー・コットンキャンディー・マカロンピンクは購入できる状態でした。',
  },
  {
    q: '手持ちのSIMは使えますか？',
    a: 'S4 と R2 は eSIM の機種で、公式ストアでは myFirst のSIM専用と案内されています（S4「利用できるのはmyFirst Free SIMのみ」、R2「myFirst eSIM専用端末」）。M1 は nanoSIM の機種で、「一部のNano SIMに対応」「4G対応のSIMカードであれば使用可能ですが、すべてのSIMの動作を保証するものではありません」と記載されています。nanoSIM で使える回線はドコモ回線とソフトバンク回線に限られ、au回線と5G SIMは使えません。',
  },
  {
    q: '月額料金はいくらですか？',
    a: 'myFirst FreeSIM は、開通から1か月間無料で、その後は月額980円（税込）です。年間一括は8,580円（税込）と案内されています。回線はソフトバンクとドコモの回線を使います（2026年11月25日確認）。',
  },
  {
    q: '電話番号で電話をかけられますか？',
    a: '3機種とも、公式ストアで「データSIMのため、ダイヤル通話（電話番号での通話機能）は利用できません」と記載されています。通話やビデオ通話は、保護者のスマートフォンの専用アプリ（Circle アプリ）を通して行います。',
  },
  {
    q: 'みちびき（QZSS）に対応していますか？',
    a: 'myFirst の公式Q&Aでは、myFirst Fone は「みちびき」（QZSS）には対応していないと案内されています。位置情報の方式は機種ごとに異なり、S4 はGPSのL1とL5の2つの周波数に対応したデュアルバンドGPSを搭載しています。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function MyFirstFoneComparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'myFirst Fone 比較（S4・R2・M1）', datePublished: '2026-11-25', dateModified: '2026-11-25', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: '比較', href: '/compare/' }, { name: 'myFirst Fone 比較' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">比較</span>
            <span className="tag-pill bg-orange text-white">スマートウォッチ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">myFirst Fone 比較：S4・R2・M1の違い</h1>
          <p className="text-g600 text-lg">子ども向けスマートウォッチ myFirst Fone の現行3機種を、myFirst Japan 公式ストアの商品ページに掲載された仕様で比較しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：価格のM1、薄型のR2、カメラと測位のS4</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>M1（14,800円）</strong>：3機種で最も安く、nanoSIM のため一部の他社SIMも使えます。バッテリー容量は730mAhで3機種中最大です。カメラは2MPです。</li>
              <li>・<strong>R2（18,800円）</strong>：1.3インチの丸型に近い画面（360×360）で、500万画素カメラを搭載しています。myFirst eSIM 専用です。</li>
              <li>・<strong>S4（34,800円）</strong>：1.65インチ画面、5MPカメラ、GPSのL1・L5に対応したデュアルバンドGPSを搭載した上位機種です。myFirst Free SIM 専用です。</li>
              <li>・3機種とも電話番号での通話はできず、通話・ビデオ通話は保護者の専用アプリと行います。月額は myFirst FreeSIM の980円（税込）です。</li>
            </ul>
          </div>

          <h2 className="section-title">3機種の仕様比較</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">項目</th>
                  <th className="p-3 text-left border-b-2 border-blue">Fone S4</th>
                  <th className="p-3 text-left border-b-2 border-blue">Fone R2</th>
                  <th className="p-3 text-left border-b-2 border-blue">Fone M1</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.item} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">{r.item}</td>
                    <td className="p-3 text-g700">{r.s4}</td>
                    <td className="p-3 text-g700">{r.r2}</td>
                    <td className="p-3 text-g700">{r.m1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-3">
            出典：<a href={S4} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone S4 公式ストア</a>、<a href={R2} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone R2 公式ストア</a>、<a href={M1} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone M1 公式ストア</a>（{CHECKED}）。価格は通常価格です。公式ストアでは2026年11月30日までブラックフライデーのセールが告知されており、購入時の価格は公式ストアでご確認ください。
          </p>
          <ul className="space-y-1.5 text-sm text-g700 mb-8">
            <li>・S4 の商品ページの仕様表には、通信方式（4Gなど）の記載がありません。R2 の仕様表の通信方式は「GSM、WCDMA、Wi-Fi」と記載されています。</li>
            <li>・バッテリーの持ちは、R2 は連続通話時間（約6時間）、M1 は待機時間（最大24時間）が記載され、S4 は記載がないため、同じ条件では比べられません。R2 の商品ページのQ&Aでは、使用時間は位置情報の取得頻度・通話・画面の明るさ・通信環境などで変わると案内されています。</li>
          </ul>

          <h2 className="section-title">月額料金と使えるSIM</h2>
          <p className="text-sm text-g700 mb-3">
            通信には myFirst FreeSIM を使います。開通から1か月間は無料で、その後は月額980円（税込）、年間一括の場合は8,580円（税込）です。回線はソフトバンクとドコモの回線を使い、データ専用のため電話番号での通話はできません。
          </p>
          <p className="text-sm text-g700 mb-3">
            M1 のような nanoSIM 機種で他社のSIMを使う場合、対応する回線はドコモ回線とソフトバンク回線に限られ、au回線（タイプA）は使えません。5G SIM にも対応していません。
          </p>
          <p className="text-xs text-g400 mb-8">
            出典：<a href="https://jp.myfirst.tech/pages/myfirstfreesim" target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst FreeSIM</a>、<a href="https://jp.myfirst.tech/pages/myfirst-fone-about-sim-card" target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst nanoSIMについて</a>（{CHECKED}）。他社SIMの月額は各社の料金で、myFirst は動作確認済みのSIMの一覧を公開しています。
          </p>

          <h2 className="section-title">選び方の目安</h2>
          <ul className="space-y-2 text-sm text-g700 mb-8">
            <li>・<strong>費用を抑えたい</strong>：本体が最も安い M1 が候補です。月額は3機種とも myFirst FreeSIM なら同じ980円です。</li>
            <li>・<strong>手持ちの格安SIMを使いたい</strong>：nanoSIM の M1 だけが一部の他社SIMに対応しています（ドコモ回線・ソフトバンク回線のみ）。</li>
            <li>・<strong>写真・ビデオ通話の画質を重視したい</strong>：5MP（500万画素）カメラの S4・R2 が候補です。</li>
            <li>・<strong>位置の精度を重視したい</strong>：公式でデュアルバンドGPS（L1・L5）を案内しているのは S4 です。なお、3機種とも「みちびき」には対応していません。</li>
          </ul>
          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              機能と注意点の詳細は「<Link href="/review/myfirst-fone/" className="text-blue underline">myFirst Fone のレビュー</Link>」、旧機種は「<Link href="/review/myfirst-fone-r1s/" className="text-blue underline">myFirst Fone R1・R1s</Link>」、SIM の設定は「<Link href="/knowledge/myfirst-fone-sim/" className="text-blue underline">マイファーストフォンのSIM</Link>」をご覧ください。
            </p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
          <p className="text-xs text-g400 mt-3">
            出典は上記の myFirst Japan 公式ストアの各ページ、<a href="https://jp.myfirst.tech/collections/myfirst-fone-series" target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone シリーズ一覧</a>、<a href="https://jp.myfirst.tech/pages/fone-gps" target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone GPSのQ&amp;A</a>（{CHECKED}）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/myfirst-fone/" className="btn-primary">myFirst Fone のレビュー</Link>
              <Link href="/compare/size-weight/" className="btn-accent">サイズ・重さ比較</Link>
              <Link href="/compare/price/" className="btn-primary">月額料金比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
