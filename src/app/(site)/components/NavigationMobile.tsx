'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function NavigationMobile({ categories }: any) {
  const pathname = usePathname();
  const [isWorkOpen, setIsWorkOpen] = useState<boolean>(false);
  const workAccordionRef = useRef<HTMLDivElement>(null);

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

  const isOfficePage = pathname.includes('/office');

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
        {isOfficePage && (
          <div className="mt-1 flex flex-col gap-1">
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
            <div className="block">
              <div className="flex flex-col flex-wrap gap-1">
                {officeCategories.map((cat) => {
                  if (cat.slug !== activeOfficeCategory?.slug) {
                    return (
                      <Link
                        key={cat.slug}
                        href={`/office/${cat.slug}`}
                        className="hover:text-black"
                      >
                        {cat.label}
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative flex flex-col" ref={workAccordionRef}>
        <div onClick={() => setIsWorkOpen(!isWorkOpen)}>work</div>

        {activeCategory && (
          <Link href={`/work/${activeCategory.title}`} className="mt-1">
            {activeCategory.title}
          </Link>
        )}
        <div
          className={`flex-col mt-1 flex-wrap gap-y-1 transition-opacity duration-300 ${
            isWorkOpen ? 'flex' : 'hidden'
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
                  onClick={() => setIsWorkOpen(false)}
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
