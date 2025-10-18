import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherData } from '../weather-data';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather {
  forecasts: WeatherData[] = [];

  constructor(http: HttpClient) { // dependency injection
    http.get<WeatherData[]>('http://localhost:5145/WeatherForecast').subscribe(res => {
      this.forecasts = res;
    })
  } 
}
