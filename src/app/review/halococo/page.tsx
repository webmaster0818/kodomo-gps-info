import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'はろここの評判・口コミは？【2026年】エディオンの見守りGPSの実力・料金を解説',
  description:
    'はろここ（エディオン）の機能・料金・口コミをレビューします。月額528円で家電量販店で購入でき、操作もシンプルなため、初めてのGPS端末に適しています。店舗で実物を確認して購入できる点も特徴です。',
};

const faqData = [
  { q: 'はろここはどこで購入できますか？', a: 'エディオンの店舗およびオンラインショップで購入できます。家電量販店で実物を見て購入できる点が、他のGPS端末にはない大きな特徴です。店員に相談しながら選ぶことができます。' },
  { q: 'はろここの月額料金はいくらですか？', a: '月額528円（税込）です。業界最安級の料金設定で、契約期間の拘束や解約金もありません。' },
  { q: '設定は難しくないですか？', a: '難しくありません。シンプルな操作を重視した設計です。アプリのガイドに従って簡単に設定でき、機械が苦手な方でも安心して使い始められます。' },
  { q: 'バッテリーはどのくらい持ちますか？', a: '通常使用で約1〜2カ月程度持ちます。充電の頻度が少ないため、お子さまに持たせたままにしておけます。' },
  { q: 'エリア通知機能はありますか？', a: '学校や自宅など、登録したエリアへの出入りを自動で通知するエリア通知（ジオフェンス）機能があります。お子さまの移動をリアルタイムで把握できます。' },
  { q: 'エディオン以外でも使えますか？', a: '購入はエディオンに限られますが、GPS端末自体はどのキャリアのスマートフォンでも利用できます。全国どこでも、ソフトバンク回線で位置情報を取得します。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "はろここ レビュー", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'はろここ' }]} />

      {/* Hero */}
      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">店舗で買える</span>
            <span className="tag-pill bg-blue text-white">月額528円</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            はろここのレビュー
          </h1>
          <p className="text-g600 text-lg">エディオンが提供し、家電量販店で購入できる月額528円のシンプルなGPS端末です。</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">はろここの概要</h2>
          <p className="text-g600 mb-6">
            はろここは、大手家電量販店エディオンが提供する子供用GPS端末です。
            最大の特徴は、家電量販店の店舗で実物を見て購入できることです。
            ネット通販に不安がある方も、店員に相談しながら安心して選べます。
            月額528円のシンプルな料金体系と、誰でも簡単に使える操作性により、初めてのGPS端末に適しています。
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
                    ['バッテリー', '約1〜2カ月'],
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
                  <p className="font-bold text-orange">店舗で購入可能</p>
                  <p className="text-sm text-g600 mt-1">全国のエディオン店舗で、実物を見て購入できます。店員に相談できる点も安心です。</p>
                </div>
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">シンプル操作</p>
                  <p className="text-sm text-g600 mt-1">アプリのガイドに沿って簡単に設定できます。機械が苦手な方でも安心です。</p>
                </div>
                <div className="bg-green-light rounded-xl p-4">
                  <p className="font-bold text-green-dark">手頃な価格</p>
                  <p className="text-sm text-g600 mt-1">本体5,280円と月額528円で、初期費用・維持費ともに手頃です。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '', title: 'リアルタイム位置確認', desc: 'アプリからいつでもお子さまの現在地を地図で確認できます。' },
              { icon: '', title: '移動履歴', desc: '1日の移動経路を記録します。通学路の確認や行動パターンの把握に役立ちます。' },
              { icon: '', title: 'エリア通知', desc: '登録エリアへの出入りを自動で通知します。学校への到着をすぐに把握できます。' },
              { icon: '', title: '店舗サポート', desc: 'エディオン店舗で購入・相談ができます。アフターサポートも受けられます。' },
              { icon: '', title: '長持ちバッテリー', desc: '最大2カ月持続します。充電の手間が少なく、持たせたままにしておけます。' },
              { icon: '', title: '生活防水', desc: 'IPX5の防水対応で雨の日も安心して使えます。' },
            ].map((f) => (
              <div key={f.title} className="card-hover p-4">
                <h3 className="font-bold text-g800 text-sm mb-1">{f.title}</h3>
                <p className="text-sm text-g600">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Pros & Cons */}
          <h2 className="section-title">利点と欠点</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-light rounded-xl p-6">
              <h3 className="font-bold text-green-dark mb-3">利点</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・家電量販店で実物を見て購入できる点</li>
                <li>・月額528円の業界最安級料金</li>
                <li>・本体5,280円の手頃な価格</li>
                <li>・シンプルな操作で誰でも簡単に設定可能</li>
                <li>・バッテリーは最大2カ月持続</li>
                <li>・店舗でのアフターサポート</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">欠点</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・トーク・メッセージ機能は非対応</li>
                <li>・SOSボタンは非搭載</li>
                <li>・購入はエディオン系列に限定</li>
                <li>・他機種と比べて特筆する独自機能が少ない点</li>
                <li>・知名度が他の人気機種よりやや低い点</li>
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
          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">はろここが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">お近くのエディオンで実物を確認できます。月額528円で、手軽に見守りを始められます。</p>
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
