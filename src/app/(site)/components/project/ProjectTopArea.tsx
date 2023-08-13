'use client';

import { useState } from 'react';
import Heading from '@/app/(site)/components/Heading';
import { ProjectNavigationItemProps, TextProps } from '@/app/(site)/types/types';

import ImageGallery from '../ImageGallery';
import ProjectInformationDesktop from './ProjectInformationDesktop';
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

export default function ProjectTopArea({
  project,
  prev,
  next,
}: ProjectTopAreaProps) {
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);

  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };

  return (
    <div className="h-full">
      <div className="flex justify-between px-4 md:px-[22px]">
        <Heading title={project.title} subtitle={project.subtitle} />
        <ProjectNavigation
          prev={prev}
          next={next}
          category={project.category.title}
          onDetailsClick={toggleDetails}
        />
      </div>
      {detailsOpen && (
        <ProjectInformationDesktop text={project.text} specs={project.specs} />
      )}
      <ImageGallery images={project.images} detailsOpen={detailsOpen} />
    </div>
  );
}
