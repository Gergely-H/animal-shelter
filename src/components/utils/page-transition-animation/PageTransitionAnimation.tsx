import { contentId, pageTransitionAnimation } from '@/styles/constants';
import type { ReactNode } from 'react';

type PageTransitionAnimationProps = {
  children: ReactNode;
};

export const PageTransitionAnimation = ({ children }: PageTransitionAnimationProps) => (
  <div
    className='animate-fade-in'
    id={contentId}
    style={{
      transition: `opacity ${pageTransitionAnimation.fadeDuration.toString()}ms ease-in`,
    }}
  >
    {children}
  </div>
);
