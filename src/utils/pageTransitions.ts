import { contentId, pageTransitionAnimation } from '@/constants/styles';
import { WEB_EVENTS } from '@/constants/webEvents';
import { delayExecution } from '@/utils/timings';
import { useEffect } from 'react';

const getPageContentElement = () => {
  if (typeof document === 'undefined') {
    return null;
  }

  return document.querySelector(`#${contentId}`);
};

export const transitionPageWithAnimation = async (changeRoute: () => void) => {
  const contentElement = getPageContentElement();

  if (contentElement) {
    contentElement.classList.add(pageTransitionAnimation.animationClassName);
    await delayExecution(pageTransitionAnimation.fadeDuration);

    changeRoute();

    await delayExecution(pageTransitionAnimation.fadeInDelayDuration);
    contentElement.classList.remove(pageTransitionAnimation.animationClassName);
  }
};

export const useNativeNavigationWithAnimation = () => {
  useEffect(() => {
    const handleNativeNavigation = async () => {
      const contentElement = getPageContentElement();

      if (contentElement) {
        const resetTransitionClassName = '!transition-none';

        contentElement.classList.add(resetTransitionClassName);
        contentElement.classList.add(pageTransitionAnimation.animationClassName);

        await delayExecution(pageTransitionAnimation.fadeInDelayDuration);

        contentElement.classList.remove(resetTransitionClassName);
        contentElement.classList.remove(pageTransitionAnimation.animationClassName);
      }
    };

    window.addEventListener(WEB_EVENTS.PopState, handleNativeNavigation);

    return () => window.removeEventListener(WEB_EVENTS.PopState, handleNativeNavigation);
  }, []);
};
