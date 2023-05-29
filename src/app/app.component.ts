import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  storage: any = {
    get() {
      return JSON.parse(localStorage.getItem('darkTheme') as string) || false;
    },
    set (value: boolean) {
      localStorage.setItem('darkTheme', JSON.stringify(value));
    }
  };
  darkTheme: boolean = this.storage.get();

  switchTheme () {
    this.darkTheme = !this.darkTheme;
    this.storage.set(this.darkTheme);
  }
}
