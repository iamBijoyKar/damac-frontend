//* Library Imports
import Image from 'next/image';

//* Type Imports
import type { StaticImageData } from 'next/image';

type ShowcaseCardProps = {
  label1: string;
  label2: string;
  img: StaticImageData | string;
};

export default function ShowcaseCard({
  label1,
  label2,
  img,
}: ShowcaseCardProps) {
  return (
    <div className="relative rounded-t-full px-1 w-fit flex flex-col items-center ">
      <div className="rounded-t-full rounded-b-xl w-[150px] h-[110px] min-[410px]:w-[172px] sm:w-[198px] min-[410px]:h-[115px] bg-slate-300 absolute top-0 left-[4px] min-[410px]:left-[8px] sm:left-[15px]"></div>
      <div className="rounded-full w-[145px] h-[145px] min-[410px]:w-[165px] min-[410px]:h-[165px] sm:w-[190px] sm:h-[190px] overflow-hidden relative mt-1 ">
        <Image
          src={img}
          className="hover:scale-110 duration-300 transition-all ease-in-out "
          alt={label1}
          fill
        />
      </div>
      <div className="p-6 w-[150px] h-[230px] min-[410px]:w-[180px] min-[410px]:h-[200px] sm:w-[220px] sm:h-[180px] rounded-b-xl shadow-lg -z-10 -mt-20">
        <div className=" mt-20">
          <h2 className="text-primary text-lg text-center font-semibold">
            {label1}
          </h2>
          <h2 className="text-primary text-lg text-center font-semibold ">
            {label2}
          </h2>
        </div>
      </div>
    </div>
  );
}
