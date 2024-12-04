import { Image } from '@/components/ui/atoms/image/Image';
import Link from 'next/link';

export const Logo = () => (
  <Link className='relative flex h-full w-[105px] justify-center' href='/'>
    <Image
      alt='Herosz Budapest Logo'
      className='pb-1'
      fill
      priority
      src='/herosz-budapest-logo.svg'
    />
  </Link>
);
