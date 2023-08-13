import { useEffect } from 'react';

function useHorizontalScroll(ref: any, sensitivity = 40) {
  useEffect(() => {
    const galleryContainer = ref.current;

    if (!galleryContainer) return;

    const handleScroll = (e: any) => {
      // Horizontal scroll
      const delta = sensitivity;
      if (Math.abs(e.deltaY) < delta) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      galleryContainer.scrollLeft += direction * delta;

      // If we're scrolling inside the bounds of the gallery, prevent default
      if (
        galleryContainer.scrollLeft > 0 &&
        galleryContainer.scrollLeft <
          galleryContainer.scrollWidth - galleryContainer.clientWidth
      ) {
        e.preventDefault();
      }
    };

    galleryContainer.addEventListener('wheel', handleScroll, {
      passive: false,
    });

    return () => {
      galleryContainer.removeEventListener('wheel', handleScroll);
    };
  }, [ref, sensitivity]);
}

export default useHorizontalScroll;
