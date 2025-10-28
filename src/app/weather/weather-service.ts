import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../weather-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    constructor(private http: HttpClient) { }

    getWeatherForecast() : Observable<WeatherData[]> {
        return this.http.get<WeatherData[]>('http://localhost:5145/WeatherForecast');
    }
}
