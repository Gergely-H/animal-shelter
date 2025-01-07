import { Image } from '@/components/ui/atoms/image/Image';
import { Link } from '@/components/utils/link/Link';
import { logoUrl } from '@/constants/images';

type LogoProps = {
  onClick: () => void;
};

export const Logo = ({ onClick }: LogoProps) => (
  <Link
    callback={onClick}
    className='relative flex h-full w-[105px] justify-center'
    href='/'
  >
    <Image alt='Herosz Budapest Logo' className='pb-1' fill priority src={logoUrl} />
  </Link>
);
