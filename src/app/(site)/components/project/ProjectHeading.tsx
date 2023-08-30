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
      className={`fixed z-30 -mt-[4px] flex w-full justify-between bg-white px-4 pb-3 lg:relative lg:mt-0 lg:h-[5vh] lg:px-[22px]`}
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
