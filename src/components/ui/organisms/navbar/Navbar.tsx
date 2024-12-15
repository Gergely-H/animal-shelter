import { NavButton } from '@/components/ui/molecules/nav-button/NavButton';
import { getDictionary } from '@/languages/dictionaries';

const dictionary = getDictionary();

type NavbarProps = {
  isOpen: boolean;
  onOutsideClick: () => void;
};

export const Navbar = ({ isOpen, onOutsideClick }: NavbarProps) => {
  const navbarEntries = Object.values(dictionary.navbar);

  return (
    <>
      {isOpen && (
        <div
          className='absolute left-0 top-full h-screen w-screen bg-gray-500 opacity-50'
          onClick={onOutsideClick}
        />
      )}
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
