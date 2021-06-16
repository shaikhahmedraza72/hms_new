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
    name: 'Master Admin',
    url: '/masterAdmin',
    icon: 'icon-drop'
  },
  {
    name: 'User Login',
    url: '/userLogin',
    icon: 'icon-drop'
  },
  {
    name: 'Dishes',
    url: '/dish',
    icon: 'icon-drop'
  }, {
    name: 'Users',
    url: '/users',
    icon: 'icon-drop'
  },
  {
    name: 'User Feedback',
    url: '/users/user-feedback',
    icon: 'icon-drop'
  },
  
  {
    name: 'Admin-Setting',
    url: '/admin-setting',
    icon: 'icon-drop'
  },


];
