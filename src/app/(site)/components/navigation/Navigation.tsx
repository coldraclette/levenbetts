'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { getCategories } from '../../../../../sanity/sanity.query';
import { Category } from '../../types/types';
import { composeClassNames } from '../../utils';
import NavigationBranding from './NavigationBranding';
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';

export default function Navigation() {
  const [categories, setCategories] = useState<Category[]>([]);
  const pathname = usePathname();

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

  return (
    <nav
      className={composeClassNames('relative z-50  lg:h-[92px]', {
        'bg-white': pathname !== '/',
      })}
    >
      <NavigationMobile pathname={pathname} categories={categories} />
      <NavigationDesktop pathname={pathname} categories={categories} />
      <NavigationBranding pathname={pathname} />
    </nav>
  );
}
