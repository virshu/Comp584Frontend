import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CountryPopulationData} from './country-population-data';
import { environment } from '../../environments/environment.development';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-country-population',
  imports: [RouterLink,
    AsyncPipe
  ],
  templateUrl: './country-population.html',
  styleUrl: './country-population.scss'
})
export class CountryPopulation implements OnInit {
  countryPopulation$!: Observable<CountryPopulationData>;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { } 

  ngOnInit(): void {
    let countryID = this.activatedRoute.snapshot.paramMap.get('id');
    this.countryPopulation$ = this.http.get<CountryPopulationData>(`${environment.apiUrl}/countries/${countryID}/population`);
  }
}
