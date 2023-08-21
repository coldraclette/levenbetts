import { useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { motion } from 'framer-motion';
import { Image as SanityImage } from 'sanity';

import { urlForImage } from '../../../../../../sanity/lib/image';

interface ProjectImagesDesktopProps {
  images: SanityImage[];
  detailsOpen: boolean;
  setDetailsOpen: (detailsOpen: boolean) => void;
}

export default function ProjectImagesDesktop({
  images,
  detailsOpen,
  setDetailsOpen,
}: ProjectImagesDesktopProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, dragFree: true},
    [WheelGesturesPlugin({ wheelDraggingClass: 'test', forceWheelAxis: 'y' })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(0);
  }, [detailsOpen, emblaApi]);

  const containerVariants = {
    open: {
      height: '86vh',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
    closed: {
      height: '30vh',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  if (!images) {
    return null;
  }

  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{
        x: '0%',
        opacity: 1,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
      exit={{
        x: '-100%',
        opacity: 0,
      }}
      className="absolute bottom-0  hidden h-[86vh] w-full lg:block"
    >
      <motion.div
        ref={emblaRef}
        className={`scrollbar absolute bottom-0 left-0 h-[86vh] w-full overflow-hidden overflow-x-scroll`}
        initial={detailsOpen ? 'closed' : 'open'}
        animate={detailsOpen ? 'closed' : 'open'}
        variants={containerVariants}
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
                  quality={100}
                  priority
                  className={`h-full w-full object-contain`}
                  onClick={() => setDetailsOpen(false)}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
