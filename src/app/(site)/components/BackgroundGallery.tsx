'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '../../../../sanity/lib/image';
import useHorizontalScrollSnap from '../hooks/useHorizontalScrollSnap';

interface BackgroundGalleryProps {
  projects: Project[];
}

interface Project {
  _id: string;
  slug: { current: string };
  landingPageImage: any;
  projectImage: any;
  category: any;
}

export default function BackgroundGallery({
  projects,
}: BackgroundGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useHorizontalScrollSnap(containerRef);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 flex h-screen w-screen overflow-x-auto whitespace-nowrap"
    >
      {projects.map(
        ({ _id, slug, landingPageImage, projectImage, category }: Project) => {
          const imageUrl = landingPageImage || projectImage;
          return (
            <Link
              key={_id}
              href={`/work/${category.title}/${slug.current}`}
              className={`relative h-screen w-screen  flex-shrink-0`}
            >
              <Image
                src={urlForImage(imageUrl)}
                alt={landingPageImage?.alt || projectImage?.alt}
                fill
                priority
                className="object-cover"
              />
            </Link>
          );
        }
      )}
    </div>
  );
}
