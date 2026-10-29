import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'まもサーチ3の評判・口コミは？【2026年】月額528円・電池最大2か月のGPSの実力・料金を解説',
  description:
    'まもサーチ3（BBソフトサービス・現行第3世代）を公式サイトの情報（2026年10月29日確認）でレビューします。本体5,280円・月額528円、保護者は最大5人、電池は最大2か月。機能・料金・注意点を解説します。',
};

const faqData = [
  { q: 'まもサーチの最大見守り人数は何人ですか？', a: '公式サイトの記載では、1台につきメイン管理者1人とサブ管理者4人の最大5人の保護者で見守れます。1つのアプリには端末を最大10台まで登録できます（2026年10月29日確認）。' },
  { q: '月額料金はいくらですか？', a: '月額528円（税込）、または年額5,500円（税込）です。本体代金5,280円（税込）は別途必要です。公式FAQには「解約金はかかりません」と記載されています（2026年10月29日確認）。' },
  { q: '第3世代の改良点を教えてください。', a: '公式サイトの機能ページでは、バッテリーが「パワーアップ」したと記載されています。それ以外の改良点の一覧は公式サイトに見当たらないため、当サイトでは記載していません（2026年10月29日確認）。' },
  { q: 'バッテリーはどのくらい持ちますか？', a: 'バッテリー持ち優先モード（更新3〜4分）で最大2か月、頻度優先モード（更新1〜2分）で最大6週間です（公式・2026年10月29日確認）。使い方によって変動します。' },
  { q: 'トーク・通話機能はありますか？', a: '公式サイトにトーク・通話機能の記載はありません。本体のボタンを3秒間長押しすると、現在地を保護者のアプリに発信できます（2026年10月29日確認）。' },
  { q: 'どこで購入できますか？', a: '公式サイトのストア（https://mamosearch.jp/store/）から購入できます。ほかの販売店での取り扱いは、各販売店でご確認ください。' },
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

export default function MamosearchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "まもサーチ3 レビュー", "datePublished": "2026-03-15", "dateModified": "2026-10-29", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'まもサーチ' }]} />

      <section className="bg-green-light py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-green text-white">月額528円</span>
            <span className="tag-pill bg-blue text-white">第3世代</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            まもサーチのレビュー
          </h1>
          <p className="text-g600 text-lg">BBソフトサービスが提供する、月額528円のコンパクトなGPS端末です。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">まもサーチの概要</h2>
          <p className="text-g600 mb-6">
            まもサーチは、BBソフトサービスが提供する子供用GPS端末です。
            本体5,280円・月額528円（年額5,500円）で、1台につき最大5人の保護者（メイン管理者1人＋サブ管理者4人）が位置を確認できます。
            電池はバッテリー持ち優先モードで最大2か月です。
            記載はいずれも公式サイトで2026年10月29日に確認した内容です。
          </p>

          <div className="grid gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'BBソフトサービス'],
                    ['世代', '第3世代（最新）'],
                    ['月額料金', '528円（税込）／年額5,500円（税込）'],
                    ['本体価格', '5,280円（税込）'],
                    ['測位方式', '衛星測位システム＋周辺のWi-Fi情報など'],
                    ['バッテリー', '最大2か月（バッテリー持ち優先モード）／最大6週間（頻度優先モード）'],
                    ['見守れる保護者', '1台につき最大5人（メイン1人＋サブ4人）'],
                    ['登録できる端末', '1つのアプリに最大10台'],
                    ['通信回線', 'SoftBank LTE'],
                    ['防水', '生活防水・防塵（IP65）'],
                    ['大きさ・重量', '49×49×15.5mm・39g'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-g100">
                      <td className="py-2 font-semibold text-g700 w-1/3">{k}</td>
                      <td className="py-2 text-g600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '', title: '最大5人の保護者で見守り', desc: 'メイン管理者1人とサブ管理者4人で、同じ端末の位置を確認できます。' },
              { icon: '', title: '現在地確認', desc: 'アプリから、リアルタイムでお子さまの位置を確認できます。' },
              { icon: '', title: 'エリア通知', desc: '設定したエリアへの出入りを自動で通知します。登下校の確認に役立ちます。' },
              { icon: '', title: '移動履歴', desc: '過去90日前までの移動履歴を検索できます（公式）。' },
              { icon: '', title: '現在地の発信', desc: '本体のボタンを3秒間長押しすると、現在地を保護者のアプリに発信します（公式）。' },
              { icon: '', title: '長持ちバッテリー', desc: 'バッテリー持ち優先モードで最大2か月持続します（公式）。' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-g600">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">利点と欠点</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">利点</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・月額528円（年額5,500円）・解約金なし</li>
                <li>・電池が最大2か月（バッテリー持ち優先モード）</li>
                <li>・39gの小型・軽量設計</li>
                <li>・保護者5人まで位置を共有できる</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">欠点</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・トーク・通話機能なし</li>
                <li>・SOS専用のボタンは無い（ボタン長押しで現在地を発信）</li>
                <li>・AI行動学習などの高度な機能なし</li>
                <li>・バッテリーは使い方次第で変動</li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-green-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">まもサーチが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">月額528円で、保護者5人まで位置を共有できる、位置確認に絞った機種です。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/sayuu/" className="btn-accent">次: SayuU（サユー）</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
