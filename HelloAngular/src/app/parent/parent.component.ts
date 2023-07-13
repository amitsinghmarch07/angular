import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  template: `
    <div #item> Parent Component </div>
    <app-child [person]="person"></app-child>
    <button (click)="person.id=5">change id value</button>
    <button (click)="person ={id: 10, name: 'brendon'}">Check with reference change</button>
  `,
  styles: [
    'p {border: 1px solid blue}'
  ]
})
export class ParentComponent {
  person = { id: 1, name: "Hevery" };
}
