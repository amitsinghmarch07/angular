import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div id="container">
  <weather speak
  city="Mumbai"
  [low]="25"
  [high]="30"
  [condition]= "condition"
  >
  <h6>copyright @2023</h6>
  </weather>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'weather-app';
  condition: string = "sunny"
  constructor() {
    console.log(this.condition!);
  }
}
