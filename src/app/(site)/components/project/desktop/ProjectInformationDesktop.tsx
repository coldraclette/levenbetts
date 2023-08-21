import { AnimatePresence, motion } from 'framer-motion';

import { TextProps } from '../../../types/types';
import TextContent from '../../TextContent';

interface ProjectInformationDesktopProps {
  text: TextProps[];
  specs: TextProps[];
  detailsOpen?: boolean;
}

export default function ProjectInformationDesktop({
  text,
  specs,
  detailsOpen,
}: ProjectInformationDesktopProps) {
  return (
    <div className="mt-5 hidden md:flex">
      <div className="grid h-full max-h-full w-full grid-cols-[minmax(200px,_593px)_minmax(200px,_593px)_2fr] gap-4 overflow-auto px-[22px]">
        <AnimatePresence mode="wait">
          {detailsOpen && (
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
                <TextContent text={text} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.8 } }}
                exit={{ opacity: 0 }}
                className="scrollbar ml-auto h-full min-w-[220px] overflow-auto"
              >
                <TextContent text={specs} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
