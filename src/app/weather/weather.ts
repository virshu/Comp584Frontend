import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherData } from '../weather-data';
import { MatTable } from '@angular/material/table';
import { MatCellDef } from '@angular/material/table';
import { MatHeaderRow } from '@angular/material/table';
import { MatHeaderRowDef } from '@angular/material/table';
import { MatRow } from '@angular/material/table';
import { MatRowDef } from '@angular/material/table';

@Component({
  selector: 'app-weather',
  imports: [
    MatTable
],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather {
  forecasts: WeatherData[] = [];

  constructor(http: HttpClient) { // dependency injection
    http.get<WeatherData[]>('http://localhost:5145/WeatherForecast').subscribe(res => {
      this.forecasts = res;
      console.log(res);
    })
  } 
}
