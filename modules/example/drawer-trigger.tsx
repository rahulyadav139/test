'use client';

import { useState } from 'react';
import { DrawerComponent } from './components/drawer';
import { Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

export const DrawerTrigger: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleButtonClick = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleButtonClick}
        startIcon={<MenuIcon />}
        sx={{
          background: '#fff',
          color: '#000',
          px: 4,
          py: 1.5,
          borderRadius: 3,
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            background: '#eee',
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
          },
          '&:active': {
            transform: 'translateY(0px)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          },
        }}
        aria-label="Open navigation menu"
        aria-haspopup="true"
        aria-expanded={drawerOpen}
      >
        Open Menu
      </Button>

      <DrawerComponent open={drawerOpen} onClose={handleDrawerClose} />
    </>
  );
};
