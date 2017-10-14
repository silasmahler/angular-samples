import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDataService } from './book/shared/book-data.service';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { BookDetailComponent } from './book/book-detail/book-detail.component'
import { ConfirmCandeactivateGuard } from './book/shared/confirm-candeactivate.guard';
import { TooltipDirective } from './shared/tooltip.directive';
import { ShoutPipe } from './shared/shout.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent,
    TooltipDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
    ],
  providers: [
    BookDataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
