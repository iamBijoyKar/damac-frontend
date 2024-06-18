'use client';

type ButtonProps = {
  label: string;
  type: 'primary' | 'secondary';
  onClick?: () => void; //? optional
};

export default function Button({
  label,
  type,
  onClick = () => {},
}: ButtonProps) {
  const isPrimary = type === 'primary';
  return (
    <button
      onClick={onClick}
      className={` px-6 py-2 border border-primary rounded-lg uppercase ${
        isPrimary
          ? 'bg-primary text-white hover:bg-[#001f48] hover:shadow-lg'
          : 'bg-white text-primary hover:bg-slate-200 hover:shadow-lg'
      } transition-all duration-300 ease-in-out`}
    >
      {label}
    </button>
  );
}
