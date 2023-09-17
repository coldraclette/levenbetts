import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { Category } from '../../types/types';

interface NavigationDesktopWorkLinksProps {
  pathname: string;
  categories: Category[];
}

export default function NavigationDesktopWorkLinks({
  pathname,
  categories,
}: NavigationDesktopWorkLinksProps) {
  const [isWorkOpen, setIsWorkOpen] = useState<boolean>(false);
  const [onWorkHover, setOnWorkHover] = useState<boolean>(false);
  const [hoveredWorkId, setHoveredWorkId] = useState<string | null>(null);

  const workAccordionRef = useRef<HTMLDivElement>(null);

  const activeCategory = categories.find((cat: any) =>
    pathname.includes(`/work/${cat.title}`)
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: any) => {
    if (
      workAccordionRef.current &&
      !workAccordionRef.current.contains(event.target)
    ) {
      setIsWorkOpen(false);
    }
  };

  return (
    <div className="relative col-span-2 pl-[9px]" ref={workAccordionRef}>
      <div
        onMouseEnter={() => setOnWorkHover(true)}
        onMouseLeave={() => setOnWorkHover(false)}
        className="cursor-pointer pb-2"
      >
        <div
          onClick={() => setIsWorkOpen(!isWorkOpen)}
          className="group inline-block cursor-pointer"
        >
          work
        </div>
        <div className="flex flex-row gap-[10px] gap-y-1">
          {activeCategory && (
            <Link href={`/work/${activeCategory.title}`}>
              {pathname.split('/')[2]}
            </Link>
          )}
          {(onWorkHover || isWorkOpen) && (
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
                        onClick={() => setIsWorkOpen(false)}
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
