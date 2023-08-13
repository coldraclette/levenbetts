import { getOfficePageData } from '../../../../sanity/sanity.query';
import SmallerImageGallery from '../components/SmallerImageGallery';
import TextContent from '../components/TextContent';

export default async function Page() {
  const data = await getOfficePageData();
  return (
    <div>
      <div className="mt-5 hidden h-[60vh] px-[22px] md:flex">
        <div className="grid h-full max-h-full w-full grid-cols-3 gap-4 overflow-auto">
          <div
            style={{
              columnCount: 2,
              columnFill: 'auto',
            }}
            className="col-span-2"
          >
            <TextContent text={data.text} />
          </div>

          <div className="h-full overflow-auto">
            <TextContent text={data.additionalText} />
          </div>
        </div>
      </div>
      <SmallerImageGallery images={data.images} />
    </div>
  );
}
