import { getLandingPageData } from '../../../sanity/sanity.query';
import EmblaGallery from './components/EmblaGallery';
import { OptionsProps } from './types/types';

export const revalidate = 60;

export default async function Page() {
  const data = await getLandingPageData();
  if (!data) return;

  const { projects } = data;

  const options: OptionsProps = {
    setAutoplay: true,
    embla: {
      loop: true,
      inViewThreshold: 0.2,
    },
    autoplay: {
      delay: 4000,
    },
    wheelGestures: {
      wheelDraggingClass: '',
      forceWheelAxis: 'y',
    },
    styling: {
      emblaWrapper: 'absolute top-0 h-full w-full overflow-hidden',
      emblaContainer: 'flex h-full gap-[15px]',
      emblaSlide: 'relative min-w-0 flex-[0_0_100%]',
      emblaSlideInner: 'h-full w-full object-cover',
    },
  };

  return <EmblaGallery projects={projects} options={options} />;
}
