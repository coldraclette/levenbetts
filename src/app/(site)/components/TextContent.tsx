import { PortableText, PortableTextComponents } from '@portabletext/react';

import { TextProps } from '../types/types';

interface TextContentProps {
  text: TextProps[];
}

export default function TextContent({ text }: TextContentProps) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => <p className="mb-4 md:mb-5">{children}</p>,
    },
  };

  return (
    <div className="md:h-full">
      <PortableText value={text} components={components} />
    </div>
  );
}
