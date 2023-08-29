'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { getCategories } from '../../../../sanity/sanity.query';
import useWindowSize from '../hooks/useWindowSize';
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';

type Category = {
  _id: string;
  title: string;
};

export default function Navigation() {
  const pathname = usePathname();
  const [isWorkOpen, setIsWorkOpen] = useState<boolean>(false);
  const [workClicked, setWorkClicked] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const windowSize = useWindowSize();

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  if (windowSize.width === undefined) return null;
  const isMobile = windowSize.width < 1024;

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
    <>
      {isMobile ? (
        <NavigationMobile categories={categories} />
      ) : (
        <NavigationDesktop categories={categories} />
      )}
    </>
  );
}
