'use client';

import { AnimatePresence, motion } from 'framer-motion';

import TextContent from './TextContent';

interface ThreeColumnsTextDesktopProps {
  data: any;
  imagesActive: boolean;
}

export default function ThreeColumnsTextDesktop({
  data,
  imagesActive,
}: ThreeColumnsTextDesktopProps) {
  return (
    <div className="mt-5 grid h-full max-h-full w-full grid-cols-3 gap-4 overflow-auto px-[22px]">
      <AnimatePresence mode="wait">
        {!imagesActive && (
          <>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1, transition: { delay: 0.8 } }}
              exit={{ opacity: 0 }}
              style={{
                columnCount: 2,
                columnFill: 'auto',
              }}
              className="col-span-2 h-[61vh]"
            >
              <TextContent text={data.text} />
            </motion.div>

            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1, transition: { delay: 0.8 } }}
              exit={{ opacity: 0 }}
              className="scrollbar h-full  overflow-auto"
            >
              <TextContent text={data.additionalText} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
