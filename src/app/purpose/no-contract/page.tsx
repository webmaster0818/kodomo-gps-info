import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS 縛りなし・解約金なしで選ぶ | 主要機種の解約条件まとめ',
  description:
    '契約期間の縛りや解約金が発生しない子供GPSの選び方を解説。主要13機種の解約条件を比較表で整理し、解約時に注意すべきポイントもまとめました。',
};

const faqData = [
  { q: '子供GPSに長期契約の縛りはありますか？', a: '多くの子供GPSサービスは契約期間の縛りや解約金がありません。月額料金のみで利用でき、不要になればいつでも解約できるケースが一般的です。ただし機種ごとに条件が異なるため、契約前に公式サイトで最新の条件を確認しましょう。' },
  { q: '解約するとお金がかかることはありますか？', a: '基本的に解約金は発生しない機種が多いですが、端末の分割払いが残っている場合は残債の支払いが必要になることがあります。また最低利用期間が設けられている機種では、期間内の解約で手数料が発生する場合もあります。' },
  { q: '途中解約した場合、端末は使えなくなりますか？', a: '月額課金型のサービスでは、解約と同時にGPS機能が停止します。端末自体は手元に残りますが、再契約しない限り位置情報の取得はできません。買取型ではなく「端末+月額」型の機種は特にこの点に注意が必要です。' },
  { q: '休止（一時停止）できる機種はありますか？', a: '長期休暇中などに利用を一時停止できるかは機種によって異なります。休止制度のない機種は一度解約して再契約する形になるため、再契約時に初期費用が再発生しないかを事前に確認しましょう。' },
  { q: 'クーリングオフは適用されますか？', a: '通信販売で購入した場合、法律上のクーリングオフは原則適用外です。ただし各社で初期不良対応や返品ポリシーを定めている場合があるため、購入前に公式サイトの返品規約を必ず確認してください。' },
  { q: '解約の手続きはどこからできますか？', a: '多くのサービスでは公式アプリまたは会員ページから解約手続きが可能です。電話窓口でのみ受付の機種もあるため、手続き方法は契約前にチェックしておくと安心です。' },
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

const contractData = [
  { name: 'みてねみまもりGPS', term: '縛りなし', fee: 'なし', note: '月額528円。公式サイトで要確認', href: '/review/mitene/' },
  { name: 'BoTトーク', term: '縛りなし', fee: 'なし', note: '月額528〜748円。公式サイトで要確認', href: '/review/bot-talk/' },
  { name: 'あんしんウォッチャー', term: '縛りなし', fee: 'なし', note: '2台目月額無料。詳細は公式サイトで要確認', href: '/review/anshin-watcher/' },
  { name: 'soranome', term: '公式サイトで要確認', fee: '公式サイトで要確認', note: '契約条件は公式サイトで最新情報を確認', href: '/review/soranome/' },
  { name: 'まもサーチ', term: '公式サイトで要確認', fee: '公式サイトで要確認', note: '見守り最大25人。詳細は公式サイトで要確認', href: '/review/mamosearch/' },
  { name: 'SayuU', term: '公式サイトで要確認', fee: '公式サイトで要確認', note: '月額1,210円。契約条件は公式で要確認', href: '/review/sayuu/' },
  { name: 'どこかなGPS', term: '公式サイトで要確認', fee: '公式サイトで要確認', note: '詳細は公式サイトで確認', href: '/review/dokokana/' },
  { name: 'みもり', term: '公式サイトで要確認', fee: '公式サイトで要確認', note: '詳細は公式サイトで確認', href: '/review/mimori/' },
  { name: 'coneco', term: '公式サイトで要確認', fee: '公式サイトで要確認', note: '詳細は公式サイトで確認', href: '/review/coneco/' },
  { name: 'myFirst Fone', term: 'SIM契約による', fee: '公式サイトで要確認', note: 'SIM別契約のため提供元で条件確認', href: '/review/myfirst-fone/' },
  { name: 'はろここ', term: '公式サイトで要確認', fee: '公式サイトで要確認', note: '詳細は公式サイトで確認', href: '/review/halococo/' },
  { name: 'キッズフォン', term: 'キャリア契約による', fee: 'キャリア契約による', note: 'キャリア契約に準ずる', href: '/review/kids-phone/' },
  { name: 'Hamic', term: '公式サイトで要確認', fee: '公式サイトで要確認', note: '詳細は公式サイトで確認', href: '/review/hamic/' },
];

export default function NoContractPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: '目的別', href: '/' }, { name: '縛りなし・解約金なし' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-light to-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-orange text-white">縛りなし</span>
            <span className="tag-pill bg-blue text-white">解約金なし</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">
            子供GPS 縛りなし・解約金なしで選ぶ
          </h1>
          <p className="text-g600 text-lg">主要13機種の解約条件を整理。いつでも解約できる安心の選び方</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">縛りなしGPSが支持される理由</h2>
          <p className="text-g600 mb-6">
            子供GPSの多くは「月額課金・契約期間の縛りなし・解約金なし」のシンプルな料金体系を採用しています。
            お子さまの成長に合わせて必要な期間だけ使える柔軟さが、スマホに乗り換える前の小学生期間に適しています。
            ただし、最低利用期間が設定されていたり、端末の分割払いが残っていたりするケースもあるため、契約前の確認が欠かせません。
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">📄</p>
              <h3 className="font-bold text-g800 mb-1">契約期間の縛りなし</h3>
              <p className="text-sm text-g600">1ヶ月から利用できる機種が多い。短期のイベント利用にも。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">💴</p>
              <h3 className="font-bold text-g800 mb-1">解約金なし</h3>
              <p className="text-sm text-g600">やめたいときに費用がかからない機種が一般的。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">📱</p>
              <h3 className="font-bold text-g800 mb-1">スマホ移行しやすい</h3>
              <p className="text-sm text-g600">中学生でスマホに切り替えるタイミングで解約できる。</p>
            </div>
          </div>

          <h2 className="section-title">主要13機種の解約条件まとめ</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue text-white">
                  <th className="p-3 text-left">機種名</th>
                  <th className="p-3 text-center">契約縛り</th>
                  <th className="p-3 text-center">解約金</th>
                  <th className="p-3 text-left">備考</th>
                </tr>
              </thead>
              <tbody>
                {contractData.map((row) => (
                  <tr key={row.name} className="border-b border-g100">
                    <td className="p-3"><Link href={row.href} className="text-blue hover:underline font-semibold">{row.name}</Link></td>
                    <td className="p-3 text-center text-g600">{row.term}</td>
                    <td className="p-3 text-center text-g600">{row.fee}</td>
                    <td className="p-3 text-g600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g500 mb-8">※契約条件は変更される場合があります。最新の料金・解約条件は必ず各社の公式サイトでご確認ください。</p>

          <h2 className="section-title">解約金が発生する場合の注意点</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: '端末代金の分割払いが残っている', desc: '月額に端末代が分割で含まれているタイプは、解約時に残債の一括請求が発生する場合があります。購入時に「買い切り型」か「分割型」かを確認しましょう。' },
              { title: '最低利用期間が設定されている', desc: 'キャンペーン適用時などに最低利用期間が条件となっている場合があります。期間内解約で違約金が発生するケースに注意。' },
              { title: 'SIM契約が別途必要な機種', desc: 'キッズ携帯や一部の通話対応端末はキャリアSIM契約が必要で、キャリアの解約規定が別途適用されます。' },
              { title: '年払い・2年払いのキャンペーン', desc: '長期前払いで割引が適用される場合、途中解約しても返金されないことがほとんどです。' },
            ].map((item) => (
              <div key={item.title} className="card-hover p-5">
                <h3 className="font-bold text-g800 mb-1">{item.title}</h3>
                <p className="text-sm text-g600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}

          <div className="mt-10 text-center bg-gradient-to-r from-blue-light to-orange-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">縛りなしで気軽に始められるGPSを探す</h2>
            <p className="text-g600 mb-6 text-sm">いつでも解約できる安心感で、お子さまの見守りを気軽にスタートしましょう。</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">全機種ランキングを見る</Link>
              <Link href="/purpose/cheap/" className="btn-accent">安い順ランキング</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
