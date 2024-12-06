'use client';

import { HamburgerButton } from '@/components/ui/molecules/hamburger-button/HamburgerButton';
import { Logo } from '@/components/ui/molecules/logo/Logo';
import { Navbar } from '@/components/ui/organisms/navbar/Navbar';
import { HEADER_FULL_HEIGHT } from '@/constants/dimensions';
import { useHeader } from './useHeader';

export const Header = () => {
  const { isNavbarOpen, toggleNavbar, closeNavbar, isScrolled } = useHeader();

  return (
    <header
      // eslint-disable-next-line tailwindcss/no-custom-classname -- The HEADER_FULL_HEIGHT constant couples the height of Header with the height of top margin of the pages so the Header does not cover any page content.
      className={`
          fixed left-0 top-0 z-20 flex w-full items-center justify-between bg-white px-8
          [transition:height_300ms,border_150ms,box-shadow_150ms]
        ${
          isScrolled
            ? 'h-20 border-b border-neutral-400 shadow-[0_5px_10px_rgba(0,0,0,0.3)]'
            : // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- The HEADER_FULL_HEIGHT constant couples the height of Header with the height of top margin of the pages so the Header does not cover any page content.
              `h-${HEADER_FULL_HEIGHT}`
        }`}
    >
      <Logo />
      <HamburgerButton isNavbarOpen={isNavbarOpen} onClick={toggleNavbar} />
      <Navbar isOpen={isNavbarOpen} onOutsideClick={closeNavbar} />
    </header>
  );
};
