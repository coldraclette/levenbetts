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
    <div className="category-overview absolute bottom-0 left-0 w-full lg:flex">
      <Swiper
        slidesPerView={'auto'}
        className="scrollbar absolute bottom-0 left-0 w-full"
        mousewheel={true}
        modules={[Mousewheel]}
        spaceBetween={15}
        freeMode={{ enabled: true, momentumBounce: false }}
      >
        {projects &&
          projects.map((project: Project) => {
            const imageUrl = project.landingPageImage || project.projectImage;
            return (
              <SwiperSlide key={project._id} className="w-auto">
                <Link
                  href={`/work/${project.category.title}/${project.slug.current}`}
                >
                  <div className="project-title mb-[14px]">
                    <h2>{project.title}</h2>
                    {project.subtitle && <h3>{project.subtitle}</h3>}
                  </div>
                  <div className="category-overview-image relative">
                    <Image
                      src={urlForImage(imageUrl, 2400)}
                      alt={
                        (project.landingPageImage?.alt as string) ||
                        (project.projectImage?.alt as string)
                      }
                      sizes="(min-width: 1024px) 1200px, 100vw"
                      height={800}
                      width={1200}
                      priority
                      className="h-full w-auto object-contain"
                      placeholder="blur"
                      blurDataURL={imageUrl.asset.metadata.lqip}
                    />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
