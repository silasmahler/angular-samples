import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component'
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { ConfirmCandeactivateGuard } from './book/shared/confirm-candeactivate.guard';

const routes: Routes = [
    {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
    },
    {
    path: 'books', 
    loadChildren: './book/book.module#BookModule',  
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);