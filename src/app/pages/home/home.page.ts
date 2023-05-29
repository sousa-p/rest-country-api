import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/api/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  allCountries: any = (data as any).default;
  filtredCountries: any = this.allCountries;
  countriesOnPage: any = this.filtredCountries.slice(0,25);

  filterParams: any = {
    searchbar: '',
    region: 'all'
  }
  constructor() { }

  ngOnInit() {}

  filter () {
    (this.filterParams.region != 'all')
    ? this.filtredCountries = this.allCountries.filter((country: any) => country.region === this.filterParams.region && country.name.toLowerCase().startsWith(this.filterParams.searchbar))
    : this.filtredCountries = this.allCountries.filter((country: any) => country.name.toLowerCase().startsWith(this.filterParams.searchbar))
    this.countriesOnPage = this.filtredCountries.slice(0,25);
  };

  displayCountries(event: any) {
    setTimeout(() => {
      this.countriesOnPage = this.filtredCountries.slice(0, this.countriesOnPage.length + 25);
      event.target.complete();
      console.log(this.allCountries);
      console.log(this.filtredCountries);
      console.log(this.countriesOnPage);
    }, 500);
  };
}
