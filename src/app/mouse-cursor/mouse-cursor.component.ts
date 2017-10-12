import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.css']
})
export class MouseCursorComponent implements OnInit {

  x: number;
  y: number;
  constructor() {
  }

  ngOnInit() {
  }

  onmousemove($event: MouseEvent): void {
    this.x = $event.clientX;
    this.y = $event.clientY;
  }
}
