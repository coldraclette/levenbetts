import { usePathname, useRouter } from 'next/navigation';
import { useSwipeable } from 'react-swipeable';

export const useSwipeHook = () => {
  const router = useRouter();
  const pathname = usePathname();

  const officeCategories = [
    { slug: '/office', label: 'office' },
    { slug: '/office/awards', label: 'awards' },
    { slug: '/office/people', label: 'people' },
    { slug: '/office/project-list', label: 'project-list' },
  ];

  const navigateToCategory = (offset: number) => {
    const currentCategoryIndex = officeCategories.findIndex(
      (category) => category.slug === pathname
    );

    const nextCategoryIndex =
      (currentCategoryIndex + offset + officeCategories.length) %
      officeCategories.length;

    router.push(officeCategories[nextCategoryIndex].slug);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      navigateToCategory(1);
    },
    onSwipedRight: () => {
      navigateToCategory(-1);
    },
  });

  return handlers;
};
