import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../weather-data';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  imports: [AsyncPipe],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather implements OnInit {
  //forecasts: WeatherData[] = [];

  fc$!: Observable<WeatherData[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fc$ = this.http.get<WeatherData[]>('http://localhost:5145/WeatherForecast');
    /*
    this.weatherService.getWeatherForecast().subscribe({
      next: result => this.forecasts = result,
      error: error => console.error('There was an error!', error)
    });
    */
  } 
}
