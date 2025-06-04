import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'entry',
        loadChildren: () => import('@invoice/core/data-entry-view/data-entry.routing').then(m => m.default)
      },
      {
        path: 'models',
        loadChildren: () => import('@invoice/core/model-info-view/model-info.routing').then(m => m.default)
      }
    ]
  }
];
