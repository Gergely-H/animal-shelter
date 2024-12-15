import { AnimalCard } from '@/components/ui/molecules/animal-card/AnimalCard';

const animals = [
  {
    name: 'Sherrif',
    age: '10',
    sex: 'Goodboy',
    id: '1',
    imgUrl: '/herosz-budapest-logo.svg',
  },
  {
    name: 'Sherrif',
    age: '10',
    sex: 'Goodboy',
    id: '2',
    imgUrl: '/herosz-budapest-logo.svg',
  },
  {
    name: 'Sherrif',
    age: '10',
    sex: 'Goodboy',
    id: '3',
    imgUrl: '/herosz-budapest-logo.svg',
  },
  {
    name: 'Sherrif',
    age: '10',
    sex: 'Goodboy',
    id: '4',
    imgUrl: '/herosz-budapest-logo.svg',
  },
  {
    name: 'Sherrif',
    age: '10',
    sex: 'Goodboy',
    id: '5',
    imgUrl: '/herosz-budapest-logo.svg',
  },
  {
    name: 'Sherrif',
    age: '10',
    sex: 'Goodboy',
    id: '6',
    imgUrl: '/herosz-budapest-logo.svg',
  },
  {
    name: 'Sherrif',
    age: '10',
    sex: 'Goodboy',
    id: '7',
    imgUrl: '/herosz-budapest-logo.svg',
  },
  {
    name: 'Sherrif',
    age: '10',
    sex: 'Goodboy',
    id: '8',
    imgUrl: '/herosz-budapest-logo.svg',
  },
  {
    name: 'Sherrif',
    age: '10',
    sex: 'Goodboy',
    id: '9',
    imgUrl: '/herosz-budapest-logo.svg',
  },
  {
    name: 'Sherrif',
    age: '10',
    sex: 'Goodboy',
    id: '10',
    imgUrl: '/herosz-budapest-logo.svg',
  },
  {
    name: 'Sherrif',
    age: '10',
    sex: 'Goodboy',
    id: '11',
    imgUrl: '/herosz-budapest-logo.svg',
  },
  {
    name: 'Sherrif',
    age: '10',
    sex: 'Goodboy',
    id: '12',
    imgUrl: '/herosz-budapest-logo.svg',
  },
  {
    name: 'Sherrif',
    age: '10',
    sex: 'Goodboy',
    id: '13',
    imgUrl: '/herosz-budapest-logo.svg',
  },
  {
    name: 'Sherrif',
    age: '10',
    sex: 'Goodboy',
    id: '14',
    imgUrl: '/herosz-budapest-logo.svg',
  },
];

export const AnimalList = () => (
  <div className='flex flex-wrap justify-center gap-7'>
    {animals.map((animal) => (
      <AnimalCard animal={animal} key={animal.id} />
    ))}
  </div>
);
