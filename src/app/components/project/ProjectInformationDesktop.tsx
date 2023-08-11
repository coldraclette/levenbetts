import { TextProps } from '../../types/types';
import TextContent from '../TextContent';

interface ProjectInformationDesktopProps {
  text: TextProps[];
  specs: TextProps[];
}

export default function ProjectInformationDesktop({
  text,
  specs,
}: ProjectInformationDesktopProps) {
  return (
    <div className="hidden md:flex md:px-[22px]">
      <div className="grid grid-cols-1 gap-4 md:h-full md:grid-cols-3">
        <div className="column-count-2 h-full md:col-span-2">
          <TextContent text={text} />
        </div>
        <div className="h-full md:col-span-1">
          <TextContent text={specs} />
        </div>
      </div>
    </div>
  );
}
