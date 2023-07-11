import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Brendan';
  public isChecked = false;
  public value = "";

  public add() {
    alert("clicked");
  }
}
