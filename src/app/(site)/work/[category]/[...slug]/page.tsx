import {
  getCategoryID,
  getProjectNavigation,
  getSingleProjectData,
} from '../../../../../../sanity/sanity.query';
import ProjectDetail from '../../../components/project/ProjectDetail';
import NotFound from '../../../not-found';

interface PageProps {
  params: {
    category: string;
    slug: string[];
  };
}

export const revalidate = 120;

export default async function Page({ params }: PageProps) {
  const category = params.category;
  const name = params.slug[0];

  console.log('params', params);
  console.log('category', category);
  console.log('name', name);

  const categoryId = await getCategoryID(category);

  if (!categoryId) {
    return <NotFound />;
  }

  const project = await getSingleProjectData(categoryId, name);

  if (!project) {
    return <NotFound />;
  }

  const { prev, next } = await getProjectNavigation(name, project.category._id);

  return <ProjectDetail project={project} prev={prev} next={next} />;
}
