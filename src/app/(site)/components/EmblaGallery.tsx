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
  landingPageMobileImage?: any;
  title?: string;
  subtitle?: string;
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

  if (!projects) return null;

  console.log('projects', projects);
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
                <div className="first-slide mb-[18px]">
                  <h2>{project.title}</h2>
                  {project.subtitle && <h3>{project.subtitle}</h3>}
                </div>
              )}
              <div className="relative hidden h-full w-full md:block">
                <Image
                  src={urlForImage(imageUrl)}
                  alt={
                    project.landingPageImage?.alt || project.projectImage?.alt
                  }
                  sizes="(max-width: 2400px) 100vw"
                  fill
                  priority
                  className={options.styling.emblaSlideInner}
                  quality={90}
                />
              </div>
              <div className="block h-full w-full md:hidden">
                <Image
                  src={urlForImage(imageMobileUrl)}
                  alt={
                    project.landingPageMobileImage?.alt ||
                    project.landingPageImage?.alt ||
                    project.projectImage?.alt
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
