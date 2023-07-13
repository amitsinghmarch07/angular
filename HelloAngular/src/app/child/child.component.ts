import { Input, Component, EventEmitter, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works!<br>
      <ng-content></ng-content>
      <!-- <ng-content select="header"></ng-content>
      <ng-content select="main"></ng-content>
      <ng-content select="footer"></ng-content>
      <ng-content select="div#c1"></ng-content> -->
      <ng-content></ng-content>
  `,
  styles: [
    'p {border: 1px dotted red}'
  ]
})
export class ChildComponent {
  @Input() id!: number;
  @Input() valueChanged = new EventEmitter();

  @ContentChild('footer') content?: ElementRef<HTMLElement>;
  public onSubmit() {

    this.valueChanged.emit(100)

  }
}
