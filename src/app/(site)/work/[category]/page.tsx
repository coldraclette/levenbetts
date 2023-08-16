import { getProjectsOverviewWithCategoryData } from '../../../../../sanity/sanity.query';
import OverviewImageGallery from '../../components/OverviewImageGallery';
import NotFound from '../../not-found';
import ResearchPage from '../researchPage';

export default async function Page({ params }: any) {
  if (params.category === 'research') {
    return <ResearchPage />;
  }

  const data = await getProjectsOverviewWithCategoryData(params.category);
  
  if (!data) {
    return <NotFound />;
  }

  return (
    <div>
      <OverviewImageGallery projects={data.projects} />
    </div>
  );
}
