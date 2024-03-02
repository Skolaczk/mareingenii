import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { Footer, Header } from '@/components';
import { siteConfig } from '@/lib/constant';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={cn('min-h-screen', fonts)}>
        <Header />
        {children}
        <Footer />
        <div id="navigation" />
      </body>
    </html>
  );
};

export default RootLayout;
