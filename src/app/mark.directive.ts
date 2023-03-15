import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appMark]',
})
export class MarkDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
