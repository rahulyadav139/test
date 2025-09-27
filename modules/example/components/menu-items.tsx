'use client';

import {
  Menu as MenuIcon,
  ArrowBack as ArrowBackIcon,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Help as HelpIcon,
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
  Language as LanguageIcon,
  Palette as PaletteIcon,
  Storage as StorageIcon,
  Support as SupportIcon,
  Info as InfoIcon,
  ContactSupport as ContactIcon,
} from '@mui/icons-material';

export  interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  subItems?: MenuItem[];
}


export const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <DashboardIcon />,
    subItems: [
      { id: 'analytics', label: 'Analytics', icon: <DashboardIcon /> },
      { id: 'reports', label: 'Reports', icon: <DashboardIcon /> },
      { id: 'metrics', label: 'Metrics', icon: <DashboardIcon /> },
    ],
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: <PersonIcon />,
    subItems: [
      {
        id: 'personal-info',
        label: 'Personal Information',
        icon: <PersonIcon />,
      },
      { id: 'preferences', label: 'Preferences', icon: <PersonIcon /> },
      { id: 'account', label: 'Account Settings', icon: <PersonIcon /> },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <SettingsIcon />,
    subItems: [
      { id: 'general', label: 'General', icon: <SettingsIcon /> },
      { id: 'security', label: 'Security', icon: <SecurityIcon /> },
      {
        id: 'notifications',
        label: 'Notifications',
        icon: <NotificationsIcon />,
      },
      { id: 'language', label: 'Language', icon: <LanguageIcon /> },
      { id: 'theme', label: 'Theme', icon: <PaletteIcon /> },
      { id: 'storage', label: 'Storage', icon: <StorageIcon /> },
    ],
  },
  {
    id: 'help',
    label: 'Help & Support',
    icon: <HelpIcon />,
    subItems: [
      { id: 'faq', label: 'FAQ', icon: <InfoIcon /> },
      { id: 'contact', label: 'Contact Support', icon: <ContactIcon /> },
      { id: 'documentation', label: 'Documentation', icon: <SupportIcon /> },
    ],
  },
];
