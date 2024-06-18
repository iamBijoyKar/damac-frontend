'use client';

//* Library Imports
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { RxChevronLeft } from 'react-icons/rx';
import { RxCaretRight } from 'react-icons/rx';

//* Import Types
import type { StaticImageData } from 'next/image';

//* Component Imports
import SwipperCard from './Card';
import Button from '../Button';

type SwipperProps = {
  imgs: string[] | StaticImageData[];
  labels?: string[];
};

export default function Swipper({ imgs, labels = [] }: SwipperProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState(imgs[0]);
  const [doubleClick, setDoubleClick] = useState(false);

  //* Function to handle the double click
  const onDoubleClick = () => {
    setDoubleClick((prev) => !prev);
  };

  //* Function to handle the left click
  const onLeftClick = () => {
    setCurrentIndex((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
  };

  //* Function to handle the right click
  const onRightClick = () => {
    setCurrentIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
  };

  //* useEffect to update the current image when the currentIndex changes
  useEffect(() => {
    setCurrentImg(imgs[currentIndex]);
  }, [currentIndex]);

  return (
    <div className="w-full">
      <div className="w-full aspect-video md:aspect-[4/2] relative rounded-lg overflow-hidden">
        <div className={`w-full h-full relative ${doubleClick ? 'blur' : ''} `}>
          <Image src={currentImg} alt="Swipper Image" fill />
        </div>
        <div className="w-full h-full px-2 flex justify-between items-center absolute top-0 left-0">
          <button
            onClick={onLeftClick}
            type="button"
            className="p-2 rounded-full bg-white"
          >
            <RxChevronLeft className="text-xl" />
          </button>
          {/* This div is used to handle the double click event in the middle of the image */}
          <div
            onDoubleClick={onDoubleClick}
            className="w-1/2 h-full flex flex-col justify-center items-center"
          >
            {doubleClick ? (
              <div className="text-center select-none">
                <p className="text-lg font-semibold mb-4">
                  Want to view in a Light Box ?
                </p>
                <div className="flex gap-3 justify-center">
                  <Button label="Yes" type="primary" onClick={() => {}} />
                  <Button
                    label="No"
                    type="secondary"
                    onClick={() => {
                      setDoubleClick(false);
                    }}
                  />
                </div>
              </div>
            ) : null}
          </div>
          <button
            onClick={onRightClick}
            type="button"
            className="p-2 rounded-full bg-white"
          >
            <RxCaretRight className="text-xl" />
          </button>
        </div>
      </div>
      <div className="flex gap-1 md:gap-3 lg:gap-4 mt-4">
        {imgs.map((img, index) => (
          <SwipperCard
            key={index}
            img={img}
            label={labels[index]}
            onClick={() => setCurrentImg(img)}
          />
        ))}
      </div>
    </div>
  );
}
