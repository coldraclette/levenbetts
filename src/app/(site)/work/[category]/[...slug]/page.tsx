import { groq } from 'next-sanity';

import { client } from '../../../../../../sanity/lib/client';
import {
  getProjectNavigation,
  getSingleProjectData,
} from '../../../../../../sanity/sanity.query';
import ProjectDetail from '../../../components/project/ProjectDetail';
import NotFound from '../../../not-found';
import ResearchPage from '../../researchPage';

interface PageProps {
  params: {
    slug: string[];
  };
}

export const revalidate = 120;

export async function generateStaticParams() {
  const query = groq`*[_type == "project"]
  {
      "category": category->title,
      "slug": slug.current
  }`;

  const projects = await client.fetch(query);

  return projects.map((project: any) => ({
    category: project.category,
    slug: [project.slug],
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;

  if (slug[0] === 'research') {
    return <ResearchPage />;
  }

  const project = await getSingleProjectData(slug[0]);

  if (!project) {
    return <NotFound />;
  }

  const { prev, next } = await getProjectNavigation(
    slug[1],
    project.category._id
  );

  return <ProjectDetail project={project} prev={prev} next={next} />;
}
