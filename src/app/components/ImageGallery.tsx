import Image from 'next/image';

import { urlForImage } from '../../../sanity/lib/image';

interface ImageGalleryProps {
  images: any[];
  detailsOpen?: boolean;
}

export default function ImageGallery({
  images,
  detailsOpen,
}: ImageGalleryProps) {
  if (!images) {
    return null;
  }

  // MAYBE USE JUST FOKIN SPLIDE

  return (
    <div className="relative w-full h-full">
      <div
        className={`absolute top-0 flex w-full gap-[15px] overflow-x-auto whitespace-nowrap `}
      >
        {images.map((image): any => {
          return (
            <div key={image._key} className={`relative h-full flex-shrink-0 `}>
              <Image
                src={urlForImage(image)}
                alt={image.alt}
                width={1200}
                height={800}
                objectFit="fill"
                className="h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
