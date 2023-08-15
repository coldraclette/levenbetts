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
    { loop: true, dragFree: true },
    [WheelGesturesPlugin(wheelGesturesOptions)]
  );

  if (!projects) {
    return null;
  }

  return (
    <div ref={emblaRef} className={`absolute bottom-0 overflow-hidden`}>
      <div className="flex gap-[15px]">
        {projects.map((project) => {
          return (
            <Link
              href={`${project.category.title}/${project.slug.current}`}
              key={project._id}
              className={`relative h-full flex-shrink-0`}
            >
              <Image
                src={urlForImage(project.projectImage)}
                alt={project.projectImage.alt}
                width={1200}
                height={800}
                priority
                className={`h-[83vh] w-auto object-contain`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
