import { Category } from '../../types/types';
import NavigationDesktopOfficeLinks from './NavigationDesktopOfficeLinks';
import NavigationDesktopWorkLinks from './NavigationDesktopWorkLinks';

interface NavigationDesktopProps {
  categories: Category[];
  pathname: string;
}

export default function NavigationDesktop({
  categories,
  pathname,
}: NavigationDesktopProps) {
  return (
    <div
      className={`absolute z-40 hidden w-full grid-cols-3 gap-[15px] pt-[22px] lg:grid ${
        pathname === '/' ? 'bg-none' : 'bg-white'
      }`}
    >
      <NavigationDesktopOfficeLinks pathname={pathname} />
      <NavigationDesktopWorkLinks pathname={pathname} categories={categories} />
    </div>
  );
}
