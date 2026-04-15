import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'まもサーチ 徹底レビュー | 最大25人で見守りできるGPS端末',
  description:
    'まもサーチ（BBソフトサービス）第3世代を徹底レビュー。最大25人見守り、月額539円、コンパクト設計。大家族に最適なGPS端末の機能・料金・口コミを詳しく解説。',
};

const faqData = [
  { q: 'まもサーチの最大見守り人数は？', a: '最大25人で見守りが可能です。両親・祖父母・親戚・近所の方など、多くの人でお子さまを見守ることができます。これは業界最多クラスの人数です。' },
  { q: '月額料金はいくらですか？', a: '月額539円（税込）です。契約期間の縛りや解約金はありません。本体代金は別途必要です。' },
  { q: '第3世代の改良点は？', a: '第3世代ではバッテリー持ちの向上、測位精度の改善、本体のさらなるコンパクト化が実現されています。アプリのUIも改善されより使いやすくなりました。' },
  { q: 'バッテリーはどれくらい持つ？', a: '最大約1ヶ月です。位置情報の更新頻度設定によって変動します。' },
  { q: 'トーク・通話機能はありますか？', a: 'トーク・通話機能は搭載されていません。位置確認に特化したシンプルなGPS端末です。' },
  { q: 'どこで購入できますか？', a: '公式サイトやAmazon、家電量販店のオンラインストアで購入可能です。' },
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
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/#ranking' }, { name: 'まもサーチ' }]} />

      <section className="bg-gradient-to-br from-green-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-green text-white">最大25人見守り</span>
            <span className="tag-pill bg-blue text-white">第3世代</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            まもサーチ 徹底レビュー
          </h1>
          <p className="text-g600 text-lg">BBソフトサービス提供 | 月額539円 | コンパクト設計</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">まもサーチとは</h2>
          <p className="text-g600 mb-6">
            まもサーチは、BBソフトサービスが提供する子供用GPS端末です。
            最大の特徴は業界最多クラスの25人まで見守りメンバーを登録できること。
            両親だけでなく、祖父母・親戚・ご近所の方まで、地域ぐるみでお子さまを見守れます。
            第3世代の最新モデルでは、バッテリー持ちと測位精度がさらに向上しています。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'BBソフトサービス'],
                    ['世代', '第3世代（最新）'],
                    ['月額料金', '539円（税込）'],
                    ['本体価格', '5,280円（税込）'],
                    ['測位方式', 'GPS+Wi-Fi+携帯基地局'],
                    ['バッテリー', '最大約1ヶ月'],
                    ['最大見守り人数', '25人'],
                    ['通信回線', 'SoftBank LTE'],
                    ['防水', '生活防水（IPX5）'],
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
              <h3 className="font-bold text-blue mb-3">見守り人数の比較</h3>
              <div className="space-y-2">
                {[
                  { name: 'まもサーチ', count: 25, pct: 100 },
                  { name: 'あんしんウォッチャー', count: 9, pct: 36 },
                  { name: 'ソラノメ', count: 4, pct: 16 },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-g700 font-semibold">{item.name}</span>
                      <span className="text-blue font-bold">{item.count}人</span>
                    </div>
                    <div className="w-full bg-g200 rounded-full h-3">
                      <div className="bg-blue rounded-full h-3" style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '👨‍👩‍👧‍👦', title: '最大25人見守り', desc: '業界最多。祖父母・親戚・地域の人まで幅広く見守りに参加。' },
              { icon: '📍', title: '現在地確認', desc: 'アプリからリアルタイムでお子さまの位置を確認。' },
              { icon: '🔔', title: 'エリア通知', desc: '設定エリアの出入りを自動通知。登下校の確認に。' },
              { icon: '📊', title: '移動履歴', desc: '過去の移動ルートを確認。行動パターンを把握。' },
              { icon: '📦', title: 'コンパクト設計', desc: '第3世代でさらに小型化。ランドセルに入れても邪魔にならない。' },
              { icon: '🔋', title: '長持ちバッテリー', desc: '最大1ヶ月の長寿命。充電の手間を軽減。' },
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
                <li>・最大25人で見守りに参加可能（業界最多）</li>
                <li>・月額539円の手頃な料金</li>
                <li>・第3世代でバッテリー・精度が向上</li>
                <li>・コンパクトで軽量な設計</li>
                <li>・祖父母や地域ぐるみの見守りに最適</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・トーク・通話機能なし</li>
                <li>・SOSボタンなし</li>
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

          <div className="mt-10 text-center bg-gradient-to-r from-green-light to-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">まもサーチが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">最大25人の見守りで、大家族やご近所ぐるみの安全見守りが実現できます。</p>
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
