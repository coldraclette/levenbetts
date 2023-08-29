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
    <div className="hidden lg:flex">
      <div className="grid h-full max-h-full w-full grid-cols-3 gap-4 overflow-auto px-[22px]">
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
                className="col-span-2 h-[61vh]"
              >
                <TextContent text={text} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.8 } }}
                exit={{ opacity: 0 }}
                className="scrollbar h-[68vh] overflow-auto"
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
