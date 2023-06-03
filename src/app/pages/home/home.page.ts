import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  allCountries?: any;
  filtredCountries?: any;
  countriesOnPage?: any;

  filterParams: any = {
    searchbar: '',
    region: 'all'
  };

  loading: boolean = true;
  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.getCoutries().subscribe(
      countries => {
        this.allCountries! = countries
        this.filtredCountries! = this.allCountries;
        this.countriesOnPage! = this.filtredCountries.slice(0,25);
        this.loading = false;
      },
      error => {
        console.error(error);
      }
    );
  }

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
    }, 500);
  };
}
