import { AnimatePresence, motion } from 'framer-motion';

import { getLandingPageData } from '../../../sanity/sanity.query';
import EmblaGallery from './components/EmblaGallery';
import SplashScreen from './components/SplashScreen';
import { OptionsProps } from './types/types';

export const revalidate = 120;

export default async function Page() {
  const data = await getLandingPageData();
  if (!data) return;

  const { projects } = data;

  const options: OptionsProps = {
    setAutoplay: true,
    landingPage: true,
    embla: {
      loop: true,
      inViewThreshold: 0.2,
    },
    autoplay: {
      delay: 8000,
    },
    wheelGestures: {
      wheelDraggingClass: '',
      forceWheelAxis: 'y',
    },
    styling: {
      emblaWrapper: 'absolute top-0 h-full w-full overflow-x-scroll',
      emblaContainer: 'flex h-full',
      emblaSlide: 'relative min-w-0 flex-[0_0_100%] mr-[15px]',
      emblaSlideInner: 'h-full w-full object-cover',
    },
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-screen">
      <EmblaGallery projects={projects} options={options} />
    </div>
  );
}
