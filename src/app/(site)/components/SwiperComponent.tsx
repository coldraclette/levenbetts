'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Autoplay, Mousewheel } from 'swiper/modules';

import { urlForImage } from '../../../../sanity/lib/image';
import { Project } from '../types/types';

interface SwiperProps {
  projects: Project[];
}

export default function SwiperComponent({ projects }: SwiperProps) {
  return (
    <Swiper
      slides-per-view="1"
      className="h-full"
      mousewheel={true}
      spaceBetween={15}
      modules={[Mousewheel, Autoplay]}
      loop={true}
      autoplay={{
        delay: 8000,
      }}
    >
      {projects.map((project: Project) => {
        const imageUrl = project.landingPageImage || project.projectImage;
        const imageMobileUrl =
          project.landingPageMobileImage ||
          project.landingPageImage ||
          project.projectImage;

        return (
          <SwiperSlide key={project._id}>
            <Link
              href={`/work/${project.category.title}/${project.slug.current}`}
            >
              <div className="relative hidden h-full w-full md:block">
                <Image
                  src={urlForImage(imageUrl)}
                  alt={
                    (project.landingPageImage?.alt as string) ||
                    (project.projectImage?.alt as string)
                  }
                  sizes="(max-width: 2400px) 100vw"
                  fill
                  priority
                  quality={90}
                  className="h-full w-full object-cover"
                />
              </div>
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
                  className="h-full w-full object-cover"
                  quality={90}
                />
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
