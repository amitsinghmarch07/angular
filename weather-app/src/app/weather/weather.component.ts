import { Component, Input } from '@angular/core';

@Component({
  selector: 'weather',
  template: `
    <div id="container ">
      <h1>{{city}} Weather</h1>
      <div>
        <img [src]="imageSource"/>
        <h3>Low {{low}} c - High {{high}} c</h3>
      </div>
    </div>
      weather works!
    
  `,
  styles: [
    `

    div#container {
      display: inline-block;
      border:2px solid gray;
      border-radius: 5px;
      border-shadow: 5px 5px 5px lightgrey;
      padding: 10px;
      text-align: center;
      margin: 10px;

    }
    `
  ]
})
export class WeatherComponent {
  @Input() city?: string;
  @Input() low?: number;
  @Input() high?: number;
  @Input() condition?: string;
  imageSource: string = "";
}