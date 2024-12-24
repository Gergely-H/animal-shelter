import { contentId, pageTransitionAnimation } from '@/constants/styles';
import { delayExecution } from '@/utils/timings';

export const transitionPageWithAnimation = async (changeRoute: () => void) => {
  const content = document.querySelector(`#${contentId}`);
  const pageTransitionAnimationClassName = 'opacity-0';

  content?.classList.add(pageTransitionAnimationClassName);
  await delayExecution(pageTransitionAnimation.fadeDuration);

  changeRoute();

  await delayExecution(pageTransitionAnimation.fadeInDelayDuration);
  content?.classList.remove(pageTransitionAnimationClassName);
};
