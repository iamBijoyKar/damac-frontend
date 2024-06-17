import Hero from '@/components/Hero/';
import Image from 'next/image';
import heroBg from '@/assets/hero-bg.jpeg';
export default function Home() {
  return (
    <div className="h-[200vh] ">
      <div className="relative w-full h-[100dvh]">
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
    </div>
  );
}
