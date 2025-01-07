import type { Animal } from '@prisma/client';

export type ExtendedAnimal = Animal & {
  profileUrl: string;
};
