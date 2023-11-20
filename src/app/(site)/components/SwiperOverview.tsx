'use client';

import 'swiper/css';

import Image from 'next/image';
import Link from 'next/link';
import { Mousewheel } from 'swiper/modules';
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
      modules={[Mousewheel]}
      freeMode={{ enabled: true, momentumBounce: false }}
    >
      {projects &&
        projects.map((project: Project) => {
          const imageUrl = project.landingPageImage || project.projectImage;
          return (
            <SwiperSlide
              key={project._id}
              className="mr-[15px] last-of-type:mr-0"
            >
              <Link
                href={`/work/${project.category.title}/${project.slug.current}`}
              >
                <div className="project-title mb-[14px]">
                  <h2>{project.title}</h2>
                  {project.subtitle && <h3>{project.subtitle}</h3>}
                </div>
                <div className="relative h-full w-full">
                  <Image
                    src={urlForImage(imageUrl, 2400)}
                    alt={
                      (project.landingPageImage?.alt as string) ||
                      (project.projectImage?.alt as string)
                    }
                    sizes="(min-width: 1620px) 1536px, calc(95.08vw + 15px)"
                    fill
                    priority
                    className="h-full w-full object-cover"
                    placeholder="blur"
                    blurDataURL={imageUrl.asset.metadata.lqip}
                  />
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
