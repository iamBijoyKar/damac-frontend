'use client';

//* Library Imports
import { useEffect } from 'react';
import { useInView, AnimatePresence, useAnimate } from 'framer-motion';

//* Component Imports
import Header from './Header';
import HeroTexts from './HeroTexts';
import HeroPriceCard from './HeroPriceCard';

export default function Hero() {
  //* Hero Animation on View
  const [heroRef, animate] = useAnimate();
  const isHeroInView = useInView(heroRef);

  useEffect(() => {
    if (isHeroInView) {
      // Animate the hero section
      animate(
        heroRef.current,
        {
          opacity: 1,
          y: 0,
        },
        {
          duration: 0.6,
          delay: 0.3,
        },
      );
    } else {
      // Reset the animation
      animate(heroRef.current, {
        opacity: 0,
        y: 100,
      });
    }
  }, [isHeroInView]);

  return (
    <AnimatePresence>
      <div className="flex justify-center text-[#FCFCFC] bg-gradient-to-r from-20% from-primary/80 to-primary/10 w-full h-full">
        <div
          ref={heroRef}
          className="w-full px-6 md:w-[90%] lg:w-[930px] xl:w-[1180px] 2xl:w-[1400px] h-full"
        >
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
    </AnimatePresence>
  );
}
