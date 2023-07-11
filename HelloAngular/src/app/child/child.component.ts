import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works!<br>
      ParentId is {{parentId}}
    </p>
  `,
  styles: [
    'p {border: 1px dotted red}'
  ]
})
export class ChildComponent {
  @Input() parentId!: number;
}
