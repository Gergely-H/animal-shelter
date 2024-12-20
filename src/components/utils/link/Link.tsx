'use client';

import { contentId, pageTransitionAnimation } from '@/constants/styles';
import { delayExecution } from '@/utils/timings';
// eslint-disable-next-line consistent-default-export-name/default-import-match-filename, no-restricted-imports -- This rule is intended for project code, not for libraries or built-in APIs. This is the only exception where import of NextLink is allowed.
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import type { ComponentProps, MouseEvent } from 'react';

type NextLinkProps = ComponentProps<typeof NextLink>;

type LinkProps = NextLinkProps & {
  callback?: () => void;
};

export const Link = ({ callback, href, children, ...props }: LinkProps) => {
  const router = useRouter();

  const handleTransition = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (callback) {
      callback();
    }

    const content = document.querySelector(`#${contentId}`);
    const pageTransitionAnimationClassName = 'opacity-0';

    content?.classList.add(pageTransitionAnimationClassName);
    await delayExecution(pageTransitionAnimation.duration);

    router.push(typeof href === 'string' ? href : (href.href ?? '/'));

    await delayExecution(pageTransitionAnimation.delay);
    content?.classList.remove(pageTransitionAnimationClassName);
  };

  return (
    <NextLink href={href} onClick={handleTransition} {...props}>
      {children}
    </NextLink>
  );
};
