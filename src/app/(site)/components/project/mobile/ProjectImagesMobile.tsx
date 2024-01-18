import Image from 'next/image';

import { urlForImage } from '../../../../../../sanity/lib/image';

interface ProjectImagesMobileProps {
  images: any;
}

export default function ProjectImagesMobile({
  images,
}: ProjectImagesMobileProps) {
  return (
    <div className="flex flex-col gap-[15px] lg:hidden">
      {images.map((image: any, index: number) => {
        return (
          <div key={image._key} className="relative">
            <Image
              src={urlForImage(image, 600)}
              alt={image.alt as string}
              width={1200}
              height={800}
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              placeholder="blur"
              blurDataURL={image.asset.metadata.lqip}
            />
          </div>
        );
      })}
    </div>
  );
}
