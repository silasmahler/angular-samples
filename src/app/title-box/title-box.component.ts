import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {until} from 'selenium-webdriver';
import titleContains = until.titleContains;

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent implements OnInit {
  @Input()
   title = '';
  @Output()
  titleClickedEmitter = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit() {
  }

  titleClicked() {
    this.titleClickedEmitter.emit('Der Titel wurde angeklickt!');
  }
}
