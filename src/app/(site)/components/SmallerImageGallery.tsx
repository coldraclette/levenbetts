'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { urlForImage } from '../../../../sanity/lib/image';

import 'swiper/css';

import { Mousewheel } from 'swiper/modules';

interface ImageGalleryProps {
  images: any[];
}

export default function SmallerImageGallery({ images }: ImageGalleryProps) {
  if (!images) {
    return null;
  }

  return (
    <>
      <div className="project-details absolute bottom-0 left-0 w-full overflow-hidden">
        <Swiper
          slidesPerView={'auto'}
          className="absolute bottom-0 left-0 w-full overflow-hidden bg-white"
          mousewheel={true}
          modules={[Mousewheel]}
          freeMode={{ enabled: true, momentumBounce: false }}
        >
          {images.map((image: any, index: number) => {
            return (
              <SwiperSlide
                key={image._key}
                className="mr-[15px] w-auto last-of-type:mr-0"
              >
                
                <div className="relative h-[24vh]">
                  <Image
                    src={urlForImage(image, 2400)}
                    alt={image.alt as string}
                    height={800}
                    width={1200}
                    priority={index === 0}
                    className={`h-full w-auto object-contain`}
                    placeholder="blur"
                    blurDataURL={image.asset.metadata.lqip}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
