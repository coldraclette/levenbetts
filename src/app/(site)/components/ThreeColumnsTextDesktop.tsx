import TextContent from './TextContent';

interface ThreeColumnsTextDesktopProps {
  data: any;
}

export default function ThreeColumnsTextDesktop({
  data,
}: ThreeColumnsTextDesktopProps) {
  return (
    <div className="mt-5 grid h-full max-h-full w-full grid-cols-3 gap-4 overflow-auto px-[22px]">
      <div
        style={{
          columnCount: 2,
          columnFill: 'auto',
        }}
        className="col-span-2 h-[61vh]"
      >
        <TextContent text={data.text} />
      </div>

      <div className="scrollbar h-full  overflow-auto">
        <TextContent text={data.additionalText} />
      </div>
    </div>
  );
}
