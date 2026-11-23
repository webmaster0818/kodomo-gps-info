import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '防犯ブザー付きのGPS・キッズケータイ5機種｜作動時に保護者へ届く内容と音量を公式で比較【2026年11月】',
  description:
    '防犯ブザーを搭載した子ども用GPS端末・キッズケータイ5機種（みてねトークPlus・KY-41C・mamorino6・キッズフォン4・キッズフォン3）を各社公式の記載で比較しています。作動時に保護者へ届く内容、音量の表記、月額と、ブザーが無い主な機種をまとめています。',
  keywords: ['防犯ブザー GPS', '防犯ブザー付きGPS', 'キッズケータイ 防犯ブザー', 'みてねみまもりGPS トークPlus'],
};

const CHECKED = '2026年11月24日確認';

type Row = { name: string; type: string; notify: string; volume: string; monthly: string; src: string; srcLabel: string; href?: string };

const rows: Row[] = [
  {
    name: 'みてねみまもりGPS トークPlus（MB06）',
    type: 'GPS端末（ボイスメッセージ対応）',
    notify: 'スマホの「みてねみまもりGPS」アプリに通知。作動した時刻・場所は移動履歴で確認',
    volume: '1m先で約85dB（音量は変更不可）。30秒鳴って自動停止',
    monthly: '月額通信費748円（本体7,480円）',
    src: 'https://mitene.us/gps/talk_plus',
    srcLabel: 'みてねみまもりGPS トークPlus 公式ページ・ヘルプ',
    href: '/review/mitene/',
  },
  {
    name: 'キッズケータイ KY-41C（ドコモ）',
    type: 'キッズケータイ',
    notify: '緊急連絡先の保護者に電話を発信できる。居場所はイマドコサーチ（月額330円）で確認',
    volume: '約100dB（本体から10cmの場合）',
    monthly: 'キッズケータイプラン550円',
    src: 'https://www.docomo.ne.jp/product/ky41c/',
    srcLabel: 'ドコモ KY-41C 製品ページ',
    href: '/review/ky-41c/',
  },
  {
    name: 'mamorino6（au）',
    type: 'キッズケータイ',
    notify: '保護者に自動で電話を発信し、位置情報とカメラで撮影したその場の画像を送信。ココセコム連携も可能',
    volume: '公式に数値の記載なし（「大音量」と案内）',
    monthly: 'ジュニアケータイプランME 847円（au PAY カードお支払い割で660円）',
    src: 'https://www.au.com/mobile/product/featurephone/mamorino6/',
    srcLabel: 'au mamorino6 製品ページ',
    href: '/review/mamorino6/',
  },
  {
    name: 'キッズフォン4（ソフトバンク）',
    type: 'キッズケータイ',
    notify: '位置情報と、周囲を撮影した写真を保護者に自動で送信',
    volume: '公式に数値の記載なし',
    monthly: '基本プラン2（キッズフォン）748円＋位置ナビ220円（保護者側）',
    src: 'https://www.softbank.jp/mobile/products/mimamorimobile/kids-phone4/',
    srcLabel: 'ソフトバンク キッズフォン4 製品ページ',
  },
  {
    name: 'キッズフォン3（ソフトバンク）',
    type: 'キッズケータイ',
    notify: '位置情報と、周囲を撮影した写真を保護者に自動で送信',
    volume: '公式に数値の記載なし',
    monthly: '基本プラン2（キッズフォン）748円＋位置ナビ220円（保護者側）',
    src: 'https://www.softbank.jp/mobile/products/mimamorimobile/kids-phone3/',
    srcLabel: 'ソフトバンク キッズフォン3 製品ページ',
    href: '/review/kids-phone3/',
  },
];

const faqData = [
  {
    q: '防犯ブザー付きのGPS端末（通話できない端末）はありますか？',
    a: '当サイトで公式を確認した範囲では、みてねみまもりGPS トークPlus（MB06）が防犯ブザーを搭載しています。ブザーが作動すると、保護者のスマホのアプリに通知が届きます。電話をかける機能はなく、公式では「キッズ用携帯のようなリアルタイム通話には対応していません」と案内されています（2026年11月24日確認）。',
  },
  {
    q: '音量の数値はそのまま比べられますか？',
    a: '比べられません。ドコモ KY-41C の約100dBは「本体から10cmの場合」、みてねみまもりGPS トークPlus の約85dBは「1m先」の値と、それぞれ測る距離が違うためです。au・ソフトバンクの製品ページには音量の数値が記載されていませんでした。',
  },
  {
    q: 'あんしんウォッチャーやBoTトークに防犯ブザーはありますか？',
    a: 'ありません。あんしんウォッチャーは、公式FAQで「防犯ブザーのように音を鳴らす機能はございません」と案内されています。BoTトークは、公式FAQの「防犯ブザー機能はついていないのですか？」という質問で、搭載していない理由を説明しています。',
  },
  {
    q: '防犯ブザーは電源が切れていても鳴りますか？',
    a: 'みてねみまもりGPS トークPlus は、電源オフ時には鳴らないと公式ヘルプに記載されています。ほかの機種も、充電切れの状態では保護者への通知や送信は行えないため、日ごろの充電の習慣が大切です。',
  },
  {
    q: 'ドコモのSK-41Dに防犯ブザーはありますか？',
    a: 'ドコモの製品ページでは、緊急時の機能として本体側面の「SOSボタン」（緊急連絡先の保護者に発信）が案内されており、防犯ブザーの記載は見当たりませんでした。詳しくは「キッズケータイ コンパクト SK-41D のレビュー」をご覧ください。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function BouhanBuzzerGpsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: '防犯ブザー付きのGPS・キッズケータイ5機種', datePublished: '2026-11-24', dateModified: '2026-11-24', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち情報', href: '/knowledge/' }, { name: '防犯ブザー付きのGPS・キッズケータイ' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">防犯</span>
            <span className="tag-pill bg-blue text-white">機種比較</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">防犯ブザー付きのGPS・キッズケータイ5機種</h1>
          <p className="text-g600 text-lg">防犯ブザーを搭載した5機種について、ブザーを鳴らしたときに保護者へ何が届くかを、各社公式の記載で比較しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：ブザーを鳴らした後に「保護者が何を受け取るか」で選ぶのが分かりやすい方法です</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>電話で状況を聞きたい</strong>：作動時に保護者へ電話を発信する KY-41C（ドコモ）・mamorino6（au）。</li>
              <li>・<strong>写真と位置で状況を見たい</strong>：撮影した画像と位置を送る mamorino6・キッズフォン4・キッズフォン3。</li>
              <li>・<strong>通話できない端末で、ブザーとGPSを1台にまとめたい</strong>：作動をアプリに通知する みてねみまもりGPS トークPlus（MB06）。月額748円です。</li>
            </ul>
          </div>

          <h2 className="section-title">防犯ブザーを搭載した5機種の比較</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">機種</th>
                  <th className="p-3 text-left border-b-2 border-blue">作動時に保護者へ届くもの</th>
                  <th className="p-3 text-left border-b-2 border-blue">公式の音量表記</th>
                  <th className="p-3 text-left border-b-2 border-blue">月額（税込）</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.name} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">
                      {r.href ? <Link href={r.href} className="text-blue underline">{r.name}</Link> : r.name}
                      <div className="text-xs font-normal text-g500 mt-1">{r.type}</div>
                    </td>
                    <td className="p-3 text-g700">{r.notify}</td>
                    <td className="p-3 text-g700">{r.volume}</td>
                    <td className="p-3 text-g700">{r.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：{rows.map((r, i) => (
              <span key={r.src}>
                {i > 0 && '、'}
                <a href={r.src} target="_blank" rel="noopener noreferrer" className="text-blue underline">{r.srcLabel}</a>
              </span>
            ))}、<a href="https://help.gps.mitene.us/hc/ja/articles/54194424190489" target="_blank" rel="noopener noreferrer" className="text-blue underline">みてねみまもりGPS ヘルプ「トークPlus 防犯ブザー機能について」</a>、<a href="https://www.au.com/mobile/charge/juniorphone-me/" target="_blank" rel="noopener noreferrer" className="text-blue underline">au ジュニアケータイプランME</a>、<a href="https://www.softbank.jp/mobile/price_plan/kids-phone/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ソフトバンク 基本プラン2（キッズフォン）</a>（{CHECKED}）。本体代金はみてねのみ公式の定価を記載し、キャリアの機種は購入方法や時期で異なるため掲載していません。
          </p>

          <h2 className="section-title">音量の数値を比べるときの注意</h2>
          <p className="text-sm text-g700 mb-8">
            公式の音量表記は、測る距離が機種によって異なります。ドコモ KY-41C の約100dBは「本体からの距離が10cmの場合」、みてねみまもりGPS トークPlus の約85dBは「1m先」の値です。距離が違うため、数値の大小だけで音の大きさを比べることはできません。au（mamorino6）とソフトバンク（キッズフォン4・キッズフォン3）は、製品ページに音量の数値が記載されていませんでした。実際の聞こえ方は周囲の騒音や遮蔽物で変わるため、購入後にお子さまと一緒に鳴らし方・止め方を確認しておくことをおすすめします。
          </p>

          <h2 className="section-title">防犯ブザーが付いていない主な機種</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>あんしんウォッチャー（au）</strong>：公式FAQで「防犯ブザーのように音を鳴らす機能はございません」と案内されています。本体ボタンを3秒長押しすると、スマホへの通知と連続測位を行えます。</li>
            <li>・<strong>BoTトーク</strong>：公式FAQの「防犯ブザー機能はついていないのですか？」で、搭載していない理由を説明しています。</li>
            <li>・<strong>キッズケータイ コンパクト SK-41D（ドコモ）</strong>：製品ページに防犯ブザーの記載は見当たらず、緊急時の機能としてSOSボタン（保護者への発信）が案内されています。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：<a href="https://homeiot.kddi.com/anshinwatcher/kids/faq/014.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">あんしんウォッチャー よくあるご質問「防犯ブザー機能はついていますか？」</a>、<a href="https://homeiot.kddi.com/anshinwatcher/kids/faq/036.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">同「測位間隔」</a>、<a href="https://www.bsize.com/bot/talk/faq" target="_blank" rel="noopener noreferrer" className="text-blue underline">BoTトーク よくある質問</a>、<a href="https://www.docomo.ne.jp/product/sk41d/" target="_blank" rel="noopener noreferrer" className="text-blue underline">ドコモ SK-41D 製品ページ</a>（{CHECKED}）
          </p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              防犯ブザーを別に持たせる場合は、GPS端末は軽い機種を選ぶ方法もあります。重さの比較は「<Link href="/compare/size-weight/" className="text-blue underline">サイズ・重さ比較</Link>」、SOS機能や危険エリア通知を含む防犯面の比較は「<Link href="/purpose/safety/" className="text-blue underline">防犯・安全重視で選ぶ</Link>」、通話の要否は「<Link href="/compare/gps-vs-phone/" className="text-blue underline">GPSとキッズケータイの比較</Link>」をご覧ください。
            </p>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
          <p className="text-xs text-g400 mt-3">出典は上記の各社公式ページ（{CHECKED}）</p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/stranger-danger/" className="btn-primary">不審者対策にGPSは有効？</Link>
              <Link href="/review/kids-phone/" className="btn-accent">キッズケータイとGPS端末の比較</Link>
              <Link href="/purpose/safety/" className="btn-primary">防犯・安全重視で選ぶ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
