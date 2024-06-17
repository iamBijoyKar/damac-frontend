import Image from 'next/image';

type FeatureBlockProps = {
  keyText: string;
  valueTitle: string;
  icon: string;
};

export default function FeatureBlock({
  keyText,
  valueTitle,
  icon,
}: FeatureBlockProps) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center items-center w-full h-14">
        <Image src={icon} alt="icon" width={50} height={45} />
      </div>
      <p className="text-center text-primary text-sm font-semibold mt-2 leading-tight">
        {keyText}
      </p>
      <p className="text-center text-primary text-[2rem] font-bold leading-tight">
        {valueTitle}
      </p>
      <div className="w-full flex justify-center mt-1">
        <span className="h-[5px] w-[73px] bg-slate-300 rounded-full"></span>
      </div>
    </div>
  );
}
