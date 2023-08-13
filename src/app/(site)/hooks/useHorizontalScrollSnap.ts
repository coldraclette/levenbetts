import { useEffect } from 'react';

function useHorizontalScrollSnap(ref: any, sensitivity = 80) {
  useEffect(() => {
    const galleryContainer = ref.current;

    if (!galleryContainer) return;

    const handleScroll = (e: any) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;

      // Width of the first child element, assuming all child elements have the same width.
      // If not, you'll have to get the width dynamically based on the current scrolled position.
      const childWidth = galleryContainer.firstChild?.clientWidth || 0;

      // Calculate the next position based on direction.
      const nextPosition = galleryContainer.scrollLeft + childWidth * direction;

      // Scroll smoothly to the next element.
      galleryContainer.scrollTo({
        top: 0,
        left: nextPosition,
        behavior: 'smooth',
      });
    };

    galleryContainer.addEventListener('wheel', handleScroll, {
      passive: false,
    });

    return () => {
      galleryContainer.removeEventListener('wheel', handleScroll);
    };
  }, [ref, sensitivity]);
}

export default useHorizontalScrollSnap;
