import { Injectable } from '@angular/core';
import {Book} from './book';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BookDataServiceMock {

    books = [
        {
          'title': 'Design Patterns',
          'subtitle': 'Elements of Reusable Object-Oriented Software',
          'isbn': '978-0-20163-361-0',
          // tslint:disable-next-line:max-line-length
          'abstract': 'Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.',
          'numPages': 395,
          'author': 'Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides',
          'publisher': {
            'name': 'Addison-Wesley',
            'url': 'http://www.addison-wesley.de/'
          },
          'id': '978-0-20163-361-0'
        },
        {
          'title': 'REST und HTTP',
          'subtitle': 'Entwicklung und Integration nach dem Architekturstil des Web',
          'isbn': '978-3-86490-120-1',
          // tslint:disable-next-line:max-line-length
          'abstract': 'Das Buch bietet eine theoretisch fundierte, vor allem aber praxistaugliche Anleitung zum professionellen Einsatz von RESTful HTTP. Es beschreibt den Architekturstil REST (Representational State Transfer) und seine Umsetzung im Rahmen der Protokolle des World Wide Web (HTTP, URIs und andere).',
          'numPages': 330,
          'author': 'Stefan Tilkov / Martin Eigenbrodt / Silvia Schreier / Oliver Wolf',
          'publisher': {
            'name': 'dpunkt.verlag',
            'url': 'http://dpunkt.de/'
          }
        },
        {
          'title': 'Eloquent JavaScript',
          'subtitle': 'A Modern Introduction to Programming',
          'isbn': '978-1-59327-584-6',
          // tslint:disable-next-line:max-line-length
          'abstract': 'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
          'numPages': 472,
          'author': 'Marijn Haverbeke',
          'publisher': {
            'name': 'No Starch Press',
            'url': 'https://www.nostarch.com/'
          }
        },
        {
          'isbn': 'd2179991-689e-49cd-b22c-192e3228892f',
          'title': 'Das beste Buch!',
          'author': 'Mr. Awesome',
          'subtitle': '',
          'abstract': 'jojojoj',
          'numPages': 123,
          'publisher': {
            'name': '',
            'url': ''
          },
          'id': 'd2179991-689e-49cd-b22c-192e3228892f'
        },
        {
          'isbn': '5552e900-305e-4ffe-9c7c-915efcc96458',
          'title': 'Test',
          'author': 'LoL',
          'abstract': '',
          'numPages': 123,
          'publisher': {
            'name': '',
            'url': ''
          }
        },
        {
          'isbn': '15ffaaf8-f539-4f47-8798-b3fe6589f55e',
          'title': 'Test',
          'author': 'LoL',
          'abstract': '',
          'numPages': 123,
          'publisher': {
            'name': '',
            'url': ''
          }
        }
      ];

  getBooks() {
    return Observable.of(this.books);
  }

  getBookByIsbn(isbn: string) {
    return Observable.of(this.books[0]);
  }

}
