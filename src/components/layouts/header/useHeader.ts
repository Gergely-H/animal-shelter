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
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
) => {
  const pathname = usePathname();
  const previousPathname = useRef<string>('');

  useEffect(() => {
    const isOpenAndPathChanged =
      isOpen && pathname !== previousPathname.current;

    if (isOpenAndPathChanged) {
      setIsOpen(false);
    }

    previousPathname.current = pathname;
  }, [pathname, isOpen, setIsOpen]);
};

const useCloseNavbarOnEscape = (
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ESCAPE_KEY && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener(KEYDOWN_EVENT, handleKeyDown);

    return () => document.removeEventListener(KEYDOWN_EVENT, handleKeyDown);
  }, [isOpen, setIsOpen]);
};

const useCloseNavbar = (
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
) => {
  useCloseNavbarOnPathChange(isOpen, setIsOpen);
  useCloseNavbarOnEscape(isOpen, setIsOpen);
};

const useDisableScroll = (isOpen: boolean) => {
  const onScroll = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  useEffect(() => {
    const removeEventListeners = () => {
      document.body.removeEventListener(WHEEL_EVENT, onScroll);
      document.body.removeEventListener(TOUCHMOVE_EVENT, onScroll);
    };

    if (isOpen) {
      document.body.addEventListener(
        WHEEL_EVENT,
        onScroll,
        // eslint-disable-next-line @typescript-eslint/naming-convention -- This rule is intended for project code, not for libraries or built in APIs.
        { passive: false },
      );
      document.body.addEventListener(
        TOUCHMOVE_EVENT,
        onScroll,
        // eslint-disable-next-line @typescript-eslint/naming-convention -- This rule is intended for project code, not for libraries or built in APIs.
        { passive: false },
      );
    } else {
      removeEventListeners();
    }

    return removeEventListeners;
  }, [isOpen]);
};

export const useHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = () => setIsScrolled(window.scrollY > TOP_OF_PAGE);

  useEffect(() => {
    onScroll();
    window.addEventListener(SCROLL_EVENT, onScroll);

    return () => window.removeEventListener(SCROLL_EVENT, onScroll);
  }, []);

  useCloseNavbar(isOpen, setIsOpen);

  useDisableScroll(isOpen);

  return {
    isOpen,
    setIsOpen,
    isScrolled,
  };
};
