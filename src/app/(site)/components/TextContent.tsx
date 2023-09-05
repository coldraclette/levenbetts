import Link from 'next/link';
import { PortableText, PortableTextComponents } from '@portabletext/react';

import { TextProps } from '../types/types';

interface TextContentProps {
  text: TextProps[];
}

export default function TextContent({ text }: TextContentProps) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => (
        <p className="text-content-p mb-4 min-h-[1px] last-of-type:mb-0 2xl:mb-5">
          {children}
        </p>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith('/')
          ? 'noreferrer noopener'
          : undefined;
        const target = !value.href.startsWith('/') ? '_blank' : undefined;
        return (
          <Link
            className="underline"
            href={value.href}
            target={target}
            rel={rel}
          >
            {children}
          </Link>
        );
      },
    },
  };

  return (
    <div className="md:h-full">
      <PortableText value={text} components={components} />
    </div>
  );
}
