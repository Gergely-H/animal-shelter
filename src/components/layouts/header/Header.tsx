'use client';

import { HamburgerButton } from '@/components/ui/molecules/hamburger-button/HamburgerButton';
import { Logo } from '@/components/ui/molecules/logo/Logo';
import { Navbar } from '@/components/ui/organisms/navbar/Navbar';
import { useHeader } from './useHeader';

export const Header = () => {
  const { isOpen, setIsOpen, isScrolled } = useHeader();

  return (
    <header
      className={`
          fixed left-0 top-0 z-20 flex w-full items-center justify-between bg-white px-8
          [transition:height_300ms,border_150ms,box-shadow_150ms]
        ${
          isScrolled
            ? 'h-20 border-b border-neutral-400 shadow-[0_5px_10px_rgba(0,0,0,0.3)]'
            : 'h-40'
        }`}
    >
      <Logo />
      <HamburgerButton
        isOpen={isOpen}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      />
      <Navbar isOpen={isOpen} onOutsideClick={() => setIsOpen(false)} />
    </header>
  );
};
