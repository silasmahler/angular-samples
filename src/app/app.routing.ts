import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component'

export const routes: Routes = [
    {
        path: 'books',
        component: BookListComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/books'
      }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);