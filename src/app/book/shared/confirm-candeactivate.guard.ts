import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BookDetailComponent } from '../book-detail/book-detail.component';

@Injectable()
export class ConfirmCandeactivateGuard implements CanDeactivate<BookDetailComponent> {
  
  canDeactivate(){
    return confirm('Are you sure?');
  }
}
