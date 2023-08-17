import Image from 'next/image';
import Link from 'next/link';
import { groq } from 'next-sanity';

import { client } from '../../../../../sanity/lib/client';
import { urlForImage } from '../../../../../sanity/lib/image';
import { getProjectsOverviewWithCategoryData } from '../../../../../sanity/sanity.query';
import EmblaGallery from '../../components/EmblaGallery';
import NotFound from '../../not-found';
import { OptionsProps } from '../../types/types';
import ResearchPage from '../researchPage';

export const revalidate = 120;

export async function generateStaticParams() {
  const query = groq`*[_type == "category"] {
    title
}`;

  const categories = await client.fetch(query);

  return categories.map((category: any) => ({
    category: category.title,
  }));
}

export default async function Page({ params }: any) {
  if (params.category === 'research') {
    return <ResearchPage />;
  }

  const data = await getProjectsOverviewWithCategoryData(params.category);

  if (!data) {
    return <NotFound />;
  }

  const options: OptionsProps = {
    setAutoplay: false,
    landingPage: false,
    embla: {
      loop: false,
      inViewThreshold: 0.2,
    },
    autoplay: {
      delay: 4000,
    },
    wheelGestures: {
      wheelDraggingClass: '',
      forceWheelAxis: 'y',
    },
    styling: {
      emblaWrapper: 'embla-carousel relative h-full w-full overflow-hidden',
      emblaContainer: 'flex h-full gap-[15px]',
      emblaSlide: 'relative min-w-0 flex-[0_0_80%]',
      emblaSlideInner: 'h-full w-full object-cover',
    },
  };

  return (
    <>
      <div className="flex flex-col items-center gap-[14px] md:hidden">
        {data.projects &&
          data.projects.map((project: any) => (
            <div key={project.slug.current} className="w-full">
              <Link
                href={`/work/${project.category.title}/${project.slug.current}`}
              >
                <div className="mb-[7px] px-4">
                  <h2>{project.title}</h2>
                  {project.subtitle && <h3>{project.subtitle}</h3>}
                </div>
                <Image
                  src={urlForImage(project.projectImage)}
                  alt={project.projectImage.alt}
                  width={1024}
                  height={768}
                  sizes="(max-width: 768px) 100vw, 768px"
                  quality={90}
                />
              </Link>
            </div>
          ))}
      </div>
      <div className="hidden h-full md:flex">
        <EmblaGallery projects={data.projects} options={options} />
      </div>
    </>
  );
}
