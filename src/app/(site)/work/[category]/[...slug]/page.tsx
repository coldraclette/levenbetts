import {
  getProjectNavigation,
  getSingleProjectData,
} from '../../../../../../sanity/sanity.query';
import ProjectDetail from '../../../components/project/ProjectDetail';
import NotFound from '../../../not-found';

interface PageProps {
  params: {
    slug: string[];
  };
}

export const revalidate = 120;

export default async function Page({ params }: PageProps) {
  const { slug } = params;

  const project = await getSingleProjectData(slug[0]);

  if (!project) {
    return <NotFound />;
  }

  const { prev, next } = await getProjectNavigation(
    slug[0],
    project.category._id
  );

  return <ProjectDetail project={project} prev={prev} next={next} />;
}
