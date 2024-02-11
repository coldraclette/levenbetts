'use client';

import { useRef } from 'react';

import useHorizontalScroll from '../hooks/useHorizontalScroll';
import { useSwipeHook } from '../hooks/useSwipeHook';
import { useWorkActive } from '../WorkActiveContext';
import AwardListItem from './AwardListItem';

interface AwardListProps {
  awards: AwardProps[];
}

interface AwardProps {
  _key: string;
  year: string;
  awardDetails: any;
}

export default function AwardList({ awards }: AwardListProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { isWorkActive, setIsWorkActive } = useWorkActive();
  useHorizontalScroll(scrollContainerRef);
  const handlers = useSwipeHook();

  return (
    <>
      <div
        {...handlers}
        className={`flex flex-col gap-4 pb-4 transition-transform lg:hidden ${
          isWorkActive ? 'translate-y-[126px]' : 'translate-y-0'
        }`}
      >
        {awards.map(({ _key, year, awardDetails }: AwardProps) => {
          return (
            <div key={_key} className="">
              <h2>{year}</h2>
              <ul>
                <AwardListItem award={awardDetails} />
              </ul>
            </div>
          );
        })}
      </div>
      <div
        ref={scrollContainerRef}
        className="scrollbar hidden overflow-x-auto lg:block"
      >
        <div
          className="w-1/3 space-y-4 p-4 pl-0"
          style={{
            columnWidth: '610px',
            columnGap: '14px',
            height: 'calc(100vh - 85px)',
          }}
        >
          {awards.map(({ _key, year, awardDetails }: AwardProps) => {
            return (
              <div key={_key} className="break-inside-avoid">
                <h2>{year}</h2>
                <ul>
                  <AwardListItem award={awardDetails} />
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
