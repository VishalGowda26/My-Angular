import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() a: number = 0;
  @Output() bEvent: EventEmitter<number> = new EventEmitter();

  send() {
    this.bEvent.emit(26545768);
  }
  
  // recieving form parent
  @Input() star: string = '';

  // Sending to parent
  moon: string = '';
  @Output() sEvent: EventEmitter<string> = new EventEmitter();

  fromChild() {
    this.sEvent.emit(this.moon);
  }
}
