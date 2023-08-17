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
    <div className="mt-5 hidden md:flex">
      <div className="grid h-full max-h-full w-full grid-cols-[593px_593px_2fr] gap-4 overflow-auto px-[22px]">
        <div
          style={{
            columnCount: 2,
            columnFill: 'auto',
          }}
          className="col-span-2 h-[50vh] "
        >
          <TextContent text={text} />
        </div>

        <div className="ml-auto h-full overflow-auto">
          <TextContent text={specs} />
        </div>
      </div>
    </div>
  );
}
