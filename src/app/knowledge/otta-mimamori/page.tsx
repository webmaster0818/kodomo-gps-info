import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'otta（オッタ）の見守りとは｜しくみ・料金プラン・電池寿命・GPS端末との違いを公式で整理【2026年11月】',
  description:
    '見守りサービス「otta（オッタ）」を公式サイトとFAQで整理しています。見守りスポットを通過したときに位置を記録するしくみ、プラン別の月額と通知できる場所の数、端末ごとの電池寿命と防水、GPS端末との違いをまとめています。',
  keywords: ['otta 見守り', 'オッタ 見守り', 'otta 料金', 'otta 電池', 'otta GPS 違い'],
};

const CHECKED = '2026年11月25日確認';
const AREA_ALL = 'https://www.otta.me/kids/area/all/';

type Plan = { name: string; monthly: string; spots: string; app: string };

const plans: Plan[] = [
  { name: 'もしもプラン（無料）', monthly: '無料', spots: '—', app: '動画広告を視聴すると一定時間、最新の位置を確認できる（過去の履歴は確認できない）' },
  { name: 'ライトプラン', monthly: '396円', spots: '学校を含め3か所', app: '位置情報の履歴・通知を確認できる' },
  { name: 'スタンダードプラン', monthly: '561円', spots: '30か所', app: '位置情報の履歴・通知を確認できる' },
  { name: 'プレミアムプラン', monthly: '726円', spots: '99か所', app: '位置情報の履歴・通知を確認できる（自宅の「ただいま通知」は見守りルーターの購入が必要）' },
];

type Device = { name: string; battery: string; water: string };

const devices: Device[] = [
  { name: 'otta.a（お守り型）', battery: '最長6年（ボタン電池CR2032内蔵・電池交換不可）', water: 'IPX67相当（FAQ）※比較表では「IPX69相当」と記載' },
  { name: 'otta.w（笛型）', battery: '最長1年（単5電池・自分で交換できる）', water: 'IPX5相当' },
  { name: 'otta.s（小型）', battery: 'ボタン電池CR2032を自分で交換（寿命の記載なし）', water: 'IPX5相当' },
];

const faqData = [
  {
    q: 'ottaはGPSですか？',
    a: 'ottaの見守り端末（otta.a・otta.w・otta.s）はGPSではありません。端末が発信する電波を、学校や通学路の「見守りスポット」の基地局や、見守り人アプリを入れたスマートフォンが検知したときに位置が記録されるしくみです。公式FAQでは「GPSではないため、ご自宅や現在地を表示することは出来ません」と案内されています。GPSを使う「otta.g」は別の商品で、本体価格は10,780円、GPS見守りプランは月748円です（2026年11月25日確認）。',
  },
  {
    q: '料金はいくらかかりますか？',
    a: '自治体との提携がない地域の標準プランは、クレジットカード毎月払いでライトプラン月396円、スタンダードプラン月561円、プレミアムプラン月726円（いずれも税込）です。無料のもしもプランもあります。契約事務手数料は3,300円で、クーポンコードの入力で無料になると案内されています。自治体によってプランや料金は異なります。',
  },
  {
    q: '2026年に値上げがありましたか？',
    a: 'otta公式のお知らせでは、2026年10月1日から有料プランの月額を一律60円（税別）値上げすると案内されています。ライトプランは300円から360円、スタンダードプランは450円から510円、プレミアムプランは600円から660円（いずれも税別）です。川俣町・箕面市・大田市・島原市・春日部市は対象外と記載されています。',
  },
  {
    q: '電池はどのくらいもちますか？',
    a: '公式の料金表では、otta.aが最長6年（内蔵電池で交換不可）、otta.wが最長1年（単5電池で交換可能）です。otta.sはボタン電池CR2032を自分で交換します。電池残量が少なくなると、位置が記録されたタイミングでアラートが届くと案内されています。',
  },
  {
    q: '自治体で無料配布されることはありますか？',
    a: 'あります。たとえば大阪府箕面市は、市立小中学校の全児童生徒（約12,600人）に見守り端末を無償で配付し、保護者のスマートフォンで位置記録を確認できる有料サービスを月額330円（税込）としています。お住まいの地域の扱いは、otta公式の地域別ページか自治体の案内でご確認ください。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function OttaMimamoriPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'otta（オッタ）の見守りとは', datePublished: '2026-11-25', dateModified: '2026-11-25', author: { '@type': 'Organization', name: '子供見守りGPS最新情報 編集部', url: 'https://gps-kodomo.com/' }, publisher: { '@type': 'Organization', name: '子供見守りGPS最新情報' } }) }} />
      <Breadcrumb items={[{ name: 'お役立ち情報', href: '/knowledge/' }, { name: 'otta（オッタ）の見守りとは' }]} />

      <section className="bg-[#F4F7FA] py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag-pill bg-blue text-white">見守りサービス</span>
            <span className="tag-pill bg-orange text-white">しくみ・料金</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">otta（オッタ）の見守り：しくみ・料金・電池寿命・GPS端末との違い</h1>
          <p className="text-g600 text-lg">自治体の配布などで目にすることの多い見守りサービス「otta」について、公式サイト・FAQの記載をもとに整理しています（{CHECKED}）。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hover p-6 mb-8">
            <h2 className="font-extrabold text-g800 mb-2">結論：ottaは「通過した場所の記録」、GPS端末は「今いる場所の確認」です</h2>
            <ul className="space-y-1.5 text-sm text-g700">
              <li>・<strong>しくみ</strong>：端末の電波を、学校や通学路などの見守りスポット（公式では全国約8万か所）や見守り人のスマートフォンが検知したときに位置が記録されます。</li>
              <li>・<strong>強み</strong>：充電が不要で、otta.aは電池が最長6年もちます。端末は12gと小型です。</li>
              <li>・<strong>注意点</strong>：GPSではないため現在地は表示されず、表示されるのは最後に検知された位置です。見守りスポットの少ない地域では記録の間隔が空きます。</li>
            </ul>
          </div>

          <h2 className="section-title">ottaのしくみ</h2>
          <p className="text-sm text-g700 mb-3">
            公式サイトでは、位置が記録される経路として次の3つが案内されています。いずれも、端末が近くを通ったときに記録されるしくみで、端末自体が位置を測るわけではありません。
          </p>
          <ul className="space-y-2 text-sm text-g700 mb-3">
            <li>・<strong>見守りスポット</strong>：学校、通学路上のお店や駅、コンビニなどに設置された基地局です。公式では「全国8万箇所」と記載されています。</li>
            <li>・<strong>見守り人</strong>：見守り人アプリ（無料）を入れたスマートフォンを持つ人とすれ違ったときに位置が記録されます。見守り人にはすれ違ったことは通知されません。</li>
            <li>・<strong>見守りタクシー</strong>：タクシーの後部座席タブレットに検知機能が搭載され、「動く見守りスポット」として記録に使われると案内されています。</li>
          </ul>
          <p className="text-sm text-g700 mb-3">
            保護者には、通知を設定した見守りスポットを通過したときに、メールまたはアプリのプッシュ通知が届きます。端末はランドセルの外にぶら下げて使うよう案内されています。
          </p>
          <p className="text-xs text-g400 mb-8">
            出典：<a href="https://www.otta.me/kids/" target="_blank" rel="noopener noreferrer" className="text-blue underline">otta 子ども向け見守りサービス</a>、<a href="https://www.otta.me/post_qa/17259/" target="_blank" rel="noopener noreferrer" className="text-blue underline">otta FAQ（通知）</a>、<a href="https://www.otta.me/post_qa/17160/" target="_blank" rel="noopener noreferrer" className="text-blue underline">otta FAQ（電池交換）</a>（{CHECKED}）
          </p>

          <h2 className="section-title">料金プラン（自治体との提携がない地域の標準）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">プラン</th>
                  <th className="p-3 text-left border-b-2 border-blue">月額（毎月払い・税込）</th>
                  <th className="p-3 text-left border-b-2 border-blue">通知を設定できる場所</th>
                  <th className="p-3 text-left border-b-2 border-blue">保護者アプリでの確認</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((p) => (
                  <tr key={p.name} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">{p.name}</td>
                    <td className="p-3 text-g700">{p.monthly}</td>
                    <td className="p-3 text-g700">{p.spots}</td>
                    <td className="p-3 text-g700">{p.app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-3">
            出典：<a href={AREA_ALL} target="_blank" rel="noopener noreferrer" className="text-blue underline">otta プランとお支払い方法（全国）</a>、<a href="https://www.otta.me/post_qa/17259/" target="_blank" rel="noopener noreferrer" className="text-blue underline">otta FAQ（通知スポットの上限）</a>（{CHECKED}）。
          </p>
          <ul className="space-y-1.5 text-sm text-g700 mb-8">
            <li>・契約事務手数料は3,300円で、クーポンコードの入力で無料になると案内されています。1年払いは10%引きです。</li>
            <li>・初回契約時はクーポンコードの入力で見守り端末1台が無料で届くと案内されています。端末を購入する場合、otta.aは5,500円（税込）と公式の比較表に記載されています。</li>
            <li>・2026年10月1日に有料プランの月額が一律60円（税別）値上げされました（<a href="https://www.otta.me/37628/" target="_blank" rel="noopener noreferrer" className="text-blue underline">otta 料金改定のお知らせ</a>）。</li>
            <li>・<strong>自治体ごとにプランや料金が異なります</strong>。お住まいの地域の料金は otta 公式の地域別ページでご確認ください。</li>
          </ul>

          <h2 className="section-title">端末ごとの電池寿命と防水</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">端末</th>
                  <th className="p-3 text-left border-b-2 border-blue">電池</th>
                  <th className="p-3 text-left border-b-2 border-blue">防水</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((d) => (
                  <tr key={d.name} className="border-b border-gray-100 align-top">
                    <td className="p-3 font-bold text-g800">{d.name}</td>
                    <td className="p-3 text-g700">{d.battery}</td>
                    <td className="p-3 text-g700">{d.water}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-8">
            出典：<a href={AREA_ALL} target="_blank" rel="noopener noreferrer" className="text-blue underline">otta プランとお支払い方法（電池・バッテリー欄）</a>、<a href="https://www.otta.me/post_qa/17160/" target="_blank" rel="noopener noreferrer" className="text-blue underline">otta FAQ（電池交換）</a>、<a href="https://www.otta.me/post_qa/17207/" target="_blank" rel="noopener noreferrer" className="text-blue underline">otta FAQ（防水）</a>（{CHECKED}）。otta.a の防水は、FAQでは「IPX67相当」、子ども向けページの比較表では「IPX69相当」と記載が分かれているため、両方を掲載しています。
          </p>

          <h2 className="section-title">GPS端末との違い</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="p-3 text-left border-b-2 border-blue">項目</th>
                  <th className="p-3 text-left border-b-2 border-blue">otta（見守り端末）</th>
                  <th className="p-3 text-left border-b-2 border-blue">GPS端末</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 align-top"><td className="p-3 font-bold text-g800">わかること</td><td className="p-3 text-g700">見守りスポットなどを通過した場所と時刻の記録</td><td className="p-3 text-g700">端末が測った現在地と移動履歴</td></tr>
                <tr className="border-b border-gray-100 align-top"><td className="p-3 font-bold text-g800">充電</td><td className="p-3 text-g700">不要（電池式）</td><td className="p-3 text-g700">必要</td></tr>
                <tr className="border-b border-gray-100 align-top"><td className="p-3 font-bold text-g800">記録されない場面</td><td className="p-3 text-g700">見守りスポット・見守り人が近くにいない場所</td><td className="p-3 text-g700">電池切れ、電波が届きにくい屋内・地下など</td></tr>
                <tr className="border-b border-gray-100 align-top"><td className="p-3 font-bold text-g800">月額の目安</td><td className="p-3 text-g700">無料〜726円（標準プラン）</td><td className="p-3 text-g700">機種により異なる（<Link href="/compare/price/" className="text-blue underline">月額料金比較</Link>）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-g400 mb-3">
            出典：<a href="https://www.otta.me/kids/" target="_blank" rel="noopener noreferrer" className="text-blue underline">otta 子ども向け見守りサービス</a>、<a href="https://www.otta.me/post_qa/17199/" target="_blank" rel="noopener noreferrer" className="text-blue underline">otta FAQ（現在地の表示）</a>（{CHECKED}）。表は当サイトで公式の説明をもとに整理したものです。
          </p>
          <p className="text-sm text-g700 mb-8">
            公式FAQでは、現在地に基地局がない限り現在地は表示できず、最後に検知した位置を表示すると説明されています。下校後の寄り道先や習い事の帰りなど「今どこにいるか」をすぐ確認したい場合はGPS端末、通学路の通過記録と電池の手間の少なさを重視する場合はottaが向いています。選び方は「<Link href="/knowledge/how-to-choose/" className="text-blue underline">子供GPSの選び方</Link>」をご覧ください。
          </p>

          <h2 className="section-title">自治体での配布の例</h2>
          <p className="text-sm text-g700 mb-3">
            大阪府箕面市は、市立小中学校の全児童生徒（約12,600人）に見守り端末を無償で配付しています。市内の学校・通学路・公園・お店など約700か所に見守りスポットがあり、保護者のスマートフォンで位置記録を確認できる有料サービスは月額330円（税込）、学校・市教育委員会だけが緊急時に確認する無料サービスは0円です（<a href="https://www.city.minoh.lg.jp/edushien/otta.html" target="_blank" rel="noopener noreferrer" className="text-blue underline">箕面市 見守りシステム「otta」</a>、{CHECKED}）。
          </p>
          <p className="text-sm text-g700 mb-8">
            ほかの自治体の取り組みは「<Link href="/knowledge/school-permission/" className="text-blue underline">GPSの学校持ち込み許可の取り方と自治体の補助制度</Link>」でも紹介しています。
          </p>

          <h2 className="section-title">よくある質問</h2>
          {faqData.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>{faq.q}</summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
          <p className="text-xs text-g400 mt-3">出典は上記の otta 公式ページ・箕面市公式ページ（{CHECKED}）</p>

          <div className="mt-10 text-center bg-blue-light rounded-2xl p-8">
            <h2 className="text-xl font-extrabold text-g800 mb-3">関連情報</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/knowledge/mamorio-kodomo/" className="btn-primary">MAMORIOと子供の見守り</Link>
              <Link href="/knowledge/maigo-boushi-gps/" className="btn-accent">迷子防止とGPSの更新間隔</Link>
              <Link href="/compare/price/" className="btn-primary">子供GPS 月額料金比較</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
