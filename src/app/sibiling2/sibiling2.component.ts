import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibiling2',
  templateUrl: './sibiling2.component.html',
  styleUrls: ['./sibiling2.component.css'],
})
export class Sibiling2Component {
  count: number = 0;

  constructor(private _commonService: CommonService) {
    _commonService.countSub.subscribe(
      (data: any) => {
        this.count = data;
        console.log(this.count);
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }
}
