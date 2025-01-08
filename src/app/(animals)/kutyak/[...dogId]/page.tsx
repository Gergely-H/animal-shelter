import { Image } from '@/components/ui/atoms/image/Image';
import { animalImageFallbackUrl } from '@/constants/images';
import { prisma } from '@/db/prisma/prisma';
import type { Animal } from '@prisma/client';

const fallbackDog: Animal = {
  id: 'totallyOriginalId',
  name: 'Sheriff',
  age: 10,
  description: "Hello, I'm Sheriff. I'm a dog.",
  sex: 'goodboy',
  imageUrls: [],
  profilePicUrl: null,
};

const getDogById = async (id: string) => {
  const { animal: dog } =
    (await prisma.dog.findUnique({
      where: {
        id,
      },
      select: {
        animal: true,
      },
    })) ?? {};

  return dog ?? fallbackDog;
};

type DogDetailsProps = {
  params: Promise<{ dogId: string[] }>;
};

const DogDetails = async ({ params }: DogDetailsProps) => {
  const {
    dogId: [id],
  } = await params;

  const dog = await getDogById(id);

  return (
    <div className='flex flex-col'>
      <div
        className={`
          flex flex-col flex-wrap
          md:flex-row
        `}
      >
        <div
          className={`
            relative h-[450px] w-full
            md:w-1/2
          `}
        >
          <Image
            alt='doggo'
            fill
            priority
            src={dog.profilePicUrl ?? animalImageFallbackUrl}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div>
          <p>{dog.id}</p>
          <p>{dog.age}</p>
          <p>{dog.sex}</p>
          <p>{dog.imageUrls}</p>
        </div>
      </div>
      <div>
        <p>{dog.description}</p>
      </div>
    </div>
  );
};

export default DogDetails;
