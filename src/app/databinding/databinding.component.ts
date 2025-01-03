import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent {
  /* Event Binding */
  submit() {
    alert('clicked submit button');
  }
  typing() {
    alert('typing............!');
  }

  isIndian: boolean = false;

  /* Interpolation */
  name: string = 'Vishal';
  age: number = 28;
  email: string = 'connect@vishal.com';

  user: any = {
    name: 'Vishal',
    age: 28,
    email: 'connect@vishal.com',
  };

  /* Two way data-binding */
  phone: string = '+91';

  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  sum() {
    this.result = this.num1 + this.num2;
    console.log(this.result);
  }
}
