'use client';
//* Library Imports
import { useState } from 'react';

//* Component Imports
import Button from './Button';
import Swipper from './Swipper';

//* Assets Imports
import exteriorImg1 from '@/assets/exterior-img1.jpeg';
import exteriorImg2 from '@/assets/exterior-img2.jpeg';
import exteriorImg3 from '@/assets/exterior-img3.jpeg';
import exteriorImg4 from '@/assets/exterior-img4.jpeg';

import interiorImg1 from '@/assets/interior-img1.jpg';
import interiorImg2 from '@/assets/interior-img2.jpeg';
import interiorImg3 from '@/assets/interior-img3.jpeg';
import interiorImg4 from '@/assets/interior-img4.jpeg';

export default function Gallary() {
  const showcaseTypes = ['exteriors', 'interiors'];
  const [showcaseType, setShowcaseType] = useState(showcaseTypes[0]);

  //* Exteriors Images
  const exteriorsImgs = [
    exteriorImg1,
    exteriorImg2,
    exteriorImg3,
    exteriorImg4,
  ];

  //* Interiors Images
  const interiorsImgs = [
    interiorImg1,
    interiorImg2,
    interiorImg3,
    interiorImg4,
  ];

  const exteriorLightBoxImages = [
    '/exterior-img1.jpeg',
    '/exterior-img2.jpeg',
    '/exterior-img3.jpeg',
    '/exterior-img4.jpeg',
    '/exterior-img5.jpeg',
  ];

  const interiorLightBoxImages = [
    '/interior-img1.jpg',
    '/interior-img2.jpeg',
    '/interior-img3.jpeg',
    '/interior-img4.jpeg',
    '/interior-img5.jpeg',
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
        {isExteriors ? (
          // Exteriors Swipper
          <Swipper
            imgs={exteriorsImgs}
            lightBoxImages={exteriorLightBoxImages}
            labels={['Pool', 'Bathroom', 'Rooms', 'Gyms']}
          />
        ) : (
          // Interiors Swipper
          <Swipper
            imgs={interiorsImgs}
            lightBoxImages={interiorLightBoxImages}
            labels={['Pool', 'Bathroom', 'Rooms', 'Gyms']}
          />
        )}
      </div>
    </div>
  );
}
