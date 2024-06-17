import HeroTextCard from './HeroTextCard';

export default function HeroTexts() {
  return (
    <div className="w-full">
      <div className="text-[3rem] md;text-[3.2rem] lg:text-[4rem] font-bold font-display leading-[3rem] md:leading-[4rem] uppercase">
        <h1 className="">Harbour Lights</h1>
        <h1 className="text-secondary">de GRESOGONO</h1>
      </div>
      <p className=" text-sm md:text-[22px] lg:text-[25px] leading-normal mt-4 font-bold font-body ">
        1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
      </p>
      <div className="mt-4 md:mt-14">
        <HeroTextCard label="Rental Returns of UPTO 11%**" />
        <HeroTextCard label="Capital Appreciation of UPTO 32%**" />
      </div>
    </div>
  );
}
