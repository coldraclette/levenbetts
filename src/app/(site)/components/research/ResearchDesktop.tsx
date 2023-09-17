'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/grid';

import { urlForImage } from '../../../../../sanity/lib/image';
import useHorizontalScroll from '../../hooks/useHorizontalScroll';

interface ResearchDesktopProps {
  data: any;
}

export default function ResearchDesktop({ data }: ResearchDesktopProps) {
  const [activeType, setActiveType] = useState('drawings');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  useHorizontalScroll(scrollContainerRef);

  return (
    <div className="hidden h-full lg:flex">
      <div className="absolute right-[15px] top-0 z-50 flex gap-7 py-11">
        <div
          className={`cursor-pointer ${
            activeType === 'drawings' ? 'text-black' : 'text-grey'
          }`}
          onClick={() => setActiveType('drawings')}
        >
          drawings
        </div>
        <div
          className={`cursor-pointer ${
            activeType === 'models' ? 'text-black' : 'text-grey'
          }`}
          onClick={() => setActiveType('models')}
        >
          models
        </div>
      </div>

      <div
        className="scrollbar flex flex-col justify-end gap-4 overflow-x-scroll"
        ref={scrollContainerRef}
      >
        <div className="research grid h-auto w-full grid-flow-col gap-4 gap-y-5">
          {activeType === 'drawings'
            ? data.drawings_first_row.map((drawing: any, index: number) => (
                <div
                  className="relative aspect-square h-[44vh] w-auto"
                  key={drawing._key}
                >
                  <Image
                    src={urlForImage(drawing)}
                    alt={(drawing.alt as string) || 'drawing'}
                    quality={90}
                    fill
                    className="h-full w-full object-contain"
                    sizes="(min-width: 1024px) 1200px, 100vw"
                    placeholder="blur"
                    blurDataURL={drawing.asset.metadata.lqip}
                    priority={index === 0}
                  />
                </div>
              ))
            : data.models_first_row.map((model: any, index: number) => (
                <div
                  className="relative aspect-square h-[44vh] w-auto"
                  key={model._key}
                >
                  <Image
                    src={urlForImage(model)}
                    alt={(model.alt as string) || 'model'}
                    quality={90}
                    fill
                    className="h-full w-full object-contain"
                    sizes="(min-width: 1024px) 1200px, 100vw"
                    placeholder="blur"
                    blurDataURL={model.asset.metadata.lqip}
                    priority={index === 0}
                  />
                </div>
              ))}
        </div>
        <div className="research  grid h-auto w-full grid-flow-col gap-4 gap-y-5">
          {activeType === 'drawings'
            ? data.drawings_second_row.map((drawing: any, index: number) => (
                <div
                  className="relative aspect-square h-[44vh] w-auto"
                  key={drawing._key}
                >
                  <Image
                    src={urlForImage(drawing)}
                    alt={(drawing.alt as string) || 'drawing'}
                    quality={90}
                    fill
                    className="h-full w-full object-contain"
                    sizes="(min-width: 1024px) 1200px, 100vw"
                    placeholder="blur"
                    blurDataURL={drawing.asset.metadata.lqip}
                    priority={index === 0}
                  />
                </div>
              ))
            : data.models_second_row.map((model: any, index: number) => (
                <div
                  className="relative aspect-square h-[44vh] w-auto"
                  key={model._key}
                >
                  <Image
                    src={urlForImage(model)}
                    alt={(model.alt as string) || 'model'}
                    quality={90}
                    fill
                    className="h-full w-full object-contain"
                    sizes="(min-width: 1024px) 1200px, 100vw"
                    placeholder="blur"
                    blurDataURL={model.asset.metadata.lqip}
                    priority={index === 0}
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
