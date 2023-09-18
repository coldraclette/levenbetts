'use client';

import { useState } from 'react';
import Image from 'next/image';
import router from 'next/router';
import { useSwipeable } from 'react-swipeable';

import { urlForImage } from '../../../../../sanity/lib/image';
import { useWorkActive } from '../../WorkActiveContext';

interface ResearchMobileProps {
  data: any;
}

export default function ResearchMobile({ data }: ResearchMobileProps) {
  const [activeType, setActiveType] = useState('drawings');
  const { isWorkActive, setIsWorkActive } = useWorkActive();

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeType === 'drawings') {
        setActiveType('models');
      } else {
        setActiveType('drawings');
      }
    },
    onSwipedRight: () => {
      if (activeType === 'drawings') {
        setActiveType('models');
      } else {
        setActiveType('drawings');
      }
    },
  });

  return (
    <div className="lg:mt-2 lg:hidden">
      <div className="relative left-0 lg:top-10 z-50 flex gap-4 pb-3 pl-[15px] lg:fixed">
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

      <div {...handlers} className="grid grid-cols-2 gap-[15px] px-[15px]">
        <div
          className={`grid grid-cols-1 gap-[15px]  transition-transform ${
            isWorkActive ? 'translate-y-[170px]' : 'translate-y-0'
          }`}
        >
          {activeType === 'drawings'
            ? data.drawings_first_row.map((drawing: any, index: number) => (
                <div
                  key={drawing._key}
                  className="relative aspect-square h-[165px] w-full"
                >
                  <Image
                    src={urlForImage(drawing)}
                    alt={(drawing.alt as string) || 'drawing'}
                    fill
                    quality={90}
                    className="object-contain"
                    sizes="(min-width: 400px) 400px, 50vw"
                    placeholder="blur"
                    blurDataURL={drawing.asset.metadata.lqip}
                    priority={index === 0}
                  />
                </div>
              ))
            : data.models_first_row.map((model: any, index: number) => (
                <div
                  key={model._key}
                  className="relative aspect-square h-[165px] w-full"
                >
                  <Image
                    key={model._key}
                    src={urlForImage(model)}
                    alt={(model.alt as string) || 'model'}
                    fill
                    quality={90}
                    className="object-contain"
                    sizes="(min-width: 400px) 400px, 50vw"
                    placeholder="blur"
                    blurDataURL={model.asset.metadata.lqip}
                    priority={index === 0}
                  />
                </div>
              ))}
        </div>
        <div
          className={`grid grid-cols-1 gap-[15px] transition-transform ${
            isWorkActive ? 'translate-y-[170px]' : 'translate-y-0'
          }`}
        >
          {activeType === 'drawings'
            ? data.drawings_second_row.map((drawing: any, index: number) => (
                <div
                  key={drawing._key}
                  className="relative aspect-square h-[165px] w-full"
                >
                  <Image
                    src={urlForImage(drawing)}
                    alt={(drawing.alt as string) || 'drawing'}
                    fill
                    quality={90}
                    className="object-contain"
                    sizes="(min-width: 400px) 400px, 50vw"
                    placeholder="blur"
                    blurDataURL={drawing.asset.metadata.lqip}
                    priority={index === 0}
                  />
                </div>
              ))
            : data.models_second_row.map((model: any, index: number) => (
                <div
                  key={model._key}
                  className="relative aspect-square h-[165px] w-full"
                >
                  <Image
                    key={model._key}
                    src={urlForImage(model)}
                    alt={(model.alt as string) || 'model'}
                    fill
                    quality={90}
                    className="object-contain"
                    sizes="(min-width: 400px) 400px, 50vw"
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
