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
    <div className="hidden h-full lg:block">
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
        ref={scrollContainerRef}
        className="research scrollbar grid h-full max-h-[933px] w-full grid-flow-col grid-rows-2 gap-4 gap-y-5 overflow-x-scroll"
      >
        {activeType === 'drawings'
          ? data.drawings.map((drawing: any) => (
              <div
                className="relative h-auto min-h-[200px] w-[460px]"
                key={drawing._key}
              >
                <Image
                  src={urlForImage(drawing)}
                  alt={(drawing.alt as string) || 'drawing'}
                  quality={90}
                  fill
                  className="h-full w-full object-contain"
                />
              </div>
            ))
          : data.models.map((model: any) => (
              <div
                className="relative h-auto min-h-[200px] w-[460px]"
                key={model._key}
              >
                <Image
                  src={urlForImage(model)}
                  alt={(model.alt as string) || 'model'}
                  quality={90}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
      </div>
    </div>
  );
}
