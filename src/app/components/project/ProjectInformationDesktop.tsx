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
    <div className="hidden h-[60vh] md:flex md:px-[22px]">
      <div className="grid h-full max-h-full w-full grid-cols-3 gap-4 overflow-auto">
        <div
          style={{
            columnCount: 2,
            columnFill: 'auto',
          }}
          className="col-span-2"
        >
          <TextContent text={text} />
        </div>

        <div className="h-full overflow-auto">
          <TextContent text={specs} />
        </div>
      </div>
    </div>
  );
}
