import { Component } from '@angular/core';
import { PinterestService } from '../pinterest.service';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css'],
})
export class PinterestComponent {
  pictures: any = [];

  constructor(private _pinterestService: PinterestService) {
    _pinterestService.getImages().subscribe((data: any) => {
      this.pictures = data;
      console.log(this.pictures);
    });
  }
}
