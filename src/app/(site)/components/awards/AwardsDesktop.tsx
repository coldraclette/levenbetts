'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

import AwardListItem from '../AwardListItem';

interface AwardListProps {
  awards: AwardProps[];
}

interface AwardProps {
  _key: string;
  year: string;
  awardDetails: any;
}
export default function AwardsDesktop({ awards }: AwardListProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, dragFree: true },
    [WheelGesturesPlugin({ wheelDraggingClass: '', forceWheelAxis: 'y' })]
  );
  return (
    <div className="absolute bottom-0 left-0 hidden h-[90vh] w-full lg:block">
      <div
        ref={emblaRef}
        className={`scrollbar w-full overflow-hidden overflow-x-scroll`}
      >
        <div className="flex h-full w-full gap-[15px]">
          {awards.map(({ _key, year, awardDetails }: AwardProps) => {
            return (
              <div
                key={_key}
                className={`relative flex h-full flex-shrink-0 items-end`}
              >
                <div key={_key} className="break-inside-avoid pr-40">
                  <h2>{year}</h2>
                  <ul>
                    <AwardListItem award={awardDetails} />
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
