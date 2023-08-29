import Image from 'next/image';

import { urlForImage } from '../../../../../sanity/lib/image';
import TextContent from '../TextContent';

interface OfficeMobileProps {
  data: any;
}

export default function OfficeMobile({ data }: OfficeMobileProps) {
  return (
    <div className="lg:hidden pt-11">
      <div className="px-4">
        <TextContent text={data.text} />
        <TextContent text={data.additionalText} />
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {data.images.map((image: any) => {
          return (
            <div key={image._key} className={`relative h-full`}>
              <Image
                src={urlForImage(image)}
                alt={image.alt}
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 768px"
                priority
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
