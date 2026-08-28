// 5A 아카데미 로고 (실제 로고 이미지). 교체하려면 public/logo.png 를 바꾸세요.

export default function Logo({
  brand = "5A 아카데미",
  className = "",
}: {
  brand?: string;
  className?: string;
}) {
  return (
    <img
      src="/logo.png"
      alt={brand}
      className={`h-10 w-auto sm:h-12 ${className}`}
    />
  );
}
