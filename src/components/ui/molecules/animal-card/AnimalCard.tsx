import { Image } from '@/components/ui/atoms/image/Image';
import { Link } from '@/components/utils/link/Link';
import type { Animal } from '@prisma/client';

type AnimalCardProps = {
  animal: Animal;
};

export const AnimalCard = ({ animal }: AnimalCardProps) => {
  const { name, age, sex, profilePicUrl, imageUrls } = animal;

  return (
    <Link
      className='flex h-[450px] w-[330px] flex-col border-2 border-black'
      href={`/kutyak/${animal.id}/${animal.name}`}
    >
      <div className='relative min-h-[80%] w-full basis-4/5'>
        <Image
          alt={name}
          fill
          priority
          src={profilePicUrl ?? '/herosz-budapest-logo.svg'}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='w-full'>
        <p>{name}</p>
        <p>{age}</p>
        <p>{sex}</p>
        <p>{imageUrls}</p>
      </div>
    </Link>
  );
};
