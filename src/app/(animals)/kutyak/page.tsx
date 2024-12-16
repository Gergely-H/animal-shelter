import { AnimalList } from '@/components/ui/organisms/animal-list/AnimalList';
import { prisma } from '@/prisma/prisma';

const getDogs = async () => {
  const dogs = await prisma.dog.findMany({
    select: {
      animal: true,
    },
  });

  const flatDogs = dogs.map((dog) => dog.animal);

  return flatDogs;
};

const Dogs = async () => {
  const dogs = await getDogs();

  return <AnimalList animals={dogs} />;
};

export default Dogs;
