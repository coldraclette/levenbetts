import { useEffect, useState } from 'react';
import Link from 'next/link';

import useWindowSize from '../../hooks/useWindowSize';

interface NavigationBranding {
  pathname: string;
}

export default function NavigationBranding({ pathname }: NavigationBranding) {
  const [showIntro, setShowIntro] = useState(pathname === '/' ? true : false);
  const windowSize = useWindowSize();

  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false);
    }, 2000);
  }, []);

  if (windowSize.width === undefined) return null;

  return (
    <Link href="/">
      <div
        className={`fixed z-50 ${
          showIntro
            ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-medium lg:text-9xl'
            : 'left-4 top-4 lg:left-[22px] lg:top-[22px]'
        } transition-all duration-1000 ease-in-out`}
      >
        LEVENBETTS
      </div>
    </Link>
  );
}
