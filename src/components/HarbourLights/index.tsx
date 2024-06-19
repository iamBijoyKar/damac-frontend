'use client';

//* Library Imports
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView, AnimatePresence, useAnimate } from 'framer-motion';
//* Component Imports
import ShowcaseCard from './ShowcaseCard';
import Gallary from './Gallery';

//* Assets Imports
import harbourLights from '@/assets/harbour-lights.svg';
//! In the Figma Design this Harbour Lights text was made using vector icons,
//! So I used the exported SVG as an image in the project.

import showcase1 from '@/assets/showcase1.jpeg';
import showcase2 from '@/assets/showcase2.jpeg';
import showcase3 from '@/assets/showcase3.jpeg';
import showcase4 from '@/assets/showcase4.png';

export default function HarboutLights() {
  //* Feature Animation on View
  const [harbourRef, animate] = useAnimate();
  const [showacasesRef, animateShowcases] = useAnimate();
  const [galleryRef, animateGallery] = useAnimate();

  const isFeatureInView = useInView(harbourRef);
  const isShowcasesInView = useInView(showacasesRef);
  const isGalleryInView = useInView(galleryRef);

  useEffect(() => {
    if (isFeatureInView) {
      // Animate the feature section
      animate(
        harbourRef.current,
        {
          opacity: 1,
        },
        {
          duration: 0.6,
          delay: 0.5,
        },
      );
    } else {
      // Reset the animation
      animate(harbourRef.current, {
        opacity: 0,
      });
    }
  }, [isFeatureInView]);

  useEffect(() => {
    if (isShowcasesInView) {
      // Animate the showcase section
      animateShowcases(
        showacasesRef.current,
        {
          opacity: 1,
        },
        {
          duration: 0.6,
          delay: 0.5,
        },
      );
    } else {
      // Reset the animation
      animateShowcases(showacasesRef.current, {
        opacity: 0,
      });
    }
  }, [isShowcasesInView]);

  useEffect(() => {
    if (isGalleryInView) {
      // Animate the gallery section
      animateGallery(
        galleryRef.current,
        {
          opacity: 1,
        },
        {
          duration: 0.6,
          delay: 0.5,
        },
      );
    } else {
      // Reset the animation
      animateGallery(galleryRef.current, {
        opacity: 0,
      });
    }
  }, [isGalleryInView]);

  return (
    <AnimatePresence>
      <div className="w-full px-6 md:px-0 md:w-[90%] lg:w-[930px] xl:w-[1180px] 2xl:w-[1400px] h-full mt-10">
        <div
          ref={harbourRef}
          className="flex flex-col justify-center items-center "
        >
          <div className="">
            <Image
              src={harbourLights}
              alt="Harbour Lights"
              width={200}
              height={200}
            />
          </div>
          <div className="mt-4 w-full sm:w-[500px] md:w-[600px] flex flex-col items-center">
            <h1 className="font-display text-primary text-[24px] sm:text-[30px] md:text-[36px] font-bold uppercase mt-2">
              Features & Amenities
            </h1>
            <p className="text-bodyText text-sm text-center mt-4">
              Harbour Lights beautifully honours maritime voyages while
              embracing an opulent seafront lifestyle. Its maritime-inspired
              amenities provide an unmatched seaside experience, offering a life
              of tranquility and bliss.
            </p>
          </div>
        </div>
        <div ref={showacasesRef} className="w-full h-full">
          <div className="w-full grid grid-cols-2 grid-flow-row gap-3 lg:grid-cols-4 mt-14 mb-6">
            <div className="flex justify-center items-center ">
              <ShowcaseCard label1="Floating" label2="Pools" img={showcase1} />
            </div>
            <div className="flex justify-center items-center ">
              <ShowcaseCard
                label1="Spacious Cabins "
                label2="Like Rooms"
                img={showcase2}
              />
            </div>
            <div className="flex justify-center items-center ">
              <ShowcaseCard
                label1="Sea Facing "
                label2="Swimming Pools"
                img={showcase3}
              />
            </div>
            <div className="flex justify-center items-center ">
              <ShowcaseCard
                label1="Gymnasium "
                label2="& FItness"
                img={showcase4}
              />
            </div>
          </div>
          <div className="mb-6">
            <p className="text-[10px] text-[#686868] text-end">
              *T&Cs apply | ** Based on similar branded projects in the last 2
              years. Source 1 | Source 2
            </p>
          </div>
        </div>
        <div ref={galleryRef} className="">
          <Gallary />
        </div>
      </div>
    </AnimatePresence>
  );
}
