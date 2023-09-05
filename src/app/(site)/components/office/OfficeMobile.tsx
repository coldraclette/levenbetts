'use client';

import Image from 'next/image';

import { urlForImage } from '../../../../../sanity/lib/image';
import { useWorkActive } from '../../WorkActiveContext';
import TextContent from '../TextContent';

interface OfficeMobileProps {
  data: any;
}

export default function OfficeMobile({ data }: OfficeMobileProps) {
  const { isWorkActive, setIsWorkActive } = useWorkActive();
  return (
    <div
      className={`pt-11 transition-transform lg:hidden ${
        isWorkActive ? 'translate-y-[126px]' : 'translate-y-0'
      }`}
    >
      <div className="px-4">
        <TextContent text={data.text} />
        <TextContent text={data.additionalText} />
      </div>
      <div className="mt-4 flex flex-col gap-4">
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
