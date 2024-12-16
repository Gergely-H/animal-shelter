import { AnimalCard } from '@/components/ui/molecules/animal-card/AnimalCard';
import type { Animal } from '@prisma/client';

type AnimalListProps = {
  animals: Animal[];
};

export const AnimalList = ({ animals }: AnimalListProps) => (
  <div className='flex flex-wrap justify-center gap-7'>
    {animals.map((animal) => (
      <AnimalCard animal={animal} key={animal.id} />
    ))}
  </div>
);
