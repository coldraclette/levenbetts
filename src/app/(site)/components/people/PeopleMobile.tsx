'use client';

import Image from 'next/image';

import { urlForImage } from '../../../../../sanity/lib/image';
import { useSwipeHook } from '../../hooks/useSwipeHook';
import { useWorkActive } from '../../WorkActiveContext';
import TextContent from '../TextContent';

interface PeopleMobileProps {
  data: any;
}

export default function PeopleMobile({ data }: PeopleMobileProps) {
  const { isWorkActive, setIsWorkActive } = useWorkActive();

  const handlers = useSwipeHook();

  return (
    <div
      {...handlers}
      className={`pt-11 transition-transform lg:hidden ${
        isWorkActive ? 'translate-y-[126px]' : 'translate-y-0'
      }`}
    >
      <div className="flex flex-col gap-4 px-4">
        <TextContent text={data.text} />
        <TextContent text={data.text2} />
        <TextContent text={data.additionalText} />
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {data.images.map((image: any) => {
          return (
            <div key={image._key} className={`relative h-full`}>
              <Image
                src={urlForImage(image, 600)}
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
