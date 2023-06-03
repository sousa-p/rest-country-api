import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit {
  constructor(private router: ActivatedRoute, private countriesService: CountriesService) {}
  country: any = {};
  borderCountries: any = [];
  name?: string;
  loading: boolean = true;
  
  ngOnInit() {
    this.router.params.subscribe((params: any) => {
      this.countriesService.getCountryByName(params['name']).subscribe (
        country => {
          const response: any = country;
          this.country = response[0];

          (this.country.borders)
          ? this.countriesService.getBorderCountriesByAphaCode(this.country.borders).subscribe (
            borders => {
              this.borderCountries = borders;
              this.loading = false;
            },
            error => {
              console.error(error);
            }
          )
          : this.loading = false;
        },
        error => {
          console.error(error);
        }
      );
    });
  }
}
