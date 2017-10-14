import { RouterTestingModule } from '@angular/router/testing';
import { BookDataServiceMock } from '../shared/book-data-mock.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditComponent } from './book-edit.component';
import { BookDataService } from '../shared/book-data.service';

describe('BookEditComponent', () => {
  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ BookEditComponent ],
      providers: [{provide: BookDataService, useClass: BookDataServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
