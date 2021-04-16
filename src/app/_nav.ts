import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Dishes',
    url: '/dish',
    icon: 'icon-drop'
  },
  {
    name: 'Clients',
    url: '/client',
    icon: 'icon-drop'
  },
];
