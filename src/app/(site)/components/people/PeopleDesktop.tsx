'use client';

import { AnimatePresence, motion } from 'framer-motion';

import SmallerImageGallery from '../SmallerImageGallery';
import TextContent from '../TextContent';

interface PeopleDesktopProps {
  data: any;
}

export default function PeopleDesktop({ data }: PeopleDesktopProps) {
  return (
    <div className="hidden md:block">
      <div className="grid h-full mt-5 max-h-full w-full grid-cols-[minmax(200px,_593px)_minmax(200px,_593px)_2fr] gap-4 overflow-auto px-[22px]">
        <AnimatePresence mode="wait">
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.8 } }}
              exit={{ opacity: 0 }}
              style={{
                columnCount: 2,
                columnFill: 'auto',
              }}
              className="col-span-2 h-[53vh]"
            >
              <TextContent text={data.text} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.8 } }}
              exit={{ opacity: 0 }}
              className="scrollbar ml-auto h-full min-w-[220px] overflow-auto"
            >
              <TextContent text={data.additionalText} />
            </motion.div>
          </>
        </AnimatePresence>
      </div>
      <SmallerImageGallery images={data.images} />
    </div>
  );
}
