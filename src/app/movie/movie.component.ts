import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  movies: any = [];

  constructor(private _movieService: MovieService) {
    _movieService.getMovies().subscribe((data: any) => {
      this.movies = data;
    });
  }

  getStars(rating: number): any {
    const fullStars = Math.floor(rating); // Get the integer part of the rating
    const emptyStars = 10 - fullStars; // Calculate the number of empty stars

    // Create an array of full stars (★) and empty stars (☆)
    return [
      ...new Array(fullStars).fill('⭐'), // Full stars
      ...new Array(emptyStars).fill('★'), // Empty stars
    ];
    console.log(fullStars);
  }

  getStar(rating:number){
    return Math.floor(rating);
  }
}
