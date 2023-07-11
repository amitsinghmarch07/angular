import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <p>
      parent works!
      <input type="number" [(ngModel)]="parentId"/>
      <app-child 
      [parentId]="parentId"
      (valueChanged)="reset($event)">
      </app-child>
      copyright (c), 2023
    </p>
  `,
  styles: [
    'p {border: 1px solid blue}'
  ]
})
export class ParentComponent {
  public parentId: number = 1;

  public reset(arg0: Event) {
    // this.parentId = arg0;
  }
}
