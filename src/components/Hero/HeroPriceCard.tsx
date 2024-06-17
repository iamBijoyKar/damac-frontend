type HeroPriceCardProps = {
  dollarPrice: string;
  aedPrice: string;
  className?: string;
};

export default function HeroPriceCard({
  dollarPrice,
  aedPrice,
  className = '',
}: HeroPriceCardProps) {
  return (
    <div className="rounded-xl overflow-hidden w-full sm:w-[310px] lg:w-[400px]">
      <div className="p-8 backdrop-blur bg-slate-500/40 ">
        <p className="uppercase text-bodyText2">PRICING STARTS FROM</p>
        <h1 className="">
          <span className="text-[3rem] md:text-[3.2rem] lg:text-[4rem] font-bold leading-tight">
            ${dollarPrice}
          </span>
        </h1>
        <h2 className="text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] font-semibold mt-2">
          AED <span className="">{aedPrice}</span>
        </h2>
        <button
          type="button"
          className="w-full bg-secondary font-body font-bold text-white py-2 rounded-lg mt-4 hover:shadow hover:bg-secondary/80 transition-all duration-300 ease-in-out "
        >
          GET A PRESENTATION
        </button>
      </div>
      <div className="px-8 py-4 rounded-xl-b backdrop-blur font-body text-white bg-[#5790BE1F]/40 border-t border-[#0000004D] ">
        <p className="">
          Get an Expert’s Presentation of Real Estate in Dubai for Life and
          investment
        </p>
      </div>
    </div>
  );
}
