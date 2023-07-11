import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div id="container">
  <weather 
  city="Mumbai"
  [low]="25"
  [high]="30"
  condition="sunny"
  />
  </div>
  `,
  styles: [`
   div#container {
      display: inline-block;
      border:2px solid gray;
      border-radius: 5px;
      border-shadow: 5px 5px 5px lightgrey;
      padding: 10px;
      text-align: center;
      margin: 10px;
    }`]
})
export class AppComponent {
  title = 'weather-app';
}
