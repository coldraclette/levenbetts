import SmallerImageGallery from '../SmallerImageGallery';
import OfficeDesktopText from './OfficeDesktopText';

interface OfficeDesktopProps {
  data: any;
}

export default function OfficeDesktop({ data }: OfficeDesktopProps) {
  return (
    <div className="hidden md:block">
      <OfficeDesktopText data={data} />
      <SmallerImageGallery images={data.images} />
    </div>
  );
}
