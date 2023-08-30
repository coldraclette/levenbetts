'use client';

import 'swiper/css';

import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { urlForImage } from '../../../../sanity/lib/image';
import { Project } from '../types/types';

interface SwiperOverviewProps {
  projects: Project[];
}

export default function SwiperOverview({ projects }: SwiperOverviewProps) {
  return (
    <Swiper
      slidesPerView="auto"
      className="category-overview h-full w-full"
      mousewheel={true}
      spaceBetween={15}
      modules={[Mousewheel]}
      freeMode={{ enabled: true, momentumBounce: false }}
    >
      {projects &&
        projects.map((project: Project) => {
          const imageUrl = project.landingPageImage || project.projectImage;
          return (
            <SwiperSlide key={project._id}>
              <Link
                href={`/work/${project.category.title}/${project.slug.current}`}
              >
                <div className="project-title mb-[14px]">
                  <h2>{project.title}</h2>
                  {project.subtitle && <h3>{project.subtitle}</h3>}
                </div>
                <div className="relative h-full w-full">
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
              </Link>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
