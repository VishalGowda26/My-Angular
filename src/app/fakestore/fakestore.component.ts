import { Component } from '@angular/core';
import { FakestoreService } from '../fakestore.service';

@Component({
  selector: 'app-fakestore',
  templateUrl: './fakestore.component.html',
  styleUrls: ['./fakestore.component.css'],
})
export class FakestoreComponent {
  products: any = [];
  constructor(private _storeService: FakestoreService) {
    _storeService.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }
}
