import Image from 'next/image';

import { urlForImage } from '../../../../../../sanity/lib/image';

interface ProjectImagesMobileProps {
  images: any;
}

export default function ProjectImagesMobile({
  images,
}: ProjectImagesMobileProps) {
  return (
    <div className="mt-2 flex flex-col gap-[15px] lg:hidden">
      {images.map((image: any) => {
        return (
          <div key={image._key} className="relative">
            <Image
              src={urlForImage(image)}
              alt={image.alt as string}
              width={1200}
              height={800}
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              quality={90}
            />
          </div>
        );
      })}
    </div>
  );
}
