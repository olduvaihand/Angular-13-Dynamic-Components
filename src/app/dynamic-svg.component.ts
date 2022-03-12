import { ComponentFactory, Component, OnInit, Type, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';
import { DynamicSvgDirective } from './dynamic-svg.directive';
import { DynamicSvg, DynamicSvgService, DynamicCircleSvg, DynamicRectSvg, DynamicLineSvg } from './dynamic-svg.service';

@Component({
  selector: 'svg.dynamic-svg',
  template: `
    <svg id="outer" width="500" height="500" viewBox="0 0 500 500">
      <g>
        <rect x="60" y="60" width="200" height="100" fill="gold"></rect>
        <text class="title" [attr.x]="100" [attr.y]="100">Static Content</text>
      </g>
      <g dynamic-svg-directive></g>
    </svg>
  `,
  styles: [
      'svg { border: 2px solid black; }',
      '.title { font: bold 48px sans-serif; }',
  ]
})
export class DynamicSvgComponent implements OnInit, OnDestroy {

  @ViewChild(DynamicSvgDirective, {static: true})
  directive!: DynamicSvgDirective;

  interval: number|undefined;
  svgs = [DynamicCircleSvg, DynamicRectSvg, DynamicLineSvg];
  i = 0;

  ngOnInit(): void {
    this.loadComponent();
    this.getComponents();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  loadComponent(): void {
    this.i = (this.i + 1) % this.svgs.length;
    const svg = this.svgs[this.i];
    const viewRef = this.directive.viewContainerRef;
    viewRef.clear();
    const componentRef = viewRef.createComponent<DynamicSvg>(svg);
    componentRef.instance.size = 200;
  }

  getComponents() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
