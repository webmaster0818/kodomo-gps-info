import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'BoTトーク 徹底レビュー | 元祖トーク機能＋見守りウォレット',
  description:
    'BoTトーク（ビーサイズ）第6世代を徹底レビュー。元祖トーク機能、見守りウォレット、AI行動学習搭載。月額528円〜748円、機能・料金・口コミを詳しく解説。',
};

const faqData = [
  { q: 'BoTトークの月額料金はいくら？', a: 'GPSプラン（位置確認のみ）は月額528円（税込）。トークプラン（メッセージ送受信）は月額748円（税込）です。契約期間の縛りや解約金はありません。' },
  { q: '見守りウォレットとは何ですか？', a: '見守りウォレットは、BoTトークに搭載された電子マネー機能です。保護者がアプリからチャージし、お子さまがコンビニなどで支払いに使えます。利用履歴は保護者のアプリに通知されます。' },
  { q: 'AI行動学習とはどんな機能？', a: 'お子さまの日常の行動パターンをAIが学習し、いつもと違うルートを通った場合や予定時刻に到着しない場合に通知する機能です。使うほど精度が上がります。' },
  { q: 'バッテリーはどれくらい持ちますか？', a: '最大約1ヶ月です。位置情報の更新頻度やトーク機能の使用頻度によって変動します。' },
  { q: '防水性能はありますか？', a: 'IPX5の生活防水に対応しています。雨に濡れても問題ありませんが、水没には対応していません。' },
  { q: '第6世代の新機能は？', a: '第6世代では処理速度の向上、バッテリー効率の改善、見守りウォレット機能の追加、より高精度なAI行動学習が搭載されています。' },
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

export default function BotTalkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/#ranking' }, { name: 'BoTトーク' }]} />

      <section className="bg-gradient-to-br from-green-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-green text-white">第6世代</span>
            <span className="tag-pill bg-orange text-white">見守りウォレット</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            BoTトーク 徹底レビュー
          </h1>
          <p className="text-g600 text-lg">ビーサイズ提供 | 元祖トーク機能 | AI行動学習搭載</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">BoTトークとは</h2>
          <p className="text-g600 mb-6">
            BoTトークは、ビーサイズが提供する子供用GPS端末の元祖的存在です。
            トーク機能のパイオニアとして知られ、第6世代ではAI行動学習や見守りウォレット（電子マネー）機能も搭載。
            月額528円の基本プランから、トーク機能付き748円のプランまで選べます。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'ビーサイズ株式会社'],
                    ['世代', '第6世代（最新）'],
                    ['月額料金', '528円 / 748円（トーク付き）'],
                    ['本体価格', '5,280円（税込）'],
                    ['測位方式', 'GPS+GLONASS+みちびき+Wi-Fi'],
                    ['バッテリー', '最大約1ヶ月'],
                    ['通信回線', 'SoftBank LTE'],
                    ['防水', 'IPX5（生活防水）'],
                    ['重量', '約50g'],
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
                  <p className="font-bold text-blue">GPSプラン</p>
                  <p className="text-2xl font-extrabold text-g800">月額 528円<span className="text-sm font-normal text-g500">（税込）</span></p>
                  <p className="text-sm text-g600 mt-1">位置確認・行動学習・エリア通知</p>
                </div>
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">トークプラン</p>
                  <p className="text-2xl font-extrabold text-g800">月額 748円<span className="text-sm font-normal text-g500">（税込）</span></p>
                  <p className="text-sm text-g600 mt-1">GPSプラン＋トーク＋見守りウォレット</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '💬', title: '元祖トーク機能', desc: 'テキスト・音声メッセージの送受信。ボタン操作で子供でも簡単に使える。' },
              { icon: '💳', title: '見守りウォレット', desc: '電子マネー機能を搭載。保護者がチャージし、利用履歴も確認可能。' },
              { icon: '🧠', title: 'AI行動学習', desc: '日常パターンを学習し、異常行動を検知して通知。使うほど賢くなる。' },
              { icon: '📍', title: '高精度測位', desc: 'GPS+GLONASS+みちびき+Wi-Fiの複合測位で正確な位置を把握。' },
              { icon: '🔔', title: 'エリア通知', desc: '登録エリアへの出入りを自動通知。学校・塾・自宅などを設定可能。' },
              { icon: '📊', title: '移動履歴', desc: '1日の移動経路を記録・表示。通学路や行動パターンを確認。' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
                <p className="text-2xl mb-2">{f.icon}</p>
                <h3 className="font-bold text-g800 text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-g600">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">メリット・デメリット</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・元祖トーク機能で実績・安定性が高い</li>
                <li>・見守りウォレットで電子マネーにも対応</li>
                <li>・AI行動学習で異常行動を自動検知</li>
                <li>・月額528円〜の手頃な料金</li>
                <li>・第6世代で性能が大幅向上</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・バッテリーが最大1ヶ月（みてねより短い）</li>
                <li>・トーク機能は追加料金が必要（748円）</li>
                <li>・通話機能は非対応</li>
                <li>・SOSボタンは搭載されていない</li>
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

          <div className="mt-10 text-center bg-gradient-to-r from-green-light to-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">BoTトークが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">トーク＋ウォレット＋AI学習で、見守り以上の多機能GPS端末です。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/anshin-watcher/" className="btn-accent">次: あんしんウォッチャー</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
