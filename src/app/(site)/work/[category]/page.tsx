import Image from 'next/image';
import Link from 'next/link';
import { groq } from 'next-sanity';

import { client } from '../../../../../sanity/lib/client';
import { urlForImage } from '../../../../../sanity/lib/image';
import { getProjectsOverviewWithCategoryData } from '../../../../../sanity/sanity.query';
import SwiperOverview from '../../components/SwiperOverview';
import NotFound from '../../not-found';
import ResearchPage from '../research/page';

export const revalidate = 120;

export async function generateStaticParams() {
  const query = groq`*[_type == "category"] {
    title
}`;

  const categories = await client.fetch(query);

  return categories.map((category: any) => ({
    category: category.title,
  }));
}

export default async function Page({ params }: any) {
  // if (params.category === 'research') {
  //   return <ResearchPage />;
  // }

  const data = await getProjectsOverviewWithCategoryData(params.category);

  if (!data) {
    return <NotFound />;
  }

  return (
    <>
      <div className="flex flex-col items-center gap-[14px] lg:hidden">
        {data.projects &&
          data.projects.map((project: any) => (
            <div key={project.slug.current} className="w-full">
              <Link
                href={`/work/${project.category.title}/${project.slug.current}`}
              >
                <div className="mb-[7px] px-4">
                  <h2>{project.title}</h2>
                  {project.subtitle && <h3>{project.subtitle}</h3>}
                </div>
                <Image
                  src={urlForImage(project.projectImage)}
                  alt={project.projectImage.alt}
                  width={1024}
                  height={768}
                  sizes="(max-width: 768px) 100vw, 768px"
                  quality={90}
                  priority
                />
              </Link>
            </div>
          ))}
      </div>
      <div className="hidden h-full lg:flex">
        <SwiperOverview projects={data.projects} />
      </div>
    </>
  );
}
