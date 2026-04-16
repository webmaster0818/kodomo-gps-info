import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '記事制作ポリシー | 子供見守りGPS最新情報',
  description:
    '「子供見守りGPS最新情報」の記事制作ポリシー。見守りGPS端末に関する情報をユーザーファーストで、正確かつ最新、中立、分かりやすく発信するための編集方針と制作フローを公開しています。',
};

const principles = [
  {
    title: 'ユーザーファーストであり続けます',
    desc:
      'ご家庭ごとに「通学路の距離」「学年」「予算」「必要な機能」は異なります。本サービスでは、多様なニーズに対して最適な見守りGPS端末のマッチングを提供することを最優先に考えます。各端末の特性や強み、向いているご家庭の使い方を分かりやすく発信し、「安全を守りたい」という保護者の想いに寄り添った情報提供を徹底します。',
  },
  {
    title: '正確且つ最新な情報発信に努めます',
    desc:
      '見守りGPS端末は料金改定や新機種リリース、アプリのアップデートが頻繁に発生します。本サービスでは、専任スタッフが定期的に各社公式情報を確認し、記事を継続更新しています。GPS事業者様からの修正依頼についても速やかに確認・反映し、料金プラン・機能仕様・対応エリア等の変更を記事に正しく反映する運用を行っています。',
  },
  {
    title: '操作のない口コミ情報を発信いたします',
    desc:
      '当サイトが掲載する口コミ・評判については、収集した参照元を明確にし、中立性を保つことを徹底しています。特定の端末を過度に持ち上げたり、意図的にネガティブな表現を挿入したりといった操作は行いません。良い点も気になる点も両面から記載し、公正な比較ができるよう配慮しています。',
  },
  {
    title: '分かりやすさを追求し続けます',
    desc:
      '「月額料金」「バッテリー持ち」「測位精度」「搭載機能」「アプリの使いやすさ」など、見守りGPSを選ぶうえで欠かせない比較ポイントを、専門用語に頼らず分かりやすく整理してお届けします。表や図解を活用し、「結局どれを選べばいいか分からない」という保護者の悩みを解消する構成を意識しています。',
  },
];

const flow = [
  {
    step: 1,
    title: '企画設計',
    desc:
      '保護者が本当に知りたい情報は何か、検索意図・ニーズ・競合記事を調査した上で記事のテーマと構成を設計します。対象学年・利用シーン・悩みを明確にしてから執筆に入ります。',
  },
  {
    step: 2,
    title: 'ライティング',
    desc:
      '各GPS事業者の一次情報（公式サイト・取扱説明書・プレスリリース等）を確認し、正確な情報を基に記事を作成します。必要に応じて事業者への確認も行い、事実誤認を防ぎます。',
  },
  {
    step: 3,
    title: '公開',
    desc:
      '編集担当者が内容・表現・表記ゆれ・誤字脱字をチェックし、ユーザー目線でわかりやすい記事になっているかを確認したうえで公開します。',
  },
  {
    step: 4,
    title: '更新',
    desc:
      '公開後も、料金改定・新機種リリース・サービス仕様変更に応じて記事を継続的に更新します。GPS事業者様からの修正依頼にも迅速に対応し、常に最新の情報を保ちます。',
  },
];

const criteria = [
  { label: '月額料金', desc: '基本プラン・オプションプランを税込表記で比較。契約期間の縛りや解約条件も確認します。' },
  { label: 'バッテリー', desc: '最大駆動時間だけでなく、実際の更新頻度や使い方によるバッテリー持ちの目安を記載します。' },
  { label: '測位精度', desc: 'GPS・Wi-Fi・基地局・みちびき対応など測位方式の違いと、屋内外での精度傾向を整理します。' },
  { label: '搭載機能', desc: 'エリア通知、移動履歴、SOSボタン、トーク機能など、機種ごとの搭載機能の違いを比較します。' },
  { label: 'アプリの使いやすさ', desc: '画面のわかりやすさ、通知の出方、家族での共有のしやすさなど、保護者目線の使い勝手を評価します。' },
  { label: '本体サイズ・重量', desc: 'ランドセルやポケットへの収まりやすさ、お子さまの負担にならないかを確認します。' },
  { label: 'サポート体制', desc: '問い合わせ窓口、故障時の対応、利用開始までの手続きの分かりやすさをチェックします。' },
];

export default function ContentPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: '記事制作ポリシー' }]} />

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">記事制作ポリシー</h1>
          <p className="text-g600 mb-10 leading-relaxed">
            「子供見守りGPS最新情報」は、お子さまの安全を見守りたい保護者のみなさまに、
            本当に役立つ情報をお届けするために、以下の方針に基づいて記事を制作しています。
          </p>

          <h2 className="section-title">記事制作の4つの基本方針</h2>
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

          <h2 className="section-title">記事制作フロー</h2>
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

          <h2 className="section-title">見守りGPS選びの評価基準</h2>
          <p className="text-g600 mb-6 leading-relaxed text-sm md:text-base">
            本サービスでは、以下の評価軸で各見守りGPS端末を比較・評価し、記事に反映しています。
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
              記事内容に関する修正依頼、料金改定・新機種リリースに伴う情報更新のご要望、
              その他お問い合わせは、下記運営者までお寄せください。内容を確認のうえ、速やかに対応いたします。
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
