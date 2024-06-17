//* Library Imports
import Image from 'next/image';

//* Component Imports
import FeatureBar from '@/components/FeatureBar';
import Hero from '@/components/Hero/';

//* Assets Imports
import heroBg from '@/assets/hero-bg.jpeg';

export default function Home() {
  return (
    <div className="h-[200vh] ">
      {/* Hero Section */}
      <div className="relative w-full h-[100dvh] overflow-hidden">
        <Image
          src={heroBg}
          alt="hero background"
          layout="fill"
          objectFit="cover"
          className="-z-10"
        />
        <div className="absolute top-0 left-0 z-50 w-full h-full">
          <Hero />
        </div>
      </div>
      {/* Hero Section End */}
      <div className="flex justify-center">
        {/* Ternary Background Color #F4F9FF  */}
        <div className="w-full h-full bg-ternary flex justify-center">
          <FeatureBar />
        </div>
      </div>
    </div>
  );
}
