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
    template: `<ngx-mat-numberpicker [min]="1" [max]="6" [default]="1"
                                     [starttext]="'Hello World'" [endtext]="'Hello World'"
                                     [disabled]="true" (onChange)="onValueChanged($event)"></ngx-mat-numberpicker>
               <p>Current Value: {{currentValue}}</p>`,
})
class AppComponent {
    currentValue: number = 1;
    onValueChanged(value: number): void {
        this.currentValue = value;
    }
}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, BrowserAnimationsModule, NumberPickerModule ],
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
