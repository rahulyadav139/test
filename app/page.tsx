'use client';
import { DrawerTrigger } from '@/modules/example/drawer-trigger';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        padding: 2,
      }}
    >
      <DrawerTrigger />
    </Box>
  );
}
