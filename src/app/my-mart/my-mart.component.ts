import { Component } from '@angular/core';

@Component({
  selector: 'app-my-mart',
  templateUrl: './my-mart.component.html',
  styleUrls: ['./my-mart.component.css'],
})
export class MyMartComponent {
  items: any = [
    { productName: 'pen', price: 10, rating: 3, delivery: 'true' },
    { productName: 'phone', price: 400, rating: 2.5, delivery: 'false' },
    { productName: 'shirt', price: 400, rating: 4, delivery: 'true' },
    { productName: 'cap', price: 200, rating: 5, delivery: 'false' },
    { productName: 'mobile case', price: 300, rating: 2, delivery: 'true' },
    { productName: 'remote', price: 100, rating: 2, delivery: 'false' },
  ];

  words: string = '';
  find() {
    this.items = this.items.filter((item: any) =>
      item.productName.includes(this.words)
    );
    console.log(this.items);
  }

  free_delivery() {
    this.items = this.items.filter((item: any) => item.delivery == 'true');
  }

  price_low() {
    this.items = this.items.sort((a: any, b: any) => a.price - b.price);
  }
  price_high() {
    this.items = this.items.sort((a: any, b: any) => b.price - a.price);
  }

  rate_low() {
    this.items = this.items.sort((a: any, b: any) => a.rating - b.rating);
  }
  rate_high() {
    this.items = this.items.sort((a: any, b: any) => b.rating - a.rating);
  }

  discount() {
    this.items.map((item: any) => {
      item.price = Math.round(item.price / 2);
      return this.items;
    });
  }

  check_delivery() {
    this.items.map((item: any) => {
      if (item.delivery == 'false') {
        item.price = item.price + 40;
      }
      return this.items;
    });
  }

  total_price() {
    let total = this.items.reduce((sum: any, item: any) => sum + item.price, 0);
    alert('Total price is : ' + total);
  }

  cart_items() {
    let totalCart = this.items.reduce(
      (sum: any, items: any, i: any) => i + 1,
      0
    );
    alert('Total cart items are : ' + totalCart);
  }

  name: string = '';
  price: number = 0;
  rate: number = 0;
  del1: string = '';

  add_item() {
    let item = {
      productName: this.name,
      price: this.price,
      rating: this.rate,
      delivery: this.del1,
    };
    this.items.unshift(item);
  }

  delete(i: number) {
    this.items.splice(i, 1);
  }
}
