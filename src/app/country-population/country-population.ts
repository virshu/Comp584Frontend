import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CountryPopulationData} from './country-population-data';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-country-population',
  imports: [],
  templateUrl: './country-population.html',
  styleUrl: './country-population.scss'
})
export class CountryPopulation {
  country!: CountryPopulationData;

    constructor(http: HttpClient) {
    http.get<CountryPopulationData>(`${environment.apiUrl}/countries/${17}/population`).subscribe(res => {
      this.country = res;
      console.log(res);
    })
  } 
}
