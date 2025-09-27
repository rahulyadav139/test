'use client';

import { useState } from 'react';
import { DrawerComponent } from './components/drawer';
import { Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

export const DrawerTrigger: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleButtonClick}
        startIcon={<MenuIcon />}
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          px: 4,
          py: 1.5,
          borderRadius: 3,
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 40px rgba(102, 126, 234, 0.4)',
          },
          '&:active': {
            transform: 'translateY(0px)',
            boxShadow: '0 4px 16px rgba(102, 126, 234, 0.3)',
          },
        }}
        aria-label="Open navigation menu"
        aria-haspopup="true"
        aria-expanded={drawerOpen}
      >
        Open Menu
      </Button>

      <DrawerComponent
        open={drawerOpen}
        onClose={handleDrawerClose}
        anchorEl={anchorEl}
      />
    </>
  );
};
