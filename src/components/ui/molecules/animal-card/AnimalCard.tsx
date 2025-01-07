import { Image } from '@/components/ui/atoms/image/Image';
import { Link } from '@/components/utils/link/Link';
import { animalImageFallbackUrl } from '@/constants/images';
import type { ExtendedAnimal } from '@/types/animals';

type AnimalCardProps = {
  animal: ExtendedAnimal;
};

export const AnimalCard = ({ animal }: AnimalCardProps) => {
  const { name, age, sex, profilePicUrl, imageUrls, profileUrl } = animal;

  return (
    <Link
      className='flex h-[450px] w-[330px] flex-col border-2 border-black'
      href={profileUrl}
    >
      <div className='relative min-h-[80%] w-full basis-4/5'>
        <Image
          alt={name}
          fill
          priority
          src={profilePicUrl ?? animalImageFallbackUrl}
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
