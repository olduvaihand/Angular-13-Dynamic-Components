import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: 'g[dynamic-svg-directive]'
})
export class DynamicSvgDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
