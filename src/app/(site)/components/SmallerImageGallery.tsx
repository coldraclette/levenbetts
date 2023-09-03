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
          spaceBetween={15}
          freeMode={{ enabled: true, momentumBounce: false }}
        >
          {images.map((image: any) => {
            return (
              <SwiperSlide key={image._key} className="w-auto ">
                <div className="relative h-[24vh]">
                  <Image
                    src={urlForImage(image)}
                    alt={image.alt as string}
                    height={800}
                    width={1200}
                    quality={90}
                    priority
                    className={`h-full w-auto object-contain`}
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
