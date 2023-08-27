'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import SmallerImageGallery from '../SmallerImageGallery';
import TextContent from '../TextContent';
import ThreeColumnsTextDesktop from '../ThreeColumnsTextDesktop';

interface PeopleDesktopProps {
  data: any;
}

export default function PeopleDesktop({ data }: PeopleDesktopProps) {
  const [imagesActive, setImagesActive] = useState<boolean>(false);

  const onImagesClick = () => setImagesActive(!imagesActive);

  return (
    <div className="hidden lg:block">
      <ThreeColumnsTextDesktop data={data} imagesActive={imagesActive} />
      <SmallerImageGallery
        images={data.images}
        onClickEvent={() => onImagesClick()}
      />
    </div>
  );
}
