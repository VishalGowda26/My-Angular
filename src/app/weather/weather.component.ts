import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  reports: any = {};

  date = new Date();

  constructor(private _weatherService: WeatherService) {
    _weatherService.getWeather().subscribe((data: any) => {
      this.reports = data;
    });
  }

  getStyles() {
    if (this.reports.current_weather.temperature < 0) {
      return { 'background-color': 'blue' };
    } else if (
      this.reports.current_weather.temperature >= 0 &&
      this.reports.current_weather.temperature <= 30
    ) {
      return { 'background-color': 'yellow' };
    } else if (
      this.reports.current_weather.temperature > 30 &&
      this.reports.current_weather.temperature <= 35
    ) {
      return { 'background-color': 'green' };
    } else this.reports.current_weather.temperature > 35;
    return { 'background-color': 'red' };
  }

  checkDay() {
    if (this.reports.current_weather.is_day == 0) {
      return { 'background-color': 'grey' };
    } else if (this.reports.current_weather_units.is_day == '') {
      return { 'background-color': 'white' };
    }
    return;
  }
}
