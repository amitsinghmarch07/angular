import { Input, Component, EventEmitter, ContentChild, ElementRef, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <p>ID {{person?.id}}</p>
  <p> name {{person?.name}}</p>
  `,
  styles: [
    'p {border: 1px dotted red}'
  ]
})
export class ChildComponent implements OnChanges, DoCheck {
  @Input() person?: { id: number, name: string };

  ngDoCheck(): void {
    console.log("NGDOCHECK");

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("on changes fired", this.person);
  }
}

