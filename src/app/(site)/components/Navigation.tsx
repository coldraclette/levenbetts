'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const [isWorkOpen, setIsWorkOpen] = useState<boolean>(false);

  const categories = [
    'houses',
    'adaptations',
    'arts',
    'cities',
    'education',
    'furniture',
    'housing',
    'libraries',
    'workspaces',
    'publication',
    'research',
  ];

  const officeCategories = [
    { slug: 'awards', label: 'awards' },
    { slug: 'people', label: 'people' },
    { slug: 'project-list', label: 'project list' },
  ];

  const activeCategory = categories.find((cat) =>
    pathname.includes(`/work/${cat}`)
  );
  const activeOfficeCategory = officeCategories.find((cat) =>
    pathname.includes(`/office/${cat.slug}`)
  );

  return (
    <nav className="grid relative z-10 h-20 grid-cols-[1fr_2fr_3fr] gap-2 p-4 md:p-[22px]">
      <div>
        <h1>
          <Link href="/">LEVENBETTS</Link>
        </h1>
      </div>

      <div className="relative">
        <div className="group inline-block cursor-pointer">
          <Link href="/office">office</Link>
          <div className="flex gap-5">
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
              <div className="text-grey flex flex-wrap gap-5">
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

      <div className="relative">
        <div
          className="group inline-block cursor-pointer"
          onClick={() => setIsWorkOpen(!isWorkOpen)}
        >
          <span>work</span>
          <div className="flex gap-5 gap-y-1">
            {activeCategory && (
              <div>
                <Link
                  href={`/work/${activeCategory}`}
                  className="hover:text-black"
                >
                  {activeCategory}
                </Link>
              </div>
            )}
            <div
              className={
                (isWorkOpen ? 'block' : 'hidden') + ' group-hover:block'
              }
            >
              <div className="text-grey flex flex-wrap gap-5 gap-y-1">
                {categories.map((cat) => {
                  if (cat !== activeCategory) {
                    return (
                      <Link
                        key={cat}
                        href={`/work/${cat}`}
                        className="hover:text-black"
                      >
                        {cat}
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
