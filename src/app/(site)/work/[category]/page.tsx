import Image from 'next/image';
import Link from 'next/link';
import { groq } from 'next-sanity';

import { client } from '../../../../../sanity/lib/client';
import { urlForImage } from '../../../../../sanity/lib/image';
import { getProjectsOverviewWithCategoryData } from '../../../../../sanity/sanity.query';
import ProjectOverviewMobile from '../../components/project/ProjectOverviewMobile';
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
  const data = await getProjectsOverviewWithCategoryData(params.category);

  if (!data) {
    return <NotFound />;
  }

  return (
    <>
      <ProjectOverviewMobile projects={data.projects} />
      <div className="hidden h-full lg:flex">
        <SwiperOverview projects={data.projects} />
      </div>
    </>
  );
}
