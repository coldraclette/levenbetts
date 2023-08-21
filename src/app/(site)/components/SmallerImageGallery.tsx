'use client';

import { useRef } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { Image as SanityImage } from 'sanity';

import { urlForImage } from '../../../../sanity/lib/image';
import useHorizontalScroll from '../hooks/useHorizontalScroll';

interface ImageGalleryProps {
  images: any[];
}

export default function SmallerImageGallery({ images }: ImageGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  useHorizontalScroll(galleryRef);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, dragFree: true },
    [WheelGesturesPlugin({ wheelDraggingClass: '', forceWheelAxis: 'y' })]
  );

  if (!images) {
    return null;
  }

  return (
    <div className="absolute bottom-0  hidden h-[30vh] w-full lg:block">
      <div
        ref={emblaRef}
        className={`scrollbar absolute bottom-0 left-0 h-[30vh] w-full overflow-hidden overflow-x-scroll`}
      >
        <div className="flex h-full w-full gap-[15px]">
          {images.map((image: SanityImage) => {
            return (
              <div
                // @ts-ignore
                key={image._key}
                className={`relative flex h-full flex-shrink-0 items-end`}
              >
                <Image
                  src={urlForImage(image)}
                  alt={image.alt as string}
                  height={800}
                  width={1200}
                  priority
                  className={`h-full w-full object-cover`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
