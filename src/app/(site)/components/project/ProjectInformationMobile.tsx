
import { TextProps } from '@/app/(site)/types/types';
import TextContent from '../TextContent';

interface ProjectInformationMobileProps {
  text: TextProps[];
  specs: TextProps[];
}

export default function ProjectInformationMobile({
  text,
  specs,
}: ProjectInformationMobileProps) {
  return (
    <div className="px-4 md:hidden">
      <TextContent text={text} />
      <TextContent text={specs} />
    </div>
  );
}
