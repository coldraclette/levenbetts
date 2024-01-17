import dynamic from 'next/dynamic';

import { getLandingPageData } from '../../../sanity/sanity.query';

const SwiperComponent = dynamic(() => import('./components/SwiperComponent'), {
  ssr: false,
});

export const revalidate = 60;

export default async function Page() {
  const data = await getLandingPageData();
  if (!data) return;

  const { projects } = data;

  return (
    <div className="fixed left-0 top-0 h-screen w-screen">
      <SwiperComponent projects={projects} />
    </div>
  );
}
