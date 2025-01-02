import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css'],
})
export class CircleComponent {
  radius: number = 0;
  Area: number = 0;
  Perimeter: number = 0;

  circleArea() {
    this.Area = Math.PI * this.radius * this.radius;
    this.Area = Math.ceil(this.Area * 100) / 100;
    console.log(this.Area);
  }

  circlePeri() {
    this.Perimeter = 2 * Math.PI * this.radius;
    this.Perimeter = Math.ceil(this.Perimeter * 100) / 100;
    console.log(this.Perimeter);
  }
}
