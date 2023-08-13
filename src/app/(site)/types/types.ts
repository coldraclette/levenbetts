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
