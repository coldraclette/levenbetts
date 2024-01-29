import SmallerImageGallery from '../SmallerImageGallery';
import TextContent from '../TextContent';
import ThreeColumnsTextDesktop from '../ThreeColumnsTextDesktop';

interface PeopleDesktopProps {
  data: any;
}

export default function PeopleDesktop({ data }: PeopleDesktopProps) {
  return (
    <div className="hidden lg:block">
      <div className="mt-4 grid h-full max-h-full w-full grid-cols-3 gap-4 overflow-auto px-[22px]">
        <div className="three-columns-text-height">
          <TextContent text={data.text} />
        </div>
        <div className="three-columns-text-height">
          <TextContent text={data.text2} />
        </div>
        <div className="scrollbar h-full  overflow-auto">
          <TextContent text={data.additionalText} />
        </div>
      </div>
      <SmallerImageGallery images={data.images} />
    </div>
  );
}
