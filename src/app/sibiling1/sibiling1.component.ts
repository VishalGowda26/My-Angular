import { Component, Input } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibiling1',
  templateUrl: './sibiling1.component.html',
  styleUrls: ['./sibiling1.component.css'],
})
export class Sibiling1Component {
  count: number = 0;
  constructor(private _commonService: CommonService) {}

  send() {
    this._commonService.countSub.next(this.count);
  }

  @Input() max: number = 0;

  text: string = '';
  textCount: number = 0;

  onTextChange(event: any) {//0
    this.textCount = this.text.length; //
    if (this.textCount == this.max) {
    } else {
      return;
    }
  }
}
