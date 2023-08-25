'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

interface TransitionProps {
  children: React.ReactNode;
}
export default function Transition({ children }: TransitionProps) {
  const pathname = usePathname();
  return (
    <AnimatePresence key={pathname} mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
        }}
        exit={{ opacity: 0 }}
        className="h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
