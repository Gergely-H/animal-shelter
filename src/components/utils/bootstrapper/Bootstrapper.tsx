import '@/styles/globals.css';
import { theme } from '@/styles/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import type { ReactNode } from 'react';

type BootstrapperProps = {
  children: ReactNode;
};

export const Bootstrapper = ({ children }: BootstrapperProps) => (
  <AppRouterCacheProvider options={{ enableCssLayer: true }}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </AppRouterCacheProvider>
);
