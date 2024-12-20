import { Link } from '@/components/utils/link/Link';

type NavButton = {
  label: string;
  path: string;
  callback: () => void;
};

export const NavButton = ({ label, path, callback }: NavButton) => (
  <Link
    callback={callback}
    className='m-3 block w-auto rounded-xl bg-gray-200 px-2 py-1'
    href={path}
  >
    {label}
  </Link>
);
