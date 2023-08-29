import { ProjectProps } from '../../types/types';
import Heading from '../Heading';
import ProjectInformationDesktop from './desktop/ProjectInformationDesktop';
import ProjectNavigation from './ProjectNavigation';

interface ProjectHeadingProps {
  project: ProjectProps;
  detailsOpen?: boolean;
  prev: any;
  next: any;
  onHeaderClicked?: () => void | undefined;
  toggleDetails?: () => void | undefined;
}

export default function ProjectHeading({
  project,
  detailsOpen,
  prev,
  next,
  onHeaderClicked,
  toggleDetails,
}: ProjectHeadingProps) {
  return (
    <div
      className={`fixed z-30 -mt-[2px] flex w-full justify-between bg-white px-4 pb-1 md:px-[22px] lg:relative lg:mt-0 lg:h-[5vh]`}
    >
      <Heading
        title={project.title}
        subtitle={project.subtitle}
        onHeaderClicked={onHeaderClicked}
      />
      <ProjectNavigation
        prev={prev}
        next={next}
        category={project.category.title}
        onDetailsClick={toggleDetails}
        detailsOpen={detailsOpen}
      />
    </div>
  );
}
