import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'weather',
  template: `
    <div id="container">
      <h1>{{_city}} Weather</h1>
      <div>
        <img [src]="imageSource"/>
        <h3>Low {{low}} c - High {{high}} c</h3>
      </div>
      <ng-content></ng-content>
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
    }`
  ]
})
export class WeatherComponent
  implements OnChanges, OnInit,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  public _city?: string;
  @Input()
  set city(value: string) { this._city = value == "" ? "Unknown" : value };

  @Input() low!: number;
  @Input() high!: number;
  @Input() condition!: string;

  imageLocation = "../assets/"
  imageSource = ""

  conditionMap: Map<string, string> = new Map();

  constructor() {
    this.conditionMap.set("sunny", "sunny.jpeg");
    this.conditionMap.set("cloudy", "cloudy.jpeg");
    this.conditionMap.set("drizzle-sunny", "drizzle-sunny.jpeg");
    this.conditionMap.set("rainy", "rainy.jpeg");
    this.conditionMap.set("snow", "snow.jpeg");
  }

  ngOnChanges(changes: SimpleChanges): void {
    const condition = changes["condition"].currentValue;
    const value = this.conditionMap.get(condition) ?? "sunny.jpeg";
    this.imageSource = this.imageLocation + value;
  }

  ngOnInit(): void {
    console.log("3. onInit");
  }

  ngDoCheck(): void {
    console.log("4. doCheck");
  }

  ngAfterContentInit(): void {
    console.log("5. afterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("6. after content checked");
  }

  ngAfterViewInit(): void {
    console.log("7. afterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("8. afterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("9. OnDestroy");
  }
}