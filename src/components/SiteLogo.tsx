// サイトロゴ（2026-10 デザイン刷新・案は施主選択待ち。マーク部分だけ差し替えれば全体に反映される）
export function LogoMark({ size = 34, inverse = false }: { size?: number; inverse?: boolean }) {
  const base = inverse ? '#fff' : '#15385F';
  const ink = inverse ? '#15385F' : '#fff';
  const sub = inverse ? '#1F5FA0' : '#7CC3EE';
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 40 48" aria-hidden="true">
      <path d="M20 2C10.6 2 3 9.4 3 18.6 3 31 20 46 20 46S37 31 37 18.6C37 9.4 29.4 2 20 2Z" fill={base} />
      <circle cx="15.2" cy="15.5" r="4.3" fill={ink} />
      <circle cx="25.8" cy="19.2" r="3" fill={sub} />
      <path d="M9.8 28.5c.6-4.4 2.8-6.8 5.4-6.8s4.8 2.4 5.4 6.8M21.6 28.6c.4-3.1 2.1-4.8 4.2-4.8s3.8 1.7 4.2 4.8" fill="none" stroke={ink} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export default function SiteLogo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark size={30} inverse={inverse} />
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
