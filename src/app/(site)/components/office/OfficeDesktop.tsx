'use client';

import { useState } from 'react';

import SmallerImageGallery from '../SmallerImageGallery';
import ThreeColumnsTextDesktop from '../ThreeColumnsTextDesktop';

interface OfficeDesktopProps {
  data: any;
}

export default function OfficeDesktop({ data }: OfficeDesktopProps) {
  return (
    <div className="hidden lg:block">
      <ThreeColumnsTextDesktop data={data} />
      <SmallerImageGallery images={data.images} />
    </div>
  );
}
