import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'どこかなGPS 徹底レビュー | ソフトバンク品質の安心見守り',
  description:
    'どこかなGPS（ソフトバンク）の機能・料金・口コミを徹底レビュー。月額528円、キャリア品質の安定通信、コンパクト設計で持ち運びやすい。ソフトバンクユーザー以外も利用可能。',
};

const faqData = [
  { q: 'どこかなGPSの月額料金はいくら？', a: '月額528円（税込）です。ソフトバンク回線を利用した安定した通信が可能で、契約期間の縛りや解約金はありません。' },
  { q: 'ソフトバンクユーザーでなくても使えますか？', a: 'はい、ソフトバンクユーザー以外の方でもご利用いただけます。GPS端末にSIMが内蔵されているため、お手持ちのスマホのキャリアに関係なく利用可能です。' },
  { q: 'バッテリーはどのくらい持ちますか？', a: '使用状況により異なりますが、通常使用で約1週間〜2週間程度持ちます。位置情報の更新頻度を調整することでバッテリー持ちを改善できます。' },
  { q: '本体のサイズはどのくらい？', a: 'コンパクト設計で約47×47×15mm、重さ約34gです。ランドセルのポケットや習い事バッグに入れても邪魔になりません。' },
  { q: 'エリア通知機能はありますか？', a: 'はい、学校や自宅など指定したエリアへの到着・出発を自動通知する機能があります。通学路の見守りに便利です。' },
  { q: '移動履歴は確認できますか？', a: 'はい、1日の移動経路を地図上で確認できます。お子さまがどの道を通ったか、どこに立ち寄ったかを後から確認可能です。' },
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

export default function DokokanaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/#ranking' }, { name: 'どこかなGPS' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">キャリア品質</span>
            <span className="tag-pill bg-orange text-white">月額528円</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            どこかなGPS 徹底レビュー
          </h1>
          <p className="text-g600 text-lg">ソフトバンク提供 | キャリア品質通信 | コンパクト設計</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">どこかなGPSとは</h2>
          <p className="text-g600 mb-6">
            どこかなGPSは、ソフトバンクが提供する子供用GPS端末です。
            大手キャリアならではの安定した通信品質が最大の特徴で、全国どこでも途切れにくい位置情報の取得が可能です。
            月額528円の手頃な料金設定に加え、約34gの軽量コンパクト設計でお子さまの持ち運びも簡単。
            ソフトバンクユーザー以外でも利用できるため、通信品質を重視する方におすすめです。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'ソフトバンク'],
                    ['月額料金', '528円（税込）'],
                    ['本体価格', '7,480円（税込）'],
                    ['測位方式', 'GPS+GLONASS+みちびき+Wi-Fi'],
                    ['バッテリー', '約1〜2週間'],
                    ['通信回線', 'SoftBank LTE'],
                    ['防水', '生活防水（IPX5/IPX7）'],
                    ['サイズ', '約47×47×15mm'],
                    ['重量', '約34g'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-g100">
                      <td className="py-2 font-semibold text-g700 w-1/3">{k}</td>
                      <td className="py-2 text-g600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">料金プラン</h3>
              <div className="space-y-3">
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">月額プラン</p>
                  <p className="text-2xl font-extrabold text-g800">月額 528円<span className="text-sm font-normal text-g500">（税込）</span></p>
                  <p className="text-sm text-g600 mt-1">位置確認・移動履歴・エリア通知</p>
                </div>
                <div className="bg-green-light rounded-xl p-4">
                  <p className="font-bold text-green-dark">キャリア品質の安心</p>
                  <p className="text-sm text-g600 mt-1">ソフトバンクLTE回線で全国カバー。ソフトバンクユーザー以外もOK。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '📍', title: 'リアルタイム位置確認', desc: 'アプリからいつでもお子さまの現在地を確認。大手キャリア回線で安定した通信。' },
              { icon: '📝', title: '移動履歴', desc: '1日の移動経路を地図上に表示。通学路や寄り道の確認ができます。' },
              { icon: '🔔', title: 'エリア通知', desc: '学校・自宅・塾など設定エリアの出入りを自動で通知。' },
              { icon: '📱', title: 'コンパクト設計', desc: '約34gの軽量ボディ。ランドセルや習い事バッグに入れても邪魔にならない。' },
              { icon: '💧', title: '防水対応', desc: 'IPX5/IPX7の防水対応で、雨の日の通学も安心。' },
              { icon: '🔋', title: '省電力設計', desc: '更新頻度の調整で最大2週間のバッテリー持ち。' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
                <p className="text-2xl mb-2">{f.icon}</p>
                <h3 className="font-bold text-g800 text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-g600">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Pros & Cons */}
          <h2 className="section-title">メリット・デメリット</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・ソフトバンク回線の安定した通信品質</li>
                <li>・月額528円の手頃な料金</li>
                <li>・約34gの軽量コンパクト設計</li>
                <li>・IPX5/IPX7の高い防水性能</li>
                <li>・ソフトバンクユーザー以外も利用可能</li>
                <li>・大手キャリアのサポート体制</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・トーク・メッセージ機能は非対応</li>
                <li>・SOSボタンは搭載されていない</li>
                <li>・バッテリー持ちは他機種よりやや短め</li>
                <li>・本体価格が7,480円とやや高め</li>
                <li>・機能がシンプルで拡張性は少ない</li>
              </ul>
            </div>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">どこかなGPSが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">キャリア品質の安定通信で、月額528円から見守りを始められます。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/mimori/" className="btn-accent">次のレビュー: みもり</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
