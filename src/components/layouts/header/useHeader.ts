'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const ESCAPE_KEY = 'Escape';
const TOP_OF_PAGE = 0;
const KEYDOWN_EVENT = 'keydown';
const SCROLL_EVENT = 'scroll';
const WHEEL_EVENT = 'wheel';
const TOUCHMOVE_EVENT = 'touchmove';

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

    document.addEventListener(KEYDOWN_EVENT, handleKeyDown);

    return () => document.removeEventListener(KEYDOWN_EVENT, handleKeyDown);
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
      document.body.removeEventListener(WHEEL_EVENT, onScroll);
      document.body.removeEventListener(TOUCHMOVE_EVENT, onScroll);
    };

    if (isNavbarOpen) {
      document.body.addEventListener(WHEEL_EVENT, onScroll, { passive: false });
      document.body.addEventListener(TOUCHMOVE_EVENT, onScroll, {
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
    window.addEventListener(SCROLL_EVENT, onScroll);

    return () => window.removeEventListener(SCROLL_EVENT, onScroll);
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

  return {
    isNavbarOpen,
    toggleNavbar,
    closeNavbar,
    isScrolled,
  };
};
