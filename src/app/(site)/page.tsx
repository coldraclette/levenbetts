import dynamic from 'next/dynamic';

import { urlForImage } from '../../../sanity/lib/image';
import { getLandingPageData } from '../../../sanity/sanity.query';
import { siteConfig } from './site.config';

const SwiperComponent = dynamic(() => import('./components/SwiperComponent'), {
  ssr: false,
});

export async function generateMetadata() {
  const data = await getLandingPageData();
  if (!data) return;

  return {
    title: {
      default: siteConfig.title,
    },
    description: siteConfig.description,
    openGraph: {
      type: 'website',
      url: siteConfig.siteUrl,
      title: data.seoTitle || siteConfig.title,
      description: data.seoDescription || siteConfig.description,
      siteName: siteConfig.siteUrlShort,
      images: [
        {
          url: urlForImage(data.seoImage, 1200, 630),
          width: 1200,
          height: 630,
          alt: siteConfig.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

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
