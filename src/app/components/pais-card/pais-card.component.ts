import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pais-card',
  templateUrl: './pais-card.component.html',
  styleUrls: ['./pais-card.component.scss'],
})
export class PaisCardComponent  implements OnInit {
  @Input () country!: any;
  constructor() { }

  ngOnInit() {}

}
