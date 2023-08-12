'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isWorkOpen, setIsWorkOpen] = useState<boolean>(false);

  return (
    <nav className="grid h-20 grid-cols-[1fr_2fr_3fr] gap-2 p-4 md:p-[22px]">
      <div>
        <h1>
          <Link href="/">LEVENBETTS</Link>
        </h1>
      </div>

      <div className="relative">
        <div className="group inline-block cursor-pointer">
          <span>office</span>
          <div className="hidden group-hover:block">
            <div className="text-grey flex gap-5">
              <Link href="/office/awards" className="hover:text-black">
                awards
              </Link>
              <Link href="/office/people" className="hover:text-black">
                people
              </Link>
              <Link href="/office/projects" className="hover:text-black">
                projects
              </Link>
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
          <div
            className={(isWorkOpen ? 'block' : 'hidden') + ' group-hover:block'}
          >
            <div className="text-grey flex gap-5">
              <Link href="/work/houses" className="hover:text-black">
                houses
              </Link>
              <Link href="/work/adaptations" className="hover:text-black">
                adaptations
              </Link>
              <Link href="/work/arts" className="hover:text-black">
                arts
              </Link>
              <Link href="/work/cities" className="hover:text-black">
                cities
              </Link>
              <Link href="/work/education" className="hover:text-black">
                education
              </Link>
              <Link href="/work/furniture" className="hover:text-black">
                furniture
              </Link>
              <Link href="/work/housing" className="hover:text-black">
                housing
              </Link>
              <Link href="/work/libraries" className="hover:text-black">
                libraries
              </Link>
              <Link href="/work/workspaces" className="hover:text-black">
                workspaces
              </Link>
              <Link href="/work/publication" className="hover:text-black">
                publication
              </Link>
              <Link href="/work/research" className="hover:text-black">
                research
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
