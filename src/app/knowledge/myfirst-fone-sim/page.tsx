import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { MyfirstAffText } from '@/components/AffiliateMyfirst';

export const metadata: Metadata = {
  title: 'myFirst Fone（マイファーストフォン）のSIM｜myFirst FreeSIMと他社SIMの対応表・機種別の開通と解約【2026年11月】',
  description:
    'myFirst Foneで使えるSIMを公式の対応SIMページとFAQで整理しています。myFirst FreeSIM（日本で開通時 月額980円・データ無制限）、eSIM機種とnanoSIM機種の違い、他社SIMの動作確認状況、開通と解約の方法をまとめています。',
  keywords: ['マイファーストフォン SIM', 'myFirst Fone SIM', 'myFirst FreeSIM', '格安SIM', 'eSIM', 'nanoSIM'],
};

const FAQ_URL = 'https://jp.myfirst.tech/pages/myfirst-fone-faq';
const SIMCARD_URL = 'https://jp.myfirst.tech/pages/myfirst-fone-about-sim-card';
const NANO_URL = 'https://jp.myfirst.tech/pages/manual-nanosim';
const FREESIM_URL = 'https://jp.myfirst.tech/pages/myfirstfreesim';
const MIGRATION_URL = 'https://jp.myfirst.tech/blogs/myfirst-official-blog/myfirst-free-sim-migration';
const CHECKED = '2026年11月17日確認';

const models: [string, string, string, string][] = [
  ['S4・R2・S3+', 'eSIM', 'できない（myFirst FreeSIMのみ）', 'Circleアプリで開通・解約'],
  ['S3c', 'nanoSIM（取り外し不可）', 'できない', '—'],
  ['R1s・R1c・S3・R1', 'nanoSIM', 'できる（対応表のSIM）', '公式サイトの「開通・解約ページ」で開通・解約（FreeSIMの場合）'],
];

const otherSims: [string, string, string, string][] = [
  ['myFirst FreeSIM', '—（音声回線なし）', '◎ 動作保証あり', 'ソフトバンク回線・NTTドコモ回線（自動で切り替え）'],
  ['Y!mobile', '△', '○', 'ソフトバンク回線'],
  ['Softbank シンプルスタイル4G', '△', '○', 'ソフトバンク回線'],
  ['BIC SIM', '×', '○', 'NTTドコモ回線'],
  ['eximo', '×', '○', 'NTTドコモ回線'],
  ['BIGLOBEモバイル', '×', '○', 'NTTドコモ回線'],
  ['y.u mobile', '×', '○', 'NTTドコモ回線'],
];

const faqData = [
  {
    q: 'myFirst FreeSIM の月額料金はいくらですか？',
    a: '公式FAQでは、日本でSIMを開通した場合のデータ通信料は月額980円と案内されています。開通した国によって通信料金は異なります。課金は開通手続きをした日を基準とする「契約日基準」で、日割りはありません（2026年11月17日確認）。',
  },
  {
    q: 'myFirst FreeSIM で電話番号を使った通話はできますか？',
    a: 'できません。myFirst FreeSIM は電話番号のないデータSIMです。音声通話とビデオ通話は、保護者の myFirst Circle アプリとの間でデータ通信を使って行います。公式の取扱説明書では、IP通話のため通話のたびの通話料はかからず、基本料金のみで利用できると説明されています。',
  },
  {
    q: '手持ちの格安SIMを入れられますか？',
    a: 'SIMを入れ替えられるのは nanoSIM 機種（R1・R1s・R1c・S3）のみです。eSIM 機種（R2・S3+・S4）と S3c は変更できません。nanoSIM 機種でも、使えるのはドコモ回線とソフトバンク回線に限られ、au回線は使えません。公式の動作確認表にないSIMは、動作保証・サポートの対象外です。',
  },
  {
    q: 'R1s で他社の音声SIMを使えば電話番号で通話できますか？',
    a: '公式の対応表では、Y!mobile SIM の音声通話は M1・S3 で動作する一方、R1s・R1c では動作しないことを確認したと記載されています（2026年4月時点）。2026年3月時点で動作していた製品が4月時点で動作しなくなった例もあると案内されているため、購入前に公式ページの最新の表をご確認ください。',
  },
  {
    q: 'myFirst FreeSIM を他の端末に差し替えるとどうなりますか？',
    a: 'myFirst FreeSIM は設定されたデバイス以外では使えず、対象外の機器で認識させるとSIMがロックされます。ロック解除の手数料は3,300円と公式の取扱説明書に記載されています。',
  },
  {
    q: '「SIM移行のご案内」が届きました。',
    a: 'myFirst Japan は2026年8月20日から、myFirst FreeSIM を利用中の一部の方に、通信サービスを続けて使うためのSIM移行の案内を、モデル別に順次送っていると公式ブログで告知しています（2026年10月8日追記）。案内が届いた方は記載の手順に沿って作業し、届いていない方は作業不要とされています。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function MyfirstFoneSimPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'myFirst Fone（マイファーストフォン）のSIM', datePublished: '2026-11-17', dateModified: '2026-11-17', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'myFirst Fone のSIM' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">SIM</span>
            <span className="tag-pill bg-blue text-white">myFirst Fone</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">myFirst Fone（マイファーストフォン）で使えるSIMと開通・解約の方法</h1>
          <p className="text-g600 text-lg">myFirst Japan 公式の「対応SIMカード」ページ・FAQ・取扱説明書の記載をもとに、機種ごとに使えるSIMと手続きを整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：基本は専用の myFirst FreeSIM（日本で開通した場合 月額980円）。他社SIMを入れられるのは nanoSIM 機種だけです</h2>
            <p className="text-g600">
              現行の S4・R2 などの <strong>eSIM 機種は myFirst FreeSIM 以外は使えません</strong>。R1・R1s・R1c・S3 の <strong>nanoSIM 機種</strong>は他社SIMに入れ替えられますが、<strong>ドコモ回線・ソフトバンク回線のみ</strong>（au回線は不可）、データ通信量3GB以上のプランが条件で、動作保証があるのは myFirst FreeSIM だけです。myFirst FreeSIM は電話番号のないデータSIMで、通話はアプリ経由になります。
            </p>
          </div>

          <h2 className="section-title">機種別：SIMの種類と入れ替えの可否</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">機種</th>
                  <th className="p-3 text-left border-b-2 border-blue">SIMの種類</th>
                  <th className="p-3 text-left border-b-2 border-blue">他社SIMへの変更</th>
                  <th className="p-3 text-left border-b-2 border-blue">myFirst FreeSIMの手続き</th>
                </tr>
              </thead>
              <tbody>
                {models.map(([a, b, c, d]) => (
                  <tr key={a} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">{a}</td>
                    <td className="p-3 text-g700">{b}</td>
                    <td className="p-3 text-g700">{c}</td>
                    <td className="p-3 text-g700">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：myFirst Japan「<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone よくある質問</a>」（対応しているSIMカードは？・myFirst FreeSIM開通方法・{CHECKED}）。M1 は公式FAQの最新バージョン一覧で nanoSIM 機種に分類されていますが、SIMの入れ替えができる機種の一覧には含まれていないため、表には載せていません。
          </p>

          <h2 className="section-title">myFirst FreeSIM の主な条件</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {[
                  ['料金', '日本で開通した場合 データ通信料 月額980円（開通した国により異なる）'],
                  ['データ通信量', '無制限（nanoSIMの取扱説明書の記載）'],
                  ['回線', 'ソフトバンク回線・NTTドコモ回線に対応し、状況に応じて自動で選択'],
                  ['電話番号', 'なし（データSIM）。通話・ビデオ通話はCircleアプリ経由'],
                  ['課金日', '開通手続きをした日が毎月の契約更新日。日割りなし。翌月に同じ日付がない場合は月末が請求日'],
                  ['解約', 'いつでも可能。契約期間の縛り・解約違約金なし。電話では受け付けない。nanoSIMの返却は不要'],
                  ['ロック', '設定されたデバイス以外で認識させるとロック。解除手数料3,300円'],
                  ['支払い', 'クレジットカード（カード情報の変更は公式FAQ記載の専用ページから）'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-gray-100 align-top">
                    <th className="p-3 text-left text-g800 w-1/4 bg-blue-light/40">{k}</th>
                    <td className="p-3 text-g700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：myFirst Japan「<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone よくある質問</a>」「<a href={NANO_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">【取扱説明書】myFirst Free SIM nanoSIMについて</a>」「<a href={SIMCARD_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone 対応SIMカード</a>」（{CHECKED}）
          </p>

          <h2 className="section-title">他社SIMの動作確認状況（nanoSIM機種）</h2>
          <p className="text-sm text-g700 mb-3">myFirst Japan が自社で確認した結果として公開している表です。記号は ◎＝完全に動作（動作保証あり）、○＝ある時点で動作を確認（保証なし）、△＝一部機種で動作、×＝動作を確認できず、を表します。</p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">SIMカード</th>
                  <th className="p-3 text-left border-b-2 border-blue">音声通話SIM（音声通話）</th>
                  <th className="p-3 text-left border-b-2 border-blue">データ通信SIM（ビデオ通話・アプリ通話）</th>
                  <th className="p-3 text-left border-b-2 border-blue">回線</th>
                </tr>
              </thead>
              <tbody>
                {otherSims.map(([a, b, c, d]) => (
                  <tr key={a} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">{a}</td>
                    <td className="p-3 text-g700">{b}</td>
                    <td className="p-3 text-g700">{c}</td>
                    <td className="p-3 text-g700">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="space-y-1 text-sm text-g700 mb-3">
            <li>・対応回線はドコモ回線とソフトバンク回線（タイプD・タイプS）に限られ、<strong>au回線（タイプA）は使えません</strong>。</li>
            <li>・データ通信量<strong>3GB以上</strong>のプランでの利用が案内されています。</li>
            <li>・<strong>5G SIMには非対応</strong>です。nanoSIM 機種は eSIM（nanoSIM＋eSIMのデュアルSIM）にも対応していません。</li>
            <li>・Y!mobile SIM の音声通話は M1・S3 で動作、R1s・R1c では動作しないことを確認したと記載されています（2026年4月時点）。</li>
            <li>・表にないSIMは動作確認されておらず、問い合わせ・不具合のサポートも受けられません。SIMによっては電池の消耗が速くなることがあるとも案内されています。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：myFirst Japan「<a href={SIMCARD_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone 対応SIMカード</a>」（{CHECKED}）。各社との提携による認証ではなく、SIM側の仕様変更で対応から外れる場合があると明記されています。
          </p>

          <h2 className="section-title">myFirst FreeSIM の開通方法</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-3">
            <div className="card-hover p-5">
              <h3 className="font-bold text-g800 mb-2">eSIM機種（S4・R2・S3+など）</h3>
              <ul className="space-y-1 text-sm text-g700">
                <li>・電源を入れるとすぐにデータ通信できる状態になっています。</li>
                <li>・Circleアプリでペアリング後、「設定」→「SIM有効手続き」、または「設定」→ キッズアカウント →「このデバイスにSIMカードを有効にする」から手続きします。</li>
                <li>・期限内に手続きしない場合や支払いが完了しない場合は自動解約となり、再開通に3,300円（税込）の手数料がかかる場合があります。</li>
              </ul>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-g800 mb-2">nanoSIM機種（R1s・R1c・S3など）</h3>
              <ul className="space-y-1 text-sm text-g700">
                <li>・<strong>端末を起動する前</strong>に、公式サイトの「開通・解約ページ」で手続きします（Circleアプリからは契約を確認できません）。</li>
                <li>・手続きには、商品パッケージ底面のバーコード付近にある<strong>IMEI番号</strong>が必要です。</li>
                <li>・初回のネットワーク検出には20分以上かかる場合があります。</li>
                <li>・SIMは番号が書かれていない面を画面側に向けて挿入し、再起動します（Wi-Fi接続中は先にWi-Fiをオフにします）。</li>
              </ul>
            </div>
          </div>
          <div className="card-hover p-5 mb-3 bg-orange-light/40">
            <p className="text-sm text-g700">
              <strong>eSIMの手続き期限について</strong>：公式FAQには「起動後3日以内に開通手続き」とする記載と、「初めて電源を入れた日を含む30日間が無料期間で、30日以内にアプリから開通」とする記載（R2のよくある質問）があり、案内が分かれています（{CHECKED}）。どちらの場合も、電源を入れたら早めにペアリングと開通を済ませることをおすすめします。R1 や一部の販売店で扱う商品には myFirst FreeSIM が付属していない場合があり、その場合は上記の手続きができません。
            </p>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：myFirst Japan「<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone よくある質問</a>」「<a href={NANO_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">【取扱説明書】myFirst Free SIM nanoSIMについて</a>」（{CHECKED}）
          </p>

          <h2 className="section-title">myFirst FreeSIM の解約方法</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>eSIM</strong>：端末をペアリングしていた Circle アプリから手続きします。公式サイトでは手続きできません。</li>
            <li>・<strong>nanoSIM</strong>：公式サイトの「<a href={FREESIM_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">開通・解約ページ</a>」で、「お客様ダッシュボード」からログインして手続きします。</li>
            <li>・解約は電話では受け付けていません。手順が分からない場合はメール（jp@myfirst.tech）での問い合わせが案内されています。</li>
            <li>・解約手続き後も、契約更新日の前日まではデータ通信を利用できます。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：myFirst Japan「<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone よくある質問</a>」「<a href={NANO_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">【取扱説明書】myFirst Free SIM nanoSIMについて</a>」（{CHECKED}）
          </p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              <strong>ご注意</strong>：本ページは myFirst Japan 公式ページの記載を整理したもので、料金・対応SIM・手続きは変更される場合があります。myFirst FreeSIM 利用中の一部の方には、2026年8月から順次SIM移行の案内が送られています（<a href={MIGRATION_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">公式ブログ</a>）。本体の料金・機能は「<Link href="/review/myfirst-fone/" className="text-blue underline">myFirst Fone のレビュー</Link>」、アプリの設定は「<Link href="/knowledge/myfirst-circle/" className="text-blue underline">myFirst Circleアプリとは</Link>」をご覧ください。
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
            出典：myFirst Japan「<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Fone よくある質問</a>」「<a href={SIMCARD_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">対応SIMカード</a>」「<a href={NANO_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">nanoSIM取扱説明書</a>」「<a href={MIGRATION_URL} target="_blank" rel="noopener noreferrer" className="text-blue underline">myFirst Free SIM移行のご案内</a>」（{CHECKED}）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="mb-6"><MyfirstAffText /></div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/myfirst-fone/" className="btn-primary">myFirst Fone のレビュー</Link>
              <Link href="/knowledge/myfirst-circle/" className="btn-accent">myFirst Circleアプリ</Link>
              <Link href="/compare/cost/" className="btn-primary">月額料金を比較する</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
