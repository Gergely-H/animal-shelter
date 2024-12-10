import { Image } from '@/components/ui/atoms/image/Image';

const mockDog = {
  name: 'Serrif',
  age: '10',
  sex: 'Goodboy',
};

export const AnimalCard = () => (
  <div className='flex flex-col border-2'>
    <Image
      alt='Herosz Budapest Logo'
      className='pb-1'
      fill
      priority
      src='/herosz-budapest-logo.svg'
    />
    <p>{mockDog.name}</p>
    <p>{mockDog.age}</p>
    <p>{mockDog.sex}</p>
  </div>
);
