import { getLandingPageData } from '../../../sanity/sanity.query';
import FullscreenGallery from './components/FullscreenGallery';

export const revalidate = 60;

export default async function Page() {
  const data = await getLandingPageData();
  if (!data) return;

  const { projects } = data;
  return <FullscreenGallery projects={projects} />;
}
