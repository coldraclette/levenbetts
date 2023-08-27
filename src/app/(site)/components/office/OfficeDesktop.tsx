'use client';

import { useState } from 'react';

import SmallerImageGallery from '../SmallerImageGallery';
import ThreeColumnsTextDesktop from '../ThreeColumnsTextDesktop';

interface OfficeDesktopProps {
  data: any;
}

export default function OfficeDesktop({ data }: OfficeDesktopProps) {
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
