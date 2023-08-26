import TextContent from '../TextContent';

interface OfficeDesktopTextProps {
  data: any;
}

export default function OfficeDesktopText({ data }: OfficeDesktopTextProps) {
  return (
    <div className="mt-5 grid h-full max-h-full w-full grid-cols-[minmax(200px,_593px)_minmax(200px,_593px)_2fr] gap-4 overflow-auto px-[22px]">
      <>
        <div
          style={{
            columnCount: 2,
            columnFill: 'auto',
          }}
          className="col-span-2 h-[53vh]"
        >
          <TextContent text={data.text} />
        </div>

        <div className="scrollbar ml-auto h-full min-w-[220px] overflow-auto">
          <TextContent text={data.additionalText} />
        </div>
      </>
    </div>
  );
}
