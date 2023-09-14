import { ProjectProps } from '../../types/types';
import Heading from '../Heading';
import ProjectNavigation from './ProjectNavigation';

interface ProjectHeadingProps {
  project: ProjectProps;
  detailsOpen?: boolean;
  prev: any;
  next: any;
  onHeaderClicked?: () => void | undefined;
  toggleDetails?: () => void | undefined;
  isWorkActive?: boolean;
}

export default function ProjectHeading({
  project,
  detailsOpen,
  prev,
  next,
  onHeaderClicked,
  toggleDetails,
  isWorkActive,
}: ProjectHeadingProps) {
  return (
    <div
      className={`${
        isWorkActive ? 'top-[240px]' : 'top-[70px]'
      } fixed z-30 -mt-[4px] grid w-full grid-cols-4 bg-white px-4 pb-3 lg:relative lg:mt-0 lg:flex lg:justify-between lg:px-[22px]`}
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
