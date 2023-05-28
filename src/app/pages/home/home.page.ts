import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/api/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  countries: any = (data as any).default;
  countriesFiltred: any = this.countries;
  filterParams: any = {
    searchbar: '',
    region: 'all'
  }
  constructor() { }

  ngOnInit() {}

  filter () {
    (this.filterParams.region != 'all')
    ? this.countriesFiltred = this.countries.filter((country: any) => country.region === this.filterParams.region && country.name.toLowerCase().startsWith(this.filterParams.searchbar))
    : this.countriesFiltred = this.countries.filter((country: any) => country.name.toLowerCase().startsWith(this.filterParams.searchbar))
  }
}
