import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { Category } from '../../types/types';
import { useWorkActive } from '../../WorkActiveContext';

interface NavigationDesktopWorkLinksProps {
  pathname: string;
  categories: Category[];
}

export default function NavigationDesktopWorkLinks({
  pathname,
  categories,
}: NavigationDesktopWorkLinksProps) {
  const { isWorkActive, setIsWorkActive } = useWorkActive();
  const [onWorkHover, setOnWorkHover] = useState<boolean>(false);
  const [hoveredWorkId, setHoveredWorkId] = useState<string | null>(null);

  const workAccordionRef = useRef<HTMLDivElement>(null);

  const activeCategory = categories.find((cat: any) =>
    pathname.includes(`/work/${cat.title}`)
  );

  useEffect(() => {
    if (pathname !== '/work') {
      setIsWorkActive(false);
    } else {
      setIsWorkActive(true);
    }
  }, [pathname]);

  return (
    <div className="relative col-span-2 pl-[9px]" ref={workAccordionRef}>
      <div
        onMouseEnter={() => setOnWorkHover(true)}
        onMouseLeave={() => setOnWorkHover(false)}
        className="cursor-pointer pb-2 lowercase"
      >
        <Link href="/work" className="group inline-block cursor-pointer">
          work
        </Link>
        <div className="flex flex-row gap-[10px] gap-y-1">
          {activeCategory && (
            <Link href={`/work/${activeCategory.title}`}>
              {pathname.split('/')[2]}
            </Link>
          )}
          {(onWorkHover || isWorkActive) && (
            <div className="">
              <div className={`flex flex-row flex-wrap gap-[10px] gap-y-0`}>
                {categories.map(({ _id, title }: any) => {
                  let isActiveCategory;
                  if (activeCategory) {
                    isActiveCategory = title === activeCategory.title;
                  }

                  return (
                    !isActiveCategory && (
                      <Link
                        key={_id}
                        href={`/work/${title}`}
                        className={`transition-colors ${
                          hoveredWorkId === _id || hoveredWorkId === null
                            ? 'w-auto text-black'
                            : 'w-auto text-grey'
                        }`}
                        onMouseEnter={() => setHoveredWorkId(_id)}
                        onMouseLeave={() => setHoveredWorkId(null)}
                      >
                        {title}
                      </Link>
                    )
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
