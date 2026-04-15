import Link from 'next/link';

const deviceLinks = [
  { label: 'みてねみまもりGPS', href: '/review/mitene/' },
  { label: 'BoTトーク', href: '/review/bot-talk/' },
  { label: 'あんしんウォッチャー', href: '/review/anshin-watcher/' },
  { label: 'ソラノメ', href: '/review/soranome/' },
  { label: 'まもサーチ', href: '/review/mamosearch/' },
  { label: 'SayuU（サユー）', href: '/review/sayuu/' },
];

const guideLinks = [
  { label: 'GPSランキング', href: '/#ranking' },
  { label: '目的別ガイド', href: '/#purpose' },
  { label: '選び方5ステップ', href: '/#guide' },
  { label: 'よくある質問', href: '/#faq' },
];

export default function Footer() {
  return (
    <footer className="bg-g800 text-white mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-lg font-extrabold mb-3 flex items-center gap-2">
              <span aria-hidden="true">📍</span>子供見守りGPS最新情報
            </p>
            <p className="text-sm text-g300 leading-relaxed">
              お子さまの安全を見守るGPS端末を徹底比較。
              最新の機能・料金・口コミをわかりやすくご紹介します。
            </p>
          </div>

          {/* Device Links */}
          <div>
            <p className="font-bold mb-3 text-orange">機種別レビュー</p>
            <ul className="space-y-2">
              {deviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-g300 no-underline hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guide Links */}
          <div>
            <p className="font-bold mb-3 text-orange">お役立ち情報</p>
            <ul className="space-y-2">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-g300 no-underline hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-g600 pt-6 text-center text-xs text-g500">
          <p>&copy; 2025 子供見守りGPS最新情報 All Rights Reserved.</p>
          <p className="mt-1">※ 掲載情報は2025年4月時点のものです。最新情報は各公式サイトをご確認ください。</p>
        </div>
      </div>
    </footer>
  );
}
