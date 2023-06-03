import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient: HttpClient) { }
  url: string = "http://localhost:3000/countries";

  getCoutries(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.url);
  };

  getCountryByName(name: string): Observable<Task> {
    return this.httpClient.get<Task>(`${this.url}?name=${name}`);
  }
}
