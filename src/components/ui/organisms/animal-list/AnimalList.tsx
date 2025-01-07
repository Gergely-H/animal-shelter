import { AnimalCard } from '@/components/ui/molecules/animal-card/AnimalCard';
import type { ExtendedAnimal } from '@/types/animals';

type AnimalListProps = {
  animals: ExtendedAnimal[];
};

export const AnimalList = ({ animals }: AnimalListProps) => (
  <div className='flex flex-wrap justify-center gap-7'>
    {animals.map((animal) => (
      <AnimalCard animal={animal} key={animal.id} />
    ))}
  </div>
);
