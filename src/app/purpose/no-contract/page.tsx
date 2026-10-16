import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '子供GPS 縛りなし・解約金なしで選ぶ | 主要機種の解約条件まとめ',
  description:
    '契約期間の縛りや解約金が発生しない子供GPSの選び方を解説します。主要13機種の解約条件を比較表で整理し、解約時の注意点もまとめています。',
};

const faqData = [
  { q: '子供GPSに長期契約の縛りはありますか？', a: '多くの子供GPSサービスには、契約期間の縛りや解約金がありません。月額料金のみで利用でき、不要になればいつでも解約できるのが一般的です。ただし、機種ごとに条件が異なるため、ご契約前に公式サイトにて最新の条件をご確認ください。' },
  { q: '解約するとお金がかかることはありますか？', a: '解約金が発生しない機種が多いものの、端末の分割払いが残っている場合は、残債の支払いが必要になることがあります。また、最低利用期間が設けられている機種では、期間内の解約で手数料が発生する場合もあります。' },
  { q: '途中解約した場合、端末は使えなくなりますか？', a: '月額課金型のサービスでは、解約と同時にGPS機能が停止します。端末自体は手元に残りますが、再契約しない限り位置情報は取得できません。買取型ではなく「端末+月額」型の機種では、特にこの点にご注意ください。' },
  { q: '休止（一時停止）できる機種はありますか？', a: '長期休暇中などに利用を一時停止できるかどうかは、機種によって異なります。休止制度のない機種では、一度解約して再契約する形になるため、再契約時に初期費用が再度発生しないかを事前にご確認ください。' },
  { q: 'クーリングオフは適用されますか？', a: '通信販売で購入した場合、法律上のクーリングオフは原則として適用されません。ただし、各社で初期不良対応や返品ポリシーを定めている場合があるため、購入前に公式サイトの返品規約を必ずご確認ください。' },
  { q: '解約の手続きはどこからできますか？', a: '多くのサービスでは、公式アプリまたは会員ページから解約手続きができます。電話窓口でのみ受け付けている機種もあるため、手続き方法をご契約前に確認しておくことをおすすめします。' },
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
  { name: 'みてねみまもりGPS', term: '縛りなし', fee: 'なし', note: '月額528円。詳細は公式サイトにてご確認ください', href: '/review/mitene/' },
  { name: 'BoTトーク', term: '縛りなし', fee: 'なし', note: '月額528〜748円。詳細は公式サイトにてご確認ください', href: '/review/bot-talk/' },
  { name: 'あんしんウォッチャー', term: '縛りなし', fee: 'なし', note: '2台目月額無料。詳細は公式サイトにてご確認ください', href: '/review/anshin-watcher/' },
  { name: 'soranome', term: '公式サイトで要確認', fee: '公式サイトで要確認', note: '契約条件は公式サイトにて最新情報をご確認ください', href: '/review/soranome/' },
  { name: 'まもサーチ', term: '公式サイトで要確認', fee: '公式サイトで要確認', note: '見守り最大25人。詳細は公式サイトにてご確認ください', href: '/review/mamosearch/' },
  { name: 'SayuU', term: '公式サイトで要確認', fee: '公式サイトで要確認', note: '月額1,210円。契約条件は公式サイトにてご確認ください', href: '/review/sayuu/' },
  { name: 'みもり', term: '公式サイトで要確認', fee: '公式サイトで要確認', note: '詳細は公式サイトにてご確認ください', href: '/review/mimori/' },
  { name: 'coneco', term: '公式サイトで要確認', fee: '公式サイトで要確認', note: '詳細は公式サイトにてご確認ください', href: '/review/coneco/' },
  { name: 'myFirst Fone', term: 'SIM契約による', fee: '公式サイトで要確認', note: 'SIMは別契約のため、条件は提供元にてご確認ください', href: '/review/myfirst-fone/' },
  { name: 'はろここ', term: '公式サイトで要確認', fee: '公式サイトで要確認', note: '詳細は公式サイトにてご確認ください', href: '/review/halococo/' },
  { name: 'キッズフォン', term: 'キャリア契約による', fee: 'キャリア契約による', note: 'キャリア契約に準ずる', href: '/review/kids-phone/' },
  { name: 'Hamic', term: '公式サイトで要確認', fee: '公式サイトで要確認', note: '詳細は公式サイトにてご確認ください', href: '/review/hamic/' },
];

export default function NoContractPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "子供GPS 縛りなし・解約金なしで選ぶ", "datePublished": "2026-03-15", "dateModified": "2026-05-27", "author": {"@type": "Person", "name": "子供見守りGPS最新情報 編集部"}, "publisher": {"@type": "Organization", "name": "子供見守りGPS最新情報"}}) }} />
      <Breadcrumb items={[{ name: '目的別', href: '/purpose/' }, { name: '縛りなし・解約金なし' }]} />

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
          <p className="text-g600 text-lg">主要13機種の解約条件を整理し、いつでも解約できる機種の選び方を解説します。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="section-title">縛りなしGPSが支持される理由</h2>
          <p className="text-g600 mb-6">
            子供GPSの多くは、「月額課金・契約期間の縛りなし・解約金なし」のシンプルな料金体系を採用しています。
            お子さまの成長に合わせて必要な期間だけ使える柔軟さが、スマートフォンに移行する前の小学生の期間に適しています。
            ただし、最低利用期間が設定されている場合や、端末の分割払いが残っている場合もあるため、ご契約前の確認が欠かせません。
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">📄</p>
              <h3 className="font-bold text-g800 mb-1">契約期間の縛りなし</h3>
              <p className="text-sm text-g600">1カ月から利用できる機種が多く、短期のイベントでの利用にも適しています。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">💴</p>
              <h3 className="font-bold text-g800 mb-1">解約金なし</h3>
              <p className="text-sm text-g600">利用をやめる際に費用がかからない機種が一般的です。</p>
            </div>
            <div className="card-hover p-5">
              <p className="text-2xl mb-2">📱</p>
              <h3 className="font-bold text-g800 mb-1">スマートフォンへの移行が容易</h3>
              <p className="text-sm text-g600">中学生になりスマートフォンに切り替えるタイミングで解約できます。</p>
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
          <p className="text-xs text-g500 mb-8">※契約条件は変更される場合があります。最新の料金・解約条件は、必ず各社の公式サイトにてご確認ください。</p>

          <h2 className="section-title">解約金が発生する場合の注意点</h2>
          <div className="space-y-4 mb-8">
            {[
              { title: '端末代金の分割払いが残っている', desc: '月額に端末代が分割で含まれているタイプでは、解約時に残債が一括で請求される場合があります。購入時に「買い切り型」か「分割型」かをご確認ください。' },
              { title: '最低利用期間が設定されている', desc: 'キャンペーン適用時などに、最低利用期間が条件となっている場合があります。期間内の解約で違約金が発生するケースにご注意ください。' },
              { title: 'SIM契約が別途必要な機種', desc: 'キッズ携帯や一部の通話対応端末はキャリアのSIM契約が必要で、キャリアの解約規定が別途適用されます。' },
              { title: '年払い・2年払いのキャンペーン', desc: '長期前払いで割引が適用される場合、途中で解約しても返金されないことがほとんどです。' },
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
            <h2 className="text-xl font-extrabold text-g800 mb-3">縛りなしで始められるGPSの探し方</h2>
            <p className="text-g600 mb-6 text-sm">いつでも解約できる機種であれば、お子さまの見守りを気軽に始められます。</p>
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
