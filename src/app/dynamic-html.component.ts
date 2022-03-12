import { ComponentFactory, Component, OnInit, Type, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';
import { DynamicHtmlDirective } from './dynamic-html.directive';
import { DynamicHtml, DynamicHtmlService, DynamicUlHtml, DynamicDivHtml, DynamicAHtml } from './dynamic-html.service';

@Component({
  selector: 'div.dynamic-html',
  template: `
    <div>
      <h1 class="title">Html</h1>
      <div>Static Content</div>
      <ng-template dynamic-html-directive></ng-template>
    </div>
  `,
  styles: [
      'div { border: 2px solid green; }',
      '.title { font: bold 48px sans-serif; }',
  ]
})
export class DynamicHtmlComponent implements OnInit, OnDestroy {

  @ViewChild(DynamicHtmlDirective, {static: true})
  directive!: DynamicHtmlDirective;

  interval: number|undefined;
  htmls = [DynamicUlHtml, DynamicDivHtml, DynamicAHtml];
  i = 0;

  ngOnInit(): void {
    this.loadComponent();
    this.getComponents();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  loadComponent(): void {
    this.i = (this.i + 1) % this.htmls.length;
    const html = this.htmls[this.i];
    const viewRef = this.directive.viewContainerRef;
    viewRef.clear();
    const componentRef = viewRef.createComponent<DynamicHtml>(html);
  }

  getComponents() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
