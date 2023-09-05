'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useWorkActive } from '../WorkActiveContext';

export default function NavigationMobile({ categories }: any) {
  const { isWorkActive, setIsWorkActive } = useWorkActive();
  const pathname = usePathname();
  const workAccordionRef = useRef<HTMLDivElement>(null);
  const [isOfficeOpen, setIsOfficeOpen] = useState<boolean>(false);

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
      setIsWorkActive(false);
    }
  };

  const isOfficePage = pathname === '/office';

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed z-40 grid w-full grid-cols-4 p-4 ${
        pathname === '/' ? 'bg-none' : 'bg-white'
      }  `}
    >
      <h1 className="col-span-2">
        <Link href="/">LEVENBETTS</Link>
      </h1>

      <div className="relative">
        <div>
          <Link href="/office">office</Link>
        </div>
        <div className="flex flex-col ">
          {activeOfficeCategory && (
            <div onClick={() => setIsOfficeOpen(!isOfficeOpen)}>
              {activeOfficeCategory.label}
            </div>
          )}
          {(isOfficePage || isOfficeOpen) && (
            <div className="block">
              <div className="flex flex-col flex-wrap ">
                {officeCategories.map((cat) => {
                  if (cat.slug !== activeOfficeCategory?.slug) {
                    return (
                      <Link
                        key={cat.slug}
                        href={`/office/${cat.slug}`}
                        onClick={() => setIsOfficeOpen(false)}
                      >
                        {cat.label}
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="relative flex flex-col" ref={workAccordionRef}>
        <div onClick={() => setIsWorkActive(!isWorkActive)}>work</div>

        {activeCategory && !isWorkActive && (
          <div onClick={() => setIsWorkActive(!isWorkActive)}>
            {activeCategory.title}
          </div>
        )}
        {activeCategory && isWorkActive && (
          <Link
            href={`/work/${activeCategory.title}`}
            onClick={() => setIsWorkActive(false)}
          >
            {activeCategory.title}
          </Link>
        )}
        <div
          className={`flex-col flex-wrap  transition-opacity duration-300 ${
            isWorkActive ? 'flex' : 'hidden'
          }`}
        >
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
                  className=""
                  onClick={() => setIsWorkActive(false)}
                >
                  {title}
                </Link>
              )
            );
          })}
        </div>
      </div>
    </nav>
  );
}
