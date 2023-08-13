import { getLandingPageData } from '../../../sanity/sanity.query';
import BackgroundGallery from './components/BackgroundGallery';

export const revalidate = 60;

export default async function Page() {
  const data = await getLandingPageData();
  if (!data) return;

  const { projects } = data;
  return <BackgroundGallery projects={projects} />;
}
