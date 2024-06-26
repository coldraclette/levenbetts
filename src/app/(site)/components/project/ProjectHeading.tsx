import { ProjectProps } from '../../types/types';
import { composeClassNames } from '../../utils';
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
  isMobile?: boolean;
}

export default function ProjectHeading({
  project,
  detailsOpen,
  prev,
  next,
  onHeaderClicked,
  toggleDetails,
  isWorkActive,
  isMobile,
}: ProjectHeadingProps) {
  return (
    <div
      className={composeClassNames(
        'sticky z-50 -mt-[4px] grid w-full grid-cols-4 bg-white px-4 pb-3 pr-8 md:h-[50px] lg:relative lg:mt-0 lg:flex lg:justify-between lg:px-[22px]',
        {
          'top-[66px]': !isWorkActive && isMobile,
        },
        {
          'top-[180px]': isWorkActive && isMobile,
        }
      )}
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
