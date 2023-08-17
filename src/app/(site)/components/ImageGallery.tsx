'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

import { urlForImage } from '../../../../sanity/lib/image';

interface ImageGalleryProps {
  images: any[];
  detailsOpen?: boolean;
  onImageClick?: () => void;
}

export default function ImageGallery({
  images,
  detailsOpen,
  onImageClick,
}: ImageGalleryProps) {
  const wheelGesturesOptions: any = {
    wheelDraggingClass: '',
    forceWheelAxis: 'y',
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, dragFree: true },
    [WheelGesturesPlugin(wheelGesturesOptions)]
  );

  if (!images) {
    return null;
  }

  return (
    <div ref={emblaRef} className={`absolute bottom-0 overflow-hidden`}>
      <div className="flex gap-[15px]">
        {images.map((image): any => {
          return (
            <div key={image._key} className={`relative h-full flex-shrink-0`}>
              <Image
                src={urlForImage(image)}
                alt={image.alt}
                width={1200}
                height={800}
                priority
                className={`w-auto object-contain ${
                  detailsOpen ? 'h-[30vh]' : 'h-[83vh]'
                }`}
                onClick={onImageClick}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
