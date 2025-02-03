import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  list: string = '';
  arrList: any = [];

  submit() {
    if (this.list !== '') {
      this.arrList.push(this.list);
      console.log(this.arrList);
      this.list = '';
    }
  }

  remove(i: number) {
    this.arrList.splice(i, 1);
  }
}
