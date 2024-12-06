import { Header } from '@/components/layouts/header/Header';
import { Bootstrapper } from '@/components/utils/bootstrapper/Bootstrapper';
import { HEADER_FULL_HEIGHT } from '@/constants/dimensions';
import { getDictionary } from '@/languages/dictionaries';
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
        className={`${geistSans.variable} ${geistMono.variable} overflow-y-scroll antialiased`}
      >
        <Header />
        {/* eslint-disable-next-line tailwindcss/no-custom-classname, @typescript-eslint/restrict-template-expressions -- The HEADER_FULL_HEIGHT constant couples the height of Header with the height of top margin of the pages so the Header does not cover any page content. */}
        <div className={`mt-${HEADER_FULL_HEIGHT}`}>{children}</div>
      </body>
    </Bootstrapper>
  </html>
);

export default RootLayout;
