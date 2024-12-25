'use client';

import { WEB_EVENTS } from '@/constants/webEvents';
import { useNativeNavigationWithAnimation } from '@/utils/pageTransitions';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const ESCAPE_KEY = 'Escape';
const TOP_OF_PAGE = 0;

const useCloseNavbarOnPathChange = (
  isNavbarOpen: boolean,
  setIsNavbarOpen: (isNavbarOpen: boolean) => void,
) => {
  const pathname = usePathname();
  const previousPathname = useRef<string>('');

  useEffect(() => {
    const isNavbarOpenAndPathChanged =
      isNavbarOpen && pathname !== previousPathname.current;

    if (isNavbarOpenAndPathChanged) {
      setIsNavbarOpen(false);
    }

    previousPathname.current = pathname;
  }, [pathname, isNavbarOpen, setIsNavbarOpen]);
};

const useCloseNavbarOnEscape = (
  isNavbarOpen: boolean,
  setIsNavbarOpen: (isNavbarOpen: boolean) => void,
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ESCAPE_KEY && isNavbarOpen) {
        setIsNavbarOpen(false);
      }
    };

    document.addEventListener(WEB_EVENTS.Keydown, handleKeyDown);

    return () => document.removeEventListener(WEB_EVENTS.Keydown, handleKeyDown);
  }, [isNavbarOpen, setIsNavbarOpen]);
};

const useCloseNavbar = (
  isNavbarOpen: boolean,
  setIsNavbarOpen: (isNavbarOpen: boolean) => void,
) => {
  useCloseNavbarOnPathChange(isNavbarOpen, setIsNavbarOpen);
  useCloseNavbarOnEscape(isNavbarOpen, setIsNavbarOpen);
};

const useDisableScroll = (isNavbarOpen: boolean) => {
  const onScroll = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  useEffect(() => {
    const removeEventListeners = () => {
      document.body.removeEventListener(WEB_EVENTS.Wheel, onScroll);
      document.body.removeEventListener(WEB_EVENTS.Touchmove, onScroll);
    };

    if (isNavbarOpen) {
      document.body.addEventListener(WEB_EVENTS.Wheel, onScroll, { passive: false });
      document.body.addEventListener(WEB_EVENTS.Touchmove, onScroll, {
        passive: false,
      });
    } else {
      removeEventListeners();
    }

    return removeEventListeners;
  }, [isNavbarOpen]);
};

const useIsScrolled = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = () => setIsScrolled(window.scrollY > TOP_OF_PAGE);

  useEffect(() => {
    onScroll();
    window.addEventListener(WEB_EVENTS.Scroll, onScroll);

    return () => window.removeEventListener(WEB_EVENTS.Scroll, onScroll);
  }, []);

  return { isScrolled };
};

export const useHeader = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => setIsNavbarOpen((isNavbarOpen) => !isNavbarOpen);
  const closeNavbar = () => setIsNavbarOpen(false);

  useCloseNavbar(isNavbarOpen, setIsNavbarOpen);

  useDisableScroll(isNavbarOpen);

  const { isScrolled } = useIsScrolled();

  useNativeNavigationWithAnimation();

  return {
    isNavbarOpen,
    toggleNavbar,
    closeNavbar,
    isScrolled,
  };
};
