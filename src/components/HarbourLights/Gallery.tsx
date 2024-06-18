'use client';
//* Library Imports
import { useState } from 'react';

//* Component Imports
import Button from './Button';
import Swipper from './Swipper';

//* Assets Imports
import interiorImg1 from '@/assets/interior-img1.jpeg';
import interiorImg2 from '@/assets/interior-img2.jpeg';
import interiorImg3 from '@/assets/interior-img3.jpeg';
import interiorImg4 from '@/assets/interior-img4.jpeg';

export default function Gallary() {
  const showcaseTypes = ['exteriors', 'interiors'];
  const [showcaseType, setShowcaseType] = useState(showcaseTypes[0]);

  //* Interiors Images
  const interiorsImgs = [
    interiorImg1,
    interiorImg2,
    interiorImg3,
    interiorImg4,
  ];

  //? A boolean const from better readability
  const isExteriors = showcaseType === 'exteriors';

  const onExteriorsClick = () => {
    setShowcaseType('exteriors');
  };

  const onInteriorsClick = () => {
    setShowcaseType('interiors');
  };

  return (
    <div className="w-full mb-4">
      <div className="flex gap-4 items-center justify-center md:justify-end">
        <Button
          onClick={onExteriorsClick}
          label="EXTERIORS"
          type={isExteriors ? 'primary' : 'secondary'}
        />
        <Button
          onClick={onInteriorsClick}
          label="INTERIORS"
          type={isExteriors ? 'secondary' : 'primary'}
        />
      </div>
      <div className="mt-4 mb-10">
        <Swipper
          imgs={interiorsImgs}
          labels={['Pool', 'Bathroom', 'Rooms', 'Gyms']}
        />
      </div>
    </div>
  );
}
