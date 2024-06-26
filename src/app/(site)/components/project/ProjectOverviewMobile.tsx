'use client';

import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '../../../../../sanity/lib/image';
import { useWorkActive } from '../../WorkActiveContext';

interface ProjectOverviewMobileProps {
  projects: any;
}

export default function ProjectOverviewMobile({
  projects,
}: ProjectOverviewMobileProps) {
  const { isWorkActive, navHeight } = useWorkActive();

  return (
    <div
      className={`-mt-[4px] flex flex-col items-center gap-[14px] transition-transform lg:hidden`}
      style={{
        transform: isWorkActive
          ? `translateY(${navHeight - 50}px)`
          : 'translateY(0)',
      }}
    >
      {projects &&
        projects.map((project: any) => {
          if (!project) return null;
          if (!project.projectImage) return null;
          if (!project.category) return null;
          return (
            <div key={project.slug.current} className="w-full">
              <Link
                href={`/work/${project.category.title}/${project.slug.current}`}
              >
                <div className="mb-3 px-4">
                  <h2>{project.title}</h2>
                  {project.subtitle && <h3>{project.subtitle}</h3>}
                </div>
                <Image
                  src={urlForImage(project.projectImage, 800)}
                  alt={project.projectImage.alt}
                  width={1024}
                  height={768}
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </Link>
            </div>
          );
        })}
    </div>
  );
}
