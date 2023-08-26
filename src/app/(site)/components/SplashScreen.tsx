'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Initialize the global variable
let hasSplashScreenBeenShown = false;

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!hasSplashScreenBeenShown) {
      setTimeout(() => {
        document.body.style.cursor = 'default';
        setIsLoading(false);
        hasSplashScreenBeenShown = true;
      }, 1000);
    } else {
      setIsLoading(false);
    }
  }, []);
  console.log('isLoading', isLoading);
  console.log('hasSplashScreenBeenShown', hasSplashScreenBeenShown);

  const slideRight = {
    initial: {
      x: '0',
    },
    exit: {
      x: '-600vh',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  return (
    <AnimatePresence mode="wait" key="splashscreen">
      {isLoading && (
        <motion.div
          variants={slideRight}
          initial="initial"
          exit="exit"
          className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black text-4xl font-medium text-white lg:text-9xl"
        >
          <h1>LEVENBETTS</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
