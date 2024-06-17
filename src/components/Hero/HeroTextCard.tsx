type HeroTextCardProps = {
  label: string;
  width?: string;
  className?: string;
};

export default function HeroTextCard({
  label,
  width = '300px',
  className = '',
}: HeroTextCardProps) {
  return (
    <div
      style={{ width: width }}
      className={`my-2 bg-[#00000042] px-2 py-1 border-l-2 border-secondary ${className} `}
    >
      <p className="text-sm text-[#E7EBEF] font-semibold  ">{label}</p>
    </div>
  );
}
