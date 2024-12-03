import '@/styles/globals.css';
import type { ReactNode } from 'react';

type BootstrapperProps = {
  children: ReactNode;
};

export const Bootstrapper = ({ children }: BootstrapperProps) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment -- Remove this comment after adding wrappers to the app.
  <>{children}</>
);
