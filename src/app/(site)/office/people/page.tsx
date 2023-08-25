import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import { urlForImage } from '../../../../../sanity/lib/image';
import { getPeoplePageData } from '../../../../../sanity/sanity.query';
import PeopleDesktop from '../../components/people/PeopleDesktop';
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
      <PeopleDesktop data={data} />
      <div className="lg:hidden">
        <div className="px-4 flex flex-col gap-4">
          <TextContent text={data.text} />
          <TextContent text={data.additionalText} />
        </div>
        <div className="flex flex-col gap-4 mt-4">
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
