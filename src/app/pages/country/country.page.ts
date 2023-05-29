import { Component, OnInit, DoCheck } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit, DoCheck {

  constructor(private location: Location, private router: Router) {}
  country!: any;
  ngOnInit() {
    this.country = this.location.getState();
    (!this.country.name)
    ? this.router.navigate(['/'])
    : null;
  }

  ngDoCheck() {
    this.country = this.location.getState();
  }

}
