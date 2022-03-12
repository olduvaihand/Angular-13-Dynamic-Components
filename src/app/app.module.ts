import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicSvgDirective } from './dynamic-svg.directive';
import { DynamicSvgComponent } from './dynamic-svg.component';
import { DynamicSvgService, DynamicCircleSvg, DynamicRectSvg, DynamicLineSvg } from './dynamic-svg.service';
import { DynamicHtmlDirective } from './dynamic-html.directive';
import { DynamicHtmlComponent } from './dynamic-html.component';
import { DynamicHtmlService, DynamicUlHtml, DynamicDivHtml, DynamicAHtml } from './dynamic-html.service';


@NgModule({
  declarations: [
    AppComponent,
    DynamicSvgDirective,
    DynamicSvgComponent,
    DynamicCircleSvg,
    DynamicRectSvg,
    DynamicLineSvg,
    DynamicHtmlDirective,
    DynamicHtmlComponent,
    DynamicUlHtml,
    DynamicDivHtml,
    DynamicAHtml,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DynamicSvgService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
