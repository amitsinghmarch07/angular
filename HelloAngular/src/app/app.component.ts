import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div>Angular String Interpolation<br>Hello like todo,{{ title }}<br>
  <input type="checkbox"[checked] = "isChecked"/>
  <button (click)="add()"> ok </button><br>
  <input type = "text"[(ngModel)] = "title"/>
  </div>
  `,
  styles: ['div { color: red } ']
})
export class AppComponent {
  public title: string = 'Brendan';
  public isChecked = false;
  public value = "";

  public add() {
    alert("clicked");
  }
}
