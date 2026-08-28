// 5A 아카데미 워드마크 (실제 로고 이미지로 교체하려면 이 컴포넌트만 수정하세요)

export default function Logo({
  brand = "아카데미",
  className = "",
}: {
  brand?: string;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="46"
        height="34"
        viewBox="0 0 46 34"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="5" cy="7" r="2.3" fill="currentColor" />
        <text
          x="0"
          y="28"
          fontSize="27"
          fontWeight="800"
          fontFamily="Arial, sans-serif"
          fill="currentColor"
        >
          5
        </text>
        <path
          d="M22 30 L31 5 L40 30 Z"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <line x1="26.5" y1="22.5" x2="35.5" y2="22.5" stroke="currentColor" strokeWidth="2.6" />
      </svg>
      <span className="text-[22px] font-extrabold tracking-tight text-ink">
        {brand}
      </span>
    </span>
  );
}
