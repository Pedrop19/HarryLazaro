import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: 'details', loadComponent: () => import('./domains/shared/components/details/details.component').then(m => m.DetailsComponent) },
    { path: 'list', loadComponent: () => import('./domains/shared/components/list/list.component').then(m => m.ListComponent) },
    { path: '**', loadComponent: () => import('./domains/shared/components/welcome-page/welcome-page.component').then(m => m.WelcomePageComponent) },


];
