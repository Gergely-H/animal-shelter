/*
 * const createDog = async () => {
 * try {
 *  const dog = await prisma.dog.create({
 *    data: {
 *      animal: {
 *        create: {
 *          name: 'Fido',
 *          age: 3,
 *          description: "Hello Fido. I'm a dog.",
 *          sex: 'male',
 *        },
 *      },
 *    },
 *  });
 * } catch (error) {
 *  console.error(error);
 * }
 * };
 *
 * await createDog();
 */

'use client';

import { AnimalList } from '@/components/ui/organisms/animal-list/AnimalList';

/*
 * import type { PutBlobResult } from '@vercel/blob';
 * import { useRef, useState } from 'react';
 */

/*
 * const inputFileRef = useRef<HTMLInputElement>(null);
 * const [blob, setBlob] = useState<PutBlobResult | null>(null);
 */

const Kutyak = () => (
  <>
    <AnimalList />

    {/* <h1>Upload Your Avatar</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          if (!inputFileRef.current?.files) {
            throw new Error('No file selected');
          }

          const file = inputFileRef.current.files[0];

          const newBlob = await upload(`animals/dogs/${file.name}`, file, {
            access: 'public',
            handleUploadUrl: '/api/dogs/upload',
            onUploadProgress: (event) => {
              console.log(event.percentage);
            },
          });

          setBlob(newBlob);
        }}
      >
        <input name='file' ref={inputFileRef} required type='file' />
        <button type='submit'>Upload</button>
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )} */}
  </>
);

export default Kutyak;
