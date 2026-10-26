import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'はろここトークの評判・料金は？【2026年】コクヨのトーク機能付き見守りGPSを公式情報で解説',
  description:
    'はろここトーク（コクヨ）の機能・料金を公式情報（2026年10月26日確認）でレビューします。本体5,940円、月額748円（音声あり）／572円（音声なし）で、親子の音声メッセージと居場所通知ボタンを備えています。',
};

const faqData = [
  { q: 'はろここトークはどこが提供していますか？', a: 'コクヨの見守りGPSです（公式サイト hellofamily.kokuyo.co.jp）。現在の公式ページで案内されている機種は、後継機の「はろここトーク」です。' },
  { q: '料金はいくらですか？', a: '通常プランは本体5,940円（税込）に、通信費が月額748円（音声あり）または572円（音声なし）かかります（税込・初月無料）。本体と11か月分の通信費（音声あり）がセットになった「通信費セットプラン」11,880円（税込）もあります（2026年10月26日 公式確認）。' },
  { q: 'どこで購入できますか？', a: '公式サイトでは「各ECサイトからご購入いただけます」と案内されています。購入後6か月以内に、ハロファミアプリから通信費の契約を行う必要があります。' },
  { q: 'バッテリーはどのくらい持ちますか？', a: '公式の仕様では、頻度優先モード（1〜2分間隔）で最大2.5週間、バッテリー持ち優先モード（3〜4分間隔）で最大3.5週間です。いずれも平日のみ1日2時間稼働での実測値で、使用環境によって大きく変動します。' },
  { q: 'トーク機能では何ができますか？', a: '本体の「はなす」ボタンで録音した音声メッセージを送り、保護者からのメッセージを「きく」ボタンで再生できます。リアルタイムの音声通話はできません。「音声なし」で契約した場合は、音声の送受信は利用できません。' },
  { q: 'エリア通知機能はありますか？', a: 'よく行く場所をアプリに登録すると、出発・到着のタイミングでスマートフォンに通知が届きます。また、行動範囲を設定する「みまもりフェンス」機能で、範囲外に出たときにも通知を受け取れます。' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "はろここトーク レビュー", "datePublished": "2026-03-15", "dateModified": "2026-10-26", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: 'GPS端末レビュー', href: '/review/' }, { name: 'はろここトーク' }]} />

      {/* Hero */}
      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">トーク機能付き</span>
            <span className="tag-pill bg-blue text-white">月額748円〜</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            はろここトークのレビュー
          </h1>
          <p className="text-g600 text-lg">コクヨが提供する、音声メッセージと居場所通知ボタンを備えた見守りGPSです。</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="bg-blue-light rounded-xl p-5 mb-6 text-sm text-g700">
            <p className="font-bold text-blue mb-1">結論（2026年10月26日 公式確認）</p>
            <p>
              はろここトークは、本体5,940円・月額748円（音声あり）で、親子の音声メッセージを使いたいご家庭に向いています。
              音声が不要であれば月額572円の「音声なし」も選べます。電池は最大3.5週間（バッテリー持ち優先モード）のため、
              最大2カ月をうたう位置情報専用機種よりも充電の回数は多くなります。
            </p>
          </div>

          <h2 className="section-title">はろここトークの概要</h2>
          <p className="text-g600 mb-6">
            はろここトークは、コクヨの見守りGPSです。従来の「はろここ」の後継機で、公式サイトでは現在この機種が案内されています。
            「はなす」「きく」「しらせる」の3つのボタンが1つずつの機能に対応しており、子どもが操作を覚えやすい設計です。
            通信はドコモとソフトバンクの2回線（LTE-M）を使い、電波状況のよいほうに自動で切り替わります。
            なお、当サイトでは以前このページで提供元をエディオン・月額528円と記載していましたが、公式サイトの記載と異なるため2026年10月26日に訂正しました。
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">基本スペック（公式の仕様）</h3>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['提供元', 'コクヨ'],
                    ['本体価格', '5,940円（税込）'],
                    ['月額料金', '音声あり748円／音声なし572円（税込・初月無料）'],
                    ['測位方式', 'GPS・みちびき・BeiDou・Galileo・GLONASS＋A-GPS・Wi-Fi・基地局'],
                    ['バッテリー', '最大3.5週間（バッテリー持ち優先モード）／最大2.5週間（頻度優先モード）'],
                    ['通信回線', 'LTE-M（ドコモ・ソフトバンク）'],
                    ['防水', '生活防水（IP53）'],
                    ['サイズ', '縦63×横47×奥行23mm'],
                    ['重量', '約72g'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-g100">
                      <td className="py-2 font-semibold text-g700 w-1/3">{k}</td>
                      <td className="py-2 text-g600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-g500 mt-2">出典：<a href="https://hellofamily.kokuyo.co.jp/view/page/hellococotalk" target="_blank" rel="noopener noreferrer" className="underline">はろここトーク 公式サイト</a>（2026年10月26日確認）。電池は平日のみ1日2時間稼働での実測値です。</p>
            </div>
            <div className="card-hover p-5">
              <h3 className="font-bold text-blue mb-3">料金プラン</h3>
              <div className="space-y-3">
                <div className="bg-orange-light rounded-xl p-4">
                  <p className="font-bold text-orange">通常プラン</p>
                  <p className="text-sm text-g600 mt-1">本体5,940円＋通信費 月額748円（音声あり）または572円（音声なし）。「音声あり／なし」は月1回まで変更できます。</p>
                </div>
                <div className="bg-blue-light rounded-xl p-4">
                  <p className="font-bold text-blue">通信費セットプラン</p>
                  <p className="text-sm text-g600 mt-1">11,880円で、本体と契約後11か月分の通信費（音声あり）がセットになります。12か月目以降は通常プラン（音声あり）で自動更新されます。</p>
                </div>
                <div className="bg-green-light rounded-xl p-4">
                  <p className="font-bold text-green-dark">解約</p>
                  <p className="text-sm text-g600 mt-1">通信費は最低1か月分かかり、申込みの翌月2日から解約できます。解約後の再契約と譲渡はできません。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <h2 className="section-title">主な機能</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '', title: '音声メッセージ', desc: '「はなす」ボタンで録音して送信し、保護者からのメッセージは「きく」ボタンで再生します。リアルタイムの通話はできません。' },
              { icon: '', title: '居場所通知ボタン', desc: '「しらせる」ボタンを押すと、保護者のスマートフォンに居場所がプッシュ通知されます。' },
              { icon: '', title: '出発・到着の通知', desc: '学校や習い事など登録した場所への出発・到着を、スマートフォンに通知します。' },
              { icon: '', title: 'みまもりフェンス', desc: 'アプリの地図上で行動範囲を設定し、範囲外に出たときに通知します。' },
              { icon: '', title: '位置情報リクエスト', desc: 'アプリの「NOWボタン」で、任意のタイミングで位置情報を更新できます（最大1分かかる場合があります）。' },
              { icon: '', title: '移動履歴', desc: 'その日の移動履歴に加え、過去90日間の履歴を確認できます。' },
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
                <li>・親子で音声メッセージを送り合える点</li>
                <li>・音声が不要なら月額572円に下げられる点</li>
                <li>・ボタンと機能が1対1で、子どもが操作を覚えやすい点</li>
                <li>・ドコモとソフトバンクの2回線を自動で切り替える点</li>
                <li>・過去90日間の移動履歴を確認できる点</li>
              </ul>
            </div>
            <div className="bg-orange-light rounded-xl p-6">
              <h3 className="font-bold text-orange-dark mb-3">欠点</h3>
              <ul className="space-y-2 text-sm text-g700">
                <li>・電池は最大3.5週間で、最大2カ月の機種より充電の回数が多い点</li>
                <li>・リアルタイムの音声通話はできない点</li>
                <li>・防水は生活防水（IP53）にとどまる点</li>
                <li>・本体は約72gで、位置情報専用の小型機種より重い点</li>
                <li>・通信契約を解約すると、同じ端末で再契約できない点</li>
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">はろここトークが気になる方へ</h2>
            <p className="text-g600 mb-6 text-sm">トーク機能付きの他機種（BoTトーク・みもりGPSトークなど）と、料金と電池持ちを比べてから選ぶことをおすすめします。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/purpose/talk/" className="btn-primary">トーク機能付きの機種を比較する</Link>
              <Link href="/compare/price/" className="btn-accent">料金比較を見る</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
