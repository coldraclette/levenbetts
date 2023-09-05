'use client';

import { useState } from 'react';
import Image from 'next/image';

import { urlForImage } from '../../../../../sanity/lib/image';
import { useWorkActive } from '../../WorkActiveContext';

interface ResearchMobileProps {
  data: any;
}

export default function ResearchMobile({ data }: ResearchMobileProps) {
  const [activeType, setActiveType] = useState('drawings');
  const { isWorkActive, setIsWorkActive } = useWorkActive();
  return (
    <div className="mt-2 lg:hidden">
      <div className="fixed left-0 top-10 z-40 flex gap-4 pb-3 pl-[15px]">
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
        className={`grid grid-cols-2 gap-[15px] px-[15px] transition-transform ${
          isWorkActive ? 'translate-y-[170px]' : 'translate-y-0'
        }`}
      >
        {activeType === 'drawings'
          ? data.drawings.map((drawing: any) => (
              <div key={drawing._key} className="relative h-[200px] w-full">
                <Image
                  src={urlForImage(drawing)}
                  alt={(drawing.alt as string) || 'drawing'}
                  fill
                  quality={90}
                  className="object-contain"
                />
              </div>
            ))
          : data.models.map((model: any) => (
              <div key={model._key} className="relative h-[200px] w-full">
                <Image
                  key={model._key}
                  src={urlForImage(model)}
                  alt={(model.alt as string) || 'model'}
                  fill
                  quality={90}
                  className="object-cover"
                />
              </div>
            ))}
      </div>
    </div>
  );
}
