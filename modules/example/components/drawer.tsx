import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import type { MenuItem } from './menu-items';
import { menuItems } from './menu-items';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

interface DrawerComponentProps {
  open: boolean;
  onClose: () => void;
  anchorEl?: HTMLElement | null;
}

export const DrawerComponent = ({
  open,
  onClose,
  anchorEl,
}: DrawerComponentProps) => {
  const [currentLevel, setCurrentLevel] = useState<MenuItem[]>(menuItems);
  const [navigationStack, setNavigationStack] = useState<MenuItem[][]>([]);
  const [currentParent, setCurrentParent] = useState<string>('Menu');

  const handleItemClick = (item: MenuItem) => {
    if (item.subItems && item.subItems.length > 0) {
      setNavigationStack([...navigationStack, currentLevel]);
      setCurrentLevel(item.subItems);
      setCurrentParent(item.label);
    } else {
      console.log('Clicked on:', item.label);
      onClose();
    }
  };

  const handleBackClick = () => {
    if (navigationStack.length > 0) {
      const previousLevel = navigationStack[navigationStack.length - 1];
      setNavigationStack(prev => prev.slice(0, -1));
      setCurrentLevel(previousLevel);
      setCurrentParent(navigationStack.length === 1 ? 'Menu' : 'Previous');
    }
  };

  const handleClose = () => {
    // Reset navigation state when closing
    setCurrentLevel(menuItems);
    setNavigationStack([]);
    setCurrentParent('Menu');
    onClose();
  };

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={handleClose}
      aria-labelledby="drawer-title"
      sx={{
        '& .MuiDrawer-paper': {
          width: '100%',
          boxSizing: 'border-box',
          background: '#fff',
          color: '#111',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
        }}
        role="navigation"
        aria-label="Main navigation menu"
      >
        {/* Header */}
        <Box
          sx={{
            p: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            borderBottom: '1px solid #bbb',
            minHeight: 64,
            background: 'transparent',
          }}
        >
          {navigationStack.length > 0 && (
            <IconButton
              onClick={handleBackClick}
              sx={{
                color: '#111',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                  transform: 'translateX(-2px)',
                },
              }}
              aria-label="Go back to previous menu"
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography
            id="drawer-title"
            variant="h6"
            sx={{
              fontWeight: 600,
              flex: 1,
              transition: 'opacity 0.2s ease-in-out',
              color: '#111',
            }}
          >
            {currentParent}
          </Typography>
        </Box>

        {/* Menu Items */}
        <Box sx={{ flex: 1, overflow: 'auto', background: 'transparent' }}>
          <List sx={{ py: 1 }}>
            {currentLevel.map((item, index) => (
              <ListItem
                key={item.id}
                disablePadding
                sx={{
                  opacity: 0,
                  animation: `slideIn 0.3s ease-out ${index * 0.1}s forwards`,
                  '@keyframes slideIn': {
                    from: {
                      opacity: 0,
                      transform: 'translateX(20px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                }}
              >
                <ListItemButton
                  onClick={() => handleItemClick(item)}
                  sx={{
                    mx: 1,
                    mb: 0.5,
                    borderRadius: 2,
                    backgroundColor: '#fff',
                    color: '#111',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      backgroundColor: '#f4f4f4',
                      color: '#222',
                      transform: 'none',
                    },
                    '&:active': {
                      transform: 'translateX(4px) scale(0.98)',
                    },
                  }}
                  role="menuitem"
                  aria-label={`${item.label}${
                    item.subItems ? ' - has submenu' : ''
                  }`}
                >
                  <ListItemIcon
                    sx={{
                      color: '#555',
                      minWidth: 40,
                      transition: 'transform 0.2s ease-in-out, color 0.2s',
                      '.MuiListItemButton-root:hover &': {
                        transform: 'scale(1.1)',
                        color: '#000',
                      },
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      '& .MuiTypography-root': {
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        color: '#111',
                      },
                    }}
                  />
                  {item.subItems && (
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: '#bbb',
                        transition: 'all 0.2s ease-in-out',
                        '.MuiListItemButton-root:hover &': {
                          backgroundColor: '#111',
                          transform: 'scale(1.2)',
                        },
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            p: 2,
            borderTop: '1px solid #bbb',
            textAlign: 'center',
            background: 'transparent',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              opacity: 0.7,
              fontSize: '0.75rem',
              color: '#555',
            }}
          >
            Navigation Menu
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};
