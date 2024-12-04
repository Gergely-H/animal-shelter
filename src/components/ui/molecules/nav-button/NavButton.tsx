import Link from 'next/link';

type NavButton = {
  label: string;
  path: string;
};

export const NavButton = ({ label, path }: NavButton) => (
  <Link
    className='m-3 block w-auto rounded-xl bg-gray-200 px-2 py-1'
    href={path}
  >
    {label}
  </Link>
);
