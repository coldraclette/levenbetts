'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';

import { urlForImage } from '../../../../sanity/lib/image';

import 'swiper/css';

import { Mousewheel } from 'swiper/modules';

interface ImageGalleryProps {
  images: any[];
  onClickEvent: () => void;
}

export default function SmallerImageGallery({
  images,
  onClickEvent,
}: ImageGalleryProps) {
  const [onImagesClick, setOnImagesClick] = useState(false);

  if (!images) {
    return null;
  }

  const containerVariants = {
    open: {
      height: '86vh',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
    closed: {
      height: '25vh',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  const handleClick = () => {
    setOnImagesClick(!onImagesClick);
    onClickEvent();
  };

  return (
    <>
      <motion.div
        className={`project-details absolute bottom-0 left-0 w-full overflow-hidden`}
        initial={onImagesClick ? 'open' : 'closed'}
        animate={onImagesClick ? 'open' : 'closed'}
        variants={containerVariants}
      >
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
                <motion.div
                  initial={onImagesClick ? 'open' : 'closed'}
                  animate={onImagesClick ? 'open' : 'closed'}
                  variants={containerVariants}
                  className={`relative cursor-pointer`}
                  onClick={handleClick}
                >
                  <Image
                    src={urlForImage(image)}
                    alt={image.alt as string}
                    height={800}
                    width={1200}
                    quality={90}
                    priority
                    className={`h-full w-full object-contain`}
                  />
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </>
  );
}
