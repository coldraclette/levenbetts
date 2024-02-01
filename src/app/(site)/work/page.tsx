import { getWorkPageData } from '../../../../sanity/sanity.query';
import ProjectOverview from '../components/project/ProjectOverview';
import NotFound from '../not-found';

export const revalidate = 60;

export default async function Page() {
  const data = await getWorkPageData();

  if (!data) {
    return <NotFound />;
  }

  return <ProjectOverview data={data} />;
}
