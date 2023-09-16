import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';

import { urlForImage } from '../../../../../../sanity/lib/image';

import 'swiper/css';

import { Mousewheel } from 'swiper/modules';

interface ProjectImagesDesktopProps {
  images: any;
  detailsOpen: boolean;
  setDetailsOpen: (detailsOpen: boolean) => void;
}

export default function ProjectImagesDesktop({
  images,
  detailsOpen,
  setDetailsOpen,
}: ProjectImagesDesktopProps) {
  const containerVariants = {
    open: {
      height: `calc(88vh + 92px)`,
      translateY: -16,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
    closed: {
      height: 'calc(25vh + 92px)',
      translateY: -40,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  if (!images) {
    return null;
  }

  return (
    <motion.div
      className={`project-details absolute bottom-0 left-0 hidden w-full lg:block`}
      initial={detailsOpen ? 'closed' : 'open'}
      animate={detailsOpen ? 'closed' : 'open'}
      variants={containerVariants}
    >
      <Swiper
        slidesPerView={'auto'}
        className="scrollbar absolute bottom-0 left-0 w-full bg-white"
        mousewheel={true}
        modules={[Mousewheel]}
        spaceBetween={15}
        freeMode={{ enabled: true, momentumBounce: false }}
      >
        {images.map((image: any, index: number) => {
          return (
            <SwiperSlide key={image._key} className="w-auto">
              <motion.div
                initial={detailsOpen ? 'closed' : 'open'}
                animate={detailsOpen ? 'closed' : 'open'}
                variants={containerVariants}
                className={`relative`}
              >
                <Image
                  src={urlForImage(image)}
                  alt={image.alt as string}
                  height={800}
                  width={1200}
                  quality={90}
                  sizes="(min-width: 1024px) 1200px, 100vw"
                  className={`h-full w-auto object-contain`}
                  onClick={() => setDetailsOpen(false)}
                  placeholder="blur"
                  blurDataURL={image.asset.metadata.lqip}
                  priority={index === 0}
                />
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
