import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | 子供見守りGPS最新情報',
  description:
    '「子供見守りGPS最新情報」のプライバシーポリシー。運営者・株式会社MediaXによる個人情報の取得・利用・管理、Cookie等の取扱いについて定めています。',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'プライバシーポリシー' }]} />

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-g800 mb-4">プライバシーポリシー</h1>
          <p className="text-g600 mb-8 leading-relaxed">
            株式会社MediaX（以下「当社」といいます。）は、当社が運営するウェブサイト「子供見守りGPS最新情報」（以下「本サービス」といいます。）において取得する個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
          </p>

          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-extrabold text-g800 mb-3 pb-2 border-b-2 border-blue-light">
                1. 個人情報の定義
              </h2>
              <p className="text-g600 leading-relaxed text-sm md:text-base">
                本ポリシーにおける「個人情報」とは、個人情報の保護に関する法律（個人情報保護法）第2条第1項に定める個人情報をいいます。具体的には、氏名、生年月日、住所、電話番号、メールアドレス等の記述、または個人識別符号によって特定の個人を識別できる情報を指します。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-g800 mb-3 pb-2 border-b-2 border-blue-light">
                2. 個人情報の取得方法
              </h2>
              <p className="text-g600 leading-relaxed text-sm md:text-base mb-2">
                当社は、ユーザーが本サービスを利用する際に、以下の方法により個人情報を取得することがあります。
              </p>
              <ul className="list-disc list-inside text-g600 text-sm md:text-base space-y-1 pl-2">
                <li>お問い合わせフォーム、資料請求フォーム等の入力情報</li>
                <li>見守りGPS端末事業者への申し込みに係る情報</li>
                <li>アンケートやキャンペーンへの応募情報</li>
                <li>Cookie、アクセスログ、閲覧履歴等の自動取得情報</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-g800 mb-3 pb-2 border-b-2 border-blue-light">
                3. 個人情報の利用目的
              </h2>
              <p className="text-g600 leading-relaxed text-sm md:text-base mb-2">
                当社は、取得した個人情報を以下の目的で利用します。
              </p>
              <ul className="list-disc list-inside text-g600 text-sm md:text-base space-y-1 pl-2">
                <li>見守りGPS端末事業者への情報提供およびマッチングのため</li>
                <li>ユーザーからのお問い合わせへの対応のため</li>
                <li>メールマガジン・お知らせ等の配信のため</li>
                <li>アンケート回答者への謝礼（調査謝礼）の送付のため</li>
                <li>本サービスの利用状況の分析のため</li>
                <li>本サービスの改良・新機能の開発のため</li>
                <li>利用規約違反や不正利用の調査のため</li>
                <li>不正アクセス・不正利用の防止のため</li>
                <li>統計データの作成および分析のため</li>
                <li>広告配信および広告効果の測定のため</li>
                <li>トラブル解決および紛争対応のため</li>
                <li>その他、上記利用目的に付随する業務のため</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-g800 mb-3 pb-2 border-b-2 border-blue-light">
                4. 個人情報の第三者提供
              </h2>
              <p className="text-g600 leading-relaxed text-sm md:text-base mb-2">
                当社は、以下のいずれかに該当する場合を除き、あらかじめユーザーの同意を得ることなく、個人情報を第三者に提供することはありません。
              </p>
              <ul className="list-disc list-inside text-g600 text-sm md:text-base space-y-1 pl-2">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>国の機関もしくは地方公共団体等の法令の定める事務を遂行する際に協力する必要がある場合</li>
                <li>見守りGPS端末事業者へのマッチングに必要な範囲で、事前に明示した場合</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-g800 mb-3 pb-2 border-b-2 border-blue-light">
                5. 個人情報の管理
              </h2>
              <p className="text-g600 leading-relaxed text-sm md:text-base">
                当社は、個人情報を正確かつ最新の内容に保つよう努め、不正アクセス、紛失、破損、改ざん、漏洩等を防止するため、必要かつ適切な安全管理措置を講じます。また、従業者および委託先（個人情報の取扱いを委託する場合）に対して、必要かつ適切な監督を行います。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-g800 mb-3 pb-2 border-b-2 border-blue-light">
                6. 個人情報の開示・訂正・利用停止
              </h2>
              <p className="text-g600 leading-relaxed text-sm md:text-base">
                ユーザーは、当社に対して自己の個人情報の開示、訂正、追加、削除、利用停止、第三者提供の停止を求めることができます。ご請求の際は、本人確認のための書類等のご提出をお願いする場合があります。お申し出は、第10項に記載のお問い合わせ窓口までご連絡ください。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-g800 mb-3 pb-2 border-b-2 border-blue-light">
                7. Cookie等の利用について
              </h2>
              <p className="text-g600 leading-relaxed text-sm md:text-base mb-3">
                本サービスでは、サービスの利便性向上、利用状況の分析、広告配信の最適化等を目的として、Cookieおよび類似の技術を利用することがあります。ユーザーはブラウザの設定によりCookieの受け取りを拒否することができますが、その場合、本サービスの一部機能が利用できなくなることがあります。
              </p>
              <h3 className="font-bold text-g800 text-base mb-2">Microsoft Clarityの利用</h3>
              <p className="text-g600 leading-relaxed text-sm md:text-base">
                本サービスでは、ユーザー体験の改善を目的として、Microsoft Corporation提供のウェブ解析ツール「Microsoft Clarity」を利用しています。Microsoft Clarityは、Cookie等の技術を用いて、本サービス上でのユーザーの行動（クリック、スクロール、閲覧経路等）を収集・分析します。取得される情報は匿名化されており、個人を特定するものではありません。Microsoft Clarityによる情報取得を希望されない場合は、ブラウザの設定によりCookieを無効化してください。詳細はMicrosoftのプライバシーに関する声明をご参照ください。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-g800 mb-3 pb-2 border-b-2 border-blue-light">
                8. 免責事項について
              </h2>
              <p className="text-g600 leading-relaxed text-sm md:text-base">
                当社は、本サービスに掲載している情報の正確性・有用性に万全を期しておりますが、その完全性・最新性を保証するものではありません。また、本サービスからリンクしている外部サイトで取得される個人情報について、当社は一切の責任を負いません。各外部サイトのプライバシーポリシーをあわせてご確認ください。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-g800 mb-3 pb-2 border-b-2 border-blue-light">
                9. プライバシーポリシーの変更
              </h2>
              <p className="text-g600 leading-relaxed text-sm md:text-base">
                当社は、法令の変更や本サービスの運用状況に応じて、本ポリシーを変更することがあります。変更後の本ポリシーは、本サービス上に掲載した時点から効力を生じるものとします。重要な変更については、本サービス上で分かりやすく告知いたします。
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-g800 mb-3 pb-2 border-b-2 border-blue-light">
                10. お問い合わせ窓口
              </h2>
              <div className="glass-card p-6">
                <p className="text-g700 font-semibold mb-2">株式会社MediaX</p>
                <p className="text-g600 text-sm md:text-base leading-relaxed">
                  〒150-0011
                  <br />
                  東京都渋谷区東一丁目27番10号
                  <br />
                  「子供見守りGPS最新情報」個人情報お問い合わせ窓口
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-sm text-g500">
            <p>制定日：2025年4月1日</p>
            <p>最終改定日：2025年4月1日</p>
          </div>
        </div>
      </section>
    </>
  );
}
