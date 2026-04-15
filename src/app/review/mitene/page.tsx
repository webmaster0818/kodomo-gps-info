import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'みてねみまもりGPS 徹底レビュー | 利用者数No.1の実力を検証',
  description:
    'みてねみまもりGPS（MIXI）の機能・料金・口コミを徹底レビュー。月額528円〜、トークPlus対応、バッテリー最大2ヶ月。利用者数No.1の実力と選ばれる理由を詳しく解説。',
};

const faqData = [
  { q: 'みてねみまもりGPSの月額料金はいくら？', a: '基本プラン（位置確認のみ）は月額528円（税込）です。トークPlus機能付きプランは月額748円（税込）です。いずれも契約期間の縛りや解約金はありません。' },
  { q: 'トークPlus機能とは何ですか？', a: 'トークPlusは、お子さまとテキスト・音声メッセージのやりとりができる機能です。GPS端末のボタンを押して定型メッセージや音声を送信でき、保護者のスマホアプリからもメッセージを送れます。' },
  { q: 'バッテリーはどれくらい持ちますか？', a: '最大約2ヶ月持ちます。ただし位置情報の更新頻度やトーク機能の使用頻度によって変動します。更新間隔を長めに設定するとバッテリー持ちが向上します。' },
  { q: '本体価格はいくらですか？', a: '本体価格は5,280円（税込）です。公式サイトやECサイトで購入可能。時期によってはキャンペーン割引もあります。' },
  { q: '何人で見守りできますか？', a: '複数人で見守りが可能です。おじいちゃん・おばあちゃんなど家族みんなでお子さまの位置を確認できます。見守り人の追加は無料です。' },
  { q: '学校に持って行っても大丈夫？', a: 'はい、ほとんどの学校で持ち込み可能です。小型・軽量でランドセルに入れておけるサイズ。音が鳴らないので授業の妨げになりません。念のため学校の規則をご確認ください。' },
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

export default function MitenePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/#ranking' }, { name: 'みてねみまもりGPS' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">利用者数No.1</span>
            <span className="tag-pill bg-blue text-white">月額528円〜</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            みてねみまもりGPS 徹底レビュー
          </h1>
          <p className="text-g600 text-lg">MIXI提供 | トークPlus対応 | バッテリー最大2ヶ月</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">みてねみまもりGPSとは</h2>
          <p className="text-g600 mb-6">
            みてねみまもりGPSは、MIXI（旧ミクシィ）が提供する子供用GPS端末です。
            家族向けアプリ「みてね」の知見を活かした使いやすさで、利用者数No.1を誇ります。
            月額528円からの手頃な料金設定と、最大2ヶ月持つバッテリーが特徴。
            2024年にはトークPlus機能も追加され、お子さまとのコミュニケーションも可能になりました。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'MIXI（旧ミクシィ）'],
                    ['月額料金', '528円（税込）/ 748円（トークPlus）'],
                    ['本体価格', '5,280円（税込）'],
                    ['測位方式', 'GPS+GLONASS+みちびき+Wi-Fi'],
                    ['バッテリー', '最大約2ヶ月'],
                    ['通信回線', 'SoftBank LTE'],
                    ['防水', '生活防水（IPX5）'],
                    ['サイズ', '約48.5×48.5×15mm'],
                    ['重量', '約40g'],
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
                  <p className="font-bold text-blue">基本プラン</p>
                  <p className="text-2xl font-extrabold text-g800">月額 528円<span className="text-sm font-normal text-g500">（税込）</span></p>
                  <p className="text-sm text-g600 mt-1">位置確認・移動履歴・エリア通知</p>
                </div>
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">トークPlusプラン</p>
                  <p className="text-2xl font-extrabold text-g800">月額 748円<span className="text-sm font-normal text-g500">（税込）</span></p>
                  <p className="text-sm text-g600 mt-1">基本プラン機能＋トーク機能</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '📍', title: 'リアルタイム位置確認', desc: 'アプリからいつでもお子さまの現在地を確認。GPS+Wi-Fiの複合測位で高精度。' },
              { icon: '📝', title: '移動履歴の自動記録', desc: '1日の移動経路を自動で記録。通学路の確認や行動パターンの把握に。' },
              { icon: '🔔', title: 'エリア通知', desc: '学校や自宅など設定したエリアへの出入りを自動通知。到着・出発がすぐわかる。' },
              { icon: '💬', title: 'トークPlus機能', desc: '音声メッセージや定型文でお子さまとやりとり。キーホルダーのボタンで簡単送信。' },
              { icon: '🔋', title: 'バッテリー長持ち', desc: '最大2ヶ月の長寿命バッテリー。充電の手間を大幅に削減。' },
              { icon: '👨‍👩‍👧', title: '複数人見守り', desc: '家族みんなでお子さまの位置を確認可能。見守り人の追加は無料。' },
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
                <li>・月額528円〜の業界最安級の料金</li>
                <li>・バッテリー最大2ヶ月で充電の手間が少ない</li>
                <li>・利用者数No.1の安心感と実績</li>
                <li>・「みてね」アプリの使いやすいUI</li>
                <li>・トークPlus対応でコミュニケーションも可能</li>
                <li>・GPS+Wi-Fi測位で位置精度が高い</li>
                <li>・小型軽量（約40g）でランドセルに入れやすい</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・トーク機能は追加料金（月額748円）が必要</li>
                <li>・SOSボタンは搭載されていない</li>
                <li>・本体カラーの選択肢が限られる</li>
                <li>・屋内での精度はやや落ちる場合がある</li>
                <li>・通話機能は非対応</li>
              </ul>
            </div>
          </div>

          {/* How to use */}
          <h2 className="section-title">使い方・設定手順</h2>
          <div className="space-y-4 mb-8 max-w-2xl">
            {[
              { step: 1, title: '本体を購入', desc: '公式サイトまたはECサイトで本体（5,280円）を購入。' },
              { step: 2, title: 'アプリをダウンロード', desc: 'iOS/Androidの「みてねみまもりGPS」アプリをインストール。' },
              { step: 3, title: 'アカウント登録・端末登録', desc: 'アプリの案内に従い、GPS端末を登録。QRコードで簡単セットアップ。' },
              { step: 4, title: '見守り設定', desc: 'エリア通知や更新頻度を設定。見守り人の追加も可能。' },
              { step: 5, title: 'ランドセルに入れて完了', desc: 'お子さまのランドセルやポケットに入れれば見守りスタート。' },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start card-hover p-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue text-white flex items-center justify-center font-bold text-sm">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-bold text-g800 text-sm">{s.title}</h3>
                  <p className="text-sm text-g600">{s.desc}</p>
                </div>
              </div>
            ))}
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">みてねみまもりGPSが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">月額528円〜、利用者数No.1のGPS端末で安心の見守りを始めましょう。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/bot-talk/" className="btn-accent">次のレビュー: BoTトーク</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
