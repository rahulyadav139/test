'use client';

import { CssBaseline } from '@mui/material';

interface MuiProviderProps {
  children: React.ReactNode;
}

export const MuiProvider = ({ children }: MuiProviderProps) => {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};
