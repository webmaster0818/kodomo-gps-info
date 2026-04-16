import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'はろここ 徹底レビュー | エディオンで買える見守りGPS',
  description:
    'はろここ（エディオン）の機能・料金・口コミを徹底レビュー。月額528円、家電量販店で購入可能、シンプル操作で初めてのGPSに最適。店舗で実物を見て買える安心感。',
};

const faqData = [
  { q: 'はろここはどこで購入できますか？', a: 'エディオンの店舗およびオンラインショップで購入できます。家電量販店で実物を見て購入できるのが他のGPS端末にはない大きな特徴です。店員さんに相談しながら選べます。' },
  { q: 'はろここの月額料金はいくら？', a: '月額528円（税込）です。業界最安級の料金設定で、契約期間の縛りや解約金もありません。' },
  { q: '設定は難しくないですか？', a: 'いいえ、シンプル操作を重視した設計です。アプリのガイドに従って簡単にセットアップでき、機械が苦手な方でも安心して使い始められます。' },
  { q: 'バッテリーはどのくらい持ちますか？', a: '通常使用で約1〜2ヶ月程度持ちます。充電頻度が少なくて済むため、お子さまに持たせっぱなしにできます。' },
  { q: 'エリア通知機能はありますか？', a: 'はい、学校や自宅など登録エリアへの出入りを自動通知する機能があります。お子さまの移動をリアルタイムで把握できます。' },
  { q: 'エディオン以外でも使えますか？', a: 'はい、購入はエディオンですが、GPS端末自体はどのキャリアのスマホでも利用可能です。全国どこでもソフトバンク回線で位置情報を取得します。' },
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

export default function HalococoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/#ranking' }, { name: 'はろここ' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">店舗で買える</span>
            <span className="tag-pill bg-blue text-white">月額528円</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            はろここ 徹底レビュー
          </h1>
          <p className="text-g600 text-lg">エディオン提供 | 家電量販店で購入可 | シンプル操作 | 月額528円</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">はろここ とは</h2>
          <p className="text-g600 mb-6">
            はろここは、大手家電量販店エディオンが提供する子供用GPS端末です。
            最大の特徴は家電量販店の店舗で実物を見て購入できること。
            ネット通販では不安という方も、店員さんに相談しながら安心して選べます。
            月額528円のシンプルな料金体系と、誰でも簡単に使えるシンプル操作で、初めてのGPSにぴったりです。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'エディオン'],
                    ['月額料金', '528円（税込）'],
                    ['本体価格', '5,280円（税込）'],
                    ['測位方式', 'GPS+Wi-Fi+携帯基地局'],
                    ['バッテリー', '約1〜2ヶ月'],
                    ['通信回線', 'SoftBank LTE'],
                    ['防水', '生活防水（IPX5）'],
                    ['サイズ', '約50×50×15mm'],
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
              <h3 className="font-bold text-blue mb-3">購入のしやすさ</h3>
              <div className="space-y-3">
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">店舗購入OK</p>
                  <p className="text-sm text-g600 mt-1">エディオン全国店舗で実物を見て購入可能。店員さんに相談できる安心感。</p>
                </div>
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">シンプル操作</p>
                  <p className="text-sm text-g600 mt-1">アプリのガイドに沿って簡単セットアップ。機械が苦手でも安心。</p>
                </div>
                <div className="bg-green-light rounded-xl p-4">
                  <p className="font-bold text-green-dark">お手頃価格</p>
                  <p className="text-sm text-g600 mt-1">本体5,280円+月額528円。初期費用も維持費もお手頃。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '📍', title: 'リアルタイム位置確認', desc: 'アプリからいつでもお子さまの現在地を地図で確認できます。' },
              { icon: '📝', title: '移動履歴', desc: '1日の移動経路を記録。通学路の確認や行動パターンの把握に。' },
              { icon: '🔔', title: 'エリア通知', desc: '登録エリアの出入りを自動通知。学校の到着がすぐわかる。' },
              { icon: '🏪', title: '店舗サポート', desc: 'エディオン店舗で購入・相談可能。アフターサポートも安心。' },
              { icon: '🔋', title: '長持ちバッテリー', desc: '最大2ヶ月の長寿命。充電の手間が少なく持たせっぱなしOK。' },
              { icon: '💧', title: '生活防水', desc: 'IPX5の防水対応で雨の日も安心して使えます。' },
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
                <li>・家電量販店で実物を見て購入できる</li>
                <li>・月額528円の業界最安級料金</li>
                <li>・本体5,280円とお手頃価格</li>
                <li>・シンプル操作で誰でも簡単セットアップ</li>
                <li>・バッテリー最大2ヶ月の長寿命</li>
                <li>・店舗でのアフターサポート</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・トーク・メッセージ機能は非対応</li>
                <li>・SOSボタンは搭載されていない</li>
                <li>・購入はエディオン系列に限定</li>
                <li>・他機種と比べて特筆する独自機能は少ない</li>
                <li>・知名度が他の人気機種よりやや低い</li>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">はろここが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">お近くのエディオンで実物を確認できます。月額528円で手軽に見守りスタート。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">他の機種と比較する</Link>
              <Link href="/review/kids-phone/" className="btn-accent">キッズケータイとの比較を見る</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
