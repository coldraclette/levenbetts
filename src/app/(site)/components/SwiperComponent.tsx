'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Autoplay, Mousewheel } from 'swiper/modules';

import { urlForImage } from '../../../../sanity/lib/image';
import useWindowSize from '../hooks/useWindowSize';
import useStore from '../store/store';
import { Project } from '../types/types';
import { composeClassNames } from '../utils';

interface SwiperProps {
  projects: Project[];
}

export default function SwiperComponent({ projects }: SwiperProps) {
  const windowSize = useWindowSize();
  const showNavigation = useStore((state) => state.showNavigation);

  if (windowSize.width === undefined) return null;

  const isMobile = windowSize.width < 768;

  return (
    <Swiper
      slides-per-view="1"
      className={composeClassNames(
        'h-full transition-[filter] delay-300 ease-out',
        {
          'blur-lg': !showNavigation,
        }
      )}
      mousewheel={true}
      spaceBetween={15}
      modules={[Mousewheel, Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      preventInteractionOnTransition={true}
      speed={600}
    >
      {projects.map((project: Project) => {
        const imageUrl = project.landingPageImage || project.projectImage;
        const imageMobileUrl =
          project.landingPageMobileImage ||
          project.landingPageImage ||
          project.projectImage;

        return (
          <SwiperSlide key={project._id} className="w-screen">
            <Link
              href={`/work/${project.category.title}/${project.slug.current}`}
            >
              {isMobile ? (
                <div className="relative block h-full w-full md:hidden">
                  <Image
                    src={urlForImage(imageMobileUrl, 2400)}
                    alt={
                      (project.landingPageMobileImage?.alt as string) ||
                      (project.landingPageImage?.alt as string) ||
                      (project.projectImage?.alt as string)
                    }
                    sizes="(max-width: 768px) 100vw"
                    fill
                    priority
                    className="h-full w-full object-cover"
                    placeholder="blur"
                    blurDataURL={imageMobileUrl.asset.metadata.lqip}
                    quality={100}
                  />
                </div>
              ) : (
                <div className="relative hidden h-full w-full md:block">
                  <Image
                    src={urlForImage(imageUrl, 2400)}
                    alt={
                      (project.landingPageImage?.alt as string) ||
                      (project.projectImage?.alt as string)
                    }
                    sizes="(min-width: 1620px) 1536px, calc(95.08vw + 15px)"
                    fill
                    priority
                    className={composeClassNames('h-full w-full object-cover', {
                      'object-bottom':
                        project.landingPageImage?.position === 'bottom',
                      'object-top':
                        project.landingPageImage?.position === 'top',
                      'object-center':
                        project.landingPageImage?.position === 'center',
                    })}
                    placeholder="blur"
                    blurDataURL={imageUrl.asset.metadata.lqip}
                    quality={100}
                  />
                </div>
              )}
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}