import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'みてねみまもりGPSの解約方法｜「次回支払い時」と「今すぐ」の違い・解約後に再利用できない点【2026年11月】',
  description:
    'みてねみまもりGPSの解約方法を、公式ヘルプセンターの記載にもとづいて整理しています。「月額利用登録の解除」の手順、支払い方法による解約方法の違い、日割りがない点、解約後はSIMが無効になり再利用できない点、端末の処分方法をまとめています。',
  keywords: ['みてねみまもりGPS', '解約', '解約方法', '再契約', '退会', '処分'],
};

const HELP = 'https://help.gps.mitene.us/hc/ja/articles/';

const faqData = [
  {
    q: '解約した端末を、あとでもう一度使えますか？',
    a: '使えません。公式ヘルプによると、解約すると端末内のSIMが無効化されるため、再契約や再利用はできません。来年もう一度使う可能性がある場合は、解約の前にご家庭でご検討ください。',
  },
  {
    q: '月の途中で解約すると日割りになりますか？',
    a: '公式ヘルプでは、月額通信費の日割り計算はないと案内されています。クレジットカード払いの場合は「次回支払い時に解約」を選ぶと、次回の支払期限まで端末を使い続けられます。',
  },
  {
    q: '解約すると位置情報の履歴はどうなりますか？',
    a: '公式ヘルプによると、解約後は位置情報とお客様の情報がサーバーから削除されます。履歴を残したい場合は、解約前にご確認ください。',
  },
  {
    q: '祖父母など「見守っている人」が見守りをやめるには？',
    a: '見守っている人（管理者以外）は、アプリのメニュー（≡）から端末を選び「接続解除」をタップします。これは見守りの接続をやめる操作で、端末の契約は解約されません。',
  },
  {
    q: '解約後の端末はどう捨てればよいですか？',
    a: '端末にはリチウムイオン電池が内蔵されています。処分方法はお住まいの自治体のルールに従ってください。公式ヘルプでは、多くの自治体で「使用済み小型家電」として回収していることが案内されています。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function MiteneCancelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'みてねみまもりGPSの解約方法', datePublished: '2026-11-15', dateModified: '2026-11-15', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち', href: '/knowledge/' }, { name: 'みてねみまもりGPSの解約方法' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">解約</span>
            <span className="tag-pill bg-blue text-white">みてねみまもりGPS</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">みてねみまもりGPSの解約方法と注意点</h1>
          <p className="text-g600 text-lg">公式ヘルプセンターの記載にもとづき、解約の手順と、解約前に知っておきたい点を整理しています。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：管理者のアプリで「月額利用登録の解除」を行います。解約した端末は再利用できません</h2>
            <p className="text-g600">
              解約は、端末の<strong>管理者</strong>がアプリのメニュー（≡）から端末を選び、<strong>「月額利用登録の解除」</strong>をタップして行います。クレジットカード払いなら<strong>「次回支払い時に解約」</strong>を選ぶと、支払済みの期間を最後まで使えます。解約すると端末のSIMが無効になり、<strong>再契約・再利用はできません</strong>。
            </p>
          </div>

          <h2 className="section-title">解約の手順</h2>
          <ol className="space-y-2 text-sm text-g700 mb-3 list-decimal pl-5">
            <li>端末の管理者として登録しているアカウントで、みてねみまもりGPSアプリを起動します。</li>
            <li>画面左上のメニュー（≡）を開き、解約する端末を選びます。</li>
            <li>「月額利用登録の解除」をタップします。</li>
            <li>お支払い方法に応じて表示される解約方法（下表）を選びます。</li>
          </ol>
          <p className="text-xs text-g400 mb-8">
            出典：みてねみまもりGPS ヘルプセンター「<a href={`${HELP}900004441006`} target="_blank" rel="noopener noreferrer" className="text-blue underline">解約方法を教えてください。</a>」（2026年11月15日確認）
          </p>

          <h2 className="section-title">お支払い方法による解約方法の違い</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">お支払い方法</th>
                  <th className="p-3 text-left border-b-2 border-blue">選べる解約方法</th>
                  <th className="p-3 text-left border-b-2 border-blue">解約後の端末</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">クレジットカード払い</td>
                  <td className="p-3 text-g700">「次回支払い時に解約」または「今すぐ解約」</td>
                  <td className="p-3 text-g700">「次回支払い時に解約」は次回の支払期限まで位置情報を送信し、以降の月額料金は発生しません。「今すぐ解約」はただちに利用を停止します。</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="p-3 font-bold text-g800">キャリア決済（ソフトバンクまとめて支払い／au PAY（auかんたん決済）／ドコモ払い）</td>
                  <td className="p-3 text-g700">「今すぐ解約」のみ</td>
                  <td className="p-3 text-g700">ただちに利用を停止します。</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：みてねみまもりGPS ヘルプセンター「<a href={`${HELP}900004441006`} target="_blank" rel="noopener noreferrer" className="text-blue underline">解約方法を教えてください。</a>」「<a href={`${HELP}900004440946`} target="_blank" rel="noopener noreferrer" className="text-blue underline">月額通信費の支払い方法を教えてください。</a>」（2026年11月15日確認）
          </p>

          <h2 className="section-title">解約する前に確認しておきたい5つの点</h2>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>再利用できない</strong>：解約すると端末内のSIMが無効化され、同じ端末で再契約・再利用はできません。</li>
            <li>・<strong>日割りはない</strong>：月額通信費の日割り計算はありません。課金日はお支払い情報を登録した日と同じ日付です（クレジットカード払いの場合）。</li>
            <li>・<strong>位置データは削除される</strong>：解約後、位置情報とお客様の情報はサーバーから削除されます。</li>
            <li>・<strong>アカウント削除は別の操作</strong>：アカウント設定＞アカウント削除で行います。契約中の月額利用登録がすべて解約されるまで、アカウントは削除できません。</li>
            <li>・<strong>見守る側の「接続解除」は解約ではない</strong>：管理者以外の家族が見守りをやめる操作で、契約はそのまま残ります。</li>
          </ul>
          <p className="text-xs text-g400 mb-8">
            出典：みてねみまもりGPS ヘルプセンター「<a href={`${HELP}900005419603`} target="_blank" rel="noopener noreferrer" className="text-blue underline">一度解約したGPS端末を、再度利用できますか？</a>」「<a href={`${HELP}58342647745305`} target="_blank" rel="noopener noreferrer" className="text-blue underline">クレジットカード決済の請求日を教えてください。</a>」「<a href={`${HELP}900005419443`} target="_blank" rel="noopener noreferrer" className="text-blue underline">解約後の位置情報データはどうなりますか？</a>」「<a href={`${HELP}900004440066`} target="_blank" rel="noopener noreferrer" className="text-blue underline">退会方法を教えてください。</a>」（2026年11月15日確認）
          </p>

          <div className="card-hover p-5 mb-8 bg-orange-light/40">
            <p className="text-sm text-g700">
              <strong>解約ではなく不具合でお困りの場合</strong>：位置が更新されない原因の多くは、静止中の送信停止・電源オフモード・決済エラーなどで、端末の故障ではありません。解約の前に「<Link href="/knowledge/mitene-not-updating/" className="text-blue underline">みてねみまもりGPSが動かない・位置が更新されない原因と対処</Link>」もご確認ください。本ページは公式ヘルプセンターの記載を整理したもので、手順は変更される場合があります。
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
            出典：みてねみまもりGPS ヘルプセンター「<a href={`${HELP}900005419203`} target="_blank" rel="noopener noreferrer" className="text-blue underline">みまもりをやめる方法を教えてください。</a>」「<a href={`${HELP}900005293746`} target="_blank" rel="noopener noreferrer" className="text-blue underline">GPS端末の解約後の処分方法（捨て方）を教えてください。</a>」ほか（2026年11月15日確認）
          </p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/review/mitene/" className="btn-primary">みてねみまもりGPSの詳細</Link>
              <Link href="/purpose/no-contract/" className="btn-accent">縛りなし・解約金なしで選ぶ</Link>
              <Link href="/knowledge/summer-short-term/" className="btn-primary">短期利用・解約の比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
