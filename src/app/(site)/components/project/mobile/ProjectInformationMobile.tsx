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
      className="flex flex-col p-4 lg:hidden"
    >
      <TextContent text={text} />
      <div className="mt-8">
        <TextContent text={specs} />
      </div>
    </div>
  );
}
