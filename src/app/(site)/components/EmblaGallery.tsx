'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { motion } from 'framer-motion';
import { Image as SanityImage } from 'sanity';

import { urlForImage } from '../../../../sanity/lib/image';
import { OptionsProps } from '../types/types';

interface EmblaGalleryProps {
  projects: Project[];
  options: OptionsProps;
}

interface Project {
  _id: string;
  slug: { current: string };
  landingPageImage?: SanityImage;
  landingPageMobileImage?: SanityImage;
  title?: string;
  subtitle?: string;
  projectImage: SanityImage;
  category: any;
}

export default function EmblaGallery({ projects, options }: EmblaGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { ...options.embla, align: 'start' },
    [
      Autoplay({
        ...options.autoplay,
        rootNode: (emblaRoot: any) => emblaRoot.parentElement,
      }),
      WheelGesturesPlugin(options.wheelGestures),
    ]
  );

  useEffect(() => {
    if (emblaApi && !options.setAutoplay) {
      emblaApi.plugins().autoplay?.stop();
    }
  }, [emblaApi, options.setAutoplay]);

  if (!projects) return null;

  return (
    <div ref={emblaRef} className={options.styling.emblaWrapper}>
      <div className={options.styling.emblaContainer}>
        {projects.map((project: Project) => {
          const imageUrl = project.landingPageImage || project.projectImage;
          const imageMobileUrl =
            project.landingPageMobileImage ||
            project.landingPageImage ||
            project.projectImage;

          return (
            <Link
              key={project._id}
              href={`/work/${project.category.title}/${project.slug.current}`}
              className={options.styling.emblaSlide}
            >
              {!options.landingPage && (
                <div className="slide mb-[14px]">
                  <h2>{project.title}</h2>
                  {project.subtitle && <h3>{project.subtitle}</h3>}
                </div>
              )}
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
                className="relative hidden h-full w-full md:block"
              >
                <Image
                  src={urlForImage(imageUrl)}
                  alt={
                    (project.landingPageImage?.alt as string) ||
                    (project.projectImage?.alt as string)
                  }
                  sizes="(max-width: 2400px) 100vw"
                  fill
                  priority
                  className={options.styling.emblaSlideInner}
                  quality={90}
                />
              </motion.div>
              <div className="block h-full w-full md:hidden">
                <Image
                  src={urlForImage(imageMobileUrl)}
                  alt={
                    (project.landingPageMobileImage?.alt as string) ||
                    (project.landingPageImage?.alt as string) ||
                    (project.projectImage?.alt as string)
                  }
                  sizes="(max-width: 768px) 100vw"
                  fill
                  priority
                  className={options.styling.emblaSlideInner}
                  quality={90}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
