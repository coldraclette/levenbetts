import type { Image } from 'sanity';

export interface TextProps {
  style: string;
  _key: string;
  markDefs: any[];
  children: any[];
  _type: string;
}

export interface ProjectNavigationItemProps {
  _id: string;
  slug: {
    current: string;
    _type: string;
  };
  title: string;
}

export interface OptionsProps {
  setAutoplay: boolean;
  landingPage: boolean;
  embla: {
    loop: boolean;
    inViewThreshold?: number;
  };
  autoplay: {
    delay: number;
  };
  wheelGestures: {
    wheelDraggingClass: string;
    forceWheelAxis: 'x' | 'y';
  };
  styling: {
    emblaWrapper: string;
    emblaContainer: string;
    emblaSlide: string;
    emblaSlideInner: string;
  };
}

export interface ProjectProps {
  _id: string;
  slug: {
    current: string;
    _type: string;
  };
  title: string;
  subtitle: string;
  category: {
    title: string;
  };
  text: TextProps[];
  specs: TextProps[];
  images: Image[];
}
