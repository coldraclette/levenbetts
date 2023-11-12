'use client';

import useWindowSize from '../../hooks/useWindowSize';
import SwiperOverview from '../SwiperOverview';
import ProjectOverviewMobile from './ProjectOverviewMobile';

interface ProjectOverviewProps {
  data: any;
}

export default function ProjectOverview({ data }: ProjectOverviewProps) {
  const windowSize = useWindowSize();

  if (windowSize.width === undefined) return null;

  const isMobile = windowSize.width < 1024;

  return (
    <>
      {isMobile ? (
        <ProjectOverviewMobile projects={data.projects} />
      ) : (
        <div className="hidden h-full lg:flex">
          <SwiperOverview projects={data.projects} />
        </div>
      )}
    </>
  );
}
