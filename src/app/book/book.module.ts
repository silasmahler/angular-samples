import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookComponent } from './book.component';
import { BookRoutingModule } from './book.routing';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ConfirmCandeactivateGuard } from './shared/confirm-candeactivate.guard';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule
  ],
  declarations: [
  BookComponent,
  BookListComponent,
  BookDetailComponent,
  BookEditComponent],
  providers:[
  ConfirmCandeactivateGuard
  ]
})
export class BookModule { }
