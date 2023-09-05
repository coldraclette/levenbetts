'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Category = {
  _id: string;
  title: string;
};
export default function NavigationDesktop({ categories }: any) {
  const pathname = usePathname();
  const [isWorkOpen, setIsWorkOpen] = useState<boolean>(false);
  const workAccordionRef = useRef<HTMLDivElement>(null);
  const [onWorkHover, setOnWorkHover] = useState(false);
  const [hoveredWorkId, setHoveredWorkId] = useState<string | null>(null);
  const [hoveredOfficeId, setHoveredOfficeId] = useState<string | null>(null);
  const [onOfficeHover, setOnOfficeHover] = useState(false);

  const officeCategories = [
    { slug: 'awards', label: 'awards' },
    { slug: 'people', label: 'people' },
    { slug: 'project-list', label: 'project list' },
  ];

  const activeCategory = categories.find((cat: any) =>
    pathname.includes(`/work/${cat.title}`)
  );

  const activeOfficeCategory = officeCategories.find((cat) =>
    pathname.includes(`/office/${cat.slug}`)
  );

  const handleClickOutside = (event: any) => {
    if (
      workAccordionRef.current &&
      !workAccordionRef.current.contains(event.target)
    ) {
      setIsWorkOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`relative z-40 grid h-[8vh] w-full grid-cols-3 gap-[15px] p-[22px] ${
        pathname === '/' ? 'bg-none' : 'bg-white'
      }`}
    >
      <div className="grid grid-cols-2">
        <h1>
          <Link href="/">LEVENBETTS</Link>
        </h1>

        <div className="relative">
          <div
            className="group cursor-pointer pb-5"
            onMouseEnter={() => setOnOfficeHover(true)}
            onMouseLeave={() => setOnOfficeHover(false)}
          >
            <div>
              <Link href="/office">office</Link>
            </div>
            <div className="flex flex-row gap-[10px]">
              {activeOfficeCategory && (
                <div>
                  <Link
                    href={`/office/${activeOfficeCategory.slug}`}
                    className="hover:text-black"
                  >
                    {activeOfficeCategory.label}
                  </Link>
                </div>
              )}
              <div className="hidden group-hover:block">
                <div className="flex flex-row flex-wrap gap-x-[10px] text-grey">
                  {officeCategories.map((cat) => {
                    if (cat.slug !== activeOfficeCategory?.slug) {
                      return (
                        <Link
                          key={cat.slug}
                          href={`/office/${cat.slug}`}
                          className={`transition-colors first:pl-0 ${
                            hoveredWorkId === cat.slug || hoveredWorkId === null
                              ? 'w-auto text-black'
                              : 'w-auto text-grey'
                          }`}
                          onMouseEnter={() => setHoveredWorkId(cat.slug)}
                          onMouseLeave={() => setHoveredWorkId(null)}
                        >
                          {cat.label}
                        </Link>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative col-span-2" ref={workAccordionRef}>
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
                {activeCategory.title}
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
    </nav>
  );
}
