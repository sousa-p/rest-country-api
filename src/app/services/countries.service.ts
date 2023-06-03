import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/Country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient: HttpClient) { }
  url: string = "http://localhost:3000/countries";

  getCoutries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.url);
  };

  getCountryByName(name: string): Observable<Country> {
    return this.httpClient.get<Country>(`${this.url}?name=${name}`);
  };

  getBorderCountriesByAphaCode (arr_codes: any): Observable<Country> {
    return this.httpClient.get<Country>(`${this.url}?alpha3Code=${arr_codes.join('&alpha3Code=')}`);
  }
}
