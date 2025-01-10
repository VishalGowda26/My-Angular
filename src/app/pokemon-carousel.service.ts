import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonCarouselService {
  constructor(private _httpClient: HttpClient) {}

  getCards(): Observable<any> {
    return this._httpClient.get('https://dummyapi.online/api/pokemon');
  }
}
