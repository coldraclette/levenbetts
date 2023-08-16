import Link from 'next/link';

import ArrowLeft from '../../../../../public/icons/Arrow-left.svg';
import ArrowRight from '../../../../../public/icons/Arrow-right.svg';

interface ProjectNavigationProps {
  prev: ProjectNavigationItemProps;
  next: ProjectNavigationItemProps;
  category: string;
  onDetailsClick: () => void;
  detailsOpen: boolean;
}

interface ProjectNavigationItemProps {
  _id: string;
  slug: {
    current: string;
    _type: string;
  };
  title: string;
}

export default function ProjectNavigation({
  prev,
  next,
  category,
  detailsOpen,
  onDetailsClick,
}: ProjectNavigationProps) {
  return (
    <div className="flex items-center gap-10 self-start">
      <p
        className="hidden cursor-pointer md:block"
        onClick={() => onDetailsClick()}
      >
        {detailsOpen ? 'close' : 'project details'}
      </p>
      <div className="flex gap-5">
        <Link href={`/work/${category}/${prev.slug.current}`}>
          <ArrowLeft />
        </Link>
        <Link href={`/work/${category}/${next.slug.current}`}>
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
