import { NavButton } from '@/components/ui/atoms/nav-button/NavButton';
import { getDictionary } from '@/languages/dictionary';

const dictionary = getDictionary();

type NavbarProps = {
  isOpen: boolean;
  closeNavbar: () => void;
};

export const Navbar = ({ isOpen, closeNavbar }: NavbarProps) => {
  const navbarEntries = Object.values(dictionary.navbar);

  return (
    <nav
      className={`
          absolute top-full h-screen w-1/2 bg-white [transition:right_300ms]
          md:w-1/3
          lg:w-1/4
          ${isOpen ? 'right-0' : '-right-1/2 md:-right-1/3 lg:-right-1/4'}
        `}
    >
      {navbarEntries.map(({ path, label }) => (
        <NavButton callback={closeNavbar} key={path} label={label} path={path} />
      ))}
    </nav>
  );
};
