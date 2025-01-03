import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  products: any[] = [
    { pName: 'pen', price: 20, rating: 3 },
    { pName: 'shirt', price: 2000, rating: 4.6 },
    { pName: 'mobile', price: 15000, rating: 4.0 },
    { pName: 'bike', price: 220000, rating: 3.6 },
    { pName: 'car', price: 1000000, rating: 2.6 },
  ];

  today: any = new Date();
}
