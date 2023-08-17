import Image from 'next/image';

import { urlForImage } from '../../../../../sanity/lib/image';
import { getPeoplePageData } from '../../../../../sanity/sanity.query';
import SmallerImageGallery from '../../components/SmallerImageGallery';
import TextContent from '../../components/TextContent';

export const revalidate = 120;

export default async function Page() {
  const data = await getPeoplePageData();

  if (!data) {
    return;
  }

  return (
    <>
      <div className="hidden md:block">
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
      <div className="md:hidden">
        <div className="px-4">
          <TextContent text={data.text} />
          <TextContent text={data.additionalText} />
        </div>
        <div className="flex flex-col gap-4">
          {data.images.map((image: any) => {
            return (
              <div key={image._key} className={`relative h-full`}>
                <Image
                  src={urlForImage(image)}
                  alt={image.alt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
