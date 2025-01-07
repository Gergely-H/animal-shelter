import { AnimalList } from '@/components/ui/organisms/animal-list/AnimalList';
import { paths } from '@/constants/paths';
import { prisma } from '@/prisma/prisma';
import type { ExtendedAnimal } from '@/types/animals';

const getDogs = async () => {
  const dogs = await prisma.dog.findMany({
    select: {
      animal: true,
    },
  });

  const flatDogs = dogs.map<ExtendedAnimal>(({ animal: dog }) => ({
    ...dog,
    profileUrl: `${paths.dogs}/${dog.id}/${dog.name}`,
  }));

  return flatDogs;
};

const Dogs = async () => {
  const dogs = await getDogs();

  return <AnimalList animals={dogs} />;
};

export default Dogs;
