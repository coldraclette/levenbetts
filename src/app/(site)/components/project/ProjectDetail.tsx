'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import useWindowSize from '../../hooks/useWindowSize';
import { ProjectNavigationItemProps, ProjectProps } from '../../types/types';
import ProjectImagesDesktop from './desktop/ProjectImagesDesktop';
import ProjectInformationDesktop from './desktop/ProjectInformationDesktop';
import ProjectImagesMobile from './mobile/ProjectImagesMobile';
import ProjectInformationMobile from './mobile/ProjectInformationMobile';
import ProjectHeading from './ProjectHeading';

interface ProjectTopAreaProps {
  project: ProjectProps;
  prev: ProjectNavigationItemProps;
  next: ProjectNavigationItemProps;
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
    const offsetTop = 120;
    if (!informationRef.current) return;
    const offsetPosition = informationRef.current?.offsetTop - offsetTop;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  if (windowSize.width === undefined) return null;
  const isMobile = windowSize.width < 1024;

  return (
    <div className="h-full">
      {isMobile ? (
        <>
          <ProjectHeading
            project={project}
            onHeaderClicked={scrollToInformation}
            prev={prev}
            next={next}
          />

          <ProjectImagesMobile images={project.images} />
          <ProjectInformationMobile
            text={project.text}
            specs={project.specs}
            informationRef={informationRef}
          />
        </>
      ) : (
        <>
          <ProjectHeading
            project={project}
            detailsOpen={detailsOpen}
            prev={prev}
            next={next}
            toggleDetails={toggleDetails}
          />
          <ProjectInformationDesktop
            text={project.text}
            specs={project.specs}
            detailsOpen={detailsOpen}
          />
          <ProjectImagesDesktop
            images={project.images}
            detailsOpen={detailsOpen}
            setDetailsOpen={setDetailsOpen}
          />
        </>
      )}
    </div>
  );
}
