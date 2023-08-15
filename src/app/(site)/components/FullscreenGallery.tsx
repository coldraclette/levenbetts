'use client';

import Image from 'next/image';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

import { urlForImage } from '../../../../sanity/lib/image';

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

export default function FullscreenGallery({
  projects,
}: BackgroundGalleryProps) {
  const autoplayOptions: any = {
    delay: 4000,
    rootNode: (emblaRoot: any) => emblaRoot.parentElement,
  };
  const wheelGesturesOptions: any = {
    wheelDraggingClass: '',
    forceWheelAxis: 'y',
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
    WheelGesturesPlugin(wheelGesturesOptions),
  ]);

  return (
    <div
      ref={emblaRef}
      className="absolute top-0 h-full w-full overflow-hidden"
    >
      <div className="flex h-full">
        {projects.map(
          ({
            _id,
            slug,
            landingPageImage,
            projectImage,
            category,
          }: Project) => {
            const imageUrl = landingPageImage || projectImage;
            return (
              <Link
                key={_id}
                href={`/work/${category.title}/${slug.current}`}
                className="relative min-w-0 flex-[0_0_100%]"
              >
                <Image
                  src={urlForImage(imageUrl)}
                  alt={landingPageImage?.alt || projectImage?.alt}
                  fill
                  priority
                  className="h-full w-full object-cover"
                />
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
}
