'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      document.body.style.cursor = 'default';
      setIsLoading(false);
    }, 1000);
  }, []);

  const slideRight = {
    initial: {
      x: '0',
    },
    exit: {
      x: '-300vh',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={slideRight}
          initial="initial"
          exit="exit"
          className="text-white fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black text-4xl lg:text-9xl font-bold"
        >
          <h1>LEVENBETTS</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
