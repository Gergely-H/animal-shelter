import { Header } from '@/components/layouts/header/Header';
import { Bootstrapper } from '@/components/utils/bootstrapper/Bootstrapper';
import { contentId, pageTransitionAnimation } from '@/constants/styles';
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
        className={`${geistSans.variable} ${geistMono.variable} page-padding-top overflow-y-scroll antialiased`}
      >
        <Header />
        <div
          id={contentId}
          style={{
            transition: `opacity ${pageTransitionAnimation.duration.toString()}ms ease-in`,
          }}
        >
          {children}
        </div>
      </body>
    </Bootstrapper>
  </html>
);

export default RootLayout;
