import SmallerImageGallery from '../SmallerImageGallery';
import ThreeColumnsTextDesktop from '../ThreeColumnsTextDesktop';

interface PeopleDesktopProps {
  data: any;
}

export default function PeopleDesktop({ data }: PeopleDesktopProps) {
  return (
    <div className="hidden lg:block">
      <ThreeColumnsTextDesktop data={data} />
      <SmallerImageGallery images={data.images} />
    </div>
  );
}
