import Header from './Header';
import HeroTexts from './HeroTexts';
import HeroPriceCard from './HeroPriceCard';

export default function Hero() {
  return (
    <div className="flex justify-center text-[#FCFCFC] bg-gradient-to-r from-20% from-primary/80 to-primary/10 w-full h-full">
      <div className="w-full px-6 md:w-[90%] lg:w-[930px] xl:w-[1180px] 2xl:w-[1400px] h-full">
        <Header />
        <div className="w-full h-full flex gap-8 md:gap-2 flex-col md:flex-row justify-start md:justify-between items-center mt-16 md:-mt-8">
          <div className="w-full">
            <HeroTexts />
          </div>
          <div className=" flex justify-center md:justify-end w-full">
            <HeroPriceCard dollarPrice={'425,000'} aedPrice={'1.3 Million'} />
          </div>
        </div>
      </div>
    </div>
  );
}
