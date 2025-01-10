import { Component } from '@angular/core';
import { PokemonCarouselService } from '../pokemon-carousel.service';

@Component({
  selector: 'app-pokemon-carousel',
  templateUrl: './pokemon-carousel.component.html',
  styleUrls: ['./pokemon-carousel.component.css'],
})
export class PokemonCarouselComponent {
  cards: any = [];

  constructor(private _carouselService: PokemonCarouselService) {
    _carouselService.getCards().subscribe(
      (data: any) => {
        this.cards = data;
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }
}
