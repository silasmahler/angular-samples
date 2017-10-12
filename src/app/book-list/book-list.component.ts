import { Component, OnInit } from '@angular/core';
import {init} from 'protractor/built/launcher';
import {BookDataService} from "../shared/book-data.service";
import {Book} from "../shared/book";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  booklist = [];
  constructor(private bookDataService: BookDataService) {
    this.booklist = bookDataService.getBooks();  }
  ngOnInit() {
  }
}

export class Publisher {
  name: string;
  url: string;
}


