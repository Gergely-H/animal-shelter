import { NavButton } from '@/components/ui/molecules/nav-button/NavButton';
import { getDictionary } from '@/languages/dictionaries';
import { useEffect, useRef } from 'react';

const dictionary = getDictionary();

type NavbarProps = {
  isOpen: boolean;
  onOutsideClick: () => void;
};

export const Navbar = ({ isOpen, onOutsideClick }: NavbarProps) => {
  const navbarBackdrop = useRef<HTMLDivElement>(null);
  const navbarEntries = Object.values(dictionary.navbar);

  useEffect(() => {
    navbarBackdrop.current?.classList.add('!size-0');
  }, []);

  return (
    <>
      <div
        className={`
            absolute left-0 top-full h-screen w-screen bg-gray-500 [transition:opacity_300ms]
            ${isOpen ? 'opacity-50' : 'opacity-0'}
          `}
        onClick={onOutsideClick}
        onTransitionEnd={() => {
          if (!isOpen) {
            navbarBackdrop.current?.classList.toggle('!size-0');
          }
        }}
        ref={navbarBackdrop}
      />
      <nav
        className={`
          absolute top-full h-screen w-1/2 bg-white [transition:right_300ms]
          md:w-1/3
          lg:w-1/4
          ${isOpen ? 'right-0' : '-right-1/2 md:-right-1/3 lg:-right-1/4'}
        `}
      >
        {navbarEntries.map(({ path, label }) => (
          <NavButton key={path} label={label} path={path} />
        ))}
      </nav>
    </>
  );
};
