import { Image } from '@/components/ui/atoms/image/Image';

type AnimalCardProps = {
  animal: {
    name: string;
    age: string;
    sex: string;
    id: string;
    imgUrl: string;
  };
};

export const AnimalCard = ({ animal }: AnimalCardProps) => {
  const { name, age, sex, imgUrl } = animal;

  return (
    <div
      className={`
        flex h-[450px] w-3/4 flex-col border-2 border-black
        md:w-2/5
        lg:w-1/4
        xl:w-1/5
        2xl:w-1/6
      `}
    >
      <div className='relative basis-4/5'>
        <Image
          alt={name}
          fill
          priority
          src={imgUrl}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{sex}</p>
      </div>
    </div>
  );
};
