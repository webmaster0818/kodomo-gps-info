// felmat「みてねみまもりGPS」提携コード（2026-11-11 MediaXAI 支給・「適材適所で設定して」）。コードは改変しない。
// 計測リンク（t.felmat.net）は開かない・curl しない（自己クリック扱いになるため）。
const TEXT_LINK =
  '<a href="https://t.felmat.net/fmcl?ak=C10913B.1.O151754W.N1380288" target="_blank" rel="nofollow noopener">お子さまの見守りに一番選ばれているGPS。利用者数No.1 みてねみまもりGPS</a><img src="https://t.felmat.net/fmimp/C10913B.O151754W.N1380288" width="1" height="1" alt="" style="border:none;" />';

const BANNER_300x250 =
  '<a href="https://t.felmat.net/fmcl?ak=C10913B.1.F1605297.N1380288" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/C10913B.F1605297.N1380288" width="300" height="250" alt="" border="0" /></a>';

const BANNER_320x50 =
  '<a href="https://t.felmat.net/fmcl?ak=C10913B.1.3160528J.N1380288" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/C10913B.3160528J.N1380288" width="320" height="50" alt="" border="0" /></a>';

const BANNER_320x100 =
  '<a href="https://t.felmat.net/fmcl?ak=C10913B.1.Y160527M.N1380288" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/C10913B.Y160527M.N1380288" width="320" height="100" alt="" border="0" /></a>';

/** テキストリンク：ランキング・比較の各カード、レビュー本文の区切り */
export function MiteneAffText({ className = '' }: { className?: string }) {
  return <span className={`aff-text ${className}`} dangerouslySetInnerHTML={{ __html: TEXT_LINK }} />;
}

/** 300x250：レビュー末尾のCTA（いちばん検討度が高い位置） */
export function MiteneAffBanner({ className = '' }: { className?: string }) {
  return <div className={`aff-banner ${className}`} dangerouslySetInnerHTML={{ __html: BANNER_300x250 }} />;
}

/** 320x100：みてね同士・他機種との比較記事のCTA */
export function MiteneAffBannerWide({ className = '' }: { className?: string }) {
  return <div className={`aff-banner ${className}`} dangerouslySetInnerHTML={{ __html: BANNER_320x100 }} />;
}

/** 320x50：レビュー冒頭の要約直下（本文を押し下げない小さい枠） */
export function MiteneAffBannerSlim({ className = '' }: { className?: string }) {
  return <div className={`aff-banner ${className}`} dangerouslySetInnerHTML={{ __html: BANNER_320x50 }} />;
}
