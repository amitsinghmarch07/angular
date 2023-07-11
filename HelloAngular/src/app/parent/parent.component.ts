import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <p>
      parent works!
      <input type="number" [(ngModel)]="parentId"/>
      <app-child [parentId]="parentId"></app-child>
    </p>
  `,
  styles: [
    'p {border: 1px solid blue}'
  ]
})
export class ParentComponent {
  public parentId: number = 1;
}
