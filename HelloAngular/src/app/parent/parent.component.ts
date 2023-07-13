import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  template: `
    <div #item> Parent Component </div>
    <app-child [id]="1">
    <h6 #footer>copyright, 2023</h6>
    <!-- //<main>wonderful app</main>
    //<header>My App</header>
    //<div id="c1">Content 1</div>
    //<div> content</div> -->

    </app-child>
  `,
  styles: [
    'p {border: 1px solid blue}'
  ]
})
export class ParentComponent implements AfterViewInit {

  @ViewChild(ChildComponent) child?: ChildComponent;
  @ViewChild('item') div?: ElementRef;

  public parentId: number = 1;

  public reset(arg0: Event) {
    // this.parentId = arg0;
  }

  ngAfterViewInit(): void {
    console.log(this.child?.parentId);
  }
}
