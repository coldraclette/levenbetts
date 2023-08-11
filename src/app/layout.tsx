import './globals.css';

import Theinhardt from 'next/font/local';

import { siteConfig } from './site.config';

const theinhardt = Theinhardt({
  variable: '--font-sans',
  display: 'swap',
  src: [
    {
      path: '/fonts/Theinhardt/Theinhardt-Medium.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/Theinhardt/Theinhardt-Medium-Italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
});

export async function generateMetadata() {
  return {
    title: {
      default: siteConfig.title,
    },
    description: siteConfig.description,
    openGraph: {
      type: 'website',
      url: siteConfig.siteUrl,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.siteUrlShort,
      images: [
        {
          // url: urlForImage(seoImage),
          width: 1200,
          height: 630,
          alt: siteConfig.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={theinhardt.variable}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
