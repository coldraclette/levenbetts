import { useState } from 'react';
import Link from 'next/link';

type Category = {
  _id: string;
  title: string;
};

interface NavigationDesktopOfficeLinksProps {
  pathname: string;
}

export default function NavigationDesktopOfficeLinks({
  pathname,
}: NavigationDesktopOfficeLinksProps) {
  const [hoveredOfficeId, setHoveredOfficeId] = useState<string | null>(null);

  const officeCategories = [
    { slug: 'awards', label: 'awards' },
    { slug: 'people', label: 'people' },
    { slug: 'project-list', label: 'project list' },
  ];

  const activeOfficeCategory = officeCategories.find((cat) =>
    pathname.includes(`/office/${cat.slug}`)
  );
  return (
    <div className="grid grid-cols-2">
      <Link href="/" className="pl-[22px]">
        LEVENBETTS
      </Link>

      <div className="relative">
        <div className="group cursor-pointer">
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
                          hoveredOfficeId === cat.slug ||
                          hoveredOfficeId === null
                            ? 'w-auto text-black'
                            : 'w-auto text-grey'
                        }`}
                        onMouseEnter={() => setHoveredOfficeId(cat.slug)}
                        onMouseLeave={() => setHoveredOfficeId(null)}
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
  );
}
