import { Bootstrapper } from '@/components/utils/bootstrapper/Bootstrapper';
import { getDictionary } from '@/lang/dictionaries';
import type { Metadata } from 'next';
import local from 'next/font/local';
import type { ReactNode } from 'react';

const geistSans = local({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = local({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const dictionary = getDictionary();

export const metadata: Metadata = {
  title: {
    default: dictionary.metadata.title.default,
    template: dictionary.metadata.title.template,
  },
  description: dictionary.metadata.description,
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang='hu'>
    <Bootstrapper>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </Bootstrapper>
  </html>
);

export default RootLayout;
