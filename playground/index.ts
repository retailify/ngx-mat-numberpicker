/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NumberPickerModule }  from '../dist';

@Component({
    selector: 'qs-app',
    template: `<ngx-mat-numberpicker></ngx-mat-numberpicker>`,
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, BrowserAnimationsModule, NumberPickerModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
