'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';

import { Grid, Mousewheel } from 'swiper/modules';

import { urlForImage } from '../../../../../sanity/lib/image';

interface ResearchDesktopProps {
  data: any;
}

export default function ResearchDesktop({ data }: ResearchDesktopProps) {
  const [activeType, setActiveType] = useState('drawings');

  return (
    <>
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

      <div className="research">
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
            fill: 'row',
          }}
          mousewheel={true}
          modules={[Mousewheel, Grid]}
          freeMode={{ enabled: true, momentumBounce: false }}
        >
          {activeType === 'drawings'
            ? data.drawings.map((drawing: any) => (
                <SwiperSlide key={drawing._key}>
                  <Image
                    src={urlForImage(drawing)}
                    alt={(drawing.alt as string) || 'drawing'}
                    height={400}
                    width={400}
                    quality={90}
                  />
                </SwiperSlide>
              ))
            : data.models.map((model: any) => (
                <SwiperSlide key={model._key}>
                  <Image
                    src={urlForImage(model)}
                    alt={(model.alt as string) || 'model'}
                    height={400}
                    width={400}
                    quality={90}
                  />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </>
  );
}
