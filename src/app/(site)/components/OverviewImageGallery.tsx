'use client';

import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

import { urlForImage } from '../../../../sanity/lib/image';

interface ImageGalleryProps {
  projects: any[];
}

export default function OverviewImageGallery({ projects }: ImageGalleryProps) {
  const wheelGesturesOptions: any = {
    wheelDraggingClass: '',
    forceWheelAxis: 'y',
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, dragFree: true },
    [WheelGesturesPlugin(wheelGesturesOptions)]
  );

  if (!projects) {
    return null;
  }

  return (
    <div ref={emblaRef} className={`embla-carousel relative overflow-hidden`}>
      <div className="grid auto-cols-[80%] grid-flow-col gap-[15px]">
        {projects.map((project) => {
          return (
            <Link
              href={`${project.category.title}/${project.slug.current}`}
              key={project._id}
              className="relative h-full "
            >
              <h2 className="mb-3">{project.title}</h2>
              <div className="relative">
                <Image
                  src={urlForImage(project.projectImage)}
                  alt={project.projectImage.alt}
                  width={1200}
                  height={800}
                  priority
                  className={`object-cover`}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
