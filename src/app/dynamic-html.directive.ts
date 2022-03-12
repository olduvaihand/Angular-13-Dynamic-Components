import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamic-html-directive]'
})
export class DynamicHtmlDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
