'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '../../../../sanity/lib/image';
import useHorizontalScroll from '../hooks/useHorizontalScroll';

interface ImageGalleryProps {
  projects: any[];
}

export default function OverviewImageGallery({ projects }: ImageGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  useHorizontalScroll(galleryRef);

  if (!projects) {
    return null;
  }

  return (
    <div
      ref={galleryRef}
      className={`gallery-container absolute bottom-0 flex gap-[15px] overflow-x-auto whitespace-nowrap`}
    >
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
  );
}
