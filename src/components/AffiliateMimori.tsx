// felmat「みもりGPSトーク」提携コード（2026-10-23 MediaXAI 支給）。コードは改変しない。
const TEXT_LINK =
  '<a href="https://t.felmat.net/fmcl?ak=W11849R.1.3162378A.N1380288" target="_blank" rel="nofollow noopener">ほしい！がすべて揃った子供の見守りGPS【みもりGPSトーク】</a><img src="https://t.felmat.net/fmimp/W11849R.3162378A.N1380288" width="1" height="1" alt="" style="border:none;" />';

const BANNER =
  '<a href="https://t.felmat.net/fmcl?ak=W11849R.1.L1625868.N1380288" target="_blank" rel="nofollow noopener"><img src="https://t.felmat.net/fmimg/W11849R.L1625868.N1380288" width="300" height="250" alt="" border="0" /></a>';

export function MimoriAffText({ className = '' }: { className?: string }) {
  return <span className={`aff-text ${className}`} dangerouslySetInnerHTML={{ __html: TEXT_LINK }} />;
}

export function MimoriAffBanner({ className = '' }: { className?: string }) {
  return <div className={`aff-banner ${className}`} dangerouslySetInnerHTML={{ __html: BANNER }} />;
}
