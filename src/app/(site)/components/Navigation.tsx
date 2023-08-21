'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { getCategories } from '../../../../sanity/sanity.query';

type Category = {
  _id: string;
  title: string;
};

export default function Navigation() {
  const pathname = usePathname();
  const [isWorkOpen, setIsWorkOpen] = useState<boolean>(false);
  const [workClicked, setWorkClicked] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const officeCategories = [
    { slug: 'awards', label: 'awards' },
    { slug: 'people', label: 'people' },
    { slug: 'project-list', label: 'project list' },
  ];

  const activeCategory = categories.find((cat) =>
    pathname.includes(`/work/${cat.title}`)
  );

  const activeOfficeCategory = officeCategories.find((cat) =>
    pathname.includes(`/office/${cat.slug}`)
  );

  return (
    <nav className="relative z-10 grid h-[8vh] grid-cols-[2fr_1fr] p-4 lg:grid-cols-[minmax(200px,_615px)_1fr] lg:p-[22px]">
      <div className="grid grid-cols-2">
        <div>
          <h1>
            <Link href="/">LEVENBETTS</Link>
          </h1>
        </div>

        <div className="relative">
          <div className="group cursor-pointer pb-5">
            <div className="mb-1">
              <Link href="/office">office</Link>
            </div>
            <div className="flex flex-col gap-1 lg:flex-row lg:gap-5">
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
                <div className="flex flex-col flex-wrap gap-1 text-grey lg:flex-row lg:gap-5">
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

      <div className="relative">
        <div className="group cursor-pointer pb-5">
          <div className="mb-1" onClick={() => setIsWorkOpen(!isWorkOpen)}>
            work
          </div>
          <div className="flex flex-col gap-5 gap-y-1 lg:flex-row">
            {activeCategory && (
              <div>
                <Link
                  href={`/work/${activeCategory.title}`}
                  className="hover:text-black"
                >
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
                className={`work-nav flex flex-col flex-wrap gap-5 gap-y-1 lg:flex-row ${
                  isWorkOpen ? 'work-active ' : ''
                }
                ${workClicked ? 'work-clicked' : ''}
                `}
              >
                {categories.map(({ _id, title }) => {
                  let isActiveCategory;
                  if (activeCategory) {
                    isActiveCategory = title === activeCategory.title;
                  }

                  return (
                    !isActiveCategory && (
                      <Link
                        key={_id}
                        href={`/work/${title}`}
                        className="w-full lg:w-auto"
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
