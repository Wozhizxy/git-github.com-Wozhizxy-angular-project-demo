import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-container>
      <ng-template appMark>
        <p>Some content</p>
        <p>Some more content</p>
      </ng-template>
    </app-container>
  `,
})
export class AppComponent {
  title = 'project-demo';
}
