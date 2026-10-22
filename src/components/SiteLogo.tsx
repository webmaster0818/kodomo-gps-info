// サイトロゴ（2026-10 デザイン刷新・施主選択M-2「母が子を前に抱いて守る」）
export function LogoMark({ size = 34, inverse = false }: { size?: number; inverse?: boolean }) {
  const base = inverse ? '#fff' : '#15385F';
  const ink = inverse ? '#15385F' : '#fff';
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="19" cy="10" r="5.6" fill={base} />
      <path d="M5 47C5 30 11 19.5 21 19.5 31 19.5 39 27 40 36V47Z" fill={base} />
      <circle cx="28" cy="27.5" r="4.4" fill={ink} />
      <path d="M21 47C21 39.5 24.1 35 28 35S35 39.5 35 47Z" fill={ink} />
      <path d="M13 33.5C15.5 41 23 44 32 41.6" fill="none" stroke="#7CC3EE" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

export default function SiteLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark size={36} inverse={inverse} />
      <span className="leading-none">
        <span className={`block text-[19px] font-black tracking-[0.04em] ${inverse ? 'text-white' : 'text-blue-dark'}`}>
          子供見守り<span className={inverse ? 'text-[#7CC3EE]' : 'text-blue'}>GPS</span>
        </span>
        <span className={`block mt-1 text-[10px] font-bold tracking-[0.28em] ${inverse ? 'text-[#9FB6CF]' : 'text-[#5B7088]'}`}>
          最新情報・端末比較
        </span>
      </span>
    </span>
  );
}
