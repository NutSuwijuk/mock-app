// components/menuItems.ts

export interface MenuItem {
  label: string;
  path?: string;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    path: '/',
  },
  {
    label: 'Content',
    children: [
      { label: 'Articles', path: '/content/articles' },
      { label: 'Categories', path: '/content/categories' },
    ],
  },
  {
    label: 'Settings',
    path: '/settings',
  },
  
];
