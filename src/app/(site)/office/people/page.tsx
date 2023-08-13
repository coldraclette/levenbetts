import { getPeoplePageData } from '../../../../../sanity/sanity.query';
import SmallerImageGallery from '../../components/SmallerImageGallery';
import TextContent from '../../components/TextContent';

export const revalidate = 60;

export default async function Page() {
  const data = await getPeoplePageData();

  if (!data) {
    return;
  }

  return (
    <div>
      <div className="mt-5 hidden  px-4 md:flex md:px-[22px]">
        <div className="grid h-full max-h-full w-full grid-cols-3 gap-4 overflow-auto">
          <div
            style={{
              columnCount: 2,
              columnFill: 'auto',
            }}
            className="col-span-2 h-[58vh]"
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
