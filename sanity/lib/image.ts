import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

import { dataset, projectId } from '../env';

export const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (source: Image, width?: number) => {
  if (width) {
    return imageBuilder
      ?.image(source)
      .auto('format')
      .fit('max')
      .width(width)
      .url();
  }

  return imageBuilder?.image(source).auto('format').fit('max').url();
};
