import { Component, OnInit } from '@angular/core';
import {init} from 'protractor/built/launcher';
import {BookDataService} from "../shared/book-data.service";
import {Book} from "../shared/book";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  booklist: Observable<Book[]>;
  
  
    constructor(private bookService: BookDataService) {
  
    }
  
    ngOnInit() {
      this.booklist = this.bookService.getBooks()
      console.log(this.booklist)
    }



  }

  export class Publisher{
    constructor(name: string, url: string){}
  }
