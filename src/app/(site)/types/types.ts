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

export interface Project {
  _id: string;
  slug: { current: string };
  landingPageImage?: any;
  landingPageMobileImage?: any;
  title?: string;
  subtitle?: string;
  projectImage: any;
  category: any;
}

export type Category = {
  _id: string;
  title: string;
};
