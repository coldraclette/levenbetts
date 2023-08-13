'use client';

import { useRef } from 'react';
import Image from 'next/image';

import { urlForImage } from '../../../../sanity/lib/image';
import useHorizontalScroll from '../hooks/useHorizontalScroll';

interface ImageGalleryProps {
  images: any[];
}

export default function SmallerImageGallery({ images }: ImageGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  useHorizontalScroll(galleryRef);

  if (!images) {
    return null;
  }

  return (
    <div
      ref={galleryRef}
      className={`gallery-container absolute bottom-0 flex gap-[15px] overflow-x-auto whitespace-nowrap`}
    >
      {images.map((image): any => {
        return (
          <div key={image._key} className={`relative h-full flex-shrink-0`}>
            <Image
              src={urlForImage(image)}
              alt={image.alt}
              width={1200}
              height={800}
              priority
              className="h-[40vh] w-auto object-contain"
            />
          </div>
        );
      })}
    </div>
  );
}
