import { Component } from '@angular/core';
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

  text: string = '';
  textCount: number = 0;
  maxChars: number = 50;
  displaytext: string = 'You have reached Max character limit';

  onTextChange(event: any) {
    this.text = event.target.value;
    this.textCount = this.text.length;
    if (this.textCount == this.maxChars) {
      alert('You have reached maximum characters');
    } else {
      return;
    }
  }

  isMaxCharsReached(): boolean {
    return this.textCount >= this.maxChars;
  }

}
