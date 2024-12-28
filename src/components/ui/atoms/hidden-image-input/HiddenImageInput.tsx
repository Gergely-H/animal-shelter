import { zodResolver } from '@hookform/resolvers/zod';
import type { ChangeEvent } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  image: z.any().optional(),
});

type Schema = z.infer<typeof schema>;

type HiddenImageInputProps = {
  onUpload: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const HiddenImageInput = ({ onUpload }: HiddenImageInputProps) => {
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const { register } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  return (
    <input
      className='hidden'
      type='file'
      {...register('image', {
        onChange: onUpload,
      })}
      ref={hiddenInputRef}
    />
  );
};
