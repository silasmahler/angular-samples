import { Injectable } from '@angular/core';
import {Book} from './book';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BookDataService {

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`http://localhost:4730/books`)
  }

  getBookByIsbn(isbn: string): Observable<Book>{
    return this.http.get<Book>(`http://localhost:4730/books/${isbn}`);
  }


  updateBook(isbn: string, value: string): Observable<Book>{
    return this.http.patch<Book>(`http://localhost:4730/books/${isbn}`, value);
  }
}
