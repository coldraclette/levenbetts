import ImageGallery from '@/app/components/ImageGallery';
import ProjectInformationMobile from '@/app/components/project/ProjectInformationMobile';
import ProjectTopArea from '@/app/components/project/ProjectTopArea';
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
      <ProjectTopArea project={project} prev={prev} next={next} />
      <ProjectInformationMobile text={project.text} specs={project.specs} />
    </>
  );
}
