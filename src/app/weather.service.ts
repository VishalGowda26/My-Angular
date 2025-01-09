import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private _httpClient: HttpClient) {}

  getWeather(): Observable<any> {
    return this._httpClient.get(
      'https://api.open-meteo.com/v1/forecast?latitude=17.385044&longitude=78.486671&current_weather=true'
    );
  }
}
