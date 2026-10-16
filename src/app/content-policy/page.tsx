import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '記事制作ポリシー',
  description:
    '「子供見守りGPS最新情報」の記事制作ポリシーです。見守りGPS端末に関する情報を、利用者を第一に、正確かつ最新、中立で分かりやすく発信するための編集方針と制作の流れをご説明します。',
};

const principles = [
  {
    title: '利用者を第一とした情報提供',
    desc:
      '通学路の距離、学年、予算、必要な機能は、ご家庭ごとに異なります。当サイトでは、多様なニーズに対して最適な見守りGPS端末を選んでいただけるよう、情報提供を最優先に考えています。各端末の特性や強み、適しているご家庭の使い方を分かりやすく記載し、お子さまの安全を守りたいという保護者の方の考えに沿った情報提供に努めます。',
  },
  {
    title: '正確かつ最新の情報発信',
    desc:
      '見守りGPS端末は、料金改定や新機種の発売、アプリの更新が頻繁に行われます。当サイトでは、専任スタッフが各社の公式情報を定期的に確認し、記事を継続して更新しています。GPS事業者様からの修正依頼についても速やかに確認し、料金プラン・機能仕様・対応エリア等の変更を記事に正しく反映しています。',
  },
  {
    title: '操作のない口コミ情報の掲載',
    desc:
      '当サイトが掲載する口コミ・評判については、参照元を明記し、中立性を保つよう努めています。特定の端末を過度に評価すること、または意図的に否定的な表現を加えることは行いません。良い点と気になる点の両方を記載し、公正に比較できるよう配慮しています。',
  },
  {
    title: '分かりやすさの追求',
    desc:
      '月額料金、バッテリー持ち、測位精度、搭載機能、アプリの使いやすさなど、見守りGPSを選ぶうえで欠かせない比較項目を、専門用語に頼らず分かりやすく整理しています。表や図を用い、どの端末を選べばよいか判断しにくいという保護者の方のお悩みを解消できる構成を心がけています。',
  },
];

const flow = [
  {
    step: 1,
    title: '企画設計',
    desc:
      '保護者の方が必要とする情報を把握するため、検索意図・ニーズ・競合記事を調査したうえで、記事のテーマと構成を設計します。対象学年・利用場面・お悩みを明確にしてから執筆に入ります。',
  },
  {
    step: 2,
    title: '執筆',
    desc:
      '各GPS事業者の一次情報（公式サイト・取扱説明書・プレスリリース等）を確認し、正確な情報にもとづいて記事を作成します。必要に応じて事業者への確認も行い、事実誤認の防止に努めます。',
  },
  {
    step: 3,
    title: '公開',
    desc:
      '編集担当者が内容・表現・表記ゆれ・誤字脱字を確認し、読者にとって分かりやすい記事になっていることを確かめたうえで公開します。',
  },
  {
    step: 4,
    title: '更新',
    desc:
      '公開後も、料金改定・新機種の発売・サービス仕様の変更に応じて記事を継続的に更新します。GPS事業者様からの修正依頼にも速やかに対応し、最新の情報を保つよう努めます。',
  },
];

const criteria = [
  { label: '月額料金', desc: '基本プラン・オプションプランの料金を、税込の金額で比較しています。契約期間の拘束や解約条件も確認しています。' },
  { label: 'バッテリー', desc: '最大駆動時間に加え、位置情報の更新頻度や使い方に応じたバッテリー持ちの目安を記載しています。' },
  { label: '測位精度', desc: 'GPS・Wi-Fi・基地局・みちびき対応など測位方式の違いと、屋内外での精度の傾向を整理しています。' },
  { label: '搭載機能', desc: 'エリア通知、移動履歴、SOSボタン、トーク機能など、機種ごとの搭載機能の違いを比較しています。' },
  { label: 'アプリの使いやすさ', desc: '画面の分かりやすさ、通知の表示方法、家族間での共有のしやすさなど、保護者の方から見た使い勝手を評価しています。' },
  { label: '本体サイズ・重量', desc: 'ランドセルやポケットへの収まりやすさ、お子さまの負担にならないかを確認しています。' },
  { label: 'サポート体制', desc: 'お問い合わせ窓口、故障時の対応、利用開始までの手続きの分かりやすさを確認しています。' },
];

export default function ContentPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: '記事制作ポリシー' }]} />

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">記事制作ポリシー</h1>
          <p className="text-g600 mb-10 leading-relaxed">
            当サイトの記事制作方針、情報の収集方法および制作の流れについてご説明します。
            「子供見守りGPS最新情報」は、お子さまの安全を見守りたい保護者の方に役立つ情報をお届けするため、以下の方針にもとづいて記事を制作しています。
          </p>

          <h2 className="section-title">記事制作の基本方針</h2>
          <div className="grid gap-4 mb-12">
            {principles.map((p, i) => (
              <div key={p.title} className="card-hover p-6">
                <div className="flex items-start gap-3 mb-2">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue text-white flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  <h3 className="font-extrabold text-g800 text-base md:text-lg">{p.title}</h3>
                </div>
                <p className="text-g600 text-sm md:text-base leading-relaxed pl-10">{p.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">記事制作の流れ</h2>
          <div className="space-y-4 mb-12">
            {flow.map((s) => (
              <div key={s.step} className="flex gap-4 items-start card-hover p-5">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center font-extrabold">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-bold text-g800 text-base md:text-lg mb-1">{s.title}</h3>
                  <p className="text-sm md:text-base text-g600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">見守りGPS端末の評価基準</h2>
          <p className="text-g600 mb-6 leading-relaxed text-sm md:text-base">
            当サイトでは、以下の評価項目にもとづいて各見守りGPS端末を比較・評価し、記事に反映しています。
          </p>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-light">
                  <th className="py-3 px-3 text-left font-bold text-g800 w-1/4">評価項目</th>
                  <th className="py-3 px-3 text-left font-bold text-g800">評価内容</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((c) => (
                  <tr key={c.label} className="border-b border-g100">
                    <td className="py-3 px-3 font-semibold text-g700 align-top">{c.label}</td>
                    <td className="py-3 px-3 text-g600">{c.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title">修正依頼・お問い合わせについて</h2>
          <div className="glass-card p-6 mb-8">
            <p className="text-g600 text-sm md:text-base leading-relaxed mb-3">
              記事内容に関する修正依頼、料金改定・新機種の発売に伴う情報更新のご要望、
              その他のお問い合わせは、下記の運営者までお寄せください。内容を確認のうえ、速やかに対応いたします。
            </p>
            <p className="text-g700 font-semibold">株式会社MediaX</p>
            <p className="text-g600 text-sm">
              〒150-0011 東京都渋谷区東一丁目27番10号
            </p>
          </div>

          <div className="mt-8 text-sm text-g500">
            <p>制定日：2025年4月1日</p>
            <p>最終改定日：2025年4月1日</p>
          </div>
        </div>
      </section>
    </>
  );
}
