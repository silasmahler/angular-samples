import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { BookDataService } from './book-data.service';

describe('BookDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
      BookDataService,
      MockBackend,
      BaseRequestOptions, {
        provide: HttpClient,
        useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new HttpClient(defaultOptions);
        }
      },
      deps: [MockBackend, BaseRequestOptions]
    ],
    imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([BookDataService], (service: BookDataService) => {
    expect(service).toBeTruthy();
  }));
});
