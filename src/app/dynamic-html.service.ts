import { Component, ComponentFactory, Input, Injectable, Type } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface DynamicHtml {
}

@Component({
  selector: 'ul.dynamic-ul-html',
  template: `
    <ul>
      <li>Angular</li>
      <li>can be</li>
      <li>confusing</li>
    </ul>
  `
})
export class DynamicUlHtml implements DynamicHtml {
}

@Component({
  selector: 'div.dynamic-div-html',
  template: `
    <div>
      <h2>It's dynamic!</h2>
    </div>
  `
})
export class DynamicDivHtml implements DynamicHtml {
}

@Component({
  selector: 'a.dynamic-a-html',
  template: `
    <a href="http://angular.io">Angular</a>
  `
})
export class DynamicAHtml implements DynamicHtml {
}


@Injectable({
  providedIn: 'root'
})
export class DynamicHtmlService {

  components = {
      ul: DynamicUlHtml,
      div: DynamicDivHtml,
      a: DynamicAHtml,
  };

  constructor() { }

}
