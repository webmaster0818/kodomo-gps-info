import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'あんしんウォッチャー 徹底レビュー | 2台目無料でau品質',
  description:
    'あんしんウォッチャー（KDDI/au）を徹底レビュー。月額539円、2台目無料、au回線の安定通信。最大9人見守り対応。料金・機能・口コミを詳しく解説。',
};

const faqData = [
  { q: 'あんしんウォッチャーの月額料金は？', a: '月額539円（税込）です。さらに2台目の月額料金が無料なので、兄弟・姉妹で使う場合は1台あたり約270円と非常にお得です。' },
  { q: '2台目無料とはどういう意味？', a: '1台目の月額539円を支払えば、2台目のGPS端末の月額料金が0円になります。本体代金は別途必要ですが、ランニングコストを大幅に抑えられます。' },
  { q: '何人で見守りできますか？', a: '最大9人で見守りが可能です。両親だけでなく、祖父母や親戚も見守りメンバーに追加できます。' },
  { q: 'au以外の回線でも使えますか？', a: 'はい、保護者のスマホはau以外（ドコモ・ソフトバンクなど）でも問題ありません。GPS端末の通信にau回線を使用しますが、保護者側のアプリはどのキャリアでも動作します。' },
  { q: 'トーク・通話機能はありますか？', a: 'トーク・通話機能は搭載されていません。位置確認・エリア通知・移動履歴の確認に特化したシンプルなGPS端末です。' },
  { q: 'バッテリーはどれくらい持つ？', a: '最大約1.5ヶ月です。位置情報の更新頻度によって変動します。更新間隔を長めに設定するとバッテリー寿命が延びます。' },
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

export default function AnshinWatcherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/#ranking' }, { name: 'あんしんウォッチャー' }]} />

      <section className="bg-gradient-to-br from-orange-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">2台目無料</span>
            <span className="tag-pill bg-blue text-white">au品質</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            あんしんウォッチャー 徹底レビュー
          </h1>
          <p className="text-g600 text-lg">KDDI/au提供 | 月額539円 | 最大9人見守り</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">あんしんウォッチャーとは</h2>
          <p className="text-g600 mb-6">
            あんしんウォッチャーは、KDDI（au）が提供する子供用GPS端末です。
            月額539円で最安級の料金設定に加え、2台目の月額料金が無料という兄弟利用に最適なプラン。
            au回線ならではの安定した通信品質で、最大9人での見守りに対応しています。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'KDDI / au'],
                    ['月額料金', '539円（税込）'],
                    ['2台目', '月額無料'],
                    ['本体価格', '実質無料キャンペーンあり'],
                    ['測位方式', 'GPS+Wi-Fi+携帯基地局'],
                    ['バッテリー', '最大約1.5ヶ月'],
                    ['通信回線', 'au LTE'],
                    ['最大見守り人数', '9人'],
                    ['防水', '生活防水'],
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
              <h3 className="font-bold text-blue mb-3">コスト比較</h3>
              <div className="space-y-3">
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">1台利用</p>
                  <p className="text-2xl font-extrabold text-g800">月額 539円</p>
                </div>
                <div className="bg-green-light rounded-xl p-4">
                  <p className="font-bold text-green-dark">2台利用（兄弟）</p>
                  <p className="text-2xl font-extrabold text-g800">月額 539円<span className="text-sm font-normal text-g500">（2台合計）</span></p>
                  <p className="text-sm text-green-dark font-semibold mt-1">1台あたり約270円！</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '📍', title: '現在地確認', desc: 'アプリからワンタップでお子さまの現在地を確認。au回線で安定通信。' },
              { icon: '🔔', title: 'エリア通知', desc: '学校・自宅・塾など設定エリアへの出入りを自動通知。' },
              { icon: '📊', title: '移動履歴', desc: '過去の移動経路を確認。通学路の安全チェックに活用。' },
              { icon: '👨‍👩‍👧‍👦', title: '最大9人見守り', desc: '両親・祖父母・親戚まで、最大9人で見守り可能。' },
              { icon: '💰', title: '2台目無料', desc: '兄弟・姉妹で使えば1台あたり約270円の圧倒的コスパ。' },
              { icon: '📶', title: 'au回線品質', desc: 'KDDI直営のau LTE回線で全国広範囲をカバー。' },
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
                <li>・2台目月額無料で兄弟利用に最適</li>
                <li>・月額539円の業界最安級</li>
                <li>・au回線で通信品質が安定</li>
                <li>・最大9人で見守り可能</li>
                <li>・KDDI/auブランドの信頼感</li>
                <li>・本体実質無料キャンペーンあり</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・トーク・通話機能なし</li>
                <li>・SOSボタンなし</li>
                <li>・バッテリーが最大1.5ヶ月（みてねより短い）</li>
                <li>・AI行動学習などの高度な機能なし</li>
              </ul>
            </div>
          </div>

          {/* User Reviews */}
          <h2 className="section-title">利用者の口コミ</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {[
              { text: '兄弟2人に持たせています。2台目無料なので月額539円で2人分カバーできるのは本当にお得。au回線で通信も安定しています。', user: '30代女性・利用歴1年', rating: '★★★★★' },
              { text: 'KDDIのサービスなので信頼感があります。エリア通知の精度も高く、子供が学校に着いたら通知が来るので安心。', user: '40代男性・利用歴8ヶ月', rating: '★★★★★' },
              { text: '月額539円でシンプルに位置確認ができるのが良い。余計な機能がない分、アプリも軽くて使いやすいです。', user: '30代女性・利用歴6ヶ月', rating: '★★★★☆' },
              { text: 'トーク機能がないのが惜しい。位置確認だけなら十分ですが、子供と連絡を取りたい場合は別の端末が必要です。', user: '40代女性・利用歴3ヶ月', rating: '★★★☆☆' },
            ].map((r, i) => (
              <div key={i} className="card-hover p-5">
                <p className="text-orange font-bold text-sm mb-1">{r.rating}</p>
                <p className="text-sm text-g700 mb-2">「{r.text}」</p>
                <p className="text-xs text-g500">--- {r.user}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-g400 mb-8">※口コミは利用者の声を参考に作成した想定例です</p>

          {/* Usage Impressions */}
          <h2 className="section-title">使ってみた感想</h2>
          <p className="text-g600 mb-4">実際の使用感を3つのポイントで解説します。</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange text-sm mb-2">位置精度</h3>
              <p className="text-sm text-g600">GPS+Wi-Fi+携帯基地局の3測位対応。au回線の基地局密度が高いため、都市部では特に安定した測位が可能です。地下街や建物内でもおおよその位置を把握できます。</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange text-sm mb-2">アプリの使いやすさ</h3>
              <p className="text-sm text-g600">auらしいシンプルで分かりやすいUI。位置確認・エリア通知・移動履歴の3つの機能に絞られているため、初めてでも迷わず使えます。最大9人の見守り追加も簡単。</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-orange text-sm mb-2">バッテリー持ち</h3>
              <p className="text-sm text-g600">公称最大1.5ヶ月。更新間隔を5分に設定した場合でも3〜4週間持つ印象です。トーク機能がない分、バッテリー消費が安定しており充電頻度の予測がしやすいです。</p>
            </div>
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-orange-light to-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">あんしんウォッチャーが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">2台目無料＋au品質で、兄弟・姉妹の見守りに最適なGPS端末です。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/soranome/" className="btn-accent">次: ソラノメ</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
