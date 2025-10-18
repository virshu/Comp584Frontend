import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryData } from './country-data';
import { environment } from '../../environments/environment.development';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country',
  imports: [RouterLink],
  templateUrl: './country.html',
  styleUrl: './country.scss'
})
export class Country {
  countries: CountryData[] = [];

  constructor(http: HttpClient) { // dependency injection
    http.get<CountryData[]>(`${environment.apiUrl}/countries`).subscribe(res => {
      this.countries = res;
    })
  } 
}
