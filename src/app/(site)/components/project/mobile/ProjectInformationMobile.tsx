import { TextProps } from '@/app/(site)/types/types';

import TextContent from '../../TextContent';

interface ProjectInformationMobileProps {
  text: TextProps[];
  specs: TextProps[];
  informationRef: React.RefObject<HTMLDivElement>;
}

export default function ProjectInformationMobile({
  text,
  specs,
  informationRef,
}: ProjectInformationMobileProps) {
  return (
    <div
      ref={informationRef}
      className="mt-[26px] flex flex-col px-4 pb-4 lg:hidden"
    >
      <TextContent text={text} />
      <div className='mt-4'>
        <TextContent text={specs} />
      </div>
    </div>
  );
}
