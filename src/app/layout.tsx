import { Footer } from '@/components/layouts/footer/Footer';
import { Header } from '@/components/layouts/header/Header';
import { Bootstrapper } from '@/components/utils/bootstrapper/Bootstrapper';
import { PageTransitionAnimation } from '@/components/utils/page-transition-animation/PageTransitionAnimation';
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
        className={`${geistSans.variable} ${geistMono.variable} overflow-y-scroll pt-[calc(var(--extended-header-height)+1rem)] antialiased`}
      >
        <Header />
        <PageTransitionAnimation>{children}</PageTransitionAnimation>
        <Footer />
      </body>
    </Bootstrapper>
  </html>
);

export default RootLayout;
