'use client';

import { on } from 'events';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Heading from '@/app/(site)/components/Heading';
import {
  ProjectNavigationItemProps,
  TextProps,
} from '@/app/(site)/types/types';

import { urlForImage } from '../../../../../sanity/lib/image';
import useWindowSize from '../../hooks/useWindowSize';
import ImageGallery from '../ImageGallery';
import ProjectInformationDesktop from './ProjectInformationDesktop';
import ProjectInformationMobile from './ProjectInformationMobile';
import ProjectNavigation from './ProjectNavigation';

interface ProjectTopAreaProps {
  project: ProjectProps;
  prev: ProjectNavigationItemProps;
  next: ProjectNavigationItemProps;
}

interface ProjectProps {
  _id: string;
  slug: {
    current: string;
    _type: string;
  };
  title: string;
  subtitle: string;
  category: {
    title: string;
  };
  text: TextProps[];
  specs: TextProps[];
  images: any[];
}

export default function ProjectDetail({
  project,
  prev,
  next,
}: ProjectTopAreaProps) {
  const windowSize = useWindowSize();

  const informationRef = useRef<HTMLDivElement>(null);
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);

  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };

  const scrollToInformation = () => {
    if (!isMobile) return;
    informationRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  if (windowSize.width === undefined) return null;
  const isMobile = windowSize.width < 1024;

  return (
    <div className="h-full">
      <div className="flex justify-between px-4 md:px-[22px]">
        <Heading
          title={project.title}
          subtitle={project.subtitle}
          onHeaderClicked={scrollToInformation}
        />
        <ProjectNavigation
          prev={prev}
          next={next}
          category={project.category.title}
          onDetailsClick={toggleDetails}
          detailsOpen={detailsOpen}
        />
      </div>
      {detailsOpen && (
        <ProjectInformationDesktop text={project.text} specs={project.specs} />
      )}
      {project.images && (
        <>
          <div className="hidden lg:block">
            <ImageGallery
              onImageClick={() => setDetailsOpen(false)}
              images={project.images}
              detailsOpen={detailsOpen}
            />
          </div>
          <div className="mt-2 flex flex-col gap-[15px] lg:hidden">
            {project.images.map((image): any => {
              return (
                <div key={image._key} className="relative">
                  <Image
                    src={urlForImage(image)}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    priority
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
      <ProjectInformationMobile
        text={project.text}
        specs={project.specs}
        informationRef={informationRef}
      />
    </div>
  );
}
