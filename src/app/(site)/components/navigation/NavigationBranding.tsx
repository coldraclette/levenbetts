import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import useWindowSize from '../../hooks/useWindowSize';
import useStore from '../../store/store';

interface NavigationBranding {
  pathname: string;
}

export default function NavigationBranding({ pathname }: NavigationBranding) {
  const [showIntro, setShowIntro] = useState(pathname === '/' ? true : false);
  const setLogoVisibility = useStore((state) => state.setShowNavigation);

  const windowSize = useWindowSize();

  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false);
      setLogoVisibility(true);
    }, 2000);
  }, []);

  if (windowSize.width === undefined) return null;

  return (
    <AnimatePresence mode="wait">
      {showIntro && (
        <motion.div
          key="branding"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className={`fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-5xl font-medium transition-opacity duration-300 ease-in-out lg:text-[180px]`}
        >
          LEVENBETTS
        </motion.div>
      )}
    </AnimatePresence>
  );
}
