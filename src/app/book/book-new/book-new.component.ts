import { BookDataService } from '../shared/book-data.service';
import { Book } from '../shared/book';
import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {

  form: FormGroup;
  
  constructor(private fb: FormBuilder, private bookService: BookDataService) { }

  ngOnInit() {
  
    this.form = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  onSubmit() {
    
        const book: Book = {
          isbn: '',
          title: this.form.value.title,
          author: this.form.value.author,
          subtitle: this.form.value.subtitle,
          abstract: '',
          numPages: 123,
          publisher: {
            name: '',
            url: ''
          }
        };
    
        this.bookService.createBook(book)
          .subscribe((book: Book) => console.log('Added new book', book));
      }
}
