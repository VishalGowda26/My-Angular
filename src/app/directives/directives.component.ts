import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  //variablepName : dataType = initialValue;
  age: number = 30;
  ages: number[] = [7, 15, 21, 28, 30, 40, 55, 68];

  state: string = 'Karnataka';
  states: string[] = [
    'Karnataka',
    'Andrapradesh',
    'Telangana',
    'Tamilnadu',
    'Kerala',
  ];

  products: any[] = [
    { pName: 'pen', price: 20, rating: 3 },
    { pName: 'shirt', price: 2000, rating: 4.6 },
    { pName: 'mobile', price: 15000, rating: 4.0 },
    { pName: 'bike', price: 220000, rating: 3.6 },
    { pName: 'car', price: 1000000, rating: 2.6 },
  ];
  
}
