import Heading from '@/app/components/Heading';
import ProjectNavigation from '@/app/components/ProjectNavigation';
import NotFound from '@/app/not-found';

import {
  getProjectNavigation,
  getSingleProjectData,
} from '../../../../sanity/sanity.query';
import ResearchPage from './researchPage';

interface PageProps {
  params: {
    slug: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;

  if (slug[0] === 'research') {
    return <ResearchPage />;
  }

  const project = await getSingleProjectData(slug[1]);

  if (!project) {
    return <NotFound />;
  }

  const { prev, next } = await getProjectNavigation(
    slug[1],
    project.category._id
  );

  return (
    <>
      <div className='flex justify-between'>
        <Heading title={project.title} subtitle={project.subtitle} />
        <ProjectNavigation prev={prev} next={next} category={project.category.title} />
      </div>
    </>
  );
}
