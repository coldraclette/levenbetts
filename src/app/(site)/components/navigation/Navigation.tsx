'use client';

import path from 'path';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { getCategories } from '../../../../../sanity/sanity.query';
import useStore from '../../store/store';
import { Category } from '../../types/types';
import { composeClassNames } from '../../utils';
import NavigationBranding from './NavigationBranding';
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';

export default function Navigation() {
  const [categories, setCategories] = useState<Category[]>([]);
  const pathname = usePathname();
  const showNavigation = useStore((state) => state.showNavigation);
  const setShowNavigation = useStore((state) => state.setShowNavigation);

  useEffect(() => {
    getCategories().then((data) => {
      const research = {
        _id: 'research',
        title: 'research',
      };
      const mergedData = [...data, research];
      setCategories(mergedData);
    });
  }, []);

  useEffect(() => {
    if (pathname !== '/') {
      setShowNavigation(true);
    }
  }, []);

  return (
    <nav
      className={composeClassNames('relative z-50', {
        'bg-white': pathname !== '/',
      })}
    >
      <div
        className={composeClassNames(
          'h-full w-full opacity-100 transition-opacity delay-300 ease-in lg:h-[85px]',
          { 'opacity-0': !showNavigation },
          { 'opacity-100': showNavigation }
        )}
      >
        <NavigationMobile pathname={pathname} categories={categories} />
        <NavigationDesktop pathname={pathname} categories={categories} />
      </div>
      <NavigationBranding pathname={pathname} />
    </nav>
  );
}
