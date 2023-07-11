import { Input, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works!<br>
      ParentId is {{parentId}}<br>
      <button (click)="onSubmit()">ok</button>
    </p>
    <app-person-card></app-person-card>
  `,
  styles: [
    'p {border: 1px dotted red}'
  ]
})
export class ChildComponent {
  @Input() parentId!: number;
  @Input() valueChanged = new EventEmitter();

  public onSubmit() {

    this.valueChanged.emit(100)

  }
}
