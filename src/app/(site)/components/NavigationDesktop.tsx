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
  const [workClicked, setWorkClicked] = useState(false);
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
          <div className="group cursor-pointer pb-5">
            <div>
              <Link href="/office">office</Link>
            </div>
            <div className="flex flex-row gap-5">
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
                <div className="flex flex-row flex-wrap gap-5 text-grey">
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
          </div>
        </div>
      </div>

      <div className="relative col-span-2 w-2/3" ref={workAccordionRef}>
        <div className="cursor-pointerpb-5 group">
          <div onClick={() => setIsWorkOpen(!isWorkOpen)}>work</div>
          <div className="flex flex-row gap-5 gap-y-1">
            {activeCategory && (
              <div>
                <Link href={`/work/${activeCategory.title}`}>
                  {activeCategory.title}
                </Link>
              </div>
            )}
            <div
              className={
                (isWorkOpen ? 'block' : 'hidden') + ' group-hover:block'
              }
            >
              <div
                className={`work-nav flex flex-row flex-wrap gap-5 gap-y-1 ${
                  isWorkOpen ? 'work-active' : ''
                }
                ${workClicked ? 'work-clicked' : ''}
                `}
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
                        className="w-auto"
                        onClick={() => setIsWorkOpen(false)}
                      >
                        {title}
                      </Link>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
