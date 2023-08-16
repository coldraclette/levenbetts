'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

import { urlForImage } from '../../../../sanity/lib/image';
import { OptionsProps } from '../types/types';

interface EmblaGalleryProps {
  projects: Project[];
  options: OptionsProps;
}

interface Project {
  _id: string;
  slug: { current: string };
  landingPageImage?: any;
  projectImage: any;
  category: any;
}

export default function EmblaGallery({ projects, options }: EmblaGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options.embla, [
    Autoplay({
      ...options.autoplay,
      rootNode: (emblaRoot: any) => emblaRoot.parentElement,
    }),
    WheelGesturesPlugin(options.wheelGestures),
  ]);

  useEffect(() => {
    if (emblaApi && !options.setAutoplay) {
      emblaApi.plugins().autoplay?.stop();
    }
  }, [emblaApi, options.setAutoplay]);

  return (
    <div ref={emblaRef} className={options.styling.emblaWrapper}>
      <div className={options.styling.emblaContainer}>
        {projects.map(
          ({
            _id,
            slug,
            landingPageImage,
            projectImage,
            category,
          }: Project) => {
            const imageUrl = landingPageImage || projectImage;
            return (
              <Link
                key={_id}
                href={`/work/${category.title}/${slug.current}`}
                className={options.styling.emblaSlide}
              >
                <Image
                  src={urlForImage(imageUrl)}
                  alt={landingPageImage?.alt || projectImage?.alt}
                  fill
                  priority
                  className={options.styling.emblaSlideInner}
                />
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
}
