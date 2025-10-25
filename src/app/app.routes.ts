import { Routes } from '@angular/router';
import { Weather } from './weather/weather';
import { Home } from './home/home';
import { City } from './city/city';
import { Country } from './country/country';
import { CountryPopulation } from './country-population/country-population';

export const routes: Routes = [
    {path: '', pathMatch:'full', component: Home},
    {path: 'weather', component: Weather},
    {path: 'city', component: City},
    {path: 'country', component: Country},
    {path: 'country/:id/population', component: CountryPopulation}
];
