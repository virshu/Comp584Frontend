import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CountryPopulationData} from './country-population-data';
import { environment } from '../../environments/environment.development';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-population',
  imports: [RouterLink],
  templateUrl: './country-population.html',
  styleUrl: './country-population.scss'
})
export class CountryPopulation implements OnInit {
  countryPopulation!: CountryPopulationData;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { } 

  ngOnInit(): void {
    let countryID = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get<CountryPopulationData>(`${environment.apiUrl}/countries/${countryID}/population`).subscribe(res => {
      this.countryPopulation = res;
      console.log(res);
    })
  }
}
