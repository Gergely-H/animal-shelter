// eslint-disable-next-line consistent-default-export-name/default-import-match-filename, no-restricted-imports -- This rule is intended for project code, not for libraries or built-in APIs. This is the only exception where import of NextImage is allowed.
import NextImage from 'next/image';
import type { ComponentProps } from 'react';

type ImageProps = ComponentProps<typeof NextImage>;

export const Image = (props: ImageProps) => (
  <NextImage draggable={false} {...props} />
);
