'use client';

//* Library Imports
import { useEffect } from 'react';
import { useInView, AnimatePresence, useAnimate } from 'framer-motion';

//* Component Imports
import FeatureBlock from './FeatureBlock';

//* Assets Imports
import feat1Icon from '@/assets/feat1.svg';
import feat2Icon from '@/assets/feat2.svg';
import feat3Icon from '@/assets/feat3.svg';
import feat4Icon from '@/assets/feat4.svg';

export default function FeatureBar() {
  //* Feature Animation on View
  const [featureRef, animate] = useAnimate();
  const isFeatureInView = useInView(featureRef);

  useEffect(() => {
    if (isFeatureInView) {
      // Animate the feature section
      animate(
        featureRef.current,
        {
          opacity: 1,
        },
        {
          duration: 0.6,
          delay: 0.2,
        },
      );
    } else {
      // Reset the animation
      animate(featureRef.current, {
        opacity: 0,
      });
    }
  }, [isFeatureInView]);

  return (
    <AnimatePresence>
      <section className="w-full py-6 px-6 md:px-0 md:w-[90%] lg:w-[930px] xl:w-[1180px] 2xl:w-[1400px] h-full">
        <ul ref={featureRef} className="flex justify-around gap-3 ">
          <li className="hidden md:block">
            <FeatureBlock
              keyText="BOOK WITH"
              valueTitle="Only 20%"
              icon={feat1Icon}
            />
          </li>
          <li className="">
            <FeatureBlock
              keyText="PAYMENT PLAN"
              valueTitle="Easy 70/30"
              icon={feat2Icon}
            />
          </li>
          <li className="">
            <FeatureBlock
              keyText="HANDOVER ON"
              valueTitle="Q2 2027"
              icon={feat3Icon}
            />
          </li>
          <li className="hidden sm:block">
            <FeatureBlock
              keyText="AREA STARTS FROM"
              valueTitle="700 sqmt"
              icon={feat4Icon}
            />
          </li>
        </ul>
      </section>
    </AnimatePresence>
  );
}
