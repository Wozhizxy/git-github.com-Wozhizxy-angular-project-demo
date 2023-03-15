import { Component, ContentChild, OnInit } from '@angular/core';
import { MarkDirective } from '../mark.directive';

@Component({
  selector: 'app-container',
  template: `
    <button (click)="showContent = !showContent">Toggle</button>
    <div>
      <ng-container *ngIf="showContent">
        <ng-container *ngTemplateOutlet="content.templateRef"></ng-container>
      </ng-container>
    </div>
  `,
})
export class ContainerComponent implements OnInit {
  showContent = false;
  @ContentChild(MarkDirective) content!: MarkDirective;
  constructor() {}

  ngOnInit(): void {}
}
