'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { getCategories } from '../../../../../sanity/sanity.query';
import useWindowSize from '../../hooks/useWindowSize';
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';

type Category = {
  _id: string;
  title: string;
};

export default function Navigation() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [showIntro, setShowIntro] = useState<boolean>(true);

  const windowSize = useWindowSize();

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
    setTimeout(() => {
      setShowIntro(false);
    }, 2000);
  }, []);

  if (windowSize.width === undefined) return null;
  const isMobile = windowSize.width < 1024;

  return (
    <>
      {isMobile ? (
        <NavigationMobile categories={categories} />
      ) : (
        <NavigationDesktop categories={categories} />
      )}
      <Link
        href="/"
        className={`fixed z-50 md:absolute  ${
          showIntro
            ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-4xl font-medium lg:text-9xl'
            : 'left-4 top-4 lg:left-[22px] lg:top-[22px]'
        } transition-all duration-1000 ease-in-out`}
      >
        <h1>LEVENBETTS</h1>
      </Link>
    </>
  );
}
