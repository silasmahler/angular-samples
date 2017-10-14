import { ShoutPipe } from '../shared/shout.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookComponent } from './book.component';
import { BookRoutingModule } from './book.routing';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ConfirmCandeactivateGuard } from './shared/confirm-candeactivate.guard';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
  BookComponent,
  BookListComponent,
  BookDetailComponent,
  BookEditComponent,
  BookNewComponent,
  ShoutPipe
  ],
  providers: [
  ConfirmCandeactivateGuard
  ]
})
export class BookModule { }
