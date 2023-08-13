import { getProjectsOverviewWithCategoryData } from '../../../../../sanity/sanity.query';
import OverviewImageGallery from '../../components/OverviewImageGallery';

export default async function Page() {
  const data = await getProjectsOverviewWithCategoryData('funritureOverview');

  if (!data) {
    return null;
  }

  return (
    <div>
      <OverviewImageGallery projects={data.projects} />
    </div>
  );
}
