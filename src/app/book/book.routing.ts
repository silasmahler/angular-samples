import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book.component';

export const routes: Routes = [{
  path: '',//no path here for lazyload
  component: BookComponent,
  children: [{
    path: '',
    component: BookListComponent
  },
  {
    path: ':isbn',
    component: BookDetailComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }

