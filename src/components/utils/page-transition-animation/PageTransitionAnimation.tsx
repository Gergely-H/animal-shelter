import { contentId, pageTransitionAnimation } from '@/constants/styles';
import type { ReactNode } from 'react';

type PageTransitionAnimationProps = {
  children: ReactNode;
};

export const PageTransitionAnimation = ({ children }: PageTransitionAnimationProps) => (
  <div
    className='fade-in'
    id={contentId}
    style={{
      transition: `opacity ${pageTransitionAnimation.fadeDuration.toString()}ms ease-in`,
    }}
  >
    {children}
  </div>
);
