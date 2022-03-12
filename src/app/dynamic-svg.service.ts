import { Component, ComponentFactory, Input, Injectable, Type } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface DynamicSvg {
  size: number;
}

@Component({
  selector: 'g.dynamic-circle-svg',
  template: `
    <svg x="0" y="0" viewBox="0 0 500 500">
      <circle cx="250" cy="250" [attr.r]="size" fill="black"></circle>
    </svg>
  `
})
export class DynamicCircleSvg implements DynamicSvg {
  @Input() size: number = 100;
}

@Component({
  selector: 'g.dynamic-rect-svg',
  template: `
    <svg x="0" y="0" viewBox="0 0 500 500">
      <rect x="100" y="100" [attr.width]="size" [attr.height]="size * 2" fill="black"></rect>
    </svg>
  `
})
export class DynamicRectSvg implements DynamicSvg {
  @Input() size: number = 100;
}

@Component({
  selector: 'g.dynamic-line-svg',
  template: `
    <svg x="0" y="0" viewBox="0 0 500 500">
      <line x1="0" y1="0" [attr.x2]="size" [attr.y2]="size" stroke="blue"></line>
    </svg>
  `
})
export class DynamicLineSvg implements DynamicSvg {
  @Input() size: number = 100;
}


@Injectable({
  providedIn: 'root'
})
export class DynamicSvgService {

  components = {
      circle: DynamicCircleSvg,
      rect: DynamicRectSvg,
      line: DynamicLineSvg,
  };

  constructor() { }

}
