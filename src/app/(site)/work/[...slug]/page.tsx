import ProjectInformationMobile from '@/app/(site)/components/project/ProjectInformationMobile';
import ProjectTopArea from '@/app/(site)/components/project/ProjectTopArea';

import {
  getProjectNavigation,
  getSingleProjectData,
} from '../../../../../sanity/sanity.query';
import NotFound from '../../not-found';
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
      <ProjectTopArea project={project} prev={prev} next={next} />
      <ProjectInformationMobile text={project.text} specs={project.specs} />
    </>
  );
}
