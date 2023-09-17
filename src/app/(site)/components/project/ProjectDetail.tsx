'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSwipeable } from 'react-swipeable';

import useWindowSize from '../../hooks/useWindowSize';
import { ProjectNavigationItemProps, ProjectProps } from '../../types/types';
import { useWorkActive } from '../../WorkActiveContext';
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
  const { isWorkActive, setIsWorkActive } = useWorkActive();
  const informationRef = useRef<HTMLDivElement>(null);
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);
  const router = useRouter();

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

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      router.push(`/work/${project.category}/${prev.slug.current}`),
    onSwipedRight: () =>
      router.push(`/work/${project.category}/${next.slug.current}`),
  });

  if (windowSize.width === undefined) return null;
  const isMobile = windowSize.width < 1024;

  return (
    <div className="relative flex h-full flex-col">
      {isMobile ? (
        <div {...handlers}>
          <ProjectHeading
            project={project}
            onHeaderClicked={scrollToInformation}
            prev={prev}
            next={next}
            isWorkActive={isWorkActive}
          />
          <div
            className={`transition-transform ${
              isWorkActive ? 'translate-y-[170px]' : 'translate-y-0'
            }`}
          >
            <ProjectImagesMobile images={project.images} />
            <ProjectInformationMobile
              text={project.text}
              specs={project.specs}
              informationRef={informationRef}
            />
          </div>
        </div>
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
