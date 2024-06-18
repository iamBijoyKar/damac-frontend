'use client';
//* Library Imports
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

type SwipperCardProps = {
  key?: number | string;
  label?: string;
  img: string | StaticImageData;
  onClick?: () => void;
};

export default function SwipperCard({
  key,
  label,
  img,
  onClick = () => {},
}: SwipperCardProps) {
  return (
    <div
      key={key}
      onClick={onClick}
      className="w-full aspect-video relative cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group"
    >
      <div className="w-full h-full flex justify-center items-center text-center absolute top-0 left-0  z-20 bg-transparent group-hover:bg-slate-100/20">
        <p className="text-primary text-[10px] sm:text-sm font-semibold hidden group-hover:block transition-all duration-300 ease-in-out">
          {label}
        </p>
      </div>
      <div className="w-full h-full relative group-hover:blur-[1px]">
        <Image src={img} alt="Swipper Image" fill />
      </div>
    </div>
  );
}
