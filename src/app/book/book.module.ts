import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookComponent } from './book.component';
import { BookRoutingModule } from './book.routing';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  declarations: [
  BookComponent,
  BookListComponent,
  BookDetailComponent]
})
export class BookModule { }
