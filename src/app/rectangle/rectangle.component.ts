import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css'],
})
export class RectangleComponent {
  result: number = 0;
  length: number = 0;
  width: number = 0;

  calculateArea() {
    this.result = this.length * this.width;
    console.log(this.result);
  }
  calculatePerimeter() {
    this.result = 2 * (this.length + this.width);
    console.log(this.result);
  }
}
