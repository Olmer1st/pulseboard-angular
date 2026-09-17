import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    title: 'Dashboard — PulseBoard',
    data: { heading: 'Dashboard' },
    loadComponent: () => import('./dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'campaigns',
    title: 'Campaigns — PulseBoard',
    data: { heading: 'Campaigns' },
    loadComponent: () => import('./campaigns/campaigns').then((m) => m.Campaigns),
  },
  {
    path: 'products',
    title: 'Products — PulseBoard',
    data: { heading: 'Products' },
    loadComponent: () => import('./products/products').then((m) => m.Products),
  },
  {
    path: 'reports',
    title: 'Reports — PulseBoard',
    data: { heading: 'Reports' },
    loadComponent: () => import('./reports/reports').then((m) => m.Reports),
  },
  {
    path: 'settings',
    title: 'Settings — PulseBoard',
    data: { heading: 'Settings' },
    loadComponent: () => import('./settings/settings').then((m) => m.Settings),
  },
  { path: '**', redirectTo: 'dashboard' },
];
