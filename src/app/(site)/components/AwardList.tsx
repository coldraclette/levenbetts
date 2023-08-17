'use client';

import { useRef } from 'react';

import useHorizontalScroll from '../hooks/useHorizontalScroll';
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

  useHorizontalScroll(scrollContainerRef);

  return (
    <>
      <div className="flex flex-col gap-4 pb-4 md:hidden">
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
        className="hidden overflow-x-auto md:block "
      >
        <div
          className="w-max max-w-[615px] space-y-4 p-4 pl-0"
          style={{
            columnWidth: '615px',
            columnGap: '1rem',
            height: '90vh',
          }}
        >
          {awards.map(({ _key, year, awardDetails }: AwardProps) => {
            return (
              <div key={_key} className="break-inside-avoid pr-40">
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
