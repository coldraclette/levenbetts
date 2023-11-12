import { groq } from 'next-sanity';

import { client } from '../../../../../sanity/lib/client';
import { getProjectsOverviewWithCategoryData } from '../../../../../sanity/sanity.query';
import ProjectOverview from '../../components/project/ProjectOverview';
import NotFound from '../../not-found';

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

  return <ProjectOverview data={data} />;
}
