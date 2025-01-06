import type { ChangeEvent, RefObject } from 'react';

const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
];

type HiddenImageInputProps = {
  onImageSelect: (event: ChangeEvent<HTMLInputElement>) => void;
  hiddenInputRef: RefObject<HTMLInputElement>;
};

export const HiddenImageInput = ({
  onImageSelect,
  hiddenInputRef,
}: HiddenImageInputProps) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (ACCEPTED_IMAGE_TYPES.includes(file?.type ?? '')) {
      onImageSelect(event);
    } else {
      // eslint-disable-next-line no-alert -- Temporary error handling until a proper notification is made.
      window.alert(
        'Only .jpg, .jpeg, .png, .webp, .heic and .heif formats are supported.',
      );
    }
  };

  return (
    <input
      accept={ACCEPTED_IMAGE_TYPES.join(', ')}
      className='hidden'
      onChange={onChange}
      ref={hiddenInputRef}
      type='file'
    />
  );
};
